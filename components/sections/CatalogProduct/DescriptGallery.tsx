"use client";

import { KeyFeatures } from "@/components/ui";
import { useTranslations } from "next-intl";

interface DescriptGalleryProps {
  productType: 'hookah' | 'bbq' | 'oem';
}

export default function DescriptGallery({ productType }: DescriptGalleryProps) {
  const t = useTranslations(`catalogProduct.${productType}`);
  
  return (
    <section className="container mx-auto mt-5 sm:mt-7.5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-7.5">
        <div className="border border-gray-200 rounded-xl p-4 sm:p-6 md:p-8 lg:p-12.5">
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground font-urbanist">
            Description
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-foreground/50 font-urbanist font-regular mt-2 md:mt-3.5">
            {t('description')}
          </p>
          <div className=" border-t border-gray-200 mt-6 sm:mt-8 md:mt-12.5 pt-4 sm:pt-5 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0">
            <div>
              <div className="flex gap-1.5 items-center">
                <img
                  src="/assets/icons/ic_burning.png"
                  alt="burning"
                  className="w-6 h-6"
                />
                <p className="text-sm sm:text-base md:text-lg text-foreground/50 font-urbanist font-regular">
                  {t('burningTime.label')}
                </p>
              </div>
              <p className="text-sm sm:text-base md:text-2xl text-foreground font-urbanist font-regular mt-2 md:mt-2.5">
                {t('burningTime.value')}
              </p>
            </div>
            <div className="border-t sm:border-t-0 sm:border-l border-gray-200 pt-4 sm:pt-0 sm:pl-5">
              <div className="flex gap-1.5 items-center">
                <img
                  src="/assets/icons/ic_burning.png"
                  alt="burning"
                  className="w-6 h-6"
                />
                <p className="text-sm sm:text-base md:text-lg text-foreground/50 font-urbanist font-regular">
                  {t('ashContent.label')}
                </p>
              </div>
              <p className="text-sm sm:text-base md:text-2xl text-foreground font-urbanist font-regular mt-2 md:mt-2.5">
                {t('ashContent.value')}
              </p>
            </div>
            <div className="border-t sm:border-t-0 sm:border-l border-gray-200 pt-4 sm:pt-0 sm:pl-5">
              <div className="flex gap-1.5 items-center">
                <img
                  src="/assets/icons/ic_burning.png"
                  alt="burning"
                  className="w-6 h-6"
                />
                <p className="text-sm sm:text-base md:text-lg text-foreground/50 font-urbanist font-regular">
                  {t('moistureLevel.label')}
                </p>
              </div>
              <p className="text-sm sm:text-base md:text-2xl text-foreground font-urbanist font-regular mt-2 md:mt-2.5">
                {t('moistureLevel.value')}
              </p>
            </div>
          </div>
        </div>
        <div className="border border-gray-200 rounded-xl p-4 sm:p-6 md:p-8 lg:p-12.5">
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground font-urbanist">
            {t('keyFeatures.title')}
          </h2>
          <div className="flex flex-col items-start justify-center mt-6 sm:mt-8 md:mt-12.5 gap-5 sm:gap-6 md:gap-7.5">
            {t.raw('keyFeatures.features').map((feature: string, index: number) => (
              <KeyFeatures key={index} description={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
