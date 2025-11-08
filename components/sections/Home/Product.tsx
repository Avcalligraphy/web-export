import ContainerProduct from "@/components/ui/ContainerProduct";
import { useTranslations } from "next-intl";


export default function Product() {
  const t = useTranslations('product');
  const productItems = [
    t('hookah.title'),
    t('bbq.title'),
    t('oem.title'),
  ];
  return (
    <section className="container mx-auto border-1 border-gray-200 rounded-xl p-10 mt-30">
      <div>
        <h2 className="text-4xl font-bold text-foreground font-urbanist">{t('title')}</h2>
        <p className="text-lg text-foreground/50 font-urbanist font-regular mt-3.5">
        {t('description')}
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-2 border-10 border-secondary p-4 items-stretch">
        <ContainerProduct title={productItems[0]} description={t('hookah.description')} image="product-1" tag={t('hookah.tag')} underline={true} underlineText={t('hookah.moq')} />
        <ContainerProduct title={productItems[1]} description={t('bbq.description')} image="product-2" tag={t('bbq.tag')} underline={true} underlineText={t('bbq.moq')} />
        <ContainerProduct title={productItems[2]} description={t('oem.description')} image="product-3" tag={t('oem.tag')} underline={true} underlineText={t('oem.moq')} />
      </div>
    </section>
  );
}