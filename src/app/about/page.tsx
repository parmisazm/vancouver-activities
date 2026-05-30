import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Vancouver Activities | Local Family Activity Guide",
  description: "Vancouver Activities is your local guide to family fun in Vancouver, BC. Events, activities, indoor play, birthday parties, camps, and seasonal guides updated weekly.",
};

const coverageAreas = [
  {
    title: "Events",
    desc: "Festivals, community events, and family-friendly happenings across Metro Vancouver, updated weekly.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"/></svg>
    ),
  },
  {
    title: "Activities",
    desc: "Outdoor adventures, free things to do, and seasonal activities for every age group and budget.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64"/></svg>
    ),
  },
  {
    title: "Indoor Play",
    desc: "Museums, play spaces, trampoline parks, and rainy day ideas for when the weather turns grey.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"/></svg>
    ),
  },
  {
    title: "Birthday Parties",
    desc: "Party venue comparisons with prices, age ranges, and what is included at each location.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12"/></svg>
    ),
  },
  {
    title: "Summer Camps",
    desc: "Day camp listings with registration timelines, prices, and packing lists for parents.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"/></svg>
    ),
  },
  {
    title: "Local Guides",
    desc: "Neighbourhood guides, restaurant reviews, and insider tips written by Vancouver locals.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"/></svg>
    ),
  },
];

const stats = [
  { value: "50+", label: "Activities Listed" },
  { value: "40+", label: "Indoor Ideas" },
  { value: "12", label: "Party Venues" },
  { value: "Weekly", label: "Updates" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[420px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/parallax-family.jpg')" }}>
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4" style={{ color: "#ffffff" }}>
            About Vancouver Activities
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.9)" }}>
            Your local guide to the best things to do in Vancouver, BC — built by parents, for families.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Vancouver Activities exists because we believe every family deserves an easy way to find amazing things to do in this city. Whether it is a rainy Tuesday afternoon or a sunny summer weekend, we want to help you discover activities, events, and experiences that make living in Vancouver extraordinary.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            We are Vancouver parents who got tired of Googling &ldquo;things to do with kids in Vancouver&rdquo; every weekend. So we built the resource we wished existed — a comprehensive, always-updated guide to family activities across Metro Vancouver. No ads, no clutter, just honest recommendations.
          </p>
        </div>
      </section>

      {/* What We Cover */}
      <section className="bg-[#f8f9fa] py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-10 text-center">What We Cover</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverageAreas.map((area) => (
              <div key={area.title} className="bg-white rounded-xl shadow-md p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-center">
                <span className="inline-block text-[#5f8f4a] mb-4">{area.icon}</span>
                <h3 className="font-heading text-lg font-bold mb-2">{area.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-4xl md:text-5xl font-bold text-[#2d5016] mb-2">{stat.value}</p>
                <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stay Connected */}
      <section className="bg-[#f8f9fa] py-20 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-5">Stay Connected</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Follow us for weekly updates on new activities, seasonal guides, and Vancouver events. Have a suggestion? We would love to hear from you.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white rounded-lg shadow-md text-sm font-heading font-semibold text-gray-700 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              Instagram
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white rounded-lg shadow-md text-sm font-heading font-semibold text-gray-700 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white rounded-lg shadow-md text-sm font-heading font-semibold text-gray-700 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              Twitter
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2d5016] py-16 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold mb-4" style={{ color: "#ffffff" }}>
            Ready to Explore Vancouver?
          </h2>
          <p className="mb-8 text-lg" style={{ color: "rgba(255,255,255,0.85)" }}>
            Start browsing our activity guides or check out what is happening in Vancouver this weekend.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/things-to-do" className="px-8 py-3.5 bg-white text-[#2d5016] font-heading text-sm font-semibold uppercase tracking-wider rounded hover:bg-gray-100 transition-colors">
              Explore Activities
            </Link>
            <Link href="/contact" className="px-8 py-3.5 border-2 border-white font-heading text-sm font-semibold uppercase tracking-wider rounded hover:bg-white hover:text-[#2d5016] transition-colors" style={{ color: "#ffffff" }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
