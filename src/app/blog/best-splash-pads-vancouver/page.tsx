import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Splash Pads & Water Parks in Vancouver (2026)",
  description: "Find the best splash pads and spray parks in Vancouver BC. Free outdoor water play for kids with locations, hours, age recommendations, and parking tips.",
};

const splashPads = [
  { name: "Charleson Park Spray Park", hood: "Olympic Village", hours: "10am-8pm (Jun-Sep)", age: "1-8", highlight: "The best spray park in Vancouver. Multiple water jets, spray arches, and ground fountains. Fully fenced playground right beside it. Steps from the Olympic Village seawall. Clean washrooms on site.", image: "/images/kids-splash.jpg" },
  { name: "Lumberman's Arch Water Park", hood: "Stanley Park", hours: "10am-6pm (Jun-Sep)", age: "2-10", highlight: "Iconic Stanley Park spray park surrounded by forest. Large area with spray cannons, jets, and dump buckets. Can get very busy on hot days — arrive before noon. Near the miniature train.", image: "/images/nature-park.jpg" },
  { name: "Hillcrest Park Spray Park", hood: "Riley Park", hours: "10am-8pm (Jun-Sep)", age: "1-8", highlight: "Modern spray features next to Hillcrest Community Centre. Less crowded than Stanley Park or Charleson. Indoor pool and gym at the community centre if you want to extend the outing.", image: "/images/family-park-fun.jpg" },
  { name: "Harbour Green Park Water Feature", hood: "Coal Harbour", hours: "10am-6pm (Jun-Sep)", age: "1-5", highlight: "Gentle ground-level fountains perfect for toddlers. Beautiful waterfront setting with mountain views. Small and manageable — great for little ones who are nervous around bigger spray parks.", image: "/images/beach-sunset.jpg" },
  { name: "Sutcliffe Park Spray Park", hood: "Hastings-Sunrise", hours: "10am-8pm (Jun-Sep)", age: "2-10", highlight: "Brand new spray park attached to one of the best playgrounds in the city. Water cannons, spray arches, and ground jets. Less well-known so it is rarely overcrowded.", image: "/images/family-park-fun.jpg" },
  { name: "Stanley Park Second Beach Pool", hood: "Stanley Park", hours: "Late May-Labour Day", age: "All Ages", highlight: "Heated outdoor pool right on the beach. Not a splash pad, but the best outdoor swimming in Vancouver. Shallow end for kids. Stunning ocean views. $6.55 adult, $3.25 child.", image: "/images/family-beach.jpg" },
  { name: "Kitsilano Pool", hood: "Kitsilano", hours: "Late May-Labour Day", age: "All Ages", highlight: "137m saltwater pool — the longest in Canada. Heated and right on the beach with mountain views. Three lanes for swimming plus a massive shallow area for kids. Free for kids under 3.", image: "/images/kids-swimming.jpg" },
  { name: "New Brighton Pool", hood: "Hastings", hours: "Late May-Labour Day", age: "All Ages", highlight: "Free outdoor saltwater pool on the east side. Hidden gem that most people do not know about. Playground and picnic area nearby. Lifeguards on duty. No admission fee.", image: "/images/family-beach.jpg" },
];

