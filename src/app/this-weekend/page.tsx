"use client";

import { useMemo } from "react";
import Link from "next/link";
import eventsData from "@/data/events.json";

type Event = (typeof eventsData)[number] & { venue?: string };

const MONTHS = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];

export default function ThisWeekendPage() {
  const weekendEvents = useMemo(() => {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const daysUntilSat = dayOfWeek === 0 ? 6 : dayOfWeek === 6 ? 0 : 6 - dayOfWeek;
    const saturday = new Date(now);
    saturday.setDate(now.getDate() + (dayOfWeek === 6 ? 0 : dayOfWeek === 0 ? -1 : daysUntilSat));
    saturday.setHours(0, 0, 0, 0);
    const sunday = new Date(saturday);
    sunday.setDate(saturday.getDate() + 1);
    sunday.setHours(23, 59, 59, 999);

    const nextWeek = new Date(now);
    nextWeek.setDate(now.getDate() + 7);

    return (eventsData as Event[])
      .filter((evt) => {
        const start = new Date(evt.start_date);
        const end = new Date(evt.end_date);
        return (start <= sunday && end >= saturday) || (start >= now && start <= nextWeek);
      })
      .sort((a, b) => new Date(a.start_date).getTime() - new Date(b.start_date).getTime());
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[420px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/summer-festival.jpg')" }}>
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4" style={{ color: "#ffffff" }}>
            What&apos;s On in Vancouver This Weekend
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.9)" }}>
            Family events, festivals, and activities happening in Vancouver right now. Updated weekly.
          </p>
        </div>
      </section>

      {/* Events */}
      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          {weekendEvents.length > 0 ? (
            <>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3 text-center">Upcoming Events</h2>
              <p className="text-gray-500 text-lg text-center mb-12">Events happening this weekend and in the next 7 days.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {weekendEvents.map((evt) => {
                  const sd = new Date(evt.start_date);
                  const month = MONTHS[sd.getMonth()];
                  const day = sd.getDate();
                  const h = sd.getHours();
                  const m = sd.getMinutes();
                  const ampm = h >= 12 ? "PM" : "AM";
                  const hour = h % 12 || 12;
                  const timeStr = `${sd.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })} at ${hour}:${m < 10 ? "0" : ""}${m} ${ampm}`;

                  return (
                    <a key={evt.id} href={evt.url || "#"} className="bg-white rounded-xl shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group">
                      <div className="relative h-48 overflow-hidden">
                        {evt.image ? (
                          <img src={evt.image} alt={evt.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                        ) : (
                          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 text-sm">No Image</div>
                        )}
                        <div className="absolute top-2.5 left-2.5 bg-[#5f8f4a] text-white text-center px-2.5 py-1.5 rounded-md min-w-[50px] shadow-md">
                          <span className="text-[11px] uppercase tracking-wider font-semibold block">{month}</span>
                          <span className="text-[22px] font-bold block leading-tight">{day}</span>
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="font-heading text-base font-bold mb-2">{evt.title}</h3>
                        <div className="flex items-center gap-1.5 text-sm text-gray-400 mb-1.5">
                          <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                          {timeStr}
                        </div>
                        {evt.venue && (
                          <div className="flex items-center gap-1.5 text-sm text-[#5f8f4a] font-medium">
                            <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                            {evt.venue}
                          </div>
                        )}
                      </div>
                    </a>
                  );
                })}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-5">Check Back Thursday</h2>
              <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                We update this page every Thursday with the latest events and activities for the upcoming weekend. In the meantime, browse our other guides for inspiration.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link href="/events" className="px-8 py-3.5 bg-[#2d5016] font-heading text-sm font-semibold uppercase tracking-wider rounded hover:bg-[#3d6b20] transition-colors" style={{ color: "#ffffff" }}>
                  All Events
                </Link>
                <Link href="/things-to-do" className="px-8 py-3.5 border-2 border-[#2d5016] text-[#2d5016] font-heading text-sm font-semibold uppercase tracking-wider rounded hover:bg-[#2d5016] hover:text-white transition-colors">
                  Things to Do
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-[#f8f9fa] py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8 text-center">Explore by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Free Activities", href: "/free-things-to-do", image: "/images/cat-free.jpg" },
              { title: "Kids Activities", href: "/kids-activities", image: "/images/kids-crafts.jpg" },
              { title: "Outdoor Adventures", href: "/outdoor-adventures", image: "/images/family-biking.jpg" },
              { title: "Indoor Activities", href: "/indoor-activities", image: "/images/kids-museum.jpg" },
            ].map((cat) => (
              <Link key={cat.title} href={cat.href} className="relative h-36 rounded-xl overflow-hidden group">
                <img src={cat.image} alt={cat.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-heading text-sm md:text-base font-bold" style={{ color: "#ffffff" }}>{cat.title}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2d5016] py-16 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold mb-4" style={{ color: "#ffffff" }}>
            Have an Event to Share?
          </h2>
          <p className="mb-8 text-lg" style={{ color: "rgba(255,255,255,0.85)" }}>
            Submit your Vancouver event and reach thousands of local families looking for weekend plans.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/submit-event" className="px-8 py-3.5 bg-white text-[#2d5016] font-heading text-sm font-semibold uppercase tracking-wider rounded hover:bg-gray-100 transition-colors">
              Submit Event
            </Link>
            <Link href="/events" className="px-8 py-3.5 border-2 border-white font-heading text-sm font-semibold uppercase tracking-wider rounded hover:bg-white hover:text-[#2d5016] transition-colors" style={{ color: "#ffffff" }}>
              All Events
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
