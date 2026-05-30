import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Summer Camps Vancouver 2026 | Best Day Camps for Kids",
  description: "Find the best summer camps in Vancouver for 2026. Sports, arts, STEM, nature, and multi-activity day camps for kids ages 4-16. Registration info, prices, and what to pack.",
};

const camps = [
  { name: "Vancouver Whitecaps Soccer Camp", type: "Sports", ages: "5-14", price: "$300-$400/week", desc: "Official Whitecaps FC summer camps at multiple locations across Metro Vancouver. Professional coaching, skills development, and scrimmages. Half-day and full-day options.", image: "/images/soccer-kids.jpg" },
  { name: "City of Vancouver Swim Camp", type: "Sports", ages: "4-12", price: "$180-$250/week", desc: "Morning swim lessons combined with afternoon water games and beach activities. Held at outdoor pools and beaches across the city. Run by certified instructors.", image: "/images/kids-swimming.jpg" },
  { name: "Multi-Sport Camp at Hillcrest", type: "Sports", ages: "6-12", price: "$250-$350/week", desc: "Basketball, soccer, floor hockey, dodgeball, and more. Different sport every day at the Hillcrest Community Centre near Queen Elizabeth Park.", image: "/images/trampoline.jpg" },
  { name: "Arts Umbrella Theatre Camp", type: "Arts", ages: "6-16", price: "$350-$500/week", desc: "Immersive theatre camps on Granville Island. Acting, improvisation, set design, and a final showcase performance for parents on Friday afternoon.", image: "/images/kids-art.jpg" },
  { name: "VSO School of Music Camp", type: "Arts", ages: "7-18", price: "$400-$600/week", desc: "Instrument-specific and ensemble camps with Vancouver Symphony Orchestra musicians. Chamber music, jazz, and composition tracks available.", image: "/images/arts-crafts.jpg" },
  { name: "Geering Up STEM Camp (UBC)", type: "STEM", ages: "6-16", price: "$350-$450/week", desc: "Coding, robotics, engineering, and science camps run by UBC Engineering students. Different weekly themes. One of Vancouver's most popular camps — register early.", image: "/images/science-experiment.jpg" },
  { name: "Stanley Park Ecology Society Nature Camp", type: "Nature", ages: "5-12", price: "$300-$380/week", desc: "Forest exploration, wildlife tracking, nature art, and beach ecology in Stanley Park. Small groups of 12-15 kids with trained naturalist leaders.", image: "/images/nature-park.jpg" },
  { name: "Jericho Beach Sailing Camp", type: "Nature", ages: "8-16", price: "$350-$450/week", desc: "Learn to sail in English Bay with the Jericho Sailing Centre. Progressive levels from beginner to intermediate. Full-day camp with on-water instruction.", image: "/images/family-hiking.jpg" },
  { name: "Camp Sasamat (Belcarra)", type: "Multi-Activity", ages: "5-15", price: "$280-$380/week", desc: "Classic outdoor day camp at Sasamat Lake. Swimming, canoeing, archery, arts and crafts, campfires, and nature hikes. Bus pick-up from Vancouver.", image: "/images/rock-climbing.jpg" },
  { name: "Science World Summer Science Camp", type: "STEM", ages: "5-12", price: "$320-$420/week", desc: "Hands-on science experiments, gallery exploration, and OMNIMAX shows. Themes rotate weekly — chemistry, physics, biology, and earth science.", image: "/images/kids-cooking.jpg" },
];

const typeBadgeColors: Record<string, string> = {
  Sports: "bg-orange-50 text-orange-700",
  Arts: "bg-pink-50 text-pink-700",
  STEM: "bg-blue-50 text-blue-700",
  Nature: "bg-green-50 text-green-700",
  "Multi-Activity": "bg-purple-50 text-purple-700",
};

const timeline = [
  { month: "January", action: "Research camps and create shortlist. Popular camps open registration in February." },
  { month: "February", action: "Registration opens for most Vancouver Parks Board and private camps. Register early for discounts." },
  { month: "March", action: "Top camps start filling up. Secure spots for July and August. Apply for financial assistance if needed." },
  { month: "April-May", action: "Confirm registrations, arrange carpools, and order camp gear. Many camps have waitlists by now." },
  { month: "June", action: "Last-minute openings appear as families change plans. Label all clothing and gear." },
];

const packingList = [
  "Sunscreen (SPF 50+, reapply every 2 hours)",
  "Refillable water bottle (labelled)",
  "Hat with brim",
  "Two snacks and a nut-free lunch",
  "Change of clothes in a labelled bag",
  "Rain jacket (yes, even in July)",
  "Closed-toe shoes (no flip-flops)",
  "Swimsuit and towel (if water activities)",
  "Bug spray (for nature camps)",
  "Backpack large enough for all items",
];

export default function SummerCampsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[420px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/summer-camp.jpg')" }}>
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4" style={{ color: "#ffffff" }}>
            Summer Camps in Vancouver (2026)
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.9)" }}>
            Sports, arts, STEM, nature, and multi-activity day camps for kids across Metro Vancouver. Find the perfect summer adventure.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-5">10 Top Summer Camps for 2026</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            Vancouver summers are magical — long days, warm weather, and endless outdoor possibilities. These camps keep kids active, engaged, and making lifelong memories from late June through early September. Prices listed are approximate and may vary by week and age group.
          </p>
        </div>
      </section>

      {/* Camp Cards */}
      <section className="bg-[#f8f9fa] py-20 px-5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {camps.map((camp) => (
            <div key={camp.name} className="bg-white rounded-xl shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row">
              <img src={camp.image} alt={camp.name} className="w-full sm:w-48 h-48 sm:h-auto object-cover" />
              <div className="p-5 flex-1">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${typeBadgeColors[camp.type] || "bg-gray-50 text-gray-700"}`}>{camp.type}</span>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-amber-50 text-amber-700 rounded-full">{camp.price}</span>
                </div>
                <h3 className="font-heading text-lg font-bold mb-1">{camp.name}</h3>
                <p className="text-xs text-[#5f8f4a] font-semibold mb-2">Ages {camp.ages}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{camp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Registration Timeline */}
      <section className="py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-center">Registration Timeline</h2>
          <div className="space-y-4">
            {timeline.map((item) => (
              <div key={item.month} className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4">
                <span className="inline-block px-3 py-1.5 bg-[#5f8f4a]/10 text-[#2d5016] text-sm font-bold rounded-lg shrink-0 min-w-[100px] text-center">{item.month}</span>
                <p className="text-sm text-gray-600 leading-relaxed">{item.action}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packing List */}
      <section className="bg-[#f8f9fa] py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-center">What to Pack Checklist</h2>
          <div className="bg-white rounded-xl shadow-md p-8">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {packingList.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-600">
                  <span className="w-5 h-5 border-2 border-[#5f8f4a] rounded flex items-center justify-center text-xs shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">{item}</span>
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
            Need More Summer Ideas?
          </h2>
          <p className="mb-8 text-lg" style={{ color: "rgba(255,255,255,0.85)" }}>
            Explore outdoor adventures, free activities, and weekend events to keep kids busy all summer long.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/outdoor-adventures" className="px-8 py-3.5 bg-white text-[#2d5016] font-heading text-sm font-semibold uppercase tracking-wider rounded hover:bg-gray-100 transition-colors">
              Outdoor Adventures
            </Link>
            <Link href="/free-things-to-do" className="px-8 py-3.5 border-2 border-white font-heading text-sm font-semibold uppercase tracking-wider rounded hover:bg-white hover:text-[#2d5016] transition-colors" style={{ color: "#ffffff" }}>
              Free Activities
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
