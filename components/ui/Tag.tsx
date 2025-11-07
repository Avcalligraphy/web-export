import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  width?: "full" | "fit";
}

export default function Tag({ children, width = "fit" }: TagProps) {
  const widthClass = {
    full: "w-full",
    fit: "w-fit",
  };

  return (
    <div className={cn("bg-gray-300 text-foreground px-3 py-1.5 rounded-full border-1 border-gray-200", widthClass[width])}>
      <p className="text-sm text-foreground/50 font-urbanist font-regular">{children}</p>
    </div>
  );
}