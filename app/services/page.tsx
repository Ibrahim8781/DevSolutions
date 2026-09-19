import type { Metadata } from "next";
import ServicesPageClient from "@/components/services/ServicesPageClient";

export const metadata: Metadata = {
  title: "Services | DevSolutions",
  description:
    "A flat suite of 8 core services built to deliver clear operational results. Backend automations, integrations, AI agents, and strategy execution.",
  openGraph: {
    title: "Services | DevSolutions",
    description:
      "A flat suite of 8 core services built to deliver clear operational results. Backend automations, integrations, AI agents, and strategy execution.",
    url: "https://devsolutions.agency/services",
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
