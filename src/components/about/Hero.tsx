import React from "react";
import { motion } from "framer-motion";
import Button from "../../ui/Button";

const AboutHero: React.FC = () => {
  return (
    <section className="bg-surface pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left — text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="text-xs uppercase tracking-widest text-primary font-medium block mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            À propos
          </motion.span>

          <motion.h1
            className="text-5xl font-bold text-ink mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Une équipe passionnée,
            <br />
            un <span className="text-primary">impact réel</span>
          </motion.h1>

          <motion.p
            className="text-ink-muted text-lg leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Lucane Tech est une agence franco-congolaise fondée en 2021.
            Nous concevons des produits digitaux ambitieux pour les entreprises
            d'Afrique et de la diaspora, en combinant excellence technique et
            design de qualité internationale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Button variant="primary" label="Nous contacter" to="/contact" />
          </motion.div>
        </motion.div>

        {/* Right — image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img
            src="/images/about/lucane.png"
            alt="Équipe Lucane Tech"
            className="rounded-xl w-full object-cover shadow-lg"
          />
          {/* Decorative teal accent */}
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
