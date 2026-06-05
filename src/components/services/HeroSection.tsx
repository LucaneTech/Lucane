import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Image de fond */}
      <motion.img
        src="/images/services/service_developpement.png"
        alt="Services Lucane Tech"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ opacity: 0, scale: 1.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ opacity: { duration: 0.7 }, scale: { duration: 8, ease: "easeOut" } }}
      />

      {/* Overlay teal plate */}
      <motion.div
        className="absolute inset-0 bottom-0 bg-gradient-to-t from-primary/70 to-transparent pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      />
       <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            />

      {/* Motifs circulaires SVG */}
      <motion.svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <circle cx="10%" cy="80%" r="180" stroke="white" strokeWidth="4" fill="none" />
        <circle cx="10%" cy="80%" r="300" stroke="white" strokeWidth="5" fill="none" />
        <circle cx="85%" cy="20%" r="120" stroke="white" strokeWidth="4" fill="none" />
        <circle cx="85%" cy="20%" r="220" stroke="white" strokeWidth="5" fill="none" />
        <circle cx="50%" cy="50%" r="400" stroke="white" strokeWidth="4" fill="none" />
      </motion.svg>

      {/* Contenu */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-white text-center w-full">
        <motion.span
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="inline-block text-xs uppercase tracking-[0.2em] font-medium mb-4 text-white/70"
        >
          Nos services
        </motion.span>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-4xl lg:text-6xl font-bold mb-6 leading-tight"
        >
          Des solutions <br className="hidden lg:block" />sur mesure 
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-lg text-white/80 max-w-2xl mx-auto mb-10"
        >
          De la conception au déploiement, nous couvrons tous les aspects de votre transformation digitale avec une approche 100% sur mesure.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {["Développement Web & Mobile", "UX/UI Design", "Cloud & Infrastructure", "Conseil & Stratégie"].map((s) => (
            <span key={s} className="rounded-md bg-white/10 border border-white/20 text-white/90 px-5 py-2 text-sm font-medium">
              {s}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
