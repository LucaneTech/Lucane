/**
 * Données structurées schema.org (JSON-LD) : entreprise, site, page, fil d'Ariane,
 * services, FAQ, liste des réalisations et études de cas.
 * Utilisées par useSeo (navigation dans le site) et par les pages HTML générées au build.
 */
import { site } from "../data/site";
import { services } from "../data/services";
import { offers } from "../data/offers";
import { faqFor } from "../data/faq";
import { projects, type Project } from "../data/projects";
import { OG_IMAGE, PAGES, SITE_NAME, SITE_URL, absolute, type PageMeta } from "./pages";

type Json = Record<string, unknown>;

const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;

const socials = () => Object.values(site.socials).filter((u) => u.startsWith("http"));

export function organization(): Json {
  return {
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORG_ID,
    name: SITE_NAME,
    alternateName: "Lucane",
    url: `${SITE_URL}/`,
    logo: { "@type": "ImageObject", url: `${SITE_URL}/logo_color.png`, width: 1200, height: 292 },
    image: OG_IMAGE,
    slogan: site.tagline,
    description: site.positioning,
    email: site.email,
    telephone: site.phone.href.replace("tel:", ""),
    address: { "@type": "PostalAddress", addressCountry: "MA" },
    areaServed: [
      { "@type": "Country", name: "Maroc" },
      { "@type": "Country", name: "République du Congo" },
      { "@type": "Country", name: "République démocratique du Congo" },
      { "@type": "Country", name: "France" },
      { "@type": "Place", name: "Afrique" },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: site.phone.href.replace("tel:", ""),
      email: site.email,
      availableLanguage: ["French"],
      hoursAvailable: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
    },
    knowsAbout: [
      "Création de sites web",
      "Développement d'applications web",
      "Développement d'applications mobiles",
      "Design UX/UI",
      "E-commerce",
      "Référencement naturel (SEO)",
      "Cloud et DevOps",
      "Automatisation",
      "React",
      "TypeScript",
      "Django",
      "Node.js",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services de développement web et mobile",
      itemListElement: services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, description: s.desc } })),
    },
    sameAs: socials(),
  };
}

export function website(): Json {
  return {
    "@type": "WebSite",
    "@id": SITE_ID,
    url: `${SITE_URL}/`,
    name: SITE_NAME,
    description: PAGES.home.description,
    inLanguage: "fr",
    publisher: { "@id": ORG_ID },
  };
}

function breadcrumb(meta: PageMeta, parents: PageMeta[] = []): Json {
  const trail = meta.path === "/" ? [PAGES.home] : [PAGES.home, ...parents, meta];
  return {
    "@type": "BreadcrumbList",
    "@id": `${absolute(meta.path)}#breadcrumb`,
    itemListElement: trail.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.crumb, item: absolute(p.path) })),
  };
}

function webPage(meta: PageMeta, type = "WebPage"): Json {
  return {
    "@type": type,
    "@id": `${absolute(meta.path)}#webpage`,
    url: absolute(meta.path),
    name: meta.title,
    description: meta.description,
    inLanguage: "fr",
    isPartOf: { "@id": SITE_ID },
    about: { "@id": ORG_ID },
    primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE },
    breadcrumb: { "@id": `${absolute(meta.path)}#breadcrumb` },
  };
}

function faqPage(page: "services" | "about", meta: PageMeta): Json {
  return {
    "@type": "FAQPage",
    "@id": `${absolute(meta.path)}#faq`,
    mainEntity: faqFor(page).map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}

function caseStudy(p: Project, meta: PageMeta): Json {
  return {
    "@type": "CreativeWork",
    "@id": `${absolute(meta.path)}#project`,
    name: p.title,
    description: p.description,
    url: absolute(meta.path),
    ...(p.liveUrl ? { sameAs: p.liveUrl } : {}),
    ...(p.year ? { dateCreated: String(p.year) } : {}),
    ...(p.sector ? { about: p.sector } : {}),
    keywords: p.technologies.join(", "),
    creator: { "@id": ORG_ID },
    inLanguage: "fr",
  };
}

/** Graphe JSON-LD complet d'une page. */
export function schemaFor(meta: PageMeta, project?: Project): Json {
  const graph: Json[] = [organization(), website()];
  if (project) {
    graph.push(webPage(meta, "ItemPage"), breadcrumb(meta, [PAGES.projects]), caseStudy(project, meta));
  } else {
    switch (meta.path) {
      case PAGES.services.path:
        graph.push(
          webPage(meta),
          breadcrumb(meta),
          ...services.map((s) => ({
            "@type": "Service",
            "@id": `${absolute(meta.path)}#${s.slug}`,
            name: s.title,
            description: s.desc,
            serviceType: s.title,
            provider: { "@id": ORG_ID },
            areaServed: "Afrique, Europe",
          })),
          {
            "@type": "OfferCatalog",
            "@id": `${absolute(meta.path)}#formules`,
            name: "Formules Lucane Tech",
            itemListElement: offers.map((o) => ({ "@type": "Offer", name: o.name, description: `${o.pitch} ${o.includes.join(", ")}.`, seller: { "@id": ORG_ID } })),
          },
          faqPage("services", meta)
        );
        break;
      case PAGES.about.path:
        graph.push(webPage(meta, "AboutPage"), breadcrumb(meta), faqPage("about", meta));
        break;
      case PAGES.contact.path:
        graph.push(webPage(meta, "ContactPage"), breadcrumb(meta));
        break;
      case PAGES.projects.path:
        graph.push(webPage(meta, "CollectionPage"), breadcrumb(meta), {
          "@type": "ItemList",
          "@id": `${absolute(meta.path)}#list`,
          itemListElement: projects.map((p, i) => ({ "@type": "ListItem", position: i + 1, url: absolute(`/realisations/${p.slug}`), name: p.title })),
        });
        break;
      default:
        graph.push(webPage(meta), breadcrumb(meta));
    }
  }
  return { "@context": "https://schema.org", "@graph": graph };
}
