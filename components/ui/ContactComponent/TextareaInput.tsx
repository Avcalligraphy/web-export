import React from "react";

interface TextareaInputProps {
  label: string;
  placeholder: string;
  name: string;
  rows?: number;
  required?: boolean;
}

export default function TextareaInput({
  label,
  placeholder,
  name,
  rows = 4,
  required = false,
}: TextareaInputProps) {
  return (
    <div className="flex flex-col">
      <label className="text-foreground text-sm font-urbanist font-medium mb-2">
        {label}
      </label>
      <textarea
        name={name}
        placeholder={placeholder}
        rows={rows}
        required={required}
        className="bg-primary border border-gray-200 rounded-lg px-4 py-3 text-foreground placeholder:text-foreground/50 font-urbanist focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all resize-none"
      />
    </div>
  );
}

