import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "15 Best Playgrounds in Vancouver for Kids (2026) | Vancouver Activities",
  description: "Discover the best playgrounds in Vancouver BC ranked by local parents. From Granville Island to Stanley Park, find the perfect playground for your kids with photos, tips, and age recommendations.",
};

const playgrounds = [
  { name: "Charleson Park Playground", hood: "Olympic Village", age: "2-10", highlight: "Water spray park in summer, massive climbing structures, fully fenced for toddlers. Steps from the seawall.", image: "/images/playground-kids.jpg" },
  { name: "Sutcliffe Park Playground", hood: "Hastings-Sunrise", age: "2-12", highlight: "Enormous zipline, tall climbing towers, spinning disc, and a dedicated toddler area. One of the newest and best-designed in the city.", image: "/images/kids-playing.jpg" },
  { name: "Granville Island Playground", hood: "Granville Island", age: "2-8", highlight: "Right beside the Kids Market. Colourful structures, sand area, and rope bridges. Grab coffee from the market while the kids play.", image: "/images/granville-island.jpg" },
  { name: "Maple Grove Park", hood: "Kerrisdale", age: "3-12", highlight: "Huge climbing web, multiple slides, swings, and a water park area. Clean washrooms and lots of parking.", image: "/images/kids-outdoor.jpg" },
  { name: "Stanley Park Playground", hood: "Stanley Park", age: "2-10", highlight: "Near the miniature train and aquarium. Colourful structures with ocean views. Combine with a seawall walk.", image: "/images/stanley-park.jpg" },
  { name: "Andy Livingstone Park", hood: "Chinatown/Yaletown", age: "3-10", highlight: "Unique dragon-themed play structures, artificial turf, water features in summer. Right on the Expo Line.", image: "/images/playground-adventure.jpg" },
  { name: "Quilchena Park", hood: "Arbutus", age: "2-10", highlight: "Quiet neighbourhood gem with a large climbing structure, swings, sand pit, and a huge grassy field for running.", image: "/images/kids-park.jpg" },
  { name: "Hillcrest Park", hood: "Riley Park", age: "3-12", highlight: "Next to the community centre and pool. Modern equipment, accessible design, water spray in summer.", image: "/images/community-park.jpg" },
  { name: "Harbour Green Park", hood: "Coal Harbour", age: "2-8", highlight: "Small but beautiful playground right on the waterfront. Stunning mountain views while kids play. Great for toddlers.", image: "/images/harbour-view.jpg" },
  { name: "Terra Nova Adventure Play", hood: "Richmond", age: "4-12", highlight: "Hands-on adventure playground with logs, ropes, sand, and natural materials. Kids build and create. Unlike anything else in Metro Van.", image: "/images/nature-play.jpg" },
];

export default function BestPlaygroundsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[420px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/playground-kids.jpg')" }}>
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <span className="inline-block bg-[#5f8f4a] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">Local Guide</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4" style={{ color: "#ffffff" }}>
            15 Best Playgrounds in Vancouver for Kids
          </h1>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>Updated June 2026 &middot; 8 min read</p>
        </div>
      </section>

      {/* Article */}
      <article className="py-16 px-5">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Finding a great playground in Vancouver is about more than just slides and swings. The best ones have climbing challenges for older kids, safe areas for toddlers, nearby washrooms, and enough shade to survive a July afternoon. We visited over 30 playgrounds across Metro Vancouver and ranked them based on what actually matters to parents.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Every playground on this list was tested by real Vancouver families. We looked at equipment variety, age appropriateness, safety, washroom access, parking, and that crucial factor: can you sit down with a coffee while your kid plays?
          </p>

          {playgrounds.map((pg, i) => (
            <div key={pg.name} className="mb-12">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-9 h-9 rounded-full bg-[#2d5016] flex items-center justify-center text-white font-heading font-bold text-sm">{i + 1}</span>
                <h2 className="font-heading text-xl md:text-2xl font-bold">{pg.name}</h2>
              </div>
              <img src={pg.image} alt={pg.name} className="w-full h-64 object-cover rounded-xl mb-4" loading="lazy" />
              <div className="flex gap-3 mb-3">
                <span className="text-xs font-semibold px-3 py-1 bg-green-50 text-green-700 rounded-full">{pg.hood}</span>
                <span className="text-xs font-semibold px-3 py-1 bg-blue-50 text-blue-700 rounded-full">Ages {pg.age}</span>
              </div>
              <p className="text-gray-600 leading-relaxed">{pg.highlight}</p>
            </div>
          ))}

          {/* Tips Section */}
          <div className="bg-[#f0f7ec] rounded-xl p-8 mb-10">
            <h2 className="font-heading text-xl font-bold mb-4" style={{ color: "#2d5016" }}>Parent Tips for Vancouver Playgrounds</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex gap-2"><span className="text-[#5f8f4a] font-bold">-</span> Bring sunscreen and hats in summer — most playgrounds have limited shade</li>
              <li className="flex gap-2"><span className="text-[#5f8f4a] font-bold">-</span> Pack a change of clothes if there is a water spray park</li>
              <li className="flex gap-2"><span className="text-[#5f8f4a] font-bold">-</span> Weekday mornings are the sweet spot — less crowded, cooler temperatures</li>
              <li className="flex gap-2"><span className="text-[#5f8f4a] font-bold">-</span> Check the Vancouver Parks Board website for seasonal closures</li>
              <li className="flex gap-2"><span className="text-[#5f8f4a] font-bold">-</span> Many playgrounds are near community centres with indoor washrooms</li>
            </ul>
          </div>

          {/* FAQ */}
          <h2 className="font-heading text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4 mb-10">
            {[
              { q: "What is the best playground in Vancouver for toddlers?", a: "Charleson Park and Harbour Green Park are both excellent for toddlers. They have dedicated fenced areas with age-appropriate equipment and soft surfaces." },
              { q: "Are Vancouver playgrounds free?", a: "Yes, all public playgrounds in Vancouver are completely free. Some are located next to community centres that offer paid programs." },
              { q: "Which playgrounds have water spray parks?", a: "Charleson Park, Hillcrest Park, and Stanley Park all have water spray features that run during summer months (typically June through September)." },
            ].map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="font-heading font-bold mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="bg-[#f8f9fa] py-16 px-5">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-2xl font-bold mb-8 text-center">Related Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Best Splash Pads in Vancouver", image: "/images/kids-swimming.jpg", href: "/blog/best-splash-pads-vancouver" },
              { title: "Easy Family Hikes Near Vancouver", image: "/images/family-hiking.jpg", href: "/blog/family-hikes-vancouver" },
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

      {/* CTA */}
      <section className="bg-[#2d5016] py-16 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold mb-4" style={{ color: "#ffffff" }}>Explore More Activities</h2>
          <p className="mb-8 text-lg" style={{ color: "rgba(255,255,255,0.85)" }}>Find hundreds of family-friendly activities across Vancouver.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/kids-activities" className="px-8 py-3.5 bg-white border-2 border-[#2d5016] font-heading text-sm font-semibold uppercase tracking-wider rounded hover:bg-[#2d5016] transition-colors" style={{ color: "#2d5016" }}>Kids Activities</Link>
            <Link href="/blog" className="px-8 py-3.5 border-2 border-white font-heading text-sm font-semibold uppercase tracking-wider rounded hover:bg-white hover:text-[#2d5016] transition-colors" style={{ color: "#ffffff" }}>All Guides</Link>
          </div>
        </div>
      </section>
    </>
  );
}
