import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Stat {
  label: string;
  value: number;
  suffix: string;
}

const stats: Stat[] = [
  { label: "Clients satisfaits", value:20, suffix: "+" },
  { label: "Taux de satisfaction", value: 98, suffix: "%" },
  { label: "Ans d'expérience", value: 3, suffix: "+" },
  { label: "Pays couverts", value: 6, suffix: "+" },
];

interface CounterProps {
  value: number;
  suffix: string;
}

const Counter: React.FC<CounterProps> = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1400;
    const step = Math.max(Math.floor(duration / value), 14);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= value) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-white">
      {count}
      <span className="text-2xl md:text-4xl text-primary">{suffix}</span>
    </span>
  );
};

const StatsSection: React.FC = () => {
  return (
    <section className="bg-dark py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs uppercase tracking-widest text-primary font-medium">
            Nos chiffres
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            L'impact en <span className="text-primary">chiffres</span>
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center text-center gap-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              {/* Teal accent line */}
              <div className="w-8 h-1 bg-primary rounded-full mb-2" />
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="text-white/60 text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
