import { Link } from "react-router-dom";

export interface ButtonProps {
  onClick?: () => void;
  label?: string | React.ReactNode;
  className?: string;
  to?: string;
  changeColor?: boolean;
}

const Button = ({ label, className = "", to, onClick, changeColor }: ButtonProps) => {
  const baseStyle = changeColor
    ? `btn bg-main-color 
       duration-300 hover:opacity-90 
       hover:scale-95 transition-all text-white rounded-full 
       font-bold shadow-md border border-none py-3 px-5`
    : `btn bg-white duration-300 
       hover:scale-95 transition-all text-[#042a64] rounded-full 
       font-bold shadow-md border border-none py-3 px-5`;

  const buttonElement = (
    <button
      type="button"
      onClick={onClick}
      className={`${baseStyle} ${className}`}
    >
      {label}
    </button>
  );

  if (to) {
    return <Link to={to}>{buttonElement}</Link>;
  }

  return buttonElement;
};

export default Button;