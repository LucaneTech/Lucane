import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Code2,
  Smartphone,
  Palette,
  Cloud,
  Lightbulb,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Développement Web",
    desc: "Applications web modernes, rapides et performantes adaptées à vos besoins.",
    color: "text-dev",
    bg: "bg-dev/10",
    link: "/services",
  },
  {
    icon: Smartphone,
    title: "Développement Mobile",
    desc: "Apps iOS et Android natives et cross-platform à fort impact utilisateur.",
    color: "text-dev",
    bg: "bg-dev/10",
    link: "/services",
  },
  {
    icon: Palette,
    title: "UX/UI Design",
    desc: "Interfaces élégantes centrées sur l'expérience et la conversion.",
    color: "text-design",
    bg: "bg-design/10",
    link: "/services",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    desc: "Déploiement, scalabilité et architecture cloud robuste et sécurisée.",
    color: "text-cloud",
    bg: "bg-cloud/10",
    link: "/services",
  },
  {
    icon: Lightbulb,
    title: "Conseil & Stratégie",
    desc: "Accompagnement expert dans votre transformation digitale.",
    color: "text-growth",
    bg: "bg-growth/10",
    link: "/services",
  },
  {
    icon: TrendingUp,
    title: "Growth & Marketing",
    desc: "Stratégies de croissance et acquisition digitale orientées résultats.",
    color: "text-growth",
    bg: "bg-growth/10",
    link: "/services",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 xl:px-24 bg-surface dark:bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
            Ce que nous faisons
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-ink dark:text-white mb-4">
            Nos <span className="text-primary">services</span>
          </h2>
          <p className="text-ink-muted dark:text-slate-200 max-w-xl mx-auto leading-relaxed">
            Des solutions complètes pour construire, lancer et faire croître vos produits digitaux.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="relative  overflow-clip bg-white dark:bg-dark-surface backdrop-blur-lg border border-slate-100 dark:border-slate-700/50 rounded-md p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className={`w-12 h-12 rounded-md shadow-md ${service.bg} flex items-center justify-center mb-4`}>
                <service.icon className={`w-6 h-6 ${service.color}`} />
              </div>
              <h3 className="text-lg font-bold text-ink dark:text-white mb-2">{service.title}</h3>
              <p className="text-sm text-ink-muted dark:text-slate-200 leading-relaxed mb-4 z-2">{service.desc}</p>
              <Link
                to={service.link}
                className={`text-sm font-medium ${service.color} inline-flex items-center gap-1 group-hover:gap-2 transition-all`}
              >
                En savoir plus <ArrowRight className="w-4 h-4" />
              </Link>


              <div className='absolute w-25 h-25 bg-primary/40 rounded-full -bottom-5 -right-2.5 -z-1 border-1 border-white/5 blur-2xl '/>
              <div className='absolute w-15 h-15 bg-gray-300/50 dark:bg-dark rounded-full -top-2 -left-2 -z-1 border-1 border-white/5 blur-lg'/>
            </motion.div>
          ))}  
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
