import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kids Activities in Vancouver BC | 50+ Ideas by Age Group (2026)",
  description: "Find the best kids activities in Vancouver, BC. 50+ activities organized by age — toddlers, school-age, and teens. Indoor play, outdoor fun, sports, arts, and more.",
};

const toddlerActivities = [
  { name: "Granville Island Water Park", age: "0-5", type: "Outdoor", desc: "Free water park with gentle spray features perfect for little ones. Open May-September.", image: "/images/toddler-play.jpg" },
  { name: "Kids Market Indoor Play", age: "0-5", type: "Indoor", desc: "Adventure Zone and Ball Pit inside the Granville Island Kids Market. Rainy day favourite.", image: "/images/playground-slide.jpg" },
  { name: "Stanley Park Miniature Train", age: "0-5", type: "Outdoor", desc: "A gentle 15-minute ride through the forest. Seasonal themes throughout the year.", image: "/images/family-picnic.jpg" },
  { name: "Bloedel Conservatory", age: "0-5", type: "Indoor", desc: "Tropical birds and plants under a dome at Queen Elizabeth Park. Toddlers love the free-flying parrots.", image: "/images/kids-crafts.jpg" },
  { name: "Lumberjack's Trail at Lynn Canyon", age: "0-5", type: "Outdoor", desc: "An easy, stroller-friendly forest trail with a free suspension bridge at the end.", image: "/images/family-hiking.jpg" },
  { name: "Vancouver Aquarium Touch Pool", age: "0-5", type: "Indoor", desc: "Toddlers can gently touch sea stars and sea cucumbers in the supervised touch pool area.", image: "/images/aquarium.jpg" },
];

const schoolAgeActivities = [
  { name: "Science World", age: "6-12", type: "Indoor", desc: "Interactive exhibits, live science demos, and the OMNIMAX theatre. Plan for at least 3 hours.", image: "/images/kids-museum.jpg" },
  { name: "FlyOver Canada", age: "6-12", type: "Indoor", desc: "A thrilling 4D flight ride over Canada's most spectacular landscapes at Canada Place.", image: "/images/kids-reading.jpg" },
  { name: "Capilano Suspension Bridge", age: "6-12", type: "Outdoor", desc: "Walk 70 metres above the Capilano River, explore the Treetops Adventure, and try the Cliffwalk.", image: "/images/hiking-trail.jpg" },
  { name: "Playland at PNE", age: "6-12", type: "Outdoor", desc: "Vancouver's amusement park with rides for all ages, mini golf, and arcade games. Open seasonally.", image: "/images/soccer-kids.jpg" },
  { name: "Extreme Air Park", age: "6-12", type: "Indoor", desc: "Giant trampoline park in Richmond with dodgeball courts, foam pits, and ninja courses.", image: "/images/trampoline.jpg" },
  { name: "Grouse Mountain Wildlife Refuge", age: "6-12", type: "Outdoor", desc: "See rescued grizzly bears, take the Skyride, and try the lumberjack show. A full day out.", image: "/images/family-beach.jpg" },
  { name: "Deep Cove Kayaking", age: "6-12", type: "Outdoor", desc: "Guided family kayak tours in Indian Arm. Kids 6+ can paddle their own kayak with an adult.", image: "/images/kayaking.jpg" },
  { name: "Museum of Anthropology (UBC)", age: "6-12", type: "Indoor", desc: "World-class collection of First Nations art and totem poles. Free for kids under 6.", image: "/images/kids-art.jpg" },
  { name: "Vancouver Maritime Museum", age: "6-12", type: "Indoor", desc: "Explore the historic St. Roch schooner and interactive maritime exhibits in Vanier Park.", image: "/images/kids-museum.jpg" },
  { name: "Kitsilano Pool", age: "6-12", type: "Outdoor", desc: "137m saltwater pool right on the beach — the longest in Canada. Heated and open May-September.", image: "/images/kids-swimming.jpg" },
];

const teenActivities = [
  { name: "Grouse Grind", age: "13+", type: "Outdoor", desc: "The famous 2.9km trail known as 'Mother Nature's Stairmaster'. 2,830 stairs to the peak.", image: "/images/teens-skateboard.jpg" },
  { name: "Granville Street Entertainment", age: "13+", type: "Urban", desc: "Bowling, escape rooms, VR experiences, and arcades along Granville Street downtown.", image: "/images/rock-climbing.jpg" },
  { name: "Whistler Day Trip", age: "13+", type: "Adventure", desc: "Mountain biking, zip-lining, and the Peak 2 Peak Gondola — just 90 minutes from Vancouver.", image: "/images/skiing.jpg" },
  { name: "Jericho Beach Windsurfing", age: "13+", type: "Outdoor", desc: "Beginner windsurfing and paddleboard lessons at the Jericho Sailing Centre.", image: "/images/kayaking.jpg" },
  { name: "Robson Street Shopping", age: "13+", type: "Urban", desc: "Vancouver's main shopping strip with fashion, food courts, and street performers.", image: "/images/street-festival.jpg" },
  { name: "Vancouver Escape Rooms", age: "13+", type: "Indoor", desc: "Over 20 escape room venues across the city. Team puzzles, mystery themes, and timed challenges.", image: "/images/library-kids.jpg" },
  { name: "Richmond Olympic Oval", age: "13+", type: "Indoor", desc: "Ice skating, rock climbing wall, basketball, and badminton in the 2010 Olympic venue.", image: "/images/bowling.jpg" },
  { name: "Whale Watching Tour", age: "13+", type: "Outdoor", desc: "3-5 hour tours to see orcas, humpbacks, and sea lions in the Strait of Georgia.", image: "/images/kayaking.jpg" },
];

