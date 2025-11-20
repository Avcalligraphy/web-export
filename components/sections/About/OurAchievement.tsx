"use client";

import { ContainerAchievement } from "@/components/ui";
import { useTranslations } from "next-intl";
import { motion } from 'framer-motion';

export default function OurAchievement() {
  const t = useTranslations("about.ourAchievement");

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
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
    <section className="container mx-auto px-4 mt-20 md:mt-30 overflow-x-hidden">
      <motion.div
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
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
      </motion.div>
      <div className="overflow-hidden">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-6 md:mt-8 lg:mt-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
        <motion.div variants={cardVariants}>
          <ContainerAchievement title={t('achievements.excellence.title')} description={t('achievements.excellence.description')} />
        </motion.div>
        <motion.div variants={cardVariants}>
          <ContainerAchievement title={t('achievements.trusted.title')} description={t('achievements.trusted.description')} />
        </motion.div>
        <motion.div variants={cardVariants}>
          <ContainerAchievement title={t('achievements.recognized.title')} description={t('achievements.recognized.description')} />
        </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
