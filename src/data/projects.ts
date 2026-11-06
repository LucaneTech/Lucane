/**
 * Réalisations Lucane Tech — source unique (accueil, page Réalisations, études de cas).
 * 11 projets en ligne, repris du portfolio de l'équipe.
 * Les champs `caseStudy` marqués "À FOURNIR" seront remplis avec l'équipe (phase 5).
 */
export type ProjectCategory = "Web" | "Application" | "E-commerce" | "Interne";

export interface CaseStudy {
  context: string;
  challenge: string;
  solution: string;
  result: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  /** Capture plein écran 1440×900 (À FOURNIR pour chaque projet). */
  cover?: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  videoUrl?: string;
  featured?: boolean;
  date?: string;
  year?: number;
  sector?: string;
  bgColor?: string;
  category: ProjectCategory;
  caseStudy?: CaseStudy;
}

const TODO_CASE: CaseStudy = {
  context: "À FOURNIR",
  challenge: "À FOURNIR",
  solution: "À FOURNIR",
  result: "À FOURNIR",
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "kfk-agrobusiness",
    title: "KFK Agrobusiness",
    description:
      "Site vitrine de KFK Agro Business, une entreprise spécialisée dans l'agriculture et l'élevage en République Démocratique du Congo. La plateforme présente les activités et les solutions de l'entreprise à destination des professionnels et entrepreneurs du secteur agroalimentaire congolais.",
    image: "",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/LucaneTech/agrobusiness",
    liveUrl: "https://www.kfkagrobusiness.com/",
    featured: true,
    category: "Web",
    sector: "Agriculture",
    date: "Mai 2026",
    year: 2026,
    bgColor: "",
    caseStudy: TODO_CASE,
  },
  {
    id: 2,
    slug: "active-rise",
    title: "Active Rise",
    description:
      "Site vitrine d'Active Rise, une agence de marketing stratégique accompagnant les entreprises dans leur développement et leur visibilité digitale. Le site met en avant les expertises, les offres de services et les réalisations de l'agence pour aider ses clients à accroître leur croissance commerciale.",
    image: "",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/LucaneTech/Active_rise",
    liveUrl: "https://activerise.netlify.app",
    category: "Web",
    sector: "Marketing",
    date: "Mai 2026",
    year: 2026,
    bgColor: "",
    caseStudy: TODO_CASE,
  },
  {
    id: 3,
    slug: "folio-francisco",
    title: "Folio Francisco",
    description:
      "Portfolio professionnel de Francisco Mouanda, fondateur de Lucane, développeur web full-stack spécialisé dans des technologies modernes telles que Django, Python et JavaScript. Le site met en valeur ses projets, ses compétences techniques et son parcours.",
    image: "",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Daisyui"],
    githubUrl: "https://github.com/LucaneTech/Portofolio",
    liveUrl: "https://francisco.lucane.tech/",
    category: "Interne",
    date: "Avril 2026",
    year: 2026,
    bgColor: "",
  },
  {
    id: 4,
    slug: "trip-manager",
    title: "Trip Manager",
    description:
      "Application web de réservation et de gestion de voyages touristiques conçue pour simplifier l'organisation des séjours et améliorer l'expérience des voyageurs. La plateforme permet de rechercher des destinations, réserver des circuits et hébergements, gérer les itinéraires, suivre les réservations et centraliser les informations des clients via une interface moderne, fluide et sécurisée avec système d'authentification intégré.",
    image: "#",
    technologies: ["Django", "React TS", "Tailwindcss", "JwT", "Axios"],
    githubUrl: "https://github.com/LucaneTech/trip_management",
    videoUrl: "https://res.cloudinary.com/dvjwcal8e/video/upload/v1779129908/Trip_app_zuwcpj.mp4",
    featured: true,
    category: "Application",
    sector: "Tourisme",
    date: "Mai 2026",
    year: 2026,
    bgColor: "bg-white",
    caseStudy: TODO_CASE,
  },
  {
    id: 5,
    slug: "oralise",
    title: "Oralise",
    description:
      "Site web moderne de l'établissement scolaire Oralise, conçu pour présenter l'institution, ses programmes pédagogiques, son corps enseignant et ses actualités. La plateforme offre une interface claire et professionnelle facilitant la communication entre l'école, les élèves et les familles.",
    image: "",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/LucaneTech/Oralise",
    liveUrl: "https://oralise.pro/",
    featured: true,
    category: "Web",
    sector: "Éducation",
    date: "Mai 2026",
    year: 2026,
    bgColor: "",
    caseStudy: TODO_CASE,
  },
  {
    id: 6,
    slug: "lucane-filter",
    title: "Lucane Filter",
    description:
      "Application web de filtrage et gestion de contacts développée pour optimiser les opérations des équipes de call center. L'outil permet de trier, filtrer et organiser efficacement des listes de contacts grâce à une interface simple et sécurisée, avec système d'authentification intégré pour protéger l'accès aux données.",
    image: "#",
    technologies: ["Full Django", "Docker", "Celery", "Pandas", "Django-tailwind", "Pillow"],
    githubUrl: "https://github.com/LucaneTech/contact_filter2026",
    videoUrl: "https://res.cloudinary.com/dvjwcal8e/video/upload/v1779128287/Demo_contactFilter_lwlnyj.mp4",
    category: "Application",
    sector: "Centres d'appels",
    date: "Mars 2026",
    year: 2026,
    bgColor: "bg-white",
    caseStudy: TODO_CASE,
  },
  {
    id: 7,
    slug: "lucane-crm",
    title: "Lucane CRM",
    description:
      "Application web CRM de téléprospection qui permet aux équipes d'appeler, qualifier et suivre leurs prospects au même endroit, vers les pays de leur choix, grâce à un softphone intégré. La plateforme propose plus de 200 pays joignables choisis par l'administrateur, un journal d'appels automatique et des données hébergées en Europe.",
    image: "",
    technologies: ["React", "TypeScript", "Softphone", "API"],
    githubUrl: "",
    liveUrl: "https://lucane-crm.vercel.app",
    category: "Application",
    sector: "Centres d'appels",
    year: 2026,
    caseStudy: TODO_CASE,
  },
  {
    id: 8,
    slug: "hermon-eximia",
    title: "Hermon Eximia",
    description:
      "Site web de Hermon Eximia, une plateforme de conciergerie haut de gamme proposant une gamme complète de services premium sur mesure, pour une clientèle exigeante en quête d'accompagnement personnalisé, alliant excellence, discrétion et qualité de service.",
    image: "",
    technologies: ["React", "TypeScript", "React-i18next", "Tailwind CSS", "Vite", "EmailJS"],
    githubUrl: "https://github.com/LucaneTech/hermon",
    liveUrl: "https://hermon-eximia.com/",
    category: "Web",
    sector: "Conciergerie",
    date: "Avril 2026",
    year: 2026,
    caseStudy: TODO_CASE,
  },
  {
    id: 9,
    slug: "panval-consilium",
    title: "Panval Consilium International",
    description:
      "Site web de Panval Consilium International, un cabinet de conseil stratégique basé au Congo. La plateforme présente ses services de conseil en stratégie d'entreprise, de formation professionnelle et d'accompagnement personnalisé, destinés aux organisations souhaitant renforcer leurs capacités.",
    image: "",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    githubUrl: "",
    liveUrl: "https://panvalconsiliuminter.com/",
    category: "Web",
    sector: "Conseil",
    date: "Avril 2026",
    year: 2026,
    caseStudy: TODO_CASE,
  },
  {
    id: 10,
    slug: "kone-shop",
    title: "Kone Shop",
    description:
      "Landing page e-commerce de Kone Shop, une boutique en ligne proposant une expérience d'achat moderne et intuitive. Le site met en avant les produits phares et les offres de la boutique dans un design épuré et attractif, pensé pour maximiser l'engagement et les conversions.",
    image: "",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    githubUrl: "",
    liveUrl: "https://koneshop.netlify.app",
    category: "E-commerce",
    sector: "Commerce",
    date: "Septembre 2025",
    year: 2025,
    caseStudy: TODO_CASE,
  },
  {
    id: 11,
    slug: "lucane-tech",
    title: "Lucane Tech",
    description:
      "Site officiel de Lucane Tech, l'équipe de développement : présentation de l'équipe, des offres et de la vision de l'entreprise dans un design moderne reflétant l'identité de la marque.",
    image: "",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"],
    githubUrl: "https://github.com/LucaneTech/Lucane",
    liveUrl: "https://lucanetech.netlify.app/",
    category: "Interne",
    date: "Octobre 2025",
    year: 2025,
  },
];

export const featuredProjects = () => projects.filter((p) => p.featured);
export const projectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
export const projectCategories = (): string[] => ["Tous", ...Array.from(new Set(projects.map((p) => p.category)))];
