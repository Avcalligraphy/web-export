"use client";

import { useState } from "react";
import Tag from "../Tag";
import { Button } from "..";
import { useTranslations } from "next-intl";

export default function ContainerGlobalPresence() {
  const t = useTranslations("contactUs.globalPresence");
  const [activeItem, setActiveItem] = useState(t("tabs.all"));
  const globalPresenceItems = [
    {
      title: t("tabs.all"),
    },
    {
      title: t("tabs.province"),
    },
    {
      title: t("tabs.city"),
    },
  ];
  return (
    <div className="mt-20">
      <div className="max-w-129 bg-secondary p-2.5 rounded-xl gap-2.5 flex items-center justify-center w-full">
        {globalPresenceItems.map((item) => {
          const isActive = item.title === activeItem;
          return (
            <div
              key={item.title}
              onClick={() => setActiveItem(item.title)}
              className={`rounded-xl border border-gray-200 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base md:text-lg font-urbanist font-medium w-full text-center text-foreground ${
                isActive
                  ? "bg-primary text-foreground"
                  : "bg-secondary text-foreground/50"
              }`}
            >
              {item.title}
            </div>
          );
        })}
      </div>

      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 md:gap-7.5 w-full mt-8 md:mt-12.5">
        <div className="bg-secondary border border-gray-200 rounded-xl p-6 sm:p-8 md:p-12.5 flex flex-col justify-around items-start min-h-90 w-full">
          <p className="text-sm text-foreground/50 font-urbanist font-regular">
            {t("headquarters.label")}
          </p>
          <h3 className="text-xl sm:text-2xl font-semibold text-foreground font-urbanist mt-2">
            {t("headquarters.address")}
          </h3>
          <p className="text-sm text-foreground/50 font-urbanist font-regular mt-2">
            {t("headquarters.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-2.5 w-full mt-4">
            <Tag width="full">info@nusaccoal.com</Tag>
            <Tag width="full">+62 812 - 1398 - 6906</Tag>
            <Tag width="full">Surabaya</Tag>
          </div>
          <Button variant="red" size="md" className="w-full rounded-xl mt-4">
            {t("headquarters.getDirection")}
          </Button>
        </div>
        <div className="bg-secondary border border-gray-200 rounded-xl p-6 sm:p-8 md:p-12.5 flex flex-col justify-around items-start min-h-90 w-full">
          <p className="text-sm text-foreground/50 font-urbanist font-regular">
            {t("headquarters.label")}
          </p>
          <h3 className="text-xl sm:text-2xl font-semibold text-foreground font-urbanist mt-2">
            {t("headquarters.address")}
          </h3>
          <p className="text-sm text-foreground/50 font-urbanist font-regular mt-2">
            {t("headquarters.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-2.5 w-full mt-4">
            <Tag width="full">info@nusaccoal.com</Tag>
            <Tag width="full">+62 812 - 1398 - 6906</Tag>
            <Tag width="full">Surabaya</Tag>
          </div>
          <Button variant="red" size="md" className="w-full rounded-xl mt-4">
            {t("headquarters.getDirection")}
          </Button>
        </div>
      </div>
    </div>
  );
}
