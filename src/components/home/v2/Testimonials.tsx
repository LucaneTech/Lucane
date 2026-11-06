import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Eyebrow from "../../../ui/Eyebrow";
import { publishedTestimonials } from "../../../data/testimonials";
import { ease } from "../../../motion/presets";

/**
 * Témoignages (plan 3.11) : citation géante en fondu enchaîné.
 * N'affiche que les témoignages publiés avec l'accord du client ; sinon la section n'existe pas.
 */
export default function Testimonials() {
  const items = publishedTestimonials();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (items.length < 2) return;
    const id = setInterval(() => setI((v) => (v + 1) % items.length), 6000);
    return () => clearInterval(id);
  }, [items.length]);

  if (items.length === 0) return null;
  const t = items[i];

  return (
    <section className="relative py-24 md:py-36" aria-labelledby="testimonials-title">
      <div className="mx-auto w-full max-w-[1200px] px-5 md:px-10">
        <Eyebrow index="10">Ils en parlent</Eyebrow>
        <h2 id="testimonials-title" className="sr-only">
          Témoignages clients
        </h2>
        <div className="relative mt-10 min-h-[22rem] rounded-[40px] border border-glass-line bg-panel p-8 md:p-14">
          <AnimatePresence mode="wait">
            <motion.figure
              key={t.company}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
              transition={{ duration: 0.8, ease: ease.out }}
            >
              <blockquote className="font-display text-[clamp(1.75rem,3.6vw,3.25rem)] font-light leading-[1.15] tracking-[-0.03em] text-ink">
                « {t.quote} »
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-4">
                {t.logo && <img src={t.logo} alt={t.company} className="h-12 w-12 rounded-full bg-white object-contain p-2" />}
                <span>
                  <span className="block font-semibold text-ink">{t.name}</span>
                  <span className="block text-sm text-ink-muted">
                    {t.role}, {t.company}
                  </span>
                </span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
          {items.length > 1 && (
            <div className="absolute bottom-8 right-8 flex gap-2">
              {items.map((x, k) => (
                <button
                  key={x.company}
                  type="button"
                  onClick={() => setI(k)}
                  aria-label={`Témoignage ${k + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-500 ${k === i ? "w-8 bg-primary" : "w-2.5 bg-line"}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
