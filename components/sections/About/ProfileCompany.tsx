"use client";

import { Button } from "@/components/ui";
import { useTranslations } from "next-intl";

export default function ProfileCompany() {
  const t = useTranslations("about.profileCompany");

  return (
    <section
      style={{
        backgroundImage: "url('/assets/images/bg-profile-company.png')",
      }}
      className="mt-20 md:mt-30 w-full min-h-screen bg-cover bg-center bg-no-repeat"
    >
      <div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-screen py-20 md:py-32">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground font-urbanist mb-3 md:mb-3.5 text-center px-4">
          {t('title')}
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-foreground font-urbanist font-medium max-w-3xl text-center px-4">
          {t('description')}
        </p>
        <Button
          variant="red"
          size="md"
          className="w-full sm:w-auto sm:min-w-[200px] md:min-w-[280px] rounded-full mt-6 md:mt-8 hover:opacity-90 text-sm md:text-base px-6 md:px-8"
        >
          <div className="flex items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              className="w-5 h-5 md:w-6 md:h-6"
              role="img"
              aria-labelledby="play1"
            >
              <title id="play1">Play</title>
              <path d="M8 5v14l11-7z" fill="currentColor" />
            </svg>
            <span className="whitespace-nowrap">{t('watchVideo')}</span>
          </div>
        </Button>
      </div>
    </section>
  );
}
