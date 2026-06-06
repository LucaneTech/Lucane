import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  {
    label: "Découverte",
    duration: "2-5 j",
    tools: ["Notion AI", "Miro", "Figma", "Claude", "Perplexity", "etc.."],
    desc: "Ateliers de cadrage pour définir le scope, les objectifs et les contraintes. Analyse des besoins utilisateurs et benchmark concurrentiel accélérés par IA.",
  },
  {
    label: "Design",
    duration: "1-2 sem",
    tools: ["Figma", "Storybook", "Midjourney", "Galileo AI", "Framer AI", "etc..."],
    desc: "Conception UX/UI avec prototypage interactif assisté par IA. Génération rapide de variantes, validation des maquettes et design system co-créé avec l'IA.",
  },
  {
    label: "Développement",
    duration: "1-5 sem",
    tools: ["Cursor", "GitHub Copilot", "Claude", "v0.dev", "CI/CD", "Codium AI", "etc..."],
    desc: "Sprints accélérés grâce aux assistants IA (génération de code, revues automatisées, détection de bugs). Livraisons plus fréquentes, qualité maintenue.",
  },
  {
    label: "Livraison",
    duration: "1-4 j",
    tools: ["Docker", "Vercel", "AWS", "Railway", "Doppler", "etc..."],
    desc: "Déploiement progressif avec tests automatisés par IA. Documentation technique générée automatiquement, formation des équipes accélérée.",
  },
  {
    label: "Support",
    duration: "Continu",
    tools: ["Sentry", "Grafana", "Slack", "Linear", "Intercom AI", "etc..."],
    desc: "Monitoring 24/7 augmenté par détection d'anomalies IA. Triage automatique des incidents, corrections prédictives et évolutions suggérées par l'analyse des usages.",
  },
];

const Methodology: React.FC = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 px-6 bg-surface-alt dark:bg-dark-elevated">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-ink dark:text-white">
            Notre <span className="text-primary">Méthode</span>
          </h2>
          <p className="mt-4 text-lg text-ink-muted dark:text-slate-300 max-w-2xl mx-auto">
            Un processus éprouvé, de la première réunion à la mise en
            production, pour des livraisons fiables et prévisibles.
          </p>
        </motion.div>

        {/* Tab bar */}
        <div className="flex gap-1  overflow-x-auto mb-8">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative px-5 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
                active === i
                  ? "text-primary"
                  : "text-ink-muted dark:text-slate-300 hover:text-ink dark:hover:text-slate-500"
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
            className="bg-white dark:bg-dark/40 backdrop-blur-lg rounded-md p-8 border border-ink-faint/20 shadow-lg"
          >
            {/* Duration badge */}
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-block text-xs uppercase tracking-widest text-primary font-semibold">
                Durée estimée
              </span>
              <span className="rounded-md bg-primary/10 text-primary text-xs font-bold px-3 py-1">
                {tabs[active].duration}
              </span>
            </div>

            {/* Description */}
            <p className="text-ink-muted dark:text-slate-300 leading-relaxed mb-6 text-base">
              {tabs[active].desc}
            </p>

            {/* Tools */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-ink-muted dark:text-slate-300 mb-3">
                Outils
              </p>
              <div className="flex flex-wrap gap-2">
                {tabs[active].tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-md bg-surface-alt border border-ink-faint/30 text-ink text-xs font-medium px-4 py-1.5"
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
