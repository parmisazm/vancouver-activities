import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Indoor Activities Vancouver | 40+ Rainy Day Ideas (2026)",
  description: "40+ indoor activities in Vancouver for families. Museums, play spaces, trampoline parks, creative studios, and pools. Perfect for Vancouver's rainy days.",
};

const museums = [
  { name: "Science World", type: "Museum", desc: "Interactive exhibits, live science shows, and the OMNIMAX theatre. The outdoor Ken Spencer Science Park opens in summer. Allow at least 3 hours.", image: "/images/science-experiment.jpg", age: "All Ages" },
  { name: "Museum of Anthropology (UBC)", type: "Museum", desc: "World-class collection of First Nations art, including monumental totem poles and Bill Reid's The Raven and the First Men. Free for kids under 6.", image: "/images/kids-museum.jpg", age: "6+" },
  { name: "H.R. MacMillan Space Centre", type: "Museum", desc: "Planetarium shows, space simulators, and hands-on exhibits about the cosmos. Right next to the Maritime Museum in Vanier Park.", image: "/images/art-gallery.jpg", age: "5+" },
  { name: "Vancouver Art Gallery", type: "Museum", desc: "Four floors of Canadian and international art, including the largest collection of Emily Carr paintings. By-donation admission on Tuesday evenings.", image: "/images/library-kids.jpg", age: "All Ages" },
];

const playSpaces = [
  { name: "Go Bananas Indoor Playground", type: "Indoor Play", desc: "Multi-level play structures, ball pits, slides, and a dedicated toddler zone. Located in Richmond. Socks required.", image: "/images/toddler-play.jpg", age: "1-12" },
  { name: "Crash Crawly's Adventure Fun Centre", type: "Indoor Play", desc: "Massive indoor playground in Langley with tube slides, climbing walls, and a giant ball pit. Cafe on-site for parents.", image: "/images/playground-slide.jpg", age: "2-13" },
  { name: "Circus Play Cafe", type: "Indoor Play", desc: "Play cafe concept in East Vancouver. Kids play while parents enjoy espresso and pastries. Toddler-focused with soft play areas.", image: "/images/family-cafe.jpg", age: "0-6" },
  { name: "Granville Island Kids Market", type: "Indoor Play", desc: "Two floors of toy stores, a built-in adventure zone, ball pit, and art stations. A rainy day institution for Vancouver families.", image: "/images/kids-crafts.jpg", age: "1-10" },
];

const trampolineParks = [
  { name: "Apex Adventure Plex", type: "Trampoline", desc: "Wall-to-wall trampolines, ninja warrior courses, dodgeball courts, and foam pits. Toddler-only sessions on weekday mornings.", image: "/images/trampoline.jpg", age: "3+" },
  { name: "Sky Zone Surrey", type: "Trampoline", desc: "Freestyle jump, SkySlam basketball, Ultimate Dodgeball, and the foam zone. Toddler Time for kids under 6 on weekday mornings.", image: "/images/rock-climbing.jpg", age: "3+" },
];

const creative = [
  { name: "Pottery for the People", type: "Creative", desc: "Drop-in pottery painting for all ages. Choose a piece, paint it, and pick it up glazed a week later. No reservation needed.", image: "/images/pottery.jpg", age: "3+" },
  { name: "Kids Cooking Classes at Dirty Apron", type: "Creative", desc: "Hands-on cooking classes for kids ages 8-14. Learn knife skills, baking, and world cuisine in a professional kitchen.", image: "/images/kids-cooking.jpg", age: "8-14" },
  { name: "AR Workshop Vancouver", type: "Creative", desc: "DIY wood signs, canvas art, and home decor projects. Family workshops on weekends. All materials and instruction included.", image: "/images/arts-crafts.jpg", age: "6+" },
];

