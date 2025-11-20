"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function HeroShipping() {
    const t = useTranslations('exportShipping.hero');

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

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
            },
        },
    };
    
    return (
        <section className="relative -mt-20 md:-mt-28 lg:-mt-32 w-full h-131 border-b border-gray-200 flex flex-col items-start justify-center overflow-x-hidden" style={{
            background: "linear-gradient(140deg, var(--tw-color-primary, #262626) 0%, rgba(38,38,38,0) 53%)",
          }}>
          <motion.div 
            className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground font-urbanist"
              variants={itemVariants}
            >
              {t('title')}
            </motion.h1>
            <motion.p 
              className="text-sm sm:text-base md:text-lg text-foreground/50 font-urbanist font-regular mt-4"
              variants={itemVariants}
            >
              {t('description')}
            </motion.p>
          </motion.div>
        </section>
    )
}