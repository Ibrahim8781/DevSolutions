import SectionHeader from "@/components/sections/SectionHeader";
import { PROCESS } from "@/data/site";

export default function Process() {
  return (
    <section id="process" className="py-24 sm:py-32">
      <div className="max-w-7xl 2xl:max-w-352 mx-auto px-5 sm:px-8 2xl:px-10">
        <SectionHeader
          eyebrow="How it works"
          title="From first call to launch in four steps."
          lead="No long contracts or vague timelines. You always know what happens next and what it costs."
        />

        <ol className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PROCESS.map((step, i) => (
            <li key={step.title} className="panel p-6 sm:p-7">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-hairline-strong font-mono text-[13px] text-accent">
                {i + 1}
              </span>
              <h3 className="text-h4 mt-6">{step.title}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-ink-secondary">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
