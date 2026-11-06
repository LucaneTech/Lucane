import { createContext, useCallback, useContext, useState } from "react";
import type { ReactNode, MouseEvent } from "react";
import { flushSync } from "react-dom";

export type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  /** Bascule le thème ; l'événement sert d'origine au cercle animé. */
  toggle: (e?: MouseEvent) => void;
}

const STORAGE_KEY = "lucane-theme";
const ThemeContext = createContext<ThemeContextValue | null>(null);

function readTheme(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.setAttribute("data-theme", theme);
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    /* stockage indisponible : le thème reste valable pour la session */
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Le script de index.html a déjà posé la classe : on la lit sans flash.
  const [theme, setTheme] = useState<Theme>(() => readTheme());

  const toggle = useCallback(
    (e?: MouseEvent) => {
      const next: Theme = theme === "dark" ? "light" : "dark";
      const commit = () => {
        applyTheme(next);
        setTheme(next);
      };

      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (!document.startViewTransition || reduce) {
        commit();
        return;
      }

      // Cercle qui s'étend depuis le bouton jusqu'au coin le plus éloigné.
      const x = e?.clientX ?? window.innerWidth - 40;
      const y = e?.clientY ?? 40;
      const radius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      const transition = document.startViewTransition(() => flushSync(commit));
      transition.ready.then(() => {
        document.documentElement.animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
          {
            duration: 700,
            easing: "cubic-bezier(0.65, 0, 0.35, 1)",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      });
    },
    [theme]
  );

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme doit être utilisé dans <ThemeProvider>");
  return ctx;
}
