import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-dark pt-32 pb-20 px-6 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full border border-primary/10 pointer-events-none" />
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full border border-primary/15 pointer-events-none" />
      <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[200px] h-[200px] rounded-full bg-primary/5 blur-2xl pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-4 px-4 py-1.5 rounded-pill bg-primary/10 border border-primary/20"
        >
          Technologies
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl lg:text-6xl font-bold text-white mt-4 mb-6"
        >
          Notre stack{" "}
          <span className="text-primary">moderne</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/60 text-lg max-w-2xl mx-auto"
        >
          Nous utilisons les technologies les plus éprouvées et modernes pour
          construire des produits durables.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
