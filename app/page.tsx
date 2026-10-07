import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import About from "@/components/sections/About";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex-1 w-full">
      <Hero />
      <Services />
      <Process />
      <About />
      <Faq />
      <Contact />
    </main>
  );
}
