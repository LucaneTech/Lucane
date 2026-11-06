import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { useLocation } from "react-router-dom";
import { hasFinePointer, prefersReducedMotion } from "./presets";

/**
 * À chaque changement de page : retour en haut, ou défilement vers l'ancre (#web, #formulaire…)
 * une fois la page chargée (elle peut arriver un peu après, chargement à la demande).
 */
function RouteReset() {
  const { pathname, hash } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (!hash) {
      if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
      else window.scrollTo(0, 0);
      return;
    }
    let tries = 0;
    const id = decodeURIComponent(hash.slice(1));
    const timer = setInterval(() => {
      const el = document.getElementById(id);
      if (el || ++tries > 30) {
        clearInterval(timer);
        if (!el) return;
        const target = el.getBoundingClientRect().top + window.scrollY - 110;
        if (lenis) {
          // la page vient de grandir (chargement à la demande) : Lenis doit recalculer sa limite
          lenis.resize();
          lenis.scrollTo(target, { duration: 1.4, force: true });
        } else {
          window.scrollTo({ top: target, behavior: "smooth" });
        }
      }
    }, 100);
    return () => clearInterval(timer);
  }, [pathname, hash, lenis]);

  return null;
}

/** Défilement inertiel Lenis sur ordinateur ; défilement natif sur tactile ou en mouvement réduit. */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  const [enabled] = useState(() => hasFinePointer() && !prefersReducedMotion());

  if (!enabled) {
    return (
      <>
        <RouteReset />
        {children}
      </>
    );
  }

  return (
    <ReactLenis root options={{ lerp: 0.1, smoothWheel: true }}>
      <RouteReset />
      {children}
    </ReactLenis>
  );
}
