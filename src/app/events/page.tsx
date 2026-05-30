"use client";

import { useState, useMemo } from "react";
import eventsData from "@/data/events.json";

const MONTHS = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
const MONTH_NAMES = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const DAY_LABELS = ["Su","Mo","Tu","We","Th","Fr","Sa"];

type Event = typeof eventsData[0];

export default function EventsPage() {
  const [search, setSearch] = useState("");
  const [selectedCats, setSelectedCats] = useState<number[]>([]);
  const [sortBy, setSortBy] = useState("date");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [timeFilter, setTimeFilter] = useState("all");
  const [page, setPage] = useState(1);
  const [calMonth, setCalMonth] = useState(new Date().getMonth());
  const [calYear, setCalYear] = useState(new Date().getFullYear());
  const perPage = 12;

  // Build category list from events
  const categories = useMemo(() => {
    const catMap: Record<number, { name: string; count: number }> = {};
    eventsData.forEach((evt) => {
      (evt.categories || []).forEach((cat) => {
        if (!catMap[cat.id]) catMap[cat.id] = { name: cat.name, count: 0 };
        catMap[cat.id].count++;
      });
    });
    return catMap;
  }, []);

  // Filter and sort events
  const filtered = useMemo(() => {
    let result = eventsData.filter((evt) => {
      if (search && !evt.title.toLowerCase().includes(search.toLowerCase()) && !(evt.description || "").toLowerCase().includes(search.toLowerCase())) return false;
      if (selectedCats.length > 0) {
        const evtCatIds = (evt.categories || []).map((c) => c.id);
        if (!selectedCats.some((id) => evtCatIds.includes(id))) return false;
      }
      if (timeFilter !== "all") {
        const sd = new Date(evt.start_date);
        const now = new Date();
        if (timeFilter === "month" && (sd.getMonth() !== calMonth || sd.getFullYear() !== calYear)) return false;
        if (timeFilter === "week") {
          const weekStart = new Date(now);
          weekStart.setDate(now.getDate() - now.getDay());
          const weekEnd = new Date(weekStart);
          weekEnd.setDate(weekStart.getDate() + 7);
          if (sd < weekStart || sd > weekEnd) return false;
        }
      }
      return true;
    });

    if (sortBy === "az") result.sort((a, b) => a.title.localeCompare(b.title));
    else if (sortBy === "za") result.sort((a, b) => b.title.localeCompare(a.title));
    else result.sort((a, b) => new Date(a.start_date).getTime() - new Date(b.start_date).getTime());

    return result;
  }, [search, selectedCats, sortBy, timeFilter, calMonth, calYear]);

  const totalPages = Math.ceil(filtered.length / perPage);
  const pageEvents = filtered.slice((page - 1) * perPage, page * perPage);

  const toggleCat = (id: number) => {
    setSelectedCats((prev) => prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]);
    setPage(1);
  };

  const clearFilters = () => {
    setSearch("");
    setSelectedCats([]);
    setTimeFilter("all");
    setSortBy("date");
    setPage(1);
  };

  // Calendar
  const calFirst = new Date(calYear, calMonth, 1);
  const calLast = new Date(calYear, calMonth + 1, 0);
  const calStartDay = calFirst.getDay();
  const today = new Date();

  const calNav = (dir: number) => {
    let m = calMonth + dir;
    let y = calYear;
    if (m > 11) { m = 0; y++; }
    if (m < 0) { m = 11; y--; }
    setCalMonth(m);
    setCalYear(y);
  };

  return (
    <div className="max-w-7xl mx-auto px-5 py-10 font-sans">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b-2 border-[#5f8f4a] pb-4">
        <h2 className="font-heading text-2xl font-bold" style={{ color: "#2c3e50" }}>Full List of Vancouver Events</h2>
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex">
            <button onClick={() => setView("grid")} className={`px-3.5 py-2 text-sm border border-gray-300 rounded-l ${view === "grid" ? "bg-[#5f8f4a] text-white border-[#5f8f4a]" : "bg-white text-gray-500"}`}>Grid</button>
            <button onClick={() => setView("list")} className={`px-3.5 py-2 text-sm border border-gray-300 rounded-r ${view === "list" ? "bg-[#5f8f4a] text-white border-[#5f8f4a]" : "bg-white text-gray-500"}`}>List</button>
          </div>
          <select value={sortBy} onChange={(e) => { setSortBy(e.target.value); setPage(1); }} className="px-3 py-2 border border-gray-300 rounded text-sm font-sans">
            <option value="date">Sort by Date</option>
            <option value="az">Sort A-Z</option>
            <option value="za">Sort Z-A</option>
          </select>
          <span className="text-sm text-gray-400">
            {filtered.length > 0 ? `${(page-1)*perPage+1}-${Math.min(page*perPage, filtered.length)} of ${filtered.length} events` : "0 events found"}
          </span>
        </div>
      </div>

      <div className="flex gap-6 flex-col lg:flex-row">
        {/* Sidebar */}
        <div className="w-full lg:w-[280px] shrink-0">
          {/* Search */}
          <div className="bg-[#f8f9fa] rounded-lg p-4 mb-4">
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider mb-3" style={{ color: "#2c3e50" }}>Search Events</h3>
            <div className="flex">
              <input
                type="text"
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                placeholder="Keyword search..."
                className="flex-1 px-3 py-2.5 border border-gray-200 rounded-l text-sm focus:outline-none focus:border-[#5f8f4a]"
              />
              <button className="px-3.5 py-2.5 bg-[#5f8f4a] text-white rounded-r text-sm">🔍</button>
            </div>
          </div>

          {/* Time Filter */}
          <div className="bg-[#f8f9fa] rounded-lg p-4 mb-4">
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider mb-3" style={{ color: "#2c3e50" }}>Show Events For</h3>
            <div className="flex">
              {["day","week","weekend","month","all"].map((f) => (
                <button
                  key={f}
                  onClick={() => { setTimeFilter(f); setPage(1); }}
                  className={`flex-1 py-2 text-xs border border-gray-200 capitalize first:rounded-l last:rounded-r cursor-pointer transition-all duration-200 hover:bg-[#5f8f4a]/10 hover:text-[#5f8f4a] ${timeFilter === f ? "bg-[#5f8f4a] text-white border-[#5f8f4a] hover:bg-[#5f8f4a] hover:text-white" : "bg-white text-gray-500"}`}
                >
                  {f === "weekend" ? "Wknd" : f === "month" ? "Month" : f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>

            {/* Mini Calendar */}
            <div className="mt-3">
              <div className="flex justify-between items-center mb-2">
                <button onClick={() => calNav(-1)} className="text-[#5f8f4a] text-lg px-1">‹</button>
                <span className="text-sm font-semibold">{MONTH_NAMES[calMonth]} {calYear}</span>
                <button onClick={() => calNav(1)} className="text-[#5f8f4a] text-lg px-1">›</button>
              </div>
              <div className="grid grid-cols-7 gap-0.5 text-center">
                {DAY_LABELS.map((d) => <span key={d} className="text-[10px] text-gray-400 font-semibold py-1">{d}</span>)}
                {Array.from({ length: calStartDay }).map((_, i) => <span key={`e${i}`} />)}
                {Array.from({ length: calLast.getDate() }).map((_, i) => {
                  const d = i + 1;
                  const isToday = d === today.getDate() && calMonth === today.getMonth() && calYear === today.getFullYear();
                  return (
                    <button
                      key={d}
                      className={`text-xs py-1.5 rounded cursor-pointer transition-all duration-200 ${isToday ? "bg-[#5f8f4a] text-white font-bold rounded-full" : "hover:bg-[#5f8f4a]/15 hover:text-[#5f8f4a] hover:font-semibold"}`}
                      onClick={() => { setTimeFilter("day"); setPage(1); }}
                    >
                      {d}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="bg-[#f8f9fa] rounded-lg p-4 mb-4">
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider mb-3" style={{ color: "#2c3e50" }}>Categories</h3>
            <ul className="space-y-1.5">
              {Object.entries(categories).map(([id, cat]) => (
                <li key={id} className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#5f8f4a]" onClick={() => toggleCat(Number(id))}>
                  <input type="checkbox" checked={selectedCats.includes(Number(id))} readOnly className="accent-[#5f8f4a] w-4 h-4 cursor-pointer" />
                  <span>{cat.name}</span>
                  <span className="ml-auto bg-green-50 text-[#5f8f4a] text-[11px] font-semibold px-2 py-0.5 rounded-full">{cat.count}</span>
                </li>
              ))}
            </ul>
          </div>

          <button onClick={clearFilters} className="w-full py-2.5 bg-[#5f8f4a] text-white font-heading text-sm font-semibold rounded hover:bg-[#4a7a38] transition-colors">
            Clear All Filters
          </button>
        </div>

        {/* Events Grid */}
        <div className="flex-1 min-w-0">
          {pageEvents.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <p className="text-lg mb-1">No events found</p>
              <p className="text-sm">Try adjusting your filters</p>
            </div>
          ) : (
            <div className={view === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" : "space-y-5"}>
              {pageEvents.map((evt) => {
                const sd = new Date(evt.start_date);
                const month = MONTHS[sd.getMonth()];
                const day = sd.getDate();
                const h = sd.getHours();
                const m = sd.getMinutes();
                const ampm = h >= 12 ? "PM" : "AM";
                const hour = h % 12 || 12;
                const timeStr = `${sd.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" })} at ${hour}:${m < 10 ? "0" : ""}${m} ${ampm}`;

                return (
                  <div key={evt.id} className={`bg-white rounded-xl shadow-md overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer border border-transparent hover:border-[#5f8f4a]/20 ${view === "list" ? "flex flex-row" : "flex flex-col"}`}
                    onClick={() => window.open(evt.url || "#", "_self")}>
                    <div className={`relative ${view === "list" ? "w-[260px] h-[200px] shrink-0" : "w-full h-[180px]"} overflow-hidden`}>
                      {evt.image ? (
                        <img src={evt.image} alt={evt.title} className="w-full h-full object-cover" loading="lazy" />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 text-sm">No Image</div>
                      )}
                      <div className="absolute top-2.5 left-2.5 bg-[#5f8f4a] text-white text-center px-2.5 py-1.5 rounded-md min-w-[50px] shadow-md">
                        <span className="text-[11px] uppercase tracking-wider font-semibold block">{month}</span>
                        <span className="text-[22px] font-bold block leading-tight">{day}</span>
                      </div>
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                      <h3 className="font-heading text-base font-bold mb-2.5 leading-snug" style={{ color: "#2c3e50" }}>{evt.title}</h3>
                      <div className="flex items-center gap-1.5 text-sm text-gray-400 mb-1.5">
                        <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                        {timeStr}
                      </div>
                      {evt.venue && (
                        <div className="flex items-center gap-1.5 text-sm text-[#5f8f4a] font-medium mb-3">
                          <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                          {evt.venue}
                        </div>
                      )}
                      <a href={evt.url || "#"} className="mt-auto text-[#5f8f4a] text-sm font-heading font-semibold tracking-wide hover:text-[#2d5016]">
                        READ MORE →
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-8 pt-5 border-t border-gray-100">
              <button onClick={() => setPage(Math.max(1, page - 1))} disabled={page === 1} className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#5f8f4a] hover:text-[#5f8f4a] disabled:opacity-30">←</button>
              {Array.from({ length: totalPages }).map((_, i) => {
                const p = i + 1;
                if (p === 1 || p === totalPages || (p >= page - 1 && p <= page + 1)) {
                  return (
                    <button key={p} onClick={() => setPage(p)} className={`w-9 h-9 rounded-lg border text-sm font-heading font-semibold flex items-center justify-center ${p === page ? "bg-[#2d5016] text-white border-[#2d5016]" : "border-gray-200 text-gray-500 hover:border-[#5f8f4a] hover:text-[#5f8f4a]"}`}>{p}</button>
                  );
                }
                if (p === page - 2 || p === page + 2) return <span key={p} className="text-gray-400">...</span>;
                return null;
              })}
              <button onClick={() => setPage(Math.min(totalPages, page + 1))} disabled={page === totalPages} className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#5f8f4a] hover:text-[#5f8f4a] disabled:opacity-30">→</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
