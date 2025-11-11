

export default function HeroShipping() {
    return (
        <section className="relative -mt-20 md:-mt-28 lg:-mt-32 w-full h-131 border-b border-gray-200 flex flex-col items-start justify-center" style={{
            background: "linear-gradient(140deg, var(--tw-color-primary, #262626) 0%, rgba(38,38,38,0) 53%)",
          }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start justify-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground font-urbanist">Export With Confidence</h1>
            <p className="text-sm sm:text-base md:text-lg text-foreground/50 font-urbanist font-regular mt-4">We handle every shipment with precision — from factory loading to global delivery — ensuring reliability, safety, and timely arrival.</p>
          </div>
        </section>
    )
}