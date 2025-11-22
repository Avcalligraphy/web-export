import { Button } from "@/components/ui";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";


export default function BannerProducct() {
  const locale = useLocale();
  const t = useTranslations('productsPage.bannerProduct');
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-24 lg:mt-30 mb-12 md:mb-16 lg:mb-20">
      <div style={{ backgroundImage: "url('/assets/images/banner-product.png')" }} className="w-full min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:h-80 bg-cover bg-center bg-no-repeat px-6 sm:px-12 md:px-16 lg:px-24 py-8 sm:py-10 md:py-12 lg:py-0 rounded-xl">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8 lg:gap-5 w-full">
            <div className="flex-1">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground font-urbanist">{t('title')}</h2>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-foreground/50 font-urbanist font-regular mt-3 sm:mt-4">{t('description')}</p>
            </div>
            <Link href={`/${locale}/contact-us`}>
            <Button variant="red" size="md" className="rounded-xl w-full sm:w-auto lg:w-62 whitespace-nowrap">
            {t('button')}
            </Button>
            </Link>
            
        </div>
      </div>
      </div>
    </section>
  );
}