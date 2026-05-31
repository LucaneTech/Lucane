import React from "react";
import { motion } from "framer-motion";
import { Search, Layout, Code2, FlaskConical, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Découverte",
    description: "Audit des besoins, benchmark concurrentiel et définition précise du périmètre fonctionnel.",
    color: "text-violet-600",
    bg: "bg-violet-50 dark:bg-violet-900/20",
    border: "border-violet-200 dark:border-violet-700",
  },
  {
    number: "02",
    icon: Layout,
    title: "Architecture",
    description: "Sélection des technologies, wireframes validés et conception de l'architecture système.",
    color: "text-indigo-600",
    bg: "bg-indigo-50 dark:bg-indigo-900/20",
    border: "border-indigo-200 dark:border-indigo-700",
  },
  {
    number: "03",
    icon: Code2,
    title: "Développement",
    description: "Sprints agiles, revues de code régulières et intégration continue pour une livraison fiable.",
    color: "text-[#008080]",
    bg: "bg-teal-50 dark:bg-teal-900/20",
    border: "border-teal-200 dark:border-teal-700",
  },
  {
    number: "04",
    icon: FlaskConical,
    title: "Tests & QA",
    description: "Tests unitaires, end-to-end et audits de performance pour garantir une qualité irréprochable.",
    color: "text-amber-600",
    bg: "bg-amber-50 dark:bg-amber-900/20",
    border: "border-amber-200 dark:border-amber-700",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Livraison & Support",
    description: "Déploiement sécurisé, formation des équipes et maintenance évolutive post-livraison.",
    color: "text-emerald-600",
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
    border: "border-emerald-200 dark:border-emerald-700",
  },
];

const Methodology: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-slate-50/50 dark:bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white">
            Notre <span className="text-[#008080]">Méthode</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Un processus éprouvé, de la première réunion à la mise en production, pour des livraisons fiables et prévisibles.
          </p>
        </motion.div>

        {/* Desktop : timeline horizontale */}
        <div className="hidden lg:flex items-start gap-0 relative">
          <div className="absolute top-7 left-[8%] right-[8%] h-0.5 bg-slate-200 dark:bg-slate-700 z-0" />
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                className="flex-1 flex flex-col items-center text-center z-10 px-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
              >
                <div className={`w-14 h-14 rounded-full ${step.bg} ${step.border} border-2 flex items-center justify-center mb-4 shadow-sm`}>
                  <Icon className={`w-6 h-6 ${step.color}`} />
                </div>
                <span className={`text-[10px] font-bold tracking-widest uppercase ${step.color} mb-1`}>{step.number}</span>
                <h3 className="text-sm font-bold text-slate-800 dark:text-white mb-2">{step.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile : timeline verticale */}
        <div className="lg:hidden flex flex-col gap-6 relative pl-4">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700" />
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                className="flex gap-5 items-start z-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`w-12 h-12 rounded-full ${step.bg} ${step.border} border-2 flex items-center justify-center flex-shrink-0 shadow-sm`}>
                  <Icon className={`w-5 h-5 ${step.color}`} />
                </div>
                <div>
                  <span className={`text-xs font-bold tracking-widest uppercase ${step.color}`}>{step.number}</span>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white mt-0.5 mb-1">{step.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
