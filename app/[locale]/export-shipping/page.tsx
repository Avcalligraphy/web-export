import { HeroShipping, WorldWideSipping, ShippingMap } from "@/components/sections";
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
      title: "Ekspor & Pengiriman | Layanan Ekspor Briket Arang Kelapa Premium ke Seluruh Dunia",
      description: "Layanan ekspor dan pengiriman briket arang kelapa premium ke seluruh dunia. Kami menangani setiap pengiriman dengan presisi — dari pemuatan pabrik hingga pengiriman global — memastikan keandalan, keamanan, dan ketepatan waktu. Pengiriman dari pelabuhan utama Indonesia (Surabaya, Semarang, Belawan) ke 20+ negara tujuan.",
      keywords: [
        "ekspor arang kelapa",
        "pengiriman arang kelapa",
        "layanan ekspor Indonesia",
        "eksportir arang terpercaya",
        "pengiriman internasional arang",
        "logistik ekspor arang",
        "pengiriman laut arang",
        "ekspor ke seluruh dunia",
        "pelabuhan ekspor Indonesia",
        "dokumentasi ekspor arang",
        "packaging ekspor arang",
        "shipping arang kelapa"
      ],
      openGraph: {
        locale: "id_ID",
        type: "website",
      },
    },
    en: {
      title: "Export & Shipping | Premium Coconut Charcoal Export Services Worldwide",
      description: "Export and shipping services for premium coconut charcoal briquettes worldwide. We handle every shipment with precision — from factory loading to global delivery — ensuring reliability, safety, and timely arrival. Shipping from major Indonesian ports (Surabaya, Semarang, Belawan) to 20+ destination countries.",
      keywords: [
        "coconut charcoal export",
        "charcoal shipping",
        "Indonesia export services",
        "trusted charcoal exporter",
        "international charcoal shipping",
        "charcoal export logistics",
        "sea freight charcoal",
        "worldwide export",
        "Indonesia export ports",
        "charcoal export documentation",
        "charcoal export packaging",
        "coconut charcoal shipping"
      ],
      openGraph: {
        locale: "en_US",
        type: "website",
      },
    },
    zh: {
      title: "出口和运输 | 全球优质椰壳炭出口服务",
      description: "全球优质椰壳炭砖的出口和运输服务。我们精确处理每一批货物 — 从工厂装载到全球交付 — 确保可靠性、安全性和及时到达。从印度尼西亚主要港口（泗水、三宝垄、勿拉湾）运往20多个目的地国家。",
      keywords: [
        "椰壳炭出口",
        "炭运输",
        "印尼出口服务",
        "值得信赖的炭出口商",
        "国际炭运输",
        "炭出口物流",
        "海运炭",
        "全球出口",
        "印尼出口港口",
        "炭出口文件",
        "炭出口包装",
        "椰壳炭运输"
      ],
      openGraph: {
        locale: "zh_CN",
        type: "website",
      },
    },
    ar: {
      title: "التصدير والشحن | خدمات تصدير فحم جوز الهند الفاخر في جميع أنحاء العالم",
      description: "خدمات التصدير والشحن لفحم جوز الهند الفاخر في جميع أنحاء العالم. نتعامل مع كل شحنة بدقة — من تحميل المصنع إلى التسليم العالمي — مما يضمن الموثوقية والسلامة والوصول في الوقت المحدد. الشحن من الموانئ الرئيسية في إندونيسيا (سورابايا، سيمارانغ، بيلاوان) إلى أكثر من 20 دولة وجهة.",
      keywords: [
        "تصدير فحم جوز الهند",
        "شحن الفحم",
        "خدمات التصدير الإندونيسية",
        "مصدر فحم موثوق",
        "الشحن الدولي للفحم",
        "خدمات لوجستية لتصدير الفحم",
        "الشحن البحري للفحم",
        "التصدير العالمي",
        "موانئ التصدير الإندونيسية",
        "وثائق تصدير الفحم",
        "تغليف تصدير الفحم",
        "شحن فحم جوز الهند"
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
      canonical: `/${locale}/export-shipping`,
      languages: {
        id: `${baseUrl}/id/export-shipping`,
        en: `${baseUrl}/en/export-shipping`,
        zh: `${baseUrl}/zh/export-shipping`,
        ar: `${baseUrl}/ar/export-shipping`,
      },
    },
    openGraph: {
      ...currentMetadata.openGraph,
      title: currentMetadata.title as string,
      description: currentMetadata.description || undefined,
      url: `/${locale}/export-shipping`,
      siteName: "Premium Coconut Charcoal Export",
      images: [
        {
          url: "/assets/images/bg-map.png",
          width: 1200,
          height: 630,
          alt: locale === 'id' 
            ? "Ekspor & Pengiriman - Layanan Ekspor Briket Arang Kelapa Premium"
            : locale === 'zh'
            ? "出口和运输 - 优质椰壳炭出口服务"
            : locale === 'ar'
            ? "التصدير والشحن - خدمات تصدير فحم جوز الهند الفاخر"
            : "Export & Shipping - Premium Coconut Charcoal Export Services",
        },
      ],
      type: "website" as const,
    },
    twitter: {
      card: "summary_large_image",
      title: currentMetadata.title as string,
      description: currentMetadata.description || undefined,
      images: ["/assets/images/bg-map.png"],
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

export default function ExportShippingPage() {
  return (
    <main>
      <HeroShipping />
      <ShippingMap />
      <WorldWideSipping />
    </main>
  );
}

