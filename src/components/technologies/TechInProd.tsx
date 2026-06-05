// src/components/technologies/TechInProd.tsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface DomainMetric {
  prefix?: string;
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
}

interface Domain {
  name: string;
  primary: DomainMetric;
  secondary: string;
  stack: string[];
}

// ⚠️ Remplacer par les vraies métriques de production
const DOMAINS: Domain[] = [
  {
    name: "Frontend",
    primary: { prefix: "< ", value: 1.5, suffix: "s", label: "TTI moyen", decimals: 1 },
    secondary: "Lighthouse 95+",
    stack: ["React", "Tailwind"],
  },
  {
    name: "Backend",
    primary: { value: 50, suffix: "k+", label: "req/jour" },
    secondary: "p95 < 120ms",
    stack: ["Node.js", "Django"],
  },
  {
    name: "Infra",
    primary: { prefix: "< ", value: 3, suffix: "min", label: "deploy Docker" },
    secondary: "Zero-downtime",
    stack: ["AWS", "GitHub CI"],
  },
];

function AnimatedCounter({
  target,
  prefix = "",
  suffix,
  active,
  decimals = 0,
}: {
  target: number;
  prefix?: string;
  suffix: string;
  active: boolean;
  decimals?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const total = 60;
    const id = setInterval(() => {
      frame++;
      const raw = (frame / total) * target;
      setCount(parseFloat(raw.toFixed(decimals)));
      if (frame >= total) clearInterval(id);
    }, 1000 / 60);
    return () => clearInterval(id);
  }, [active, target, decimals]);

  const display =
    decimals > 0
      ? count.toFixed(decimals)
      : count.toLocaleString("fr-FR");

  return (
    <span className="font-mono text-5xl font-bold text-white tabular-nums">
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

const TechInProd: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 px-6 bg-dark">
      <div className="max-w-6xl mx-auto">
        <motion.span
          className="inline-block text-xs uppercase tracking-[0.2em] font-mono text-primary mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          En production
        </motion.span>

        <div className="border-t border-white/8">
          {DOMAINS.map((domain, i) => (
            <motion.div
              key={domain.name}
              initial={{ opacity: 0, x: -8 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-6 px-4 py-8 border-b border-white/8 hover:bg-white/[0.03] transition-colors duration-150"
            >
              {/* Domain */}
              <span className="font-mono text-[12px] uppercase tracking-[0.3em] text-primary w-28 flex-shrink-0">
                {domain.name}
              </span>

              {/* Primary metric */}
              <div className="flex items-end gap-3">
                <AnimatedCounter
                  target={domain.primary.value}
                  prefix={domain.primary.prefix}
                  suffix={domain.primary.suffix}
                  active={isInView}
                  decimals={domain.primary.decimals}
                />
                <span className="text-sm text-white/40 pb-2 max-w-[140px] leading-tight">
                  {domain.primary.label}
                </span>
              </div>

              {/* Dot separator */}
              <span className="hidden sm:inline text-white/20 font-mono text-lg flex-shrink-0">
                ·
              </span>

              {/* Secondary metric */}
              <span className="font-mono text-base text-white/55 flex-shrink-0">
                {domain.secondary}
              </span>

              {/* Stack pills — pushed to the right */}
              <div className="sm:ml-auto flex gap-2 flex-shrink-0">
                {domain.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] text-primary border border-primary/30 px-2 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechInProd;
