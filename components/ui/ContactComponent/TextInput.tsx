import React from "react";

interface TextInputProps {
  label: string;
  placeholder: string;
  name: string;
  type?: "text" | "email" | "tel";
  required?: boolean;
}

export default function TextInput({
  label,
  placeholder,
  name,
  type = "text",
  required = false,
}: TextInputProps) {
  return (
    <div className="flex flex-col">
      <label className="text-foreground text-sm font-urbanist font-medium mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="bg-primary border border-gray-200 rounded-lg px-4 py-3 text-foreground placeholder:text-foreground/50 font-urbanist focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
      />
    </div>
  );
}

