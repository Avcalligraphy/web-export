"use client";

import { ContainerGlobalPresence } from "@/components/ui";
import { useTranslations } from "next-intl";
import { motion } from 'framer-motion';

export default function GlobalPresence() {
  const t = useTranslations("contactUs.globalPresence");

  const headerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const containerVariants = {
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
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20 md:mt-30 overflow-x-hidden">
      <div className="overflow-hidden">
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
          {t("title")}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-foreground/50 font-urbanist font-medium">
          {t("description")}
          </p>
        </motion.div>
      </div>
      <div className="overflow-hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <ContainerGlobalPresence />
        </motion.div>
      </div>
    </section>
  );
}