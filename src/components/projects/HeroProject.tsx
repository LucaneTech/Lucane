import React from "react";
import { motion } from "framer-motion";

interface HeroProjectProps {
  filter: string;
  setFilter: (f: string) => void;
}

const stats = [
  { value: "50+", label: "Projets livrés" },
  { value: "98%", label: "Clients satisfaits" },
  { value: "6", label: "Pays couverts" },
];

const HeroProject: React.FC<HeroProjectProps> = ({ filter, setFilter }) => {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <motion.img
        src="/images/project.jpg"
        alt="Nos projets"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ opacity: { duration: 0.6 }, scale: { duration: 8, ease: "easeOut" } }}
      />
      <motion.div
        className="absolute inset-0 bg-[rgba(0,128,128,0.72)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      />
      <motion.svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <circle cx="90%" cy="20%" r="160" stroke="white" strokeWidth="1" fill="none" />
        <circle cx="90%" cy="20%" r="280" stroke="white" strokeWidth="0.7" fill="none" />
        <circle cx="15%" cy="70%" r="200" stroke="white" strokeWidth="0.8" fill="none" />
        <circle cx="50%" cy="50%" r="380" stroke="white" strokeWidth="0.4" fill="none" />
      </motion.svg>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-white w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Texte gauche */}
          <div>
            <motion.span
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="inline-block text-xs uppercase tracking-[0.2em] font-medium mb-4 text-white/70"
            >
              Nos réalisations
            </motion.span>
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-4xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Des projets qui parlent d'eux-mêmes
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="text-lg text-white/80 mb-10"
            >
              Découvrez nos réalisations pour des clients en France, en Afrique et à l'international.
            </motion.p>
            {/* Filtres */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex flex-wrap gap-2"
            >
              {["Tous", "Web", "Mobile", "Design", "SaaS"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                    filter === cat
                      ? "bg-white text-primary"
                      : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Stats droite */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="grid grid-cols-3 gap-6 lg:justify-items-center"
          >
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-4xl lg:text-5xl font-bold mb-2">{s.value}</p>
                <p className="text-sm text-white/70">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroProject;
