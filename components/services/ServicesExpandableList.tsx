"use client";

import { ShieldAlert, Check } from "lucide-react";
import type { ServiceData } from "@/data/servicesData";

const BOOKING_URL = "https://cal.com/miharbi-damha-omxkej/15min";

// ─────────────────────────────────────────────
// Quiet centered category divider
// ─────────────────────────────────────────────
function CategoryDivider({ label }: { label: string }) {
  return (
    <div className="w-full bg-canvas-sunken/40 border-b border-hairline py-4 relative z-10">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-4"
        aria-label={`${label} services`}
      >
        <div className="flex-1 h-px bg-hairline" />
        <span className="text-[11px] font-mono font-bold text-ink-mute uppercase tracking-[0.2em] select-none">
          {label}
        </span>
        <div className="flex-1 h-px bg-hairline" />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Fully expanded service section (always visible)
// ─────────────────────────────────────────────
function ServiceSection({
  service,
  rowIndex,
}: {
  service: ServiceData;
  rowIndex: number;
}) {
  const Icon = service.icon;
  const altBg = rowIndex % 2 === 0 ? "bg-canvas" : "bg-canvas-raised/30";

  return (
    <section
      id={service.slug}
      className={`w-full py-12 sm:py-16 lg:py-20 border-b border-hairline scroll-mt-32 relative z-10 ${altBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 lg:space-y-10">
        {/* Service Header: Icon, Category tag, Title, Outcome */}
        <div className="flex items-start gap-4 sm:gap-5">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary shrink-0 mt-0.5">
            <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="tag-category !text-[11px] !py-[2px] !px-2.5 font-mono">
                {service.category}
              </span>
            </div>
            <h2 className="heading-md sm:heading-lg font-bold text-ink leading-tight">
              {service.name}
            </h2>
            <p className="body-md sm:body-lg text-ink-secondary mt-2 leading-relaxed max-w-3xl">
              {service.outcome}
            </p>
          </div>
        </div>

        {/* 2-Column Content Layout: 7 cols text/details, 5 cols 16:9 visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Scope, Inclusions, Compliance, CTA */}
          <div className="lg:col-span-7 space-y-6">
            {/* Who this is for */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-ink">
                Who this is for
              </h3>
              <p className="body-sm sm:body-md text-ink-secondary leading-relaxed">
                {service.whoThisIsFor}
              </p>
            </div>

            {/* What's included */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-ink">
                What&apos;s included
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-6">
                {service.whatsIncluded.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-ink-secondary leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Compliance notice — Trading services only */}
            {service.isTrading && (
              <div className="flex items-start gap-3 p-4 rounded-xl bg-canvas-sunken border border-hairline">
                <ShieldAlert className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <p className="text-xs text-ink-secondary leading-relaxed">
                  <strong className="text-ink font-semibold">Compliance notice: </strong>
                  Trading bot content and strategy automations are engineered strictly for
                  technical execution and operational efficiency. DevSolutions is not a
                  registered financial advisor or broker-dealer. Nothing on this website
                  constitutes financial or investment advice, and past automated strategy
                  performance does not guarantee future financial results.
                </p>
              </div>
            )}

            {/* Primary CTA button */}
            <div className="pt-2">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                Book a call
              </a>
            </div>
          </div>

          {/* Right Column: 16:9 Image */}
          <div className="lg:col-span-5">
            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-canvas-raised border border-hairline shadow-sm">
              <img
                src={`/images/services/${service.slug}.png`}
                alt={`${service.name} overview`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Full services list with category dividers
// ─────────────────────────────────────────────
interface Props {
  services: ServiceData[];
}

export default function ServicesExpandableList({ services }: Props) {
  type RenderItem =
    | { kind: "divider"; category: string }
    | { kind: "section"; service: ServiceData; rowIndex: number };

  const items: RenderItem[] = [];
  let prevCategory = "";
  let rowIndex = 0;

  for (const service of services) {
    if (service.category !== prevCategory) {
      items.push({ kind: "divider", category: service.category });
      prevCategory = service.category;
    }
    items.push({ kind: "section", service, rowIndex });
    rowIndex++;
  }

  return (
    <div className="w-full relative z-10" role="feed" aria-label="All services">
      {items.map((item) =>
        item.kind === "divider" ? (
          <CategoryDivider key={`divider-${item.category}`} label={item.category} />
        ) : (
          <ServiceSection
            key={item.service.slug}
            service={item.service}
            rowIndex={item.rowIndex}
          />
        )
      )}
    </div>
  );
}
