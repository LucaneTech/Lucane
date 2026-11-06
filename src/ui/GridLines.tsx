import { motion } from "framer-motion";
import { cn } from "./utils";
import { ease } from "../motion/presets";

/**
 * Lignes verticales de la grille, en fond. Elles se tracent du haut vers le bas
 * au chargement, puis « respirent » très lentement (repos).
 */
export default function GridLines({ columns = 4, className }: { columns?: number; className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 -z-0", className)}>
      <div className="mx-auto flex h-full w-full max-w-[1440px] justify-between px-5 md:px-10 lg:px-16">
        {Array.from({ length: columns + 1 }).map((_, i) => (
          <motion.span
            key={i}
            className="block h-full w-px origin-top bg-line"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1, opacity: [0.55, 1, 0.55] }}
            transition={{
              scaleY: { duration: 1.6, ease: ease.out, delay: 0.15 * i },
              opacity: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 },
            }}
          />
        ))}
      </div>
    </div>
  );
}
