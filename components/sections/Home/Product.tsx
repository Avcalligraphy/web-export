"use client";

import ContainerProduct from "@/components/ui/HomeComponent/ContainerProduct";
import { useTranslations, useLocale } from "next-intl";
import { motion } from 'framer-motion';

export default function Product() {
  const t = useTranslations('product');
  const tCommon = useTranslations('common');
  const locale = useLocale();
  const productItems = [
    t('hookah.title'),
    t('bbq.title'),
    t('oem.title'),
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="container mx-auto border-1 border-gray-200 rounded-xl p-4 md:p-6 lg:p-10 mt-20 md:mt-30 px-4 overflow-x-hidden">
      <motion.div
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground font-urbanist">{t('title')}</h2>
        <p className="text-sm sm:text-base md:text-lg text-foreground/50 font-urbanist font-regular mt-2 md:mt-3.5">
        {t('description')}
        </p>
      </motion.div>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-4 md:mt-6 lg:mt-8 border-10 border-secondary p-3 md:p-4 items-stretch"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={cardVariants}>
          <ContainerProduct title={productItems[0]} description={t('hookah.description')} image="product-1" tag={t('hookah.tag')} underline={true} underlineText={t('hookah.moq')} href={`/${locale}/products/hookah`} buttonText={tCommon('requestQuote')} />
        </motion.div>
        <motion.div variants={cardVariants}>
          <ContainerProduct title={productItems[1]} description={t('bbq.description')} image="product-2" tag={t('bbq.tag')} underline={true} underlineText={t('bbq.moq')} href={`/${locale}/products/bbq`} buttonText={tCommon('requestQuote')} />
        </motion.div>
        <motion.div variants={cardVariants}>
          <ContainerProduct title={productItems[2]} description={t('oem.description')} image="product-3" tag={t('oem.tag')} underline={true} underlineText={t('oem.moq')} href={`/${locale}/products/oem`} buttonText={tCommon('requestQuote')} />
        </motion.div>
      </motion.div>
    </section>
  );
}