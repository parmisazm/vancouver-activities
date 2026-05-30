"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  {
    label: "Things To Do",
    href: "/things-to-do",
    children: [
      { label: "Kids Activities", href: "/kids-activities" },
      { label: "Outdoor Adventures", href: "/outdoor-adventures" },
      { label: "Free Activities", href: "/free-things-to-do" },
      { label: "Indoor & Rainy Day", href: "/indoor-activities" },
      { label: "Birthday Parties", href: "/birthday-parties" },
    ],
  },
  {
    label: "This Weekend",
    href: "/this-weekend",
  },
  {
    label: "Events",
    href: "/events",
    children: [
      { label: "All Events", href: "/events" },
      { label: "Family Events", href: "/events?cat=family" },
      { label: "Free Events", href: "/events?cat=free" },
      { label: "Submit Event", href: "/submit-event" },
    ],
  },
  {
    label: "Guides",
    href: "/blog",
    children: [
      { label: "Seasonal Guide", href: "/seasonal-guide" },
      { label: "Rainy Day Activities", href: "/rainy-day-activities" },
      { label: "Summer Camps", href: "/summer-camps" },
      { label: "All Guides", href: "/blog" },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-[1380px] mx-auto px-4 flex items-center justify-between h-24">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <div className="flex flex-col">
            <span className="font-heading text-xl font-bold text-gray-900 leading-tight">
              Vancouver Activities
            </span>
            <span className="text-[9px] font-semibold tracking-[2.5px] text-gray-400 uppercase">
              Explore · Experience · Enjoy
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className="px-4 py-2 text-[19px] font-bold text-gray-700/80 hover:text-[#2d5016] transition-colors rounded-md tracking-wide"
                style={{ fontFamily: "var(--font-adamina), Georgia, serif", letterSpacing: "1px" }}
              >
                {item.label}
                {item.children && (
                  <svg className="inline-block w-3 h-3 ml-1 -mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>
              {item.children && openDropdown === item.label && (
                <div className="absolute top-full left-0 bg-white shadow-lg border-t-[3px] border-[#2d5016] py-3 min-w-[260px] z-50">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block px-6 py-2.5 text-[17px] font-bold text-gray-800 hover:text-[#2d5016] hover:bg-gray-50/80 transition-colors"
                      style={{ fontFamily: "var(--font-adamina), Georgia, serif" }}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 pb-4">
          {navItems.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                className="block px-6 py-3 text-[17px] font-bold text-gray-700/80 hover:text-[#2d5016] hover:bg-gray-50"
                style={{ fontFamily: "var(--font-adamina), Georgia, serif", letterSpacing: "1px" }}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.children?.map((child) => (
                <Link
                  key={child.label}
                  href={child.href}
                  className="block px-10 py-2 text-[15px] font-medium text-gray-500 hover:text-[#2d5016]"
                  style={{ fontFamily: "var(--font-adamina), Georgia, serif" }}
                  onClick={() => setMobileOpen(false)}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
