import { Mail } from "lucide-react";
import SectionHeader from "@/components/sections/SectionHeader";
import { FOUNDERS, PROMISES } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-7xl 2xl:max-w-352 mx-auto px-5 sm:px-8 2xl:px-10 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
        <div>
          <SectionHeader eyebrow="About Nyxel" title="A small team you can actually reach." />
          <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-ink-secondary max-w-xl">
            <p>
              Nyxel started with a simple frustration: good businesses losing time and money to slow websites, manual
              admin and trading done by hand at 3am.
            </p>
            <p>
              Instead of being another agency that does everything, we focus on three things and build them properly.
              You talk directly to the people writing the code, with no middlemen and no hand-offs.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-hairline pt-8">
            {PROMISES.map((p) => (
              <div key={p.title}>
                <dt className="text-h4">{p.title}</dt>
                <dd className="mt-2 text-[14px] leading-relaxed text-ink-mute">{p.body}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="panel p-6 sm:p-8">
          <p className="text-[14px] text-ink-mute">Who you&apos;ll work with</p>
          <ul className="mt-6 divide-y divide-hairline">
            {FOUNDERS.map((person) => (
              <li key={person.email} className="flex flex-col sm:flex-row sm:items-center gap-4 py-5 first:pt-0 last:pb-0">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-hairline-strong bg-surface-strong text-[15px] font-medium text-ink">
                  {person.initials}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-h4">{person.name}</p>
                  <a
                    href={`mailto:${person.email}`}
                    className="mt-0.5 inline-flex items-center gap-2 text-[14px] text-ink-secondary hover:text-accent transition-colors break-all"
                  >
                    <Mail className="h-3.5 w-3.5 shrink-0" />
                    {person.email}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
