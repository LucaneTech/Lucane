import React from "react";
import { motion } from "framer-motion";

interface HeroProjectProps {
  filter: string;
  setFilter: (f: string) => void;
}

const CATEGORIES = ["Tous", "Web", "Mobile", "Design", "SaaS"];

const HeroProject: React.FC<HeroProjectProps> = ({ filter, setFilter }) => {
  return (
    <section className="relative bg-dark pt-32 pb-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.span
          className="text-xs uppercase tracking-widest text-primary font-medium"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Nos réalisations
        </motion.span>

        <motion.h1
          className="text-5xl lg:text-6xl font-bold text-white mt-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Des projets qui{" "}
          <span className="text-primary">parlent d'eux-mêmes</span>
        </motion.h1>

        <motion.p
          className="text-white/60 text-lg max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Découvrez nos réalisations pour des clients en France, en Afrique et à
          l'international.
        </motion.p>

        {/* Filtres catégories */}
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-pill px-5 py-2 text-sm font-medium transition-colors cursor-pointer ${
                filter === cat
                  ? "bg-primary text-white"
                  : "bg-white/5 text-white/60 border border-white/10 hover:bg-white/10"
              }`}
              layout
              whileTap={{ scale: 0.96 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroProject;
