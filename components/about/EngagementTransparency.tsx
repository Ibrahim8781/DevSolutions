import { MessageSquare, CalendarCheck, KeyRound, RefreshCw } from "lucide-react";

export default function EngagementTransparency() {
  const points = [
    {
      icon: MessageSquare,
      title: "Direct communication channel",
      /* PLACEHOLDER COPY — replace before launch */
      description: "Direct communication channel for the length of the engagement — you talk with the builder, with no ticket queue for a small build.",
    },
    {
      icon: CalendarCheck,
      title: "Agreed milestones",
      /* PLACEHOLDER COPY — replace before launch */
      description: "Clear milestones agreed before work starts so scope, timelines, and deliverables are unambiguous.",
    },
    {
      icon: KeyRound,
      title: "Complete ownership",
      /* PLACEHOLDER COPY — replace before launch */
      description: "You own what's built — source code, tool configurations, and system credentials are fully handed over, never locked to us.",
    },
    {
      icon: RefreshCw,
      title: "Active build check-ins",
      /* PLACEHOLDER COPY — replace before launch */
      description: "Regular check-ins on active builds to test functionality iteratively, not just a single surprise final handoff.",
    },
  ];

  return (
    <section className="w-full bg-canvas-raised py-20 sm:py-28 border-b border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16 space-y-4">
          <div>
            <span className="tag-category">
              Collaboration
            </span>
          </div>
          <h2 className="display-lg text-ink">
            Engagement &amp; transparency.
          </h2>
          <p className="body-lg text-ink-secondary">
            How working with DevSolutions actually looks day to day. We prioritize transparency, direct access, and clean operational handoffs.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((pt) => {
            const Icon = pt.icon;
            return (
              <div
                key={pt.title}
                className="card-feature bg-canvas border border-hairline p-8 rounded-lg space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-md bg-canvas-raised border border-hairline flex items-center justify-center text-primary">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="heading-sm text-ink leading-snug">
                    {pt.title}
                  </h3>
                  {/* PLACEHOLDER COPY — replace before launch */}
                  <p className="body-sm text-ink-secondary leading-relaxed">
                    {pt.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
