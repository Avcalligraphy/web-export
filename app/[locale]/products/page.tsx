import { HookahProduct, ProductHero, BBQProduct, CustomShapeProduct, BannerProducct } from '@/components/sections';
import { locales } from '@/i18n';

// Generate static params for all locales (required for static export)
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function ProductsPage() {
  return (
    <main >
      <ProductHero />
      <div className="space-y-16 md:space-y-24 lg:space-y-32 py-12 md:py-16 lg:py-20">
        <HookahProduct />
        <BBQProduct />
        <CustomShapeProduct />
      </div>
      <BannerProducct />
      
    </main>
  );
}

