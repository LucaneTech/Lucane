import React from "react";
import { motion } from "framer-motion";
import { projects } from "../../data/projects";

const MONTHS: Record<string, number> = {
  Janvier: 0, Février: 1, Mars: 2, Avril: 3, Mai: 4, Juin: 5,
  Juillet: 6, Août: 7, Septembre: 8, Octobre: 9, Novembre: 10, Décembre: 11,
};

function parseDate(dateStr: string): number {
  const [month, year] = dateStr.split(" ");
  return new Date(parseInt(year), MONTHS[month] ?? 0).getTime();
}

const sorted = [...projects]
  .filter((p) => p.date)
  .sort((a, b) => parseDate(a.date!) - parseDate(b.date!));

const ProjectTimeline: React.FC = () => (
  <section className="py-20 px-6 bg-surface-alt dark:bg-dark-surface overflow-hidden">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="inline-block text-xs uppercase tracking-[0.2em] font-medium text-primary mb-3">
          Historique
        </span>
        <h2 className="text-3xl lg:text-4xl font-bold text-ink dark:text-white">
          Notre parcours
        </h2>
      </motion.div>

      {/* Desktop — alternating above/below timeline */}
      <div className="hidden md:block relative">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-primary/20 -translate-y-1/2" />
        <div
          className="grid"
          style={{ gridTemplateColumns: `repeat(${sorted.length}, 1fr)` }}
        >
          {sorted.map((project, i) => {
            const above = i % 2 === 0;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: above ? -20 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div
                  className={`h-24 flex items-end justify-center px-2 pb-2 ${
                    !above ? "invisible" : ""
                  }`}
                >
                  <div className="text-center">
                    <p className="text-xs font-bold text-ink dark:text-white line-clamp-2 leading-tight">
                      {project.title}
                    </p>
                    <span className="inline-block mt-1 text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium capitalize">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  {above && <div className="w-px h-5 bg-primary/30" />}
                  <div className="w-3 h-3 rounded-full bg-primary border-2 border-white dark:border-dark-surface z-10 flex-shrink-0" />
                  {!above && <div className="w-px h-5 bg-primary/30" />}
                </div>

                <div
                  className={`h-24 flex items-start justify-center px-2 pt-2 ${
                    above ? "invisible" : ""
                  }`}
                >
                  <div className="text-center">
                    <p className="text-xs font-bold text-ink dark:text-white line-clamp-2 leading-tight">
                      {project.title}
                    </p>
                    <span className="inline-block mt-1 text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium capitalize">
                      {project.category}
                    </span>
                  </div>
                </div>

                <p className="text-[10px] text-ink-muted dark:text-slate-500 mt-1">
                  {project.date}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mobile — vertical list */}
      <div className="md:hidden relative pl-6 border-l border-primary/20 space-y-8">
        {sorted.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="relative"
          >
            <div className="absolute -left-[1.65rem] top-1 w-3 h-3 rounded-full bg-primary border-2 border-white dark:border-dark-surface" />
            <p className="text-[10px] text-ink-muted dark:text-slate-500 mb-0.5">
              {project.date}
            </p>
            <p className="text-sm font-bold text-ink dark:text-white">
              {project.title}
            </p>
            <span className="inline-block mt-1 text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium capitalize">
              {project.category}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectTimeline;
