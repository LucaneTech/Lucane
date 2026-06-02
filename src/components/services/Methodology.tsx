import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  {
    label: "Découverte",
    duration: "1-2 sem",
    tools: ["Notion", "Miro", "Figma"],
    desc: "Ateliers de cadrage pour définir le scope, les objectifs et les contraintes. Analyse des besoins utilisateurs et benchmark concurrentiel.",
  },
  {
    label: "Design",
    duration: "2-4 sem",
    tools: ["Figma", "Storybook"],
    desc: "Conception UX/UI avec prototypage interactif. Validation des maquettes et création du design system avant tout développement.",
  },
  {
    label: "Développement",
    duration: "4-16 sem",
    tools: ["GitHub", "Jira", "CI/CD"],
    desc: "Sprints bimensuels avec démonstrations régulières. Revues de code systématiques et intégration continue pour une livraison fiable.",
  },
  {
    label: "Livraison",
    duration: "1-2 sem",
    tools: ["Docker", "AWS", "Vercel"],
    desc: "Déploiement progressif, tests de charge et de sécurité. Formation des équipes et documentation technique complète.",
  },
  {
    label: "Support",
    duration: "Continu",
    tools: ["Sentry", "Grafana", "Slack"],
    desc: "Monitoring 24/7, corrections rapides et évolutions fonctionnelles. Un interlocuteur dédié pour accompagner votre croissance.",
  },
];

const Methodology: React.FC = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 px-6 bg-surface-alt">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-ink">
            Notre <span className="text-primary">Méthode</span>
          </h2>
          <p className="mt-4 text-lg text-ink-muted max-w-2xl mx-auto">
            Un processus éprouvé, de la première réunion à la mise en
            production, pour des livraisons fiables et prévisibles.
          </p>
        </motion.div>

        {/* Tab bar */}
        <div className="flex gap-1 border-b border-surface overflow-x-auto mb-8">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative px-5 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
                active === i
                  ? "text-primary"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              {tab.label}
              {active === i && (
                <motion.div
                  layoutId="tab-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl p-8 border border-ink-faint/20 shadow-sm"
          >
            {/* Duration badge */}
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-block text-xs uppercase tracking-widest text-primary font-semibold">
                Durée estimée
              </span>
              <span className="rounded-pill bg-primary/10 text-primary text-xs font-bold px-3 py-1">
                {tabs[active].duration}
              </span>
            </div>

            {/* Description */}
            <p className="text-ink leading-relaxed mb-6 text-base">
              {tabs[active].desc}
            </p>

            {/* Tools */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-ink-muted mb-3">
                Outils
              </p>
              <div className="flex flex-wrap gap-2">
                {tabs[active].tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-pill bg-surface-alt border border-ink-faint/30 text-ink text-xs font-medium px-4 py-1.5"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Methodology;
