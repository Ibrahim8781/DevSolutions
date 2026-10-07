import { ArrowRight, Check } from "lucide-react";
import { BOOKING_URL, PROMISES, STATS } from "@/data/site";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[calc(100svh-64px)] flex-col">
      <div className="flex flex-1 items-center">
        <div className="max-w-7xl 2xl:max-w-352 mx-auto w-full px-5 sm:px-8 2xl:px-10 py-20 sm:py-28 text-center">
          <span className="inline-flex items-center rounded-full border border-hairline bg-surface px-3.5 py-1.5 backdrop-blur-sm">
            <span className="eyebrow">Websites · Trading bots · Automation</span>
          </span>

          <h1 className="text-display mx-auto mt-8 max-w-4xl text-balance">
            We build the systems that help your business grow while you sleep.
          </h1>

          <p className="text-lead mx-auto mt-6 max-w-2xl text-balance">
            Websites that bring in customers, trading bots that follow your rules 24/7, and automation that takes
            the repetitive work off your team&apos;s plate.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto">
              Book a free 15-min call
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#services" className="btn-secondary w-full sm:w-auto">
              Explore services
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[14px] text-ink-mute">
            {PROMISES.map((p) => (
              <li key={p.title} className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                {p.title}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-hairline bg-canvas/40 backdrop-blur-sm">
        <dl className="max-w-7xl 2xl:max-w-352 mx-auto px-5 sm:px-8 2xl:px-10 grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`py-7 sm:py-8 border-hairline ${i % 2 === 1 ? "border-l pl-5 sm:pl-8" : ""} ${
                i >= 2 ? "border-t lg:border-t-0" : ""
              } ${i === 2 ? "lg:border-l lg:pl-8" : ""}`}
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-[clamp(1.75rem,3vw,2.25rem)] font-semibold tracking-[-0.03em] text-ink">
                {stat.value}
              </dd>
              <dd className="mt-1 text-[14px] text-ink-mute">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
