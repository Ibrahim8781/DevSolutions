import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StarfieldBackground from "@/components/StarfieldBackground";
import { BRAND, SITE_URL } from "@/data/site";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#060910",
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
    <html lang="en" className={`${geist.variable} ${geistMono.variable} h-full`}>
      <body className="min-h-full flex flex-col text-ink font-sans antialiased selection:bg-accent selection:text-canvas">
        <StarfieldBackground />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
