import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "../../ui/ProjectCard";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  videoUrl?: string;
  featured?: boolean;
  date?: string;
  bgColor?: string;
  category?: string;
}

const projects: Project[] = [
   {
      id: 1,
      title: 'Agrobusiness',
      description: "Site vitrine de KFK Agro Business, une entreprise spécialisée dans l'agriculture et l'élevage en République Démocratique du Congo. La plateforme présente les activités et les solutions de l'entreprise à destination des professionnels et entrepreneurs du secteur agroalimentaire congolais.",
      image: '',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      githubUrl: 'https://github.com/LucaneTech/agrobusiness',
      liveUrl: 'https://www.kfkagrobusiness.com/',
      featured: true,
      category: 'Frontend',
      date: 'Mai 2026',
      bgColor: '',
    },
  {
      id: 2,
      title: 'Active Rise',
      description: "Site vitrine d'Active Rise, une agence de marketing stratégique accompagnant les entreprises dans leur développement et leur visibilité digitale. Le site met en avant les expertises, les offres de services et les réalisations de l'agence pour aider ses clients à accroître leur croissance commerciale.",
      image: '',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      githubUrl: 'https://github.com/LucaneTech/Active_rise',
      liveUrl: 'https://activerise.netlify.app',
      featured: false,
      category: 'Frontend',
      date: 'Mai 2026',
      bgColor: '',
    },

  {
      id: 3,
      title: 'Folio Francisco',
      description: "Portfolio professionnel de Francisco Mouanda, développeur web full-stack spécialisé dans des technologies modernes telles que Django, Laravel, Python et JavaScript. Le site met en valeur ses projets, ses compétences techniques et son parcours, à destination d'entreprises à la recherche d'un développeur web expérimenté.",
      image: '',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Daisyui'],
      githubUrl: 'https://github.com/LucaneTech/Portofolio',
      liveUrl: 'https://francisco.lucane.tech/',
      featured: false,
      category: 'Frontend',
      date: 'Avril 2025',
      bgColor: '',
    },
    {
      id: 4,
      title: 'Trip Manager',
      description: "Application web de réservation et de gestion de voyages touristiques conçue pour simplifier l’organisation des séjours et améliorer l’expérience des voyageurs. La plateforme permet de rechercher des destinations, réserver des circuits et hébergements, gérer les itinéraires, suivre les réservations et centraliser les informations des clients via une interface moderne, fluide et sécurisée avec système d’authentification intégré.",
      image: '#',
      technologies: ['Django', 'React TS', 'Tailwindcss','JwT', 'Axios'],
      githubUrl: 'https://github.com/LucaneTech/trip_management',
      // liveUrl: 'https://contact-filter.up.railway.app/',
      videoUrl: "https://res.cloudinary.com/dvjwcal8e/video/upload/v1779129908/Trip_app_zuwcpj.mp4",
      featured: false,
      category: 'Web App',
      date: 'Mai 2026',
      bgColor: 'bg-white',
    },
   {
      id: 5,
      title: 'Oralise',
      description: "Site web moderne de l'établissement scolaire Oralise, conçu pour présenter l'institution, ses programmes pédagogiques, son corps enseignant et ses actualités. La plateforme offre une interface claire et professionnelle facilitant la communication entre l'école, les élèves et les familles.",
      image: '',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      githubUrl: 'https://github.com/LucaneTech/Oralise',
      liveUrl: 'https://oralise.pro/',
      featured: false,
      category: 'Frontend',
      date: 'Mai 2026',
      bgColor: '',
    },
   

   {
      id: 6,
      title: 'Lucane Filter',
      description: "Application web de filtrage et gestion de contacts développée pour optimiser les opérations des équipes de call center. L'outil permet de trier, filtrer et organiser efficacement des listes de contacts grâce à une interface simple et sécurisée, avec système d'authentification intégré pour protéger l'accès aux données.",
      image: '#',
      technologies: ['Full Django', 'Docker', 'Celery', 'Pandas', 'Django-tailwind', 'Pillow'],
      githubUrl: 'https://github.com/LucaneTech/contact_filter2026',
      // liveUrl: 'https://contact-filter.up.railway.app/',
      videoUrl: "https://res.cloudinary.com/dvjwcal8e/video/upload/v1779128287/Demo_contactFilter_lwlnyj.mp4",
      featured: false,
      category: 'Web App',
      date: 'Mars 2026',
      bgColor: 'bg-white',
    },
];

interface AllProjectsProps {
  filter: string;
}

const AllProjects: React.FC<AllProjectsProps> = ({ filter }) => {
  const filtered =
    filter === "Tous"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section className="py-20 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <motion.p
            className="text-center text-ink-muted py-16 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Aucun projet dans cette catégorie.
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default AllProjects;
