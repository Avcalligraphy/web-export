import { FactoryHero } from "@/components/sections";
import { locales } from "@/i18n";

// Generate static params for all locales (required for static export)
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function FactorQualityPage() {
  return (
    <main>
      <FactoryHero />
    </main>
  );
}

