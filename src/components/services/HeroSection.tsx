import { motion } from "framer-motion";

const serviceBadges = [
  "Dév Web",
  "Dév Mobile",
  "UX/UI Design",
  "Cloud",
  "Conseil",
  "Marketing",
];

const HeroSection = () => {
  return (
    <section className="relative bg-dark pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        {/* Eyebrow */}
        <motion.span
          className="inline-block text-xs uppercase tracking-widest text-primary font-medium mb-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Nos services
        </motion.span>

        {/* Title */}
        <motion.h1
          className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Des solutions{" "}
          <span className="text-primary">sur mesure</span>
          <br />
          pour votre croissance
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-white/60 text-lg max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          De la conception à la mise en production, nous couvrons tous les
          aspects de votre transformation digitale.
        </motion.p>

        {/* Service pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          {serviceBadges.map((s) => (
            <span
              key={s}
              className="rounded-pill bg-white/5 border border-white/10 text-white/70 px-5 py-2 text-sm"
            >
              {s}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Decorative rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-primary/10 pointer-events-none" />
    </section>
  );
};

export default HeroSection;
