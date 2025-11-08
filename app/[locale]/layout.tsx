import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/i18n';
import { Figtree, Urbanist } from "next/font/google";
import "../globals.css";
import { Navbar, Footer } from "@/components/layout";
import type { Metadata } from "next";
// Static imports for messages
import messagesId from '@/messages/id.json';
import messagesEn from '@/messages/en.json';
import messagesZh from '@/messages/zh.json';
import messagesAr from '@/messages/ar.json';

// Generate static params for all locales (required for static export)
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

// Locale-specific metadata
const localeMetadata: Record<string, Metadata> = {
  id: {
    title: {
      default: "Briket Arang Kelapa Premium | Ekspor ke Seluruh Dunia",
      template: "%s | Ekspor Arang Kelapa Premium"
    },
    description: "Produsen dan eksportir terkemuka briket arang kelapa premium untuk hookah dan BBQ. Diekspor ke seluruh dunia dengan sertifikasi SGS, Halal, ISO, MSDS, dan COA. Waktu bakar lama, kandungan abu rendah, 100% alami.",
    keywords: ["briket arang kelapa", "arang hookah", "arang shisha", "arang BBQ", "ekspor arang", "arang tempurung kelapa", "arang premium", "arang bersertifikat SGS", "arang bersertifikat Halal"],
    openGraph: {
      locale: "id_ID",
      type: "website",
    },
  },
  en: {
    title: {
      default: "Premium Coconut Charcoal Briquettes | Export Worldwide",
      template: "%s | Premium Coconut Charcoal Export"
    },
    description: "Leading manufacturer and exporter of premium coconut charcoal briquettes for hookah and BBQ. Exported worldwide with SGS, Halal, ISO, MSDS, and COA certifications. Long burning time, low ash content, 100% natural.",
    keywords: ["coconut charcoal", "charcoal briquettes", "hookah charcoal", "BBQ charcoal", "export charcoal", "coconut shell charcoal", "shisha charcoal", "premium charcoal", "SGS certified charcoal", "Halal certified charcoal"],
    openGraph: {
      locale: "en_US",
      type: "website",
    },
  },
  zh: {
    title: {
      default: "优质椰壳炭砖 | 全球出口",
      template: "%s | 优质椰壳炭出口"
    },
    description: "优质椰壳炭砖的领先制造商和出口商，用于水烟和烧烤。出口到世界各地，具有 SGS、清真、ISO、MSDS 和 COA 认证。燃烧时间长，灰分含量低，100% 天然。",
    keywords: ["椰壳炭", "炭砖", "水烟炭", "烧烤炭", "出口炭", "椰壳炭", "什沙炭", "优质炭", "SGS 认证炭", "清真认证炭"],
    openGraph: {
      locale: "zh_CN",
      type: "website",
    },
  },
  ar: {
    title: {
      default: "فحم جوز الهند الفاخر للشيشة والشواء | التصدير إلى جميع أنحاء العالم",
      template: "%s | تصدير فحم جوز الهند الفاخر"
    },
    description: "شركة رائدة في تصنيع وتصدير فحم جوز الهند الفاخر للشيشة والشواء. يتم التصدير إلى جميع أنحاء العالم مع شهادات SGS و Halal و ISO و MSDS و COA. مدة احتراق طويلة، نسبة رماد منخفضة، 100% طبيعي.",
    keywords: ["فحم جوز الهند", "فحم الشيشة", "فحم الشواء", "فحم صديق للبيئة", "فحم معتمد SGS", "فحم معتمد Halal", "فحم معتمد ISO", "تصدير الفحم", "فحم عالي الجودة"],
    openGraph: {
      locale: "ar_SA",
      type: "website",
    },
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  if (!locales.includes(locale as any)) {
    notFound();
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  const currentMetadata = localeMetadata[locale] || localeMetadata.en;

  // Generate hreflang alternates
  const alternates: Record<string, string> = {};
  locales.forEach((loc) => {
    alternates[loc] = `${baseUrl}/${loc}`;
  });

  return {
    ...currentMetadata,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `/${locale}`,
      languages: alternates,
    },
    openGraph: {
      ...currentMetadata.openGraph,
      url: `/${locale}`,
      siteName: "Premium Coconut Charcoal Export",
      images: [
        {
          url: "/assets/images/bg-hero.png",
          width: 1200,
          height: 630,
          alt: locale === 'id' 
            ? "Briket Arang Kelapa Premium untuk Hookah & BBQ"
            : locale === 'zh'
            ? "优质椰壳炭砖用于水烟和烧烤"
            : locale === 'ar'
            ? "فحم جوز الهند الفاخر للشيشة والشواء"
            : "Premium Coconut Charcoal Briquettes for Hookah & BBQ",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
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

const localeLangMap: Record<string, string> = {
  id: "id",
  en: "en",
  zh: "zh-CN",
  ar: "ar",
};

// RTL languages
const rtlLocales = ['ar'];

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Get messages based on locale
  const messagesMap: Record<string, typeof messagesId> = {
    id: messagesId,
    en: messagesEn,
    zh: messagesZh,
    ar: messagesAr,
  };
  
  const messages = messagesMap[locale] || messagesId;
  const isRTL = rtlLocales.includes(locale);

  return (
    <html lang={localeLangMap[locale] || locale} dir={isRTL ? 'rtl' : 'ltr'}>
      <body
        className={`${figtree.variable} ${urbanist.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

