import React from "react";
import HeroSection from "../components/projects/HeroSection";
import ProjectSection from "../components/ProjectSection";
import Testamonals from "../components/projects/Testamonals";
import CallAction from "../components/CallAction";


const projects = [
    {
      id: 1,
      title: 'Edusco - Plateforme Éducative',
      description: 'Plateforme d\'apprentissage en ligne développée avec Django, permettant aux étudiants de suivre des cours, passer des évaluations et suivre leurs progrès. Interface intuitive avec système de gestion des utilisateurs.',
      image: "images/site.jpg",
      technologies: ['Django', 'Python', 'SQLite', 'Bootstrap', 'JavaScript', 'Chart.js', 'Jwt'],
      githubUrl: 'https://github.com/francisco-mouanda/edusco-platform',
      liveUrl: 'https://edusco-demo.herokuapp.com',
      featured: true,
      date: 'Avril 2025',
      bgColor: 'bg-indigo-100'
    },
    {
      id: 2,
      title: 'E-commerce Laravel',
      description: 'Boutique en ligne complète avec catalogue de produits, panier d\'achat, système de paiement Stripe et interface d\'administration. Gestion des commandes et des utilisateurs.',
      image: "images/site.jpg",
      technologies: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS'],
      githubUrl: 'https://github.com/francisco-mouanda/laravel-ecommerce',
      liveUrl: 'https://ecommerce-demo.vercel.app',
      featured: true,
      date: 'Decembre 2024',
      bgColor: 'bg-amber-100'
    },
    {
      id: 3,
      title: 'API REST Python',
      description: 'API robuste pour application mobile avec authentification JWT, documentation Swagger, tests automatisés et déploiement Docker. Endpoints pour gestion d\'utilisateurs et de données.',
      image: "images/site.jpg",
      technologies: ['FastAPI', 'Python', 'MongoDB', 'JWT', 'Docker', 'PostgreSQL'],
      githubUrl: 'https://github.com/francisco-mouanda/fastapi-mobile-api',
      liveUrl: 'https://api-docs.swagger.io',
      featured: false,
      date: 'Janvier 2025',
      bgColor: 'bg-emerald-100'
    },
    {
      id: 4,
      title: 'API REST Python',
      description: 'API robuste pour application mobile avec authentification JWT, documentation Swagger, tests automatisés et déploiement Docker. Endpoints pour gestion d\'utilisateurs et de données.',
      image: "images/site.jpg",
      technologies: ['FastAPI', 'Python', 'MongoDB', 'JWT', 'Docker', 'PostgreSQL'],
      githubUrl: 'https://github.com/francisco-mouanda/fastapi-mobile-api',
      liveUrl: 'https://api-docs.swagger.io',
      featured: false,
      date: 'Janvier 2025',
      bgColor: 'bg-main-color'
    },
     {
      id: 5,
      title: 'Edusco - Plateforme Éducative',
      description: 'Plateforme d\'apprentissage en ligne développée avec Django, permettant aux étudiants de suivre des cours, passer des évaluations et suivre leurs progrès. Interface intuitive avec système de gestion des utilisateurs.',
      image: "images/site.jpg",
      technologies: ['Django', 'Python', 'SQLite', 'Bootstrap', 'JavaScript', 'Chart.js', 'Jwt'],
      githubUrl: 'https://github.com/francisco-mouanda/edusco-platform',
      liveUrl: 'https://edusco-demo.herokuapp.com',
      featured: true,
      date: 'Avril 2025',
      bgColor: 'bg-indigo-100'
    },
    {
      id: 6,
      title: 'E-commerce Laravel',
      description: 'Boutique en ligne complète avec catalogue de produits, panier d\'achat, système de paiement Stripe et interface d\'administration. Gestion des commandes et des utilisateurs.',
      image: "images/site.jpg",
      technologies: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS'],
      githubUrl: 'https://github.com/francisco-mouanda/laravel-ecommerce',
      liveUrl: 'https://ecommerce-demo.vercel.app',
      featured: true,
      date: 'Decembre 2024',
      bgColor: 'bg-main-color'
    },
     {
      id: 7,
      title: 'Edusco - Plateforme Éducative',
      description: 'Plateforme d\'apprentissage en ligne développée avec Django, permettant aux étudiants de suivre des cours, passer des évaluations et suivre leurs progrès. Interface intuitive avec système de gestion des utilisateurs.',
      image: "images/site.jpg",
      technologies: ['Django', 'Python', 'SQLite', 'Bootstrap', 'JavaScript', 'Chart.js', 'Jwt'],
      githubUrl: 'https://github.com/francisco-mouanda/edusco-platform',
      liveUrl: 'https://edusco-demo.herokuapp.com',
      featured: true,
      date: 'Avril 2025',
      bgColor: 'bg-secondary-color'
    },
    {
      id: 8,
      title: 'E-commerce Laravel',
      description: 'Boutique en ligne complète avec catalogue de produits, panier d\'achat, système de paiement Stripe et interface d\'administration. Gestion des commandes et des utilisateurs.',
      image: "images/site.jpg",
      technologies: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS'],
      githubUrl: 'https://github.com/francisco-mouanda/laravel-ecommerce',
      liveUrl: 'https://ecommerce-demo.vercel.app',
      featured: true,
      date: 'Decembre 2024',
      bgColor: 'bg-amber-100'
    },
  ];
const Projects: React.FC = () => {
  return(
       <>
        {/**Hero section */}
        <HeroSection />

        {/** Project Section */}
        <ProjectSection projects={projects} title="Projets Portfolio" description="De l’idée au produit fini, nos projets incarnent l’agilité et l’audace. Nous construisons des solutions numériques qui transforment les ambitions en impact réel."/>

        {/** Testimonials Section */}
        <Testamonals />

        {/** CallAction section */}
        <CallAction title={"Prêt à construire quelque chose d’extraordinaire ?"} description={"We are a software development agency passionate about crafting innovative digital solutions that drive growth and transform businesses."} label={"Commençons aujourd'hui!"} to={"/contact"}/>
       </>
  ) 
}

export default Projects;