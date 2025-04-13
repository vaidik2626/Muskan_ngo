import React from "react";

export const Button = ({ children, onClick, variant = "default", className = "" }) => {
  const baseStyles =
    "px-4 py-2 rounded-lg font-semibold transition duration-200";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-400 text-gray-700 hover:bg-gray-100",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
