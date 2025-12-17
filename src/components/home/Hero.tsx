import React from "react";
import { motion } from "framer-motion";
import Button from "../../ui/Button";


const HeroSection: React.FC = () => {
  const strokePrimary = "#0080802a";

  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-center md:justify-around mt-8 md:mt-20 px-4 md:px-8 lg:px-24 pb-10 md:pb-20 overflow-hidden gap-12 w-full">
      {/* Background SVG */}
      <svg
        className="absolute -z-10 inset-1 w-full h-full"
        width="1440"
        height="720"
        viewBox="0 0 1440 720"
        fill="none"

      >
        <circle cx="711.819" cy="372.562" r="308.334" stroke={strokePrimary} strokeWidth={3} />
        <circle cx="16.942" cy="20.834" r="308.334" stroke={strokePrimary} strokeWidth={2} />
        <circle cx="782.595" cy="411.166" r="308.334" stroke={strokePrimary} strokeWidth={3} />
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
          className="flex flex-col lg:flex-row  items-center  justify-center p-2 rounded-full border border-slate-300 text-gray-500 dark:text-white text-xs mb-4 gap-1 backdrop-blur-md dark:bg-gray-900/70 "
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="ml-2">Déjà <span className="font-bold">+50</span> entreprises nous font confiance...</p>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-center md:text-left text-3xl md:text-6xl font-semibold md:leading-[68px]  max-w-xl text-slate-900 dark:text-white"
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
          <Button label="Découvrez nos projets" changeColor="primary" to="/projets" />
          <Button label="Nous contacter" changeColor="secondary" to="/contact" />
        </motion.div>

        {/* Card */}
        <motion.div
          className="hidden 2xl:flex flex-row rounded-xl bg-white dark:bg-gray-900/70 shadow-lg duration-300 hover:shadow-2xl mt-10 md:max-w-xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <img
            className="h-24 w-full object-cover rounded-t-lg md:h-40 md:w-48 md:rounded-l-lg"
            src="images/home/beaute.jpeg"
            alt="cart projet d'un de mes projets lucane"
          />
          <div className="flex flex-col justify-start p-4">
            <h5 className="mb-2 text-lg font-semibold text-teal-600">
              Projet client : Boutique de beauté
            </h5>

            <p className="mb-3 text-sm text-slate-700 dark:text-gray-200">
              Réalisation d’une plateforme moderne dédiée à une boutique de beauté.
              L’objectif : mettre en avant les produits, offrir une expérience d’achat fluide
              et faciliter la gestion des rendez-vous et des services.
            </p>


          </div>
        </motion.div>
      </motion.div>

      {/* Right image */}
      <motion.img
        src="images/home/heroHome.webp"
        alt="hero"
        className="transition-all duration-300 mb-6 mt-6 md:mt-0 md:max-w-4xl   rounded-xl hover:shadow-2xl hover:shadow-[#008080]
           outline-1 outline-offset-10 outline-[#008080] object-cover scale-x-95 hover:scale-90 cursor-pointer "
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
      />
    </section>
  );
};

export default HeroSection;
