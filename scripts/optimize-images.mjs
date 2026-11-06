/**
 * Optimise les images de public/ :
 *  - convertit en WebP redimensionné chaque image lourde citée par le code (src/, index.html)
 *    et met à jour les chemins dans le code ;
 *  - réduit le favicon et les logos (restent en PNG : onglet, partage, lecture des particules) ;
 *  - liste les images de public/images que plus rien ne cite (--delete pour les supprimer).
 *
 * Usage : node scripts/optimize-images.mjs [--delete]
 */
import { readdir, readFile, writeFile, stat, unlink } from "node:fs/promises";
import { join, relative, extname, sep } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const PUBLIC = join(ROOT, "public");
const RASTER = new Set([".png", ".jpg", ".jpeg"]);
const HEAVY = 150 * 1024;
const DELETE = process.argv.includes("--delete");

async function walk(dir, exts) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p, exts)));
    else if (exts.has(extname(e.name).toLowerCase())) out.push(p);
  }
  return out;
}

const codeFiles = [...(await walk(join(ROOT, "src"), new Set([".ts", ".tsx", ".css"]))), join(ROOT, "index.html")];
const code = new Map();
for (const f of codeFiles) code.set(f, await readFile(f, "utf8"));

/** Suffixe le plus long du chemin public cité dans le code (ex. "design/123.jpg" dans une liste). */
function citedAs(publicPath) {
  const parts = publicPath.split("/");
  for (let i = 0; i < parts.length; i++) {
    const suffix = parts.slice(i).join("/");
    const needle = new RegExp(`["'\`/]${suffix.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}["'\`]`);
    if ([...code.values()].some((t) => needle.test(t))) return suffix;
  }
  return null;
}

const width = (p) => (p.includes("/collaborators/") ? 600 : p.includes("/design") ? 1200 : 1600);

let saved = 0;
const unused = [];
for (const file of await walk(PUBLIC, new Set([...RASTER, ".webp"]))) {
  const pub = relative(PUBLIC, file).split(sep).join("/");
  const ext = extname(file).toLowerCase();
  const { size } = await stat(file);
  const cited = citedAs(pub);

  if (!cited) {
    if (pub.startsWith("images/") && !pub.startsWith("images/team/")) unused.push([pub, size]); // photos d équipe gardées pour plus tard
    continue;
  }

  // Favicon et logos : PNG réduit en place
  if (["favicon.png", "logo_color.png", "logoLight.png"].includes(pub)) {
    const meta = await sharp(file).metadata();
    const target = pub === "favicon.png" ? 512 : 1200;
    if (meta.width > target) {
      const buf = await sharp(file).resize({ width: target }).png({ compressionLevel: 9, palette: pub !== "favicon.png" }).toBuffer();
      await writeFile(file, buf);
      saved += size - buf.length;
      console.log(`réduit   ${pub}  ${meta.width}px → ${target}px  ${(size / 1024) | 0} → ${(buf.length / 1024) | 0} Ko`);
    }
    continue;
  }

  if (!RASTER.has(ext) || size < HEAVY || pub.startsWith("icons/") || pub === "preview.png") continue;

  const outFile = file.slice(0, -ext.length) + ".webp";
  const info = await sharp(file).resize({ width: width(file.split(sep).join("/")), withoutEnlargement: true }).webp({ quality: 78 }).toFile(outFile);
  saved += size - info.size;
  const newCited = cited.slice(0, -ext.length) + ".webp";
  for (const [f, t] of code) {
    const next = t.split(cited).join(newCited);
    if (next !== t) {
      code.set(f, next);
      await writeFile(f, next);
    }
  }
  await unlink(file);
  console.log(`webp     ${pub}  ${(size / 1024) | 0} → ${(info.size / 1024) | 0} Ko`);
}

console.log(`\nGain : ${(saved / 1048576).toFixed(1)} Mo`);
if (unused.length) {
  console.log(`\nImages que plus rien ne cite (${DELETE ? "supprimées" : "relancer avec --delete pour les supprimer"}) :`);
  for (const [p, s] of unused) {
    console.log(`  ${p}  ${(s / 1024) | 0} Ko`);
    if (DELETE) await unlink(join(PUBLIC, p));
  }
}
