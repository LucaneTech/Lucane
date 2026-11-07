import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ease } from "../motion/presets";

const SESSION_KEY = "lucane-intro-seen";
const LETTERS = Array.from("LUCANE");

/** Signale la fin de l'ouverture aux sections qui attendent pour démarrer (hero). */
export const INTRO_DONE_EVENT = "lucane:intro-done";

/** Marque la fin de l'ouverture (drapeau global + événement) pour les composants montés plus tard. */
function signalDone() {
  (window as unknown as { __lucaneIntroDone?: boolean }).__lucaneIntroDone = true;
  window.dispatchEvent(new Event(INTRO_DONE_EVENT));
}

function shouldPlay() {
  try {
    if (sessionStorage.getItem(SESSION_KEY)) return false;
  } catch {
    /* ignore */
  }
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Ouverture de 1,4 s, une seule fois par visite : le mot LUCANE monte lettre par lettre,
 * un filet teal se trace, puis le rideau se lève vers le haut et dévoile le site.
 */
export default function Intro() {
  const [playing, setPlaying] = useState(shouldPlay);

  useEffect(() => {
    if (!playing) {
      signalDone();
      return;
    }
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* ignore */
    }
    const t = setTimeout(() => setPlaying(false), 1400);
    return () => clearTimeout(t);
  }, [playing]);

  return (
    <AnimatePresence onExitComplete={signalDone}>
      {playing && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[11000] flex items-center justify-center bg-canvas-inverse text-on-inverse"
          initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
          exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
          transition={{ duration: 0.9, ease: ease.inOut }}
        >
          <div className="flex flex-col items-center gap-5">
            <div className="flex overflow-hidden font-display text-5xl font-extrabold tracking-[-0.04em] md:text-7xl">
              {LETTERS.map((l, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: ease.out, delay: 0.05 + i * 0.05 }}
                >
                  {l}
                </motion.span>
              ))}
            </div>
            <motion.span
              className="block h-px w-40 origin-left bg-primary"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, ease: ease.out, delay: 0.35 }}
            />
            <motion.span
              className="kicker text-sm text-on-inverse/60"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              Build. Launch. Grow.
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
