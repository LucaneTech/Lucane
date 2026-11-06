import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useLenis } from "lenis/react";

/** Retour en haut : carré à filet, à gauche du bouton WhatsApp ; la flèche file vers le haut au survol. */
export default function BackToTop() {
  const lenis = useLenis();
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => setVisible(v > 600));

  const toTop = () => {
    if (lenis) lenis.scrollTo(0, { duration: 1.4 });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={toTop}
          aria-label="Retour en haut"
          className="group fixed bottom-6 right-[5.25rem] z-[800] flex h-[52px] w-[52px] items-center justify-center overflow-hidden rounded-full border border-glass-line bg-glass text-ink backdrop-blur-xl"
          initial={{ scale: 0, opacity: 0, rotate: -90 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          exit={{ scale: 0, opacity: 0, rotate: 90 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          whileTap={{ scale: 0.92 }}
        >
          <span className="relative block h-5 w-5 overflow-hidden">
            <ArrowUp className="absolute inset-0 h-5 w-5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full" strokeWidth={1.75} />
            <ArrowUp className="absolute inset-0 h-5 w-5 translate-y-full text-primary transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" strokeWidth={1.75} />
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
