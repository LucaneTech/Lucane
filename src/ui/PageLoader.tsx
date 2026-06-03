import { motion, AnimatePresence } from "framer-motion";

interface PageLoaderProps {
  isLoading: boolean;
}

const breathe = (delay: number, duration: number, scaleMax = 1.25) => ({
  animate: {
    scale: [1, scaleMax, 1],
    opacity: [0.45, 0.9, 0.45],
  },
  transition: {
    duration,
    repeat: Infinity,
    ease: "easeInOut" as const,
    delay,
  },
});

const float = (
  delay: number,
  duration: number,
  dx = 0,
  dy = 0,
  scaleMax = 1.2
) => ({
  animate: {
    scale: [1, scaleMax, 1],
    opacity: [0.4, 0.85, 0.4],
    x: [0, dx, 0],
    y: [0, dy, 0],
  },
  transition: {
    duration,
    repeat: Infinity,
    ease: "easeInOut" as const,
    delay,
  },
});

export default function PageLoader({ isLoading }: PageLoaderProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9998] bg-dark flex flex-col items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* ── Système orbital ── */}
          <div className="relative w-56 h-56 flex items-center justify-center">

            {/* Anneau externe — respiration lente */}
           

            {/* Anneau intérieur — plus vif */}
            <motion.div
              className="absolute w-28 h-28 rounded-full border border-primary/30"
              {...breathe(0.9, 2.6, 1.12)}
            />

            {/* ── Bulles orbitales — toutes derrière le logo (z-0) ── */}

            {/* Nord-Est · teal · medium */}
            <motion.div
              className="absolute w-5 h-5 rounded-full bg-primary/20 z-0"
              style={{ top: "18px", right: "28px" }}
              {...float(0, 2.4, 3, -4, 1.3)}
            />

            {/* Est · blanc · small */}
            <motion.div
              className="absolute w-3 h-3 rounded-full bg-white/30 z-0"
              style={{ right: "12px", top: "50%", marginTop: "-6px" }}
              {...float(0.6, 1.9, 4, 2, 1.4)}
            />

            {/* Sud-Est · teal · large */}
            <motion.div
              className="absolute w-7 h-7 rounded-full bg-primary/35 z-0"
              style={{ bottom: "20px", right: "22px" }}
              {...float(1.0, 2.8, 4, 5, 1.2)}
            />

            {/* Sud · blanc · xsmall */}
            <motion.div
              className="absolute w-2.5 h-2.5 rounded-full bg-white/20 z-0"
              style={{ bottom: "12px", left: "50%", marginLeft: "-5px" }}
              {...float(1.5, 2.1, -2, 4, 1.5)}
            />

            {/* Sud-Ouest · teal · medium */}
            <motion.div
              className="absolute w-6 h-6 rounded-full bg-primary/40 z-0"
              style={{ bottom: "22px", left: "24px" }}
              {...float(0.4, 3.0, -4, 4, 1.25)}
            />

            {/* Ouest · blanc · medium */}
            <motion.div
              className="absolute w-4 h-4 rounded-full bg-white/25 z-0"
              style={{ left: "10px", top: "50%", marginTop: "-8px" }}
              {...float(0.8, 2.3, -4, -2, 1.35)}
            />

            {/* Nord-Ouest · teal · small */}
            <motion.div
              className="absolute w-3 h-3 rounded-full bg-primary/55 z-0"
              style={{ top: "24px", left: "30px" }}
              {...float(1.2, 2.0, -3, -4, 1.4)}
            />

            {/* Nord · blanc · large */}
            <motion.div
              className="absolute w-5 h-5 rounded-full bg-white/15 z-0"
              style={{ top: "14px", left: "50%", marginLeft: "-10px" }}
              {...float(0.3, 2.7, 2, -5, 1.2)}
            />

            {/* ── Logo — premier plan ── */}
            <motion.img
              src="/favicon.png"
              alt="Lucane Tech"
              className="relative z-10 w-20 h-20 object-contain"
              style={{ filter: "drop-shadow(0 0 16px rgba(0,128,128,0.4))" }}
              animate={{ scale: [1, 1.07, 1] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>


          {/* Barre de progression */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-dark-surface">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
