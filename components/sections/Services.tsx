import Link from "next/link";
import { ArrowUpRight, ShieldAlert } from "lucide-react";
import Reveal from "@/components/Reveal";
import ServiceVisual from "@/components/sections/ServiceVisuals";
import { BOOKING_URL, SERVICES, TRADING_DISCLAIMER_SHORT } from "@/data/site";

export default function Services() {
  return (
    <section id="services" className="border-b border-hairline py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <p className="label-mono text-accent">What we build</p>
          <h2 className="display-section mt-5 text-ink text-balance">Three things, done properly.</h2>
          <p className="body-lg mt-6 text-ink-secondary">
            We keep our focus narrow on purpose. Pick the one you need, or combine them. Many clients start with a
            website and add automation later.
          </p>
        </Reveal>

        <div className="mt-16 sm:mt-24 space-y-24 sm:space-y-32">
          {SERVICES.map((service, i) => (
            <article
              key={service.id}
              id={service.id}
              className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
            >
              <Reveal className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="flex items-baseline gap-4">
                  <span className="label-mono text-ink-mute">0{i + 1}</span>
                  <h3 className="label-mono text-accent">{service.label}</h3>
                </div>
                <p className="heading-lg mt-5 text-ink text-balance">{service.title}</p>
                <p className="mt-5 text-[17px] leading-relaxed text-ink-secondary">{service.pitch}</p>

                <ul className="mt-8 border-t border-hairline">
                  {service.includes.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 border-b border-hairline py-3 text-[15px] text-ink-secondary"
                    >
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-[15px] text-ink-secondary">
                  <span className="font-semibold text-ink">Good for: </span>
                  {service.goodFor}
                </p>

                {service.id === "trading" && (
                  <div className="mt-6 flex gap-3 rounded-lg border border-hairline-strong bg-canvas-raised p-4 text-[13px] leading-relaxed text-ink-mute">
                    <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5 text-action" aria-hidden="true" />
                    <p>
                      {TRADING_DISCLAIMER_SHORT}{" "}
                      <Link href="/legal/trading-disclaimer" className="text-ink-secondary underline underline-offset-2 hover:text-ink">
                        Full disclaimer
                      </Link>
                    </p>
                  </div>
                )}

                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost !py-3 !px-5 text-[15px]">
                    Talk about {service.label.toLowerCase()}
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <span className="font-mono text-[11px] text-ink-mute">{service.keywords}</span>
                </div>
              </Reveal>

              <Reveal className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <ServiceVisual id={service.id} />
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
