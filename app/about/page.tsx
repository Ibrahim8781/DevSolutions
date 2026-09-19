import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import WhyDevSolutions from "@/components/about/WhyDevSolutions";
import OperatingCode from "@/components/about/OperatingCode";
import EngagementTransparency from "@/components/about/EngagementTransparency";
import LeadershipEngineering from "@/components/about/LeadershipEngineering";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "About | DevSolutions",
  description:
    "DevSolutions is an early-stage applied AI and automation studio. You work directly with the people building your systems, not a layer of account management.",
  openGraph: {
    title: "About | DevSolutions",
    description:
      "DevSolutions is an early-stage applied AI and automation studio. You work directly with the people building your systems, not a layer of account management.",
    url: "https://devsolutions.agency/about",
  },
};

export default function AboutPage() {
  return (
    <main className="flex-1 flex flex-col w-full">
      {/* 1. About Hero (canvas) */}
      <AboutHero />

      {/* 2. Why DevSolutions (canvas-raised) */}
      <WhyDevSolutions />

      {/* 3. Operating Code (canvas) */}
      <OperatingCode />

      {/* 4. Engagement & Transparency (canvas-raised) */}
      <EngagementTransparency />

      {/* 5. Leadership & Engineering (canvas) */}
      <LeadershipEngineering />

      {/* 6. Closing CTA Band (primary full-bleed) */}
      <FinalCTA />
    </main>
  );
}
