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
}

const values: Value[] = [
  {
    icon: Zap,
    title: "Innovation",
    desc: "Nous explorons constamment de nouvelles technologies.",
    color: "text-dev",
  },
  {
    icon: Users,
    title: "Collaboration",
    desc: "Le travail d'équipe et l'écoute sont au cœur de notre culture.",
    color: "text-design",
  },
  {
    icon: Shield,
    title: "Fiabilité",
    desc: "Nos engagements sont respectés, toujours.",
    color: "text-growth",
  },
  {
    icon: Globe,
    title: "Impact",
    desc: "Chaque projet doit créer une valeur réelle pour ses utilisateurs.",
    color: "text-cloud",
  },
  {
    icon: Heart,
    title: "Passion",
    desc: "Nous aimons ce que nous faisons et ça se voit.",
    color: "text-design",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "Nous visons le meilleur dans chaque ligne de code.",
    color: "text-dev",
  },
];

const ValuesCultureSection: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-transparent">
      <div className="max-w-5xl mx-auto">

        {/* Header — split layout */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div>
            <span className="text-xs uppercase tracking-widest text-primary font-medium">
              Ce qui nous guide
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-ink dark:text-white mt-3">
              Nos <span className="text-primary">valeurs</span> &amp; culture
            </h2>
          </div>
          <p className="text-ink-muted dark:text-ink-faint text-sm leading-relaxed max-w-[260px] sm:text-right">
            La manière dont nous travaillons définit qui nous sommes.
          </p>
        </motion.div>

        {/* Rows */}
        <div className="divide-y divide-base-300 dark:divide-slate-200/20">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                className="group relative"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                {/* Hover indicator */}
                <span className="absolute left-0 top-0 h-full w-[2px] bg-primary origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300 rounded-sm" />

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 md:gap-6 py-5 pl-4">
                  {/* Index */}
                  <span className="font-mono text-[11px] text-ink-faint dark:text-ink-muted select-none shrink-0 sm:w-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Icon + Title */}
                  <div className="flex items-center gap-3 sm:min-w-[200px]">
                    <Icon
                      className={`w-[18px] h-[18px] shrink-0 ${v.color}`}
                      strokeWidth={1.5}
                    />
                    <span className="text-base md:text-[17px] font-semibold text-ink dark:text-white group-hover:text-primary transition-colors duration-200">
                      {v.title}
                    </span>
                  </div>

                  {/* Separator line — desktop only */}
                  <div className="hidden sm:block flex-1 relative h-px overflow-hidden">
                    <div className="absolute inset-0 bg-base-300/60 dark:bg-white/5" />
                    <motion.div
                      className="absolute top-0 h-full bg-gradient-to-r from-transparent via-primary/60 to-transparent"
                      style={{ width: "35%", left: "-35%" }}
                      animate={{ left: ["-35%", "115%"] }}
                      transition={{
                        repeat: Infinity,
                        duration: 2.4 + (i % 3) * 0.35,
                        ease: [0.4, 0, 0.6, 1],
                        delay: i * 0.38,
                        repeatDelay: 0.5,
                      }}
                    />
                    <motion.div
                      className="absolute top-0 h-full bg-gradient-to-r from-transparent via-primary/20 to-transparent"
                      style={{ width: "20%", left: "-20%" }}
                      animate={{ left: ["-20%", "120%"] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.9 + (i % 3) * 0.28,
                        ease: [0.25, 0.1, 0.75, 0.9],
                        delay: i * 0.38 + 1.1,
                        repeatDelay: 0.3,
                      }}
                    />
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-ink-muted dark:text-ink-faint sm:max-w-[280px]">
                    {v.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ValuesCultureSection;
