import type { Metadata } from "next";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is the easiest family hike in Vancouver?", acceptedAnswer: { "@type": "Answer", text: "The Stanley Park Seawall (fully paved, flat, stroller-friendly) and Pacific Spirit Regional Park (wide forest trails) are the easiest options. Rice Lake Loop is another great easy option with a stroller-accessible gravel path." } },
    { "@type": "Question", name: "Are there stroller-friendly hikes in Vancouver?", acceptedAnswer: { "@type": "Answer", text: "Yes. The Stanley Park Seawall, Pacific Spirit Park main trails, Rice Lake Loop, and Burns Bog boardwalk are all stroller-friendly." } },
    { "@type": "Question", name: "Is Lynn Canyon free?", acceptedAnswer: { "@type": "Answer", text: "Yes, Lynn Canyon Suspension Bridge and park are completely free. This is the local alternative to the paid Capilano Suspension Bridge ($62/adult)." } },
  ],
};

export const metadata: Metadata = {
  title: "10 Best Family Hikes Near Vancouver | Easy Trails",
  description: "Kid-friendly hiking trails near Vancouver BC with waterfalls, suspension bridges, and ocean views. Stroller-friendly options, trail details, and what to pack.",
};

const hikes = [
  { name: "Lynn Canyon Suspension Bridge & Loop", location: "North Vancouver", distance: "3.2 km loop", difficulty: "Easy", stroller: "No", highlight: "Free suspension bridge (skip Capilano and save $60), 30-Foot Pool swimming hole in summer, stunning old-growth forest. The Twin Falls trail extension is worth the extra 20 minutes.", image: "/images/hiking-trail.jpg" },
  { name: "Lighthouse Park", location: "West Vancouver", distance: "5 km (various loops)", difficulty: "Easy-Moderate", stroller: "No", highlight: "Point Atkinson lighthouse with jaw-dropping ocean views. Rocky shoreline perfect for tide pool exploration. Massive old-growth Douglas firs. Pack a lunch for the rocks.", image: "/images/beach-sunset.jpg" },
  { name: "Quarry Rock (Deep Cove)", location: "North Vancouver", distance: "3.8 km return", difficulty: "Easy", stroller: "No", highlight: "The classic Vancouver family hike. Stunning viewpoint overlooking Deep Cove and Indian Arm. Get donuts at Honey Doughnuts after. Go early on weekends — it gets packed.", image: "/images/north-van.jpg" },
  { name: "Pacific Spirit Regional Park", location: "UBC/Point Grey", distance: "Various (2-10 km)", difficulty: "Easy", stroller: "Yes (main trails)", highlight: "73 km of trails through coastal forest right in the city. Flat, wide paths perfect for strollers and balance bikes. Wreck Beach access trail for adventurous families.", image: "/images/nature-park.jpg" },
  { name: "Seawall (Stanley Park)", location: "Stanley Park", distance: "9 km full loop", difficulty: "Easy", stroller: "Yes", highlight: "The most scenic stroller walk in Vancouver. Fully paved, flat, with ocean and mountain views the entire way. Stop at Third Beach or Second Beach pool in summer.", image: "/images/family-biking.jpg" },
  { name: "Rice Lake Loop", location: "North Vancouver", distance: "3 km loop", difficulty: "Easy", stroller: "Yes (gravel)", highlight: "Flat loop around a peaceful lake in Lynn Headwaters. Boardwalk sections, bird watching, and fishing platforms. Interpretive signs for kids. Stroller-friendly gravel path.", image: "/images/nature-park.jpg" },
  { name: "Norvan Falls", location: "North Vancouver", distance: "14 km return", difficulty: "Moderate", stroller: "No", highlight: "For families with older kids (8+) who want a real adventure. Beautiful waterfall at the end, river crossings, and dense forest. Pack lunch and plan for 4-5 hours.", image: "/images/hiking-trail.jpg" },
  { name: "Burns Bog (Delta Nature Reserve)", location: "Delta", distance: "4 km loop", difficulty: "Easy", stroller: "Yes (boardwalk)", highlight: "Entirely on boardwalk through a unique bog ecosystem. Great for nature-loving kids — carnivorous plants, dragonflies, and birds. Flat and fully accessible.", image: "/images/nature-park.jpg" },
  { name: "Whytecliff Park", location: "West Vancouver", distance: "1.5 km (explore)", difficulty: "Easy", stroller: "Partial", highlight: "Rocky shore exploration, tide pools, and a small island you can walk to at low tide. Bring water shoes. Perfect half-day outing combined with a picnic.", image: "/images/family-beach.jpg" },
  { name: "Jug Island Trail", location: "Belcarra", distance: "5 km return", difficulty: "Moderate", stroller: "No", highlight: "Hidden gem with panoramic views of Indian Arm, Deep Cove, and Jug Island. Less crowded than Quarry Rock. Some root-covered sections — sturdy shoes recommended.", image: "/images/parallax-mountains.jpg" },
];

