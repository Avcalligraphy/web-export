"use client";

import { useTranslations } from "next-intl";
import { motion } from 'framer-motion';

export default function ExploreBriquette() {
  const t = useTranslations("contactUs.exploreBriquette");

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
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
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const imageVariants = {
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
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20 md:mt-30 overflow-x-hidden">
      <div className="bg-secondary border border-gray-200 rounded-xl">
        <div style={{ backgroundImage: "url('/assets/images/bg-ornament.png')" }} className="w-full bg-cover bg-center bg-no-repeat p-4 sm:p-8 md:p-12 lg:p-20">
          <motion.div 
            className="w-full gap-4 sm:gap-5 grid grid-cols-1 md:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >

            <motion.img 
              src="/assets/images/bg-explore-1.png" 
              alt="explore" 
              className="w-full h-48 sm:h-59 bg-cover bg-center bg-no-repeat rounded-lg" 
              variants={imageVariants}
            />
            <motion.img 
              src="/assets/images/bg-explore-2.png" 
              alt="explore" 
              className="w-full h-48 sm:h-59 bg-cover bg-center bg-no-repeat rounded-lg" 
              variants={imageVariants}
            />
            <motion.img 
              src="/assets/images/bg-explore-3.png" 
              alt="explore" 
              className="w-full h-48 sm:h-59 bg-cover bg-center bg-no-repeat rounded-lg" 
              variants={imageVariants}
            />

            <motion.div 
              className="grid grid-cols-2 gap-4 sm:gap-5 w-full"
              variants={imageVariants}
            >
            <img src="/assets/images/bg-explore-1.png" alt="explore" className="w-full h-48 sm:h-59 bg-cover bg-center bg-no-repeat rounded-lg" />
            <img src="/assets/images/bg-explore-2.png" alt="explore" className="w-full h-48 sm:h-59 bg-cover bg-center bg-no-repeat rounded-lg" />
            </motion.div>

            <motion.div 
              className="mt-4 md:mt-0"
              variants={headerVariants}
            >
            <img
          src="/assets/icons/ic_stars.png"
          alt="stars"
          className="w-auto h-5 md:h-6 mb-3 md:mb-4"
        />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground font-urbanist mb-3 md:mb-3.5">
        {t("title")}
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-foreground/50 font-urbanist font-medium">
        {t("description")}
        </p>
            </motion.div>
            <motion.img 
              src="/assets/images/bg-explore-3.png" 
              alt="explore" 
              className="w-full h-48 sm:h-59 bg-cover bg-center bg-no-repeat rounded-lg" 
              variants={imageVariants}
            />
          
          </motion.div>
        </div>
      </div>
    </section>
  );
}