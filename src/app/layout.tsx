import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/data/tours";

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  variable: "--font-noto-sans-tc",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.heroTitleZh} | ${siteConfig.siteName}`,
  description: siteConfig.heroDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" className={notoSansTC.variable}>
      <body className="min-h-screen font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
