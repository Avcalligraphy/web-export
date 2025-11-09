import React from "react";

interface CheckboxInputProps {
  name: string;
  label: string;
  linkTexts?: { text: string; href: string }[];
  required?: boolean;
}

export default function CheckboxInput({
  name,
  label,
  linkTexts,
  required = false,
}: CheckboxInputProps) {
  return (
    <div className="flex items-start gap-2">
      <input
        type="checkbox"
        name={name}
        id={name}
        required={required}
        className="mt-1 w-4 h-4 bg-gray-200 border border-gray-200 rounded text-red-100 focus:ring-2 focus:ring-foreground/20 cursor-pointer"
      />
      <label htmlFor={name} className="text-foreground text-sm font-urbanist font-medium cursor-pointer">
        {label}{" "}
        {linkTexts && linkTexts.length > 0 && (
          <>
            {linkTexts.map((link, index) => (
              <React.Fragment key={index}>
                {index > 0 && " and "}
                <a
                  href={link.href}
                  className="text-foreground underline hover:text-foreground/80 transition-colors"
                >
                  {link.text}
                </a>
              </React.Fragment>
            ))}
          </>
        )}
      </label>
    </div>
  );
}

