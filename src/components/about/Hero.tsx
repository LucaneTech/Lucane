import React from "react";
import { motion } from "framer-motion";

const AboutHero: React.FC = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <motion.img
        src="/images/about/lucane.png"
        alt="Équipe Lucane Tech"
        className="absolute inset-0 w-full h-full object-cover object-center"
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
        <circle cx="50%" cy="50%" r="300" stroke="white" strokeWidth="1" fill="none" />
        <circle cx="50%" cy="50%" r="450" stroke="white" strokeWidth="0.6" fill="none" />
        <circle cx="20%" cy="30%" r="140" stroke="white" strokeWidth="0.8" fill="none" />
        <circle cx="80%" cy="70%" r="180" stroke="white" strokeWidth="0.7" fill="none" />
      </motion.svg>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-white text-center w-full">
        <motion.span
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="inline-block text-xs uppercase tracking-[0.2em] font-medium mb-4 text-white/70"
        >
          À propos de Lucane
        </motion.span>
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-4xl lg:text-6xl font-bold mb-8 leading-tight"
        >
          Une équipe passionnée,<br />un impact réel
        </motion.h1>
        <motion.blockquote
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-xl text-white/90 italic max-w-3xl mx-auto border-l-4 border-white/40 pl-6 text-left"
        >
          "La technologie est le meilleur levier pour développer l'Afrique. Notre mission est de la rendre accessible à tous les entrepreneurs."
          <footer className="text-sm text-white/60 mt-3 not-italic">— Francisco Mouanda, Fondateur & CEO</footer>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default AboutHero;