const tips = [
  { title: "Check the Weather First", desc: "Vancouver weather changes fast. Always have a rain backup plan and layers for the kids." },
  { title: "Book Ahead in Summer", desc: "Popular attractions like Science World, the Aquarium, and Capilano sell out on weekends. Book online to skip the line." },
  { title: "Use Transit", desc: "SkyTrain and SeaBus are adventures themselves. Kids under 5 ride free, and a day pass is often cheaper than parking." },
  { title: "Pack Snacks", desc: "Food at attractions is pricey. Pack a cooler and eat at one of Vancouver's 800+ parks between activities." },
  { title: "Explore Free Options", desc: "Many of Vancouver's best activities are free — beaches, parks, spray parks, and community festivals happen year-round." },
  { title: "Go Off-Peak", desc: "Weekday mornings are the best time to visit popular spots. Shorter lines, smaller crowds, and more space for kids to play." },
];

export default function KidsActivitiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[420px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/kids-playground.jpg')" }}>
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4" style={{ color: "#ffffff" }}>
            Kids Activities in Vancouver
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.9)" }}>
            50+ activities organized by age group. Toddlers, school-age kids, and teens — there is something incredible for every child in this city.
          </p>
        </div>
      </section>

      {/* Toddlers */}
      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">Toddlers &amp; Preschool (Ages 0-5)</h2>
          <p className="text-gray-500 text-lg mb-10">Gentle adventures for your littlest explorers.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {toddlerActivities.map((act) => (
              <div key={act.name} className="bg-white rounded-xl shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <img src={act.image} alt={act.name} className="w-full h-44 object-cover" />
                <div className="p-5">
                  <div className="flex gap-2 mb-2">
                    <span className="text-xs font-semibold px-2.5 py-1 bg-[#5f8f4a]/10 text-[#2d5016] rounded-full">{act.age}</span>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full">{act.type}</span>
                  </div>
                  <h3 className="font-heading text-base font-bold mb-1">{act.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{act.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School-Age */}
      <section className="bg-[#f8f9fa] py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">School-Age Kids (Ages 6-12)</h2>
          <p className="text-gray-500 text-lg mb-10">Big adventures for curious minds and busy bodies.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schoolAgeActivities.map((act) => (
              <div key={act.name} className="bg-white rounded-xl shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <img src={act.image} alt={act.name} className="w-full h-44 object-cover" />
                <div className="p-5">
                  <div className="flex gap-2 mb-2">
                    <span className="text-xs font-semibold px-2.5 py-1 bg-[#5f8f4a]/10 text-[#2d5016] rounded-full">{act.age}</span>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full">{act.type}</span>
                  </div>
                  <h3 className="font-heading text-base font-bold mb-1">{act.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{act.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teens */}
      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">Teens &amp; Tweens (Ages 13+)</h2>
          <p className="text-gray-500 text-lg mb-10">Cool, independent adventures that even teenagers will approve of.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teenActivities.map((act) => (
              <div key={act.name} className="bg-white rounded-xl shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <img src={act.image} alt={act.name} className="w-full h-44 object-cover" />
                <div className="p-5">
                  <div className="flex gap-2 mb-2">
                    <span className="text-xs font-semibold px-2.5 py-1 bg-[#5f8f4a]/10 text-[#2d5016] rounded-full">{act.age}</span>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full">{act.type}</span>
                  </div>
                  <h3 className="font-heading text-base font-bold mb-1">{act.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{act.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="bg-[#f8f9fa] py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-10 text-center">Tips for Parents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tips.map((tip) => (
              <div key={tip.title} className="bg-white rounded-xl shadow-md p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <h3 className="font-heading text-lg font-bold mb-2">{tip.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2d5016] py-16 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold mb-4" style={{ color: "#ffffff" }}>
            Looking for Something Specific?
          </h2>
          <p className="mb-8 text-lg" style={{ color: "rgba(255,255,255,0.85)" }}>
            Browse indoor activities for rainy days, free things to do on a budget, or check what is happening this weekend.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/indoor-activities" className="px-8 py-3.5 bg-white text-[#2d5016] font-heading text-sm font-semibold uppercase tracking-wider rounded hover:bg-gray-100 transition-colors">
              Indoor Activities
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
