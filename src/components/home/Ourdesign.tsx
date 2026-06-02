import React from "react";
import { motion } from "framer-motion";

const designs = [
  {
    id: 1,
    imageSrc: "images/home/design1.jpg",
    alt: "Design UI UX d'une application de gestion scolaire",
    title: "Application de Gestion Scolaire",
  },
  {
    id: 2,
    imageSrc: "images/home/design3.jpg",
    alt: "Design UI UX d'une plateforme e-commerce",
    title: "Plateforme E-commerce Multi-vendeurs",
  },
  {
    id: 3,
    imageSrc: "images/home/design4.jpg",
    alt: "Design UI UX d'un site e-commerce de mode",
    title: "Boutique en Ligne de Mode",
  },
  {
    id: 4,
    imageSrc: "images/home/design2.jpg",
    alt: "Design UI UX d'une application mobile de fitness",
    title: "Application Mobile Fitness & Coaching",
  },
];

const Ourdesign: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 xl:px-24 bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
            Nos réalisations visuelles
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-4">
            Notre travail <span className="text-primary">parle pour nous</span>
          </h2>
          <p className="text-ink-muted max-w-xl mx-auto leading-relaxed">
            Des interfaces pensées pour l'impact et l'expérience utilisateur.
          </p>
        </motion.div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {designs.map((design, index) => (
            <motion.div
              key={design.id}
              className="break-inside-avoid mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="relative group overflow-hidden rounded-xl">
                <img
                  src={design.imageSrc}
                  alt={design.alt}
                  loading="lazy"
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 p-4">
                  <span className="text-white font-semibold text-center text-sm">{design.title}</span>
                  <span className="text-white/80 text-xs">Voir →</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ourdesign;
