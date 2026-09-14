import { Mail, ShieldCheck, Globe, CheckCircle2 } from "lucide-react";

export default function DirectChannels() {
  return (
    <section className="w-full py-16 sm:py-24 bg-[#f6f9fc] border-b border-[#e3e8ee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="text-xs font-mono font-medium uppercase tracking-wider text-[#533afd]">
            Direct Channels & Protocols
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-[#0d253d] tracking-[-0.8px]">
            Direct technical communication
          </h2>
          <p className="text-base font-light text-[#64748d] leading-relaxed">
            We operate transparently with clear response guarantees and enterprise-grade confidentiality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Direct Email */}
          <div className="rounded-2xl bg-white border border-[#e3e8ee] p-7 space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-[#533afd]/10 text-[#533afd] flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-light text-[#0d253d]">Direct Email</h3>
            <p className="text-sm font-light text-[#64748d] leading-relaxed">
              Send raw documentation, RFP briefs, or system diagrams directly to our engineering desk.
            </p>
            <div className="pt-2">
              <a
                href="mailto:contact@devsolutions.agency"
                className="text-sm font-medium text-[#533afd] hover:underline"
              >
                contact@devsolutions.agency &rarr;
              </a>
            </div>
            <div className="pt-2 text-xs font-mono text-[#64748d]">
              SLA: &lt; 24h response on business days
            </div>
          </div>

          {/* Card 2: Confidentiality & NDA */}
          <div className="rounded-2xl bg-white border border-[#e3e8ee] p-7 space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-[#ea2261]/10 text-[#ea2261] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-light text-[#0d253d]">Confidentiality & NDA</h3>
            <p className="text-sm font-light text-[#64748d] leading-relaxed">
              We sign bilateral NDAs before reviewing internal trading logic, customer databases, or proprietary SOPs.
            </p>
            <div className="pt-2 text-sm font-medium text-[#273951] flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Standard mutual NDA ready</span>
            </div>
            <div className="pt-2 text-xs font-mono text-[#64748d]">
              Execution within 2 business hours
            </div>
          </div>

          {/* Card 3: Global Coverage */}
          <div className="rounded-2xl bg-white border border-[#e3e8ee] p-7 space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-[#9b6829]/10 text-[#9b6829] flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-light text-[#0d253d]">Global Operations</h3>
            <p className="text-sm font-light text-[#64748d] leading-relaxed">
              Asynchronous-first engineering with live calendar overlap across Americas, Europe, and Middle East timezones.
            </p>
            <div className="pt-2 text-sm font-medium text-[#273951] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Active client coverage</span>
            </div>
            <div className="pt-2 text-xs font-mono text-[#64748d]">
              US Eastern • GMT • UAE Standard
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
