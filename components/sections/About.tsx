import { Mail } from "lucide-react";
import Reveal from "@/components/Reveal";
import { FOUNDERS, PROMISES } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="border-b border-hairline py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16">
        <Reveal className="lg:col-span-6">
          <p className="label-mono text-accent">About Nyxel</p>
          <h2 className="display-section mt-5 text-ink text-balance">A small team you can actually reach.</h2>
          <div className="mt-7 space-y-5 text-[17px] leading-relaxed text-ink-secondary">
            <p>
              Nyxel started with a simple frustration: good businesses losing time and money to slow websites, manual
              admin and trading done by hand at 3am.
            </p>
            <p>
              Instead of being another agency that does everything, we focus on three things we&apos;re good at and
              build them properly. When you work with us, you talk directly to the people writing the code, with no
              middlemen and no hand-offs.
            </p>
          </div>

          <dl className="mt-10 border-t border-hairline">
            {PROMISES.map((p) => (
              <div key={p.title} className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-6 border-b border-hairline py-4">
                <dt className="font-semibold text-ink">{p.title}</dt>
                <dd className="sm:col-span-2 text-[15px] text-ink-secondary">{p.body}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal className="lg:col-span-5 lg:col-start-8">
          <p className="label-mono text-ink-mute">Who you&apos;ll work with</p>
          <div className="mt-6 space-y-4">
            {FOUNDERS.map((person) => (
              <div key={person.email} className="rounded-xl border border-hairline bg-canvas-raised p-6">
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent-soft font-display text-lg font-semibold text-accent">
                    {person.initials}
                  </span>
                  <p className="heading-sm text-ink">{person.name}</p>
                </div>
                <a
                  href={`mailto:${person.email}`}
                  className="mt-5 flex items-center gap-2.5 border-t border-hairline pt-4 text-[15px] text-ink-secondary hover:text-accent transition-colors break-all"
                >
                  <Mail className="w-4 h-4 shrink-0 text-accent" />
                  {person.email}
                </a>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
