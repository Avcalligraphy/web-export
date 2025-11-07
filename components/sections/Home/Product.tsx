import ContainerProduct from "@/components/ui/ContainerProduct";


export default function Product() {
  return (
    <section className="container mx-auto border-1 border-gray-200 rounded-xl p-10 mt-30">
      <div>
        <h2 className="text-3xl font-bold text-foreground font-urbanist">Export-Grade Coconut Charcoal Briquettes</h2>
        <p className="text-lg text-foreground/50 font-urbanist font-regular mt-3.5">
        Delivering long-lasting heat, low ash, and clean performance — perfect for shisha, BBQ, and private label brands.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-2 border-10 border-secondary p-4 items-stretch">
        <ContainerProduct title="Hookah / Shisha Briquettes" description="Long-lasting heat, low ash, and clean taste for smooth shisha sessions." image="product-1" tag="Hookah" underline={true} underlineText="MOQ 1×20ft | Custom branding available" />
        <ContainerProduct title="Eco-Friendly Charcoal for BBQ" description="Even heat, long burn, and pure coconut shell composition — perfect for grilling." image="product-2" tag="BBQ" underline={true} underlineText=" MOQ 1×20ft | 5–10 kg packaging" />
        <ContainerProduct title="Custom Charcoal Shapes & Packaging" description="Create your own design and packaging with full OEM support." image="product-3" tag="OEM / Private Label" underline={true} underlineText=" Flexible MOQ | Kraft & printed box option" />
      </div>
    </section>
  );
}