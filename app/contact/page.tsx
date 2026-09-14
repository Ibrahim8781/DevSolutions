import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactHub from "@/components/contact/ContactHub";
import DirectChannels from "@/components/contact/DirectChannels";
import ContactFAQ from "@/components/contact/ContactFAQ";

export const metadata: Metadata = {
  title: "Contact Us | DevSolutions",
  description:
    "Schedule a 15-minute systems diagnostic call or submit your project scope. Speak directly with our systems architects with a 24-business-hour response guarantee.",
  openGraph: {
    title: "Contact Us | DevSolutions",
    description:
      "Schedule a 15-minute systems diagnostic call or submit your project scope. Speak directly with our systems architects with a 24-business-hour response guarantee.",
    url: "https://devsolutions.agency/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="flex-1 flex flex-col w-full">
      <ContactHero />
      <ContactHub />
      <DirectChannels />
      <ContactFAQ />
    </main>
  );
}
