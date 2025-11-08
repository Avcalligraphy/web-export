"use client";

import { useState, useRef, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { locales, type Locale } from '@/i18n';

const languageNames: Record<Locale, string> = {
  id: 'ID',
  en: 'EN',
  zh: '中文',
};

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Get path without locale
  const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const otherLocales = locales.filter((loc) => loc !== locale);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4.5 py-3.5 rounded-xl text-base font-urbanist font-regular transition-all duration-200 bg-primary text-foreground border border-gray-200 hover:bg-secondary/20"
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <span>{languageNames[locale]}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-32 bg-primary border border-gray-200 rounded-lg shadow-lg overflow-hidden z-50">
          {otherLocales.map((loc) => (
            <Link
              key={loc}
              href={`/${loc}${pathWithoutLocale}`}
              className="block px-4 py-2 text-sm font-urbanist font-medium text-foreground/70 hover:text-foreground hover:bg-secondary transition-colors"
              onClick={() => setIsOpen(false)}
              aria-label={`Switch to ${languageNames[loc]}`}
            >
              {languageNames[loc]}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

