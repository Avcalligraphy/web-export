import { BannerQuality, Certificates, FactoryHero, ProductionProcess } from "@/components/sections";
import { locales, type Locale } from "@/i18n";
import type { Metadata } from "next";

// Generate static params for all locales (required for static export)
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  const metadataMap: Record<string, Metadata> = {
    id: {
      title: "Pabrik & Kualitas | Produsen Briket Arang Kelapa Premium",
      description: "Pelajari proses produksi dan standar kualitas kami. Kami menggabungkan teknologi produksi canggih dan kontrol kualitas ketat untuk menghasilkan briket arang kelapa premium yang dipercaya oleh pembeli global. 7 tahap produksi yang teliti dari pemilihan tempurung kelapa hingga pengemasan akhir.",
      keywords: [
        "pabrik arang kelapa",
        "kualitas arang premium",
        "proses produksi arang",
        "standar kualitas arang",
        "pabrik briket arang",
        "kontrol kualitas arang",
        "teknologi produksi arang",
        "sertifikasi arang",
        "proses karbonisasi",
        "produksi arang Indonesia"
      ],
      openGraph: {
        locale: "id_ID",
        type: "website",
      },
    },
    en: {
      title: "Factory & Quality | Premium Coconut Charcoal Manufacturer",
      description: "Learn about our production process and quality standards. We combine advanced production technology and strict quality control to deliver premium coconut charcoal briquettes trusted by global buyers. 7 meticulous production stages from coconut shell selection to final packaging.",
      keywords: [
        "coconut charcoal factory",
        "premium charcoal quality",
        "charcoal production process",
        "charcoal quality standards",
        "charcoal briquette factory",
        "charcoal quality control",
        "charcoal production technology",
        "charcoal certification",
        "carbonization process",
        "Indonesia charcoal production"
      ],
      openGraph: {
        locale: "en_US",
        type: "website",
      },
    },
    zh: {
      title: "工厂与质量 | 优质椰壳炭制造商",
      description: "了解我们的生产流程和质量标准。我们结合先进的生产技术和严格的质量控制，提供受全球买家信赖的优质椰壳炭砖。从椰壳选择到最终包装的7个细致生产阶段。",
      keywords: [
        "椰壳炭工厂",
        "优质炭质量",
        "炭生产过程",
        "炭质量标准",
        "炭砖工厂",
        "炭质量控制",
        "炭生产技术",
        "炭认证",
        "碳化过程",
        "印尼炭生产"
      ],
      openGraph: {
        locale: "zh_CN",
        type: "website",
      },
    },
    ar: {
      title: "المصنع والجودة | مصنع فحم جوز الهند الفاخر",
      description: "تعرف على عملية الإنتاج ومعايير الجودة لدينا. نجمع بين تقنية الإنتاج المتقدمة ومراقبة الجودة الصارمة لتقديم فحم جوز الهند المضغوط الفاخر الموثوق به من قبل المشترين العالميين. 7 مراحل إنتاج دقيقة من اختيار قشر جوز الهند إلى التغليف النهائي.",
      keywords: [
        "مصنع فحم جوز الهند",
        "جودة الفحم الفاخر",
        "عملية إنتاج الفحم",
        "معايير جودة الفحم",
        "مصنع الفحم المضغوط",
        "مراقبة جودة الفحم",
        "تقنية إنتاج الفحم",
        "شهادة الفحم",
        "عملية الكربنة",
        "إنتاج الفحم الإندونيسي"
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
      canonical: `/${locale}/factory-quality`,
      languages: {
        id: `${baseUrl}/id/factory-quality`,
        en: `${baseUrl}/en/factory-quality`,
        zh: `${baseUrl}/zh/factory-quality`,
        ar: `${baseUrl}/ar/factory-quality`,
      },
    },
    openGraph: {
      ...currentMetadata.openGraph,
      title: currentMetadata.title as string,
      description: currentMetadata.description || undefined,
      url: `/${locale}/factory-quality`,
      siteName: "Premium Coconut Charcoal Export",
      images: [
        {
          url: "/assets/images/bg-hero-factory.png",
          width: 1200,
          height: 630,
          alt: locale === 'id' 
            ? "Pabrik & Kualitas - Produsen Briket Arang Kelapa Premium"
            : locale === 'zh'
            ? "工厂与质量 - 优质椰壳炭制造商"
            : locale === 'ar'
            ? "المصنع والجودة - مصنع فحم جوز الهند الفاخر"
            : "Factory & Quality - Premium Coconut Charcoal Manufacturer",
        },
      ],
      type: "website" as const,
    },
    twitter: {
      card: "summary_large_image",
      title: currentMetadata.title as string,
      description: currentMetadata.description || undefined,
      images: ["/assets/images/bg-hero-factory.png"],
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

export default async function FactorQualityPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ManufacturingPlant",
    "name": "Premium Coconut Charcoal Factory",
    "description": "Leading manufacturer of premium coconut charcoal briquettes with advanced production technology and strict quality control",
    "url": `${baseUrl}/${locale}/factory-quality`,
    "image": `${baseUrl}/assets/images/bg-hero-factory.png`,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ID",
      "addressLocality": "Indonesia"
    },
    "productionProcess": {
      "@type": "ItemList",
      "numberOfItems": 7,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Coconut Shell Selection"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Carbonization"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Crushing"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Mixing"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Pressing"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Drying"
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Packing"
        }
      ]
    }
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <main>
        <FactoryHero />
        <ProductionProcess />
        <BannerQuality />
        <Certificates />
      </main>
    </>
  );
}

