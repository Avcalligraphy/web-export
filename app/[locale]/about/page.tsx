import { AboutHero, OurAchievement, OurStory, PlaceOnOrder, ProfileCompany } from '@/components/sections';
import { locales, type Locale } from '@/i18n';
import type { Metadata } from "next";

// Generate static params for all locales (required for static export)
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  const metadataMap: Record<string, Metadata> = {
    id: {
      title: "Tentang Kami | Produsen & Eksportir Briket Arang Kelapa Premium",
      description: "Pelajari lebih lanjut tentang perusahaan kami, pencapaian, dan proses pemesanan. Kami adalah produsen dan eksportir terkemuka briket arang kelapa premium dengan 3+ tahun pengalaman, dipercaya oleh ratusan klien di 20+ negara tujuan ekspor.",
      keywords: [
        "tentang kami",
        "perusahaan arang kelapa",
        "produsen arang premium",
        "eksportir arang Indonesia",
        "sejarah perusahaan",
        "pencapaian perusahaan",
        "cara memesan arang",
        "proses pemesanan arang",
        "perdagangan global arang",
        "eksportir terpercaya"
      ],
      openGraph: {
        locale: "id_ID",
        type: "website",
      },
    },
    en: {
      title: "About Us | Premium Coconut Charcoal Manufacturer & Exporter",
      description: "Learn more about our company, achievements, and ordering process. We are a leading manufacturer and exporter of premium coconut charcoal briquettes with 3+ years of experience, trusted by hundreds of clients in 20+ export destinations.",
      keywords: [
        "about us",
        "coconut charcoal company",
        "premium charcoal manufacturer",
        "Indonesia charcoal exporter",
        "company history",
        "company achievements",
        "how to order charcoal",
        "charcoal ordering process",
        "global charcoal trade",
        "trusted exporter"
      ],
      openGraph: {
        locale: "en_US",
        type: "website",
      },
    },
    zh: {
      title: "关于我们 | 优质椰壳炭制造商和出口商",
      description: "了解更多关于我们公司、成就和订购流程的信息。我们是优质椰壳炭砖的领先制造商和出口商，拥有3年以上的经验，受到20多个出口目的地数百名客户的信赖。",
      keywords: [
        "关于我们",
        "椰壳炭公司",
        "优质炭制造商",
        "印尼炭出口商",
        "公司历史",
        "公司成就",
        "如何订购炭",
        "炭订购流程",
        "全球炭贸易",
        "值得信赖的出口商"
      ],
      openGraph: {
        locale: "zh_CN",
        type: "website",
      },
    },
    ar: {
      title: "من نحن | مصنع ومصدر فحم جوز الهند الفاخر",
      description: "تعرف على المزيد حول شركتنا وإنجازاتنا وعملية الطلب. نحن شركة رائدة في تصنيع وتصدير فحم جوز الهند الفاخر مع أكثر من 3 سنوات من الخبرة، موثوق به من قبل مئات العملاء في أكثر من 20 وجهة تصدير.",
      keywords: [
        "من نحن",
        "شركة فحم جوز الهند",
        "مصنع الفحم الفاخر",
        "مصدر الفحم الإندونيسي",
        "تاريخ الشركة",
        "إنجازات الشركة",
        "كيفية طلب الفحم",
        "عملية طلب الفحم",
        "تجارة الفحم العالمية",
        "مصدر موثوق"
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
      canonical: `/${locale}/about`,
      languages: {
        id: `${baseUrl}/id/about`,
        en: `${baseUrl}/en/about`,
        zh: `${baseUrl}/zh/about`,
        ar: `${baseUrl}/ar/about`,
      },
    },
    openGraph: {
      ...currentMetadata.openGraph,
      title: currentMetadata.title as string,
      description: currentMetadata.description || undefined,
      url: `/${locale}/about`,
      siteName: "Premium Coconut Charcoal Export",
      images: [
        {
          url: "/assets/images/bg-hero-about.png",
          width: 1200,
          height: 630,
          alt: locale === 'id' 
            ? "Tentang Kami - Produsen & Eksportir Briket Arang Kelapa Premium"
            : locale === 'zh'
            ? "关于我们 - 优质椰壳炭制造商和出口商"
            : locale === 'ar'
            ? "من نحن - مصنع ومصدر فحم جوز الهند الفاخر"
            : "About Us - Premium Coconut Charcoal Manufacturer & Exporter",
        },
      ],
      type: "website" as const,
    },
    twitter: {
      card: "summary_large_image",
      title: currentMetadata.title as string,
      description: currentMetadata.description || undefined,
      images: ["/assets/images/bg-hero-about.png"],
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

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Premium Coconut Charcoal Export",
    "description": "Leading manufacturer and exporter of premium coconut charcoal briquettes",
    "url": `${baseUrl}/${locale}/about`,
    "logo": `${baseUrl}/assets/images/bg-hero.png`,
    "sameAs": [
      "https://www.facebook.com",
      "https://www.linkedin.com",
      "https://www.instagram.com"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "info@company.com",
      "telephone": "+62-123-456-7890"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ID",
      "addressLocality": "Indonesia"
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
        <AboutHero />
        <OurStory />
        <OurAchievement />
        <PlaceOnOrder />
        <ProfileCompany />
      </main>
    </>
  );
}

