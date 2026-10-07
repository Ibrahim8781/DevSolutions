import { Plus } from "lucide-react";
import SectionHeader from "@/components/sections/SectionHeader";
import { FAQS } from "@/data/site";

export default function Faq() {
  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <SectionHeader
          align="center"
          eyebrow="FAQ"
          title="Questions we get asked."
          lead="Don't see yours? Ask us on a free call and we'll give you a straight answer."
        />

        <div className="panel mt-12 px-6 sm:px-8">
          {FAQS.map((item) => (
            <details key={item.q} className="group border-b border-hairline last:border-b-0">
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 text-[16px] font-medium text-ink hover:text-accent transition-colors">
                {item.q}
                <Plus className="faq-icon h-4 w-4 shrink-0 text-ink-mute transition-transform duration-200" aria-hidden="true" />
              </summary>
              <p className="pb-6 pr-8 text-[15px] leading-relaxed text-ink-secondary">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
