import Reveal from "@/components/Reveal";
import { PROCESS } from "@/data/site";

export default function Process() {
  return (
    <section id="process" className="border-b border-hairline bg-canvas-sunken py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <p className="label-mono text-accent">How it works</p>
          <h2 className="display-section mt-5 text-ink text-balance">From first call to launch in four steps.</h2>
        </Reveal>

        <ol className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8">
          {PROCESS.map((step, i) => (
            <li key={step.title} className="pb-10 lg:pb-0">
              <Reveal className={`border-t-2 pt-6 ${i === 0 ? "border-accent" : "border-hairline-strong"}`}>
                <span className={`label-mono ${i === 0 ? "text-accent" : "text-ink-mute"}`}>Step 0{i + 1}</span>
                <h3 className="heading-sm mt-4 text-ink">{step.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-secondary">{step.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
