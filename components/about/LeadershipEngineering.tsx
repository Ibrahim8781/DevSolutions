import { Terminal, Shield } from "lucide-react";

export default function LeadershipEngineering() {
  return (
    <section className="w-full bg-canvas py-20 sm:py-28 border-b border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16 space-y-4">
          <div>
            <span className="tag-category">
              Team
            </span>
          </div>
          <h2 className="display-lg text-ink">
            Leadership &amp; engineering.
          </h2>
          <p className="body-lg text-ink-secondary">
            DevSolutions is founder-led and engineering-driven. You partner directly with the architects building and deploying your automations.
          </p>
        </div>

        {/* TODO: replace with real founder bio, headshot, and credentials */}
        {/* Placeholder-Ready Founder / Engineering Card */}
        <div className="max-w-2xl">
          <div className="card-feature bg-canvas-raised border border-hairline p-8 sm:p-10 rounded-xl space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              {/* Icon/Avatar Placeholder (Not a stock photo) */}
              <div className="w-16 h-16 rounded-xl bg-canvas border border-hairline flex items-center justify-center text-primary flex-shrink-0">
                <Terminal className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  {/* PLACEHOLDER COPY — replace before launch */}
                  <h3 className="heading-md text-ink">
                    Technical Founder &amp; Lead Architect
                  </h3>
                  <span className="caption px-2.5 py-0.5 rounded-full bg-primary-soft text-primary font-mono text-xs">
                    Engineering
                  </span>
                </div>
                {/* PLACEHOLDER COPY — replace before launch */}
                <p className="caption text-ink-mute">
                  Systems Architecture &bull; Automation Engineering &bull; Applied AI
                </p>
              </div>
            </div>

            {/* PLACEHOLDER COPY — replace before launch */}
            <div className="pt-4 border-t border-hairline space-y-3">
              <p className="body-sm text-ink-secondary leading-relaxed">
                Full technical founder bio, production credentials, and team profile are currently being prepared for public release.
              </p>
              <div className="inline-flex items-center gap-2 caption text-ink-mute">
                <Shield className="w-4 h-4 text-primary" />
                <span>Verified early-stage studio builder &bull; Direct technical engagement</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
