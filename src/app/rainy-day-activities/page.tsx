import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rainy Day Activities Vancouver | 40+ Indoor Ideas for Families",
  description: "40+ rainy day activities in Vancouver for families. Museums, indoor play spaces, creative activities, swimming pools, cooking classes, and movies. Beat the Vancouver rain with these ideas.",
};

const categories = [
  {
    title: "Museums & Science",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21"/></svg>
    ),
    items: [
      { name: "Science World", desc: "Interactive exhibits, OMNIMAX theatre, and live science shows. Plan 3+ hours." },
      { name: "Museum of Anthropology", desc: "First Nations art, totem poles, and Bill Reid's masterpieces at UBC." },
      { name: "H.R. MacMillan Space Centre", desc: "Planetarium shows, space simulators, and astronomy exhibits in Vanier Park." },
      { name: "Vancouver Art Gallery", desc: "Emily Carr collection and rotating international exhibitions. By-donation Tuesdays." },
      { name: "Vancouver Maritime Museum", desc: "Explore the historic St. Roch ship and interactive maritime exhibits." },
    ],
  },
  {
    title: "Indoor Play Spaces",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/></svg>
    ),
    items: [
      { name: "Go Bananas (Richmond)", desc: "Multi-level play structures, ball pits, and dedicated toddler zone." },
      { name: "Crash Crawly's (Langley)", desc: "Massive tube slides, climbing walls, and parent cafe." },
      { name: "Circus Play Cafe", desc: "Play cafe in East Van — espresso for parents, soft play for toddlers." },
      { name: "Kids Market (Granville Island)", desc: "Two floors of toys, adventure zone, and art stations." },
      { name: "Apex Adventure Plex", desc: "Trampolines, ninja courses, dodgeball, and foam pits." },
    ],
  },
  {
    title: "Creative Activities",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"/></svg>
    ),
    items: [
      { name: "Pottery for the People", desc: "Drop-in pottery painting. Choose, paint, pick up glazed a week later." },
      { name: "AR Workshop Vancouver", desc: "DIY wood signs, canvas art, and family craft workshops." },
      { name: "Granville Island artisan studios", desc: "Watch glassblowers, weavers, and jewellers at work. Many offer classes." },
      { name: "Board game cafes", desc: "Cardboard Cafe and others — hundreds of games, coffee, and snacks." },
    ],
  },
  {
    title: "Swimming & Sports",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"/></svg>
    ),
    items: [
      { name: "Watermania (Richmond)", desc: "Wave pool, lazy river, waterslides, and toddler splash zone." },
      { name: "Newton Wave Pool (Surrey)", desc: "Wave pool and waterslide at affordable drop-in rates." },
      { name: "Richmond Olympic Oval", desc: "Ice skating, rock climbing wall, basketball, and badminton." },
      { name: "Sky Zone Surrey", desc: "Freestyle trampolines, SkySlam basketball, and foam zones." },
    ],
  },
  {
    title: "Food & Cooking",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12"/></svg>
    ),
    items: [
      { name: "Dirty Apron kids cooking classes", desc: "Hands-on classes ages 8-14. Learn real skills in a professional kitchen." },
      { name: "Granville Island Public Market", desc: "Browse and taste artisan foods, watch fresh pasta being made." },
      { name: "Chocolate Arts factory visit", desc: "See bean-to-bar chocolate making and sample artisan truffles." },
    ],
  },
  {
    title: "Movies & Shows",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"/></svg>
    ),
    items: [
      { name: "Cineplex Family Favourites", desc: "Saturday morning movies for $3.99 — classic and new family films." },
      { name: "OMNIMAX at Science World", desc: "Giant-screen documentary films on a 5-storey dome screen." },
      { name: "Vancouver TheatreSports League", desc: "Improv comedy on Granville Island. Family-friendly Saturday matinees." },
    ],
  },
];

const topPicks = [
  { name: "Science World", why: "Best all-around indoor destination. 3+ hours of fun for all ages.", image: "/images/kids-museum.jpg" },
  { name: "Granville Island", why: "Kids Market, buskers, Public Market, and artisan studios all in one spot.", image: "/images/hood-granville.jpg" },
  { name: "Go Bananas", why: "Best indoor playground for toddlers and young kids. Exhaustion guaranteed.", image: "/images/playground-slide.jpg" },
  { name: "Watermania", why: "Wave pool, waterslides, and lazy river. A full day of swimming fun.", image: "/images/indoor-swim.jpg" },
  { name: "Pottery for the People", why: "Creative, calm, and everyone takes home a painted keepsake.", image: "/images/arts-crafts.jpg" },
];

