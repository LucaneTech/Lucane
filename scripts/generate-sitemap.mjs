/**
 * Génère public/sitemap.xml à partir des pages et des études de cas (src/data/projects.ts).
 * Lancé automatiquement avant chaque build (script "prebuild" de package.json).
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const DOMAIN = "https://lucane.tech"; // même valeur que site.domain (src/data/site.ts)

const pages = [
  { path: "/", priority: "1.0" },
  { path: "/services", priority: "0.9" },
  { path: "/realisations", priority: "0.9" },
  { path: "/technologies", priority: "0.7" },
  { path: "/a-propos", priority: "0.8" },
  { path: "/contact", priority: "0.9" },
  { path: "/mentions-legales", priority: "0.2" },
  { path: "/confidentialite", priority: "0.2" },
];

// Les slugs sont lus dans le fichier de données (pas d'import TypeScript ici).
const projectsSource = readFileSync(join(root, "src/data/projects.ts"), "utf8");
const slugs = [...projectsSource.matchAll(/slug:\s*"([a-z0-9-]+)"/g)].map((m) => m[1]);
slugs.forEach((slug) => pages.push({ path: `/realisations/${slug}`, priority: "0.6" }));

const today = new Date().toISOString().slice(0, 10);
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map((p) => `  <url>\n    <loc>${DOMAIN}${p.path}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${p.priority}</priority>\n  </url>`)
  .join("\n")}
</urlset>
`;

writeFileSync(join(root, "public/sitemap.xml"), xml);
console.log(`sitemap.xml : ${pages.length} adresses`);
