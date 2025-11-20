"use client";

import React from 'react'
import FeaturesContainer from '../../ui/HomeComponent/FeaturesContainer'
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function Features() {
  const t = useTranslations('features');

  const featureItems = [
    t('items.natural'),
    t('items.burningTime'),
    t('items.lowAsh'),
    t('items.certified'),
    t('items.oem'),
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: 30 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="border-10 border-secondary overflow-x-hidden">
      <motion.div 
        className="container mx-auto px-4 py-8 md:py-10"
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground font-urbanist mb-4 md:mb-6 text-center px-4">
          {t('title')}
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-foreground/50 font-urbanist font-regular text-center mb-6 md:mb-8 max-w-3xl mx-auto px-4">
          {t('description')}
        </p>
      </motion.div>
      <div className="overflow-x-hidden">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-1 border-gray-200 p-4 md:p-5 gap-3 md:gap-5 max-w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {featureItems.map((title, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="overflow-hidden"
            >
              <FeaturesContainer title={title} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}