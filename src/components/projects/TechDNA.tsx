import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { projects } from "../../data/projects";

const TechDNA: React.FC = () => {
  const techCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    projects.forEach((p) => {
      p.technologies.forEach((tech) => {
        counts[tech] = (counts[tech] || 0) + 1;
      });
    });
    return Object.entries(counts).sort((a, b) => b[1] - a[1]);
  }, []);

  const maxCount = techCounts.length > 0 ? Math.max(...techCounts.map(([, c]) => c)) : 1;

  const getBubbleSize = (count: number) => {
    const ratio = count / maxCount;
    if (ratio >= 0.7) return "text-sm px-5 py-2.5 font-semibold";
    if (ratio >= 0.4) return "text-sm px-4 py-2";
    return "text-xs px-3 py-1.5";
  };

  return (
    <section className="py-20 px-6 bg-surface dark:bg-transparent overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs uppercase tracking-[0.2em] font-medium text-primary mb-3">
            Stack technique
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-ink dark:text-white">
            Notre TechDNA
          </h2>
          <p className="text-ink-muted dark:text-slate-400 mt-3 max-w-md mx-auto text-sm leading-relaxed">
            Toutes les technologies que nous maîtrisons, à travers nos projets présents dans notre portfolio.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-3 justify-center items-center">
          {techCounts.map(([tech, count], i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              whileHover={{ scale: 1.12, transition: { duration: 0.15 } }}
              className={`relative group cursor-default rounded-md border border-primary/25 bg-primary/5 dark:bg-primary/10 text-primary font-medium transition-colors duration-150 hover:bg-primary/15 hover:border-primary/50 ${getBubbleSize(count)}`}
            >
              {tech}
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-ink dark:bg-white text-white dark:text-ink text-[10px] px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10 shadow-sm">
                {count} projet{count > 1 ? "s" : ""}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechDNA;
