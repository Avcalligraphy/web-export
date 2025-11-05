import type { Metadata } from "next";
import { Figtree, Urbanist } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout";

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

export const metadata: Metadata = {
  title: "Company Profile",
  description: "Company Profile Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${figtree.variable} ${urbanist.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
