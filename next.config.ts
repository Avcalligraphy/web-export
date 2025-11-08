import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig: NextConfig = {
  // Comment out output: "export" for development
  // Uncomment for production static export build
  // output: "export",
  images: {
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
