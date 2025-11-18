"use client";

import { Button } from "@/components/ui";
import { useTranslations } from "next-intl";


export default function FactoryHero() {
  const t = useTranslations("factoryQuality.factoryHero");
  
  return (
    <section 
    className="relative -mt-20 md:-mt-28 lg:-mt-32 w-full min-h-screen bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/assets/images/bg-hero-factory.png')" }}
  >
    <div className="flex flex-col items-center justify-center min-h-screen pt-20 md:pt-32 lg:pt-40 px-4 mx-auto max-w-[1096px]">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-bold text-foreground font-urbanist mb-4 md:mb-6 leading-[110%] px-4">
      {t("title")}
      </h1>
      <p className="text-sm sm:text-base md:text-lg text-foreground/80 font-urbanist text-center px-4 max-w-3xl">
      {t("description")}
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 md:gap-6 mt-6 md:mt-8 w-full mx-auto max-w-[302px] px-4">
        <Button variant="red" size="md" className="w-full sm:w-auto sm:flex-1 rounded-full text-sm md:text-base">
          {t("button")}
        </Button>
        
      </div>
    </div>
  </section>
  );
}