"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ProductionProcess() {
  const t = useTranslations("factoryQuality.productionProcess");

  const steps = [
    {
      step: "01",
      title: t("step1.title"),
      description: t("step1.description"),
      image: "/assets/images/coconut-shell.png",
      position: "left" as const,
    },
    {
      step: "02",
      title: t("step2.title"),
      description: t("step2.description"),
      image: "/assets/images/coconut-shell.png",
      position: "right" as const,
    },
    {
      step: "03",
      title: t("step3.title"),
      description: t("step3.description"),
      image: "/assets/images/coconut-shell.png",
      position: "left" as const,
    },
    {
        step: "04",
        title: t("step3.title"),
        description: t("step3.description"),
        image: "/assets/images/coconut-shell.png",
        position: "right" as const,
      },
      {
        step: "05",
        title: t("step3.title"),
        description: t("step3.description"),
        image: "/assets/images/coconut-shell.png",
        position: "left" as const,
      },
  ];

  return (
    <section className="relative w-full bg-[#0A0A0A] py-12 sm:py-16 md:py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-0">
      <div className="mb-12">
        <img
          src="/assets/icons/ic_stars.png"
          alt="stars"
          className="w-auto h-5 md:h-6 mb-3 md:mb-4"
        />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground font-urbanist mb-3 md:mb-3.5">
        The Production Process
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-foreground/50 font-urbanist font-medium">
        A meticulous journey of transforming natural coconut shells into high-performance charcoal briquettes trusted by global buyers.
        </p>
      </div>
        <div className="relative w-full w-full mx-auto">
          {/* Vertical Timeline Line - Only on desktop */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-red-600 hidden lg:block"></div>

          {/* Steps */}
          <div className="space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-20">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative"
              >
                {/* Mobile & Tablet Layout (< lg) */}
                <div className="lg:hidden space-y-4">
                  {/* Step Label */}
                  <div className="text-center">
                    <span className="text-white text-3xl sm:text-4xl md:text-5xl font-bold font-urbanist">
                      STEP {step.step}
                    </span>
                  </div>

                  {/* Content Box */}
                  <div className="bg-secondary border border-gray-200 rounded-3xl sm:rounded-full p-4 sm:p-6 md:p-8">
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
                      {/* Image */}
                      <div className="shrink-0 bg-gradient-to-br from-[#FFFFFF] via-[#999999] to-transparent p-2 rounded-full border-2 border-foreground">
                        <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-gray-900">
                          <Image
                            src={step.image}
                            alt={step.title}
                            width={211}
                            height={211}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Text Content */}
                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold font-urbanist mb-2 sm:mb-3">
                          {step.title}
                        </h3>
                        <p className="text-foreground/50 text-sm sm:text-base md:text-lg font-urbanist leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout (>= lg) */}
                <div className="hidden lg:flex items-center">
                  <div className={`flex items-center w-full ${
                    step.position === "left" ? "flex-row" : "flex-row-reverse"
                  }`}>
                    {/* Step Label Side */}
                    <div className={`w-1/2 flex ${
                      step.position === "left" ? "justify-end pr-12 xl:pr-16" : "justify-start pl-12 xl:pl-16"
                    }`}>
                      <span className="text-white text-4xl xl:text-5xl 2xl:text-6xl font-bold font-urbanist">
                        STEP {step.step}
                      </span>
                    </div>

                    {/* Timeline Marker */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 z-20 hidden 2xl:block">
                      <img
                        src="/assets/icons/ic_pointer.png"
                        alt="pointer"
                        className="w-8 h-8 xl:w-10 xl:h-10"
                      />
                    </div>

                    {/* Content Box Side */}
                    <div className={`w-full ${
                      step.position === "left" ? "pl-12 xl:pl-16 2xl:pl-80" : "pr-12 xl:pr-16 2xl:pr-80 "
                    }`}>
                      <div className="bg-secondary border border-gray-200 rounded-full p-6 xl:p-8">
                        <div className="flex gap-6 xl:gap-8 items-center">
                          {/* Image */}
                          <div className="shrink-0 bg-gradient-to-br from-[#FFFFFF] via-[#999999] to-transparent p-2.5 rounded-full border-2 border-foreground">
                            <div className="w-36 h-36 xl:w-44 xl:h-44 2xl:w-52 2xl:h-52 rounded-full overflow-hidden bg-gray-900">
                              <Image
                                src={step.image}
                                alt={step.title}
                                width={211}
                                height={211}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>

                          {/* Text Content */}
                          <div className="flex-1">
                            <h3 className="text-white text-3xl  font-bold font-urbanist mb-3 xl:mb-4">
                              {step.title}
                            </h3>
                            <p className="text-foreground/50 text-base font-urbanist leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
