"use client";

import { KeyFeatures } from "@/components/ui";
import { useTranslations } from "next-intl";
import { motion } from 'framer-motion';

interface DescriptGalleryProps {
  productType: 'hookah' | 'bbq' | 'oem';
}

export default function DescriptGallery({ productType }: DescriptGalleryProps) {
  const t = useTranslations(`catalogProduct.${productType}`);

  const leftCardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const rightCardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const statsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const statItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  const featuresContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const featureItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };
  
  return (
    <section className="container mx-auto mt-5 sm:mt-7.5 overflow-x-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-7.5">
        <motion.div 
          className="border border-gray-200 rounded-xl p-4 sm:p-6 md:p-8 lg:p-12.5"
          variants={leftCardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground font-urbanist">
            Description
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-foreground/50 font-urbanist font-regular mt-2 md:mt-3.5">
            {t('description')}
          </p>
          <div className="overflow-hidden">
            <motion.div 
              className=" border-t border-gray-200 mt-6 sm:mt-8 md:mt-12.5 pt-4 sm:pt-5 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0"
              variants={statsContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div variants={statItemVariants}>
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
              </motion.div>
              <motion.div 
                className="border-t sm:border-t-0 sm:border-l border-gray-200 pt-4 sm:pt-0 sm:pl-5"
                variants={statItemVariants}
              >
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
              </motion.div>
              <motion.div 
                className="border-t sm:border-t-0 sm:border-l border-gray-200 pt-4 sm:pt-0 sm:pl-5"
                variants={statItemVariants}
              >
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
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        <motion.div 
          className="border border-gray-200 rounded-xl p-4 sm:p-6 md:p-8 lg:p-12.5"
          variants={rightCardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground font-urbanist">
            {t('keyFeatures.title')}
          </h2>
          <div className="overflow-hidden">
            <motion.div 
              className="flex flex-col items-start justify-center mt-6 sm:mt-8 md:mt-12.5 gap-5 sm:gap-6 md:gap-7.5"
              variants={featuresContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {t.raw('keyFeatures.features').map((feature: string, index: number) => (
                <motion.div key={index} variants={featureItemVariants}>
                  <KeyFeatures description={feature} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
