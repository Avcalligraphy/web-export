import React from 'react'
import FeaturesContainer from '../../ui/FeaturesContainer'
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
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-4xl font-bold text-foreground font-urbanist mb-6 text-center">
          {t('title')}
        </h2>
        <p className="text-lg text-foreground/50 font-urbanist font-regular text-center mb-8 max-w-3xl mx-auto">
          {t('description')}
        </p>
      </div>
      <div className="grid grid-cols-5 border-1 border-gray-200 p-5 gap-5">
        {featureItems.map((title, index) => (
          <FeaturesContainer key={index} title={title} />
        ))}
      </div>
    </section>
  )
}