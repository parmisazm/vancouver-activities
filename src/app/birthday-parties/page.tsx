import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Birthday Party Venues Vancouver | Best Kids Party Ideas (2026)",
  description: "Find the best birthday party venues in Vancouver for kids. Indoor play centres, sports facilities, creative studios, science parties, and nature-themed celebrations. Compare prices and age ranges.",
};

const venues = [
  { name: "Go Bananas Indoor Playground", type: "Indoor Play", price: "$250-$350", ages: "1-12", includes: "2 hours play time, private party room, paper goods, juice boxes. Add-on pizza and cake packages available.", image: "/images/kids-playground.jpg" },
  { name: "Science World Birthday Bash", type: "Science", price: "$350-$500", ages: "4-12", includes: "2 hours including gallery access, dedicated party host, themed science activity, party room, and OMNIMAX show.", image: "/images/science-experiment.jpg" },
  { name: "Granville Island Kids Market Party", type: "Creative", price: "$200-$300", ages: "3-10", includes: "Craft activity in the Adventure Zone, party table, decorations. Bring your own food and cake.", image: "/images/kids-crafts.jpg" },
  { name: "Playland Birthday Package", type: "Sports", price: "$300-$450", ages: "5-14", includes: "Unlimited rides wristband for each guest, reserved picnic area, cotton candy, and a birthday ride on the Coaster.", image: "/images/soccer-kids.jpg" },
  { name: "Apex Adventure Plex", type: "Sports", price: "$280-$380", ages: "4-16", includes: "90 minutes of trampolines, ninja course, and dodgeball. Private party room with pizza and drinks included.", image: "/images/trampoline.jpg" },
  { name: "Zone Bowling Vancouver", type: "Sports", price: "$180-$280", ages: "5-16", includes: "2 hours of bowling, shoe rental, party host, pizza and pop. Glow bowling upgrade available for evening parties.", image: "/images/bowling.jpg" },
  { name: "Pottery for the People Party", type: "Creative", price: "$220-$320", ages: "5-14", includes: "Pottery painting for up to 12 kids. Each child picks and paints a ceramic piece to take home. Glazing included.", image: "/images/pottery.jpg" },
  { name: "Hive Bouldering Gym", type: "Sports", price: "$250-$350", ages: "6-16", includes: "90 minutes of supervised rock climbing, safety briefing, climbing shoes, and a private party area with tables.", image: "/images/rock-climbing.jpg" },
  { name: "Britannia Pool Party", type: "Sports", price: "$150-$200", ages: "4-14", includes: "Private pool rental for 90 minutes, lifeguards on duty. Bring your own food. One of the most affordable options.", image: "/images/kids-swimming.jpg" },
  { name: "Maplewood Farm Birthday", type: "Nature", price: "$200-$280", ages: "2-8", includes: "Farm admission, animal feeding, pony ride, picnic area. Surrounded by goats, chickens, and rabbits.", image: "/images/family-picnic.jpg" },
  { name: "FlyOver Canada Party", type: "Indoor Play", price: "$400-$550", ages: "8-16", includes: "FlyOver Canada ride for up to 15 guests, private event space, snacks, and a birthday host.", image: "/images/hero-4.jpg" },
  { name: "Lynn Canyon Ecology Centre Party", type: "Nature", price: "$180-$250", ages: "5-12", includes: "Guided nature walk, suspension bridge crossing, ecology centre tour, and outdoor picnic area rental.", image: "/images/family-hiking.jpg" },
];

const typeBadgeColors: Record<string, string> = {
  "Indoor Play": "bg-purple-50 text-purple-700",
  "Science": "bg-blue-50 text-blue-700",
  "Creative": "bg-pink-50 text-pink-700",
  "Sports": "bg-orange-50 text-orange-700",
  "Nature": "bg-green-50 text-green-700",
};

const planningTips = [
  "Book at least 4-6 weeks in advance, especially for weekend parties",
  "Ask about allergy accommodations for food and crafts",
  "Confirm the maximum headcount — most venues cap at 15-20 kids",
  "Check if the venue provides invitations or digital invite templates",
  "Ask about parking and drop-off procedures for parents",
  "Verify what is included vs. add-ons to avoid surprise costs",
  "Plan for 15 minutes of arrival buffer before the party starts",
  "Ask if siblings are allowed and if there is an extra cost",
  "Bring a backup activity in case kids finish early",
  "Tip the party host — $20-$40 is standard in Vancouver",
];

export default function BirthdayPartiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[420px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/birthday-party.jpg')" }}>
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4" style={{ color: "#ffffff" }}>
            Birthday Party Venues in Vancouver
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.9)" }}>
            The best party venues for kids in Metro Vancouver — from indoor play centres and trampoline parks to science labs and nature adventures.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-5">12 Amazing Party Venues</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            Planning a birthday party in Vancouver? We have rounded up the best venues across the city — from budget-friendly pool parties to all-inclusive science extravaganzas. Every venue below has been vetted by local families.
          </p>
        </div>
      </section>

      {/* Venue Grid */}
      <section className="bg-[#f8f9fa] py-20 px-5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {venues.map((venue) => (
            <div key={venue.name} className="bg-white rounded-xl shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <img src={venue.image} alt={venue.name} className="w-full h-44 object-cover" />
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${typeBadgeColors[venue.type] || "bg-gray-50 text-gray-700"}`}>{venue.type}</span>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-amber-50 text-amber-700 rounded-full">{venue.price}</span>
                </div>
                <h3 className="font-heading text-base font-bold mb-1">{venue.name}</h3>
                <p className="text-xs text-[#5f8f4a] font-semibold mb-2">Ages {venue.ages}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{venue.includes}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Planning Tips */}
      <section className="py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-center">Party Planning Checklist</h2>
          <div className="bg-white rounded-xl shadow-md p-8">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {planningTips.map((tip) => (
                <li key={tip} className="flex items-start gap-3 text-gray-600">
                  <span className="w-5 h-5 bg-[#5f8f4a]/10 text-[#2d5016] rounded flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">&#10003;</span>
                  <span className="text-sm leading-relaxed">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2d5016] py-16 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold mb-4" style={{ color: "#ffffff" }}>
            Have a Venue to Recommend?
          </h2>
          <p className="mb-8 text-lg" style={{ color: "rgba(255,255,255,0.85)" }}>
            We are always looking for new party venues to feature. Submit your favourite spot and help other Vancouver parents plan the perfect birthday.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/submit-event" className="px-8 py-3.5 bg-white text-[#2d5016] font-heading text-sm font-semibold uppercase tracking-wider rounded hover:bg-gray-100 transition-colors">
              Submit a Venue
            </Link>
            <Link href="/kids-activities" className="px-8 py-3.5 border-2 border-white font-heading text-sm font-semibold uppercase tracking-wider rounded hover:bg-white hover:text-[#2d5016] transition-colors" style={{ color: "#ffffff" }}>
              Kids Activities
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
