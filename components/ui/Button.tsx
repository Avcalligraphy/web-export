import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "red";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles = "font-semibold rounded-lg transition-all duration-200";
  
  const variants = {
    primary: "bg-primary text-foreground border-[1px] border-gray-100 hover:text-foreground/50",
    secondary: "bg-secondary text-foreground border-[1px] border-gray-100 hover:text-foreground/50",
    outline: "border-2 border-foreground text-foreground hover:bg-foreground hover:text-primary",
    red: "bg-red-100 text-foreground font-urbanist",
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm font-urbanist font-regular",
    md: "px-7 py-3.5 text-base font-urbanist font-regular",
    lg: "px-8 py-6 text-lg font-urbanist font-regular",
  };
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        baseStyles, 
        variants[variant], 
        sizes[size], 
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {children}
    </button>
  );
}

