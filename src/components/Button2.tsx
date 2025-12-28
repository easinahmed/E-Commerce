import React from "react";
import { Link } from "react-router";

interface Button2Props {
  children: React.ReactNode;
  className?: string
  to?: string
  onClick?: () => void
  type?: "button" | "submit" | "reset"
}

const Button2: React.FC<Button2Props> = ({ children, className = "", to, onClick, type = "button" }) => {
  if (to) {
    return (
      <Link
        to={to}
        className={`bg-button2 hover:bg-red-600 transition-all duration-300 cursor-pointer text-white font-medium font-poppins px-12 py-4 rounded-sm ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-button2 hover:bg-red-600 transition-all duration-300 cursor-pointer text-white font-medium font-poppins px-12 py-4 rounded-sm ${className}`}
    >
      {children}
    </button>
  );
};

export default Button2;
