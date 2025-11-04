import React from "react";
import { motion } from "framer-motion";
import Button from "../../ui/Button";

const avatars = [
  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50",
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop",
];

const HeroSection: React.FC = () => {
  const strokePrimary = "#0080802a";

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between mt-8 md:mt-20 px-4 md:px-8 lg:px-24 xl:px-32 pb-20 overflow-hidden">
      {/* Background SVG */}
      <svg
        className="absolute -z-10 inset-0 w-full h-full"
        width="1440"
        height="720"
        viewBox="0 0 1440 720"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="711.819" cy="372.562" r="308.334" stroke={strokePrimary} strokeWidth={2} />
        <circle cx="16.942" cy="20.834" r="308.334" stroke={strokePrimary} strokeWidth={2} />
        <circle cx="782.595" cy="411.166" r="308.334" stroke={strokePrimary} strokeWidth={2} />
        <circle cx="1200.595" cy="611.166" r="308.334" stroke={strokePrimary} strokeWidth={2} />
      </svg>

      {/* Left content */}
      <motion.div
        className="flex flex-col items-center md:items-start"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Community avatars */}
        <motion.div
          className="flex items-center flex-wrap justify-center p-1.5 rounded-full border border-slate-300 text-gray-500 text-xs mb-4 gap-1 bg-white/60 backdrop-blur-md dark:bg-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex -space-x-2">
            {avatars.map((src, i) => (
              <img
                key={i}
                className="w-7 h-7 rounded-full border-2 border-white"
                src={src}
                alt={`user${i + 1}`}
              />
            ))}
          </div>
          <p className="ml-2">Déjà +50 entreprises nous font confiance</p>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-center md:text-left text-3xl md:text-6xl font-semibold md:leading-[68px] max-w-xl text-slate-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Propulsez vos idées digitales avec{" "}
          <span className="text-teal-600">"Lucane Technologies"</span>...
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-center md:text-left text-base text-slate-700 max-w-lg mt-4 leading-relaxed dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Nous concevons des applications web et mobiles sur mesure qui allient performance, design et innovation.
          Notre mission : donner vie à vos projets numériques, du concept à la mise en ligne.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex items-center gap-4 mt-8 text-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <Button label="Découvrez nos projets" changeColor="primary" to="/projects" />
          <Button label="Nous contacter" changeColor="secondary" to="/contact" />
        </motion.div>

        {/* Card */}
        <motion.div
          className="hidden lg:flex flex-row rounded-xl bg-white dark:bg-gray-900 shadow-lg duration-300 hover:shadow-2xl mt-10 md:max-w-xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <img
            className="h-24 w-full object-cover rounded-t-lg md:h-40 md:w-48 md:rounded-l-lg"
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=400&auto=format&fit=crop"
            alt="card"
          />
          <div className="flex flex-col justify-start p-4">
            <h5 className="mb-2 text-lg font-semibold text-teal-600">
              Projet client : Espace Pro
            </h5>
            <p className="mb-3 text-sm text-slate-700 dark:text-gray-200">
              Une application SaaS développée pour simplifier la gestion interne des équipes. 
              Performance, sécurité et UX au cœur du produit.
            </p>
            <p className="text-xs text-gray-400">Dernière mise à jour : il y a 3 min</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Right image */}
      <motion.img
        src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/hero-section-showcase-4.png"
        alt="hero"
        className="transition-all duration-500 mt-10 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
      />
    </section>
  );
};

export default HeroSection;