export default function SplashPadsPage() {
  return (
    <>
      <section className="relative h-[420px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/kids-swimming.jpg')" }}>
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <span className="inline-block bg-[#5f8f4a] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">Summer Guide</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4" style={{ color: "#ffffff" }}>
            Best Splash Pads & Water Parks in Vancouver
          </h1>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>Updated June 2026 &middot; 6 min read</p>
        </div>
      </section>

      <article className="py-16 px-5">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            When summer finally arrives in Vancouver, splash pads become the centre of family life. The best part? Almost all of them are completely free. From gentle toddler-friendly fountains to massive spray parks with water cannons, here is every splash pad and outdoor pool worth visiting in Metro Vancouver.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Most spray parks operate from mid-June through September, weather permitting. Pools have set seasons — check the Vancouver Parks Board website for exact opening dates.
          </p>

          {splashPads.map((sp, i) => (
            <div key={sp.name} className="mb-12">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-9 h-9 rounded-full bg-[#2d5016] flex items-center justify-center text-white font-heading font-bold text-sm">{i + 1}</span>
                <h2 className="font-heading text-xl md:text-2xl font-bold">{sp.name}</h2>
              </div>
              <img src={sp.image} alt={sp.name} className="w-full h-64 object-cover rounded-xl mb-4" loading="lazy" />
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs font-semibold px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full">{sp.hood}</span>
                <span className="text-xs font-semibold px-3 py-1 bg-amber-50 text-amber-700 rounded-full">{sp.hours}</span>
                <span className="text-xs font-semibold px-3 py-1 bg-pink-50 text-pink-700 rounded-full">Ages {sp.age}</span>
              </div>
              <p className="text-gray-600 leading-relaxed">{sp.highlight}</p>
            </div>
          ))}

          <div className="bg-[#f0f7ec] rounded-xl p-8 mb-10">
            <h2 className="font-heading text-xl font-bold mb-4" style={{ color: "#2d5016" }}>Splash Pad Packing List</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex gap-2"><span className="text-[#5f8f4a] font-bold">-</span> Swimsuits and water shoes (pavement gets hot)</li>
              <li className="flex gap-2"><span className="text-[#5f8f4a] font-bold">-</span> Sunscreen (reapply every 2 hours)</li>
              <li className="flex gap-2"><span className="text-[#5f8f4a] font-bold">-</span> Towels and a dry change of clothes</li>
              <li className="flex gap-2"><span className="text-[#5f8f4a] font-bold">-</span> Snacks and water bottles (no food vendors at most parks)</li>
              <li className="flex gap-2"><span className="text-[#5f8f4a] font-bold">-</span> Swim diapers for babies and toddlers</li>
              <li className="flex gap-2"><span className="text-[#5f8f4a] font-bold">-</span> Sun hat and UV protective rash guard</li>
              <li className="flex gap-2"><span className="text-[#5f8f4a] font-bold">-</span> Arrive before 11am on hot days to avoid crowds</li>
            </ul>
          </div>

          <h2 className="font-heading text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4 mb-10">
            {[
              { q: "Are splash pads free in Vancouver?", a: "Yes, all spray parks and splash pads in Vancouver parks are completely free. Outdoor pools charge a small fee ($3-7) but some like New Brighton Pool are free." },
              { q: "When do splash pads open in Vancouver?", a: "Most splash pads operate from mid-June through September, depending on weather. Outdoor pools typically open late May and close on Labour Day weekend." },
              { q: "What is the best splash pad for toddlers?", a: "Harbour Green Park has the gentlest water features, perfect for toddlers. Charleson Park is also excellent with its fully fenced area and mix of gentle and active spray features." },
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
              { title: "Family Hikes Near Vancouver", image: "/images/family-hiking.jpg", href: "/blog/family-hikes-vancouver" },
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
          <h2 className="font-heading text-3xl font-bold mb-4" style={{ color: "#ffffff" }}>More Summer Activities</h2>
          <p className="mb-8 text-lg" style={{ color: "rgba(255,255,255,0.85)" }}>Find outdoor adventures, camps, and family activities for summer.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/outdoor-adventures" className="px-8 py-3.5 bg-white border-2 border-[#2d5016] font-heading text-sm font-semibold uppercase tracking-wider rounded hover:bg-[#2d5016] transition-colors" style={{ color: "#2d5016" }}>Outdoor Activities</Link>
            <Link href="/blog" className="px-8 py-3.5 border-2 border-white font-heading text-sm font-semibold uppercase tracking-wider rounded hover:bg-white hover:text-[#2d5016] transition-colors" style={{ color: "#ffffff" }}>All Guides</Link>
          </div>
        </div>
      </section>
    </>
  );
}
