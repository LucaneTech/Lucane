import { Link } from "react-router-dom";
import type { ReactNode } from "react";

export interface ButtonProps {
  onClick?: () => void;
  label?: string | ReactNode;
  className?: string;
  to?: string;
  changeColor?: "primary" | "secondary" | "white";
  icon?: ReactNode;
  type?: "button" | "submit" | "reset";
}

const styles: Record<string, string> = {
  primary:
    "inline-flex items-center justify-center gap-2 bg-[#008080] text-white rounded-lg px-6 py-3 font-semibold " +
    "shadow-[0_4px_14px_rgba(0,128,128,0.35)] hover:shadow-[0_6px_20px_rgba(0,128,128,0.5)] " +
    "hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 select-none whitespace-nowrap",
  secondary:
    "inline-flex items-center justify-center gap-2 border-2 border-[#008080] text-[#008080] dark:text-teal-400 " +
    "rounded-lg px-6 py-3 font-semibold hover:bg-[#008080]/10 transition-all duration-200 select-none whitespace-nowrap",
  white:
    "inline-flex items-center justify-center gap-2 bg-white text-[#008080] rounded-lg px-6 py-3 font-semibold " +
    "shadow-md hover:bg-slate-50 hover:-translate-y-0.5 transition-all duration-200 select-none whitespace-nowrap",
};

const Button = ({
  label,
  className = "",
  to,
  onClick,
  changeColor = "primary",
  icon,
  type = "button",
}: ButtonProps) => {
  const base = styles[changeColor] ?? styles.primary;
  const content = (
    <>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {label && <span className="truncate">{label}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} onClick={onClick} className={`${base} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${base} ${className}`}>
      {content}
    </button>
  );
};

export default Button;
