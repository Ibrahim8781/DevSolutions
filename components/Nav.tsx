"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { BOOKING_URL, BRAND, NAV_LINKS } from "@/data/site";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-200 ${
        solid ? "border-hairline bg-canvas/80 backdrop-blur-md" : "border-transparent"
      }`}
    >
      <div className="max-w-7xl 2xl:max-w-352 mx-auto px-5 sm:px-8 2xl:px-10 h-16 flex items-center justify-between">
        <Link href="/#top" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image src="/nyxel-mark.png" alt="" width={28} height={28} priority />
          <span className="text-[15px] font-medium tracking-[0.32em] text-ink">{BRAND.name.toUpperCase()}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={`/${link.href}`}
              className="rounded-full px-3.5 py-2 text-[14px] text-ink-secondary hover:text-ink transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary btn-sm hidden md:inline-flex"
        >
          Book a call
        </a>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden -mr-2 p-2 text-ink"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-hairline px-5 pb-6">
          <nav className="flex flex-col" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={`/${link.href}`}
                onClick={() => setOpen(false)}
                className="py-4 border-b border-hairline text-[17px] text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn-primary w-full mt-6"
          >
            Book a free 15-min call
          </a>
        </div>
      )}
    </header>
  );
}
