import React from "react";
import { motion } from "framer-motion";

const techBadges = [
  "React",
  "TypeScript",
  "Node.js",
  "Django",
  "React Native",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Docker",
  "Tailwind CSS",
];

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <motion.img
        src="/images/technologies/hero.png"
        alt="Stack technologique"
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
        <circle cx="15%" cy="50%" r="200" stroke="white" strokeWidth="1" fill="none" />
        <circle cx="15%" cy="50%" r="340" stroke="white" strokeWidth="0.6" fill="none" />
        <circle cx="85%" cy="50%" r="160" stroke="white" strokeWidth="0.9" fill="none" />
        <circle cx="50%" cy="15%" r="250" stroke="white" strokeWidth="0.5" fill="none" />
      </motion.svg>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-white text-center w-full">
        <motion.span
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="inline-block text-xs uppercase tracking-[0.2em] font-medium mb-4 text-white/70"
        >
          Technologies
        </motion.span>
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-4xl lg:text-6xl font-bold mb-6 leading-tight"
        >
          Notre stack <br className="hidden lg:block" />moderne & éprouvé
        </motion.h1>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-lg text-white/80 max-w-2xl mx-auto mb-10"
        >
          Nous utilisons les technologies les plus fiables pour construire des produits durables et performants.
        </motion.p>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-2"
        >
          {techBadges.map((t) => (
            <span key={t} className="rounded-md bg-white/10 border border-white/20 text-white/90 px-4 py-1.5 text-sm font-medium">
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
