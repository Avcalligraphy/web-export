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
    { label: t('home'), href: `/${locale}`, path: '' },
    { label: t('about'), href: `/${locale}/about`, path: '/about' },
    { label: t('products'), href: `/${locale}/products`, path: '/products' },
    { label: t('factorQuality'), href: `/${locale}/factory-quality`, path: '/factory-quality' },
    { label: t('exportShipping'), href: `/${locale}/export-shipping`, path: '/export-shipping' },
  ];

  // Helper function to check if a menu item is active
  const isActive = (itemPath: string, itemHref: string) => {
    // Remove locale from pathname to get the actual path
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    
    // For home page, only match exactly
    if (itemPath === '') {
      return pathWithoutLocale === '/' || pathWithoutLocale === '';
    }
    
    // For other pages, match the path or paths that start with it
    return pathWithoutLocale === itemPath || pathWithoutLocale.startsWith(itemPath + '/');
  };

  return (
    <nav className={cn(
      "sticky top-0 z-50 py-4 md:py-6 transition-all duration-300",
      isScrolled 
        ? "bg-primary/80 backdrop-blur-2xl" 
        : "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-between h-14 md:h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center z-10">
            <img src="/assets/images/logo-2.png" alt="logo" className="w-40.5 h-16" />
          </Link>

          {/* Desktop Menu - Centered */}
          <div className="hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2 z-10">
            <div className="flex items-center space-x-1 px-4 lg:px-[25px] py-2 lg:py-3 bg-primary rounded-[100px] border-2 border-gray-100">
              {menuItems.map((item) => {
                const active = isActive(item.path, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-xs lg:text-sm font-regular text-foreground/80",
                      "transition-all duration-200",
                      "font-urbanist",
                      active
                        ? "py-2 lg:py-3 px-4 lg:px-7.5 border border-gray-200 bg-secondary rounded-4xl text-foreground"
                        : "px-2 lg:px-4 py-1.5 lg:py-2 hover:text-foreground hover:bg-primary/20 rounded-lg"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right Side - Language Switcher & Contact Button */}
          <div className="flex items-center gap-2 md:gap-4 z-10">
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>
            <Link href={`/${locale}/contact-us`}>
            <Button variant="primary" size="md" className="hidden sm:block w-[120px] md:w-[160px] rounded-[20px] text-xs md:text-sm">
              {t('contactUs')}
            </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:bg-primary/20 rounded-lg transition-colors"
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
          <div className="lg:hidden pb-4 border-t border-foreground/10 mt-2 pt-4">
            {menuItems.map((item) => {
              const active = isActive(item.path, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 mb-1",
                    "font-urbanist",
                    active
                      ? "text-foreground bg-secondary border border-gray-200"
                      : "text-foreground/80 hover:text-foreground hover:bg-primary/20"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="px-4 py-3 space-y-3">
              <div className="sm:hidden">
                <LanguageSwitcher />
              </div>
              <Button variant="primary" size="md" className="w-full sm:hidden rounded-[20px]">
                {t('contactUs')}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

