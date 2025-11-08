import { Button } from "@/components/ui";


export default function BannerProducct() {
  return (
    <section className="container mx-auto mt-30">
      <div style={{ backgroundImage: "url('/assets/images/banner-product.png')" }} className="w-full h-80 bg-cover bg-center bg-no-repeat px-24 rounded-xl">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="flex flex-row items-center justify-between gap-5">
            <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground font-urbanist">Let’s Build Your Brand for the Global Market</h2>
                <p className="text-sm sm:text-base md:text-lg text-foreground/50 font-urbanist font-regular mt-4">Partner with us to create custom packaging and private label briquettes tailored to your country’s market demand. From design to shipment, we ensure premium quality and reliable export service.</p>
            </div>
            <Button variant="red" size="md" className="rounded-xl w-62">
            Send Us Inquiry
            </Button>
            
        </div>
      </div>
      </div>
    </section>
  );
}