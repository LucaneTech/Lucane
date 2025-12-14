import React from 'react';
import ProjectSection from '../ProjectSection';


const AllProjects: React.FC = () => {
   const projects = [
  {
    id: 1,
    title: "Edusco – Plateforme EdTech",
    description:
      "Plateforme SaaS d’apprentissage en ligne permettant la gestion des cours, étudiants, évaluations et analytics pédagogiques en temps réel.",
    image:
      "https://images.unsplash.com/photo-1584697964403-b1e1a2f14b9c?q=80&w=1200&auto=format&fit=crop",
    technologies: ["Django", "PostgreSQL", "React", "Chart.js", "Docker"],
    githubUrl: "https://github.com/6code579/Edusco",
    liveUrl: "#",
    featured: true,
    category: "SaaS / EdTech",
    date: "Avril 2025",
    bgColor: "bg-slate-100",
  },

  {
    id: 2,
    title: "E-Commerce Management Platform",
    description:
      "Solution e-commerce complète avec gestion des produits, paiements Stripe, commandes, clients et dashboard business.",
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
    title: "API SaaS – Backend Scalable",
    description:
      "API REST sécurisée pour applications web & mobiles avec authentification JWT, documentation Swagger et déploiement cloud.",
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=1200&auto=format&fit=crop",
    technologies: ["FastAPI", "Python", "PostgreSQL", "Docker", "JWT"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
    category: "Backend / API",
    date: "Janvier 2025",
    bgColor: "bg-slate-100",
  },

  {
    id: 4,
    title: "Portfolio SaaS-Ready",
    description:
      "Site vitrine premium orienté conversion pour développeur / startup avec animations Framer Motion et SEO optimisé.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
    technologies: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    githubUrl: "https://github.com/6code579/Portofolio",
    liveUrl: "https://francisco.lucane.tech",
    category: "Frontend",
    date: "Juillet 2025",
    bgColor: "bg-slate-100",
  },

  {
    id: 5,
    title: "CMS & Content Platform",
    description:
      "Système de gestion de contenu avec éditeur avancé, gestion médias, SEO et workflows éditoriaux.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop",
    technologies: ["Django", "PostgreSQL", "Redis", "Celery"],
    githubUrl: "#",
    liveUrl: "#",
    category: "CMS",
    date: "Août 2024",
    bgColor: "bg-slate-100",
  },

  {
    id: 6,
    title: "Fintech – App de Gestion Financière",
    description:
      "Application mobile de suivi financier avec visualisation des dépenses, budgets intelligents et synchronisation cloud.",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
    technologies: ["React Native", "Node.js", "MongoDB"],
    githubUrl: "#",
    category: "Mobile / Fintech",
    date: "Septembre 2024",
    bgColor: "bg-slate-100",
  },

  {
    id: 7,
    title: "Weather Analytics App",
    description:
      "Application météo avec prévisions avancées, géolocalisation et visualisation des données climatiques.",
    image:
      "https://images.unsplash.com/photo-1501973801540-537f08ccae7b?q=80&w=1200&auto=format&fit=crop",
    technologies: ["React", "OpenWeather API"],
    githubUrl: "https://github.com/6code579/weatherApp",
    liveUrl: "#",
    category: "Web App",
    date: "Février 2025",
    bgColor: "bg-slate-100",
  },

  {
    id: 8,
    title: "Task Manager SaaS",
    description:
      "Outil de productivité avec gestion des tâches, priorités, collaboration et UX orientée performance.",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop",
    technologies: ["Vue.js", "JavaScript"],
    githubUrl: "#",
    liveUrl: "#",
    category: "Productivité",
    date: "Octobre 2024",
    bgColor: "bg-slate-100",
  },

  {
    id: 9,
    title: "EdConnect – Plateforme Éducative",
    description:
      "Plateforme digitale pour établissements scolaires avec gestion académique complète et interface moderne.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    technologies: ["React", "PHP", "MySQL"],
    githubUrl: "https://github.com/6code579/edConnect-React",
    liveUrl: "#",
    category: "EdTech",
    date: "Mars 2025",
    bgColor: "bg-slate-100",
  },

  {
    id: 10,
    title: "Oralise – Plateforme E-Learning",
    description:
      "Plateforme de formation linguistique en ligne avec parcours pédagogiques et expérience utilisateur moderne.",
    image:
      "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=1200&auto=format&fit=crop",
    technologies: ["React", "TypeScript", "Tailwind"],
    githubUrl: "https://github.com/6code579/Oralise",
    liveUrl: "https://oralise.pro",
    category: "E-learning",
    date: "Août 2025",
    bgColor: "bg-slate-100",
  },
];




  return (
    <ProjectSection projects={projects} title='Nos plus pertinents projets' />
  );
};


export default AllProjects;