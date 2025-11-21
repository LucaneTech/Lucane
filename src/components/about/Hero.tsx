import React from "react";
import { motion } from "framer-motion";
import Button from "../../ui/Button";

const AboutHero: React.FC = () => {
  const strokePrimary = "#0080802a";

  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between mt-32 md:mt-48 px-4 md:px-8 lg:px-24 xl:px-32 pb-20">
      {/* Background SVG */}
      <svg
        className="absolute -z-10 inset-0 w-full h-full"
        width="1440"
        height="720"
        viewBox="0 0 1440 720"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="711.819" cy="372.562" r="308.334" stroke={strokePrimary} strokeOpacity={1} strokeWidth={2} />
        <circle cx="16.942" cy="20.834" r="308.334" stroke={strokePrimary} strokeOpacity={1} strokeWidth={2} />
        <circle cx="782.595" cy="411.166" r="308.334" stroke={strokePrimary} strokeOpacity={1} strokeWidth={2} />
        <circle cx="1200.595" cy="611.166" r="308.334" stroke={strokePrimary} strokeOpacity={1} strokeWidth={2} />
      </svg>

      {/* right content */}
     <motion.div
  className="flex flex-col items-center md:items-start"
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>
  <motion.h1
    className="text-center md:text-left text-3xl md:text-6xl font-medium md:leading-[68px] max-w-xl text-slate-900 dark:text-white"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
  >
    Découvrez <span className="main-color">Lucane</span> : notre histoire et nos valeurs
  </motion.h1>

  <motion.p
    className="text-center md:text-left text-sm text-slate-700 dark:text-gray-200 max-w-lg mt-2"
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
  >
    Chez Lucane, nous croyons en l'innovation responsable et la création de solutions numériques qui font la différence. 
    Chaque projet que nous entreprenons reflète notre passion, notre éthique et notre engagement envers nos clients et la communauté tech.
  </motion.p>

  <motion.div
    className="flex items-center gap-4 mt-8 text-sm"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.6 }}
  >
    <Button label="Découvrez nos technologies" changeColor="primary" to="/technologies" />
    <Button label="Rejoignez-nous" changeColor="secondary" to="/contact" />
  </motion.div>
</motion.div>


      {/* left image */}
      <motion.img
        src="images/about/logo.png"
        alt="logo profile lucane"
        className="transition-all duration-300 mt-10 md:mt-0 w-03/4 md:w-1/2 lg:w-2/5 rounded-xl shadow-xl object-cover"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      />
    </section>
  );
};

export default AboutHero;
