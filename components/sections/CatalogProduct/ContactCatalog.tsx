"use client";

import { InquiryCatalog } from "@/components/ui";
import { useTranslations } from "next-intl";

interface ContactCatalogProps {
  productType: 'hookah' | 'bbq' | 'oem';
}

export default function ContactCatalog({ productType }: ContactCatalogProps) {
    const t = useTranslations(`catalogProduct.${productType}`);
    
    return (
        <section className="container mx-auto mt-10 sm:mt-16 md:mt-20 lg:mt-30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-20 lg:gap-25">
      <div className="flex flex-col items-start justify-start">
      <img
          src="/assets/icons/ic_stars.png"
          alt="stars"
          className="w-auto h-4 sm:h-5 md:h-6 mb-2 sm:mb-3 md:mb-4"
        />
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground font-urbanist mb-2 sm:mb-3 md:mb-3.5">
        {t('sendInquiry.title')}
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-foreground/50 font-urbanist font-medium">
        {t('sendInquiry.description')}
        </p>
      </div>
        
        <div className="bg-secondary border border-gray-200 rounded-xl mt-8 sm:mt-12 md:mt-16 lg:mt-20 p-4 sm:p-6 md:p-8 lg:p-12.5">
          <InquiryCatalog />
        </div>
      </div>
    </section>
    )
}
