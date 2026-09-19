import { ArrowRight, CheckCircle } from "lucide-react";

export default function FinalCTA() {
  const bookingUrl = "https://cal.com/miharbi-damha-omxkej/15min";

  return (
    <section className="w-full bg-primary text-on-primary pt-20 pb-28 sm:pt-28 sm:pb-36">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="heading-lg sm:text-4xl font-display font-bold text-on-primary leading-tight">
            Ready to automate the work that slows your team down?
          </h2>
          <p className="body-lg text-on-primary font-normal leading-relaxed">
            Book a 15-minute diagnostic call. We will review your current systems and identify where automations or AI agents can produce immediate operational savings.
          </p>
        </div>

        <div className="pt-4 flex flex-col items-center justify-center gap-6">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-on-accent gap-2 min-h-[48px] shadow-sm hover:opacity-95"
          >
            <span>Book a strategy call</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-on-primary font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-on-primary" /> Direct architecture review
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-on-primary" /> Fixed-scope proposal within 48 hours
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-on-primary" /> No obligation or pushy sales pitch
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
