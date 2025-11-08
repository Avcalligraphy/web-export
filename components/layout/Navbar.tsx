"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../ui";
import LanguageSwitcher from "../ui/LanguageSwitcher";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations('common');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: t('home'), href: `/${locale}` },
    { label: t('about'), href: `/${locale}/about` },
    { label: t('products'), href: `/${locale}/products` },
    { label: t('factorQuality'), href: `/${locale}/factor-quality` },
    { label: t('exportShipping'), href: `/${locale}/export-shipping` },
  ];

  return (
    <nav className={cn(
      "sticky top-0 z-50 py-6 transition-all duration-300",
      isScrolled 
        ? "bg-primary/80 backdrop-blur-2xl" 
        : "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center z-10">
            <span className="text-xl md:text-2xl font-bold text-foreground font-urbanist">
              {t('logo')}
            </span>
          </Link>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2 z-10">
            <div className="flex items-center space-x-1 px-[25px] py-3 bg-primary rounded-[100px] border-2 border-gray-100">
              {menuItems.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-sm font-regular text-foreground/80",
                      "transition-all duration-200",
                      "font-urbanist",
                      isActive
                        ? "py-3 px-7.5 border border-gray-200 bg-secondary rounded-4xl text-foreground"
                        : "px-4 py-2 hover:text-foreground hover:bg-primary/20 rounded-lg"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right Side - Language Switcher & Contact Button */}
          <div className="flex items-center gap-4 px-4 mt-2 z-10">
            <LanguageSwitcher />
            <Button variant="primary" size="md" className="w-[160px] rounded-[20px]">
              {t('contactUs')}
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
            <div className="px-4 py-3">
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

