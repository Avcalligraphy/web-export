import { HeroCardProduct } from "@/components/ui";



export default function ProductHero() {
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
        Our Products
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-foreground/50 font-urbanist font-medium max-w-3xl">
        Explore our range of high-quality coconut charcoal briquettes crafted for hookah, BBQ, and custom applications. Made from 100% natural coconut shells, our briquettes deliver long-lasting heat, low ash, and a clean burn — trusted by importers and private brands in 20+ countries worldwide.
        </p>
        <div className="mt-2 lg:mb-0 mb-20 border-10 border-secondary max-w-220 ">
            <div className="border border-gray-200 bg-primary p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 ">
                <HeroCardProduct image="product-1" title="Hookah / Shisha Briquettes" tag="Hookah" />
                <HeroCardProduct image="product-2" title="BBQ Charcoal" tag="BBQ" />
                <HeroCardProduct image="product-3" title="Custom Charcoal Shapes & Packaging" tag="OEM / Private Label" />
                </div>
            </div>
        </div>
    </section>
  );
}