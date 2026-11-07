/**
 * Contenu des pages HTML générées au build (chargé par scripts/prerender.mjs via Vite).
 * Chaque adresse reçoit ses balises, ses données structurées et une version texte de son contenu,
 * lisible par les robots et les aperçus de liens qui n'exécutent pas JavaScript.
 * React remplace ce contenu dès son démarrage.
 */
import { site, whatsappHref } from "../data/site";
import { services } from "../data/services";
import { offers } from "../data/offers";
import { faqFor } from "../data/faq";
import { values } from "../data/process";
import { projects, type Project } from "../data/projects";
import { PAGES, absolute, indexablePages, projectMeta, type PageMeta } from "./pages";
import { schemaFor } from "./schema";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const a = (href: string, text: string) => `<a href="${esc(href)}">${esc(text)}</a>`;
const ul = (items: string[]) => `<ul>${items.map((i) => `<li>${i}</li>`).join("")}</ul>`;

const NAV = [PAGES.home, PAGES.services, PAGES.projects, PAGES.technologies, PAGES.about, PAGES.contact];

const header = () => `<header><nav aria-label="Navigation principale">${ul(NAV.map((p) => a(p.path, p.crumb)))}</nav></header>`;
const footer = () =>
  `<footer><p>${esc(site.name)} — ${esc(site.positioning)}</p>${ul([
    `E-mail : ${a(`mailto:${site.email}`, site.email)}`,
    `Téléphone : ${a(site.phone.href, site.phone.display)}`,
    `WhatsApp : ${a(whatsappHref(), site.phone.display)}`,
    a(PAGES.legal.path, PAGES.legal.crumb),
    a(PAGES.privacy.path, PAGES.privacy.crumb),
  ])}</footer>`;

const faqHtml = (page: "services" | "about") =>
  `<section><h2>Questions fréquentes</h2>${faqFor(page).map((f) => `<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`).join("")}</section>`;

const servicesHtml = () =>
  `<section><h2>Nos expertises</h2>${services
    .map((s) => `<h3>${esc(s.title)}</h3><p>${esc(s.desc)}</p>${ul(s.features.map(esc))}`)
    .join("")}</section>`;

const projectsHtml = () =>
  `<section><h2>Nos réalisations</h2>${ul(
    projects.map((p) => `${a(`/realisations/${p.slug}`, p.title)}${p.sector ? ` — ${esc(p.sector)}` : ""} : ${esc(p.description)}`)
  )}</section>`;

function body(meta: PageMeta, project?: Project): string {
  let main = `<h1>${esc(meta.h1)}</h1><p>${esc(meta.description)}</p>`;
  if (project) {
    main += `<p>${esc(project.description)}</p>`;
    main += `<h2>Technologies</h2>${ul(project.technologies.map(esc))}`;
    if (project.liveUrl) main += `<p>${a(project.liveUrl, `Voir le site ${project.title}`)}</p>`;
    main += `<p>${a(PAGES.projects.path, "Toutes nos réalisations")}</p>`;
  } else {
    switch (meta.path) {
      case "/":
        main += `<p>${esc(site.positioning)}</p>${servicesHtml()}${projectsHtml()}`;
        break;
      case PAGES.services.path:
        main += servicesHtml();
        main += `<section><h2>Nos formules</h2>${offers
          .map((o) => `<h3>${esc(o.name)}</h3><p>${esc(o.pitch)}</p>${ul(o.includes.map(esc))}`)
          .join("")}</section>`;
        main += faqHtml("services");
        break;
      case PAGES.projects.path:
        main += projectsHtml();
        break;
      case PAGES.about.path:
        main += `<section><h2>Nos valeurs</h2>${values.map((v) => `<h3>${esc(v.title)}</h3><p>${esc(v.desc)}</p>`).join("")}</section>`;
        main += `<section><h2>Où nous sommes</h2><p>Équipe de développeurs au ${esc(site.location.country)}, relais à ${esc(site.location.relay)}. Projets suivis à distance en Afrique, en Europe et dans la diaspora.</p></section>`;
        main += faqHtml("about");
        break;
      case PAGES.contact.path:
        main += `<p>Horaires : ${esc(site.hours)}. Réponse sous ${esc(site.responseTime)}.</p>`;
        break;
    }
    main += `<p>${a(PAGES.contact.path, "Demander un devis gratuit")}</p>`;
  }
  return `${header()}<main>${main}</main>${footer()}`;
}

export interface RouteOutput {
  path: string;
  meta: PageMeta;
  schema: string;
  body: string;
}

/** Toutes les pages à générer (pages indexables + page 404). */
export function routes(): RouteOutput[] {
  const out: RouteOutput[] = indexablePages().map((meta) => {
    const project = projects.find((p) => projectMeta(p).path === meta.path);
    return { path: meta.path, meta, schema: JSON.stringify(schemaFor(meta, project)), body: body(meta, project) };
  });
  out.push({ path: PAGES.notFound.path, meta: PAGES.notFound, schema: JSON.stringify(schemaFor(PAGES.notFound)), body: body(PAGES.notFound) });
  return out;
}

export function sitemap(today: string): string {
  const urls = indexablePages()
    .map(
      (p) =>
        `  <url>\n    <loc>${absolute(p.path)}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority.toFixed(1)}</priority>\n  </url>`
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}
