"use client";

import { HeroContainer } from "@/components/ui";
import Button from "../../ui/Button";
import { useTranslations } from "next-intl";

export default function AboutHero() {
  const t = useTranslations("about.aboutHero");

  return (
    <section
      className="relative -mt-20 md:-mt-28 lg:-mt-32 w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/images/bg-hero-about.png')" }}
    >
      <div className="flex flex-col pt-20 md:pt-32 lg:pt-50 container mx-auto px-4 items-start justify-start">
        <img
          src="/assets/icons/ic_stars.png"
          alt="stars"
          className="w-auto h-5 md:h-6 mb-3 md:mb-4"
        />
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground font-urbanist mb-3 md:mb-3.5">
          {t('title')}
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-foreground/50 font-urbanist font-medium max-w-3xl">
          {t('description')}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-4xl w-full mt-12 md:mt-16 lg:mt-20">
          <HeroContainer title="20+" description={t('stats.exportDestinations')} />
          <HeroContainer title="200+" description={t('stats.satisfiedBuyers')} />
          <HeroContainer title="250+ Tons" description={t('stats.productionCapacity')} />
        </div>
      </div>
    </section>
  );
}
