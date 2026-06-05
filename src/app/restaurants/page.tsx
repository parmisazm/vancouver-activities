import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Family-Friendly Restaurants Vancouver | Kid-Approved Dining",
  description: "Best family-friendly restaurants in Vancouver. Kid-approved dining with high chairs, kids menus, play areas, and patios. Organized by neighbourhood.",
};

const restaurants = [
  { name: "Sophie's Cosmic Cafe", neighbourhood: "Kitsilano", price: "$$", features: ["Kids Menu", "High Chairs", "Crayons"], desc: "Retro diner vibes with legendary weekend brunch. Giant pancakes, milkshakes, and a toy box that keeps kids busy. Expect a line on weekends.", image: "/images/family-cafe.jpg" },
  { name: "Rocky Mountain Flatbread", neighbourhood: "Kitsilano", price: "$$", features: ["Kids Play Area", "Kids Menu", "Organic"], desc: "Wood-fired pizza made with local organic ingredients. Kids can make their own pizza on weekends. Play area with toys and books.", image: "/images/family-restaurant.jpg" },
  { name: "Tap & Barrel (Olympic Village)", neighbourhood: "Olympic Village", price: "$$", features: ["Patio", "High Chairs", "Kids Menu"], desc: "Waterfront patio with stunning False Creek views. Kids menu with sliders, pasta, and grilled cheese. Walking distance to Science World.", image: "/images/family-dining.jpg" },
  { name: "The Old Spaghetti Factory", neighbourhood: "Gastown", price: "$", features: ["Kids Menu", "High Chairs", "Value"], desc: "A Vancouver institution since 1970. Affordable pasta dinners with bread, salad, and ice cream included. Kids eat for under $8. Historic Gastown location.", image: "/images/family-cafe.jpg" },
  { name: "White Spot", neighbourhood: "Multiple Locations", price: "$$", features: ["Kids Menu", "High Chairs", "Pirate Pak"], desc: "BC's beloved family restaurant chain. The Pirate Pak kids meal served in a cardboard pirate ship has been a tradition since 1968. Reliable, consistent, kid-friendly.", image: "/images/family-restaurant.jpg" },
  { name: "Mahony & Sons", neighbourhood: "False Creek", price: "$$", features: ["Patio", "Kids Menu", "Waterfront"], desc: "Gastropub with a huge waterfront patio near Burrard Bridge. Sunday brunch is popular with families. Kids menu available with fish and chips, pasta, and chicken fingers.", image: "/images/market-food.jpg" },
  { name: "Nuba", neighbourhood: "Gastown", price: "$$", features: ["High Chairs", "Healthy Options", "Patio"], desc: "Lebanese restaurant with naturally kid-friendly food — hummus, falafel, grilled chicken, and fresh pita. Gastown location has a small patio.", image: "/images/family-dining.jpg" },
  { name: "Go Fish Ocean Emporium", neighbourhood: "Granville Island", price: "$", features: ["Outdoor Seating", "Quick Service"], desc: "The best fish and chips in Vancouver, right on the Granville Island waterfront. Cash only. Eat on picnic tables and watch the boats. Kids love the fish tacos.", image: "/images/hood-granville.jpg" },
  { name: "Burgoo Bistro", neighbourhood: "Kitsilano", price: "$$", features: ["Kids Menu", "High Chairs", "Comfort Food"], desc: "Cozy bistro with amazing soups, stews, and fondue. Kids menu with grilled cheese, mac and cheese, and chicken strips. Perfect for a rainy day lunch.", image: "/images/family-cafe.jpg" },
  { name: "Granville Island Public Market Food Court", neighbourhood: "Granville Island", price: "$-$$", features: ["Variety", "Quick Service", "Playground Nearby"], desc: "Not one restaurant but dozens of food vendors under one roof. Everyone picks what they want — sushi, pizza, tacos, crepes. Waterfront playground is steps away.", image: "/images/farmers-market.jpg" },
  { name: "Salmon n' Bannock", neighbourhood: "Broadway", price: "$$$", features: ["High Chairs", "Unique Experience"], desc: "Vancouver's only Indigenous restaurant. Bison burgers, wild salmon, and bannock bread. A culturally rich dining experience the whole family can enjoy.", image: "/images/family-dining.jpg" },
  { name: "La Casa Gelato", neighbourhood: "Commercial Drive", price: "$", features: ["Dessert", "218 Flavours", "Free Samples"], desc: "Over 218 flavours of gelato with free samples. Kids go wild choosing from flavours like cotton candy, mango, and garlic (yes, garlic). A Vancouver bucket list stop.", image: "/images/ice-skating.jpg" },
];

