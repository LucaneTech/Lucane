/** Les 7 expertises (textes repris de la page Services) + engagements mesurables. */
export interface Service {
  slug: string;
  title: string;
  desc: string;
  features: string[];
  /** Engagements vérifiables à la livraison (remplacent les indicateurs non prouvés). */
  commitments: string[];
  /** Réalisations en ligne qui illustrent l'expertise (slugs de src/data/projects.ts). */
  projects?: string[];
}

export const services: Service[] = [
  {
    slug: "web",
    projects: ["kfk-agrobusiness", "oralise", "kone-shop"],
    title: "Développement Web",
    desc: "Applications web modernes, performantes et accessibles, optimisées pour le référencement et les Core Web Vitals.",
    features: ["React, Next.js, TypeScript", "APIs REST & GraphQL", "Architecture scalable", "Performance & SEO"],
    commitments: ["Score Lighthouse ≥ 90 mesuré à la livraison", "Site vérifié sur mobile, tablette et ordinateur"],
  },
  {
    slug: "mobile",
    title: "Développement Mobile",
    desc: "Applications mobiles natives et cross-platform pensées pour la performance et une expérience utilisateur de premier rang.",
    features: ["React Native & Expo", "Push notifications & Offline-first", "Publication App Store & Google Play"],
    commitments: ["Accompagnement à la publication sur les stores", "Version de test partagée à chaque étape"],
  },
  {
    slug: "design",
    title: "UX/UI Design",
    desc: "Maquettes modernes et intuitives fondées sur la recherche utilisateur et les meilleures pratiques UX.",
    features: ["Wireframes & prototypes interactifs", "Design system cohérent", "Tests utilisateurs & itérations", "Figma & Storybook"],
    commitments: ["Maquettes validées avant tout développement", "Fichiers Figma remis au client"],
  },
  {
    slug: "cloud",
    projects: ["lucane-filter"],
    title: "Cloud & Infrastructure",
    desc: "Hébergement cloud, déploiement scalable et optimisation des performances pour accompagner votre croissance.",
    features: ["AWS / GCP / Azure", "CI/CD automatisé", "Docker & Kubernetes", "Scalabilité & haute disponibilité"],
    commitments: ["Comptes d'hébergement au nom du client", "Déploiement documenté"],
  },
  {
    slug: "marketing",
    title: "Marketing Digital",
    desc: "Stratégies digitales pour accroître votre visibilité, générer des leads et renforcer votre présence en ligne.",
    features: ["SEO & SEM avancé", "Campagnes multi-canaux", "Analytics & reporting mensuel", "Acquisition & conversion"],
    commitments: ["Rapport mensuel des résultats", "Objectifs fixés ensemble au départ"],
  },
  {
    slug: "automatisation",
    projects: ["lucane-filter", "lucane-crm"],
    title: "Automatisation & Conseil",
    desc: "Automatisation de processus et développement d'outils sur mesure pour améliorer votre productivité.",
    features: ["Scripts & bots métiers", "Intégrations API tierces", "Tableaux de bord analytiques", "Conseil en architecture"],
    commitments: ["Étude gratuite du besoin avant devis", "Code source remis au client"],
  },
  {
    slug: "maintenance",
    title: "Maintenance & Support",
    desc: "Maintenance évolutive, corrections, mises à jour et support continu pour garantir la stabilité de vos solutions.",
    // À VALIDER : « Monitoring 24/7 » et « Corrections < 24h » (textes actuels) ne seront affichés que s'ils sont tenables
    features: ["Monitoring applicatif", "Corrections prioritaires", "Mises à jour de sécurité", "Évolutions fonctionnelles"],
    commitments: ["Délai de réponse inscrit au contrat", "Sauvegardes régulières"],
  },
];
