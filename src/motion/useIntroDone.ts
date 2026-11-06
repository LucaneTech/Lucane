import { useEffect, useState } from "react";
import { INTRO_DONE_EVENT } from "../ui/Intro";

const isDone = () =>
  typeof window !== "undefined" && Boolean((window as unknown as { __lucaneIntroDone?: boolean }).__lucaneIntroDone);

/** Vrai une fois l'ouverture terminée (ou absente) : le hero démarre ses animations à ce moment. */
export function useIntroDone() {
  const [done, setDone] = useState(isDone);
  useEffect(() => {
    if (done) return;
    const on = () => setDone(true);
    window.addEventListener(INTRO_DONE_EVENT, on);
    // filet de sécurité : jamais plus de 2,5 s d'attente
    const t = setTimeout(on, 2500);
    return () => {
      window.removeEventListener(INTRO_DONE_EVENT, on);
      clearTimeout(t);
    };
  }, [done]);
  return done;
}
