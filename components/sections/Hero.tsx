import Image from "next/image";
import { ArrowUpRight, ArrowDown, Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import { BOOKING_URL, PROMISES, SERVICES } from "@/data/site";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-hairline">
      <div className="dot-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_70%_40%,black,transparent_70%)]" aria-hidden="true" />

      {/* Oversized brand mark, cropped by the section edge */}
      <Image
        src="/nyxel-mark.png"
        alt=""
        width={640}
        height={640}
        priority
        className="pointer-events-none absolute -right-40 top-10 w-[520px] opacity-[0.07] sm:opacity-10 lg:-right-24 lg:top-6 lg:w-[640px] lg:opacity-[0.16]"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <Reveal className="max-w-4xl">
          <p className="label-mono text-accent">Web · Trading bots · Automation</p>

          <h1 className="display-hero mt-6 text-ink text-balance">
            Websites, trading bots and automation for businesses that want to grow{" "}
            <span className="text-accent">without more busywork.</span>
          </h1>

          <p className="body-lg mt-7 max-w-2xl text-ink-secondary">
            Tell us what slows you down. We build the website, the bot or the system that handles it, then hand
            you the keys.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-action">
              Book a free 15-min call
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href="#services" className="btn-ghost">
              See what we build
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-[15px] text-ink-secondary">
            {PROMISES.map((p) => (
              <li key={p.title} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent" aria-hidden="true" />
                {p.title}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Quick jump to each service */}
        <Reveal className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 border-t border-hairline">
          {SERVICES.map((s, i) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="group flex items-baseline gap-4 py-5 sm:pr-6 border-b sm:border-b-0 border-hairline sm:[&:not(:first-child)]:pl-6 sm:[&:not(:first-child)]:border-l"
            >
              <span className="label-mono text-ink-mute">0{i + 1}</span>
              <span className="heading-sm text-ink group-hover:text-accent transition-colors">{s.label}</span>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
