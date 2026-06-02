import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <img src="/images/logo.jpg" alt="Vancouver Activities" className="h-20 rounded-lg mb-4" />
          <p className="text-sm leading-relaxed text-gray-500 mb-5">
            Your family&apos;s guide to the best activities, events, and weekend fun in Vancouver, BC. Find kid-friendly things to do, seasonal guides, and local hidden gems.
          </p>
          <div className="flex gap-3">
            <a href="https://instagram.com/vancouveractivities" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#5f8f4a] transition-colors" aria-label="Instagram">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>
            </a>
            <a href="https://facebook.com/profile.php?id=61588732515283" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#5f8f4a] transition-colors" aria-label="Facebook">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
          </div>
        </div>

        {/* Activities */}
        <div>
          <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-5">
            Activities
          </h4>
          <ul className="space-y-2.5">
            {[
              { label: "Kids Activities", href: "/kids-activities" },
              { label: "Outdoor Adventures", href: "/outdoor-adventures" },
              { label: "Indoor & Rainy Day", href: "/indoor-activities" },
              { label: "Free Activities", href: "/free-things-to-do" },
              { label: "This Weekend", href: "/this-weekend" },
              { label: "All Events", href: "/events" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-gray-500 hover:text-[#5f8f4a] transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Discover */}
        <div>
          <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-5">
            Discover
          </h4>
          <ul className="space-y-2.5">
            {[
              { label: "Birthday Parties", href: "/birthday-parties" },
              { label: "Summer Camps", href: "/summer-camps" },
              { label: "Seasonal Guide", href: "/seasonal-guide" },
              { label: "Rainy Day Ideas", href: "/rainy-day-activities" },
              { label: "Local Guides", href: "/blog" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-gray-500 hover:text-[#5f8f4a] transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Information */}
        <div>
          <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-5">
            Information
          </h4>
          <ul className="space-y-2.5">
            {[
              { label: "About Us", href: "/about" },
              { label: "Contact Us", href: "/contact" },
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Sitemap", href: "/sitemap" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-gray-500 hover:text-[#5f8f4a] transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Vancouver Activities. All rights reserved.
          </span>
          <div className="flex gap-5">
            <Link href="/privacy" className="text-xs text-gray-600 hover:text-gray-400">Privacy</Link>
            <Link href="/sitemap" className="text-xs text-gray-600 hover:text-gray-400">Sitemap</Link>
            <Link href="/contact" className="text-xs text-gray-600 hover:text-gray-400">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
