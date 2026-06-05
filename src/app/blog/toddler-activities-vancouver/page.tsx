import type { Metadata } from "next";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What are the best indoor activities for toddlers in Vancouver?", acceptedAnswer: { "@type": "Answer", text: "Granville Island Kids Market, Crash Crawly's toddler zone, library storytimes, and rec centre drop-in gym times are the top indoor options for toddlers in Vancouver." } },
    { "@type": "Question", name: "Are there free toddler activities in Vancouver?", acceptedAnswer: { "@type": "Answer", text: "Yes. Library Baby & Toddler Time, community centre drop-in gym, playground visits, splash pads, and Pacific Spirit Park walks are all completely free." } },
    { "@type": "Question", name: "What age is considered a toddler?", acceptedAnswer: { "@type": "Answer", text: "Generally ages 1 to 3. Activities on this list are designed for children who are walking but not yet in preschool (ages 4-5)." } },
  ],
};

export const metadata: Metadata = {
  title: "Best Toddler Activities in Vancouver (Ages 1-3)",
  description: "Best toddler activities in Vancouver BC for ages 1-3. Indoor play spaces, outdoor parks, splash pads, library storytimes, and swimming. Local parent picks.",
};

const activities = [
  { name: "Granville Island Kids Market", desc: "The toddler paradise of Vancouver. Ball pits, mini slides, a play bakery, train tables, and toy stores. Pair with a walk along the seawall and lunch at the Public Market. Easy to spend a whole morning here.", age: "1-4", type: "Indoor Play", image: "/images/hood-granville.jpg" },
  { name: "Vancouver Public Library Baby & Toddler Time", desc: "Free drop-in sessions at branches across the city. 30 minutes of songs, rhymes, stories, and movement activities. Great for socialization and routine. Check vpl.ca for your nearest branch schedule.", age: "0-3", type: "Free", image: "/images/library-kids.jpg" },
  { name: "Charleson Park Splash Pad", desc: "Gentle spray features perfect for toddlers who are not ready for pools. Fully fenced playground right next to it with age-appropriate equipment. Steps from the Olympic Village seawall.", age: "1-4", type: "Outdoor", image: "/images/kids-splash.jpg" },
  { name: "Crash Crawly's Toddler Zone", desc: "Dedicated toddler area separate from the big kids. Soft play structures, mini slides, ball pit, and a ride-on toy track. Clean, climate-controlled, and open rain or shine. Socks required.", age: "1-4", type: "Indoor Play", image: "/images/indoor-pool.jpg" },
  { name: "Stanley Park Miniature Train", desc: "A gentle 2 km ride through the forest on a scaled-down train. Toddlers love it. Seasonal themes — Easter, Halloween, and Bright Nights at Christmas. Book online during busy seasons.", age: "1+", type: "Attraction", image: "/images/nature-park.jpg" },
  { name: "Harbour Green Park", desc: "Small, manageable playground right on the Coal Harbour waterfront. Low structures perfect for new walkers and early climbers. Watch the seaplanes land while the kids play. Coffee shops nearby.", age: "1-3", type: "Outdoor", image: "/images/beach-sunset.jpg" },
  { name: "Newton Wave Pool (Toddler Pool)", desc: "Warm, shallow leisure pool perfect for toddlers. Gentle water features and zero-depth entry so little ones can wade in. Family change rooms with toddler-height fixtures. Very affordable.", age: "1+", type: "Swimming", image: "/images/newton-wave-pool.jpg" },
  { name: "Music Together Classes", desc: "Parent-and-child music classes offered at community centres across Vancouver. Instruments, singing, movement, and sensory play. Research shows music classes at this age boost language development.", age: "0-4", type: "Class", image: "/images/toddler-play.jpg" },
  { name: "Pacific Spirit Park (Stroller Trails)", desc: "Wide, flat forest trails perfect for stroller walks. The nature exposure is incredible for toddlers — birds, squirrels, mushrooms, and ferns. The Imperial Trail and Salish Trail are the best for strollers.", age: "All", type: "Outdoor", image: "/images/nature-park.jpg" },
  { name: "Rec Centre Drop-In Gym Time", desc: "Many Vancouver community centres offer free or cheap drop-in gym sessions for toddlers. Mats, balls, ride-on toys, and tunnels in a big gym space. Perfect for burning energy on rainy days.", age: "1-4", type: "Free", image: "/images/family-park-fun.jpg" },
];

