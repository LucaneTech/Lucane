import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "./utils";
import { dur, ease } from "../motion/presets";

/**
 * Étiquette de section en pilule vitrée : pastille lumineuse qui pulse, numéro mono, libellé.
 * La pilule s'ouvre en largeur à l'entrée, le texte monte.
 */
export default function Eyebrow({ index, children, className }: { index?: string; children: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.8 });

  return (
    <motion.div
      ref={ref}
      className={cn(
        "eyebrow inline-flex items-center gap-2.5 rounded-full border border-glass-line bg-glass px-4 py-2 text-primary-ink backdrop-blur-xl",
        className
      )}
      initial={{ opacity: 0, scale: 0.85, y: 10 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : undefined}
      transition={{ duration: dur.base, ease: ease.out }}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
      </span>
      {index && <span className="text-ink-muted">{index}</span>}
      <span className="overflow-hidden">
        <motion.span
          className="block"
          initial={{ y: "110%" }}
          animate={inView ? { y: 0 } : undefined}
          transition={{ duration: dur.slow, ease: ease.out, delay: 0.15 }}
        >
          {children}
        </motion.span>
      </span>
    </motion.div>
  );
}
