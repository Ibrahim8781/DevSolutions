import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B0B0E",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://devsolutions.agency"),
  title: "DevSolutions | Backend Automation & Applied AI Studio",
  description:
    "We build custom automations, integrations, and autonomous AI agents for businesses without in-house engineering teams.",
  icons: {
    icon: "/DevSolution.png",
    apple: "/DevSolution.png",
  },
  openGraph: {
    title: "DevSolutions | Backend Automation & Applied AI Studio",
    description:
      "We build custom automations, integrations, and autonomous AI agents for businesses without in-house engineering teams.",
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

const themeScript = `
  (function() {
    try {
      var stored = localStorage.getItem('theme');
      if (stored === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
      } else if (stored === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
      } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        document.documentElement.setAttribute('data-theme', 'light');
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
      }
    } catch (e) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} h-full`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-canvas text-ink font-body selection:bg-primary selection:text-on-primary antialiased">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
