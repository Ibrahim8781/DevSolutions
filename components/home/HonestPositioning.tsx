import { Wrench, Zap, CheckCircle2 } from "lucide-react";

export default function HonestPositioning() {
  const valueProps = [
    {
      icon: Wrench,
      title: "Direct access to the builder",
      description: "You work directly with the engineer designing and building your systems, not an account manager.",
    },
    {
      icon: Zap,
      title: "Fast turnaround",
      description: "Working automations and functional integrations deployed in days, not multi-month consulting roadmaps.",
    },
    {
      icon: CheckCircle2,
      title: "Fixed-scope engagements",
      description: "Clear project milestones and transparent upfront pricing without unexpected retainer commitments.",
    },
  ];

  return (
    <section className="relative z-10 w-full py-16 sm:py-20 border-b border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TODO: replace with real client stats once available */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valueProps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col space-y-3 p-6 rounded-lg bg-canvas border border-hairline"
              >
                <div className="w-10 h-10 rounded-md bg-canvas-raised border border-hairline flex items-center justify-center text-primary">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="heading-sm text-ink">
                  {item.title}
                </h3>
                <p className="body-sm text-ink-secondary">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
