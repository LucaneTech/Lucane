import React from 'react';
import ProjectSection from '../ProjectSection';


const AllProjects: React.FC = () => {
  const projects = [
  {
    id: 1,
    title: "Edusco – Plateforme EdTech SaaS",
    description:
      "Plateforme SaaS d’apprentissage en ligne permettant aux établissements et formateurs de gérer cours, étudiants, évaluations et statistiques pédagogiques en temps réel.",
    image:
      "https://images.unsplash.com/photo-1584697964403-b1e1a2f14b9c?q=80&w=1200&auto=format&fit=crop",
    technologies: ["Django", "PostgreSQL", "React", "Docker", "Chart.js"],
    githubUrl: "https://github.com/6code579/Edusco",
    liveUrl: "#",
    featured: true,
    category: "SaaS / EdTech",
    date: "Avril 2025",
    bgColor: "bg-slate-100",
  },

  {
    id: 2,
    title: "Plateforme E-commerce sur mesure",
    description:
      "Solution e-commerce complète intégrant gestion des produits, paiements sécurisés, commandes, clients et tableau de bord business.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1200&auto=format&fit=crop",
    technologies: ["Node.js", "Express", "MongoDB", "React", "Stripe"],
    githubUrl: "https://github.com/6code579/myShop",
    liveUrl: "#",
    featured: true,
    category: "E-commerce",
    date: "Décembre 2024",
    bgColor: "bg-slate-100",
  },

  {
    id: 3,
    title: "Site vitrine premium orienté conversion",
    description:
      "Site vitrine moderne conçu pour startups et indépendants, avec UX optimisée, animations fluides et SEO prêt pour la croissance.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/6code579/Portofolio",
    liveUrl: "https://francisco.lucane.tech",
    category: "Frontend / Branding",
    date: "Juillet 2025",
    bgColor: "bg-slate-100",
  },

  {
    id: 4,
    title: "CMS & Plateforme de contenu",
    description:
      "Système de gestion de contenu personnalisé avec éditeur avancé, gestion des médias, SEO intégré et workflows éditoriaux.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop",
    technologies: ["Django", "PostgreSQL", "Redis", "Celery"],
    githubUrl: "#",
    liveUrl: "#",
    category: "CMS / Backend",
    date: "Août 2024",
    bgColor: "bg-slate-100",
  },

  {
    id: 5,
    title: "Task Manager SaaS",
    description:
      "Application SaaS de gestion de tâches orientée productivité, collaboration d’équipe et performance utilisateur.",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop",
    technologies: ["Vue.js", "JavaScript", "API REST"],
    githubUrl: "#",
    liveUrl: "#",
    category: "SaaS / Productivité",
    date: "Octobre 2024",
    bgColor: "bg-slate-100",
  },
];





  return (
    <ProjectSection projects={projects} title='Nos plus pertinents projets' />
  );
};


export default AllProjects;