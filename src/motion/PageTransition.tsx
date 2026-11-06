import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { ease } from "./presets";

const TITLES: Record<string, string> = {
  "/": "Accueil",
  "/services": "Services",
  "/projets": "Réalisations",
  "/realisations": "Réalisations",
  "/technologies": "Technologies",
  "/a-propos": "À propos",
  "/contact": "Contact",
  "/__motion": "Banc d'essai",
  "/mentions-legales": "Mentions légales",
  "/confidentialite": "Confidentialité",
};

function titleFor(pathname: string) {
  const root = "/" + (pathname.split("/")[1] ?? "");
  return TITLES[pathname] ?? TITLES[root] ?? "Lucane";
}

/**
 * Rideau de changement de page : à chaque nouvelle adresse, un panneau inversé couvre
 * l'écran avec le titre de la page, puis se retire vers le haut en dévoilant le contenu.
 * Pas de rideau au tout premier affichage (l'ouverture s'en charge).
 */
export default function PageTransition() {
  const { pathname } = useLocation();
  // Adresse déjà affichée : évite un rideau au premier rendu (y compris le double rendu de StrictMode).
  const shown = useRef(pathname);
  const [run, setRun] = useState<{ key: number; title: string } | null>(null);

  useEffect(() => {
    if (shown.current === pathname) return;
    shown.current = pathname;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setRun({ key: Date.now(), title: titleFor(pathname) });
    const t = setTimeout(() => setRun(null), 650);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <AnimatePresence>
      {run && (
        <motion.div
          key={run.key}
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[9000] flex items-end bg-canvas-inverse px-5 pb-10 text-on-inverse md:px-16 md:pb-16"
          initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
          exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
          transition={{ duration: 0.8, ease: ease.inOut }}
        >
          <div className="overflow-hidden">
            <motion.span
              className="display-1 block"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-30%", opacity: 0 }}
              transition={{ duration: 0.6, ease: ease.out }}
            >
              {run.title}
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
