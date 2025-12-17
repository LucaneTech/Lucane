import { Code, PenTool, BarChart3, Cloud, Cog, Wrench } from "lucide-react";
import type { ServiceProp } from "../CardSection";
import CardSection from "../CardSection";

const services: ServiceProp[] = [
  {
    title: "Développement Web",
    description: "Sites modernes et responsives.",
    icon: <Code className="w-12 h-12" />,
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-100',
    borderColor: 'border-indigo-300',
    shadowColor: 'shadow-indigo-300/50'
  },
  {
    title: "Design UX/UI",
    description: "Expériences utilisateurs fluides.",
    icon: <PenTool className="w-12 h-12" />,
    color: "text-rose-500",
    bgColor: 'bg-rose-100',
     borderColor: 'border-rose-300',
      shadowColor: 'shadow-rose-300/50'
  },
  {
    title: "Data Analytics",
    description: "Décisions pilotées par la donnée.",
    icon: <BarChart3 className="w-12 h-12"/>,
    color: "text-emerald-500 ", 
    bgColor: "bg-emerald-100",
     borderColor: 'border-emerald-300',
      shadowColor: 'shadow-emerald-300/50'
  },
  {
    title: "Cloud Services",
    description: "Scalabilité et performance assurées.",
    icon: <Cloud className="w-12 h-12" />,
    color: "text-sky-500 ", 
    bgColor: 'bg-sky-100',
     borderColor: 'border-sky-300',
      shadowColor: 'shadow-sky-300/50'
  },
  {
    title: "Automatisation",
    description: "Gagnez du temps avec des scripts smart.",
    icon: <Cog className="w-12 h-12"/>,
    color: "text-amber-500 ", 
    bgColor: "bg-amber-100",
     borderColor: 'border-amber-300',
      shadowColor: 'shadow-amber-300/50'
  },
  {
    title: "Maintenance",
    description: "Surveillance et support continu.",
    icon: <Wrench className="w-12 h-12"/>,
    color: "text-gray-500",
    bgColor: 'bg-gray-100',
    borderColor: 'border-gray-300',
     shadowColor: 'shadow-gray-300/50'
   
  },
];

const ServicesSection: React.FC = () => {
 

  return (
 
      <CardSection services={services} title="Nos Services" description="On développe des solutions web et mobiles adaptées à vos besoins. Notre équipe crée des outils fiables, rapides et faciles à utiliser pour faire passer vos projets au niveau supérieur." />
 
  );
};

export default ServicesSection;
