import { ContainerCertificates, Tag } from "@/components/ui";
import { useTranslations } from "next-intl";


export default function Certificates() {
  const t = useTranslations('certificates');

  return (
    <section className="mt-20 md:mt-30 bg-secondary border-1 border-gray-200">
      <div className="container mx-auto py-10 md:py-16 lg:py-20 px-4">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 lg:gap-15">
        <img src="/assets/icons/certif.png" alt="certif" className="w-auto h-20 md:h-24 lg:h-30" />
      <div>
        <Tag>{t('tag')}</Tag>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground font-urbanist mt-2 md:mt-3.5">{t('title')}</h2>
        <p className="text-sm sm:text-base md:text-lg text-foreground/50 font-urbanist font-regular mt-2 md:mt-3.5">
        {t('description')}
        </p>

      </div>
      </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 border-1 border-gray-200 p-4 md:p-5 bg-primary rounded-xl mt-8 md:mt-10 lg:mt-12.5">
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