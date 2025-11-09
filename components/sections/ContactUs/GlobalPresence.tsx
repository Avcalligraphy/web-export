import { ContainerGlobalPresence } from "@/components/ui";



export default function GlobalPresence() {
  return (
    <section className="container mx-auto mt-20 md:mt-30">
      <div>
      <img
          src="/assets/icons/ic_stars.png"
          alt="stars"
          className="w-auto h-5 md:h-6 mb-3 md:mb-4"
        />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground font-urbanist mb-3 md:mb-3.5">
        Our Global Presence
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-foreground/50 font-urbanist font-medium">
        We operate with a strong commitment to quality and reliability from our main headquarters in Indonesia, supported by regional offices to serve clients across the globe. Every shipment is managed with precision and care to ensure timely delivery and trusted partnerships.
        </p>
        <ContainerGlobalPresence />
      </div>
    </section>
  );
}