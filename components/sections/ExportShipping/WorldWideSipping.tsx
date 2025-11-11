import { ContainerPlaceOnOrder } from "@/components/ui";


export default function WorldWideSipping() {
    return (
        <section className="container mx-auto px-4 mt-20 md:mt-30">
      <div>
        <img
          src="/assets/icons/ic_stars.png"
          alt="stars"
          className="w-auto h-5 md:h-6 mb-3 md:mb-4"
        />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground font-urbanist mb-3 md:mb-3.5">
        Worldwide Shipping, Seamless and Reliable
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-foreground/50 font-urbanist font-medium">
        From order confirmation to final delivery, every shipment is handled with precision and care. We ensure on-time production, secure packaging, and smooth export from Indonesia’s major ports to destinations worldwide.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-6 md:mt-8 lg:mt-10">
        <ContainerPlaceOnOrder
          step="Step 01"
          title="Order Confirmation"
          description="Once your order is confirmed, our team reviews all product details, quantities, and packaging specifications to ensure everything meets export standards."
        />
        <ContainerPlaceOnOrder
          step="Step 02"
          title="Production Process"
          description="Manufacturing begins according to your request, with an estimated lead time of 7–14 days to ensure optimal charcoal quality."
        />
        <ContainerPlaceOnOrder
          step="Step 03"
          title="Quality Inspection"
          description="Each batch undergoes strict quality control and certification to guarantee durability, moisture content, and shape consistency that meet international standards."
        />
        <ContainerPlaceOnOrder
          step="Step 04"
          title="Packaging & Labeling"
          description="Products are packed using eco-friendly materials, with custom branding options available to match your company’s identity."
        />
        <ContainerPlaceOnOrder
          step="Step 05"
          title="Loading & Documentation"
          description="Goods are carefully loaded into containers at major ports — Surabaya, Semarang, or Belawan — accompanied by complete and accurate export documentation."
        />
        <ContainerPlaceOnOrder
          step="Step 06"
          title="Shipment & Delivery"
          description="Sea shipment takes approximately 25–35 days, depending on the destination country. We provide transparent tracking updates until your order safely arrives."
        />
      </div>
    </section>
    )
}