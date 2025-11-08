import { ContainerClientSays } from "@/components/ui";
import { useTranslations } from "next-intl";



export default function ClientSays() {
  const t = useTranslations('clientSays');

  return (
    <section className="container mx-auto px-4 mt-30">
      <div>
        <img
          src="/assets/icons/ic_stars.png"
          alt="stars"
          className="w-auto h-6 mb-4"
        />
        <h2 className="text-4xl font-semibold text-foreground font-urbanist mb-3.5">
          {t('title')}
        </h2>
        <p className="text-lg text-foreground/50 font-urbanist font-medium">
          {t('description')}
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-10">
       <ContainerClientSays stars={5} name={t('client1.name')} title={t('client1.title')} description={t('client1.description')} image="/assets/images/client-says-1.png" country={t('client1.country')} />
       <ContainerClientSays stars={5} name={t('client2.name')} title={t('client2.title')} description={t('client2.description')} image="/assets/images/client-says-1.png" country={t('client2.country')} />
       <ContainerClientSays stars={5} name={t('client3.name')} title={t('client3.title')} description={t('client3.description')} image="/assets/images/client-says-1.png" country={t('client3.country')} />
      </div>
    </section>
  );
}
