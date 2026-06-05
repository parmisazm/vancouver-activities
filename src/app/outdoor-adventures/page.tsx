import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Outdoor Adventures Vancouver | Hiking, Biking & Beaches",
  description: "Best outdoor adventures in Vancouver, BC. Family-friendly hiking trails, biking paths, kayaking, beaches, and nature walks. Explore our guide now.",
};

const adventures = [
  {
    name: "Stanley Park Seawall",
    type: "Walking / Cycling",
    difficulty: "Easy",
    desc: "The iconic 10km paved seawall loop offers stunning ocean and mountain views. Rent bikes near Denman Street and ride past Totem Poles, Siwash Rock, and Third Beach. Allow 2-3 hours for the full loop with stops.",
    location: "Stanley Park, Vancouver",
    image: "/images/family-biking.jpg",
  },
  {
    name: "Deep Cove Kayaking",
    type: "Kayaking / Paddling",
    difficulty: "Moderate",
    desc: "Paddle through the calm waters of Indian Arm with towering mountain walls on each side. Guided tours available for families. After your paddle, grab a legendary honey donut at Honey Doughnuts & Goodies.",
    location: "Deep Cove, North Vancouver",
    image: "/images/kayaking.jpg",
  },
  {
    name: "Lynn Canyon Suspension Bridge",
    type: "Hiking / Nature",
    difficulty: "Easy",
    desc: "A free alternative to Capilano, this 50m suspension bridge spans Lynn Creek canyon. The surrounding trails are family-friendly with waterfalls, pools, and an ecology centre. The Twin Falls trail is a must.",
    location: "Lynn Canyon Park, North Vancouver",
    image: "/images/hiking-trail.jpg",
  },
  {
    name: "Grouse Grind",
    type: "Hiking",
    difficulty: "Challenging",

    desc: "Known as Mother Nature's Stairmaster, this 2.9km trail climbs 853m with 2,830 stairs. Not for young kids, but teens love the challenge. Take the Skyride gondola down. Open May-October.",
    location: "Grouse Mountain, North Vancouver",
    image: "/images/winter-mountains.jpg",
  },
  {
    name: "Jericho Beach to Spanish Banks",
    type: "Beach / Walking",
    difficulty: "Easy",
    desc: "A beautiful stretch of sandy beaches on the west side. Shallow water perfect for wading, stunning sunset views, and the beach trail connects all three. Pack a picnic and stay for the evening.",
    location: "West Point Grey, Vancouver",
    image: "/images/family-beach.jpg",
  },
  {
    name: "Pacific Spirit Regional Park",
    type: "Hiking / Cycling",
    difficulty: "Easy to Moderate",
    desc: "73km of trails through temperate rainforest on Vancouver's west side near UBC. Flat and stroller-friendly trails, plus mountain biking trails. One of the city's best-kept secrets.",
    location: "UBC Area, Vancouver",
    image: "/images/nature-park.jpg",
  },
];

const tips = [
  { title: "Layer Up", desc: "Vancouver weather is unpredictable. Bring a waterproof shell, sun hat, and layers. Mornings can be cool even in summer." },
  { title: "Bring Water & Snacks", desc: "Many trails have limited facilities. Pack at least 1L of water per person and high-energy snacks for longer hikes." },
  { title: "Start Early", desc: "Parking at popular trailheads fills up by 10am on weekends. Arrive early or take transit (bus to Lynn Canyon, SeaBus to Deep Cove)." },
  { title: "Stay on Marked Trails", desc: "Vancouver's forests are beautiful but dense. Keep kids on marked paths and bring a trail map or download one beforehand." },
  { title: "Check Trail Conditions", desc: "Some trails close seasonally. Check the North Shore Rescue or Vancouver Trails website before heading out." },
  { title: "Respect Wildlife", desc: "Bears, coyotes, and eagles are common in Vancouver parks. Keep food sealed and give wildlife plenty of space." },
];

export default function OutdoorAdventuresPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[420px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/family-hiking.jpg')" }}>
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4" style={{ color: "#ffffff" }}>
            Outdoor Adventures in Vancouver
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.9)" }}>
            Mountains, ocean, rainforests, and beaches — all within 30 minutes of downtown. Vancouver is an outdoor paradise for families.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-5">
            Adventure Awaits at Every Turn
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            Few cities in the world offer the outdoor variety that Vancouver does. You can kayak in the morning, hike a mountain in the afternoon, and watch the sunset from a sandy beach — all without leaving the metro area. Here are our favourite family-friendly outdoor adventures.
          </p>
        </div>
      </section>

      {/* Adventures Grid */}
      <section className="bg-[#f8f9fa] py-20 px-5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {adventures.map((adv) => (
            <div key={adv.name} className="bg-white rounded-xl shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <img src={adv.image} alt={adv.name} className="w-full h-56 object-cover" />
              <div className="p-6">
                <div className="flex gap-2 mb-3 flex-wrap">
                  <span className="text-xs font-semibold px-2.5 py-1 bg-[#5f8f4a]/10 text-[#2d5016] rounded-full">{adv.type}</span>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-amber-50 text-amber-700 rounded-full">{adv.difficulty}</span>
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">{adv.name}</h3>
                <p className="text-sm text-[#5f8f4a] font-medium mb-2">{adv.location}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{adv.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tips with Image */}
      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">
          <div className="flex-1">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">Outdoor Safety Tips</h2>
            <div className="space-y-6">
              {tips.map((tip) => (
                <div key={tip.title}>
                  <h3 className="font-heading text-lg font-bold mb-1">{tip.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{tip.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <img src="/images/parallax-mountains.jpg" alt="Vancouver mountain scenery" className="rounded-xl shadow-2xl w-full sticky top-32" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2d5016] py-16 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold mb-4" style={{ color: "#ffffff" }}>
            Too Rainy for the Outdoors?
          </h2>
          <p className="mb-8 text-lg" style={{ color: "rgba(255,255,255,0.85)" }}>
            Vancouver gets 200 rainy days a year. Check out our indoor activities and rainy day guides for backup plans.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/indoor-activities" className="px-8 py-3.5 bg-white border-2 border-[#2d5016] font-heading text-sm font-semibold uppercase tracking-wider rounded hover:bg-[#2d5016] transition-colors" style={{ color: "#2d5016" }}>
              Indoor Activities
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
