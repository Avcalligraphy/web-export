import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "bg-secondary rounded-lg p-6 border border-foreground/10",
        className
      )}
    >
      {children}
    </div>
  );
}

