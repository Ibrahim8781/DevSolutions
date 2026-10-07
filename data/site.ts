// Single source of truth for the one-page site's copy and contact details.

// TODO: replace with the real domain once it's registered.
export const SITE_URL = "https://nyxel.example";

export const BRAND = {
  name: "Nyxel",
  tagline: "Autonomous Systems",
  description:
    "Nyxel builds websites, trading bots and business automation for companies that want to grow without more busywork.",
};

export const BOOKING_URL = "https://cal.com/miharbi-damha-omxkej/15min";

export const FOUNDERS = [
  { name: "Muhammad Saleh", email: "shai47785@gmail.com", initials: "MS" },
  { name: "Abdullah Ramzan", email: "mabdullahr082@gmail.com", initials: "AR" },
];

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#process" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

// MOCK NUMBERS — placeholders while the site is in development.
// Replace with real figures before launch.
export const STATS = [
  { value: "40+", label: "Projects delivered" },
  { value: "2,500+", label: "Hours of manual work removed" },
  { value: "24/7", label: "Bots and automations running" },
  { value: "< 24h", label: "Average reply time" },
];

export type ServiceId = "web" | "trading" | "automation";

export interface Service {
  id: ServiceId;
  label: string;
  title: string;
  pitch: string;
  includes: string[];
  goodFor: string;
  keywords: string;
}

export const SERVICES: Service[] = [
  {
    id: "web",
    label: "Web Development",
    title: "A website and brand that bring you customers, not just compliments.",
    pitch:
      "We design and build your website, logo and brand look so people trust you the moment they land, and know exactly how to contact or buy from you.",
    includes: [
      "Website design and build that works on any phone",
      "Logo and brand look (colours, fonts, style)",
      "Landing pages and online stores",
      "Contact, booking and quote forms",
      "Basic Google setup (SEO) and hosting help",
    ],
    goodFor: "New businesses, outdated websites, or a site that gets visits but no enquiries.",
    keywords: "Website design · Branding · Landing pages · Online stores",
  },
  {
    id: "trading",
    label: "Trading Bots",
    title: "Your trading rules, running 24/7, without you watching charts.",
    pitch:
      "Tell us your strategy and we turn it into a bot for TradingView or MetaTrader 5 that places trades exactly by your rules, tested on past data before any real money is used.",
    includes: [
      "Custom bot (Expert Advisor) built from your strategy for MetaTrader 5",
      "TradingView alerts turned into real orders automatically",
      "Backtesting on past market data before going live",
      "Risk limits: stop-loss, position size and daily loss cap",
      "You own the code, with support after launch",
    ],
    goodFor: "Traders with a clear strategy who are tired of missing entries or trading on emotion.",
    keywords: "MT5 Expert Advisor · TradingView automation · Forex & crypto bots",
  },
  {
    id: "automation",
    label: "Business Automation",
    title: "The repetitive work your team does every day, done automatically.",
    pitch:
      "If someone on your team copies data, chases follow-ups or sends the same emails every week, we set up systems that do it for them, quietly and without mistakes.",
    includes: [
      "Invoices, data entry and reports that fill themselves in",
      "Instant replies and follow-ups for every new lead",
      "Your apps sharing data: CRM, email, Google Sheets, Slack, WhatsApp",
      "AI chatbots that answer customers day and night",
      "Approvals, reminders and notifications sent for you",
    ],
    goodFor: "Small and growing teams losing hours a week to copy-paste and admin.",
    keywords: "Workflow automation · AI chatbots · Zapier, Make & n8n",
  },
];

export const TRADING_DISCLAIMER_SHORT =
  "We build software that follows your rules. We don't give financial advice, and no bot can guarantee profit. Past results, including backtests, don't predict future results. Trading involves risk of loss.";

export const PROCESS = [
  {
    title: "Free 15-minute call",
    body: "Tell us what you need. We ask a few simple questions and tell you honestly if we're a good fit.",
  },
  {
    title: "Clear plan and fixed quote",
    body: "Within 48 hours you get a written plan: what we'll build, how long it takes and one fixed price.",
  },
  {
    title: "We build, you see progress",
    body: "Regular updates and previews, so there are no surprises. You give feedback as we go.",
  },
  {
    title: "Launch and support",
    body: "We go live together, show you how everything works and stay on hand for fixes and changes.",
  },
];

export const PROMISES = [
  { title: "Fixed quote", body: "One agreed price before work starts. No surprise invoices." },
  { title: "You own everything", body: "Your website, your code, your accounts. Always." },
  { title: "Talk to the builders", body: "No account managers in between. You speak to the people doing the work." },
];

export const FAQS = [
  {
    q: "How much does it cost?",
    a: "Every project is different, so after a free 15-minute call we send you one fixed quote. You'll know the full price before any work starts, with no hourly surprises.",
  },
  {
    q: "How long does a project take?",
    a: "Most websites take 2–4 weeks, most automations 1–3 weeks, and trading bots 2–4 weeks depending on how complex the strategy is. Your quote includes a clear timeline.",
  },
  {
    q: "I'm not technical. Is that a problem?",
    a: "Not at all. Most of our clients aren't. You tell us how things work today and what you want to happen; we handle the technical side and explain everything in plain words.",
  },
  {
    q: "Can you work with the tools I already use?",
    a: "Yes. We connect the apps you already pay for (Google Workspace, Microsoft 365, HubSpot, Shopify, Slack, WhatsApp and many more) instead of asking you to switch.",
  },
  {
    q: "Who owns the website, bot or automation?",
    a: "You do. Once the project is paid, the code, accounts and logins are yours. We never hold your business hostage.",
  },
  {
    q: "Will a trading bot make me money?",
    a: "No one can promise that, and you should be careful of anyone who does. We build a bot that follows your strategy exactly and test it on past data, but markets change and trading always carries risk. We are software developers, not financial advisors.",
  },
  {
    q: "What happens after launch?",
    a: "We stay on hand to fix issues and make changes. If you want ongoing improvements or monitoring, we can agree a simple monthly plan.",
  },
];
