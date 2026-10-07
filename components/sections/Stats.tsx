import Reveal from "@/components/Reveal";
import { STATS } from "@/data/site";

// Dividers for a 2×2 grid on mobile that becomes a single row of 4 on desktop.
const CELL_BORDERS = [
  "",
  "border-l pl-6",
  "border-t lg:border-t-0 lg:border-l lg:pl-6",
  "border-t lg:border-t-0 border-l pl-6",
];

export default function Stats() {
  return (
    <section aria-label="Nyxel in numbers" className="border-b border-hairline bg-canvas-sunken">
      <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat, i) => (
          <div key={stat.label} className={`py-10 sm:py-12 border-hairline ${CELL_BORDERS[i]}`}>
            <p className="font-display text-[clamp(34px,4vw,52px)] font-bold leading-none tracking-tight text-ink">
              {stat.value}
            </p>
            <p className="mt-3 text-[15px] text-ink-mute">{stat.label}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
