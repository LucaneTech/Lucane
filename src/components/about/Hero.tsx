import React from "react";
import { motion } from "framer-motion";
import { Globe, Users, TrendingUp } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "20+",  label: "Projets livrés" },
  { icon: Globe,      value: "3",    label: "Continents" },
  { icon: Users,      value: "98%",  label: "Satisfaction" },
];

const AboutHero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-base-100 dark:bg-dark pt-24 pb-16 px-6">

      {/* ── Dot grid background ───────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(0,128,128,0.18) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.35,
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* ── Ghost word behind right column ───────────────────── */}
      <div
        className="absolute right-[-4vw] top-1/2 -translate-y-1/2 text-[22vw] font-black leading-none select-none pointer-events-none tracking-tighter text-primary opacity-[0.09] dark:opacity-[0.12] whitespace-nowrap"
        
      >
        IMPACT
      </div>

      {/* ── Main grid ────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-[56fr_44fr] gap-12 lg:gap-20 items-center">

          {/* ── Colonne gauche — contenu ──────────────────────── */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="hidden lg:inline-flex items-center gap-2 rounded-md bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm text-primary font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              À propos de Lucane
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              className="text-4xl sm:text-5xl lg:text-[3.6rem] font-bold text-ink dark:text-white leading-[1.1] mb-6"
            >
              Une équipe{" "}
              <span className="text-primary">passionnée,</span>
              <br />
              un impact réel
            </motion.h1>

            {/* Barre accent teal animée */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
              className="w-14 h-[3px] bg-primary rounded-full mb-9 origin-left"
            />

            {/* Quote du CEO */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.8 }}
              className="relative lg:pl-5 lg:border-l-2 lg:border-primary/40 mb-10 max-w-[520px] mx-auto lg:mx-0"
            >
              {/* Guillemet décoratif */}
              <span
                className="absolute -top-5 -left-3 text-[5rem] font-black leading-none select-none"
                style={{ color: "rgba(0,128,128,0.15)" }}
                aria-hidden
              >
                "
              </span>
              <p className="text-base leading-relaxed text-ink-muted dark:text-slate-300 italic max-w-[480px] mx-auto lg:mx-0">
                La technologie est le meilleur levier pour développer l'Afrique.
                Notre mission est de la rendre accessible à tous les entrepreneurs.
              </p>
              <footer className="mt-4 flex items-center justify-center lg:justify-start gap-3">
                <div className="w-6 h-[2px] bg-primary/50 rounded-full" />
                <span className="text-sm font-bold text-ink dark:text-white">
                  Francisco Mouanda
                </span>
                <span className="text-xs text-ink-muted dark:text-slate-500">
                  Fondateur &amp; CEO
                </span>
              </footer>
            </motion.blockquote>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.72, duration: 0.6 }}
              className="flex flex-wrap gap-8 justify-center lg:justify-start"
            >
              {stats.map(({ icon: Icon, value, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.72 + i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-primary" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-ink dark:text-white leading-none">{value}</p>
                    <p className="text-xs text-ink-muted dark:text-slate-400 mt-0.5">{label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ── Colonne droite — composition géométrique ─────── */}
          <motion.div
            className="relative flex justify-center items-center h-[280px] sm:h-[360px] lg:h-[460px]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: "easeOut" }}
          >
            {/* SVG principal : arcs concentriques + arc bold */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 400 400"
              fill="none"
              overflow="visible"
            >
              {/* Cercle dashed externe */}
              <motion.circle
                cx="200" cy="200" r="175"
                stroke="var(--color-primary)"
                strokeWidth="1"
                strokeDasharray="5 10"
                opacity="0.2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2, rotate: 360 }}
                transition={{ opacity: { delay: 0.6, duration: 0.8 }, rotate: { duration: 60, repeat: Infinity, ease: "linear" } }}
                style={{ transformOrigin: "200px 200px" }}
              />

              {/* Anneau moyen */}
              <circle
                cx="200" cy="200" r="130"
                stroke="var(--color-primary)"
                strokeWidth="1.5"
                opacity="0.12"
              />

              {/* Anneau intérieur */}
              <circle
                cx="200" cy="200" r="82"
                stroke="var(--color-primary)"
                strokeWidth="1"
                opacity="0.1"
              />

              {/* ARC BOLD — signature visuelle unique (270° top→left) */}
              <motion.path
                d="M 200 25 A 175 175 0 1 1 25 200"
                stroke="var(--color-primary)"
                strokeWidth="6"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1.4, ease: "easeOut" }}
              />

              {/* Arc court accent bas-droite */}
              <motion.path
                d="M 25 200 A 175 175 0 0 0 200 375"
                stroke="var(--color-primary)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="8 6"
                fill="none"
                opacity="0.4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
              />

              {/* Croix centrale décorative */}
              <line x1="200" y1="182" x2="200" y2="218" stroke="var(--color-primary)" strokeWidth="1.5" opacity="0.3" />
              <line x1="182" y1="200" x2="218" y2="200" stroke="var(--color-primary)" strokeWidth="1.5" opacity="0.3" />
            </svg>

            {/* ── Cercle central pulsant ──────────────────────── */}
            <motion.div
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-28 h-28 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/15 border border-primary/25 flex items-center justify-center">
                <span className="text-primary text-xs font-bold tracking-[0.15em] uppercase">Lucane</span>
              </div>
            </motion.div>

            {/* ── Carte flottante — Fondée en ─────────────────── */}
            <motion.div
              className="absolute top-10 left-0 lg:-left-8 bg-white dark:bg-dark-surface border border-base-200 dark:border-slate-700/50 rounded-md shadow-xl px-4 py-3"
              initial={{ opacity: 0, x: -20, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1.1, duration: 0.7 }}
            >
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-xl font-bold text-ink dark:text-white leading-none">2023</p>
                <p className="text-xs text-ink-muted dark:text-slate-400 mt-0.5">Année de fondation</p>
              </motion.div>
            </motion.div>

            {/* ── Carte flottante — Mission ────────────────────── */}
            <motion.div
              className="absolute bottom-10 right-0 lg:-right-8 bg-white dark:bg-dark-surface border border-base-200 dark:border-slate-700/50 rounded-md shadow-xl px-4 py-3 max-w-[155px]"
              initial={{ opacity: 0, x: 20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1.3, duration: 0.7 }}
            >
              <motion.div
                animate={{ y: [3, -3, 3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-[10px] font-semibold text-primary uppercase tracking-widest mb-1">Mission</p>
                <p className="text-xs text-ink-muted dark:text-slate-400 leading-relaxed">
                  Tech accessible aux entrepreneurs africains
                </p>
              </motion.div>
            </motion.div>

            {/* ── Dots décoratifs haut-droite ──────────────────── */}
            <svg className="absolute top-10 right-6 w-20 h-20 opacity-30" viewBox="0 0 80 80" fill="none">
              {[0, 1, 2, 3].map((row) =>
                [0, 1, 2, 3].map((col) => (
                  <circle
                    key={`tr-${row}-${col}`}
                    cx={col * 20 + 10}
                    cy={row * 20 + 10}
                    r="2"
                    fill="var(--color-primary)"
                  />
                ))
              )}
            </svg>

            {/* ── Dots décoratifs bas-gauche ───────────────────── */}
            <svg className="absolute bottom-8 left-6 w-16 h-16 opacity-20" viewBox="0 0 64 64" fill="none">
              {[0, 1, 2].map((row) =>
                [0, 1, 2].map((col) => (
                  <circle
                    key={`bl-${row}-${col}`}
                    cx={col * 24 + 12}
                    cy={row * 24 + 12}
                    r="2.5"
                    fill="var(--color-primary)"
                  />
                ))
              )}
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
