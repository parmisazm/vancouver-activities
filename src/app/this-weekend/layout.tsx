import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "This Weekend in Vancouver | Family Events & Activities",
  description: "What's happening in Vancouver this weekend. Family events, festivals, and activities updated every Thursday by local parents. Plan your weekend now.",
};

export default function ThisWeekendLayout({ children }: { children: React.ReactNode }) {
  return children;
}
