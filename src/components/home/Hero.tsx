import React from "react";
import { motion } from "framer-motion";
import { Users, Award } from "lucide-react";
import Button from "../../ui/Button";

const HeroSection: React.FC = () => {
  const strokePrimary = "#0080802a";

  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-center md:justify-around pt-28 md:pt-36 px-4 md:px-8 lg:px-16 xl:px-24 pb-10 md:pb-20 overflow-hidden gap-8 md:gap-12 w-full">
      {/* Background SVG */}
      <svg className="absolute -z-10 inset-0 w-full h-full" viewBox="0 0 1440 720" fill="none">
        <circle cx="711.819" cy="372.562" r="308.334" stroke={strokePrimary} strokeWidth={3} />
        <circle cx="16.942" cy="20.834" r="308.334" stroke={strokePrimary} strokeWidth={2} />
        <circle cx="782.595" cy="411.166" r="308.334" stroke={strokePrimary} strokeWidth={3} />
        <circle cx="1200.595" cy="611.166" r="308.334" stroke={strokePrimary} strokeWidth={2} />
      </svg>

      {/* Contenu gauche */}
      <motion.div
        className="flex flex-col items-center md:items-start max-w-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Titre principal */}
        <motion.h1
          className="text-center md:text-left text-3xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-[1.15] text-slate-900 dark:text-white mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Nous concevons des{" "}
          <span className="text-[#008080]">applications web et mobiles</span>{" "}
          sur mesure qui propulsent votre business.
        </motion.h1>

        {/* Social proof badge — sous le titre */}
        <motion.div
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 text-sm mb-6 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <span className="w-2 h-2 rounded-full bg-[#008080] animate-pulse flex-shrink-0" />
          <p>Déjà <span className="font-bold text-[#008080]">+50</span> entreprises nous font confiance</p>
        </motion.div>

        {/* Sous-titre */}
        <motion.p
          className="text-center md:text-left text-base text-slate-600 dark:text-slate-300 max-w-lg mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          De la conception à la mise en production, nous transformons vos idées en solutions numériques performantes, évolutives et orientées résultats.
        </motion.p>

        {/* CTA */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Button label="Voir nos projets" changeColor="primary" to="/projets" />
          <Button label="Demander un devis" changeColor="secondary" to="/contact" />
        </motion.div>
      </motion.div>

      {/* Image droite + Stats overlay */}
      <motion.div
        className="relative flex-shrink-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
      >
        <img
          src="images/home/Image_hero.webp"
          alt="Lucane Technologies — Applications sur mesure"
          className="transition-all duration-300 md:max-w-lg xl:max-w-xl object-cover"
        />

        {/* Stat : Clients */}
        <motion.div
          className="absolute bottom-8 -left-4 md:-left-10 bg-white dark:bg-slate-800 rounded-xl p-3.5 shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          <div className="bg-[#008080]/10 p-2 rounded-lg flex-shrink-0">
            <Users className="w-5 h-5 text-[#008080]" />
          </div>
          <div>
            <p className="text-lg font-bold text-slate-900 dark:text-white leading-none">+50</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Clients satisfaits</p>
          </div>
        </motion.div>

        {/* Stat : Satisfaction */}
        <motion.div
          className="absolute top-8 -right-4 md:-right-10 bg-white dark:bg-slate-800 rounded-xl p-3.5 shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <div className="bg-[#008080]/10 p-2 rounded-lg flex-shrink-0">
            <Award className="w-5 h-5 text-[#008080]" />
          </div>
          <div>
            <p className="text-lg font-bold text-slate-900 dark:text-white leading-none">98%</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Satisfaction client</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
