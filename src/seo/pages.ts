/**
 * Référencement : adresse du site et métadonnées de chaque page (titre, description, titre principal).
 * Source unique pour le site (src/ui/useSeo.ts) et pour les pages HTML générées au build
 * (scripts/prerender.mjs), le plan du site et les données structurées.
 */
import { projects, type Project } from "../data/projects";

export const SITE_URL = "https://lucanetech.com";
export const SITE_NAME = "Lucane Tech";
/** Image de partage 1200 × 630 (générée depuis public/preview.png). */
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
export const OG_IMAGE_ALT = "Lucane Tech, création de sites web et d'applications sur mesure";

export interface PageMeta {
  path: string;
  /** Titre complet de l'onglet et des résultats de recherche (≈ 60 caractères max). */
  title: string;
  /** Description des résultats de recherche (≈ 155 caractères max). */
  description: string;
  /** Titre principal de la page (version statique lisible sans JavaScript). */
  h1: string;
  /** Libellé court dans le fil d'Ariane. */
  crumb: string;
  priority: number;
  changefreq: "weekly" | "monthly" | "yearly";
  noindex?: boolean;
}

export const PAGES = {
  home: {
    path: "/",
    title: "Création de sites web et d'applications | Lucane Tech",
    description:
      "Équipe de développeurs au Maroc et à Brazzaville : sites vitrines, e-commerce, applications web et mobiles sur mesure. Devis gratuit, réponse sous 24 h.",
    h1: "Création de sites web et d'applications sur mesure",
    crumb: "Accueil",
    priority: 1,
    changefreq: "weekly",
  },
  services: {
    path: "/services",
    title: "Site web, application mobile, design UX/UI | Lucane Tech",
    description:
      "Développement web et mobile, design UX/UI, cloud, marketing digital, automatisation et maintenance : nos expertises et nos formules, avec engagements écrits.",
    h1: "Nos services : sites web, applications mobiles et logiciels sur mesure",
    crumb: "Services",
    priority: 0.9,
    changefreq: "monthly",
  },
  projects: {
    path: "/realisations",
    title: "Réalisations : sites web et applications en ligne | Lucane Tech",
    description:
      "Sites vitrines, applications métier et boutique en ligne réalisés par Lucane Tech pour l'agriculture, l'éducation, le tourisme, le commerce et les centres d'appels.",
    h1: "Nos réalisations",
    crumb: "Réalisations",
    priority: 0.9,
    changefreq: "monthly",
  },
  technologies: {
    path: "/technologies",
    title: "Technologies : React, TypeScript, Django, Node.js | Lucane Tech",
    description:
      "React, TypeScript, Django, Node.js, PostgreSQL, Docker : la pile technique de Lucane Tech pour des sites et applications rapides, sûrs et faciles à faire évoluer.",
    h1: "Les technologies que nous utilisons",
    crumb: "Technologies",
    priority: 0.7,
    changefreq: "monthly",
  },
  about: {
    path: "/a-propos",
    title: "À propos : équipe de développeurs au Maroc | Lucane Tech",
    description:
      "Lucane Tech, une équipe de 2 à 3 développeurs basée au Maroc avec un relais à Brazzaville : mission, vision, valeurs et façon de travailler à distance.",
    h1: "À propos de Lucane Tech",
    crumb: "À propos",
    priority: 0.8,
    changefreq: "monthly",
  },
  contact: {
    path: "/contact",
    title: "Contact et devis gratuit sous 24 h | Lucane Tech",
    description:
      "Parlez-nous de votre projet de site web ou d'application : WhatsApp, téléphone, e-mail ou formulaire. Devis gratuit et réponse sous 24 heures.",
    h1: "Contact et devis gratuit",
    crumb: "Contact",
    priority: 0.9,
    changefreq: "yearly",
  },
  legal: {
    path: "/mentions-legales",
    title: "Mentions légales | Lucane Tech",
    description: "Mentions légales du site Lucane Tech : éditeur, hébergement et propriété intellectuelle.",
    h1: "Mentions légales",
    crumb: "Mentions légales",
    priority: 0.2,
    changefreq: "yearly",
  },
  privacy: {
    path: "/confidentialite",
    title: "Politique de confidentialité | Lucane Tech",
    description: "Quelles données le site Lucane Tech collecte, pourquoi, combien de temps et comment exercer vos droits.",
    h1: "Politique de confidentialité",
    crumb: "Confidentialité",
    priority: 0.2,
    changefreq: "yearly",
  },
  notFound: {
    path: "/404",
    title: "Page introuvable | Lucane Tech",
    description: "Cette page n'existe pas ou a été déplacée.",
    h1: "Page introuvable",
    crumb: "Page introuvable",
    priority: 0,
    changefreq: "yearly",
    noindex: true,
  },
} satisfies Record<string, PageMeta>;

const KIND: Record<Project["category"], string> = {
  Web: "site web",
  Application: "application",
  "E-commerce": "boutique en ligne",
  Interne: "projet",
};

const clip = (text: string, max = 155) => (text.length <= max ? text : `${text.slice(0, max - 1).replace(/\s+\S*$/, "")}…`);

/** Métadonnées d'une étude de cas (/realisations/:slug). */
export function projectMeta(p: Project): PageMeta {
  const kind = KIND[p.category];
  return {
    path: `/realisations/${p.slug}`,
    title: `${p.title} : ${kind}${p.sector ? ` (${p.sector.toLowerCase()})` : ""} | ${SITE_NAME}`,
    description: clip(p.description),
    h1: p.title,
    crumb: p.title,
    priority: 0.6,
    changefreq: "yearly",
  };
}

/** Toutes les pages à indexer, dans l'ordre du plan du site. */
export const indexablePages = (): PageMeta[] => [
  ...Object.values(PAGES).filter((p: PageMeta) => !p.noindex),
  ...projects.map(projectMeta),
];

export const absolute = (path: string) => `${SITE_URL}${path === "/" ? "/" : path}`;
