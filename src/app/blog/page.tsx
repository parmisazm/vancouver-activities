import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Local Guides | Vancouver Activities Blog",
  description: "Vancouver local guides and tips. Best hikes, restaurants, neighbourhoods, and seasonal activities written by locals who know the city inside out.",
};

const posts = [
  {
    title: "15 Best Playgrounds in Vancouver for Kids",
    date: "June 1, 2026",
    category: "Local Guide",
    image: "/images/playground-kids.jpg",
    excerpt: "We visited over 30 playgrounds across Metro Vancouver and ranked them based on what actually matters to parents. Climbing structures, toddler areas, washrooms, and shade.",
    slug: "/blog/best-playgrounds-vancouver",
  },
  {
    title: "30 Rainy Day Activities for Kids in Vancouver",
    date: "May 28, 2026",
    category: "Rainy Day",
    image: "/images/rainy-day.jpg",
    excerpt: "Vancouver averages 166 rainy days a year. Here are 30 indoor activities that make rainy days genuinely fun — from Science World to trampoline parks and play cafes.",
    slug: "/blog/rainy-day-indoor-activities",
  },
  {
    title: "10 Best Family Hikes Near Vancouver",
    date: "May 20, 2026",
    category: "Outdoor",
    image: "/images/family-hiking.jpg",
    excerpt: "Kid-friendly trails with waterfalls, suspension bridges, and ocean views. Every trail tested with real kids, with stroller accessibility and difficulty ratings.",
    slug: "/blog/family-hikes-vancouver",
  },
  {
    title: "15 Free Things to Do in Vancouver This Spring",
    date: "May 10, 2026",
    category: "Free Activities",
    image: "/images/sunset-beach.jpg",
    excerpt: "Cherry blossoms, beach walks, markets, and festivals — all completely free. Our top picks for enjoying Vancouver without spending a dime this spring season.",
    slug: "/blog/free-things-to-do-spring",
  },
  {
    title: "Best Toddler Activities in Vancouver (Ages 1-3)",
    date: "May 5, 2026",
    category: "Kids",
    image: "/images/kids-playing.jpg",
    excerpt: "Finding activities for toddlers requires a different lens. Safe for wobbly walkers, not too overwhelming, and close to a washroom. These are the places we go back to.",
    slug: "/blog/toddler-activities-vancouver",
  },
  {
    title: "Best Splash Pads & Water Parks in Vancouver",
    date: "April 28, 2026",
    category: "Summer",
    image: "/images/kids-swimming.jpg",
    excerpt: "Every splash pad and outdoor pool worth visiting in Metro Vancouver. Locations, hours, age recommendations, and what to pack for a day of water play.",
    slug: "/blog/best-splash-pads-vancouver",
  },
];

const categoryColors: Record<string, string> = {
  "Free Activities": "bg-green-50 text-green-700",
  "Rainy Day": "bg-blue-50 text-blue-700",
  Outdoor: "bg-cyan-50 text-cyan-700",
  "Local Guide": "bg-orange-50 text-orange-700",
  Kids: "bg-pink-50 text-pink-700",
  Summer: "bg-amber-50 text-amber-700",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[420px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/hood-gastown.jpg')" }}>
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4" style={{ color: "#ffffff" }}>
            Vancouver Local Guides
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.9)" }}>
            Insider tips, seasonal guides, and curated recommendations from locals who know Vancouver inside and out.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-5">Latest Guides &amp; Articles</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            Written by Vancouver parents and locals, these guides cover everything from the best ramen shops to family hiking trails. New articles published weekly.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-[#f8f9fa] py-20 px-5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {posts.map((post) => (
            <Link
              key={post.title}
              href={post.slug}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[post.category] || "bg-gray-50 text-gray-700"}`}>{post.category}</span>
                  <span className="text-xs text-gray-400">{post.date}</span>
                </div>
                <h3 className="font-heading text-lg font-bold mb-2 group-hover:text-[#5f8f4a] transition-colors">{post.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2d5016] py-16 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold mb-4" style={{ color: "#ffffff" }}>
            Want to Contribute?
          </h2>
          <p className="mb-8 text-lg" style={{ color: "rgba(255,255,255,0.85)" }}>
            Are you a Vancouver local with insider knowledge? We are always looking for guest contributors to share their favourite spots.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="px-8 py-3.5 bg-white border-2 border-[#2d5016] font-heading text-sm font-semibold uppercase tracking-wider rounded hover:bg-[#2d5016] transition-colors" style={{ color: "#2d5016" }}>
              Get in Touch
            </Link>
            <Link href="/things-to-do" className="px-8 py-3.5 border-2 border-white font-heading text-sm font-semibold uppercase tracking-wider rounded hover:bg-white hover:text-[#2d5016] transition-colors" style={{ color: "#ffffff" }}>
              Explore Activities
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
