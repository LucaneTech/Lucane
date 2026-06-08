import { motion } from "framer-motion";
import React from "react";
import { Zap, Shield, Globe, Users } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Livraison rapide",
    stat: "2-4 semaines",
    desc: "Premier prototype en moins de 2 semaines, grâce à une organisation agile rodée.",
    color: "text-dev",
    bg: "bg-dev/10",
    altBg: false,
  },
  {
    icon: Shield,
    title: "Code de qualité",
    stat: "99.9% uptime",
    desc: "Tests automatisés et revues de code systématiques pour une fiabilité maximale.",
    color: "text-design",
    bg: "bg-design/10",
    altBg: true,
  },
  {
    icon: Globe,
    title: "Expertise internationale",
    stat: "6 pays",
    desc: "Présence au Congo et dans la diaspora africaine pour une perspective globale.",
    color: "text-growth",
    bg: "bg-growth/10",
    altBg: true,
  },
  {
    icon: Users,
    title: "Equipe dédiée",
    stat: "+3 ans",
    desc: "Une équipe senior à votre service. Un interlocuteur unique et engagé.",
    color: "text-cloud",
    bg: "bg-cloud/10",
    altBg: false,
  },
];

const WhyUs: React.FC = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-ink dark:text-primary">
            Pourquoi nous choisir
          </h2>
          <p className="mt-5 text-lg text-ink-muted dark:text-slate-300 leading-relaxed">
            Une équipe experte, des choix techniques réfléchis et une exigence
            constante de qualité pour construire des produits durables.
          </p>
        </motion.div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-ink-faint/20 rounded-md overflow-hidden">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const isAlt = reason.altBg;
            return (
              <motion.div
                key={index}
                className={`p-4 md:p-8 ${isAlt ? "bg-surface-alt dark:bg-dark-surface" : "bg-white dark:bg-dark-elevated"} ${
                  index < 2 ? "border-b border-ink-faint/20 dark:border-slate-700" : ""
                } ${index % 2 === 0 ? "md:border-r border-ink-faint/20 dark:border-slate-700" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${reason.bg} mb-4`}
                >
                  <Icon className={`w-6 h-6 ${reason.color}`} />
                </div>

                {/* Stat */}
                <div className={`text-2xl font-bold ${reason.color} mb-1`}>
                  {reason.stat}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-ink mb-2 dark:text-white">
                  {reason.title}
                </h3>

                {/* Desc */}
                <p className="text-ink-muted dark:text-slate-300 text-sm leading-relaxed">
                  {reason.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
