import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Vancouver Activities - Family Guides & Local Tips",
  description: "Vancouver family guides written by local parents. Best playgrounds, rainy day activities, family hikes, splash pads, toddler activities, and free things to do.",
};

const posts = [
  {
    id: "playgrounds",
    title: "15 Best Playgrounds in Vancouver for Kids",
    date: "June 1, 2026",
    category: "Local Guide",
    categoryColor: "bg-orange-50 text-orange-700",
    image: "/images/kids-playground.jpg",
    intro: "We visited over 30 playgrounds across Metro Vancouver and ranked them based on what actually matters to parents — equipment variety, toddler areas, washrooms, shade, and whether you can sit down with a coffee.",
    items: [
      { name: "Charleson Park Playground", detail: "Olympic Village — Ages 2-10. Water spray park in summer, massive climbing structures, fully fenced for toddlers. Steps from the seawall.", image: "/images/family-park-fun.jpg" },
      { name: "Sutcliffe Park Playground", detail: "Hastings-Sunrise — Ages 2-12. Enormous zipline, tall climbing towers, spinning disc, and a dedicated toddler area. One of the newest and best-designed in the city.", image: "/images/playground-slide.jpg" },
      { name: "Granville Island Playground", detail: "Granville Island — Ages 2-8. Right beside the Kids Market. Colourful structures, sand area, and rope bridges. Grab coffee from the market while the kids play.", image: "/images/hood-granville.jpg" },
      { name: "Stanley Park Playground", detail: "Stanley Park — Ages 2-10. Near the miniature train and aquarium. Colourful structures with ocean views. Combine with a seawall walk.", image: "/images/nature-park.jpg" },
      { name: "Maple Grove Park", detail: "Kerrisdale — Ages 3-12. Huge climbing web, multiple slides, swings, and a water park area. Clean washrooms and lots of parking.", image: "/images/kids-splash.jpg" },
    ],
  },
  {
    id: "rainy-day",
    title: "30 Rainy Day Activities for Kids in Vancouver",
    date: "May 28, 2026",
    category: "Rainy Day",
    categoryColor: "bg-blue-50 text-blue-700",
    image: "/images/rainy-day.jpg",
    intro: "Vancouver averages 166 rainy days a year. If you waited for sunshine to leave the house with kids, you would never go anywhere. Here are 30 indoor activities that make rainy days genuinely fun.",
    items: [
      { name: "Science World", detail: "All Ages — $30/adult, $22/child. Hands-on science exhibits, live shows, and the OMNIMAX theatre. Plan for at least 3 hours.", image: "/images/science-experiment.jpg" },
      { name: "Vancouver Aquarium", detail: "All Ages — $42/adult, $26/child. Penguins, jellyfish, otters, and a 4D theatre. The Amazon Gallery is incredible.", image: "/images/aquarium.jpg" },
      { name: "Kids Market (Granville Island)", detail: "Ages 2-10 — Free entry. Two floors of toy stores, art studios, and play spaces. Adventure zone with ball pits and slides.", image: "/images/hood-granville.jpg" },
      { name: "Newton Wave Pool", detail: "All Ages — $6/adult, $3/child. Indoor wave pool with waterslides and warm leisure pool. Affordable and great for families.", image: "/images/newton-wave-pool.jpg" },
      { name: "Extreme Air Park", detail: "Ages 4+ — $22/hour. Trampoline park with foam pits, dodgeball courts, ninja courses, and rock climbing wall.", image: "/images/trampoline.jpg" },
    ],
  },
  {
    id: "hikes",
    title: "10 Best Family Hikes Near Vancouver",
    date: "May 20, 2026",
    category: "Outdoor",
    categoryColor: "bg-cyan-50 text-cyan-700",
    image: "/images/family-hiking.jpg",
    intro: "You do not need to drive three hours to find a great family hike. Waterfalls, old-growth forests, ocean viewpoints, and suspension bridges — all within 30 minutes of downtown Vancouver.",
    items: [
      { name: "Lynn Canyon Suspension Bridge & Loop", detail: "North Vancouver — 3.2 km, Easy. Free suspension bridge (skip Capilano and save $60), swimming hole in summer, stunning old-growth forest.", image: "/images/hiking-trail.jpg" },
      { name: "Quarry Rock (Deep Cove)", detail: "North Vancouver — 3.8 km return, Easy. The classic Vancouver family hike. Stunning viewpoint over Deep Cove. Get donuts at Honey Doughnuts after.", image: "/images/north-van.jpg" },
      { name: "Pacific Spirit Regional Park", detail: "UBC — Various loops (2-10 km), Easy. Stroller-friendly. 73 km of trails through coastal forest right in the city.", image: "/images/nature-park.jpg" },
      { name: "Lighthouse Park", detail: "West Vancouver — 5 km loops, Easy-Moderate. Point Atkinson lighthouse with ocean views. Rocky shoreline perfect for tide pools.", image: "/images/beach-sunset.jpg" },
      { name: "Stanley Park Seawall", detail: "Stanley Park — 9 km loop, Easy. Stroller-friendly. The most scenic walk in Vancouver. Fully paved with ocean and mountain views.", image: "/images/family-biking.jpg" },
    ],
  },
  {
    id: "free",
    title: "15 Free Things to Do in Vancouver This Spring",
    date: "May 10, 2026",
    category: "Free Activities",
    categoryColor: "bg-green-50 text-green-700",
    image: "/images/spring-blossoms.jpg",
    intro: "Vancouver is an expensive city, but enjoying it does not have to be. Spring is the best season to take advantage of everything this city offers for free — cherry blossoms, beaches, markets, and community programs.",
    items: [
      { name: "Cherry Blossom Walks", detail: "Over 40,000 cherry trees bloom across Vancouver from late March to mid-April. Best streets: West 7th Ave, Graveley Street, and Queen Elizabeth Park.", image: "/images/spring-blossoms.jpg" },
      { name: "Lynn Canyon Suspension Bridge", detail: "The free alternative to Capilano. Just as beautiful, with swimming holes and waterfalls. Saves a family of four over $200.", image: "/images/hiking-trail.jpg" },
      { name: "Granville Island Busker Performances", detail: "Street performers daily along the waterfront near the Public Market. Musicians, magicians, and living statues. Kids are mesmerized.", image: "/images/street-festival.jpg" },
      { name: "Community Centre Free Swim", detail: "Vancouver Parks Board offers free family swim at community pools on select evenings. Check your local centre schedule.", image: "/images/kids-swimming.jpg" },
      { name: "Trout Lake Farmers Market", detail: "Opens in May. Local produce, baked goods, live music. Free entry and free samples. Playground right next to the market.", image: "/images/farmers-market.jpg" },
    ],
  },
  {
    id: "toddler",
    title: "Best Toddler Activities in Vancouver (Ages 1-3)",
    date: "May 5, 2026",
    category: "Kids",
    categoryColor: "bg-pink-50 text-pink-700",
    image: "/images/toddler-play.jpg",
    intro: "Finding activities for toddlers requires a different lens. You need places that are safe for wobbly walkers, not too overwhelming, and close to a washroom. Bonus if there is coffee for you nearby.",
    items: [
      { name: "Granville Island Kids Market", detail: "Ages 1-4 — Indoor Play. Ball pits, mini slides, train tables, and toy stores. Easy to spend a whole morning here.", image: "/images/hood-granville.jpg" },
      { name: "Library Baby & Toddler Time", detail: "Ages 0-3 — Free. Drop-in sessions with songs, rhymes, and stories at branches across the city. Great for socialization.", image: "/images/kids-reading.jpg" },
      { name: "Charleson Park Splash Pad", detail: "Ages 1-4 — Outdoor. Gentle spray features perfect for toddlers. Fully fenced playground right beside it.", image: "/images/kids-splash.jpg" },
      { name: "Stanley Park Miniature Train", detail: "Ages 1+ — Attraction. A gentle 2 km ride through the forest. Seasonal themes for Easter, Halloween, and Christmas.", image: "/images/nature-park.jpg" },
      { name: "Rec Centre Drop-In Gym Time", detail: "Ages 1-4 — Free. Mats, balls, ride-on toys, and tunnels in a big gym space. Perfect for burning energy on rainy days.", image: "/images/family-park-fun.jpg" },
    ],
  },
  {
    id: "splash-pads",
    title: "Best Splash Pads & Water Parks in Vancouver",
    date: "April 28, 2026",
    category: "Summer",
    categoryColor: "bg-amber-50 text-amber-700",
    image: "/images/kids-swimming.jpg",
    intro: "When summer arrives in Vancouver, splash pads become the centre of family life. Almost all of them are completely free. Here is every splash pad and outdoor pool worth visiting.",
    items: [
      { name: "Charleson Park Spray Park", detail: "Olympic Village — Ages 1-8, 10am-8pm (Jun-Sep). The best spray park in Vancouver. Multiple water jets and spray arches. Fully fenced playground beside it.", image: "/images/kids-splash.jpg" },
      { name: "Lumberman's Arch Water Park", detail: "Stanley Park — Ages 2-10, 10am-6pm (Jun-Sep). Iconic spray park with cannons and dump buckets. Arrive before noon on hot days.", image: "/images/nature-park.jpg" },
      { name: "Kitsilano Pool", detail: "Kitsilano — All Ages, Late May-Labour Day. 137m saltwater pool — the longest in Canada. Heated with mountain views.", image: "/images/kids-swimming.jpg" },
      { name: "Second Beach Pool", detail: "Stanley Park — All Ages, Late May-Labour Day. Heated outdoor pool on the beach. Shallow end for kids. Ocean views.", image: "/images/beach-sunset.jpg" },
      { name: "New Brighton Pool", detail: "Hastings — All Ages, Free admission. Hidden gem outdoor saltwater pool. Playground and picnic area nearby.", image: "/images/family-beach.jpg" },
    ],
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[420px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/hood-gastown.jpg')" }}>
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4" style={{ color: "#ffffff" }}>
            Vancouver Activities Blog
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.9)" }}>
            Insider tips, seasonal guides, and curated recommendations from local parents who know Vancouver inside and out.
          </p>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="py-8 px-5 border-b border-gray-100">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-3 justify-center">
          {posts.map((post) => (
            <a key={post.id} href={`#${post.id}`} className="px-4 py-2 bg-[#f0f7ec] text-[#2d5016] text-sm font-semibold rounded-full hover:bg-[#2d5016] hover:text-white transition-colors">
              {post.category}
            </a>
          ))}
        </div>
      </section>

      {/* Blog Posts */}
      {posts.map((post, postIndex) => (
        <section key={post.id} id={post.id} className={`py-20 px-5 ${postIndex % 2 === 1 ? "bg-[#f8f9fa]" : ""}`}>
          <div className="max-w-5xl mx-auto">
            {/* Post Header */}
            <div className="text-center mb-10">
              <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${post.categoryColor}`}>{post.category}</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">{post.title}</h2>
              <p className="text-sm text-gray-400">{post.date}</p>
            </div>

            {/* Featured Image */}
            <img src={post.image} alt={post.title} className="w-full h-[350px] object-cover rounded-2xl mb-8" loading="lazy" />

            {/* Intro */}
            <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-3xl mx-auto text-center">{post.intro}</p>

            {/* Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {post.items.map((item, i) => (
                <div key={item.name} className="bg-white rounded-xl shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" loading="lazy" />
                    <span className="absolute top-3 left-3 w-8 h-8 rounded-full bg-[#2d5016] flex items-center justify-center text-white font-heading font-bold text-xs">{i + 1}</span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-base font-bold mb-2">{item.name}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Read More Link */}
            <div className="text-center mt-8">
              <Link href={`/blog/${post.id === "playgrounds" ? "best-playgrounds-vancouver" : post.id === "rainy-day" ? "rainy-day-indoor-activities" : post.id === "hikes" ? "family-hikes-vancouver" : post.id === "free" ? "free-things-to-do-spring" : post.id === "toddler" ? "toddler-activities-vancouver" : "best-splash-pads-vancouver"}`} className="inline-block px-6 py-3 border-2 border-[#2d5016] text-[#2d5016] font-heading text-sm font-semibold uppercase tracking-wider rounded hover:bg-[#2d5016] hover:text-white transition-colors">
                Read Full Article
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-[#2d5016] py-16 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold mb-4" style={{ color: "#ffffff" }}>
            Want to Contribute?
          </h2>
          <p className="mb-8 text-lg" style={{ color: "rgba(255,255,255,0.85)" }}>
            Are you a Vancouver local with insider knowledge? We are always looking for guest contributors to share their favourite spots.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="px-8 py-3.5 bg-white border-2 border-[#2d5016] font-heading text-sm font-semibold uppercase tracking-wider rounded hover:bg-[#2d5016] transition-colors" style={{ color: "#2d5016" }}>
              Get in Touch
            </Link>
            <Link href="/things-to-do" className="px-8 py-3.5 border-2 border-white font-heading text-sm font-semibold uppercase tracking-wider rounded hover:bg-white hover:text-[#2d5016] transition-colors" style={{ color: "#ffffff" }}>
              Explore Activities
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
