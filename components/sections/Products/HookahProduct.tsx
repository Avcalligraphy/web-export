"use client";

import Button from "../../ui/Button";
import { motion } from 'framer-motion';

export default function HookahProduct() {
  const leftColumnVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const rightColumnVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const cardsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
    <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0">
      <motion.div 
        className="flex flex-col item-start justify-start w-full lg:w-5/12 lg:mr-8 xl:mr-12"
        variants={leftColumnVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <img
          src="/assets/icons/ic_logo_product.png"
          alt="Hookah Product"
          className="w-20 h-20"
        />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground font-urbanist mt-12.5">
        BBQ Coconut Charcoal
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-foreground/50 font-urbanist font-regular mt-2 md:mt-3.5 mb-12.5">
        Experience premium-quality coconut charcoal briquettes designed specifically for BBQ use — consistent heat, long burning time, and low ash content.
        </p>
        <Button
          variant="secondary"
          size="md"
          className="w-full sm:w-auto rounded-xl border border-gray-200"
        >
          <div className="flex flex-row items-center justify-center">
            <span className="text-sm sm:text-base md:text-lg text-foreground font-urbanist font-regular mr-2">
              Request a Quote
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="32"
              height="32"
              role="img"
              aria-labelledby="arrowUpRight"
            >
              <title id="arrowUpRight">Arrow 60 Degrees Up Right</title>
              <path
                d="M6 18 L17 7"
                stroke="#E50000"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M10 7h7v7"
                stroke="#E50000"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Button>
        <div className="mt-6">
          <div className="border border-gray-200 bg-secondary rounded-xl p-7.5 flex flex-row items-center justify-between">
            <div>
            <p className="text-sm sm:text-base text-foreground/50 font-urbanist font-regular">
            Exported To
            </p>
            <h4 className="text-xl font-semibold text-foreground font-urbanist">
            20+ Countries 
            </h4>
            </div>

            <img src="/assets/icons/ic_avatars.png" alt="avatars" className="w-auto h-17.5" />

          </div>
        </div>
      </motion.div>
      <motion.div 
        className="w-full lg:flex-1 lg:border-l border-gray-200 lg:pl-8 xl:pl-12 pt-8 lg:pt-0"
        variants={rightColumnVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-start sm:items-center mb-6">
          <h3 className="text-xl sm:text-2xl md:text-2xl font-semibold text-foreground font-urbanist">
            Variety & Specifications
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-foreground/50 font-urbanist font-regular">
            Available in multiple sizes and shapes: Cube 25mm | Finger |
            Hexagonal
          </p>
        </div>
        <div className="overflow-hidden">
          <motion.div 
            className="mt-6 flex flex-col sm:flex-row gap-5 sm:gap-7.5"
            variants={cardsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              variants={cardVariants}
              style={{ backgroundImage: "url('/assets/images/hookah-1.png')" }}
              className="w-full sm:w-1/2 h-64 sm:h-72 md:h-80 lg:h-83 bg-cover bg-center bg-no-repeat flex flex-col justify-end items-start p-4 sm:p-6 rounded-lg"
            >
              <h4 className="text-lg sm:text-xl font-semibold text-foreground font-urbanist">
                Coconut Charcoal Briquette – Cube 25mm
              </h4>
              <p className="text-xs sm:text-sm md:text-base text-foreground/50 font-urbanist font-regular">
                Ash Content: &lt;2% | Moisture: &lt;6% | Burning Time: 3+ Hours
              </p>
            </motion.div>
            <motion.div
              variants={cardVariants}
              style={{ backgroundImage: "url('/assets/images/hookah-2.png')" }}
              className="w-full sm:w-1/2 h-64 sm:h-72 md:h-80 lg:h-83 bg-cover bg-center bg-no-repeat flex flex-col justify-end items-start p-4 sm:p-6 rounded-lg"
            >
              <h4 className="text-lg sm:text-xl font-semibold text-foreground font-urbanist">
                Packaging Options
              </h4>
              <p className="text-xs sm:text-sm md:text-base text-foreground/50 font-urbanist font-regular max-w-70">
                Kraft & Printed Box 1 kg | 10 kg | Custom Private Label
              </p>
            </motion.div>
          </motion.div>
        </div>
        <div className="overflow-hidden">
          <motion.div 
            className="mt-6 sm:mt-7.5 flex flex-col sm:flex-row gap-5"
            variants={cardsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={cardVariants} className="border border-gray-200 bg-secondary rounded-xl p-7.5">
              <p className="text-sm sm:text-base text-foreground/50 font-urbanist font-regular">
                Monthly Production Capacity
              </p>
              <h4 className="text-xl font-semibold text-foreground font-urbanist">
                Up to 200 Tons / Month
              </h4>
            </motion.div>
            <motion.div variants={cardVariants} className="border border-gray-200 bg-secondary rounded-xl p-5 sm:p-7.5 flex-1 flex flex-col sm:flex-row gap-4 sm:gap-5 items-start sm:items-center justify-between">
              <div>
                <p className="text-sm sm:text-base text-foreground/50 font-urbanist font-regular">
                  {" "}
                  Packaging & Branding
                </p>
                <h4 className="text-lg sm:text-xl font-semibold text-foreground font-urbanist">
                  Custom OEM Available
                </h4>
              </div>
              <Button
                variant="primary"
                size="md"
                className="rounded-xl flex flex-row gap-2 sm:gap-4 items-center justify-center w-full sm:w-auto"
              >
                <span className="text-sm sm:text-base text-foreground font-urbanist font-regular">
                  View Example
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  role="img"
                  aria-labelledby="eye1"
                >
                  <title id="eye1">Eye</title>
                  <path
                    d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"
                    fill="none"
                    stroke="#ffff"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    fill="none"
                    stroke="#ffff"
                    strokeWidth="2"
                  />
                </svg>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        <div className="overflow-hidden">
          <motion.div 
            className="mt-6"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="border border-gray-200 bg-secondary rounded-xl p-7.5">
              <p className="text-sm sm:text-base text-foreground/50 font-urbanist font-regular">
                Quality Certification
              </p>
              <h4 className="text-xl font-semibold text-foreground font-urbanist">
                SGS, ISO, Halal Certified
              </h4>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
  );
}