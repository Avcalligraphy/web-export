"use client";

import { useState } from "react";
import Tag from "../Tag";
import { Button } from "..";
export default function ContainerGlobalPresence() {
  const [activeItem, setActiveItem] = useState("All");
  const globalPresenceItems = [
    {
      title: "All",
    },
    {
      title: "Province",
    },
    {
      title: "City",
    },
  ];
  return (
    <div className="mt-20">
      <div className="max-w-129 bg-secondary p-2.5 rounded-xl gap-2.5 flex items-center justify-center">
        {globalPresenceItems.map((item) => {
          const isActive = item.title === activeItem;
          return (
            <div
              key={item.title}
              onClick={() => setActiveItem(item.title)}
              className={`rounded-xl border border-gray-200 px-6 py-3 text-lg font-urbanist font-medium w-full text-center text-foreground ${
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

      <div className="flex items-center gap-7.5 w-full mt-12.5">
        <div className="bg-secondary border border-gray-200 rounded-xl p-12.5 flex flex-col justify-around items-start min-h-90">
          <p className="text-sm text-foreground/50 font-urbanist font-regular">
            Main Headquarters
          </p>
          <h3 className="text-2xl font-semibold text-foreground font-urbanist">
            Jl. Raya Pelabuhan No. 12, Surabaya
          </h3>
          <p className="text-sm text-foreground/50 font-urbanist font-regular">
            Our main production and export hub, where we manage manufacturing,
            packaging, and international logistics for all coconut charcoal
            briquette shipments.
          </p>
          <div className="flex gap-2.5 w-full">
            <Tag width="full">info@nusaccoal.com</Tag>
            <Tag width="full">+62 812 - 1398 - 6906</Tag>
            <Tag width="full">Surabaya</Tag>
          </div>
          <Button variant="red" size="md" className="w-full rounded-xl">
            Get Direction
          </Button>
        </div>
        <div className="bg-secondary border border-gray-200 rounded-xl p-12.5 flex flex-col justify-around items-start min-h-90">
          <p className="text-sm text-foreground/50 font-urbanist font-regular">
            Main Headquarters
          </p>
          <h3 className="text-2xl font-semibold text-foreground font-urbanist">
            Jl. Raya Pelabuhan No. 12, Surabaya
          </h3>
          <p className="text-sm text-foreground/50 font-urbanist font-regular">
            Our main production and export hub, where we manage manufacturing,
            packaging, and international logistics for all coconut charcoal
            briquette shipments.
          </p>
          <div className="flex gap-2.5 w-full">
            <Tag width="full">info@nusaccoal.com</Tag>
            <Tag width="full">+62 812 - 1398 - 6906</Tag>
            <Tag width="full">Surabaya</Tag>
          </div>
          <Button variant="red" size="md" className="w-full rounded-xl">
            Get Direction
          </Button>
        </div>
      </div>
    </div>
  );
}
