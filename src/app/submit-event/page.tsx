"use client";

import { useState } from "react";
import Link from "next/link";

const categories = [
  "Community Events",
  "Music & Arts",
  "Sports & Recreation",
  "Family-Focused",
  "Food & Drink",
  "Outdoor Activities",
  "Seasonal Events",
  "Nightlife & Entertainment",
  "Festivals",
  "Educational & Workshops",
];

const guidelines = [
  "Events must take place in Metro Vancouver (Vancouver, Burnaby, Richmond, North Vancouver, Surrey, etc.)",
  "All events must be open to the public or have publicly available tickets",
  "Include accurate dates, times, and location details",
  "Provide a working website URL or social media link for the event",
  "Events must be family-friendly or clearly indicate age restrictions",
  "We review all submissions within 48 hours",
  "Recurring events can be submitted once — note the recurring schedule in the description",
  "Free events are prioritized and highlighted on our calendar",
];

export default function SubmitEventPage() {
  const [formData, setFormData] = useState({
    eventName: "",
    date: "",
    time: "",
    location: "",
    category: "",
    description: "",
    contactEmail: "",
    websiteUrl: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-[420px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-3.jpg')" }}>
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4" style={{ color: "#ffffff" }}>
            Submit Your Event
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.9)" }}>
            Have a Vancouver event to share? Submit it here and reach thousands of local families and visitors looking for things to do.
          </p>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">Event Details</h2>

              {submitted ? (
                <div className="bg-white rounded-xl shadow-md p-10 text-center">
                  <span className="text-[#5f8f4a] text-5xl mb-4 block">&#10003;</span>
                  <h3 className="font-heading text-2xl font-bold mb-3">Event Submitted!</h3>
                  <p className="text-gray-500 text-lg mb-6">
                    Thank you for submitting your event. Our team will review it within 48 hours. If approved, it will appear on our events calendar.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ eventName: "", date: "", time: "", location: "", category: "", description: "", contactEmail: "", websiteUrl: "" });
                    }}
                    className="px-6 py-2.5 bg-[#5f8f4a] font-heading text-sm font-semibold uppercase tracking-wider rounded hover:bg-[#4a7a38] transition-colors"
                    style={{ color: "#ffffff" }}
                  >
                    Submit Another Event
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-8 space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Event Name *</label>
                    <input
                      type="text"
                      name="eventName"
                      required
                      value={formData.eventName}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#5f8f4a] focus:ring-1 focus:ring-[#5f8f4a]"
                      placeholder="e.g. Vancouver Cherry Blossom Festival"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Date *</label>
                      <input
                        type="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#5f8f4a] focus:ring-1 focus:ring-[#5f8f4a]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Time *</label>
                      <input
                        type="time"
                        name="time"
                        required
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#5f8f4a] focus:ring-1 focus:ring-[#5f8f4a]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Location / Venue *</label>
                    <input
                      type="text"
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#5f8f4a] focus:ring-1 focus:ring-[#5f8f4a]"
                      placeholder="e.g. Stanley Park, Vancouver"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Category *</label>
                    <select
                      name="category"
                      required
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#5f8f4a] focus:ring-1 focus:ring-[#5f8f4a] bg-white"
                    >
                      <option value="">Select a category</option>
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Description *</label>
                    <textarea
                      name="description"
                      required
                      rows={5}
                      value={formData.description}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#5f8f4a] focus:ring-1 focus:ring-[#5f8f4a] resize-vertical"
                      placeholder="Describe the event — what it is, who it's for, what to expect, pricing (if applicable), etc."
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Contact Email *</label>
                      <input
                        type="email"
                        name="contactEmail"
                        required
                        value={formData.contactEmail}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#5f8f4a] focus:ring-1 focus:ring-[#5f8f4a]"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Website URL</label>
                      <input
                        type="url"
                        name="websiteUrl"
                        value={formData.websiteUrl}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#5f8f4a] focus:ring-1 focus:ring-[#5f8f4a]"
                        placeholder="https://yourevent.com"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#2d5016] font-heading text-sm font-semibold uppercase tracking-wider rounded-lg hover:bg-[#3d6b20] transition-colors"
                    style={{ color: "#ffffff" }}
                  >
                    Submit Event for Review
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    By submitting, you confirm this event is accurate and open to the public. We review all submissions within 48 hours.
                  </p>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-[#f8f9fa] rounded-xl p-6 mb-6">
                <h3 className="font-heading text-lg font-bold mb-4">Submission Guidelines</h3>
                <ul className="space-y-3">
                  {guidelines.map((g) => (
                    <li key={g} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <span className="text-[#5f8f4a] mt-0.5 shrink-0 font-bold">&#10003;</span>
                      <span className="leading-relaxed">{g}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#2d5016] rounded-xl p-6">
                <h3 className="font-heading text-lg font-bold mb-3" style={{ color: "#ffffff" }}>
                  Need Help?
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.85)" }}>
                  Having trouble submitting your event? Contact us directly and we will help you get it listed.
                </p>
                <Link href="/contact" className="inline-block px-5 py-2.5 bg-white border-2 border-[#2d5016] font-heading text-sm font-semibold rounded hover:bg-[#2d5016] transition-colors" style={{ color: "#2d5016" }}>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2d5016] py-16 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold mb-4" style={{ color: "#ffffff" }}>
            Browse Existing Events
          </h2>
          <p className="mb-8 text-lg" style={{ color: "rgba(255,255,255,0.85)" }}>
            Check out what is already happening in Vancouver before submitting your event.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/events" className="px-8 py-3.5 bg-white border-2 border-[#2d5016] font-heading text-sm font-semibold uppercase tracking-wider rounded hover:bg-[#2d5016] transition-colors" style={{ color: "#2d5016" }}>
              All Events
            </Link>
            <Link href="/this-weekend" className="px-8 py-3.5 border-2 border-white font-heading text-sm font-semibold uppercase tracking-wider rounded hover:bg-white hover:text-[#2d5016] transition-colors" style={{ color: "#ffffff" }}>
              This Weekend
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
