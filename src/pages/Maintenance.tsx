import { motion } from "framer-motion";
import { Settings } from "lucide-react";
import IrisOrb from "../ui/IrisOrb";
import { ease } from "../motion/presets";

/**
 * Page de maintenance (non routée par défaut — à activer dans App.tsx si besoin) :
 * engrenage dans une pilule qui pivote, deux formes irisées, barre de progression arrondie.
 */
export default function Maintenance() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-canvas px-4">
      <IrisOrb className="-left-20 top-[15%] h-72 w-72" tone="teal" />
      <IrisOrb className="-right-16 bottom-[10%] h-80 w-80" tone="sunset" duration={18} />

      <div className="relative flex w-full max-w-md flex-col items-center rounded-md border border-glass-line bg-glass p-10 text-center backdrop-blur-2xl">
        <motion.div
          className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-on-primary shadow-glow"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <Settings className="h-9 w-9" strokeWidth={1.5} />
        </motion.div>

        <motion.div
          className="mt-8 flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: ease.out }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#ff7a3d]/30 bg-[#ff7a3d]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#c2410c] dark:text-[#ff9a62]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#ff7a3d]" />
            En maintenance
          </span>
          <h1 className="font-display text-4xl font-extrabold tracking-[-0.04em] text-ink">Nous revenons très bientôt</h1>
          <p className="text-ink-muted">Des améliorations sont en cours de déploiement. Le service sera rétabli dans quelques instants.</p>
          <div className="mt-2 h-2 w-full max-w-xs overflow-hidden rounded-full bg-canvas-alt">
            <motion.div
              className="h-full w-1/3 rounded-full bg-[linear-gradient(90deg,#008080,#3ce0d0,#5b6cff)]"
              animate={{ x: ["-100%", "300%"] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
