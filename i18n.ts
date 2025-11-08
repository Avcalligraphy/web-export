import { defineRouting } from 'next-intl/routing';
import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

// Can be imported from a shared config
export const locales = ['id', 'en', 'zh', 'ar'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'id';

export const routing = defineRouting({
  locales: locales as unknown as string[],
  defaultLocale,
  localePrefix: 'always'
});

export default getRequestConfig(async ({ requestLocale }) => {
  // Typically this is the locale the user navigated to
  let locale = await requestLocale;

  // Ensure that the incoming locale is valid
  if (!locale || !locales.includes(locale as Locale)) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});

