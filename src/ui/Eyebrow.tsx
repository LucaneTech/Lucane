import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "./utils";
import { dur, ease } from "../motion/presets";

/** Étiquette de section en police mono : « 01 — Services ». Le filet se trace, le texte glisse. */
export default function Eyebrow({ index, children, className }: { index?: string; children: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.8 });

  return (
    <div ref={ref} className={cn("eyebrow flex items-center gap-3 text-primary-ink", className)}>
      {index && (
        <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : undefined} transition={{ duration: dur.base }}>
          {index}
        </motion.span>
      )}
      <motion.span
        aria-hidden
        className="block h-px w-8 origin-left bg-current"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : undefined}
        transition={{ duration: dur.slow, ease: ease.out, delay: 0.1 }}
      />
      <span className="overflow-hidden">
        <motion.span
          className="block"
          initial={{ y: "110%" }}
          animate={inView ? { y: 0 } : undefined}
          transition={{ duration: dur.slow, ease: ease.out, delay: 0.2 }}
        >
          {children}
        </motion.span>
      </span>
    </div>
  );
}