export default function FamilyHikesPage() {
  return (
    <>
      <StructuredData data={faqSchema} />
      <section className="relative h-[420px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/family-hiking.jpg')" }}>
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <span className="inline-block bg-[#5f8f4a] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">Outdoor Guide</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4" style={{ color: "#ffffff" }}>
            10 Best Family Hikes Near Vancouver
          </h1>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>Updated June 2026 &middot; 9 min read</p>
        </div>
      </section>

      <article className="py-16 px-5">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            You do not need to drive three hours to find a great family hike near Vancouver. Some of the best trails in British Columbia are right here in Metro Vancouver — waterfalls, old-growth forests, ocean viewpoints, and suspension bridges, all within 30 minutes of downtown.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            We have hiked every trail on this list with kids ranging from toddlers to tweens. Each listing includes distance, difficulty, stroller accessibility, and honest tips about what to expect.
          </p>

          {hikes.map((hike, i) => (
            <div key={hike.name} className="mb-12">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-9 h-9 rounded-full bg-[#2d5016] flex items-center justify-center text-white font-heading font-bold text-sm">{i + 1}</span>
                <h2 className="font-heading text-xl md:text-2xl font-bold">{hike.name}</h2>
              </div>
              <img src={hike.image} alt={hike.name} className="w-full h-64 object-cover rounded-xl mb-4" loading="lazy" />
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs font-semibold px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full">{hike.location}</span>
                <span className="text-xs font-semibold px-3 py-1 bg-green-50 text-green-700 rounded-full">{hike.distance}</span>
                <span className="text-xs font-semibold px-3 py-1 bg-amber-50 text-amber-700 rounded-full">{hike.difficulty}</span>
                <span className="text-xs font-semibold px-3 py-1 bg-purple-50 text-purple-700 rounded-full">Stroller: {hike.stroller}</span>
              </div>
              <p className="text-gray-600 leading-relaxed">{hike.highlight}</p>
            </div>
          ))}

          <div className="bg-[#f0f7ec] rounded-xl p-8 mb-10">
            <h2 className="font-heading text-xl font-bold mb-4" style={{ color: "#2d5016" }}>Family Hiking Essentials</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex gap-2"><span className="text-[#5f8f4a] font-bold">-</span> Water bottles for everyone (more than you think you need)</li>
              <li className="flex gap-2"><span className="text-[#5f8f4a] font-bold">-</span> Snacks — trail mix, granola bars, fruit. Hangry kids ruin hikes.</li>
              <li className="flex gap-2"><span className="text-[#5f8f4a] font-bold">-</span> Layers — North Shore trails are often 5 degrees cooler than the city</li>
              <li className="flex gap-2"><span className="text-[#5f8f4a] font-bold">-</span> Rain jacket even in summer — BC weather changes fast</li>
              <li className="flex gap-2"><span className="text-[#5f8f4a] font-bold">-</span> Proper shoes (not sandals) for trails with roots and rocks</li>
              <li className="flex gap-2"><span className="text-[#5f8f4a] font-bold">-</span> Bug spray for wooded trails, especially near water</li>
              <li className="flex gap-2"><span className="text-[#5f8f4a] font-bold">-</span> Download offline maps — cell service is spotty on the North Shore</li>
            </ul>
          </div>

          <h2 className="font-heading text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4 mb-10">
            {[
              { q: "What is the easiest family hike in Vancouver?", a: "The Stanley Park Seawall (fully paved, flat, stroller-friendly) and Pacific Spirit Regional Park (wide forest trails) are the easiest options. Rice Lake Loop is another great easy option with a stroller-accessible gravel path." },
              { q: "Are there stroller-friendly hikes in Vancouver?", a: "Yes. The Stanley Park Seawall, Pacific Spirit Park main trails, Rice Lake Loop, and Burns Bog boardwalk are all stroller-friendly. The rest require a child carrier for little ones." },
              { q: "Is Lynn Canyon free?", a: "Yes, Lynn Canyon Suspension Bridge and park are completely free. This is the local alternative to the paid Capilano Suspension Bridge ($62/adult). The experience is just as beautiful." },
            ].map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="font-heading font-bold mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </article>

      <section className="bg-[#f8f9fa] py-16 px-5">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-2xl font-bold mb-8 text-center">Related Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Best Playgrounds in Vancouver", image: "/images/kids-playground.jpg", href: "/blog/best-playgrounds-vancouver" },
              { title: "Best Splash Pads in Vancouver", image: "/images/kids-swimming.jpg", href: "/blog/best-splash-pads-vancouver" },
              { title: "Free Things to Do This Spring", image: "/images/sunset-beach.jpg", href: "/blog/free-things-to-do-spring" },
            ].map((r) => (
              <Link key={r.title} href={r.href} className="bg-white rounded-xl shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group">
                <div className="h-40 overflow-hidden"><img src={r.image} alt={r.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
                <div className="p-4"><h3 className="font-heading text-sm font-bold group-hover:text-[#5f8f4a] transition-colors">{r.title}</h3></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#2d5016] py-16 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold mb-4" style={{ color: "#ffffff" }}>Explore More Outdoor Activities</h2>
          <p className="mb-8 text-lg" style={{ color: "rgba(255,255,255,0.85)" }}>Discover beaches, parks, and adventures across Vancouver.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/outdoor-adventures" className="px-8 py-3.5 bg-white border-2 border-[#2d5016] font-heading text-sm font-semibold uppercase tracking-wider rounded hover:bg-[#2d5016] transition-colors" style={{ color: "#2d5016" }}>Outdoor Adventures</Link>
            <Link href="/blog" className="px-8 py-3.5 border-2 border-white font-heading text-sm font-semibold uppercase tracking-wider rounded hover:bg-white hover:text-[#2d5016] transition-colors" style={{ color: "#ffffff" }}>All Guides</Link>
          </div>
        </div>
      </section>
    </>
  );
}
