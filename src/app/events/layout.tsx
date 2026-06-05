import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import eventsData from "@/data/events.json";

export const metadata: Metadata = {
  title: "Vancouver Events Calendar | Family Events This Week",
  description: "Browse family-friendly events in Vancouver, BC. Filter by category, date, and age group. Free and paid events updated weekly. Plan your weekend now.",
};

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  const eventSchemas = eventsData.slice(0, 10).map((evt) => ({
    "@context": "https://schema.org",
    "@type": "Event",
    name: evt.title,
    startDate: evt.start_date.replace(" ", "T"),
    endDate: evt.end_date.replace(" ", "T"),
    location: {
      "@type": "Place",
      name: evt.venue,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Vancouver",
        addressRegion: "BC",
        addressCountry: "CA",
      },
    },
    description: evt.description,
    image: `https://www.vancouveractivities.com${evt.image}`,
    offers: {
      "@type": "Offer",
      price: evt.price === "Free" ? "0" : evt.price.replace(/[^0-9.]/g, "").split(".")[0] || "0",
      priceCurrency: "CAD",
      availability: "https://schema.org/InStock",
    },
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    organizer: {
      "@type": "Organization",
      name: "Vancouver Activities",
      url: "https://www.vancouveractivities.com",
    },
  }));

  return (
    <>
      {eventSchemas.map((schema, i) => (
        <StructuredData key={i} data={schema} />
      ))}
      {children}
    </>
  );
}
