import ContainerProduct from "@/components/ui/HomeComponent/ContainerProduct";
import { useTranslations, useLocale } from "next-intl";


export default function Product() {
  const t = useTranslations('product');
  const tCommon = useTranslations('common');
  const locale = useLocale();
  const productItems = [
    t('hookah.title'),
    t('bbq.title'),
    t('oem.title'),
  ];
  return (
    <section className="container mx-auto border-1 border-gray-200 rounded-xl p-4 md:p-6 lg:p-10 mt-20 md:mt-30 px-4">
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground font-urbanist">{t('title')}</h2>
        <p className="text-sm sm:text-base md:text-lg text-foreground/50 font-urbanist font-regular mt-2 md:mt-3.5">
        {t('description')}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-4 md:mt-6 lg:mt-8 border-10 border-secondary p-3 md:p-4 items-stretch">
        <ContainerProduct title={productItems[0]} description={t('hookah.description')} image="product-1" tag={t('hookah.tag')} underline={true} underlineText={t('hookah.moq')} href={`/${locale}/products/hookah`} buttonText={tCommon('requestQuote')} />
        <ContainerProduct title={productItems[1]} description={t('bbq.description')} image="product-2" tag={t('bbq.tag')} underline={true} underlineText={t('bbq.moq')} href={`/${locale}/products/bbq`} buttonText={tCommon('requestQuote')} />
        <ContainerProduct title={productItems[2]} description={t('oem.description')} image="product-3" tag={t('oem.tag')} underline={true} underlineText={t('oem.moq')} href={`/${locale}/products/oem`} buttonText={tCommon('requestQuote')} />
      </div>
    </section>
  );
}