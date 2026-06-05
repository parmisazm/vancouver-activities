import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Submit an Event | Vancouver Activities",
  description: "Submit your Vancouver event for free listing on our family activities calendar. We review submissions within 48 hours. Reach local Vancouver families.",
};

export default function SubmitEventLayout({ children }: { children: React.ReactNode }) {
  return children;
}
