import type { ReactNode } from "react";
import { motion } from "framer-motion";
import PageHero from "./PageHero";
import { ease } from "../motion/presets";

export interface LegalBlock {
  title: string;
  body: ReactNode;
}

/** Mise en page des pages légales : en-tête, puis blocs arrondis numérotés qui entrent en cascade. */
export default function LegalPage({ eyebrow, light, bold, updated, blocks }: { eyebrow: string; light: string; bold: string; updated: string; blocks: LegalBlock[] }) {
  return (
    <>
      <PageHero eyebrow={eyebrow} light={light} bold={bold} lead={`Dernière mise à jour : ${updated}`} tone="indigo" />
      <section className="relative pb-28" aria-label={eyebrow}>
        <div className="mx-auto w-full max-w-4xl space-y-5 px-5 md:px-10">
          {blocks.map((b, i) => (
            <motion.article
              key={b.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: ease.out }}
              className="rounded-md border border-glass-line bg-panel p-7 md:p-10"
            >
              <p className="font-sans text-sm text-primary-ink">0{i + 1}</p>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-[-0.02em] text-ink md:text-3xl">{b.title}</h2>
              <div className="mt-4 space-y-3 leading-relaxed text-ink-muted [&_strong]:text-ink">{b.body}</div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}
