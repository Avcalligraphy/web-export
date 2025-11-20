"use client";

import { InquiryCatalog } from "@/components/ui";
import { useTranslations } from "next-intl";
import { motion } from 'framer-motion';

interface ContactCatalogProps {
  productType: 'hookah' | 'bbq' | 'oem';
}

export default function ContactCatalog({ productType }: ContactCatalogProps) {
    const t = useTranslations(`catalogProduct.${productType}`);

    const leftColumnVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
            },
        },
    };

    const rightColumnVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
            },
        },
    };
    
    return (
        <section className="container mx-auto mt-10 sm:mt-16 md:mt-20 lg:mt-30 overflow-x-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-20 lg:gap-25">
      <motion.div 
        className="flex flex-col items-start justify-start"
        variants={leftColumnVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
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
      </motion.div>
        
        <motion.div 
          className="bg-secondary border border-gray-200 rounded-xl mt-8 sm:mt-12 md:mt-16 lg:mt-20 p-4 sm:p-6 md:p-8 lg:p-12.5"
          variants={rightColumnVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <InquiryCatalog />
        </motion.div>
      </div>
    </section>
    )
}
