import CardSection from "../CardSection";

const technologies = [
  {
    title: 'React',
    description: "Bibliothèque JavaScript pour construire des interfaces utilisateur dynamiques et réactives.",
    icon: '',
    imageUrl: 'icons/react.png',
    color: 'text-sky-500',
    bgColor: 'bg-sky-100 dark:bg-sky-900/30',
    borderColor: 'border-sky-300 dark:border-sky-700'
  },
  {
    title: 'TypeScript',
    description: "Surcouche de JavaScript qui ajoute un typage statique, idéale pour les projets à grande échelle.",
    icon: '',
    imageUrl: 'icons/typescript.png',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    borderColor: 'border-blue-300 dark:border-blue-700'
  },
  {
    title: 'Node.js',
    description: "Environnement d’exécution côté serveur pour JavaScript, performant et orienté événements.",
    icon: '',
    imageUrl: 'icons/nodejs.png',
    color: 'text-green-600',
    bgColor: 'bg-green-100 dark:bg-green-900/30',
    borderColor: 'border-green-300 dark:border-green-700'
  },
  {
    title: 'Tailwind CSS',
    description: "Framework CSS utilitaire pour créer rapidement des interfaces modernes et responsives.",
    icon: '',
    imageUrl: 'icons/tailwindcss.png',
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-100 dark:bg-cyan-900/30',
    borderColor: 'border-cyan-300 dark:border-cyan-700'
  },
  {
    title: 'Docker',
    description: "Outil de conteneurisation qui facilite le déploiement et la scalabilité des applications.",
    icon: '',
    imageUrl: 'icons/docker.png',
    color: 'text-blue-500',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    borderColor: 'border-blue-300 dark:border-blue-700'
  },
  {
    title: 'MongoDB',
    description: "Base de données NoSQL orientée documents, parfaite pour les applications rapides et évolutives.",
    icon: '',
    imageUrl: 'icons/mongodb.png',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100 dark:bg-emerald-900/30',
    borderColor: 'border-emerald-300 dark:border-emerald-700'
  },
  {
    title: 'AWS',
    description: "Plateforme cloud complète pour héberger, déployer et gérer des applications à grande échelle.",
    icon: '',
    imageUrl: 'icons/aws.png',
    color: 'text-amber-500',
    bgColor: 'bg-amber-100 dark:bg-amber-900/30',
    borderColor: 'border-amber-300 dark:border-amber-700'
  },
  {
    title: 'Python',
    description: "Langage polyvalent, utilisé pour le backend, l’analyse de données et l’intelligence artificielle.",
    icon: '',
    imageUrl: 'icons/python.png',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-100 dark:bg-yellow-900/30',
    borderColor: 'border-yellow-300 dark:border-yellow-700'
  },
  {
    title: 'GitHub',
    description: "Plateforme de versionnage et de collaboration pour le code source, indispensable en équipe.",
    icon: '',
    imageUrl: '/icons/github.png',
    color: 'text-gray-800 dark:text-gray-200',
    bgColor: 'bg-gray-100 dark:bg-gray-800/40',
    borderColor: 'border-gray-300 dark:border-gray-700'
  },
  {
    title: 'Django',
    description: "Framework web Python haut niveau qui encourage le développement rapide et propre.",
    icon: '',
    imageUrl: '/icons/django.png',
    color: 'text-green-600 dark:text-green-400',
    bgColor: 'bg-green-600 dark:bg-green-400',
    borderColor: 'border-green-600 dark:border-green-400'
  },
  {
    title: 'PostgreSQL',
    description: "Système de gestion de base de données relationnelle puissant et open-source.",
    icon: '',
    imageUrl: '/icons/postgresql.png',
    color: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-blue-600 dark:bg-blue-400',
    borderColor: 'border-blue-600 dark:border-blue-400'
  }
];





const OurTechnologies = () => {
    return (
        <section>
          

         <CardSection services={technologies} title="Notre pile technologique de base"/>

        
        </section>
    );
};
export default OurTechnologies;