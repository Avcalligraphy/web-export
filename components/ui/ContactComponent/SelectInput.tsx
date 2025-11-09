import React from "react";

interface SelectInputProps {
  label: string;
  placeholder: string;
  name: string;
  options: { value: string; label: string }[];
  required?: boolean;
}

export default function SelectInput({
  label,
  placeholder,
  name,
  options,
  required = false,
}: SelectInputProps) {
  return (
    <div className="flex flex-col">
      <label className="text-foreground text-sm font-urbanist font-medium mb-2">
        {label}
      </label>
      <div className="relative">
        <select
          name={name}
          required={required}
          className="bg-primary border border-gray-200 rounded-lg px-4 py-3 text-foreground font-urbanist focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all appearance-none w-full cursor-pointer"
          defaultValue=""
        >
          <option value="" disabled className="text-foreground/50">
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value} className="bg-primary">
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
          <svg
            className="w-5 h-5 text-foreground/50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

