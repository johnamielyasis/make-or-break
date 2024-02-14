import React from "react";

interface TypographyProps {
  variant?: "nav" | "buttonText" | "copy";
  className?: string;
  color?: "black" | "white";
  lineHeight?: "none" | "normal" | "loose";
  fontWeight?: "thin" | "normal" | "bold";
  children: React.ReactNode;
}

const variants = {
  buttonText: "text-lg font-sans2",
  copy: "text-lg font-sans",
  nav: "font-sans text-xl",
};

export const Typography = ({
  children,
  variant = "copy",
  className,
  color,
  lineHeight,
  fontWeight,
}: TypographyProps) => {
  return (
    <span
      className={`${variants[variant]} text-${color} leading-${lineHeight} font-${fontWeight} ${className}`}
    >
      {children}
    </span>
  );
};
