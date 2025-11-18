
"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

interface ProductGalleryProps {
  productType: 'hookah' | 'bbq' | 'oem';
}

export default function ProductGallery({ productType }: ProductGalleryProps) {
  const t = useTranslations(`catalogProduct.${productType}`);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 6;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="container mx-auto mt-10 sm:mt-16 md:mt-20 lg:mt-30">
      <div className="flex flex-col items-start justify-center">
        <div className="flex flex-col sm:flex-row items-center justify-start  gap-3 sm:gap-5 w-full">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground font-urbanist">{t('title')}</h1>
            <div className="flex items-center justify-center gap-2.5 p-2 sm:p-2.5 border border-gray-200 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" role="img" className="sm:w-6 sm:h-6">
                <path fill="#ffff" d="M12 2a6 6 0 0 0-6 6c0 4.667 6 11 6 11s6-6.333 6-11a6 6 0 0 0-6-6zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
                </svg>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-foreground font-urbanist font-regular ">
            {t('location')}
            </p>
            </div>
        </div>
        <div className="flex flex-col bg-secondary border border-gray-200 rounded-xl p-4 sm:p-6 md:p-8 lg:p-12.5 w-full mt-6 sm:mt-8 md:mt-12.5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-9 gap-3 md:gap-5 bg-primary rounded-xl p-5 border border-gray-200">
                <img src="/assets/images/product-gallery-1.png" alt="product-gallery-1" className="w-full h-full object-cover" />
                <img src="/assets/images/product-gallery-1.png" alt="product-gallery-1" className="w-full h-full object-cover" />
                <img src="/assets/images/product-gallery-1.png" alt="product-gallery-1" className="w-full h-full object-cover" />
                <img src="/assets/images/product-gallery-1.png" alt="product-gallery-1" className="w-full h-full object-cover" />
                <img src="/assets/images/product-gallery-1.png" alt="product-gallery-1" className="w-full h-full object-cover" />
                <img src="/assets/images/product-gallery-1.png" alt="product-gallery-1" className="w-full h-full object-cover" />
                <img src="/assets/images/product-gallery-1.png" alt="product-gallery-1" className="w-full h-full object-cover" />
                <img src="/assets/images/product-gallery-1.png" alt="product-gallery-1" className="w-full h-full object-cover" />
                <img src="/assets/images/product-gallery-1.png" alt="product-gallery-1" className="w-full h-full object-cover" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-center gap-3 sm:gap-5 w-full mt-5 sm:mt-7.5">
                <img src="/assets/images/main-product-gallery-1.png" alt="main-product-gallery-1.png" className="w-full h-auto object-cover" />
                <img src="/assets/images/main-product-gallery-2.png" alt="main-product-gallery-2.png" className="w-full h-auto object-cover" />
            </div>
            
            {/* Slide Navigation */}
            <div className="flex items-center justify-center mt-5 sm:mt-7.5">
              <div className="flex items-center gap-2 sm:gap-4 bg-primary border border-gray-200 rounded-full p-2 sm:p-2.5">
                {/* Left Arrow Button */}
                <button
                  onClick={prevSlide}
                  className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14.5 md:h-14.5 rounded-full border border-gray-200 hover:opacity-80 transition-opacity"
                  aria-label="Previous slide"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-foreground"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>

                {/* Progress Indicators */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? "w-4 sm:w-5 bg-red-100"
                          : "w-4 sm:w-5 bg-gray-200 hover:opacity-80"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Right Arrow Button */}
                <button
                  onClick={nextSlide}
                  className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14.5 md:h-14.5 rounded-full border border-gray-200 hover:opacity-80 transition-opacity"
                  aria-label="Next slide"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-foreground"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}   