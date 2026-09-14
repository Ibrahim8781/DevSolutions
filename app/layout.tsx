import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#533afd",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://devsolutions.agency"),
  title: "DevSolutions | Applied AI, Automation & Growth Systems",
  description:
    "We build the custom automations, AI agents, and growth systems that run your business without expanding headcount.",
  icons: {
    icon: "/DevSolution.png",
    apple: "/DevSolution.png",
  },
  openGraph: {
    title: "DevSolutions | Applied AI, Automation & Growth Systems",
    description:
      "We build the custom automations, AI agents, and growth systems that run your business without expanding headcount.",
    url: "https://devsolutions.agency",
    siteName: "DevSolutions",
    images: [
      {
        url: "/DevSolution.png",
        width: 800,
        height: 800,
        alt: "DevSolutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-white text-[#0d253d] selection:bg-[#b9b9f9] selection:text-[#1c1e54]">
        <SmoothScroll />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
