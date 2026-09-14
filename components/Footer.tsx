import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const bookingUrl = "https://cal.com/miharbi-damha-omxkej/15min";

  const footerGroups = [
    {
      title: "Services",
      links: [
        { label: "Growth & Automation", href: "/services#growth-automation" },
        { label: "Marketing & Creative", href: "/services#marketing-creative" },
        { label: "Trading Technologies", href: "/services#trading-technologies" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "How We Work", href: "/#how-we-work" },
        { label: "Client Proof", href: "/#proof" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "Book a Strategy Call", href: bookingUrl, external: true },
        { label: "Contact Us", href: "/contact" },
        { label: "Direct Inquiries", href: "mailto:contact@devsolutions.agency", external: true },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Trading Disclaimer", href: "/trading-disclaimer" },
      ],
    },
  ];

  return (
    <footer className="w-full bg-white border-t border-[#e3e8ee] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 lg:gap-12 pb-12 border-b border-[#e3e8ee]">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="relative h-8 w-8 rounded-lg overflow-hidden flex items-center justify-center">
                <Image
                  src="/DevSolution.png"
                  alt="DevSolutions Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="font-light tracking-[-0.3px] text-xl text-[#0d253d]">
                Dev<span className="font-normal text-[#533afd]">Solutions</span>
              </span>
            </Link>
            <p className="text-[14px] font-light leading-relaxed text-[#64748d] max-w-sm">
              We build the backend automations, applied AI agents, and creative growth systems that scale businesses without expanding engineering overhead.
            </p>
            <div className="pt-2">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[13px] font-medium text-[#533afd] hover:text-[#4434d4] transition-colors"
              >
                Schedule an introductory call &rarr;
              </a>
            </div>
          </div>

          {/* Nav Columns: Services, Company, Contact, Legal */}
          <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {footerGroups.map((group) => (
              <div key={group.title} className="space-y-3">
                <h4 className="text-[12px] font-medium uppercase tracking-wider text-[#0d253d]">
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
                          className="text-[13px] font-light text-[#64748d] hover:text-[#0d253d] transition-colors"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-[13px] font-light text-[#64748d] hover:text-[#0d253d] transition-colors"
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

        {/* Compliance & Legal Disclaimer Row */}
        <div className="pt-8 pb-4 text-[12px] leading-relaxed text-[#64748d] space-y-2">
          <p>
            <strong className="font-medium text-[#273951]">Trading Technologies Disclaimer:</strong> Trading bot content and strategy automations are engineered strictly for technical execution and operational efficiency. DevSolutions is not a registered financial advisor or broker-dealer. Nothing on this website constitutes financial or investment advice, and past automated strategy performance does not guarantee future financial results.
          </p>
        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-[13px] text-[#64748d] gap-4">
          <p>© {currentYear} DevSolutions Agency. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5 text-xs text-[#64748d]">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
