"use client";

import Link from "next/link";
import { useState } from "react";

const leftNav = [
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
];

const rightNav = [
  {
    label: "Events",
    href: "/events",
  },
  {
    label: "Blogs",
    href: "/blog",
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
      <div className="max-w-[1500px] mx-auto px-4 flex items-center h-44">
        {/* Left — Things To Do, This Weekend */}
        <nav className="hidden lg:flex items-center gap-2 flex-1 justify-end">
          {leftNav.map((item) => (
            <div key={item.label} className="relative group" onMouseEnter={() => setOpenDropdown(item.label)} onMouseLeave={() => setOpenDropdown(null)}>
              <Link href={item.href} className="px-3 py-2 text-[20px] font-bold text-gray-700 hover:text-[#326765] transition-colors rounded-md" style={{ fontFamily: "var(--font-adamina), Georgia, serif", letterSpacing: "0.5px" }}>
                {item.label}
                {item.children && <svg className="inline-block w-3 h-3 ml-1 -mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>}
              </Link>
              {item.children && openDropdown === item.label && (
                <div className="absolute top-full left-0 bg-white rounded-b-xl shadow-2xl py-4 min-w-[260px] z-50 border-t-[3px] border-[#2d5016]">
                  {item.children.map((child) => (
                    <Link key={child.label} href={child.href} className="block px-6 py-3 text-[17px] font-semibold text-gray-600 hover:text-[#2d5016] hover:bg-[#f0f7ec] hover:pl-8 transition-all duration-200 border-l-3 border-transparent hover:border-[#2d5016]" style={{ fontFamily: "var(--font-adamina), Georgia, serif" }}>{child.label}</Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Center — Logo */}
        <Link href="/" className="flex-shrink-0 mx-4">
          <img src="/images/logo.jpg" alt="Vancouver Activities" className="h-[160px] w-auto" />
        </Link>

        {/* Right — Events, Guides, Contact Us */}
        <div className="hidden lg:flex items-center gap-2 flex-1 justify-start">
          {rightNav.map((item) => (
            <div key={item.label} className="relative group" onMouseEnter={() => setOpenDropdown(item.label)} onMouseLeave={() => setOpenDropdown(null)}>
              <Link href={item.href} className="px-3 py-2 text-[20px] font-bold text-gray-700 hover:text-[#326765] transition-colors rounded-md" style={{ fontFamily: "var(--font-adamina), Georgia, serif", letterSpacing: "0.5px" }}>
                {item.label}
                {item.children && <svg className="inline-block w-3 h-3 ml-1 -mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>}
              </Link>
              {item.children && openDropdown === item.label && (
                <div className="absolute top-full right-0 bg-white rounded-b-xl shadow-2xl py-4 min-w-[260px] z-50 border-t-[3px] border-[#2d5016]">
                  {item.children.map((child) => (
                    <Link key={child.label} href={child.href} className="block px-6 py-3 text-[17px] font-semibold text-gray-600 hover:text-[#2d5016] hover:bg-[#f0f7ec] hover:pl-8 transition-all duration-200 border-l-3 border-transparent hover:border-[#2d5016]" style={{ fontFamily: "var(--font-adamina), Georgia, serif" }}>{child.label}</Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/contact" className="ml-4 px-7 py-3 bg-[#2d5016] rounded-lg font-heading text-sm font-semibold uppercase tracking-wider hover:bg-[#1a3a0a] transition-colors" style={{ color: "#ffffff" }}>
            Contact Us
          </Link>
        </div>

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
          {[...leftNav, ...rightNav].map((item) => (
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
