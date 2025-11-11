"use client";

import { useTranslations } from "next-intl";

export default function ExploreBriquette() {
  const t = useTranslations("contactUs.exploreBriquette");

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20 md:mt-30">
      <div className="bg-secondary border border-gray-200 rounded-xl">
        <div style={{ backgroundImage: "url('/assets/images/bg-ornament.png')" }} className="w-full bg-cover bg-center bg-no-repeat p-4 sm:p-8 md:p-12 lg:p-20">
          <div className="w-full gap-4 sm:gap-5 grid grid-cols-1 md:grid-cols-2">

            <img src="/assets/images/bg-explore-1.png" alt="stars" className="w-full h-48 sm:h-59 bg-cover bg-center bg-no-repeat rounded-lg" />
            <img src="/assets/images/bg-explore-2.png" alt="stars" className="w-full h-48 sm:h-59 bg-cover bg-center bg-no-repeat rounded-lg" />
            <img src="/assets/images/bg-explore-3.png" alt="stars" className="w-full h-48 sm:h-59 bg-cover bg-center bg-no-repeat rounded-lg" />

            <div className="grid grid-cols-2 gap-4 sm:gap-5 w-full">
            <img src="/assets/images/bg-explore-1.png" alt="stars" className="w-full h-48 sm:h-59 bg-cover bg-center bg-no-repeat rounded-lg" />
            <img src="/assets/images/bg-explore-2.png" alt="stars" className="w-full h-48 sm:h-59 bg-cover bg-center bg-no-repeat rounded-lg" />
            </div>

            <div className="mt-4 md:mt-0">
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
            </div>
            <img src="/assets/images/bg-explore-3.png" alt="stars" className="w-full h-48 sm:h-59 bg-cover bg-center bg-no-repeat rounded-lg" />
          
          </div>
        </div>
      </div>
    </section>
  );
}