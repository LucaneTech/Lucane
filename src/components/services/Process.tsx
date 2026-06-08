import React from "react";
import { motion } from "framer-motion";
import { Search, Palette, Code2, Rocket, Headphones } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Découverte",
    desc: "Analyse de vos besoins, objectifs et contraintes techniques.",
    icon: Search,
  },
  {
    num: "02",
    title: "Design",
    desc: "Conception UX/UI et prototypage interactif.",
    icon: Palette,
  },
  {
    num: "03",
    title: "Développement",
    desc: "Implémentation agile en sprints bimensuels.",
    icon: Code2,
  },
  {
    num: "04",
    title: "Livraison",
    desc: "Tests, déploiement et formation de vos équipes.",
    icon: Rocket,
  },
  {
    num: "05",
    title: "Support",
    desc: "Maintenance, évolutions et support technique dédié.",
    icon: Headphones,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-ink dark:text-white">
            Notre <span className="text-primary">processus</span>
          </h2>
          <p className="mt-4 text-lg text-ink-muted  dark:text-slate-300 max-w-2xl mx-auto">
            Un processus éprouvé, de la première réunion à la mise en
            production, pour des livraisons fiables et prévisibles.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-[27px] top-8 bottom-8 w-px bg-gradient-to-b from-primary/0 via-primary/80 to-primary/0 hidden lg:block" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                className="flex gap-8 mb-12 last:mb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                {/* Numbered circle */}
                <div className="flex-shrink-0 w-12 md:w-14 h-12 md:h-14 rounded-full bg-primary border border-gray-400/50 dark:border-slate-400 flex items-center justify-center text-white font-bold text-xs md:text-sm">
                  {step.num}
                </div>

                {/* Content */}
                <div className="pt-2 md:pt-3">
                  <div className="flex items-center gap-2 md:gap-3 mb-2">
                    <Icon className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-bold text-ink dark:text-white">{step.title}</h3>
                  </div>
                  <p className="text-ink-muted  dark:text-slate-300 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
