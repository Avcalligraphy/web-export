import { KeyFeatures } from "@/components/ui";

export default function DescriptGallery() {
  return (
    <section className="container mx-auto mt-5 sm:mt-7.5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-7.5">
        <div className="border border-gray-200 rounded-xl p-4 sm:p-6 md:p-8 lg:p-12.5">
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground font-urbanist">
            Description
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-foreground/50 font-urbanist font-regular mt-2 md:mt-3.5">
            Our premium coconut charcoal briquettes are crafted specifically for
            hookah and shisha use. Made from 100% natural coconut shells, they
            deliver a clean, odorless, and long-lasting burn — perfect for
            lounges, distributors, and global importers who
            <br />
            demand consistent quality and smooth smoking experiences. Each
            briquette is precisely shaped and tested to ensure stable heat,
            minimal ash, and no chemical additives, maintaining the pure flavor
            of your shisha
          </p>
          <div className=" border-t border-gray-200 mt-6 sm:mt-8 md:mt-12.5 pt-4 sm:pt-5 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0">
            <div>
              <div className="flex gap-1.5 items-center">
                <img
                  src="/assets/icons/ic_burning.png"
                  alt="burning"
                  className="w-6 h-6"
                />
                <p className="text-sm sm:text-base md:text-lg text-foreground/50 font-urbanist font-regular">
                  Burning Time
                </p>
              </div>
              <p className="text-sm sm:text-base md:text-2xl text-foreground font-urbanist font-regular mt-2 md:mt-2.5">
                3+ Hours
              </p>
            </div>
            <div className="border-t sm:border-t-0 sm:border-l border-gray-200 pt-4 sm:pt-0 sm:pl-5">
              <div className="flex gap-1.5 items-center">
                <img
                  src="/assets/icons/ic_burning.png"
                  alt="burning"
                  className="w-6 h-6"
                />
                <p className="text-sm sm:text-base md:text-lg text-foreground/50 font-urbanist font-regular">
                  Ash Content
                </p>
              </div>
              <p className="text-sm sm:text-base md:text-2xl text-foreground font-urbanist font-regular mt-2 md:mt-2.5">
              &lt;2% Low Ash
              </p>
            </div>
            <div className="border-t sm:border-t-0 sm:border-l border-gray-200 pt-4 sm:pt-0 sm:pl-5">
              <div className="flex gap-1.5 items-center">
                <img
                  src="/assets/icons/ic_burning.png"
                  alt="burning"
                  className="w-6 h-6"
                />
                <p className="text-sm sm:text-base md:text-lg text-foreground/50 font-urbanist font-regular">
                Moisture Level
                </p>
              </div>
              <p className="text-sm sm:text-base md:text-2xl text-foreground font-urbanist font-regular mt-2 md:mt-2.5">
              &lt;6% Moisture
              </p>
            </div>
          </div>
        </div>
        <div className="border border-gray-200 rounded-xl p-4 sm:p-6 md:p-8 lg:p-12.5">
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground font-urbanist">
          Key Features and Amenities
          </h2>
          <div className="flex flex-col items-start justify-center mt-6 sm:mt-8 md:mt-12.5 gap-5 sm:gap-6 md:gap-7.5">
            <KeyFeatures description="Long Burning Time — Up to 3+ hours of consistent heat" />
            <KeyFeatures description="100% Natural Coconut Shells — Eco-friendly and renewable" />
            <KeyFeatures description="Low Ash Content (<2%) — Keeps your hookah bowl cleang" />
            <KeyFeatures description="Perfect Shape Consistency — Cube 25mm / 26mm / 27mm options" />
            <KeyFeatures description="Odorless & Tasteless — Preserves original shisha flavor" />
            <KeyFeatures description="Packaging Options — 1kg, 10kg, OEM / Private Label available" />
            <KeyFeatures description="Export Ready — Trusted by importers in 20+ countries" />
          </div>
        </div>
      </div>
    </section>
  );
}
