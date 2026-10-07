import Link from "next/link";
import { ArrowRight, Check, ShieldAlert } from "lucide-react";
import SectionHeader from "@/components/sections/SectionHeader";
import ServiceVisual from "@/components/sections/ServiceVisuals";
import { BOOKING_URL, SERVICES, TRADING_DISCLAIMER_SHORT } from "@/data/site";

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="max-w-7xl 2xl:max-w-352 mx-auto px-5 sm:px-8 2xl:px-10">
        <SectionHeader
          align="center"
          eyebrow="Services"
          title="Three things, done properly."
          lead="We keep our focus narrow on purpose. Pick the one you need, or combine them. Many clients start with a website and add automation later."
        />

        <div className="mt-16 sm:mt-20 space-y-6">
          {SERVICES.map((service, i) => (
            <article
              key={service.id}
              id={service.id}
              className="panel scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 p-6 sm:p-10 lg:p-12 items-center"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[13px] text-accent">0{i + 1}</span>
                  <span className="h-px w-6 bg-hairline-strong" />
                  <h3 className="text-[14px] font-medium text-ink-secondary">{service.label}</h3>
                </div>
                <p className="text-h3 mt-5 text-balance">{service.title}</p>
                <p className="mt-4 text-[16px] leading-relaxed text-ink-secondary">{service.pitch}</p>

                <ul className="mt-7 space-y-3">
                  {service.includes.map((item) => (
                    <li key={item} className="flex gap-3 text-[15px] text-ink-secondary">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="mt-7 border-t border-hairline pt-5 text-[14px] text-ink-mute">
                  <span className="text-ink-secondary">Good for: </span>
                  {service.goodFor}
                </p>

                {service.id === "trading" && (
                  <div className="mt-5 flex gap-3 rounded-lg border border-warning/20 bg-warning/4 p-4 text-[13px] leading-relaxed text-ink-mute">
                    <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-warning" aria-hidden="true" />
                    <p>
                      {TRADING_DISCLAIMER_SHORT}{" "}
                      <Link href="/legal/trading-disclaimer" className="text-ink-secondary underline underline-offset-2 hover:text-ink">
                        Full disclaimer
                      </Link>
                    </p>
                  </div>
                )}

                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-7 inline-flex items-center gap-2 text-[15px] font-medium text-ink hover:text-accent transition-colors"
                >
                  Talk to us about {service.label.toLowerCase()}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>

              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <ServiceVisual id={service.id} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
