import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Award } from "lucide-react";
import Button from "../../ui/Button";

const rotatingWords = ["applications", "plateformes", "produits", "expériences"];

const HeroSection: React.FC = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-28 md:pt-36 pb-10 md:pb-20 px-4 md:px-8 lg:px-16 xl:px-24 overflow-x-hidden">
      {/* Background SVG circles */}
      <svg className="absolute -z-10 inset-0 w-full h-full pointer-events-none" viewBox="0 0 1440 720" fill="none">
        <circle cx="711.819" cy="372.562" r="308.334" stroke="var(--color-primary)" strokeOpacity={0.16} strokeWidth={3} />
        <circle cx="16.942" cy="20.834" r="308.334" stroke="var(--color-primary)" strokeOpacity={0.16} strokeWidth={2} />
        <circle cx="782.595" cy="411.166" r="308.334" stroke="var(--color-primary)" strokeOpacity={0.16} strokeWidth={3} />
        <circle cx="1200.595" cy="611.166" r="308.334" stroke="var(--color-primary)" strokeOpacity={0.16} strokeWidth={2} />
      </svg>

      <div className="grid lg:grid-cols-[55fr_45fr] gap-12 items-center max-w-7xl mx-auto">
        {/* Left content */}
        <motion.div
          className="flex flex-col items-center lg:items-start"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 rounded-md bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm text-primary font-medium mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Disponible pour vos projets
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-center lg:text-left text-4xl lg:text-6xl font-bold text-ink dark:text-white leading-tight mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Nous construisons des
            <span className="block overflow-hidden" style={{ height: "1.2em" }}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  className="block text-primary"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {rotatingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
            <span className="block">qui propulsent votre business.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-center lg:text-left text-base leading-relaxed text-ink-muted dark:text-slate-100 max-w-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            De la conception à la mise en production, nous transformons vos idées en solutions numériques performantes, évolutives et orientées résultats.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Button variant="primary" size="lg" label="Voir nos projets" to="/projets" />
            <Button variant="secondary" size="lg" label="Parler à l'équipe" to="/contact" />
          </motion.div>
        </motion.div>

        {/* Right visual */}
        <motion.div
          className="relative flex-shrink-0 flex justify-center py-8 px-6 md:px-10"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
          {/* Browser mockup */}
          <motion.div
            className="relative rounded-md overflow-hidden shadow-2xl border border-slate-200 dark:bg-dark-surface dark:border-slate-700/50 bg-white w-full max-w-md"
            style={{ rotate: -3 }}
            whileHover={{ rotate: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Browser chrome */}
            <div className="flex items-center gap-1.5 px-4 py-3 bg-surface-alt dark:bg-dark-elevated border-b border-slate-200 dark:border-slate-700/50">
              <span className="w-3 h-3 rounded-full bg-green-400" />

              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-red-400" />

              <div className="flex-1 mx-4 bg-white dark:bg-dark-surface rounded-sm h-6 border border-slate-200 dark:border-slate-700/50 px-3 flex items-center">
                <span className="text-xs text-ink-faint dark:text-slate-300">https://lucane.tech</span>
              </div>
            </div>
            <img
              src="images/home/Image_hero.webp"
              alt="Lucane Technologies — Applications sur mesure"
              className="w-full object-cover"
            />
          </motion.div>

          {/* Floating card: Clients */}
          <motion.div
            className="absolute -bottom-4 -left-4 md:-left-8 bg-white/90 dark:bg-dark-surface backdrop-blur-sm border border-white/30 dark:border-slate-700/50 rounded-md shadow-lg px-4 py-3 flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center gap-3"
            >
              <div className="bg-primary/10 dark:bg-primary/50 p-2 rounded-sm flex-shrink-0">
                <Users className="w-5 h-5 text-primary dark:text-white" />
              </div>
              <div>
                <p className="text-lg font-bold text-ink dark:text-white leading-none">+20</p>
                <p className="text-xs text-ink-muted dark:text-slate-200 mt-0.5">Clients satisfaits</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Floating card: Satisfaction */}
          <motion.div
            className="absolute -top-4 -right-4 md:-right-8 bg-white/90 dark:bg-dark-surface backdrop-blur-sm border border-white/30 dark:border-slate-700/50 rounded-md shadow-lg px-4 py-3 flex items-center gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center gap-3"
            >
              <div className="bg-primary/10 dark:bg-primary/50 p-2 rounded-sm flex-shrink-0">
                <Award className="w-5 h-5 text-primary dark:text-white" />
              </div>
              <div>
                <p className="text-lg font-bold text-ink dark:text-white leading-none">98%</p>
                <p className="text-xs text-ink-muted dark:text-slate-200 mt-0.5">Satisfaction client</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
