import { Code, PenTool, BarChart3, Cloud, Cog, Wrench, Cpu, Server, ShieldCheck, Smartphone } from "lucide-react";
import CardSection, { type ServiceProp } from "../CardSection";


const expertise: ServiceProp[] = [
  {
    title: "Développement Web",
    description: "Sites modernes, responsives et performants.",
    icon: <Code className="w-12 h-12" />,
    color: "text-indigo-500",
    bgColor: 'bg-indigo-100'
  },
  {
    title: "Design UX/UI",
    description: "Expériences utilisateurs fluides et intuitives.",
    icon: <PenTool className="w-12 h-12" />,
    color: "text-rose-500",
    bgColor: 'bg-rose-100'
  },
  {
    title: "Data Analytics",
    description: "Décisions pilotées par la donnée et insights actionnables.",
    icon: <BarChart3 className="w-12 h-12"/>,
    color: "text-emerald-500", 
    bgColor: "bg-emerald-100"
  },
  {
    title: "Cloud Services",
    description: "Scalabilité, performance et sécurité assurées.",
    icon: <Cloud className="w-12 h-12" />,
    color: "text-sky-500",
    bgColor: 'bg-sky-100'
  },
  {
    title: "Automatisation",
    description: "Gagnez du temps avec des scripts intelligents et workflows automatisés.",
    icon: <Cog className="w-12 h-12"/>,
    color: "text-amber-500", 
    bgColor: "bg-amber-100"
  },
  {
    title: "Maintenance & Support",
    description: "Surveillance proactive et support continu 24/7.",
    icon: <Wrench className="w-12 h-12"/>,
    color: "text-gray-600",
    bgColor: 'bg-gray-100'
  },
  {
    title: "Mobile App Development",
    description: "Applications iOS & Android performantes et design-friendly.",
    icon: <Smartphone className="w-12 h-12" />,
    color: "text-purple-500",
    bgColor: 'bg-purple-100'
  },
  {
    title: "Sécurité Informatique",
    description: "Protection des données, audits et hardening systèmes.",
    icon: <ShieldCheck className="w-12 h-12" />,
    color: "text-red-500",
    bgColor: 'bg-red-100'
  },
  {
    title: "Intelligence Artificielle",
    description: "Solutions IA pour automatiser et prédire intelligemment.",
    icon: <Cpu className="w-12 h-12" />,
    color: "text-teal-500",
    bgColor: 'bg-teal-100'
  },
  {
    title: "DevOps & CI/CD",
    description: "Déploiements rapides, fiables et infrastructure as code.",
    icon: <Server className="w-12 h-12" />,
    color: "text-cyan-500",
    bgColor: 'bg-cyan-100'
  }
];


const Expertise: React.FC = () => {
 

  return (
     <CardSection services={expertise} title="Nos Expertises" />
  );
};

export default Expertise;
