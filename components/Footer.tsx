import Image from "next/image";
import Link from "next/link";
import { BOOKING_URL, BRAND, FOUNDERS, NAV_LINKS } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-hairline bg-canvas/70 backdrop-blur-sm">
      <div className="max-w-7xl 2xl:max-w-352 mx-auto px-5 sm:px-8 2xl:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Link href="/#top" className="inline-flex items-center gap-2.5">
              <Image src="/nyxel-mark.png" alt="" width={28} height={28} />
              <span className="text-[15px] font-medium tracking-[0.32em] text-ink">{BRAND.name.toUpperCase()}</span>
            </Link>
            <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-ink-mute">{BRAND.description}</p>
          </div>

          <nav className="md:col-span-3" aria-label="Footer">
            <p className="text-[13px] font-medium text-ink-secondary">Explore</p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={`/${link.href}`} className="text-[14px] text-ink-mute hover:text-ink transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <p className="text-[13px] font-medium text-ink-secondary">Get in touch</p>
            <ul className="mt-4 space-y-2.5 text-[14px]">
              <li>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-ink hover:text-accent transition-colors">
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

        <div className="mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-hairline pt-6 text-[13px] text-ink-mute">
          <p>&copy; {year} {BRAND.name}. All rights reserved.</p>
          <Link href="/legal/trading-disclaimer" className="hover:text-ink transition-colors">
            Trading Disclaimer
          </Link>
        </div>
      </div>
    </footer>
  );
}
