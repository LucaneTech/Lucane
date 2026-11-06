import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "./utils";
import Magnetic from "../motion/Magnetic";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  label?: string | ReactNode;
  className?: string;
  to?: string;
  href?: string;
  onClick?: () => void;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  /** Attire le bouton vers le curseur (actif par défaut en taille lg). */
  magnetic?: boolean;
  // Alias dépréciés — conservés pour ne casser aucun appel existant
  /** @deprecated Utiliser `variant` */
  changeColor?: "primary" | "secondary" | "ghost" | "dark" | "white";
  /** @deprecated Utiliser `iconLeft` */
  icon?: ReactNode;
}

const ease = "ease-[cubic-bezier(0.16,1,0.3,1)]";

const BASE =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden font-semibold select-none whitespace-nowrap " +
  "transition-colors duration-500 " + ease;

/** Couleurs du bouton au repos et de l'aplat qui monte au survol. */
const VARIANTS: Record<string, { base: string; fill: string; hoverText: string }> = {
  primary: { base: "bg-primary text-on-primary", fill: "bg-ink", hoverText: "group-hover:text-canvas" },
  outline: { base: "border border-line-strong text-ink", fill: "bg-ink", hoverText: "group-hover:text-canvas" },
  dark: { base: "bg-ink text-canvas", fill: "bg-primary", hoverText: "group-hover:text-on-primary" },
  white: { base: "bg-white text-[#006b6b]", fill: "bg-ink", hoverText: "group-hover:text-canvas" },
  ghost: { base: "text-primary-ink", fill: "", hoverText: "" },
};

const SIZES: Record<string, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-[0.9375rem]",
  lg: "h-14 px-8 text-base",
};

/** Libellé qui « roule » : la copie du dessous remplace celle du dessus au survol. */
function RollingLabel({ children }: { children: ReactNode }) {
  return (
    <span className="relative block overflow-hidden">
      <span className={cn("block transition-transform duration-500 group-hover:-translate-y-full", ease)}>{children}</span>
      <span
        aria-hidden
        className={cn("absolute inset-0 block translate-y-full transition-transform duration-500 group-hover:translate-y-0", ease)}
      >
        {children}
      </span>
    </span>
  );
}

const Button = ({
  variant,
  size = "md",
  label,
  className = "",
  to,
  href,
  onClick,
  iconLeft,
  iconRight,
  type = "button",
  disabled = false,
  magnetic,
  changeColor,
  icon,
}: ButtonProps) => {
  const raw = variant ?? changeColor ?? "primary";
  const resolved = raw === "secondary" ? "outline" : raw;
  const v = VARIANTS[resolved] ?? VARIANTS.primary;
  const isGhost = resolved === "ghost";
  const leftIcon = iconLeft ?? icon;

  const classes = cn(
    BASE,
    v.base,
    v.hoverText,
    isGhost ? "h-auto px-0 text-[0.9375rem]" : SIZES[size] ?? SIZES.md,
    disabled && "pointer-events-none opacity-50",
    className
  );

  const inner = (
    <>
      {!isGhost && (
        <span
          aria-hidden
          className={cn("absolute inset-0 origin-bottom scale-y-0 transition-transform duration-500 group-hover:scale-y-100", ease, v.fill)}
        />
      )}
      {leftIcon && (
        <span className="relative flex-shrink-0 transition-transform duration-500 group-hover:-rotate-12">{leftIcon}</span>
      )}
      {label && (
        <span className="relative">
          <RollingLabel>{label}</RollingLabel>
          {isGhost && (
            <span
              aria-hidden
              className={cn(
                "absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100",
                ease
              )}
            />
          )}
        </span>
      )}
      {iconRight && (
        <span className={cn("relative flex-shrink-0 transition-transform duration-500 group-hover:translate-x-1", ease)}>
          {iconRight}
        </span>
      )}
    </>
  );

  let element: ReactNode;
  if (to && !disabled) {
    element = (
      <Link to={to} onClick={onClick} className={classes} data-cursor="pointer">
        {inner}
      </Link>
    );
  } else if (href && !disabled) {
    element = (
      <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick} className={classes} data-cursor="pointer">
        {inner}
      </a>
    );
  } else if (to || href) {
    element = (
      <span role="button" aria-disabled className={classes}>
        {inner}
      </span>
    );
  } else {
    element = (
      <button type={type} onClick={onClick} disabled={disabled} className={classes} data-cursor="pointer">
        {inner}
      </button>
    );
  }

  const tappable = <motion.span className="inline-flex" whileTap={{ scale: 0.96 }}>{element}</motion.span>;
  const useMagnet = (magnetic ?? size === "lg") && !isGhost && !disabled;
  return useMagnet ? <Magnetic strength={0.25}>{tappable}</Magnetic> : tappable;
};

export default Button;
