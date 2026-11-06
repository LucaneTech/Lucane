/** Formules. `priceFrom` vide = prix non affiché (décision de l'équipe : À FOURNIR). */
export interface Offer {
  slug: string;
  name: string;
  pitch: string;
  includes: string[];
  priceFrom?: string;
  highlighted?: boolean;
}

export const offers: Offer[] = [
  {
    slug: "presence",
    name: "Présence",
    pitch: "Être trouvé en ligne, vite et bien.",
    includes: ["1 à 3 pages", "Bouton WhatsApp et formulaire", "Hébergement la première année"],
  },
  {
    slug: "vitrine",
    name: "Vitrine",
    pitch: "Un site sur mesure qui inspire confiance.",
    includes: ["5 à 8 pages sur mesure", "SEO de base", "Multilingue possible", "Formation à la prise en main"],
    highlighted: true,
  },
  {
    slug: "boutique",
    name: "Boutique en ligne",
    pitch: "Vendre en ligne, payé par Mobile Money ou carte.",
    includes: ["Catalogue et panier", "Paiement MTN / Airtel via passerelle", "Gestion des commandes"],
  },
  {
    slug: "application",
    name: "Application métier",
    pitch: "Un outil taillé pour votre activité.",
    includes: ["Comptes et rôles", "Tableaux de bord", "Facturation, stock ou rendez-vous", "Version mobile possible"],
  },
  {
    slug: "maintenance",
    name: "Maintenance",
    pitch: "Votre solution suivie et à jour, chaque mois.",
    includes: ["Mises à jour et sauvegardes", "Support WhatsApp", "Petites évolutions incluses"],
  },
];
