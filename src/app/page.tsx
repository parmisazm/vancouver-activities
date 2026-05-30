import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";

const categories = [
  { label: "Kids Activities", desc: "Science World, aquarium, playgrounds & more by age group", href: "/kids-activities", image: "/images/kids-playground.jpg", className: "col-span-4 row-span-2" },
  { label: "Outdoor Adventures", desc: "Seawall bikes, Deep Cove kayaks, Grouse Grind & Lynn Canyon", href: "/outdoor-adventures", image: "/images/family-hiking.jpg", className: "col-span-4 row-span-1" },
  { label: "This Weekend", desc: "Farmers markets, festivals & family events happening now", href: "/this-weekend", image: "/images/street-festival.jpg", className: "col-span-4 row-span-1" },
  { label: "Indoor & Rainy Day", desc: "It rains 166 days here — we have 40+ indoor ideas ready", href: "/indoor-activities", image: "/images/kids-museum.jpg", className: "col-span-4 row-span-1" },
  { label: "Free Things To Do", desc: "Stanley Park, Lynn Canyon, spray parks & free gallery nights", href: "/free-things-to-do", image: "/images/sunset-beach.jpg", className: "col-span-4 row-span-1" },
  { label: "Birthday Parties", desc: "Go Bananas, Science World parties, rock climbing & more", href: "/birthday-parties", image: "/images/birthday-party.jpg", className: "col-span-3 row-span-1" },
  { label: "Summer Camps", desc: "Sports, STEM, arts & nature day camps across Metro Van", href: "/summer-camps", image: "/images/summer-camp.jpg", className: "col-span-3 row-span-1" },
  { label: "Family Restaurants", desc: "Kits brunch spots, Granville Island eats & kid-friendly patios", href: "/restaurants", image: "/images/family-dining.jpg", className: "col-span-3 row-span-1" },
  { label: "Local Guides", desc: "Written by Vancouver parents who actually live here", href: "/blog", image: "/images/hood-granville.jpg", className: "col-span-3 row-span-1" },
];

const neighbourhoods = [
  {
    name: "Downtown & Stanley Park",
    desc: "Ride the Seawall, feed raccoons at Lost Lagoon (don't actually), hit Second Beach pool in summer, and grab fish & chips at the Teahouse. Science World and the Aquarium are a SkyTrain ride away. If your kids can handle 2.9km straight up, the Grouse Grind is a rite of passage.",
    image: "/images/hood-downtown.jpg",
    spots: "Seawall · Second Beach Pool · Science World · Aquarium"
  },
  {
    name: "Granville Island",
    desc: "The Kids Market alone is worth the trip — three floors of toys, an indoor play space, and a ball pit. Then hit the Public Market for free samples (the cheese lady is generous). Take the Aquabus back — it's $4 and kids lose their minds over it.",
    image: "/images/hood-granville.jpg",
    spots: "Kids Market · Public Market · Aquabus · Waterfront Playground"
  },
  {
    name: "Kitsilano",
    desc: "Kits Pool is the longest saltwater pool in Canada and it's heated. The playground at Kits Beach is massive. Walk to Cornwall for ice cream at Rain or Shine. On Sundays, hit the farmers market at the community centre. In summer, this is the best neighbourhood in the city.",
    image: "/images/hood-kits.jpg",
    spots: "Kits Pool · Kits Beach · Farmers Market · Cornwall Ave"
  },
  {
    name: "North Vancouver",
    desc: "Skip Capilano ($65) and go to Lynn Canyon instead — the suspension bridge is free and the 30 Foot Pool is where locals swim in summer. Deep Cove is a 20-minute drive for kayaking and the famous honey doughnuts. Grouse Mountain has the Skyride, lumberjack shows, and bear habitat.",
    image: "/images/north-van.jpg",
    spots: "Lynn Canyon (free!) · Deep Cove · Grouse Mountain · Lonsdale Quay"
  },
];

const quickLinks = [
  { label: "What's on this weekend?", href: "/this-weekend", icon: "📅" },
  { label: "It's raining — now what?", href: "/rainy-day-activities", icon: "🌧️" },
  { label: "Free activities today", href: "/free-things-to-do", icon: "🆓" },
  { label: "Birthday party venues", href: "/birthday-parties", icon: "🎂" },
  { label: "Easy family hikes", href: "/outdoor-adventures", icon: "🥾" },
  { label: "Summer camp finder", href: "/summer-camps", icon: "☀️" },
];

