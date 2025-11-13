"use client";

import { ContainerPlaceOnOrder } from "@/components/ui";
import { useTranslations } from 'next-intl';

export default function WorldWideSipping() {
    const t = useTranslations('exportShipping.worldwideShipping');
    
    return (
        <section className="container mx-auto px-4 mt-20 md:mt-30">
      <div>
        <img
          src="/assets/icons/ic_stars.png"
          alt="stars"
          className="w-auto h-5 md:h-6 mb-3 md:mb-4"
        />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground font-urbanist mb-3 md:mb-3.5">
        {t('title')}
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-foreground/50 font-urbanist font-medium">
        {t('description')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-6 md:mt-8 lg:mt-10">
        <ContainerPlaceOnOrder
          step={t('steps.step1.step')}
          title={t('steps.step1.title')}
          description={t('steps.step1.description')}
        />
        <ContainerPlaceOnOrder
          step={t('steps.step2.step')}
          title={t('steps.step2.title')}
          description={t('steps.step2.description')}
        />
        <ContainerPlaceOnOrder
          step={t('steps.step3.step')}
          title={t('steps.step3.title')}
          description={t('steps.step3.description')}
        />
        <ContainerPlaceOnOrder
          step={t('steps.step4.step')}
          title={t('steps.step4.title')}
          description={t('steps.step4.description')}
        />
        <ContainerPlaceOnOrder
          step={t('steps.step5.step')}
          title={t('steps.step5.title')}
          description={t('steps.step5.description')}
        />
        <ContainerPlaceOnOrder
          step={t('steps.step6.step')}
          title={t('steps.step6.title')}
          description={t('steps.step6.description')}
        />
      </div>
    </section>
    )
}