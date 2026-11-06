/** Courbes, durées et réglages de mouvement communs à tout le site. */
export const ease = {
  /** Sortie expo — la signature du site : départ vif, arrivée très douce. */
  out: [0.16, 1, 0.3, 1] as [number, number, number, number],
  inOut: [0.65, 0, 0.35, 1] as [number, number, number, number],
  in: [0.7, 0, 0.84, 0] as [number, number, number, number],
};

export const dur = { fast: 0.35, base: 0.7, slow: 1.1, xslow: 1.6 };

export const stagger = { tight: 0.03, base: 0.06, loose: 0.12 };

/** Ressort doux pour suivre la souris (curseur, aimants, parallaxe souris). */
export const followSpring = { stiffness: 220, damping: 26, mass: 0.5 };

/** Vrai si l'appareil a une souris précise (pas un écran tactile). */
export const hasFinePointer = () =>
  typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches;

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
