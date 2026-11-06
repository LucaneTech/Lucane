// Fond global : deux halos irisés qui dérivent lentement (mouvement « au repos »)
// et une grille très discrète. Les halos sont des dégradés radiaux déjà doux : pas de filtre de flou
// (coûteux sur mobile), seulement des déplacements GPU.
import { motion } from "framer-motion";
import GridLines from "../ui/GridLines";

interface BackgroundProps {
  /** @deprecated conservé pour compatibilité, sans effet */
  accentColorClass?: string;
  className?: string;
}

export default function Background({ className = "" }: BackgroundProps) {
  return (
    <div aria-hidden className={`pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-canvas ${className}`}>
      <motion.div
        className="absolute -left-[15vw] -top-[20vh] h-[70vh] w-[70vh] rounded-full bg-[radial-gradient(circle,rgba(0,163,163,0.35),transparent_65%)] will-change-transform dark:bg-[radial-gradient(circle,rgba(60,224,208,0.22),transparent_65%)]"
        animate={{ x: [0, 120, -40, 0], y: [0, 80, 160, 0], scale: [1, 1.15, 0.95, 1] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-[25vh] -right-[10vw] h-[75vh] w-[75vh] rounded-full bg-[radial-gradient(circle,rgba(91,108,255,0.22),rgba(255,122,61,0.12)_45%,transparent_70%)] will-change-transform dark:bg-[radial-gradient(circle,rgba(91,108,255,0.25),rgba(255,122,61,0.15)_45%,transparent_70%)]"
        animate={{ x: [0, -140, 30, 0], y: [0, -90, -30, 0], scale: [1, 0.9, 1.1, 1] }}
        transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
      />
      <GridLines columns={4} className="opacity-40" />
    </div>
  );
}
