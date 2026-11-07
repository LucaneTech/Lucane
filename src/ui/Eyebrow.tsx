import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "./utils";
import { dur, ease } from "../motion/presets";

/**
 * Libellé de section : un texte simple en Sen, couleur d'accent, qui monte à l'apparition.
 * (`index` est accepté pour compatibilité mais n'est plus affiché.)
 */
export default function Eyebrow({ children, className }: { index?: string; children: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.8 });

  return (
    <p ref={ref} className={cn("kicker overflow-hidden text-base text-primary-ink md:text-[1.0625rem]", className)}>
      <motion.span
        className="block"
        initial={{ y: "110%", opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : undefined}
        transition={{ duration: dur.slow, ease: ease.out }}
      >
        {children}
      </motion.span>
    </p>
  );
}
