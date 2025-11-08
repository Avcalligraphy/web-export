import React from 'react'
import FeaturesContainer from '../../ui/HomeComponent/FeaturesContainer'
import { useTranslations } from 'next-intl';

export default function Features() {
  const t = useTranslations('features');

  const featureItems = [
    t('items.natural'),
    t('items.burningTime'),
    t('items.lowAsh'),
    t('items.certified'),
    t('items.oem'),
  ];

  return (
    <section className="border-10 border-secondary">
      <div className="container mx-auto px-4 py-8 md:py-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground font-urbanist mb-4 md:mb-6 text-center px-4">
          {t('title')}
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-foreground/50 font-urbanist font-regular text-center mb-6 md:mb-8 max-w-3xl mx-auto px-4">
          {t('description')}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-1 border-gray-200 p-4 md:p-5 gap-3 md:gap-5">
        {featureItems.map((title, index) => (
          <FeaturesContainer key={index} title={title} />
        ))}
      </div>
    </section>
  )
}