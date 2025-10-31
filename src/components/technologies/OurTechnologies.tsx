import CardSection from "../CardSection";

const technologies = [
  {
    title: 'React',
    description: "Bibliothèque JavaScript pour construire des interfaces utilisateur dynamiques et réactives.",
    icon: '',
    image: 'icons/react.png',
    color: 'text-sky-500',
    bgColor: 'bg-sky-100 dark:bg-sky-900/30'
  },
  {
    title: 'TypeScript',
    description: "Surcouche de JavaScript qui ajoute un typage statique, idéale pour les projets à grande échelle.",
    icon: '',
    image: 'icons/typescript.png',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30'
  },
  {
    title: 'Node.js',
    description: "Environnement d’exécution côté serveur pour JavaScript, performant et orienté événements.",
    icon: '',
    image: 'icons/nodejs.png',
    color: 'text-green-600',
    bgColor: 'bg-green-100 dark:bg-green-900/30'
  },
  {
    title: 'Tailwind CSS',
    description: "Framework CSS utilitaire pour créer rapidement des interfaces modernes et responsives.",
    icon: '',
    image: 'icons/tailwind.png',
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-100 dark:bg-cyan-900/30'
  },
  {
    title: 'Docker',
    description: "Outil de conteneurisation qui facilite le déploiement et la scalabilité des applications.",
    icon: '',
    image: 'icons/docker.png',
    color: 'text-blue-500',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30'
  },
  {
    title: 'MongoDB',
    description: "Base de données NoSQL orientée documents, parfaite pour les applications rapides et évolutives.",
    icon: '',
    image: 'icons/mongodb.png',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100 dark:bg-emerald-900/30'
  },
  {
    title: 'AWS',
    description: "Plateforme cloud complète pour héberger, déployer et gérer des applications à grande échelle.",
    icon: '',
    image: 'icons/aws.png',
    color: 'text-amber-500',
    bgColor: 'bg-amber-100 dark:bg-amber-900/30'
  },
  {
    title: 'Python',
    description: "Langage polyvalent, utilisé pour le backend, l’analyse de données et l’intelligence artificielle.",
    icon: '',
    image: 'icons/python.png',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100 dark:bg-indigo-900/30'
  },
  {
    title: 'GitHub',
    description: "Plateforme de versionnage et de collaboration pour le code source, indispensable en équipe.",
    icon: '',
    image: '/icons/github.png',
    color: 'text-gray-800 dark:text-gray-200',
    bgColor: 'bg-gray-100 dark:bg-gray-800'
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