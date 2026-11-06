import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import Eyebrow from "./Eyebrow";
import { M } from "../motion/kit";
import type { Faq } from "../data/faq";
import { ease } from "../motion/presets";

/** FAQ en cartes arrondies : la croix pivote, la réponse se déplie en douceur. */
export default function FaqAccordion({ items, index }: { items: Faq[]; index?: string }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-24 md:py-32" aria-labelledby="faq-title">
      <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-5 md:px-10 lg:grid-cols-[1fr_1.7fr] lg:px-16">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Eyebrow index={index}>Questions fréquentes</Eyebrow>
          <M.H2 className="mt-6" id="faq-title">
            Vous vous demandez sûrement…
          </M.H2>
        </div>
        <div className="space-y-3">
          {items.map((f, i) => {
            const on = open === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: ease.out, delay: (i % 4) * 0.05 }}
                className={`overflow-hidden rounded-md border transition-colors duration-500 ${on ? "border-primary/40 bg-panel shadow-glow" : "border-glass-line bg-panel"}`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(on ? null : i)}
                  aria-expanded={on}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left md:px-8 md:py-6"
                >
                  <span className="font-display text-lg font-semibold text-ink md:text-xl">{f.q}</span>
                  <motion.span
                    animate={{ rotate: on ? 135 : 0, backgroundColor: on ? "var(--primary)" : "var(--canvas-alt)" }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${on ? "text-on-primary" : "text-ink"}`}
                  >
                    <Plus className="h-5 w-5" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {on && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: ease.out }}
                    >
                      <p className="px-6 pb-6 leading-relaxed text-ink-muted md:px-8 md:pb-7">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
