import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Users,
  Shield,
  Globe,
  Heart,
  Award,
  type LucideIcon,
} from "lucide-react";

interface Value {
  icon: LucideIcon;
  title: string;
  desc: string;
  color: string;
  bg: string;
}

const values: Value[] = [
  {
    icon: Zap,
    title: "Innovation",
    desc: "Nous explorons constamment de nouvelles technologies.",
    color: "text-dev",
    bg: "bg-dev/10",
  },
  {
    icon: Users,
    title: "Collaboration",
    desc: "Le travail d'équipe et l'écoute sont au cœur de notre culture.",
    color: "text-design",
    bg: "bg-design/10",
  },
  {
    icon: Shield,
    title: "Fiabilité",
    desc: "Nos engagements sont respectés, toujours.",
    color: "text-growth",
    bg: "bg-growth/10",
  },
  {
    icon: Globe,
    title: "Impact",
    desc: "Chaque projet doit créer une valeur réelle pour ses utilisateurs.",
    color: "text-cloud",
    bg: "bg-cloud/10",
  },
  {
    icon: Heart,
    title: "Passion",
    desc: "Nous aimons ce que nous faisons et ça se voit.",
    color: "text-design",
    bg: "bg-design/10",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "Nous visons le meilleur dans chaque ligne de code.",
    color: "text-dev",
    bg: "bg-dev/10",
  },
];

const ValuesCultureSection: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-surface-alt">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs uppercase tracking-widest text-primary font-medium">
            Ce qui nous guide
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-ink mt-3">
            Nos <span className="text-primary">valeurs</span> &amp; culture
          </h2>
          <p className="text-ink-muted mt-4 max-w-2xl mx-auto">
            La manière dont nous travaillons définit qui nous sommes. Voici ce
            qui nous guide au quotidien.
          </p>
        </motion.div>

        {/* 2×3 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-transparent hover:border-primary/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div
                  className={`w-12 h-12 rounded-xl ${v.bg} flex items-center justify-center mb-4`}
                >
                  <Icon className={`w-6 h-6 ${v.color}`} />
                </div>
                <h3 className="text-lg font-bold text-ink mb-2">{v.title}</h3>
                <p className="text-ink-muted text-sm leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuesCultureSection;
