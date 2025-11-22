"use client";

import { HeroCardProduct } from "@/components/ui";
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function ProductHero() {
  const t = useTranslations('productsPage.productHero');
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

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const cardsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
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
    <section
      className="relative -mt-20 md:-mt-28 lg:-mt-32 w-full min-h-screen bg-cover bg-center bg-no-repeat overflow-x-hidden"
      style={{ backgroundImage: "url('/assets/images/bg-hero-product.png')" }}
    >
      <motion.div 
        className="flex flex-col pt-20 md:pt-32 lg:pt-50 container mx-auto px-4 items-start justify-start"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={headerVariants}>
          <img
            src="/assets/icons/ic_stars.png"
            alt="stars"
            className="w-auto h-5 md:h-6 mb-3 md:mb-4"
          />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground font-urbanist mb-3 md:mb-3.5">
          {t('title')}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-foreground/50 font-urbanist font-medium max-w-3xl">
          {t('description')}
          </p>
        </motion.div>
        <div className="mt-2 lg:mb-0 mb-20 border-10 border-secondary max-w-220 overflow-hidden">
          <motion.div 
            className="border border-gray-200 bg-primary p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
            variants={cardsContainerVariants}
          >
            <motion.div variants={cardVariants}>
              <HeroCardProduct image="product-1" title={t('cards.hookah.title')} tag={t('cards.hookah.tag')} />
            </motion.div>
            <motion.div variants={cardVariants}>
              <HeroCardProduct image="product-2" title={t('cards.bbq.title')} tag={t('cards.bbq.tag')} />
            </motion.div>
            <motion.div variants={cardVariants}>
              <HeroCardProduct image="product-3" title={t('cards.custom.title')} tag={t('cards.custom.tag')} />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}