const swimming = [
  { name: "Watermania (Richmond)", type: "Swimming", desc: "Wave pool, lazy river, waterslides, hot tub, and toddler splash zone. One of Metro Vancouver's best indoor aquatic centres.", image: "/images/indoor-swim.jpg", age: "All Ages" },
  { name: "Newton Wave Pool (Surrey)", type: "Swimming", desc: "Wave pool, waterslide, and warm leisure pool. Affordable drop-in rates. Family swim sessions on weekends.", image: "/images/newton-wave-pool.jpg", age: "All Ages" },
];

export default function IndoorActivitiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[420px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/rainy-day.jpg')" }}>
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4" style={{ color: "#ffffff" }}>
            Indoor &amp; Rainy Day Activities in Vancouver
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.9)" }}>
            Vancouver gets 166 rainy days a year. Good thing the city is packed with incredible indoor attractions, play spaces, and creative studios.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-5">40+ Indoor Ideas for Families</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            From October to April, rain is practically a daily companion in Vancouver. But locals know that some of the city&apos;s best experiences happen indoors. World-class museums, massive play centres, trampoline parks, and creative studios mean you will never run out of things to do when the weather turns grey.
          </p>
        </div>
      </section>

      {/* Museums & Science */}
      <section className="bg-[#f8f9fa] py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8 text-center">Museums &amp; Science Centres</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {museums.map((item) => (
              <div key={item.name} className="bg-white rounded-xl shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row">
                <img src={item.image} alt={item.name} className="w-full sm:w-48 h-48 sm:h-auto object-cover" />
                <div className="p-5 flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold px-2.5 py-1 bg-[#5f8f4a]/10 text-[#2d5016] rounded-full">{item.type}</span>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full">{item.age}</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Play Spaces */}
      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8 text-center">Indoor Play Spaces</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {playSpaces.map((item) => (
              <div key={item.name} className="bg-white rounded-xl shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row">
                <img src={item.image} alt={item.name} className="w-full sm:w-48 h-48 sm:h-auto object-cover" />
                <div className="p-5 flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold px-2.5 py-1 bg-purple-50 text-purple-700 rounded-full">{item.type}</span>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full">Ages {item.age}</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trampoline Parks */}
      <section className="bg-[#f8f9fa] py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8 text-center">Trampoline &amp; Adventure Parks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trampolineParks.map((item) => (
              <div key={item.name} className="bg-white rounded-xl shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold px-2.5 py-1 bg-orange-50 text-orange-700 rounded-full">{item.type}</span>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full">Ages {item.age}</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative */}
      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8 text-center">Creative &amp; Cooking Classes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {creative.map((item) => (
              <div key={item.name} className="bg-white rounded-xl shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <img src={item.image} alt={item.name} className="w-full h-44 object-cover" />
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold px-2.5 py-1 bg-pink-50 text-pink-700 rounded-full">{item.type}</span>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full">Ages {item.age}</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Swimming */}
      <section className="bg-[#f8f9fa] py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8 text-center">Indoor Swimming &amp; Water Parks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {swimming.map((item) => (
              <div key={item.name} className="bg-white rounded-xl shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold px-2.5 py-1 bg-cyan-50 text-cyan-700 rounded-full">{item.type}</span>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full">{item.age}</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2d5016] py-16 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold mb-4" style={{ color: "#ffffff" }}>
            Looking for Free Indoor Options?
          </h2>
          <p className="mb-8 text-lg" style={{ color: "rgba(255,255,255,0.85)" }}>
            Many Vancouver libraries, community centres, and galleries offer free admission. Check out our free activities guide for budget-friendly indoor fun.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/free-things-to-do" className="px-8 py-3.5 bg-white border-2 border-[#2d5016] font-heading text-sm font-semibold uppercase tracking-wider rounded hover:bg-[#2d5016] transition-colors" style={{ color: "#2d5016" }}>
              Free Activities
            </Link>
            <Link href="/rainy-day-activities" className="px-8 py-3.5 border-2 border-white font-heading text-sm font-semibold uppercase tracking-wider rounded hover:bg-white hover:text-[#2d5016] transition-colors" style={{ color: "#ffffff" }}>
              Rainy Day Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
