import Image from "next/image";
import Link from "next/link";
import { BOOKING_URL, BRAND, FOUNDERS, NAV_LINKS } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-hairline bg-canvas-sunken">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Link href="/#top" className="inline-flex items-center gap-2.5">
              <Image src="/nyxel-mark.png" alt="" width={34} height={34} />
              <span className="font-display text-[19px] font-semibold tracking-[0.22em] text-ink">
                {BRAND.name.toUpperCase()}
              </span>
            </Link>
            <p className="label-mono mt-3 text-[10px] text-ink-mute">{BRAND.tagline}</p>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-ink-mute">{BRAND.description}</p>
          </div>

          <nav className="md:col-span-3" aria-label="Footer">
            <p className="label-mono text-[11px] text-ink-secondary">Explore</p>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={`/${link.href}`} className="text-[15px] text-ink-mute hover:text-ink transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <p className="label-mono text-[11px] text-ink-secondary">Get in touch</p>
            <ul className="mt-5 space-y-3 text-[15px]">
              <li>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-action hover:text-action-hover transition-colors">
                  Book a free 15-min call →
                </a>
              </li>
              {FOUNDERS.map((person) => (
                <li key={person.email}>
                  <a href={`mailto:${person.email}`} className="text-ink-mute hover:text-ink transition-colors break-all">
                    {person.email}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-hairline pt-8 text-[13px] text-ink-mute">
          <p>&copy; {year} {BRAND.name}. All rights reserved.</p>
          <Link href="/legal/trading-disclaimer" className="hover:text-ink transition-colors">
            Trading Disclaimer
          </Link>
        </div>
      </div>
    </footer>
  );
}
