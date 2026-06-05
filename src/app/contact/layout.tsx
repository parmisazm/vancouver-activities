import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Vancouver Activities",
  description: "Get in touch with Vancouver Activities. Submit events, ask questions, or explore partnership opportunities. We respond within 48 hours.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
