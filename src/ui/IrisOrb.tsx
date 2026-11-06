import { motion } from "framer-motion";
import { cn } from "./utils";

interface IrisOrbProps {
  className?: string;
  /** Durée d'un cycle de flottement (s). */
  duration?: number;
  /** Variante de teinte. */
  tone?: "teal" | "sunset" | "indigo";
}

// Dégradés radiaux superposés : une matière irisée douce, sans « centre » visible.
const TONES = {
  teal: "radial-gradient(circle at 28% 30%, #9ff5ea 0%, transparent 42%), radial-gradient(circle at 72% 38%, #5b6cff 0%, transparent 55%), radial-gradient(circle at 45% 80%, #ff7a3d 0%, transparent 50%), radial-gradient(circle, #2cc6b8, #008080)",
  sunset: "radial-gradient(circle at 30% 28%, #ffd2b8 0%, transparent 40%), radial-gradient(circle at 70% 45%, #ff7a3d 0%, transparent 55%), radial-gradient(circle at 35% 80%, #5b6cff 0%, transparent 55%), radial-gradient(circle, #ff9a62, #c2410c)",
  indigo: "radial-gradient(circle at 32% 28%, #d6dbff 0%, transparent 40%), radial-gradient(circle at 70% 60%, #3ce0d0 0%, transparent 55%), radial-gradient(circle at 30% 78%, #ff7a3d 0%, transparent 50%), radial-gradient(circle, #7b88ff, #3c4fe0)",
};

/**
 * Forme irisée flottante (d'après l'épingle « protect your data ») : un disque déformé
 * qui tourne, respire et change lentement de forme. Purement décoratif.
 */
export default function IrisOrb({ className, duration = 14, tone = "teal" }: IrisOrbProps) {
  return (
    <motion.div
      aria-hidden
      className={cn("pointer-events-none absolute", className)}
      animate={{ y: [0, -24, 0], rotate: [0, 18, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.div
        className="h-full w-full opacity-85 blur-[1px] dark:opacity-95"
        style={{ background: TONES[tone], mixBlendMode: "normal" }}
        animate={{
          borderRadius: [
            "62% 38% 55% 45% / 48% 60% 40% 52%",
            "40% 60% 38% 62% / 60% 42% 58% 40%",
            "62% 38% 55% 45% / 48% 60% 40% 52%",
          ],
          rotate: [0, 360],
        }}
        transition={{
          borderRadius: { duration: duration * 0.8, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: duration * 3, repeat: Infinity, ease: "linear" },
        }}
      />
      {/* reflet intérieur : donne le volume « verre » */}
      <div className="absolute inset-[18%] rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.75),transparent_55%)] mix-blend-soft-light" />
      <div className="absolute inset-0 -z-10 rounded-full bg-inherit opacity-50 blur-3xl" style={{ background: TONES[tone] }} />
    </motion.div>
  );
}
