import React from "react";
import { motion } from "framer-motion";
import { Globe, TrendingUp} from "lucide-react";

interface HeroProjectProps {
  filter: string;
  setFilter: (f: string) => void;
}

const categories = ["Tous", "Web", "Mobile", "Design", "SaaS"];

const HeroProject: React.FC<HeroProjectProps> = ({ filter, setFilter }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-base-100 dark:bg-dark pt-24 pb-16 px-6">

      {/* ── Blob décoratifs background ─────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Blob principal haut-droite */}
        <motion.div
          className="absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full"
          style={{
            background:
              "radial-gradient(circle at 55% 45%, rgba(0,128,128,0.18) 0%, rgba(0,128,128,0.07) 55%, transparent 75%)",
            filter: "blur(50px)",
          }}
          animate={{ scale: [1, 1.06, 1], rotate: [0, 6, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Blob secondaire bas-gauche */}
        <motion.div
          className="absolute -bottom-24 -left-24 w-[380px] h-[380px] rounded-full"
          style={{
            background:
              "radial-gradient(circle at 40% 60%, rgba(0,128,128,0.12) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
          animate={{ scale: [1, 1.09, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
        {/* Cercles SVG décoratifs */}
        <svg
          className="absolute right-4 top-12 w-[420px] h-[420px] opacity-[0.07] dark:opacity-[0.12]"
          viewBox="0 0 420 420"
          fill="none"
        >
          <circle cx="210" cy="210" r="195" stroke="var(--color-primary)" strokeWidth="1.5" />
          <circle cx="210" cy="210" r="150" stroke="var(--color-primary)" strokeWidth="1" />
          <circle cx="210" cy="210" r="105" stroke="var(--color-primary)" strokeWidth="0.8" />
        </svg>
        {/* Points décoratifs */}
        <svg className="absolute left-8 top-32 w-24 h-24 opacity-50" viewBox="0 0 96 96" fill="none">
          {[0, 1, 2, 3].map((row) =>
            [0, 1, 2, 3].map((col) => (
              <circle
                key={`${row}-${col}`}
                cx={col * 24 + 12}
                cy={row * 24 + 12}
                r="2"
                fill="var(--color-primary)"
              />
            ))
          )}
        </svg>
         <svg className="absolute right-8 bottom-32 w-32 h-32 opacity-50" viewBox="0 0 96 96" fill="none">
          {[0, 1, 2, 3].map((row) =>
            [0, 1, 2, 3].map((col) => (
              <circle
                key={`${row}-${col}`}
                cx={col * 24 + 12}
                cy={row * 24 + 12}
                r="2"
                fill="var(--color-primary)"
              />
            ))
          )}
        </svg>
      </div>

      {/* ── Contenu principal ──────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-[55fr_45fr] gap-16 items-center">

          {/* Colonne gauche ── texte */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-md bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm text-primary font-medium mb-6"
            >
              <span className="hidden md:block w-2 h-2 rounded-md bg-primary animate-pulse" />
              Nos réalisations
            </motion.div>

            {/* Titre */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              className="text-4xl sm:text-5xl lg:text-[3.75rem] font-bold text-ink dark:text-white leading-[1.1] mb-5"
            >
              Des projets qui{" "}
              <span className="text-primary">propulsent</span>
              <br />
              votre business
            </motion.h1>

            {/* Sous-titre */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-base leading-relaxed text-ink-muted dark:text-slate-300 max-w-[480px] mb-10"
            >
              Découvrez nos réalisations pour des clients en France, en Afrique et à
              l'international. Chaque projet, une histoire d'impact.
            </motion.p>

            {/* Filtres */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-2"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`rounded-md px-5 py-2 text-sm font-medium transition-all duration-200 cursor-pointer ${
                    filter === cat
                      ? "bg-primary text-white shadow-[var(--shadow-glow)]"
                      : "bg-primary/8 text-ink dark:text-white/80 border border-primary/15 hover:bg-primary/15 hover:border-primary/30"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Colonne droite ── visuel */}
          <motion.div
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45, duration: 0.9, ease: "easeOut" }}
          >
            {/* Blob coloré derrière l'image */}
            <motion.div
              className="absolute w-72 h-72 lg:w-64 -left-5 -10 lg:h-96 rounded-full bg-primary "
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Image dans clip organique */}
            <div className="relative w-64 h-64 lg:w-80  lg:h-80 z-10">
              <img
                src="/images/project.jpg"
                alt="Nos projets"
                className="relative w-full h-full object-cover z-8  border-3 border-primary rounded-full"
               
              />

              <div className="bg-primary  w-72 h-104 absolute rounded-full left-5 top-15 z-5"
              />
            </div>

            {/* Carte flottante — Projets livrés ─────────────────── */}
            <motion.div
              className="absolute -bottom-6 -left-6 lg:-left-12 bg-white dark:bg-dark-surface border border-base-200 dark:border-slate-700/50 rounded-md shadow-xl px-4 py-3 flex items-center gap-3"
              initial={{ opacity: 0, x: -20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1.1, duration: 0.7 }}
            >
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="flex items-center gap-3"
              >
                <div className="bg-primary/10 dark:bg-primary/20 p-2.5 rounded-sm flex-shrink-0">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-lg font-bold text-ink dark:text-white leading-none">50+</p>
                  <p className="text-xs text-ink-muted dark:text-slate-400 mt-0.5">Projets livrés</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Carte flottante — Satisfaction ─────────────────── */}
            <motion.div
              className="absolute -top-6 -right-4 lg:-right-10 bg-white dark:bg-dark-surface border border-base-200 dark:border-slate-700/50 rounded-md shadow-xl px-4 py-3 flex items-center gap-3"
              initial={{ opacity: 0, x: 20, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1.3, duration: 0.7 }}
            >
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="flex items-center gap-3"
              >
                <div className="bg-primary/10 dark:bg-primary/20 p-2.5 rounded-sm flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-lg font-bold text-ink dark:text-white leading-none">98%</p>
                  <p className="text-xs text-ink-muted dark:text-slate-400 mt-0.5">Clients satisfaits</p>
                </div>
              </motion.div>
            </motion.div>

         
           
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroProject;
