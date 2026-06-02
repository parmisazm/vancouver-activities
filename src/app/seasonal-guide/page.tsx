import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vancouver Seasonal Guide | Best Activities by Season (2026)",
  description: "Discover the best things to do in Vancouver by season. Cherry blossoms in spring, beaches in summer, foliage in fall, and skiing in winter. Your year-round Vancouver activity guide.",
};

const seasons = [
  {
    name: "Spring",
    months: "March - May",
    image: "/images/spring-blossoms.jpg",
    color: "bg-pink-50 text-pink-700",
    intro: "Vancouver springs to life with cherry blossoms, mild temperatures, and the return of outdoor markets. Average highs of 13-18 degrees Celsius with a mix of rain and sunshine.",
    activities: [
      "Cherry Blossom Festival — over 40,000 trees bloom across the city from late March to mid-April",
      "Vancouver Sun Run — Canada's largest 10K road race through downtown in April",
      "Granville Island and Kitsilano farmers markets reopen for the season",
      "Easter egg hunts at VanDusen Botanical Garden and Stanley Park",
      "Whale watching season begins — spot grey whales migrating north",
      "Grouse Grind reopens in May — tackle Mother Nature's Stairmaster",
      "Bike the Stanley Park Seawall as the days get longer and warmer",
      "Pacific Spirit Park wildflower walks with guided naturalist tours",
    ],
    tip: "Spring is unpredictable — always bring layers and a rain jacket. Cherry blossom peak is usually early April, but varies year to year. Check the Vancouver Cherry Blossom Festival map for the best spots.",
  },
  {
    name: "Summer",
    months: "June - August",
    image: "/images/summer-festival.jpg",
    color: "bg-amber-50 text-amber-700",
    intro: "Long, warm days with average highs of 22-25 degrees. Vancouver's best season for outdoor activities, festivals, and beach days. Expect sunshine from late June through August.",
    activities: [
      "Beaches — Kitsilano, English Bay, Jericho, and Spanish Banks are all swimmable",
      "Celebration of Light fireworks at English Bay — three nights in late July and early August",
      "PNE Fair and Playland — Pacific National Exhibition runs for two weeks in August",
      "Summer day camps — sports, arts, STEM, and nature camps across the city",
      "Free outdoor movies in Stanley Park every Tuesday night in August",
      "Grouse Mountain gondola, ziplines, and the Lumberjack Show",
      "Deep Cove kayaking and paddleboarding in Indian Arm",
      "Night markets in Richmond — food, shopping, and live entertainment",
    ],
    tip: "Book beach parking early on weekends or take transit. Kitsilano Pool opens mid-May. Sunscreen is essential — Vancouver UV is stronger than you think at this latitude.",
  },
  {
    name: "Fall",
    months: "September - November",
    image: "/images/fall-foliage.jpg",
    color: "bg-orange-50 text-orange-700",
    intro: "Crisp air, stunning foliage, and fewer crowds. Average highs of 10-18 degrees. Rain returns in October, but September is often Vancouver's most beautiful month.",
    activities: [
      "Vancouver International Film Festival — two weeks of world cinema in September and October",
      "Salmon spawning at Goldstream Provincial Park and Capilano River Hatchery",
      "Halloween events — Fright Nights at PNE, pumpkin patches, and haunted houses",
      "Thanksgiving at Queen Elizabeth Park — stunning fall colours and city views",
      "Stanley Park fall foliage walks — peak colour in mid to late October",
      "Apple picking at farms in Langley and Abbotsford",
      "Diwali Festival celebrations on the Punjabi Market strip",
      "Craft beer festivals and Oktoberfest events across the city",
    ],
    tip: "September is the secret best month — warm, dry, and uncrowded. Pack rain boots and an umbrella starting in October. Fall is the best time for North Shore hiking with cooler temperatures.",
  },
  {
    name: "Winter",
    months: "December - February",
    image: "/images/winter-mountains.jpg",
    color: "bg-sky-50 text-sky-700",
    intro: "Mild winters by Canadian standards — average highs of 5-8 degrees in the city, with world-class skiing just 30 minutes away. Rain dominates, but snow-capped mountains provide a stunning backdrop.",
    activities: [
      "Skiing and snowboarding at Grouse, Cypress, and Seymour — all within 30 minutes of downtown",
      "VanDusen Festival of Lights — over 1 million lights illuminate the botanical garden",
      "Christmas at Canada Place — free holiday programming, Woodward's Windows, and ship-shaped lights",
      "Bright Nights in Stanley Park — holiday train and light displays",
      "Polar Bear Swim at English Bay on January 1 — a Vancouver tradition since 1920",
      "Ice skating at Robson Square — free admission, skate rental extra",
      "Chinese New Year Parade in Chinatown — one of the largest in North America",
      "Storm watching at Tofino — a dramatic winter weekend trip from Vancouver",
    ],
    tip: "Whistler is 90 minutes north for bigger ski terrain. Dress in waterproof layers — Vancouver winter is wet, not cold. The Festival of Lights sells out on weekends — buy tickets in advance.",
  },
];

export default function SeasonalGuidePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[420px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/fall-foliage.jpg')" }}>
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4" style={{ color: "#ffffff" }}>
            Vancouver Seasonal Activity Guide
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.9)" }}>
            From cherry blossoms to ski slopes — the best things to do in Vancouver in every season of the year.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-5">A City for Every Season</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            Vancouver is one of the rare cities where you can ski in the morning, sail in the afternoon, and walk through a rainforest before dinner. Each season brings its own magic — and its own must-do activities. Here is your month-by-month guide to making the most of Vancouver all year long.
          </p>
        </div>
      </section>

      {/* Seasons */}
      {seasons.map((season, idx) => (
        <section key={season.name} className={idx % 2 === 0 ? "bg-[#f8f9fa] py-20 px-5" : "py-20 px-5"}>
          <div className="max-w-6xl mx-auto">
            <div className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 items-start`}>
              <div className="w-full lg:w-2/5">
                <img src={season.image} alt={`${season.name} in Vancouver`} className="w-full h-72 object-cover rounded-xl shadow-md" />
              </div>
              <div className="w-full lg:w-3/5">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-sm font-bold px-4 py-1.5 rounded-full ${season.color}`}>{season.name}</span>
                  <span className="text-sm text-gray-400">{season.months}</span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">{season.intro}</p>
                <ul className="space-y-3 mb-6">
                  {season.activities.map((activity) => (
                    <li key={activity} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <span className="text-[#5f8f4a] mt-0.5 shrink-0 font-bold">&#10003;</span>
                      <span className="leading-relaxed">{activity}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-[#5f8f4a]/5 border-l-4 border-[#5f8f4a] p-4 rounded-r-lg">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    <strong className="text-[#2d5016]">Family Tip:</strong> {season.tip}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-[#2d5016] py-16 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold mb-4" style={{ color: "#ffffff" }}>
            Explore Activities by Category
          </h2>
          <p className="mb-8 text-lg" style={{ color: "rgba(255,255,255,0.85)" }}>
            Browse indoor and outdoor activities, free things to do, and weekend events — no matter what season it is.
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
