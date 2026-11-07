import { projects } from "./projects";
/**
 * Identité, coordonnées et chiffres de Lucane Tech — source unique pour tout le site.
 *
 * RÈGLE DE CONFIANCE : un chiffre ne s'affiche que si sa `source` est renseignée.
 * Les valeurs marquées "À FOURNIR" sont filtrées par `verifiedFacts()` et n'apparaissent pas.
 */

export const site = {
  name: "Lucane Tech",
  shortName: "Lucane",
  tagline: "Build. Launch. Grow.",
  signature: "Built with passion. Shipped for impact.",
  /** Positionnement : une équipe, pas un freelance. */
  positioning:
    "Équipe de développeurs : sites, applications web et mobiles, logiciels sur mesure pour les entreprises qui veulent grandir.",
  domain: "https://lucane.tech", // À VÉRIFIER : le domaine ne répondait pas le 2026-11-06 (site actuel : lucanetech.netlify.app)
  email: "lucanetech@gmail.com",
  phone: { display: "(+212) 781 343 642", href: "tel:+212781343642" },
  whatsapp: {
    number: "212781343642",
    message: "Bonjour Lucane Tech, je souhaite parler d'un projet.",
  },
  hours: "Lun–Ven, 9h–18h (heure du Maroc)",
  responseTime: "24 heures",
  /** À FOURNIR : ville et statut légal exacts. */
  location: { city: "À FOURNIR", country: "Maroc", relay: "Brazzaville (partenaire local)" },
  legal: { status: "À FOURNIR", registration: "À FOURNIR" },
  socials: {
    github: "https://github.com/LucaneTech",
    facebook: "https://www.facebook.com/profile.php?id=61583245903926",
    instagram: "https://www.instagram.com/lucane.tech/",
    linkedin: "À FOURNIR", // page entreprise à créer ou confirmer
  },
} as const;

export const whatsappHref = () =>
  `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(site.whatsapp.message)}`;

export interface Fact {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  /** D'où vient le chiffre. "À FOURNIR" = non affiché. */
  source: string;
}

export const facts: Fact[] = [
  { value: projects.length, label: "projets en ligne", source: "src/data/projects.ts (liste publique, calculé)" },
  { value: 0, suffix: "+", label: "clients accompagnés", source: "À FOURNIR" },
  { value: 0, label: "pays clients", source: "À FOURNIR" },
  { value: 0, suffix: "+", label: "années d'activité", source: "À FOURNIR" },
];

/** Chiffres affichables : uniquement ceux dont la source est connue. */
export const verifiedFacts = () => facts.filter((f) => f.source !== "À FOURNIR" && f.value > 0);