export default function RainyDayPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[420px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/rainy-day.jpg')" }}>
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4" style={{ color: "#ffffff" }}>
            Rainy Day Activities in Vancouver
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.9)" }}>
            Vancouver gets 166 rainy days a year. Here are 40+ ways to have an amazing time indoors when the skies open up.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-5">Never Run Out of Indoor Ideas</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            Rain is part of Vancouver life — especially from October to March. But Vancouverites do not let a little (or a lot) of rain stop them. The city is loaded with museums, play spaces, creative studios, indoor pools, and entertainment that makes rainy days some of the best days.
          </p>
        </div>
      </section>

      {/* Top 5 Picks */}
      <section className="bg-[#f8f9fa] py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8 text-center">Top 5 Rainy Day Picks</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {topPicks.map((pick, idx) => (
              <div key={pick.name} className="bg-white rounded-xl shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-center">
                <img src={pick.image} alt={pick.name} className="w-full h-32 object-cover" />
                <div className="p-4">
                  <span className="inline-block w-8 h-8 bg-[#2d5016] rounded-full text-sm font-bold leading-8 mb-2" style={{ color: "#ffffff" }}>{idx + 1}</span>
                  <h3 className="font-heading text-sm font-bold mb-1">{pick.name}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{pick.why}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      {categories.map((cat, idx) => (
        <section key={cat.title} className={idx % 2 === 0 ? "py-20 px-5" : "bg-[#f8f9fa] py-20 px-5"}>
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8 justify-center">
              <span className="text-[#5f8f4a]">{cat.icon}</span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold">{cat.title}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {cat.items.map((item) => (
                <div key={item.name} className="bg-white rounded-xl shadow-md p-5 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  <h3 className="font-heading text-base font-bold mb-2">{item.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Quick Pick */}
      <section className="bg-[#f8f9fa] py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8 text-center">I Need Something For...</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white rounded-xl shadow-md p-6">
              <span className="text-xs font-bold px-3 py-1 bg-pink-50 text-pink-700 rounded-full mb-3 inline-block">Toddlers (0-3)</span>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>&#8226; Circus Play Cafe</li>
                <li>&#8226; Go Bananas toddler zone</li>
                <li>&#8226; Library story time (free)</li>
                <li>&#8226; Aquarium touch pool</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <span className="text-xs font-bold px-3 py-1 bg-blue-50 text-blue-700 rounded-full mb-3 inline-block">Kids (4-12)</span>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>&#8226; Science World</li>
                <li>&#8226; Trampoline parks</li>
                <li>&#8226; Pottery painting</li>
                <li>&#8226; Indoor swimming</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <span className="text-xs font-bold px-3 py-1 bg-purple-50 text-purple-700 rounded-full mb-3 inline-block">Teens (13+)</span>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>&#8226; Escape rooms</li>
                <li>&#8226; Rock climbing</li>
                <li>&#8226; Board game cafes</li>
                <li>&#8226; Bowling and VR</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2d5016] py-16 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold mb-4" style={{ color: "#ffffff" }}>
            Planning Ahead for a Sunny Day?
          </h2>
          <p className="mb-8 text-lg" style={{ color: "rgba(255,255,255,0.85)" }}>
            When the rain stops, Vancouver's outdoor adventures are unbeatable. Check out our outdoor guide for hikes, beaches, and nature walks.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/outdoor-adventures" className="px-8 py-3.5 bg-white border-2 border-[#2d5016] font-heading text-sm font-semibold uppercase tracking-wider rounded hover:bg-[#2d5016] transition-colors" style={{ color: "#2d5016" }}>
              Outdoor Adventures
            </Link>
            <Link href="/indoor-activities" className="px-8 py-3.5 border-2 border-white font-heading text-sm font-semibold uppercase tracking-wider rounded hover:bg-white hover:text-[#2d5016] transition-colors" style={{ color: "#ffffff" }}>
              Indoor Activities
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
