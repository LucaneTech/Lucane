import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { site } from "../data/site";

function setMeta(selector: string, attr: "name" | "property", key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

/**
 * Titre, description, canonique et balises de partage propres à chaque page.
 * Les robots qui exécutent le JavaScript (Google) lisent ces valeurs.
 */
const ROBOTS = "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";

export function useSeo(title: string, description: string, { noindex = false } = {}) {
  const { pathname } = useLocation();

  useEffect(() => {
    const fullTitle = pathname === "/" ? title : `${title} · ${site.name}`;
    const url = `${site.domain}${pathname === "/" ? "/" : pathname}`;
    document.title = fullTitle;
    setMeta('meta[name="robots"]', "name", "robots", noindex ? "noindex, follow" : ROBOTS);
    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[property="og:title"]', "property", "og:title", fullTitle);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:url"]', "property", "og:url", url);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", fullTitle);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [title, description, pathname, noindex]);
}
