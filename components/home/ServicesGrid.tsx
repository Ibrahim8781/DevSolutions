"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Workflow,
  Network,
  Cpu,
  PhoneCall,
  Search,
  Clapperboard,
  Layout,
  LineChart,
  ArrowRight,
} from "lucide-react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

interface ServiceItem {
  id: string;
  name: string;
  category: "Automation" | "Marketing" | "Trading";
  outcome: string;
  icon: typeof Workflow;
  href: string;
}

const services: ServiceItem[] = [
  {
    id: "business-automations",
    name: "Business Automations",
    category: "Automation",
    outcome: "Replace repetitive manual steps and paperwork with reliable background workflows.",
    icon: Workflow,
    href: "/services#business-automations",
  },
  {
    id: "integrations",
    name: "Integrations",
    category: "Automation",
    outcome: "Connect your CRM, payment processors, and internal databases into a single sync pipeline.",
    icon: Network,
    href: "/services#integrations",
  },
  {
    id: "ai-agents",
    name: "AI Agents",
    category: "Automation",
    outcome: "Deploy autonomous systems that complete tasks across software tools, not just chat.",
    icon: Cpu,
    href: "/services#ai-agents",
  },
  {
    id: "chatbot-call-agents",
    name: "ChatBot + Call Agents (Voice AI)",
    category: "Automation",
    outcome: "Answer customer inquiries and screen phone calls 24/7 with zero human delay.",
    icon: PhoneCall,
    href: "/services#chatbot-call-agents",
  },
  {
    id: "seo",
    name: "SEO",
    category: "Marketing",
    outcome: "Build technical search foundations that capture high-intent commercial demand.",
    icon: Search,
    href: "/services#seo",
  },
  {
    id: "graphic-design-video-editing",
    name: "Graphic Design + Video Editing",
    category: "Marketing",
    outcome: "High-velocity marketing creative and polished video assets delivered on predictable schedules.",
    icon: Clapperboard,
    href: "/services#design-video",
  },
  {
    id: "web-design-branding-lead-gen",
    name: "Web Design + Branding + Lead Generation",
    category: "Marketing",
    outcome: "Fast, conversion-focused websites engineered to turn visitors into booked conversations.",
    icon: Layout,
    href: "/services#web-design-branding",
  },
  {
    id: "trading-bots-strategy-automation",
    name: "Trading Bots + Strategy Automation",
    category: "Trading",
    outcome: "Automated webhook and algorithmic execution for traders who do not babysit charts.",
    icon: LineChart,
    href: "/services#trading-bots",
  },
];

// Neighbors map in 4-column layout
const NEIGHBORS: Record<number, number[]> = {
  0: [1, 4],
  1: [0, 2, 5],
  2: [1, 3, 6],
  3: [2, 7],
  4: [0, 5],
  5: [1, 4, 6],
  6: [2, 5, 7],
  7: [3, 6],
};

// Unique edges for trace lines
const EDGES: [number, number][] = [
  [0, 1], [1, 2], [2, 3],
  [4, 5], [5, 6], [6, 7],
  [0, 4], [1, 5], [2, 6], [3, 7],
];

function ServiceCard({
  service,
  index,
  isHovered,
  onHoverChange,
  cardRef,
}: {
  service: ServiceItem;
  index: number;
  isHovered: boolean;
  onHoverChange: (hovered: boolean) => void;
  cardRef: (el: HTMLDivElement | null) => void;
}) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isSweeping, setIsSweeping] = useState(false);
  const sweepTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    handleMouseMove(e);
    onHoverChange(true);

    if (!prefersReducedMotion) {
      setIsSweeping(true);
      if (sweepTimeoutRef.current) clearTimeout(sweepTimeoutRef.current);
      sweepTimeoutRef.current = setTimeout(() => {
        setIsSweeping(false);
      }, 650);
    }
  };

  const handleMouseLeave = () => {
    onHoverChange(false);
    setIsSweeping(false);
  };

  const Icon = service.icon;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="card-service relative flex flex-col justify-between space-y-6 overflow-hidden transition-colors duration-200 z-10"
      style={{
        borderColor: isHovered ? "var(--primary)" : "var(--hairline)",
      }}
    >
      {/* Cursor-tracked radial spotlight glow within card bounds only */}
      {isHovered && !prefersReducedMotion && (
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-200"
          style={{
            background: `radial-gradient(220px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 106, 26, 0.12), transparent 80%)`,
          }}
        />
      )}

      {/* Border light-sweep highlight on hover (travels once ~600ms, does not loop) */}
      {isSweeping && !prefersReducedMotion && (
        <svg
          className="pointer-events-none absolute inset-0 w-full h-full z-20 overflow-visible"
          style={{ borderRadius: "16px" }}
        >
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            rx="16"
            fill="none"
            stroke="var(--primary)"
            strokeWidth="2"
            strokeDasharray="90 1200"
            className="animate-border-sweep"
          />
        </svg>
      )}

      <div className="space-y-4 relative z-10">
        {/* Top Row: Icon + Pulsing Live Indicator + Wayfinding Tag */}
        <div className="flex items-center justify-between">
          <div className="w-10 h-10 rounded-md bg-canvas border border-hairline flex items-center justify-center text-primary">
            <Icon className="w-5 h-5" />
          </div>

          <div className="flex items-center gap-2">
            {/* Live Indicator Dot: 6px, {colors.primary}, soft 2s pulse */}
            <span
              className="w-2 h-2 rounded-full bg-primary inline-block"
              style={{
                animation: prefersReducedMotion ? "none" : "live-pulse 2s ease-in-out infinite",
              }}
              title="System active"
            />
            <span className="tag-category text-[11px] py-0.5 px-2">
              {service.category}
            </span>
          </div>
        </div>

        {/* Service Title */}
        <h3 className="heading-sm text-ink leading-snug">
          {service.name}
        </h3>

        {/* One-Line Outcome */}
        <p className="body-sm text-ink-secondary leading-relaxed">
          {service.outcome}
        </p>
      </div>

      {/* Learn More Link */}
      <div className="pt-4 border-t border-hairline relative z-10">
        <Link
          href={service.href}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-hover transition-colors group"
        >
          <span>Learn more</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}

