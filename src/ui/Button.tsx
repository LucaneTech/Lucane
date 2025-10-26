import { Link } from "react-router-dom";
import type { ReactNode } from "react";

export interface ButtonProps {
  onClick?: () => void;
  label?: string | ReactNode;
  className?: string;
  to?: string;
  changeColor?: boolean | "primary" | "secondary" | "white";
  icon?: ReactNode;
}

const Button = ({
  label,
  className = "",
  to,
  onClick,
  changeColor = "primary",
  icon,
}: ButtonProps) => {
  const baseStyle = changeColor === "primary"
  ? `btn inline-flex items-center justify-center gap-1 bg-main-color text-white 
      font-bold shadow-md border-none py-2 px-4 rounded-lg 
      transition-all duration-300 hover:opacity-90 select-none whitespace-nowrap`
  : changeColor === "secondary"
  ? `btn inline-flex items-center justify-center gap-1 main-color border-btn 
      font-bold shadow-md py-2 px-4 rounded-md 
      transition-all duration-300 select-none `
  : `btn inline-flex items-center justify-center gap-1 bg-white main-color 
      font-bold shadow-md py-2 px-4 rounded-md 
      transition-all duration-300 select-none whitespace-nowrap`;


  const content = (
    <span className="flex items-center justify-center gap-2">
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {label && <span className="truncate">{label}</span>}
    </span>
  );

  if (to) {
    return (
      <Link to={to} className={`${baseStyle} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseStyle} ${className}`}
    >
      {content}
    </button>
  );
};

export default Button;
