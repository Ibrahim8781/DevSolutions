import { Plus } from "lucide-react";
import Reveal from "@/components/Reveal";
import { FAQS } from "@/data/site";

export default function Faq() {
  return (
    <section id="faq" className="border-b border-hairline bg-canvas-sunken py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <Reveal className="lg:col-span-4">
          <p className="label-mono text-accent">FAQ</p>
          <h2 className="display-section mt-5 text-ink">Questions we get asked.</h2>
          <p className="mt-6 text-[17px] text-ink-secondary">
            Don&apos;t see yours? Ask us on a free call. We&apos;ll give you a straight answer.
          </p>
        </Reveal>

        <Reveal className="lg:col-span-8">
          <div className="border-t border-hairline">
            {FAQS.map((item) => (
              <details key={item.q} className="group border-b border-hairline">
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-6 heading-sm text-ink hover:text-accent transition-colors">
                  {item.q}
                  <Plus className="faq-icon w-5 h-5 shrink-0 text-ink-mute transition-transform duration-200" aria-hidden="true" />
                </summary>
                <p className="-mt-1 pb-6 pr-10 text-[16px] leading-relaxed text-ink-secondary">{item.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
