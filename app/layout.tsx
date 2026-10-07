import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { BRAND, SITE_URL } from "@/data/site";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A0D12",
  width: "device-width",
  initialScale: 1,
};

const title = `${BRAND.name} | Websites, Trading Bots & Business Automation`;

// Favicon, apple icon and social image come from app/icon.png,
// app/apple-icon.png and app/opengraph-image.png (Next.js file conventions).
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description: BRAND.description,
  openGraph: {
    title,
    description: BRAND.description,
    url: SITE_URL,
    siteName: BRAND.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: BRAND.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${instrument.variable} ${jetbrains.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-canvas text-ink font-body selection:bg-accent selection:text-canvas antialiased">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
