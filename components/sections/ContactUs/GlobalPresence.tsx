"use client";

import { ContainerGlobalPresence } from "@/components/ui";
import { useTranslations } from "next-intl";

export default function GlobalPresence() {
  const t = useTranslations("contactUs.globalPresence");

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20 md:mt-30">
      <div>
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
        <ContainerGlobalPresence />
      </div>
    </section>
  );
}