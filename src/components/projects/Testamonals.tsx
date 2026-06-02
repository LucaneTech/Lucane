import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Jean-Pierre Kone",
    role: "CEO",
    company: "Kone Group",
    avatar: "/collaborators/kone.png",
    rating: 5,
    quote:
      "Lucane Tech a transformé notre gestion commerciale. Livraison rapide, équipe professionnelle.",
  },
  {
    name: "Marie Dubois",
    role: "Directrice Marketing",
    company: "Oralise",
    avatar: "/images/team/ceo.jpeg",
    rating: 5,
    quote:
      "Excellent travail sur notre plateforme. Le design est moderne et l'UX est parfaite.",
  },
  {
    name: "François Eemci",
    role: "DRH",
    company: "EEMCI",
    avatar: "/collaborators/eemci.webp",
    rating: 5,
    quote:
      "Application mobile de qualité professionnelle. Notre équipe est ravie.",
  },
];

const variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -80 : 80,
    opacity: 0,
  }),
};

const Testamonals: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback(
    (delta: number) => {
      setDirection(delta);
      setIndex(
        (prev) => (prev + delta + testimonials.length) % testimonials.length
      );
    },
    []
  );

  // Auto-play every 4s
  useEffect(() => {
    const id = setInterval(() => go(1), 4000);
    return () => clearInterval(id);
  }, [go]);

  const t = testimonials[index];

  return (
    <section className="py-20 px-6 bg-surface-alt">
      <div className="max-w-3xl mx-auto text-center">
        {/* Section header */}
        <motion.span
          className="text-xs uppercase tracking-widest text-primary font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Témoignages
        </motion.span>
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-ink mt-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Ce que disent nos{" "}
          <span className="text-primary">clients</span>
        </motion.h2>

        {/* Carousel card */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="bg-white rounded-xl shadow-sm border border-surface-alt p-8 md:p-10"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-ink text-lg md:text-xl leading-relaxed italic mb-8">
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary/20 flex-shrink-0"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://ui-avatars.com/api/?name=" +
                      encodeURIComponent(t.name) +
                      "&background=008080&color=fff";
                  }}
                />
                <div className="text-left">
                  <p className="font-bold text-ink">{t.name}</p>
                  <p className="text-sm text-ink-muted">
                    {t.role} — {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={() => go(-1)}
            className="w-10 h-10 rounded-full border border-ink-faint flex items-center justify-center text-ink-muted hover:border-primary hover:text-primary transition-colors"
            aria-label="Précédent"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                className={`rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-6 h-2 bg-primary"
                    : "w-2 h-2 bg-ink-faint hover:bg-ink-muted"
                }`}
                aria-label={`Témoignage ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => go(1)}
            className="w-10 h-10 rounded-full border border-ink-faint flex items-center justify-center text-ink-muted hover:border-primary hover:text-primary transition-colors"
            aria-label="Suivant"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testamonals;
