import { ContainerCertificates, Tag } from "@/components/ui";


export default function Certificates() {
  return (
    <section className=" mt-30 bg-secondary border-1 border-gray-200">
      <div className="container mx-auto py-20">
      <div className="flex items-center gap-15">
        <img src="/assets/icons/certif.png" alt="certif" className="w-auto h-30 mb-4" />
      <div>
        <Tag>Quality You Can Trust</Tag>
        <h2 className="text-4xl font-bold text-foreground font-urbanist mt-3.5">Certificates & Tests</h2>
        <p className="text-lg text-foreground/50 font-urbanist font-regular mt-3.5">
        Our products are rigorously tested and certified by international laboratories to ensure consistency, safety, and export-grade quality for every shipment:
        </p>

      </div>
      </div>
        <div className="grid grid-cols-5 gap-4 border-1 border-gray-200 p-5 bg-primary rounded-xl mt-12.5">
          <ContainerCertificates icon="/assets/icons/certif.png" title="SGS" description="Visitors can access a wide range of resources, including ebooks, whitepapers, reports." />
          <ContainerCertificates icon="/assets/icons/certif.png" title="Halal" description="Visitors can access a wide range of resources, including ebooks, whitepapers, reports." />
          <ContainerCertificates icon="/assets/icons/certif.png" title="MSDS" description="Visitors can access a wide range of resources, including ebooks, whitepapers, reports." />
          <ContainerCertificates icon="/assets/icons/certif.png" title="ISO" description="Visitors can access a wide range of resources, including ebooks, whitepapers, reports." />
          <ContainerCertificates icon="/assets/icons/certif.png" title="COA" description="Visitors can access a wide range of resources, including ebooks, whitepapers, reports." />
        </div>
      </div>
    </section>
  );
}