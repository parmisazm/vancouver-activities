import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Things to Do in Vancouver BC | 50+ No-Cost Activities",
  description: "Discover free things to do in Vancouver, BC. 50+ free parks, beaches, festivals, playgrounds, markets, galleries, and nature walks. Family fun on any budget.",
};

const freeActivities = [
  { name: "Stanley Park", desc: "Walk or bike the 10km seawall, explore Beaver Lake, see totem poles, and visit Second and Third Beach. All completely free.", type: "Park", image: "/images/nature-park.jpg" },
  { name: "Lynn Canyon Suspension Bridge", desc: "A free alternative to Capilano — cross the 50m suspension bridge and hike to Twin Falls. The Ecology Centre is also free.", type: "Nature", image: "/images/family-picnic.jpg" },
  { name: "Granville Island Buskers & Market", desc: "Watch street performers, browse the Public Market, and let kids play at the free waterfront playground. Buy nothing and still have a great day.", type: "Culture", image: "/images/farmers-market.jpg" },
  { name: "Kitsilano Beach & Playgrounds", desc: "Sandy beach, ocean swimming (brave the cold!), massive playground, and basketball courts. Free parking on side streets.", type: "Beach", image: "/images/indoor-swim.jpg" },
  { name: "English Bay Beach", desc: "Downtown Vancouver's main beach with sunset views, volleyball nets, and the iconic inukshuk. Perfect for a free evening out.", type: "Beach", image: "/images/hero-2.jpg" },
  { name: "Queen Elizabeth Park", desc: "The highest point in Vancouver with stunning city views, sunken gardens, and a disc golf course. All free to enjoy.", type: "Park", image: "/images/spring-blossoms.jpg" },
  { name: "Lonsdale Quay & Waterfront", desc: "Take the SeaBus (transit fare only) to North Vancouver for waterfront walks, playground, and stunning skyline views.", type: "Urban", image: "/images/hero-3.jpg" },
  { name: "Richmond Olympic Oval Waterfront Trail", desc: "A beautiful paved trail along the Fraser River with playgrounds, public art, and bird watching. Great for strollers.", type: "Nature", image: "/images/family-biking.jpg" },
  { name: "Vancouver Art Gallery (by donation Tuesdays)", desc: "Every Tuesday evening, admission is by donation. See world-class exhibitions and the Emily Carr collection.", type: "Museum", image: "/images/cat-guides.jpg" },
  { name: "New Brighton Pool & Park", desc: "A free outdoor pool in East Vancouver open in summer. Attached to a beach park with playgrounds and picnic areas.", type: "Pool", image: "/images/summer-camp.jpg" },
  { name: "Trout Lake Farmers Market", desc: "Free to browse every Saturday from May to October. Live music, local produce, and food trucks. A great family Saturday morning.", type: "Market", image: "/images/farmers-market.jpg" },
  { name: "Spray Parks & Water Parks", desc: "Over 30 free spray parks across Vancouver. Lumberman's Arch, Granville Island, and Charleson Park are favourites.", type: "Water Play", image: "/images/kids-splash.jpg" },
  { name: "Gastown Steam Clock & Walking Tour", desc: "See the famous steam clock, browse cobblestone streets, and learn Vancouver's oldest neighbourhood history — all free.", type: "Urban", image: "/images/hood-gastown.jpg" },
  { name: "Pacific Spirit Regional Park", desc: "73km of trails through temperate rainforest. Flat, stroller-friendly trails and mountain biking routes. Free parking.", type: "Nature", image: "/images/parallax-mountains.jpg" },
  { name: "Community Centre Free Swim Times", desc: "Vancouver Parks Board offers free family swim at community pools on select evenings. Check your local centre schedule.", type: "Pool", image: "/images/kids-swimming.jpg" },
];

const seasonalFree = [
  { season: "Spring", activities: ["Cherry Blossom Festival walks (40,000+ trees)", "Vancouver Sun Run spectating", "Earth Day beach cleanups", "Garden tours at VanDusen (free days)"] },
  { season: "Summer", activities: ["Celebration of Light fireworks (English Bay)", "Canada Day at Canada Place", "Free outdoor movies in Stanley Park", "Kitsilano Showboat performances"] },
  { season: "Fall", activities: ["Salmon spawning at Goldstream Provincial Park", "Pumpkin patches (free entry, pay for pumpkins)", "Thanksgiving at Queen Elizabeth Park", "Fall foliage walks in Pacific Spirit"] },
  { season: "Winter", activities: ["Christmas at Canada Place", "Bright Nights in Stanley Park (donation)", "Ice skating at Robson Square (free, rental extra)", "Polar Bear Swim at English Bay (January 1)"] },
];

const seasonColors: Record<string, string> = {
  Spring: "bg-pink-50 text-pink-700",
  Summer: "bg-amber-50 text-amber-700",
  Fall: "bg-orange-50 text-orange-700",
  Winter: "bg-sky-50 text-sky-700",
};

export default function FreeThingsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[420px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/beach-sunset.jpg')" }}>
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4" style={{ color: "#ffffff" }}>
            Free Things to Do in Vancouver
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.9)" }}>
            You do not need to spend a dime to have an amazing day in Vancouver. Parks, beaches, festivals, and nature — all completely free.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-5">15+ Free Activities for Families</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            Vancouver is one of the most expensive cities in Canada, but the best things here are free. From the world-famous Stanley Park Seawall to quiet forest trails and sandy beaches, you can fill entire weekends without opening your wallet.
          </p>
        </div>
      </section>

      {/* Activity Grid */}
      <section className="bg-[#f8f9fa] py-20 px-5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {freeActivities.map((act) => (
            <div key={act.name} className="bg-white rounded-xl shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <img src={act.image} alt={act.name} className="w-full h-44 object-cover" />
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold px-2.5 py-1 bg-[#5f8f4a]/10 text-[#2d5016] rounded-full">{act.type}</span>
                  <span className="text-xs font-bold px-2.5 py-1 bg-green-50 text-green-700 rounded-full">FREE</span>
                </div>
                <h3 className="font-heading text-base font-bold mb-1">{act.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{act.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Seasonal Free Activities */}
      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-10 text-center">Free Activities by Season</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasonalFree.map((s) => (
              <div key={s.season} className="bg-white rounded-xl shadow-md p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 ${seasonColors[s.season]}`}>{s.season}</span>
                <ul className="space-y-2">
                  {s.activities.map((a) => (
                    <li key={a} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-[#5f8f4a] mt-1 shrink-0">&#10003;</span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2d5016] py-16 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold mb-4" style={{ color: "#ffffff" }}>
            Want Even More Ideas?
          </h2>
          <p className="mb-8 text-lg" style={{ color: "rgba(255,255,255,0.85)" }}>
            Browse all activities by category or check out what is happening this weekend in Vancouver.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/things-to-do" className="px-8 py-3.5 bg-white border-2 border-[#2d5016] font-heading text-sm font-semibold uppercase tracking-wider rounded hover:bg-[#2d5016] transition-colors" style={{ color: "#2d5016" }}>
              All Activities
            </Link>
            <Link href="/this-weekend" className="px-8 py-3.5 border-2 border-white font-heading text-sm font-semibold uppercase tracking-wider rounded hover:bg-white hover:text-[#2d5016] transition-colors" style={{ color: "#ffffff" }}>
              This Weekend
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
