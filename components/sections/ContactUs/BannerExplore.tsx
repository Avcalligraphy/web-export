"use client";

import { Button } from "@/components/ui";
import { useTranslations } from "next-intl";

export default function BannerExplore() {
  const t = useTranslations("contactUs.bannerExplore");

  return (
    <section style={{ backgroundImage: "url('/assets/images/bg-global-banner.png')" }} className="py-12 sm:py-16 md:py-20 lg:py-25 px-4 sm:px-6 md:px-12 lg:px-40.5 mt-20 md:mt-30 border border-gray-200 bg-cover bg-center bg-no-repeat">
        <div className="container mx-auto flex flex-col items-center justify-center h-full">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8 w-full">
            <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground font-urbanist">{t("title")}</h2>
                <p className="text-sm sm:text-base md:text-lg text-foreground/50 font-urbanist font-regular mt-4">{t("description")}</p>
            </div>
            <Button variant="red" size="md" className="rounded-xl w-full md:w-92 mt-4 md:mt-0">
            {t("button")}
            </Button>
            
        </div>
      </div>
    </section>
  );
}