import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import PillarGrowthAutomation from "@/components/services/PillarGrowthAutomation";
import PillarMarketingCreative from "@/components/services/PillarMarketingCreative";
import PillarTradingTech from "@/components/services/PillarTradingTech";
import ServicesFAQ from "@/components/services/ServicesFAQ";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Services Hub | DevSolutions",
  description:
    "Explore our three service pillars: Growth & Automation, Marketing & Creative, and Trading Technologies. High-impact systems built to eliminate manual operational friction.",
  openGraph: {
    title: "Services Hub | DevSolutions",
    description:
      "Explore our three service pillars: Growth & Automation, Marketing & Creative, and Trading Technologies. High-impact systems built to eliminate manual operational friction.",
    url: "https://devsolutions.agency/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="flex-1 flex flex-col w-full">
      <ServicesHero />
      <PillarGrowthAutomation />
      <PillarMarketingCreative />
      <PillarTradingTech />
      <ServicesFAQ />
      <FinalCTA />
    </main>
  );
}
