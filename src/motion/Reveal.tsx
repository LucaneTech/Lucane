import { useRef } from "react";
import type { ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "../ui/utils";
import { dur, ease } from "./presets";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** true : le contenu monte depuis un masque ; false : fondu + translation. */
  mask?: boolean;
  y?: number;
  once?: boolean;
}

/** Apparition au défilement : l'enfant monte (dans un masque ou en fondu) quand 20 % est visible. */
export default function Reveal({ children, className, delay = 0, mask = false, y = 40, once = true }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, amount: 0.2 });

  return (
    <div ref={ref} className={cn(mask && "overflow-hidden", className)}>
      <motion.div
        initial={mask ? { y: "110%" } : { y, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : undefined}
        transition={{ duration: dur.slow, ease: ease.out, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}
