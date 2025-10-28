import { Code, PenTool, BarChart3, Cloud, Cog, Wrench, Play, SquarePause } from "lucide-react";
import type { ServiceProp } from "../CardSection";
import CardSection from "../CardSection";

const services: ServiceProp[] = [
  {
    title: "Développement Web",
    description: "Sites modernes et responsives.",
    icon: <Code className="w-12 h-12" />,
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-100'
  },
  {
    title: "Design UX/UI",
    description: "Expériences utilisateurs fluides.",
    icon: <PenTool className="w-12 h-12" />,
    color: "text-rose-500",
    bgColor: 'bg-rose-100'
  },
  {
    title: "Data Analytics",
    description: "Décisions pilotées par la donnée.",
    icon: <BarChart3 className="w-12 h-12"/>,
    color: "text-emerald-500 ", 
    bgColor: "bg-emerald-100"
  },
  {
    title: "Cloud Services",
    description: "Scalabilité et performance assurées.",
    icon: <Cloud className="w-12 h-12" />,
    color: "text-sky-500 ", 
    bgColor: 'bg-sky-100'
  },
  {
    title: "Automatisation",
    description: "Gagnez du temps avec des scripts smart.",
    icon: <Cog className="w-12 h-12"/>,
    color: "text-amber-500 ", 
    bgColor: "bg-amber-100"
  },
  {
    title: "Maintenance",
    description: "Surveillance et support continu.",
    icon: <Wrench className="w-12 h-12"/>,
    color: "text-gray-600",
    bgColor: 'bg-gray-100'
  },
];

const ServicesSection: React.FC = () => {
 

  return (
    <CardSection services={services} title="Nos Services" />
  );
};

export default ServicesSection;
