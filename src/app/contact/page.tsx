"use client";

import { useState } from "react";
import Link from "next/link";

const contactCards = [
  {
    title: "General Inquiries",
    desc: "Questions about the site, suggestions, or feedback.",
    email: "hello@vancouveractivities.com",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/></svg>
    ),
  },
  {
    title: "Submit an Event",
    desc: "Have an event to list? Submit it and we will review it within 48 hours.",
    email: "events@vancouveractivities.com",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"/></svg>
    ),
  },
  {
    title: "Partnerships",
    desc: "Interested in partnering with us? Venue listings, sponsorships, and collaborations.",
    email: "partners@vancouveractivities.com",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"/></svg>
    ),
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-[420px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-2.jpg')" }}>
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4" style={{ color: "#ffffff" }}>
            Get in Touch
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.9)" }}>
            Questions, suggestions, event submissions, or partnership inquiries — we would love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactCards.map((card) => (
              <div key={card.title} className="bg-white rounded-xl shadow-md p-6 text-center hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <span className="inline-block text-[#5f8f4a] mb-4">{card.icon}</span>
                <h3 className="font-heading text-lg font-bold mb-2">{card.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{card.desc}</p>
                <a href={`mailto:${card.email}`} className="text-sm text-[#5f8f4a] font-semibold hover:text-[#2d5016] transition-colors">
                  {card.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + About */}
      <section className="bg-[#f8f9fa] py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Form */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">Send Us a Message</h2>
              {submitted ? (
                <div className="bg-white rounded-xl shadow-md p-8 text-center">
                  <span className="text-[#5f8f4a] text-4xl mb-4 block">&#10003;</span>
                  <h3 className="font-heading text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-gray-500">Thank you for reaching out. We will get back to you within 48 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-8 space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#5f8f4a] focus:ring-1 focus:ring-[#5f8f4a]"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#5f8f4a] focus:ring-1 focus:ring-[#5f8f4a]"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Subject</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#5f8f4a] focus:ring-1 focus:ring-[#5f8f4a]"
                      placeholder="What is this about?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#5f8f4a] focus:ring-1 focus:ring-[#5f8f4a] resize-vertical"
                      placeholder="Tell us what you need..."
                    />
                  </div>
                  <button type="submit" className="w-full py-3 bg-[#2d5016] font-heading text-sm font-semibold uppercase tracking-wider rounded-lg hover:bg-[#3d6b20] transition-colors" style={{ color: "#ffffff" }}>
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* About sidebar */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">About Vancouver Activities</h2>
              <img src="/images/welcome-family.jpg" alt="Vancouver family activities" className="w-full h-56 object-cover rounded-xl shadow-md mb-6" />
              <p className="text-gray-600 leading-relaxed mb-4">
                Vancouver Activities is built by local parents who wanted a single, comprehensive resource for family fun in Metro Vancouver. We cover events, activities, birthday parties, camps, restaurants, and more.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Every listing is reviewed by our team. We do not accept paid placements — every recommendation is genuine and based on real family experiences.
              </p>
              <h3 className="font-heading text-lg font-bold mb-3">Follow Us</h3>
              <div className="flex gap-3">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white rounded-lg shadow text-sm font-semibold text-gray-600 hover:text-[#5f8f4a] transition-colors">Instagram</a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white rounded-lg shadow text-sm font-semibold text-gray-600 hover:text-[#5f8f4a] transition-colors">Facebook</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white rounded-lg shadow text-sm font-semibold text-gray-600 hover:text-[#5f8f4a] transition-colors">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2d5016] py-16 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold mb-4" style={{ color: "#ffffff" }}>
            Have an Event to Submit?
          </h2>
          <p className="mb-8 text-lg" style={{ color: "rgba(255,255,255,0.85)" }}>
            Use our event submission form to get your Vancouver event listed on our calendar.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/submit-event" className="px-8 py-3.5 bg-white text-[#2d5016] font-heading text-sm font-semibold uppercase tracking-wider rounded hover:bg-gray-100 transition-colors">
              Submit Event
            </Link>
            <Link href="/about" className="px-8 py-3.5 border-2 border-white font-heading text-sm font-semibold uppercase tracking-wider rounded hover:bg-white hover:text-[#2d5016] transition-colors" style={{ color: "#ffffff" }}>
              About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
