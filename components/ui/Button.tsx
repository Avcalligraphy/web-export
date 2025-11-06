import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "red";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
}: ButtonProps) {
  const baseStyles = "font-semibold rounded-lg transition-all duration-200";
  
  const variants = {
    primary: "bg-primary text-foreground hover:opacity-90 border-[1px] border-gray-100",
    secondary: "bg-secondary text-foreground hover:opacity-90",
    outline: "border-2 border-foreground text-foreground hover:bg-foreground hover:text-primary",
    red: "bg-red-100 text-foreground hover:opacity-90",
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-7 py-4.5 text-base",
    lg: "px-8 py-6 text-lg",
  };
  
  return (
    <button
      onClick={onClick}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
    >
      {children}
    </button>
  );
}

