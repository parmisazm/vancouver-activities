import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "15 Free Things to Do in Vancouver This Spring (2026) | Vancouver Activities",
  description: "Cherry blossoms, beach walks, markets, and festivals — completely free. Our top picks for enjoying Vancouver without spending a dime this spring.",
};

const activities = [
  { name: "Cherry Blossom Walks", desc: "Over 40,000 cherry trees bloom across Vancouver from late March to mid-April. The best streets are on West 7th Ave (Arbutus to Cambie), Graveley Street (Commercial to Victoria), and Queen Elizabeth Park. Free, stunning, and perfect for family photos.", image: "/images/spring-blossoms.jpg" },
  { name: "Kitsilano Beach Sunset Walk", desc: "Walk the shoreline from Kits Beach to Jericho Beach during golden hour. Mountain views, driftwood forts, and tide pools along the way. Pack a thermos of hot chocolate for the kids.", image: "/images/sunset-beach.jpg" },
  { name: "Granville Island Busker Performances", desc: "Street performers set up along the waterfront near the Public Market daily. Musicians, magicians, jugglers, and living statues. Tipping is appreciated but not required. Kids are mesmerized.", image: "/images/hood-granville.jpg" },
  { name: "Stanley Park Nature Walks", desc: "15 km of trails through old-growth forest, plus the seawall for strollers. Look for great blue herons at the heronry near the tennis courts. Free parking before 9 AM on weekdays.", image: "/images/nature-park.jpg" },
  { name: "Vancouver Art Gallery (Kids Under 12 Free)", desc: "Kids under 12 always get in free. Tuesday evenings are by-donation for everyone. Rotating exhibits plus a dedicated kids gallery with hands-on activities.", image: "/images/art-gallery.jpg" },
  { name: "Trout Lake Farmers Market", desc: "Opens in May. Local produce, baked goods, live music, and craft vendors. Free entry and free samples. The playground next to the market keeps kids busy while you shop.", image: "/images/farmers-market.jpg" },
  { name: "Science World Free Outdoor Park", desc: "The Ken Spencer Science Park outside Science World is completely free. Outdoor exhibits, musical instruments, water features, and a playground. You do not need to pay admission.", image: "/images/science-experiment.jpg" },
  { name: "Community Centre Free Swim Times", desc: "Vancouver Parks Board offers free family swim at community pools on select evenings. Check your local centre schedule online. Bring your own towels and locks.", image: "/images/kids-swimming.jpg" },
  { name: "Lynn Canyon Suspension Bridge", desc: "The free alternative to Capilano Suspension Bridge. Just as beautiful, with swimming holes, waterfalls, and an ecology centre with free exhibits. Saves a family of four over $200.", image: "/images/hiking-trail.jpg" },
  { name: "New Brighton Pool & Beach", desc: "Outdoor saltwater pool right on the beach. Open May through September. Free admission, lifeguards on duty. The beach has a playground and picnic tables. Hidden gem that most tourists miss.", image: "/images/family-beach.jpg" },
  { name: "Playground Hopping", desc: "Make a day of visiting multiple playgrounds. Charleson Park, Sutcliffe Park, and Granville Island are all top-tier. Pack snacks and a picnic blanket. Zero dollars, maximum fun.", image: "/images/kids-playground.jpg" },
  { name: "Library Programs", desc: "Vancouver Public Library runs free storytimes, craft sessions, LEGO clubs, and coding workshops for kids. Every branch has different programs. Check vpl.ca for schedules.", image: "/images/library-kids.jpg" },
  { name: "Second Beach & Third Beach", desc: "Two beautiful beaches in Stanley Park. Second Beach has a playground, picnic area, and the heated outdoor pool ($). Third Beach is quieter with stunning sunset views. Both beaches are free.", image: "/images/family-beach.jpg" },
  { name: "Bird Watching at Reifel Bird Sanctuary", desc: "Not free ($5/adult, free for kids under 3) but worth mentioning for spring. Thousands of migratory birds, baby owls, and herons. Bring binoculars and bird guides from the library.", image: "/images/nature-park.jpg" },
  { name: "Seawall Bike Ride", desc: "Rent bikes (or bring your own) and ride the 28 km seawall from Coal Harbour through Stanley Park to Spanish Banks. The bike lane is separated from pedestrians. Helmets required by law in BC.", image: "/images/family-biking.jpg" },
];

export default function FreeThingsSpringPage() {
  return (
    <>
      <section className="relative h-[420px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/spring-blossoms.jpg')" }}>
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <span className="inline-block bg-[#5f8f4a] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">Free Activities</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4" style={{ color: "#ffffff" }}>
            15 Free Things to Do in Vancouver This Spring
          </h1>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>Updated June 2026 &middot; 7 min read</p>
        </div>
      </section>

      <article className="py-16 px-5">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Vancouver is an expensive city, but enjoying it does not have to be. Spring is the best season to take advantage of everything this city offers for free — cherry blossoms, beaches, markets, parks, and community programs that cost absolutely nothing.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Here are 15 genuinely free (or almost free) things to do with your family this spring in Vancouver.
          </p>

          {activities.map((act, i) => (
            <div key={act.name} className="mb-12">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-9 h-9 rounded-full bg-[#2d5016] flex items-center justify-center text-white font-heading font-bold text-sm">{i + 1}</span>
                <h2 className="font-heading text-xl md:text-2xl font-bold">{act.name}</h2>
              </div>
              <img src={act.image} alt={act.name} className="w-full h-64 object-cover rounded-xl mb-4" loading="lazy" />
              <p className="text-gray-600 leading-relaxed">{act.desc}</p>
            </div>
          ))}

          <h2 className="font-heading text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4 mb-10">
            {[
              { q: "When is cherry blossom season in Vancouver?", a: "Cherry blossoms typically bloom from late March to mid-April in Vancouver. Peak bloom varies by variety — early bloomers start in March, while late varieties can last into early May." },
              { q: "What is free to do in Vancouver with kids?", a: "Playgrounds, beaches, library programs, Stanley Park trails, cherry blossom walks, community centre free swim times, Granville Island buskers, and the outdoor Science World park are all completely free." },
              { q: "Is Lynn Canyon Bridge really free?", a: "Yes, Lynn Canyon Suspension Bridge and park are 100% free, unlike the Capilano Suspension Bridge which charges $62 per adult. The experience is very similar — beautiful forest, suspension bridge, and hiking trails." },
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
              { title: "Rainy Day Indoor Activities", image: "/images/rainy-day.jpg", href: "/blog/rainy-day-indoor-activities" },
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
          <h2 className="font-heading text-3xl font-bold mb-4" style={{ color: "#ffffff" }}>Find More Free Activities</h2>
          <p className="mb-8 text-lg" style={{ color: "rgba(255,255,255,0.85)" }}>Browse our complete guide to free things to do in Vancouver.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/free-things-to-do" className="px-8 py-3.5 bg-white border-2 border-[#2d5016] font-heading text-sm font-semibold uppercase tracking-wider rounded hover:bg-[#2d5016] transition-colors" style={{ color: "#2d5016" }}>Free Activities</Link>
            <Link href="/blog" className="px-8 py-3.5 border-2 border-white font-heading text-sm font-semibold uppercase tracking-wider rounded hover:bg-white hover:text-[#2d5016] transition-colors" style={{ color: "#ffffff" }}>All Guides</Link>
          </div>
        </div>
      </section>
    </>
  );
}
