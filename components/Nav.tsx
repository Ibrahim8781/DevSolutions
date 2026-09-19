"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react";

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const activeTheme = document.documentElement.getAttribute("data-theme") as "dark" | "light" | null;
    if (activeTheme) {
      setTheme(activeTheme);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    try {
      localStorage.setItem("theme", nextTheme);
    } catch (e) {
      console.error(e);
    }
  };

  const serviceItems = [
    { label: "Business Automations", href: "/services#business-automations", category: "Automation" },
    { label: "Integrations", href: "/services#integrations", category: "Automation" },
    { label: "AI Agents", href: "/services#ai-agents", category: "Automation" },
    { label: "ChatBot & Call Agents", href: "/services#chatbot-call-agents", category: "Automation" },
    { label: "SEO", href: "/services#seo", category: "Marketing" },
    { label: "Design & Video Editing", href: "/services#design-video", category: "Marketing" },
    { label: "Web Design & Branding", href: "/services#web-design-branding", category: "Marketing" },
    { label: "Trading Bots", href: "/services#trading-bots", category: "Trading" },
  ];

  const bookingUrl = "https://cal.com/miharbi-damha-omxkej/15min";

  return (
    <header className="sticky top-0 z-50 w-full bg-canvas border-b border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-8 w-8 rounded-lg overflow-hidden flex items-center justify-center bg-canvas-raised border border-hairline">
            <Image
              src="/DevSolution.png"
              alt="DevSolutions"
              width={28}
              height={28}
              className="object-contain"
              priority
            />
          </div>
          <span className="font-display text-xl font-bold tracking-tight text-ink">
            DevSolutions<span className="text-primary">.</span>
          </span>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-[15px] font-medium text-ink-secondary hover:text-ink transition-colors duration-150"
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div className="relative group py-2">
            <Link
              href="/services"
              className="text-[15px] font-medium text-ink-secondary hover:text-ink transition-colors duration-150 inline-flex items-center gap-1.5"
            >
              <span>Services</span>
              <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 text-ink-mute group-hover:text-ink" />
            </Link>

            {/* Dropdown Flyout */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-84 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-150 pointer-events-none group-hover:pointer-events-auto z-50">
              <div className="p-2 rounded-xl bg-canvas-raised border border-hairline shadow-2xl space-y-1">
                <div className="px-3 py-2 border-b border-hairline flex items-center justify-between">
                  <span className="caption text-ink font-semibold uppercase tracking-wider text-[11px]">
                    All Services
                  </span>
                  <Link
                    href="/services"
                    className="text-[12px] font-medium text-primary hover:text-primary-hover transition-colors"
                  >
                    View Hub &rarr;
                  </Link>
                </div>
                <div className="py-1">
                  {serviceItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center justify-between px-3 py-2 rounded-lg text-[13px] text-ink-secondary hover:text-ink hover:bg-canvas transition-colors"
                    >
                      <span className="font-medium">{item.label}</span>
                      <span className="text-[10px] font-mono text-ink-mute uppercase tracking-wider">
                        {item.category}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/about"
            className="text-[15px] font-medium text-ink-secondary hover:text-ink transition-colors duration-150"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-[15px] font-medium text-ink-secondary hover:text-ink transition-colors duration-150"
          >
            Contact
          </Link>
        </nav>

        {/* Right: Actions (Theme toggle + Book a call) */}
        <div className="hidden md:flex items-center gap-4">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            className="p-2.5 rounded-[10px] text-ink-secondary hover:text-ink hover:bg-canvas-raised border border-hairline transition-colors"
          >
            {mounted && theme === "light" ? (
              <Moon className="w-4 h-4 text-ink" />
            ) : (
              <Sun className="w-4 h-4 text-ink" />
            )}
          </button>

          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-[15px] !py-2.5 !px-5"
          >
            Book a call
          </a>
        </div>

        {/* Mobile: Controls (Theme toggle + Hamburger) */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            className="p-2 rounded-[6px] text-ink-secondary hover:text-ink hover:bg-canvas-raised border border-hairline transition-colors"
          >
            {mounted && theme === "light" ? (
              <Moon className="w-4 h-4 text-ink" />
            ) : (
              <Sun className="w-4 h-4 text-ink" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-[6px] text-ink hover:bg-canvas-raised border border-hairline transition-colors focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-hairline bg-canvas px-6 py-6 space-y-4 max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col space-y-2">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="heading-sm text-ink hover:text-primary py-2 transition-colors"
            >
              Home
            </Link>

            {/* Mobile Services Accordion */}
            <div className="py-1">
              <div className="flex items-center justify-between py-2">
                <Link
                  href="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="heading-sm text-ink hover:text-primary transition-colors"
                >
                  Services
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="p-1.5 text-ink-mute hover:text-ink rounded-md"
                  aria-label="Toggle services list"
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
              </div>

              {mobileServicesOpen && (
                <div className="pl-3 py-2 space-y-1.5 border-l border-hairline my-1">
                  <Link
                    href="/services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 text-sm font-semibold text-primary"
                  >
                    &rarr; All Services Hub
                  </Link>
                  {serviceItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 text-sm text-ink-secondary hover:text-ink transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="heading-sm text-ink hover:text-primary py-2 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="heading-sm text-ink hover:text-primary py-2 transition-colors"
            >
              Contact
            </Link>
          </nav>
          <div className="pt-4 border-t border-hairline">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary w-full text-center min-h-[48px]"
            >
              Book a call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
