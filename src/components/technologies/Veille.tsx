// src/components/technologies/Veille.tsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

type EventType = "REPO" | "CONTRIB" | "PACKAGE" | "MIGRATION";

interface TimelineEvent {
  year: number;
  type: EventType;
  title: string;
  description: string;
}

interface Stat {
  value: string;
  label: string;
}

// ⚠️ Remplacer par les vraies données de l'équipe
const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: 2022,
    type: "REPO",
    title: "Premier repo open source",
    description: "Publication du premier projet public sur GitHub",
  },
  {
    year: 2023,
    type: "CONTRIB",
    title: "Contribution upstream",
    description: "PR acceptée sur django-rest-framework",
  },
  {
    year: 2024,
    type: "PACKAGE",
    title: "Package npm publié",
    description: "Librairie React publiée sur le registry npm",
  },
  {
    year: 2025,
    type: "MIGRATION",
    title: "Migration TypeScript strict",
    description: "TS strict mode activé sur 3 projets client",
  },
];

// ⚠️ Remplacer par les vraies données
const STATS: Stat[] = [
  { value: "15+", label: "repos GitHub" },
  { value: "2 400+", label: "commits" },
  { value: "4", label: "technos évaluées / trimestre" },
];

const TYPE_STYLES: Record<EventType, string> = {
  REPO: "bg-primary/10 text-primary",
  CONTRIB: "bg-blue-500/10 text-blue-400",
  PACKAGE: "bg-orange-500/10 text-orange-400",
  MIGRATION: "bg-green-500/10 text-green-400",
};

const Veille: React.FC = () => {
  const axisRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(axisRef, { once: true, margin: "-60px" });

  return (
    <section className="py-20 px-6 bg-surface overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs uppercase tracking-[0.2em] font-mono text-primary mb-3">
            Engagement
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-ink max-w-xl leading-tight">
            On ne consomme pas les technos. On les pratique.
          </h2>
        </motion.div>

        {/* Timeline — horizontally scrollable on mobile */}
        <div
          className="overflow-x-auto -mx-6 px-6 pb-6 [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="min-w-[640px]">
            {/* Axis */}
            <div ref={axisRef} className="relative h-px bg-slate-200 mb-10">
              <motion.div
                className="absolute inset-0 bg-primary origin-left"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>

            {/* Events */}
            <div className="grid grid-cols-4 gap-6">
              {TIMELINE_EVENTS.map((event, i) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                  className="relative"
                >
                  {/* Dot + year above axis */}
                  <div className="absolute -top-[42px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5">
                    <span className="font-mono text-[10px] text-ink-faint">
                      {event.year}
                    </span>
                    <span className="text-primary text-xs">◉</span>
                  </div>

                  {/* Content */}
                  <span
                    className={`inline-block font-mono text-[9px] uppercase px-1.5 py-0.5 rounded ${TYPE_STYLES[event.type]}`}
                  >
                    {event.type}
                  </span>
                  <p className="text-sm text-ink font-semibold mt-2 leading-snug">
                    {event.title}
                  </p>
                  <p className="text-xs text-ink-muted mt-1 leading-relaxed">
                    {event.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-0">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center ${
                i < STATS.length - 1
                  ? "sm:border-r sm:border-slate-200 sm:pr-12 sm:mr-12"
                  : ""
              }`}
            >
              <span className="font-mono text-3xl font-bold text-ink">
                {stat.value}
              </span>
              <span className="text-xs text-ink-muted font-mono mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Veille;
