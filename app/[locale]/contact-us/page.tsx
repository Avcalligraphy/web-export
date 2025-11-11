import { HeroContact, SendInquiry, GlobalPresence, ExploreBriquette, BannerExplore } from "@/components/sections";
import { locales } from "@/i18n";
import type { Metadata } from "next";

// Generate static params for all locales (required for static export)
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  const metadataMap: Record<string, Metadata> = {
    id: {
      title: "Hubungi Kami | Produsen & Eksportir Briket Arang Kelapa Premium",
      description: "Hubungi kami untuk informasi lebih lanjut tentang briket arang kelapa premium. Kami siap membantu distributor, grosir, dan pemilik merek dengan produk berkualitas tinggi dan layanan ekspor yang andal di seluruh dunia.",
      keywords: [
        "hubungi kami",
        "kontak eksportir arang",
        "kirim pertanyaan arang kelapa",
        "kontak produsen briket",
        "customer service arang",
        "inquiry briket arang",
        "kontak eksportir Indonesia",
        "layanan pelanggan arang premium"
      ],
      openGraph: {
        locale: "id_ID",
        type: "website",
      },
    },
    en: {
      title: "Contact Us | Premium Coconut Charcoal Manufacturer & Exporter",
      description: "Contact us for more information about premium coconut charcoal briquettes. We're ready to help distributors, wholesalers, and brand owners with high-quality products and reliable export services worldwide.",
      keywords: [
        "contact us",
        "charcoal exporter contact",
        "coconut charcoal inquiry",
        "briquette manufacturer contact",
        "charcoal customer service",
        "charcoal briquette inquiry",
        "Indonesia exporter contact",
        "premium charcoal customer service"
      ],
      openGraph: {
        locale: "en_US",
        type: "website",
      },
    },
    zh: {
      title: "联系我们 | 优质椰壳炭制造商和出口商",
      description: "联系我们了解更多关于优质椰壳炭砖的信息。我们随时准备帮助分销商、批发商和品牌所有者提供高质量的产品和可靠的全球出口服务。",
      keywords: [
        "联系我们",
        "炭出口商联系方式",
        "椰壳炭询价",
        "炭砖制造商联系方式",
        "炭客户服务",
        "炭砖询价",
        "印尼出口商联系方式",
        "优质炭客户服务"
      ],
      openGraph: {
        locale: "zh_CN",
        type: "website",
      },
    },
    ar: {
      title: "اتصل بنا | مصنع ومصدر فحم جوز الهند الفاخر",
      description: "اتصل بنا للحصول على مزيد من المعلومات حول فحم جوز الهند الفاخر. نحن مستعدون لمساعدة الموزعين وتجار الجملة وأصحاب العلامات التجارية بمنتجات عالية الجودة وخدمات تصدير موثوقة في جميع أنحاء العالم.",
      keywords: [
        "اتصل بنا",
        "اتصال مصدر الفحم",
        "استفسار فحم جوز الهند",
        "اتصال مصنع الفحم المضغوط",
        "خدمة عملاء الفحم",
        "استفسار فحم مضغوط",
        "اتصال مصدر إندونيسي",
        "خدمة عملاء الفحم الفاخر"
      ],
      openGraph: {
        locale: "ar_SA",
        type: "website",
      },
    },
  };

  const currentMetadata = metadataMap[locale] || metadataMap.en;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

  return {
    ...currentMetadata,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `/${locale}/contact-us`,
      languages: {
        id: `${baseUrl}/id/contact-us`,
        en: `${baseUrl}/en/contact-us`,
        zh: `${baseUrl}/zh/contact-us`,
        ar: `${baseUrl}/ar/contact-us`,
      },
    },
    openGraph: {
      ...currentMetadata.openGraph,
      title: currentMetadata.title as string,
      description: currentMetadata.description || undefined,
      url: `/${locale}/contact-us`,
      siteName: "Premium Coconut Charcoal Export",
      images: [
        {
          url: "/assets/images/bg-hero.png",
          width: 1200,
          height: 630,
          alt: locale === 'id' 
            ? "Hubungi Kami - Produsen & Eksportir Briket Arang Kelapa Premium"
            : locale === 'zh'
            ? "联系我们 - 优质椰壳炭制造商和出口商"
            : locale === 'ar'
            ? "اتصل بنا - مصنع ومصدر فحم جوز الهند الفاخر"
            : "Contact Us - Premium Coconut Charcoal Manufacturer & Exporter",
        },
      ],
      type: "website" as const,
    },
    twitter: {
      card: "summary_large_image",
      title: currentMetadata.title as string,
      description: currentMetadata.description || undefined,
      images: ["/assets/images/bg-hero.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default function ContactUsPage() {
  return (
    <main>
        <HeroContact />
        <SendInquiry />
        <GlobalPresence />
        <ExploreBriquette />
        <BannerExplore />
    </main>
  );
}