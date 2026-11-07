import { useEffect } from "react";
import { OG_IMAGE, OG_IMAGE_ALT, absolute, type PageMeta } from "../seo/pages";
import { schemaFor } from "../seo/schema";
import type { Project } from "../data/projects";

const ROBOTS = "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";

function setMeta(attr: "name" | "property", key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

function setLink(rel: string, href: string, extra?: Record<string, string>) {
  const selector = `link[rel="${rel}"]${extra ? Object.entries(extra).map(([k, v]) => `[${k}="${v}"]`).join("") : ""}`;
  let el = document.head.querySelector<HTMLLinkElement>(selector);
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    Object.entries(extra ?? {}).forEach(([k, v]) => el!.setAttribute(k, v));
    document.head.appendChild(el);
  }
  el.href = href;
}

/**
 * Titre, description, canonique, balises de partage et données structurées de la page.
 * Les mêmes valeurs sont écrites dans les pages HTML générées au build (scripts/prerender.mjs),
 * ce hook les tient à jour quand on navigue dans le site.
 */
export function useSeo(meta: PageMeta, project?: Project) {
  useEffect(() => {
    const url = absolute(meta.path === "/404" ? window.location.pathname : meta.path);
    document.title = meta.title;
    setMeta("name", "robots", meta.noindex ? "noindex, follow" : ROBOTS);
    setMeta("name", "description", meta.description);
    setMeta("property", "og:title", meta.title);
    setMeta("property", "og:description", meta.description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:type", project ? "article" : "website");
    setMeta("property", "og:image", OG_IMAGE);
    setMeta("property", "og:image:alt", OG_IMAGE_ALT);
    setMeta("name", "twitter:title", meta.title);
    setMeta("name", "twitter:description", meta.description);
    setLink("canonical", url);
    setLink("alternate", url, { hreflang: "fr" });

    let ld = document.getElementById("ld-page");
    if (!ld) {
      ld = document.createElement("script");
      ld.id = "ld-page";
      ld.setAttribute("type", "application/ld+json");
      document.head.appendChild(ld);
    }
    ld.textContent = JSON.stringify(schemaFor(meta, project));
  }, [meta, project]);
}
