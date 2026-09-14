import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import FoundingStory from "@/components/about/FoundingStory";
import WhyUsComparison from "@/components/about/WhyUsComparison";
import OperatingValues from "@/components/about/OperatingValues";
import LeadershipTeam from "@/components/about/LeadershipTeam";
import ScopingPhilosophy from "@/components/about/ScopingPhilosophy";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "About Us | DevSolutions",
  description:
    "Learn why DevSolutions unites backend automation, applied AI, creative growth, and quantitative systems under one disciplined roof.",
  openGraph: {
    title: "About Us | DevSolutions",
    description:
      "Learn why DevSolutions unites backend automation, applied AI, creative growth, and quantitative systems under one disciplined roof.",
    url: "https://devsolutions.agency/about",
  },
};

export default function AboutPage() {
  return (
    <main className="flex-1 flex flex-col w-full">
      <AboutHero />
      <FoundingStory />
      <WhyUsComparison />
      <OperatingValues />
      <LeadershipTeam />
      <ScopingPhilosophy />
      <FinalCTA />
    </main>
  );
}
