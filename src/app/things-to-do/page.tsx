import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Things to Do in Vancouver BC | Activities & Attractions (2026 Guide)",
  description: "Discover the best things to do in Vancouver, BC. From outdoor adventures and kids activities to free attractions, birthday parties, and rainy day ideas. Your complete Vancouver activity guide.",
};

const categories = [
  {
    title: "Kids Activities",
    desc: "50+ activities for toddlers, school-age kids, and teens. Indoor play spaces, outdoor adventures, and educational fun across Vancouver.",
    href: "/kids-activities",
    image: "/images/kids-playground.jpg",
  },
  {
    title: "Outdoor Adventures",
    desc: "Hiking trails, beaches, biking paths, kayaking, and nature walks. Vancouver's stunning natural playground awaits your family.",
    href: "/outdoor-adventures",
    image: "/images/cat-outdoor.jpg",
  },
  {
    title: "Free Things to Do",
    desc: "Parks, beaches, festivals, playgrounds, and free attractions. Enjoy Vancouver without spending a dime.",
    href: "/free-things-to-do",
    image: "/images/cat-free.jpg",
  },
  {
    title: "Indoor Activities",
    desc: "Science World, museums, trampoline parks, play centres, and more. Perfect for Vancouver's 200 rainy days a year.",
    href: "/indoor-activities",
    image: "/images/cat-indoor.jpg",
  },
  {
    title: "Birthday Parties",
    desc: "The best party venues in Vancouver — indoor play, sports, creative studios, and nature-themed celebrations.",
    href: "/birthday-parties",
    image: "/images/birthday-party.jpg",
  },
  {
    title: "Summer Camps",
    desc: "Day camps, sports programs, arts workshops, STEM camps, and nature adventures for summer 2026.",
    href: "/summer-camps",
    image: "/images/summer-camp.jpg",
  },
  {
    title: "Family Restaurants",
    desc: "Kid-friendly dining across Vancouver — high chairs, kids menus, play areas, and food the whole family loves.",
    href: "/restaurants",
    image: "/images/family-cafe.jpg",
  },
  {
    title: "Rainy Day Activities",
    desc: "40+ indoor ideas for when the rain won't stop. Museums, play spaces, arts studios, bowling, and more.",
    href: "/rainy-day-activities",
    image: "/images/rainy-day.jpg",
  },
  {
    title: "This Weekend",
    desc: "What's happening in Vancouver right now. Family events, festivals, and activities updated every week.",
    href: "/this-weekend",
    image: "/images/cat-events.jpg",
  },
];

const topPicks = [
  { name: "Stanley Park Seawall", type: "Outdoor", desc: "Walk, bike, or rollerblade the iconic 10km seawall loop with ocean and mountain views." },
  { name: "Science World", type: "Indoor", desc: "Interactive exhibits, live science shows, and the OMNIMAX theatre — kids love it rain or shine." },
  { name: "Granville Island Kids Market", type: "Shopping", desc: "Two floors of toy stores, play areas, and kid-focused shops. A rainy day favourite." },
  { name: "Grouse Mountain", type: "Adventure", desc: "Take the Skyride gondola, see grizzly bears, and hike or ski depending on the season." },
  { name: "Vancouver Aquarium", type: "Indoor", desc: "Over 65,000 creatures including otters, jellyfish, and penguins in Stanley Park." },
  { name: "Kitsilano Beach & Pool", type: "Outdoor", desc: "Canada's longest saltwater pool plus sandy beach, playgrounds, and stunning views." },
];

export default function ThingsToDoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[420px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-1.jpg')" }}>
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4" style={{ color: "#ffffff" }}>
            Things to Do in Vancouver BC
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.9)" }}>
            Your complete guide to activities, attractions, and adventures in Vancouver. Explore by category and find your next family outing.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-5">
            Explore Vancouver by Category
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            Vancouver is one of the most activity-rich cities in the world. With mountains, ocean, rainforests, and a vibrant urban core, there is always something amazing to do — no matter the season, the weather, or your budget. Browse our curated categories below to find exactly what you are looking for.
          </p>
        </div>
      </section>

      {/* Category Grid */}
      <section className="bg-[#f8f9fa] py-20 px-5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-52 overflow-hidden">
                <img src={cat.image} alt={`${cat.title} in Vancouver`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold mb-2">{cat.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{cat.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Top Picks */}
      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
              Vancouver&apos;s Top 6 Must-Do Activities
            </h2>
            <p className="text-gray-500 text-lg">If you only have a weekend, start here.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topPicks.map((pick) => (
              <div key={pick.name} className="bg-white rounded-xl shadow-md p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <span className="inline-block px-3 py-1 bg-[#5f8f4a]/10 text-[#2d5016] text-xs font-semibold rounded-full mb-3">{pick.type}</span>
                <h3 className="font-heading text-lg font-bold mb-2">{pick.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{pick.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="bg-[#f8f9fa] py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-3xl font-bold mb-6 text-center">Why Vancouver Is the Best City for Families</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600 leading-relaxed">
            <div>
              <p className="mb-4">
                Vancouver consistently ranks among the world&apos;s most liveable cities, and it is easy to see why families love it here. With over 800 parks, 28 km of uninterrupted seawall, and mountains you can see from almost anywhere, the city is a natural playground.
              </p>
              <p>
                In summer, beaches and outdoor festivals dominate. In winter, world-class skiing is just 30 minutes from downtown. And when it rains — which it does often — Vancouver has enough museums, play centres, and indoor attractions to keep every age group entertained.
              </p>
            </div>
            <div>
              <p className="mb-4">
                From free splash pads in Kitsilano to the immersive exhibits at Science World, from whale watching tours in the Strait of Georgia to the bustling Granville Island Public Market — Vancouver offers something for every interest and every budget.
              </p>
              <p>
                Whether you are a local family looking for weekend inspiration or a visitor planning your first trip, our guides cover every category of activity you could want. Updated weekly by Vancouver parents who know the city inside and out.
              </p>
            </div>
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
            Check out what is happening this weekend or browse our seasonal guide for the best activities right now.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/this-weekend" className="px-8 py-3.5 bg-white border-2 border-[#2d5016] font-heading text-sm font-semibold uppercase tracking-wider rounded hover:bg-[#2d5016] transition-colors" style={{ color: "#2d5016" }}>
              This Weekend
            </Link>
            <Link href="/seasonal-guide" className="px-8 py-3.5 border-2 border-white font-heading text-sm font-semibold uppercase tracking-wider rounded hover:bg-white hover:text-[#2d5016] transition-colors" style={{ color: "#ffffff" }}>
              Seasonal Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
