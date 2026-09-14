import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import PillarsSection from "@/components/home/PillarsSection";
import ProcessSection from "@/components/home/ProcessSection";
import ProofSection from "@/components/home/ProofSection";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col w-full">
      <HeroSection />
      <TrustBar />
      <PillarsSection />
      <ProcessSection />
      <ProofSection />
      <FinalCTA />
    </main>
  );
}
