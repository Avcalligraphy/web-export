"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../ui";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Factor & Quality", href: "/factor-quality" },
  { label: "Export Shipping", href: "/export-shipping" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-foreground/10 py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-bold text-foreground font-urbanist">
              LOGO
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 px-[25px] py-[22px] bg-primary mr-6 rounded-[100px] border-2 border-[#1F1F1F]">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium text-foreground/80",
                  "hover:text-foreground hover:bg-primary/20",
                  "rounded-lg transition-all duration-200",
                  "font-figtree"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="px-4 mt-2">
              <Button variant="primary" size="md" className="w-full rounded-[100px] border-[1px] border-[#1A1A1A]">
                Contact Us
              </Button>
            </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:bg-primary/20 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-foreground/10 mt-2 pt-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-4 py-3 text-base font-medium text-foreground/80",
                  "hover:text-foreground hover:bg-primary/20",
                  "rounded-lg transition-all duration-200 mb-1",
                  "font-figtree"
                )}
              >
                {item.label}
              </Link>
            ))}

          </div>
        )}
      </div>
    </nav>
  );
}

