"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const bookingUrl = "https://cal.com/miharbi-damha-omxkej/15min";

  return (
    <header className="sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 pt-4 pb-2 backdrop-blur-md bg-white/80 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6 rounded-full bg-white/90 border border-[#e3e8ee] shadow-[0_1px_3px_rgba(0,55,112,0.08)]">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-90">
          <div className="relative h-8 w-8 sm:h-9 sm:w-9 rounded-lg overflow-hidden flex items-center justify-center bg-white">
            <Image
              src="/DevSolution.png"
              alt="DevSolutions Logo"
              width={36}
              height={36}
              className="object-contain"
              priority
            />
          </div>
          <span className="font-light tracking-[-0.3px] text-lg sm:text-xl text-[#0d253d] font-sans">
            Dev<span className="font-normal text-[#533afd]">Solutions</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[15px] font-light text-[#273951] hover:text-[#533afd] transition-colors duration-150"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Primary CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-[14px] font-normal text-white bg-[#533afd] hover:bg-[#4434d4] active:bg-[#2e2b8c] px-4 py-2 rounded-full transition-all duration-150 shadow-sm active:scale-[0.98]"
          >
            Book a call
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-[#273951] hover:text-[#0d253d] hover:bg-[#f6f9fc] transition-colors focus:outline-none"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-4 rounded-2xl bg-white border border-[#e3e8ee] shadow-[0_8px_24px_rgba(0,55,112,0.08)] flex flex-col gap-3 animate-in fade-in duration-200">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-light text-[#0d253d] px-3 py-2 rounded-lg hover:bg-[#f6f9fc] transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-[#e3e8ee]">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center text-sm font-medium text-white bg-[#533afd] hover:bg-[#4434d4] active:bg-[#2e2b8c] px-4 py-3 rounded-full transition-colors min-h-[44px]"
            >
              Book a call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