interface ServicesGridProps {
  showHeader?: boolean;
  className?: string;
  id?: string;
}

export default function ServicesGrid({
  showHeader = true,
  className = "",
  id = "services",
}: ServicesGridProps = {}) {
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  const gridContainerRef = useRef<HTMLDivElement>(null);
  const cardElementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [cardCenters, setCardCenters] = useState<{ x: number; y: number }[]>([]);

  // Measure card anchor centers for faint trace lines
  const updateCardCenters = () => {
    if (!gridContainerRef.current) return;
    const containerRect = gridContainerRef.current.getBoundingClientRect();
    const centers = cardElementsRef.current.map((el) => {
      if (!el) return { x: 0, y: 0 };
      const r = el.getBoundingClientRect();
      return {
        x: r.left - containerRect.left + r.width / 2,
        y: r.top - containerRect.top + r.height / 2,
      };
    });
    setCardCenters(centers);
  };

  useEffect(() => {
    updateCardCenters();
    window.addEventListener("resize", updateCardCenters);
    return () => window.removeEventListener("resize", updateCardCenters);
  }, []);

  // Determine if an edge connects to the currently hovered card
  const isEdgePulsing = (u: number, v: number) => {
    if (hoveredCardIndex === null) return false;
    return (
      (u === hoveredCardIndex && NEIGHBORS[hoveredCardIndex]?.includes(v)) ||
      (v === hoveredCardIndex && NEIGHBORS[hoveredCardIndex]?.includes(u))
    );
  };

  return (
    <section id={id} className={`w-full py-20 sm:py-28 border-b border-hairline relative z-10 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with tight local scrim */}
        {showHeader && (
          <div className="max-w-3xl mb-14 sm:mb-16 relative">
            <div
              className="pointer-events-none absolute -inset-x-6 -inset-y-4 rounded-2xl z-0"
              style={{
                background: "radial-gradient(ellipse at center, rgba(11, 11, 14, 0.88) 0%, rgba(11, 11, 14, 0.5) 70%, transparent 100%)",
              }}
              aria-hidden="true"
            />
            <div className="relative z-10 space-y-4">
              <div>
                <span className="tag-category">
                  Capabilities
                </span>
              </div>
              <h2 className="display-lg text-ink">
                Services built to deliver clear operational results.
              </h2>
              <p className="body-lg text-ink-secondary">
                A flat suite of 8 core services. Every service is delivered as a peer with transparent scopes and direct technical ownership.
              </p>
            </div>
          </div>
        )}

        {/* Grid Container with Connected System Trace Lines */}
        <div ref={gridContainerRef} className="relative">
          {/* Faint background trace-line SVG connecting card anchor points */}
          {cardCenters.length === 8 && (
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block"
              aria-hidden="true"
            >
              {EDGES.map(([u, v]) => {
                const p1 = cardCenters[u];
                const p2 = cardCenters[v];
                if (!p1 || !p2 || (p1.x === 0 && p1.y === 0)) return null;

                const pulsing = isEdgePulsing(u, v);

                return (
                  <line
                    key={`edge-${u}-${v}`}
                    x1={p1.x}
                    y1={p1.y}
                    x2={p2.x}
                    y2={p2.y}
                    stroke={pulsing ? "var(--primary)" : "var(--hairline)"}
                    strokeWidth={pulsing ? 2 : 1}
                    strokeDasharray={pulsing ? "none" : "5 5"}
                    opacity={pulsing ? 0.85 : 0.4}
                    style={{
                      transition: "stroke 350ms ease, opacity 350ms ease, stroke-width 350ms ease",
                    }}
                  />
                );
              })}
            </svg>
          )}

          {/* Flat 4-up Grid (2-up Tablet, 1-up Mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {services.map((service, idx) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={idx}
                isHovered={hoveredCardIndex === idx}
                onHoverChange={(hovered) => setHoveredCardIndex(hovered ? idx : null)}
                cardRef={(el) => {
                  cardElementsRef.current[idx] = el;
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