export default function ToddlerActivitiesPage() {
  return (
    <>
      <StructuredData data={faqSchema} />
      <section className="relative h-[420px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/toddler-play.jpg')" }}>
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <span className="inline-block bg-[#5f8f4a] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">Ages 1-3</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4" style={{ color: "#ffffff" }}>
            Best Toddler Activities in Vancouver
          </h1>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>Updated June 2026 &middot; 7 min read</p>
        </div>
      </section>

      <article className="py-16 px-5">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Finding activities for toddlers in Vancouver requires a different lens than for older kids. You need places that are safe for wobbly walkers, not too overwhelming with noise and crowds, and ideally close to a washroom with a change table. Bonus points if there is coffee for you nearby.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            We have been through the toddler years with three kids in Vancouver. These are the places we went back to again and again.
          </p>

          {activities.map((act, i) => (
            <div key={act.name} className="mb-12">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-9 h-9 rounded-full bg-[#2d5016] flex items-center justify-center text-white font-heading font-bold text-sm">{i + 1}</span>
                <h2 className="font-heading text-xl md:text-2xl font-bold">{act.name}</h2>
              </div>
              <img src={act.image} alt={act.name} className="w-full h-64 object-cover rounded-xl mb-4" loading="lazy" />
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs font-semibold px-3 py-1 bg-pink-50 text-pink-700 rounded-full">Ages {act.age}</span>
                <span className="text-xs font-semibold px-3 py-1 bg-green-50 text-green-700 rounded-full">{act.type}</span>
              </div>
              <p className="text-gray-600 leading-relaxed">{act.desc}</p>
            </div>
          ))}

          <div className="bg-[#f0f7ec] rounded-xl p-8 mb-10">
            <h2 className="font-heading text-xl font-bold mb-4" style={{ color: "#2d5016" }}>Toddler Outing Survival Kit</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex gap-2"><span className="text-[#5f8f4a] font-bold">-</span> Snacks (always more than you think you need)</li>
              <li className="flex gap-2"><span className="text-[#5f8f4a] font-bold">-</span> Change of clothes (especially near water)</li>
              <li className="flex gap-2"><span className="text-[#5f8f4a] font-bold">-</span> Wipes and diapers</li>
              <li className="flex gap-2"><span className="text-[#5f8f4a] font-bold">-</span> Comfort item (favourite stuffie or blanket)</li>
              <li className="flex gap-2"><span className="text-[#5f8f4a] font-bold">-</span> Plan around nap time — mornings are best</li>
              <li className="flex gap-2"><span className="text-[#5f8f4a] font-bold">-</span> Lower expectations — if they had fun for 45 minutes, that is a win</li>
            </ul>
          </div>

          <h2 className="font-heading text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4 mb-10">
            {[
              { q: "What are the best indoor activities for toddlers in Vancouver?", a: "Granville Island Kids Market, Crash Crawly's toddler zone, library storytimes, and rec centre drop-in gym times are the top indoor options for toddlers in Vancouver." },
              { q: "Are there free toddler activities in Vancouver?", a: "Yes. Library Baby & Toddler Time, community centre drop-in gym, playground visits, splash pads, and Pacific Spirit Park walks are all completely free." },
              { q: "What age is considered a toddler?", a: "Generally ages 1 to 3. Activities on this list are designed for children who are walking but not yet in preschool (ages 4-5). Some activities work for older babies (10+ months) who are cruising." },
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
              { title: "Rainy Day Indoor Activities", image: "/images/rainy-day.jpg", href: "/blog/rainy-day-indoor-activities" },
              { title: "Best Splash Pads in Vancouver", image: "/images/kids-swimming.jpg", href: "/blog/best-splash-pads-vancouver" },
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
          <h2 className="font-heading text-3xl font-bold mb-4" style={{ color: "#ffffff" }}>More Kids Activities</h2>
          <p className="mb-8 text-lg" style={{ color: "rgba(255,255,255,0.85)" }}>Browse activities for all ages across Vancouver.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/kids-activities" className="px-8 py-3.5 bg-white border-2 border-[#2d5016] font-heading text-sm font-semibold uppercase tracking-wider rounded hover:bg-[#2d5016] transition-colors" style={{ color: "#2d5016" }}>Kids Activities</Link>
            <Link href="/blog" className="px-8 py-3.5 border-2 border-white font-heading text-sm font-semibold uppercase tracking-wider rounded hover:bg-white hover:text-[#2d5016] transition-colors" style={{ color: "#ffffff" }}>All Guides</Link>
          </div>
        </div>
      </section>
    </>
  );
}
