import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { verifiedFacts } from "../../data/site";

interface Metric {
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
}

// Uniquement des chiffres sourcés (src/data/site.ts) + l'engagement de réponse.
const METRICS: Metric[] = [
  ...verifiedFacts().map((f) => ({ value: f.value, prefix: f.prefix, suffix: f.suffix ?? "", label: f.label })),
  { prefix: "< ", value: 24, suffix: " h", label: "délai de réponse" },
];

function AnimatedCounter({
  target,
  prefix,
  suffix,
  active,
}: {
  target: number;
  prefix?: string;
  suffix: string;
  active: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const total = 60;
    const id = setInterval(() => {
      frame++;
      setCount(Math.round((frame / total) * target));
      if (frame >= total) clearInterval(id);
    }, 1000 / 60);
    return () => clearInterval(id);
  }, [active, target]);

  return (
    <span className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-primary tabular-nums">
      {prefix}
      {count.toLocaleString("fr-FR")}
      {suffix}
    </span>
  );
}

const ImpactStrip: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 px-6 bg-transparent border-t border-b border-gray-300/50 dark:border-gray-700/50">
      <div className="max-w-5xl mx-auto">
        <p className="kicker text-center text-sm text-slate-500 dark:text-slate-300 mb-10">
          &gt;_ impact en chiffres
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {METRICS.map((m, i) => (
            <div
              key={m.label}
              className={`flex flex-col items-center text-center ${
                i < METRICS.length - 1
                  ? "lg:border-r lg:border-slate-700/50"
                  : ""
              }`}
            >
              <AnimatedCounter
                target={m.value}
                prefix={m.prefix}
                suffix={m.suffix}
                active={isInView}
              />
              <p className="font-sans text-slate-400 dark:text-slate-300 text-sm mt-2">
                // {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStrip;
