import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion,type Variants, type Transition } from "framer-motion";

import ProjectCard from '../../ui/ProjectCard';
import Button from '../../ui/Button';


const FeaturedProjects: React.FC = () => {
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
      id: 3,
      title: 'API REST Python',
      description: 'API robuste pour application mobile avec authentification JWT, documentation Swagger, tests automatisés et déploiement Docker. Endpoints pour gestion d\'utilisateurs et de données.',
      image: "images/site.jpg",
      technologies: ['FastAPI', 'Python', 'MongoDB', 'JWT', 'Docker', 'PostgreSQL'],
      githubUrl: 'https://github.com/francisco-mouanda/fastapi-mobile-api',
      liveUrl: 'https://api-docs.swagger.io',
      featured: false,
      date: 'Janvier 2025',
      bgColor: 'bg-main-color'
    }
  ];

const transition: Transition = { duration: 0.6, ease: "easeOut" };

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition,
  },
};

const cardVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition,
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};


  return (
    <section id="featured-projects" className="py-20 bg-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="container mx-auto px-6"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Projets <span className="main-color">Récents</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez une sélection de mes derniers projets, alliant innovation technique
            et design moderne pour créer des expériences utilisateur exceptionnelles.
          </p>
        </motion.div>

        <motion.div
          variants={cardVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="text-center">
          <Button label={`Voir tous nos projets`} changeColor='secondary' icon={<ArrowRight className="w-5 h-5 inline-block mr-2" />} />
        </motion.div>
      </motion.div>
    </section>
  );
};


export default FeaturedProjects;