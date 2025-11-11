import { HeroShipping, WorldWideSipping, ShippingMap } from "@/components/sections";
import { locales } from "@/i18n";

// Generate static params for all locales (required for static export)
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}


export default function ExportShippingPage() {
  return (
    <main>
      <HeroShipping />
      <ShippingMap />
      <WorldWideSipping />
      
    </main>
  );
}

