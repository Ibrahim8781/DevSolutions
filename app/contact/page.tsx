import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactSection from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact | DevSolutions",
  description:
    "Book a 15-minute diagnostic call directly on our calendar or send us a message about your backend automation and AI agent requirements.",
  openGraph: {
    title: "Contact | DevSolutions",
    description:
      "Book a 15-minute diagnostic call directly on our calendar or send us a message about your backend automation and AI agent requirements.",
    url: "https://devsolutions.agency/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="flex-1 flex flex-col w-full">
      {/* 1. Contact Hero (canvas) */}
      <ContactHero />

      {/* 2. Two-Column Contact Section (canvas-raised) */}
      <ContactSection />
    </main>
  );
}
