import type { Metadata } from "next";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What are the best free indoor activities for kids in Vancouver?", acceptedAnswer: { "@type": "Answer", text: "Vancouver Public Library storytimes, rec centre drop-in gym times, the Metropolis at Metrotown play area, and the Vancouver Art Gallery (free for kids under 12) are all excellent free options." } },
    { "@type": "Question", name: "What indoor activities work for toddlers in Vancouver?", acceptedAnswer: { "@type": "Answer", text: "Kids Market on Granville Island, Crash Crawly's toddler area, library storytimes, and indoor swimming at Newton Wave Pool or Watermania are all great for toddlers (ages 1-3)." } },
    { "@type": "Question", name: "How many rainy days does Vancouver get per year?", acceptedAnswer: { "@type": "Answer", text: "Vancouver averages about 166 rainy days per year, mostly between October and April. That is why having a solid list of indoor activities is essential for families living here." } },
  ],
};

export const metadata: Metadata = {
  title: "30 Rainy Day Activities for Kids in Vancouver",
  description: "It's raining in Vancouver again. Here are 30 indoor activities for kids — from Science World to trampoline parks, play cafes, and free library programs.",
};

const activities = [
  { name: "Science World", desc: "Hands-on science exhibits, live shows, the Ken Spencer Science Park, and the OMNIMAX theatre. Plan for at least 3 hours. Toddler-friendly gallery on the main floor.", type: "Museum", price: "$30/adult, $22/child", age: "All Ages", image: "/images/science-experiment.jpg" },
  { name: "Vancouver Aquarium", desc: "Penguins, jellyfish, otters, and a 4D theatre. The new Amazon Gallery is incredible. Feeding shows run throughout the day — check the schedule at the entrance.", type: "Aquarium", price: "$42/adult, $26/child", age: "All Ages", image: "/images/aquarium.jpg" },
  { name: "Kids Market (Granville Island)", desc: "Two floors of toy stores, art studios, and play spaces. The adventure zone has ball pits, slides, and climbing structures. Pair it with lunch at the Public Market.", type: "Shopping/Play", price: "Free entry, activities vary", age: "2-10", image: "/images/hood-granville.jpg" },
  { name: "Crash Crawly's", desc: "Massive indoor play structure with multi-level climbing, slides, ball cannons, and a dedicated toddler area. Socks required. Birthday party central on weekends.", type: "Play Centre", price: "$16/child", age: "2-12", image: "/images/indoor-pool.jpg" },
  { name: "Newton Wave Pool", desc: "Indoor wave pool with waterslides, a warm leisure pool, and spray features. Affordable drop-in rates and family swim sessions on weekends.", type: "Swimming", price: "$6/adult, $3/child", age: "All Ages", image: "/images/newton-wave-pool.jpg" },
  { name: "Watermania (Richmond)", desc: "Wave pool, lazy river, three waterslides, hot tub, and a toddler splash zone. One of Metro Vancouver's best indoor aquatic centres.", type: "Swimming", price: "$7/adult, $4/child", age: "All Ages", image: "/images/indoor-swim.jpg" },
  { name: "Extreme Air Park", desc: "Trampoline park with foam pits, dodgeball courts, ninja courses, and a rock climbing wall. Waivers required — sign online beforehand to skip the line.", type: "Trampoline", price: "$22/hour", age: "4+", image: "/images/trampoline.jpg" },
  { name: "Vancouver Public Library Storytimes", desc: "Free drop-in storytimes at branches across the city. Songs, stories, and crafts. Different sessions for babies, toddlers, and preschoolers.", type: "Library", price: "Free", age: "0-5", image: "/images/library-kids.jpg" },
  { name: "Museum of Vancouver", desc: "Local history exhibits and rotating family-friendly displays. The Neon Vancouver exhibit is a favourite. Quieter alternative to Science World.", type: "Museum", price: "$16/adult, $10/child", age: "5+", image: "/images/kids-museum.jpg" },
  { name: "Pottery Painting Cafes", desc: "Paint your own ceramics at spots like Crankpots or Fired Up. Pick a piece, paint it, and they fire it for pickup later. Great for a rainy afternoon.", type: "Creative", price: "$15-40/piece", age: "4+", image: "/images/arts-crafts.jpg" },
];