const localTips = [
  {
    tip: "Skip Capilano, go to Lynn Canyon",
    detail: "Same suspension bridge experience, completely free. The 30 Foot Pool swimming hole is a bonus.",
    icon: "💰"
  },
  {
    tip: "Rent bikes at Denman, not Stanley Park",
    detail: "Better rates, same Seawall access. Ride the full 10km loop — budget 1.5 hours with kids.",
    icon: "🚲"
  },
  {
    tip: "Granville Island on a weekday morning",
    detail: "Weekend crowds are brutal. Go Tuesday-Thursday before 11am for the real experience.",
    icon: "🏝️"
  },
  {
    tip: "Kits Pool closes Labour Day",
    detail: "Canada's longest saltwater pool is heated and has ocean views. Go before September.",
    icon: "🏊"
  },
  {
    tip: "The Aquabus is $4 and kids love it",
    detail: "Tiny rainbow ferries across False Creek. Way more fun than walking to Granville Island.",
    icon: "⛴️"
  },
  {
    tip: "Science World does $5 Tuesdays after 5pm",
    detail: "Pay-what-you-can evening admission. Same exhibits, fraction of the price and crowds.",
    icon: "🔬"
  },
];

export default function Home() {
  return (
    <>
      <HeroSlider />

      {/* Quick Discovery */}
      <section className="py-10 px-5 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex flex-col items-center text-center p-4 rounded-xl bg-[#f8f9fa] hover:bg-[#5f8f4a]/10 hover:border-[#5f8f4a]/30 border border-transparent transition-all duration-200 group"
              >
                <span className="text-2xl mb-2">{link.icon}</span>
                <span className="text-xs font-semibold text-gray-600 group-hover:text-[#2d5016] leading-tight">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome — Local Voice */}
      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-5">
              By Vancouver Parents, for Vancouver Parents
            </h2>
            <p className="text-base leading-relaxed mb-4">
              We&apos;re not a tourism board. We&apos;re local parents who got tired of Googling &quot;things to do with kids in Vancouver&quot; and getting the same Capilano Suspension Bridge article for the 400th time.
            </p>
            <p className="text-base leading-relaxed mb-4">
              So we built this. A real, updated, local guide to activities, events, and hidden gems across Metro Vancouver — from the spray parks in New West to the tidepools at Whytecliff, from the $5 Tuesday nights at Science World to the secret beach at Third Beach that most tourists never find.
            </p>
            <p className="text-base leading-relaxed mb-4">
              Every recommendation comes from someone who&apos;s actually taken their kids there. We know which playgrounds have shade, which restaurants actually have high chairs, and which &quot;easy&quot; hikes are lying.
            </p>
            <div className="flex gap-3 mt-6">
              <Link href="/things-to-do" className="px-6 py-3 bg-[#2d5016] text-white font-heading text-sm font-semibold uppercase tracking-wider rounded hover:bg-[#1a3a0a] transition-colors">Browse Activities</Link>
              <Link href="/this-weekend" className="px-6 py-3 border-2 border-[#2d5016] text-[#2d5016] font-heading text-sm font-semibold uppercase tracking-wider rounded hover:bg-[#2d5016] hover:text-white transition-colors">This Weekend</Link>
            </div>
          </div>
          <div className="flex-1">
            <img src="/images/welcome-family.jpg" alt="Vancouver family at Kitsilano Beach" className="rounded-xl shadow-2xl w-full" />
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="bg-[#f8f9fa] py-20 px-5">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
            What Are You Looking For?
          </h2>
          <p className="text-gray-500 text-lg">Pick a category. We&apos;ll handle the rest.</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-4 md:grid-cols-12 auto-rows-[240px] gap-4">
          {categories.map((cat) => (
            <Link key={cat.label} href={cat.href} className={`relative rounded-xl overflow-hidden group ${cat.className}`}>
              <img src={cat.image} alt={`${cat.label} in Vancouver`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-heading text-lg font-bold mb-1" style={{ color: "#ffffff" }}>{cat.label}</h3>
                <p className="text-xs text-white/85 leading-relaxed">{cat.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Local Tips — The Good Stuff */}
      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
              Insider Tips Only Locals Know
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">The stuff you won&apos;t find on TripAdvisor. Money-saving hacks, crowd-avoiding strategies, and the real best spots.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {localTips.map((tip) => (
              <div key={tip.tip} className="bg-white border border-gray-100 rounded-xl p-6 hover:border-[#5f8f4a]/30 hover:shadow-lg transition-all duration-300">
                <span className="text-3xl mb-3 block">{tip.icon}</span>
                <h3 className="font-heading text-base font-bold mb-2">{tip.tip}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{tip.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax */}
      <section className="relative py-28 px-5 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/images/parallax-family.jpg')" }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-5" style={{ color: "#ffffff" }}>
            166 Rainy Days a Year. Zero Excuses.
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.9)" }}>
            Vancouver rains. A lot. That&apos;s why we built an entire section of indoor activities — from Science World and trampoline parks to pottery classes and indoor swimming pools. Rain doesn&apos;t stop Vancouver families.
          </p>
          <Link href="/rainy-day-activities" className="inline-block mt-8 px-8 py-4 bg-[#2d5016] text-white font-heading text-sm font-semibold uppercase tracking-wider rounded hover:bg-[#1a3a0a] transition-colors">
            40+ Rainy Day Ideas →
          </Link>
        </div>
      </section>

      {/* This Weekend Preview */}
      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">Happening This Weekend</h2>
              <p className="text-gray-500">Updated every Thursday. Bookmark this page.</p>
            </div>
            <Link href="/this-weekend" className="hidden md:inline-block px-6 py-3 bg-[#2d5016] text-white font-heading text-sm font-semibold uppercase tracking-wider rounded hover:bg-[#1a3a0a] transition-colors">
              See All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Kitsilano Farmers Market", date: "Every Sunday, 10am–2pm", venue: "Kitsilano Community Centre", detail: "50+ vendors. Live music. Free samples. The Sunday ritual for Kits families.", image: "/images/farmers-market.jpg" },
              { title: "Free Spray Park Season Opens", date: "Daily through September", venue: "Lumberman's Arch, Stanley Park", detail: "The biggest spray park in the city. Bring towels, sunscreen, and snacks. No admission.", image: "/images/kids-splash.jpg" },
              { title: "Granville Island Busker Festival", date: "This Saturday, 11am–5pm", venue: "Granville Island", detail: "Street performers, magic shows, and live music along the waterfront. Combine with Kids Market.", image: "/images/summer-festival.jpg" },
            ].map((evt) => (
              <div key={evt.title} className="bg-white rounded-xl shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer">
                <img src={evt.image} alt={evt.title} className="w-full h-44 object-cover" />
                <div className="p-5">
                  <h3 className="font-heading text-base font-bold mb-1">{evt.title}</h3>
                  <p className="text-sm text-gray-400 mb-1">{evt.date}</p>
                  <p className="text-sm text-[#5f8f4a] font-medium mb-2">{evt.venue}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{evt.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6 md:hidden">
            <Link href="/this-weekend" className="px-6 py-3 bg-[#2d5016] text-white font-heading text-sm font-semibold uppercase tracking-wider rounded hover:bg-[#1a3a0a] transition-colors">
              See All Weekend Events
            </Link>
          </div>
        </div>
      </section>

      {/* Neighbourhoods */}
      <section className="bg-[#f8f9fa] py-20 px-5">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">Explore by Neighbourhood</h2>
          <p className="text-gray-500 text-lg">Every Vancouver neighbourhood has its own personality. Here&apos;s what to do in each one.</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-7">
          {neighbourhoods.map((hood) => (
            <div key={hood.name} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <img src={hood.image} alt={`${hood.name} family activities`} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold mb-1">{hood.name}</h3>
                <p className="text-xs text-[#5f8f4a] font-semibold tracking-wide mb-3">{hood.spots}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{hood.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-20 px-5 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/images/parallax-mountains.jpg')" }}>
        <div className="absolute inset-0 bg-[#2d5016]/90" />
        <div className="relative z-10 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "800+", label: "Parks & Playgrounds" },
            { num: "166", label: "Rainy Days / Year" },
            { num: "40+", label: "Indoor Activities Listed" },
            { num: "10km", label: "of Seawall to Bike" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-heading text-5xl font-bold mb-2" style={{ color: "#ffffff" }}>{stat.num}</div>
              <div className="text-white/80 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Locals Use This */}
      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <img src="/images/family-local-park.jpg" alt="Vancouver family enjoying local neighbourhood park" className="rounded-xl shadow-2xl w-full" />
          </div>
          <div className="flex-1">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-5">Built for Locals, Not Tourists</h2>
            <p className="text-base leading-relaxed mb-4">
              We don&apos;t recommend the $65 Capilano bridge. We tell you about the free one at Lynn Canyon. We don&apos;t suggest &quot;visiting Stanley Park&quot; — we tell you exactly which playground has shade, where the spray park is, and that the mini train runs weekends only.
            </p>
            <p className="text-base leading-relaxed mb-4">
              Every week we update with new events, seasonal activities, and the stuff that makes living in Vancouver with kids actually amazing. Bookmark us. Tell your parent friends. You&apos;re welcome.
            </p>
            <ul className="space-y-2 mb-6">
              {["Updated weekly with real local events", "Covers Metro Vancouver — not just downtown", "Age-specific recommendations (toddler to teen)", "Honest reviews from parents who've been there", "Free activities featured prominently"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-[#5f8f4a] mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/about" className="px-7 py-3.5 bg-[#2d5016] text-white font-heading text-sm font-semibold uppercase tracking-wider rounded hover:bg-[#1a3a0a] transition-colors">About Us</Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#2d5016] py-16 px-5">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold mb-3" style={{ color: "#ffffff" }}>Your Weekend, Sorted. Every Thursday.</h2>
          <p className="mb-8" style={{ color: "rgba(255,255,255,0.8)" }}>One email. The best family activities happening this weekend in Vancouver. No spam, no tourism fluff — just the good stuff from parents who live here.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Your email address" className="flex-1 px-5 py-3.5 rounded text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white/50" />
            <button type="submit" className="px-8 py-3.5 bg-white text-[#2d5016] font-heading text-sm font-semibold uppercase tracking-wider rounded hover:bg-gray-100 transition-colors">Subscribe</button>
          </form>
          <p className="mt-4 text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>Join 2,000+ Vancouver parents. Unsubscribe anytime.</p>
        </div>
      </section>
    </>
  );
}
