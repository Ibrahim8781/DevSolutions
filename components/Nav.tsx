"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { BOOKING_URL, BRAND, NAV_LINKS } from "@/data/site";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-hairline bg-canvas/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between">
        <Link href="/#top" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image src="/nyxel-mark.png" alt="" width={34} height={34} priority />
          <span className="font-display text-[19px] font-semibold tracking-[0.22em] text-ink">
            {BRAND.name.toUpperCase()}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={`/${link.href}`}
              className="text-[15px] text-ink-secondary hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-action hidden md:inline-flex !py-2.5 !px-4 text-[15px]"
        >
          Book a free call
          <ArrowUpRight className="w-4 h-4" />
        </a>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-md text-ink border border-hairline-strong"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-hairline bg-canvas px-4 pb-6">
          <nav className="flex flex-col" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={`/${link.href}`}
                onClick={() => setOpen(false)}
                className="heading-sm py-3.5 border-b border-hairline text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn-action w-full mt-6"
          >
            Book a free 15-min call
          </a>
        </div>
      )}
    </header>
  );
}
