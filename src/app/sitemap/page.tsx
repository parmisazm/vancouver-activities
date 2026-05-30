import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sitemap | Vancouver Activities",
  description: "Complete sitemap for Vancouver Activities. Find all our pages, guides, and resources for family activities in Vancouver, BC.",
};

const sections = [
  {
    title: "Main Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "Things to Do in Vancouver", href: "/things-to-do" },
      { label: "Events Calendar", href: "/events" },
      { label: "This Weekend", href: "/this-weekend" },
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Activities",
    links: [
      { label: "Kids Activities", href: "/kids-activities" },
      { label: "Outdoor Adventures", href: "/outdoor-adventures" },
      { label: "Free Things to Do", href: "/free-things-to-do" },
      { label: "Indoor Activities", href: "/indoor-activities" },
      { label: "Rainy Day Activities", href: "/rainy-day-activities" },
    ],
  },
  {
    title: "Planning",
    links: [
      { label: "Birthday Party Venues", href: "/birthday-parties" },
      { label: "Summer Camps 2026", href: "/summer-camps" },
      { label: "Family-Friendly Restaurants", href: "/restaurants" },
      { label: "Seasonal Guide", href: "/seasonal-guide" },
    ],
  },
  {
    title: "Guides & Resources",
    links: [
      { label: "Local Guides & Blog", href: "/blog" },
      { label: "Submit an Event", href: "/submit-event" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Sitemap", href: "/sitemap" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[300px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/parallax-mountains.jpg')" }}>
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4" style={{ color: "#ffffff" }}>
            Sitemap
          </h1>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.9)" }}>
            All pages and resources on Vancouver Activities.
          </p>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-heading text-xl font-bold mb-4 pb-2 border-b-2 border-[#5f8f4a]">{section.title}</h2>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-600 hover:text-[#2d5016] transition-colors text-sm flex items-center gap-2">
                      <span className="text-[#5f8f4a]">&#8250;</span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2d5016] py-16 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold mb-4" style={{ color: "#ffffff" }}>
            Cannot Find What You Are Looking For?
          </h2>
          <p className="mb-8 text-lg" style={{ color: "rgba(255,255,255,0.85)" }}>
            Get in touch and we will help you find the perfect activity for your family.
          </p>
          <Link href="/contact" className="px-8 py-3.5 bg-white text-[#2d5016] font-heading text-sm font-semibold uppercase tracking-wider rounded hover:bg-gray-100 transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
