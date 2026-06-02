import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "./utils";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost" | "dark";
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
  // Deprecated aliases — kept for backward compatibility
  /** @deprecated Use `variant` instead */
  changeColor?: "primary" | "secondary" | "ghost" | "dark" | "white";
  /** @deprecated Use `iconLeft` instead */
  icon?: ReactNode;
}

// ─── Base classes shared across all variants ───────────────────────────────────
const BASE =
  "inline-flex items-center justify-center gap-2 font-semibold select-none whitespace-nowrap " +
  "transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 " +
  "focus-visible:ring-primary/50 focus-visible:ring-offset-2";

// ─── Variant class maps ────────────────────────────────────────────────────────
const VARIANT_CLASSES: Record<string, string> = {
  primary:
    "relative overflow-hidden bg-primary text-white rounded-pill " +
    "shadow-[0_4px_14px_rgba(0,128,128,0.35)] hover:shadow-[0_6px_20px_rgba(0,128,128,0.5)]",
  secondary:
    "border-2 border-primary text-primary bg-transparent rounded-xl " +
    "hover:bg-primary hover:text-white hover:border-primary",
  ghost:
    "text-primary bg-transparent relative " +
    "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 " +
    "after:bg-primary after:transition-all after:duration-300 hover:after:w-full",
  dark:
    "relative overflow-hidden bg-ink text-white rounded-pill " +
    "hover:bg-ink-muted",
  // Legacy variant — kept for backward compat with changeColor="white"
  white:
    "relative overflow-hidden bg-white text-primary rounded-pill " +
    "shadow-md hover:bg-slate-50",
};

// ─── Size class maps ───────────────────────────────────────────────────────────
const SIZE_CLASSES: Record<string, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

// ─── Shimmer variants (C1 fix) ────────────────────────────────────────────────
const shimmerVariants: Variants = {
  rest: { x: "-110%", skewX: "-20deg" },
  hover: { x: "110%", skewX: "-20deg" },
};

// ─── Shimmer overlay (used for primary, dark, white) ──────────────────────────
function Shimmer() {
  return (
    <motion.span
      className="absolute inset-0 bg-white/20 rounded-[inherit] pointer-events-none"
      variants={shimmerVariants}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      aria-hidden
    />
  );
}

// ─── Component ────────────────────────────────────────────────────────────────
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
  // Deprecated aliases
  changeColor,
  icon,
}: ButtonProps) => {
  // Resolve variant: explicit `variant` prop wins, then fall back to `changeColor` (M1 fix)
  const resolvedVariant = (variant ?? changeColor ?? "primary") as keyof typeof VARIANT_CLASSES;

  // Resolve icon: explicit `iconLeft` wins, then fall back to deprecated `icon`
  const resolvedIconLeft = iconLeft ?? icon;

  const hasShimmer =
    resolvedVariant === "primary" ||
    resolvedVariant === "dark" ||
    resolvedVariant === "white";

  const hasTap = resolvedVariant !== "ghost";

  const variantClasses = VARIANT_CLASSES[resolvedVariant] ?? VARIANT_CLASSES.primary;
  const sizeClasses = SIZE_CLASSES[size] ?? SIZE_CLASSES.md;

  // I2 fix: use cn() instead of string concatenation
  // C2 + I1 fix: apply disabled classes conditionally (not via CSS :disabled pseudo-class)
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "";
  const composedClass = cn(BASE, variantClasses, sizeClasses, className, disabledClasses);

  // ── Inner content (icons + label + shimmer) ──
  const inner = (
    <>
      {hasShimmer && <Shimmer />}
      {resolvedIconLeft && (
        <span className="relative flex-shrink-0">{resolvedIconLeft}</span>
      )}
      {label && <span className="relative truncate">{label}</span>}
      {iconRight && (
        <span className="relative flex-shrink-0">{iconRight}</span>
      )}
    </>
  );

  // ── Render as React Router Link (or span if disabled) ──
  if (to) {
    // C2 fix: disabled → render a span to block navigation
    if (disabled) {
      return (
        <motion.div
          initial="rest"
          whileHover="hover"
          whileTap={hasTap ? { scale: 0.97 } : undefined}
          className="inline-flex"
        >
          <span role="button" aria-disabled className={composedClass}>
            {inner}
          </span>
        </motion.div>
      );
    }
    return (
      <motion.div
        initial="rest"
        whileHover="hover"
        whileTap={hasTap ? { scale: 0.97 } : undefined}
        className="inline-flex"
      >
        <Link to={to} onClick={onClick} className={composedClass}>
          {inner}
        </Link>
      </motion.div>
    );
  }

  // ── Render as external anchor (or span if disabled) ──
  if (href) {
    // C2 fix: disabled → render a span to block navigation
    if (disabled) {
      return (
        <motion.div
          initial="rest"
          whileHover="hover"
          whileTap={hasTap ? { scale: 0.97 } : undefined}
          className="inline-flex"
        >
          <span role="button" aria-disabled className={composedClass}>
            {inner}
          </span>
        </motion.div>
      );
    }
    return (
      <motion.div
        initial="rest"
        whileHover="hover"
        whileTap={hasTap ? { scale: 0.97 } : undefined}
        className="inline-flex"
      >
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
          className={composedClass}
        >
          {inner}
        </a>
      </motion.div>
    );
  }

  // ── Render as button ──
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={composedClass}
      initial="rest"
      whileHover="hover"
      whileTap={hasTap ? { scale: 0.97 } : undefined}
    >
      {inner}
    </motion.button>
  );
};

export default Button;
