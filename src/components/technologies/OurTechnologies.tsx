import CardSection from "../CardSection";

const technologies = [
  {
    title: 'React',
    description: "Bibliothèque JavaScript pour construire des interfaces utilisateur dynamiques et réactives.",
    icon: '',
    imageUrl: 'icons/react.png',
    color: 'text-sky-500',
  },
  {
    title: 'TypeScript',
    description: "Surcouche de JavaScript qui ajoute un typage statique, idéale pour les projets à grande échelle.",
    icon: '',
    imageUrl: 'icons/typescript.png',
    color: 'text-blue-600',
  },
  {
    title: 'Node.js',
    description: "Environnement d’exécution côté serveur pour JavaScript, performant et orienté événements.",
    icon: '',
    imageUrl: 'icons/nodejs.png',
    color: 'text-green-600',
  },
  {
    title: 'Tailwind CSS',
    description: "Framework CSS utilitaire pour créer rapidement des interfaces modernes et responsives.",
    icon: '',
    imageUrl: 'icons/tailwindcss.png',
    color: 'text-cyan-500',
  },
  {
    title: 'Docker',
    description: "Outil de conteneurisation qui facilite le déploiement et la scalabilité des applications.",
    icon: '',
    imageUrl: 'icons/docker.png',
    color: 'text-blue-500',
  },
  {
    title: 'MongoDB',
    description: "Base de données NoSQL orientée documents, parfaite pour les applications rapides et évolutives.",
    icon: '',
    imageUrl: 'icons/mongodb.png',
    color: 'text-emerald-600',
  },
  {
    title: 'AWS',
    description: "Plateforme cloud complète pour héberger, déployer et gérer des applications à grande échelle.",
    icon: '',
    imageUrl: 'icons/aws.png',
    color: 'text-amber-500',
  },
  {
    title: 'Python',
    description: "Langage polyvalent, utilisé pour le backend, l’analyse de données et l’intelligence artificielle.",
    icon: '',
    imageUrl: 'icons/python.png',
    color: 'text-yellow-400',
  },
  {
    title: 'GitHub',
    description: "Plateforme de versionnage et de collaboration pour le code source, indispensable en équipe.",
    icon: '',
    imageUrl: '/icons/github.png',
    color: 'text-black-900 dark:text-black-200',
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