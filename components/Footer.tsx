import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const bookingUrl = "https://cal.com/miharbi-damha-omxkej/15min";

  const footerGroups = [
    {
      title: "Services",
      links: [
        { label: "Business Automations", href: "/services#business-automations" },
        { label: "Integrations", href: "/services#integrations" },
        { label: "AI Agents", href: "/services#ai-agents" },
        { label: "ChatBot & Call Agents", href: "/services#chatbot-call-agents" },
        { label: "SEO", href: "/services#seo" },
        { label: "Design & Video Editing", href: "/services#design-video" },
        { label: "Web Design & Lead Gen", href: "/services#web-design-branding" },
        { label: "Trading Bots", href: "/services#trading-bots" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "How We Work", href: "/#how-we-work" },
        { label: "Services Hub", href: "/services" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "Book a Strategy Call", href: bookingUrl, external: true },
        { label: "Send an Email", href: "mailto:contact@devsolutions.agency", external: true },
        { label: "Contact Form", href: "/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/legal/privacy-policy" },
        { label: "Terms of Service", href: "/legal/terms-of-service" },
        { label: "Trading Disclaimer", href: "/legal/trading-disclaimer" },
      ],
    },
  ];

  return (
    <footer className="w-full bg-canvas-sunken border-t border-hairline text-ink-mute mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 pb-14 border-b border-hairline">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4 w-full max-w-[420px]">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative h-8 w-8 rounded-lg overflow-hidden flex items-center justify-center bg-canvas-raised border border-hairline">
                <Image
                  src="/DevSolution.png"
                  alt="DevSolutions Logo"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <span className="font-display text-xl font-bold tracking-tight text-ink">
                DevSolutions<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="body-sm text-ink-mute leading-relaxed max-w-[380px]">
              A technology-enabled growth and automation studio. We combine backend automations, applied AI agents, and creative execution for businesses without in-house engineers.
            </p>
            <div className="pt-2">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-hover transition-colors"
              >
                Schedule an introductory call &rarr;
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {footerGroups.map((group) => (
              <div key={group.title} className="space-y-4">
                <h4 className="caption font-bold text-ink uppercase tracking-wider">
                  {group.title}
                </h4>
                <ul className="space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="body-sm text-ink-mute hover:text-ink transition-colors"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="body-sm text-ink-mute hover:text-ink transition-colors"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Mandatory Trading Technologies Compliance Disclaimer */}
        <div className="py-8 border-b border-hairline caption text-ink-mute space-y-2">
          <p>
            <strong className="font-semibold text-ink-secondary">Trading Technologies Compliance Notice:</strong> Trading bot content and strategy automations are engineered strictly for technical execution and operational efficiency. DevSolutions is not a registered financial advisor or broker-dealer. Nothing on this website constitutes financial or investment advice, and past automated strategy performance does not guarantee future financial results.
          </p>
        </div>

        {/* Copyright & Status */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 caption text-ink-mute">
          <p>&copy; {currentYear} DevSolutions. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-success"></span>
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
