// src/components/technologies/Arbitrages.tsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Arbitrage {
  domain: string;
  rejected: string;
  chosen: string;
  reason: string;
}

const ARBITRAGES: Arbitrage[] = [
  {
    domain: "Frontend",
    rejected: "Vue.js",
    chosen: "React",
    reason: "Maturité, ecosystem, React Native en bonus",
  },
  {
    domain: "Base de données",
    rejected: "MySQL",
    chosen: "PostgreSQL",
    reason: "JSON natif, transactions, performances",
  },
  {
    domain: "Backend",
    rejected: "FastAPI",
    chosen: "Django",
    reason: "Admin, ORM, ecosystem Python complet",
  },
  {
    domain: "CI/CD",
    rejected: "Jenkins",
    chosen: "GitHub Actions",
    reason: "DX supérieur et intégration native Git",
  },
  {
    domain: "Mobile",
    rejected: "Flutter",
    chosen: "React Native",
    reason: "Réutilisation du code React web",
  },
  {
    domain: "Styling",
    rejected: "CSS Modules",
    chosen: "Tailwind CSS",
    reason: "Vélocité de dev et cohérence du design system",
  },
];

function StrikethroughText({
  text,
  animate,
  delay,
}: {
  text: string;
  animate: boolean;
  delay: number;
}) {
  return (
    <span className="relative inline-block">
      <span className="text-white/30 italic">{text}</span>
      <motion.span
        className="absolute left-0 top-1/2 -translate-y-1/2 h-px bg-white/40 origin-left"
        style={{ width: "100%" }}
        initial={{ scaleX: 0 }}
        animate={animate ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
      />
    </span>
  );
}

function ArbitrageRow({
  item,
  index,
}: {
  item: Arbitrage;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 md:gap-6 py-6 border-b border-white/8 hover:bg-white/[0.02] transition-colors duration-150 px-2 -mx-2 rounded"
    >
      {/* Domain label */}
      <span className="font-mono text-xs md:text-xs uppercase tracking-widest text-primary w-32 md:w-36 flex-shrink-0">
        {item.domain}
      </span>

      {/* Rejected */}
      <div className="flex-1 sm:text-right">
        <StrikethroughText
          text={item.rejected}
          animate={isInView}
          delay={index * 0.06 + 0.2}
        />
      </div>

      {/* VS separator */}
      <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
        <div className="w-10 border-t border-primary/15" />
        <span className="font-mono text-xs text-primary">VS</span>
        <div className="w-10 border-t border-primary/15" />
      </div>

      {/* Chosen + pill */}
      <div className="flex-1 flex items-center gap-3">
        <span className="text-white font-semibold">{item.chosen}</span>
        <span className="bg-primary/15 text-primary border border-primary/30 rounded-sm text-[10px] px-2 py-0.5 font-mono uppercase tracking-wide flex-shrink-0">
          Retenu
        </span>
      </div>

      {/* Reason */}
      <p className="text-white/80 text-sm flex-1 sm:text-right max-w-xs sm:ml-auto">
        {item.reason}
      </p>
    </motion.div>
  );
}

const Arbitrages: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-dark-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs uppercase tracking-[0.2em] font-mono text-primary mb-3">
            Décisions techniques
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Nos choix, assumés.
          </h2>
        </motion.div>

        <div className="border-t border-white/8">
          {ARBITRAGES.map((item, i) => (
            <ArbitrageRow key={item.domain} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Arbitrages;
