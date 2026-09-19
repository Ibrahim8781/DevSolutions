import {
  Workflow,
  Network,
  Cpu,
  PhoneCall,
  Search,
  Clapperboard,
  Layout,
  LineChart,
  type LucideIcon,
} from "lucide-react";

export interface ServiceData {
  id: string;
  slug: string;
  aliases?: string[];
  name: string;
  category: "Automation" | "Marketing" | "Trading";
  outcome: string;
  whoThisIsFor: string;
  whoThisIsForBullets?: string[];
  whatsIncluded: string[];
  mediaType: "automation-schematic" | "integration-pipeline" | "agent-flow" | "voice-topology" | "seo-matrix" | "creative-pipeline" | "conversion-architecture" | "algo-execution";
  isTrading?: boolean;
  icon: LucideIcon;
}

export const servicesData: ServiceData[] = [
  {
    id: "business-automations",
    slug: "business-automations",
    name: "Business Automations",
    category: "Automation",
    outcome: "Replace repetitive manual steps and paperwork with reliable background workflows.",
    whoThisIsFor:
      "Operators running repetitive back-office work by hand — invoicing, data entry, status updates, approvals — across tools that don't talk to each other. A good fit if a task follows the same steps every time and someone on your team currently does it manually more than a few times a week.",
    whoThisIsForBullets: [
      "Invoicing, data entry, and manual status reporting across disjointed systems",
      "Approvals and document handoffs that currently stall waiting on human attention",
      "Predictable recurring tasks completed more than a few times each week",
    ],
    whatsIncluded: [
      "Mapping of your current manual workflow end-to-end, including every tool and handoff involved",
      "A background automation that runs the workflow without a human trigger",
      "Error handling and fallback paths for the edge cases the process usually breaks on",
      "Logging and an audit trail so you can see what ran and when",
      "Handover documentation your team can read without an engineering background",
      "30 days of monitoring after launch",
    ],
    mediaType: "automation-schematic",
    icon: Workflow,
  },
  {
    id: "integrations",
    slug: "integrations",
    name: "Integrations",
    category: "Automation",
    outcome: "Connect your CRM, payment processors, and internal databases into a single sync pipeline.",
    whoThisIsFor:
      "Businesses running several disconnected tools — a CRM, a payment processor, a spreadsheet, an internal database — where data has to be copied between them by hand, or isn't synced at all.",
    whoThisIsForBullets: [
      "Customer and financial data fragmented across CRM, Stripe, and internal sheets",
      "Manual copy-pasting between systems that causes data drift and costly errors",
      "Teams lacking native sync tools or relying on fragile, unmonitored scripts",
    ],
    whatsIncluded: [
      "Audit of every system that needs to talk to each other and what data actually needs to move",
      "Build of the sync pipeline using each tool's native API",
      "Conflict handling for records that exist in more than one system",
      "A documented single-source-of-truth decision for each data type",
      "Monitoring so a broken connection gets flagged, not discovered weeks later",
      "Documentation for your team on how the pipeline works",
    ],
    mediaType: "integration-pipeline",
    icon: Network,
  },
  {
    id: "ai-agents",
    slug: "ai-agents",
    name: "AI Agents",
    category: "Automation",
    outcome: "Deploy autonomous systems that complete tasks across software tools, not just chat.",
    whoThisIsFor:
      "Teams that want a system to actually complete multi-step tasks across their software — not just answer questions in a chat window.",
    whoThisIsForBullets: [
      "Multi-step operational tasks that require reading data, reasoning, and executing actions",
      "Teams tired of simple chat interfaces that still require manual execution",
      "Workflows needing robust guardrails, human fallback approval, and clear auditing",
    ],
    whatsIncluded: [
      "Definition of the specific task the agent is responsible for and its boundaries",
      "Build of the agent with access to the specific tools/APIs it needs",
      "Guardrails and fallback-to-human handoff for cases outside its scope",
      "Testing against real scenarios from your business before launch",
      "Logging of every action the agent takes, for review",
      "Ongoing tuning as your workflows change",
    ],
    mediaType: "agent-flow",
    icon: Cpu,
  },
  {
    id: "chatbot-call-agents",
    slug: "chatbot-call-agents",
    name: "ChatBot + Call Agents (Voice AI)",
    category: "Automation",
    outcome: "Answer customer inquiries and screen phone calls 24/7 with zero human delay.",
    whoThisIsFor:
      "Businesses fielding repetitive customer inquiries or phone calls where most calls follow a predictable pattern — status checks, booking, basic troubleshooting, screening.",
    whoThisIsForBullets: [
      "High volume of repetitive inbound phone calls or chat inquiries",
      "After-hours inquiries that go unanswered or get lost in voicemail queues",
      "Call screening and booking flows that consume front-desk and support hours",
    ],
    whatsIncluded: [
      "Script/flow design based on your most common call and chat types",
      "Voice or chat agent build, trained on your actual product/service details",
      "Escalation path to a real person for anything outside its scope",
      "Integration with your calendar/CRM/ticketing system as needed",
      "Call/chat transcript logging",
      "A trial period to tune accuracy before full rollout",
    ],
    mediaType: "voice-topology",
    icon: PhoneCall,
  },
  {
    id: "seo",
    slug: "seo",
    name: "SEO",
    category: "Marketing",
    outcome: "Build technical search foundations that capture high-intent commercial demand.",
    whoThisIsFor:
      "Businesses that want to show up when the right customer searches for what they do, and currently rely on paid ads or referrals alone.",
    whoThisIsForBullets: [
      "Websites with low organic reach relying strictly on escalating ad spend",
      "B2B businesses seeking high-intent buyers searching specific operational problems",
      "Existing sites suffering from technical crawl errors or poorly structured pages",
    ],
    whatsIncluded: [
      "Technical audit of your site's current search foundations",
      "Keyword and intent research focused on commercial, buying-stage queries",
      "On-page fixes and structural changes",
      "A content plan targeted at the queries that actually convert",
      "Monthly reporting on rankings and organic traffic",
      "No black-hat tactics — nothing that risks a future penalty",
    ],
    mediaType: "seo-matrix",
    icon: Search,
  },
  {
    id: "design-video",
    slug: "design-video",
    aliases: ["graphic-design-video-editing"],
    name: "Graphic Design + Video Editing",
    category: "Marketing",
    outcome: "High-velocity marketing creative and polished video assets delivered on predictable schedules.",
    whoThisIsFor:
      "Teams that need a steady stream of marketing creative — social posts, ads, product videos — without hiring an in-house designer or editor.",
    whoThisIsForBullets: [
      "Marketing teams needing consistent ad variations, social assets, and motion cuts",
      "Businesses that don't need a full-time in-house salary but require predictable output",
      "Founders wanting raw project files and direct contact with the actual designer",
    ],
    whatsIncluded: [
      "A defined visual style guide so every asset feels consistent",
      "Ongoing design/edit requests delivered on a predictable schedule",
      "Source files handed over, not locked to us",
      "A set number of revisions included per asset (defined per engagement)",
      "Formats optimized for wherever the asset is actually published",
      "Direct communication with the person doing the work",
    ],
    mediaType: "creative-pipeline",
    icon: Clapperboard,
  },
  {
    id: "web-design-branding",
    slug: "web-design-branding",
    aliases: ["web-design-branding-lead-gen"],
    name: "Web Design + Branding + Lead Generation",
    category: "Marketing",
    outcome: "Fast, conversion-focused websites engineered to turn visitors into booked conversations.",
    whoThisIsFor:
      "Businesses whose current site doesn't convert visitors into booked calls or leads — or that don't have a site yet.",
    whoThisIsForBullets: [
      "Websites that look dated or fail to turn high-intent traffic into booked discovery calls",
      "Early-stage companies needing professional brand tokens (logo, palette, typography)",
      "Teams requiring modern, lightweight code built for mobile speed and search engines",
    ],
    whatsIncluded: [
      "Conversion-focused site design and build, not just visual design",
      "Core branding (logo, color, type) if not already established",
      "Lead-capture forms/flows wired to your CRM or inbox",
      "Mobile-first build, tested at real device widths",
      "Basic on-page SEO foundations included by default",
      "Analytics setup so you can see what's actually converting",
    ],
    mediaType: "conversion-architecture",
    icon: Layout,
  },
  {
    id: "trading-bots",
    slug: "trading-bots",
    aliases: ["trading-bots-strategy-automation"],
    name: "Trading Bots + Strategy Automation",
    category: "Trading",
    outcome: "Automated webhook and algorithmic execution for traders who do not babysit charts.",
    whoThisIsFor:
      "Active or algorithmic traders who already have a defined strategy or rule-set and want it executed automatically instead of watching charts manually.",
    whoThisIsForBullets: [
      "Traders with proven manual edge or PineScript/TradingView rules seeking automation",
      "Strategies needing sub-second webhook execution directly to broker/exchange APIs",
      "Operators requiring disciplined risk controls without human hesitation or burnout",
    ],
    whatsIncluded: [
      "Translation of your strategy logic into executable automation",
      "Broker/exchange API integration and webhook execution",
      "Backtesting against historical data before live deployment",
      "Risk controls (position sizing, stop conditions) built into the automation",
      "Logging of every trade/action taken by the bot",
      "Compliance disclaimer: trading-bot content is not financial advice, and past performance does not guarantee future results",
    ],
    mediaType: "algo-execution",
    isTrading: true,
    icon: LineChart,
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find(
    (s) => s.slug === slug || (s.aliases && s.aliases.includes(slug))
  );
}

export function getAllServiceSlugs(): string[] {
  const slugs: string[] = [];
  servicesData.forEach((s) => {
    slugs.push(s.slug);
    if (s.aliases) {
      slugs.push(...s.aliases);
    }
  });
  return slugs;
}
