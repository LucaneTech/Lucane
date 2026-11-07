/**
 * Après `vite build` : écrit une page HTML par adresse (dist/services/index.html, dist/realisations/<slug>/index.html…)
 * avec son titre, sa description, sa canonique, ses balises de partage, ses données structurées
 * et une version texte de son contenu. Écrit aussi dist/404.html et dist/sitemap.xml.
 *
 * Les métadonnées viennent de src/seo/pages.ts : c'est le seul fichier à modifier.
 * Usage : node scripts/prerender.mjs (lancé par `npm run build`).
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");

// Vite charge les fichiers TypeScript du site (données et métadonnées) sans configuration en plus.
const vite = await createServer({ root, logLevel: "error", server: { middlewareMode: true }, appType: "custom" });
const { routes, sitemap } = await vite.ssrLoadModule("/src/seo/prerender.ts");
const { absolute } = await vite.ssrLoadModule("/src/seo/pages.ts");
await vite.close();

const template = await readFile(join(dist, "index.html"), "utf8");
const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const ROBOTS = "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";
const HIDDEN = "position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0";

function setAttr(html, pattern, attr, value) {
  const re = new RegExp(`(<${pattern}[^>]*?\\s${attr}=")[^"]*(")`);
  if (!re.test(html)) throw new Error(`Balise introuvable dans index.html : <${pattern} ${attr}>`);
  return html.replace(re, `$1${esc(value)}$2`);
}

let count = 0;
for (const r of routes()) {
  const { meta } = r;
  const url = absolute(meta.path === "/404" ? "/" : meta.path);
  let html = template.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(meta.title)}</title>`);
  html = setAttr(html, 'meta name="description"', "content", meta.description);
  html = setAttr(html, 'meta name="robots"', "content", meta.noindex ? "noindex, follow" : ROBOTS);
  html = setAttr(html, 'link rel="canonical"', "href", url);
  html = setAttr(html, 'link rel="alternate" hreflang="fr"', "href", url);
  html = setAttr(html, 'meta property="og:title"', "content", meta.title);
  html = setAttr(html, 'meta property="og:description"', "content", meta.description);
  html = setAttr(html, 'meta property="og:url"', "content", url);
  html = setAttr(html, 'meta property="og:type"', "content", meta.path.startsWith("/realisations/") ? "article" : "website");
  html = setAttr(html, 'meta name="twitter:title"', "content", meta.title);
  html = setAttr(html, 'meta name="twitter:description"', "content", meta.description);
  html = html.replace(
    /(<script type="application\/ld\+json" id="ld-page">)[\s\S]*?(<\/script>)/,
    (_, open, close) => `${open}${r.schema.replace(/</g, "\\u003c")}${close}`
  );
  html = html.replace('<div id="root"></div>', `<div id="root"><div style="${HIDDEN}">${r.body}</div></div>`);

  // "/services" → services.html (adresse sans barre finale) et services/index.html (avec barre finale)
  const parts = meta.path.split("/").filter(Boolean);
  const files =
    meta.path === "/"
      ? [join(dist, "index.html")]
      : meta.path === "/404"
        ? [join(dist, "404.html")]
        : [join(dist, ...parts.slice(0, -1), `${parts.at(-1)}.html`), join(dist, ...parts, "index.html")];
  for (const file of files) {
    await mkdir(dirname(file), { recursive: true });
    await writeFile(file, html);
  }
  count++;
}

await writeFile(join(dist, "sitemap.xml"), sitemap(new Date().toISOString().slice(0, 10)));
console.log(`Référencement : ${count} pages HTML générées et sitemap.xml écrit.`);
