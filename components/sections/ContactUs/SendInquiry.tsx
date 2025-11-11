"use client";

import InquiryForm from "@/components/ui/ContactComponent/InquiryForm";
import { useTranslations } from "next-intl";

export default function SendInquiry() {
  const t = useTranslations("contactUs.sendInquiry");

  return (
    <section className="container mx-auto px-4 mt-20 md:mt-30">
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
        <div className="bg-secondary border border-gray-200 rounded-xl mt-20 p-6 md:p-8 lg:p-10">
          <InquiryForm />
        </div>
      </div>
    </section>
  );
}