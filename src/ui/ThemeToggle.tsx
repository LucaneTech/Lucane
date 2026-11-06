import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../theme/ThemeProvider";
import { cn } from "./utils";

/** Bouton carré clair/sombre : l'icône pivote et se remplace, le thème s'étend en cercle. */
export default function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      type="button"
      onClick={(e) => toggle(e)}
      aria-label={isDark ? "Passer en thème clair" : "Passer en thème sombre"}
      title={isDark ? "Thème clair" : "Thème sombre"}
      data-cursor="pointer"
      className={cn(
        "group relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full",
        "border border-glass-line bg-glass text-ink backdrop-blur-xl transition-colors duration-300",
        className
      )}
      whileTap={{ scale: 0.9 }}
    >
      {/* Aplat qui monte au survol */}
      <span
        aria-hidden
        className="absolute inset-0 origin-bottom scale-y-0 rounded-full bg-ink transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100"
      />
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          className="relative text-ink transition-colors duration-300 group-hover:text-canvas"
          initial={{ rotate: -90, scale: 0.4, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 90, scale: 0.4, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          {isDark ? <Sun size={18} strokeWidth={1.75} /> : <Moon size={18} strokeWidth={1.75} />}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
