import React from 'react';
import ProjectSection from '../ProjectSection';
import edusco from '/images/projects/edusco.svg';
import ecommerce from '/images/projects/ecommerce.svg';
import apiRest from '/images/projects/api-rest.svg';
import portfolio from '/images/projects/portfolio.svg';
import blog from '/images/projects/blog.svg';
import finances from '/images/projects/finances.svg';
import weather from '/images/projects/weather-app.svg';
import taskManager from '/images/projects/task-manager.svg';
import calculator from '/images/projects/calculator.svg';
import edconnect from '/images/projects/edconnect.svg';
import oralise from '/images/projects/oralise.png';
import eemci from  '/images/projects/eemci.png';

const AllProjects: React.FC = () => {
   const projects = [
    {
      id: 1,
      title: 'Edusco - Plateforme Éducative',
      description: 'Plateforme d\'apprentissage en ligne développée avec Django, permettant aux étudiants de suivre des cours, passer des évaluations et suivre leurs progrès. Interface intuitive avec système de gestion des utilisateurs et tableau de bord analytique.',
      image: edusco,
      technologies: ['Django', 'Python', 'PostgreSQL', 'Bootstrap', 'JavaScript', 'Chart.js'],
      githubUrl: 'https://github.com/6code579/Edusco',
      liveUrl: '#',
      featured: true,
      category: 'Web App',
      date: 'Avril 2025',
      bgColor: 'bg-indigo-100'
    },
    {
      id: 2,
      title: 'E-commerce NodeJs, Express',
      description: 'Boutique en ligne complète avec catalogue de produits, panier d\'achat, système de paiement Stripe et interface d\'administration. Gestion des commandes, des utilisateurs et tableau de bord analytique.',
      image: ecommerce,
      technologies: ['Node.js', 'Express', 'MongoDB', 'React', 'Stripe', 'Tailwind CSS'],
      githubUrl: 'https://github.com/6code579/myShop',
      liveUrl: '#',
      featured: true,
      category: 'E-commerce',
      date: 'Decembre 2024',
      bgColor: 'bg-amber-100'
    },
    {
      id: 3,
      title: 'API REST Python',
      description: 'API robuste pour application mobile avec authentification JWT, documentation Swagger, tests automatisés et déploiement Docker. Endpoints pour gestion d\'utilisateurs et de données.',
      image: apiRest,
      technologies: ['FastAPI', 'Python', 'MongoDB', 'JWT', 'Docker', 'PostgreSQL'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true,
      category: 'API',
      date: 'Janvier 2025',
      bgColor: 'bg-emerald-100'
    },
    {
      id: 4,
      title: 'Portfolio React',
      description: 'Site portfolio moderne et responsive développé avec React et Tailwind CSS, intégrant animations fluides, optimisation SEO et design adaptatif. Présentation professionnelle de mes compétences et projets.',
      image: portfolio,
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion'],
      githubUrl: 'https://github.com/6code579/Portofolio',
      liveUrl: 'https://francisco.lucane.tech',
      category: 'Frontend',
      date: 'Juillet 2025',
      bgColor: 'bg-violet-100'
    },
    {
      id: 5,
      title: 'Système de Blog CMS',
      description: 'CMS personnalisé avec éditeur rich-text, gestion des médias, commentaires modérés et optimisation pour les moteurs de recherche. Interface d\'administration intuitive et système de catégories.',
      image: blog,
      technologies: ['Django', 'Python', 'PostgreSQL', 'Redis', 'Celery', 'CKEditor'],
      githubUrl: '#',
      liveUrl: '#',
      category: 'CMS',
      date: 'Août 2024',
      bgColor: 'bg-cyan-100'
    },
    {
      id: 6,
      title: 'App Mobile Finances',
      description: 'Application de gestion financière personnelle avec synchronisation cloud, graphiques interactifs et notifications intelligentes. Suivi des dépenses, budgets et objectifs financiers.',
      image: finances,
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Express', 'Chart.js'],
      githubUrl: '#',
      category: 'Mobile',
      date: 'Septembre 2024',
      bgColor: 'bg-pink-100'
    },
    {
      id: 7,
      title: 'Application Météo',
      description: 'Application météo moderne avec prévisions sur 7 jours, géolocalisation et interface intuitive. Intégration de l\'API OpenWeatherMap et design responsive.',
      image: weather,
      technologies: ['React', 'JavaScript', 'OpenWeatherMap API', 'CSS3', 'Geolocation'],
      githubUrl: 'https://github.com/6code579/weatherApp',
      liveUrl: '#',
      category: 'Web App',
      date: 'Fevrier 2025',
      bgColor: 'bg-sky-100'
    },
    {
      id: 8,
      title: 'Gestionnaire de Tâches',
      description: 'Application de gestion de tâches avec drag & drop, catégories, priorités et rappels. Interface moderne et fonctionnalités avancées de productivité.',
      image: taskManager,
      technologies: ['Vue.js', 'JavaScript', 'LocalStorage', 'CSS3', 'HTML5'],
      githubUrl: '#',
      liveUrl: '#',
      category: 'Web App',
      date: 'Octobre 2024',
      bgColor: 'bg-lime-100'
    },
    {
      id: 9,
      title: 'Calculatrice Scientifique',
      description: 'Calculatrice scientifique complète avec fonctions trigonométriques, logarithmes et conversions d\'unités. Interface moderne et calculs précis.',
      image: calculator,
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Math.js'],
      githubUrl: '#',
      liveUrl: '#',
      category: 'Frontend',
      date: 'Juillet 2024',
      bgColor: 'bg-indigo-100'
    },
    {
      id: 10,
      title: 'EdConnect - Site Éducatif',
      description: 'Site interactif et moderne d\'un établissement scolaire au Congo Brazzaville. Plateforme éducative complète avec gestion des étudiants, cours, professeurs et interface responsive.',
      image: edconnect,
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL'],
      githubUrl: 'https://github.com/6code579/edConnect-React',
      liveUrl: '#',
      category: 'Web App',
      date: 'Mars 2025',
      bgColor: 'bg-blue-100'
    },
    {
      id: 11,
      title: "Oralise",
      description: 'Site d\'un Centre de formation en ligne des langue étrangère',
      image: oralise,
      technologies: ['React', 'TypeScript', 'Tailwindcss', 'DaisyUI'],
      githubUrl: 'https://github.com/6code579/Oralise',
      liveUrl: 'https://oralise.pro',
      category: 'Frontend',
      date: 'Aout 2025',
      bgColor: 'bg-sky-400'
    },
     {
      id: 12,
      title: "EEMCI",
      description: 'Site d\'une Ecole Européenne de Management et de Commerce International',
      image: eemci,
      technologies: ['React', 'TypeScript', 'Tailwindcss', 'DaisyUI'],
      githubUrl: 'https://github.com/6code579/Eemci-Project',
      liveUrl: 'https://eemci.netlify.app/',
      category: 'Backend',
      date: 'Septembre 2025',
      bgColor: 'bg-blue-400'
    }
  ];



  return (
    <ProjectSection projects={projects} title='Nos plus pertinents projets' />
  );
};


export default AllProjects;