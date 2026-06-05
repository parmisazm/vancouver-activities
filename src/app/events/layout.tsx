import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vancouver Events Calendar | Family Events This Week",
  description: "Browse family-friendly events in Vancouver, BC. Filter by category, date, and age group. Free and paid events updated weekly. Plan your weekend now.",
};

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