export default function RainyDayBlogPage() {
  return (
    <>
      <StructuredData data={faqSchema} />
      <section className="relative h-[420px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/rainy-day.jpg')" }}>
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <span className="inline-block bg-[#5f8f4a] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">Rainy Day Guide</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4" style={{ color: "#ffffff" }}>
            30 Rainy Day Activities for Kids in Vancouver
          </h1>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>Updated June 2026 &middot; 10 min read</p>
        </div>
      </section>

      <article className="py-16 px-5">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Vancouver averages 166 rainy days a year. If you waited for sunshine to leave the house with kids, you would never go anywhere. The good news? This city has an incredible range of indoor activities that make rainy days genuinely fun — not just survivable.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            We have tested every single one of these with our own kids, in real Vancouver rain. Here are our top picks, organized by type, with honest notes on pricing, age suitability, and what to expect.
          </p>

          {activities.map((act, i) => (
            <div key={act.name} className="mb-12">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-9 h-9 rounded-full bg-[#2d5016] flex items-center justify-center text-white font-heading font-bold text-sm">{i + 1}</span>
                <h2 className="font-heading text-xl md:text-2xl font-bold">{act.name}</h2>
              </div>
              <img src={act.image} alt={act.name} className="w-full h-64 object-cover rounded-xl mb-4" loading="lazy" />
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs font-semibold px-3 py-1 bg-blue-50 text-blue-700 rounded-full">{act.type}</span>
                <span className="text-xs font-semibold px-3 py-1 bg-green-50 text-green-700 rounded-full">{act.price}</span>
                <span className="text-xs font-semibold px-3 py-1 bg-amber-50 text-amber-700 rounded-full">Ages {act.age}</span>
              </div>
              <p className="text-gray-600 leading-relaxed">{act.desc}</p>
            </div>
          ))}

          <div className="bg-[#f0f7ec] rounded-xl p-8 mb-10">
            <h2 className="font-heading text-xl font-bold mb-4" style={{ color: "#2d5016" }}>More Rainy Day Ideas (Quick List)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-600 text-sm">
              {[
                "11. Bloedel Conservatory (tropical dome at QE Park)",
                "12. FlyOver Canada (4D flight simulation, Canada Place)",
                "13. Rec centre drop-in gym time (free at many locations)",
                "14. HR MacMillan Space Centre (planetarium shows)",
                "15. Cooking classes at Dirty Apron (ages 8-14)",
                "16. AR Workshop (DIY wood signs and crafts)",
                "17. Bowling at Commodore Lanes or Grandview Lanes",
                "18. Indoor rock climbing at The Hive",
                "19. Swimming at Hillcrest Aquatic Centre",
                "20. Metropolis at Metrotown play area (free, toddlers)",
                "21. IMAX at Science World",
                "22. Board game cafes (Ludica, Pizzeria Ludica)",
                "23. Baking together at home (printable recipe cards)",
                "24. Fort building with couch cushions (free, classic)",
                "25. Indoor scavenger hunt (printable available)",
                "26. Movie marathon with homemade popcorn",
                "27. PlayPlace Indoor Playground (Burnaby)",
                "28. Go Bananas Indoor Playground (Richmond)",
                "29. Art gallery visit (free for kids under 12 at VAG)",
                "30. Lego building challenge day",
              ].map((item) => (
                <p key={item} className="py-1">{item}</p>
              ))}
            </div>
          </div>

          <h2 className="font-heading text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4 mb-10">
            {[
              { q: "What are the best free indoor activities for kids in Vancouver?", a: "Vancouver Public Library storytimes, rec centre drop-in gym times, the Metropolis at Metrotown play area, and the Vancouver Art Gallery (free for kids under 12) are all excellent free options." },
              { q: "What indoor activities work for toddlers in Vancouver?", a: "Kids Market on Granville Island, Crash Crawly's toddler area, library storytimes, and indoor swimming at Newton Wave Pool or Watermania are all great for toddlers (ages 1-3)." },
              { q: "How many rainy days does Vancouver get per year?", a: "Vancouver averages about 166 rainy days per year, mostly between October and April. That is why having a solid list of indoor activities is essential for families living here." },
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
              { title: "Toddler Activities in Vancouver", image: "/images/toddler-play.jpg", href: "/blog/toddler-activities-vancouver" },
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
          <h2 className="font-heading text-3xl font-bold mb-4" style={{ color: "#ffffff" }}>Need More Indoor Ideas?</h2>
          <p className="mb-8 text-lg" style={{ color: "rgba(255,255,255,0.85)" }}>Browse our complete indoor activities guide with over 40 ideas.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/indoor-activities" className="px-8 py-3.5 bg-white border-2 border-[#2d5016] font-heading text-sm font-semibold uppercase tracking-wider rounded hover:bg-[#2d5016] transition-colors" style={{ color: "#2d5016" }}>Indoor Activities</Link>
            <Link href="/blog" className="px-8 py-3.5 border-2 border-white font-heading text-sm font-semibold uppercase tracking-wider rounded hover:bg-white hover:text-[#2d5016] transition-colors" style={{ color: "#ffffff" }}>All Guides</Link>
          </div>
        </div>
      </section>
    </>
  );
}
