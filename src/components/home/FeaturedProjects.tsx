import React from 'react';
import ProjectSection from '../ProjectSection';


const FeaturedProjects: React.FC = () => {
  const projects = [
  {
    id: 1,
    title: "Edusco — Learning Management System",
    description:
      "Plateforme e-learning complète conçue pour les institutions modernes. Gestion des cours, suivi de performance, tableaux de bord analytiques et expérience utilisateur fluide orientée engagement.",
    image:
      "images/home/edusco.avif",
    technologies: [
      "Django",
      "PostgreSQL",
      "Tailwind CSS",
      "Chart.js",
      "JWT",
      "REST API"
    ],
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
    date: "Avril 2025",
    bgColor: "bg-indigo-50"
  },
  {
    id: 2,
    title: "NovaShop — E-commerce Platform",
    description:
      "Solution e-commerce scalable pensée pour la conversion. Catalogue intelligent, paiement sécurisé Stripe, gestion avancée des commandes et back-office optimisé pour la croissance.",
    image:
      "images/home/second.avif",
    technologies: [
      "Django",
      "Stripe",
      "PostgreSQL",
      "Tailwind CSS",
      "JavaScript"
    ],
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
    date: "Décembre 2024",
    bgColor: "bg-amber-50"
  },
  {
    id: 3,
    title: "CoreAPI — Backend Infrastructure",
    description:
      "API REST haute performance destinée à des applications web et mobiles. Architecture sécurisée, authentification JWT, documentation Swagger et déploiement Docker-ready.",
    image:
      "images/home/info.avif",
    technologies: [
      "FastAPI",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "JWT"
    ],
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
    date: "Janvier 2025",
    bgColor: "bg-emerald-50"
  },
  {
    id: 4,
    title: "EdConnect — Education Web App",
    description:
      "Application web éducative moderne combinant performance et design. Expérience multi-rôles, analytics pédagogiques et interface React pensée pour la clarté et la rapidité.",
    image:
      "images/home/done.avif",
    technologies: [
      "React",
      "Django",
      "SQLite",
      "Tailwind CSS",
      "Chart.js",
      "JWT"
    ],
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
    date: "Janvier 2025",
    bgColor: "bg-slate-50"
  }
];




  return (
    <ProjectSection projects={projects.filter(project => project.featured)} />
  );
};


export default FeaturedProjects;