const tips = [
  { title: "Go Early", desc: "Most family-friendly restaurants get packed by 6 PM on weekends. Aim for 5 PM to beat the rush and get better service." },
  { title: "Check for Play Areas", desc: "Rocky Mountain Flatbread, Circus Play Cafe, and several breweries have dedicated kids play spaces." },
  { title: "Pack a Backup", desc: "Bring a small activity kit — colouring books, stickers, or a tablet with headphones — for wait times." },
  { title: "Ask About Allergies", desc: "Vancouver restaurants are generally excellent about allergy accommodations. Call ahead for severe allergies." },
  { title: "Try Food Courts", desc: "Granville Island Public Market, Aberdeen Centre, and Crystal Mall food courts let everyone pick their own meal." },
  { title: "Patio Season", desc: "May through September, patio dining lets kids move around more freely. Most Vancouver patios welcome families." },
];

export default function RestaurantsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[420px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/family-dining.jpg')" }}>
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4" style={{ color: "#ffffff" }}>
            Family-Friendly Restaurants in Vancouver
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.9)" }}>
            Kid-approved dining across the city — high chairs, kids menus, play areas, and food the whole family will love.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-5">12 Restaurants Kids (and Parents) Love</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            Dining out with kids in Vancouver does not have to mean chicken fingers and stress. These restaurants welcome families with open arms, dedicated kids menus, and atmospheres where a little noise is perfectly welcome.
          </p>
        </div>
      </section>

      {/* Restaurant Grid */}
      <section className="bg-[#f8f9fa] py-20 px-5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((rest) => (
            <div key={rest.name} className="bg-white rounded-xl shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <img src={rest.image} alt={rest.name} className="w-full h-44 object-cover" />
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold px-2.5 py-1 bg-[#5f8f4a]/10 text-[#2d5016] rounded-full">{rest.neighbourhood}</span>
                  <span className="text-sm font-bold text-amber-600">{rest.price}</span>
                </div>
                <h3 className="font-heading text-base font-bold mb-2">{rest.name}</h3>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {rest.features.map((f) => (
                    <span key={f} className="text-[10px] font-semibold px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full">{f}</span>
                  ))}
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{rest.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tips */}
      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-center">Tips for Dining Out with Kids</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tips.map((tip) => (
              <div key={tip.title} className="bg-white rounded-xl shadow-md p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <h3 className="font-heading text-base font-bold mb-2">{tip.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2d5016] py-16 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold mb-4" style={{ color: "#ffffff" }}>
            Know a Great Family Restaurant?
          </h2>
          <p className="mb-8 text-lg" style={{ color: "rgba(255,255,255,0.85)" }}>
            Help other Vancouver families find great places to eat. Submit your favourite family-friendly restaurant.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/submit-event" className="px-8 py-3.5 bg-white border-2 border-[#2d5016] font-heading text-sm font-semibold uppercase tracking-wider rounded hover:bg-[#2d5016] transition-colors" style={{ color: "#2d5016" }}>
              Submit a Restaurant
            </Link>
            <Link href="/blog" className="px-8 py-3.5 border-2 border-white font-heading text-sm font-semibold uppercase tracking-wider rounded hover:bg-white hover:text-[#2d5016] transition-colors" style={{ color: "#ffffff" }}>
              Local Guides
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
