import AmbientNetworkCanvas from "@/components/home/AmbientNetworkCanvas";
import HeroSection from "@/components/home/HeroSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import HonestPositioning from "@/components/home/HonestPositioning";
import ProcessSection from "@/components/home/ProcessSection";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <main className="relative flex-1 flex flex-col w-full">
      {/* Ambient Network Layer (Behind homepage sections) */}
      <AmbientNetworkCanvas />

      {/* Reordered Sections: Hero → Services grid → Honest positioning → How we work → CTA band */}
      <HeroSection />
      <ServicesGrid />
      <HonestPositioning />
      <ProcessSection />
      <FinalCTA />
    </main>
  );
}
