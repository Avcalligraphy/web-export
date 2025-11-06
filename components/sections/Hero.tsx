import Button from "../ui/Button";

export default function Hero() {
  return (
    <section 
      className="relative -mt-28 md:-mt-32 w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/images/bg-hero.png')" }}
    >
      <div className="flex flex-col items-center md:pt-40 mx-auto max-w-[1096px]">
        <h1 className=" mt-[159px] text-4xl text-center md:text-6xl font-bold text-foreground font-urbanist mb-6 leading-[110%]">Premium Coconut Charcoal Briquettes for Hookah & BBQ — Exported Worldwide</h1>
        <p className="text-lg text-foreground/80 font-urbanist text-center">
          We are a leading manufacturer and exporter of premium coconut charcoal briquettes for hookah and BBQ. Our products are exported worldwide to meet the growing demand for high-quality charcoal in international markets.
        </p>
        <div className="flex justify-center mt-8 w-full mx-auto max-w-[582px]">
          <Button variant="primary" size="md" className="w-full rounded-[100px] border-[1px] border-gray-100 mr-6">
            Download Catalog
          </Button>
          <Button variant="red" size="md" className="w-full rounded-[100px] ">
            Get a Quote
          </Button>
        </div>
      </div>
    </section>
  );
}

