"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
  {
    image: "/images/hero-1.jpg",
    alt: "Families enjoying outdoor activities in Vancouver BC",
    title: "What Should We Do This Weekend?",
    desc: "The question every Vancouver parent asks on Thursday night. We have the answer — updated weekly with local events, activities, and hidden gems.",
    btn1: { label: "This Weekend", href: "/this-weekend" },
    btn2: { label: "Browse All Activities", href: "/things-to-do" },
  },
  {
    image: "/images/hero-2.jpg",
    alt: "Family exploring Science World Vancouver on a rainy day",
    title: "It's Raining. Again. Now What?",
    desc: "166 rainy days a year means we've mastered indoor fun. Science World, trampoline parks, play cafes, pottery, swimming — 40+ ideas ready.",
    btn1: { label: "Rainy Day Ideas", href: "/rainy-day-activities" },
    btn2: { label: "Indoor Activities", href: "/indoor-activities" },
  },
  {
    image: "/images/hero-3.jpg",
    alt: "Lynn Canyon Suspension Bridge in North Vancouver BC",
    title: "Skip Capilano. Try Lynn Canyon.",
    desc: "Same suspension bridge. Completely free. Plus swimming holes, waterfalls, and no tourist crowds. The local's guide to outdoor Vancouver.",
    btn1: { label: "Outdoor Adventures", href: "/outdoor-adventures" },
    btn2: { label: "Free Activities", href: "/free-things-to-do" },
  },
  {
    image: "/images/hero-4.jpg",
    alt: "Kids birthday party at indoor play centre in Vancouver",
    title: "Birthdays, Camps & Weekend Plans",
    desc: "Birthday party venues rated by real parents. Summer camp listings across Metro Van. Weekend events updated every Thursday.",
    btn1: { label: "Birthday Parties", href: "/birthday-parties" },
    btn2: { label: "Summer Camps", href: "/summer-camps" },
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => setCurrent(index);
  const prev = () => setCurrent((current - 1 + slides.length) % slides.length);
  const next = () => setCurrent((current + 1) % slides.length);

  return (
    <div className="relative w-full h-[85vh] min-h-[500px] max-h-[800px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/40 flex items-center justify-center text-center px-5">
            <div className="max-w-[750px]">
              <h1 className="font-heading text-4xl md:text-5xl font-extrabold mb-4 leading-tight drop-shadow-lg" style={{ color: "#ffffff" }}>
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.95)" }}>
                {slide.desc}
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link
                  href={slide.btn1.href}
                  className="px-8 py-4 font-heading text-sm font-semibold uppercase tracking-wider rounded border-2 transition-all"
                  style={{ backgroundColor: "#2d5016", color: "#ffffff", borderColor: "#2d5016" }}
                >
                  {slide.btn1.label}
                </Link>
                <Link
                  href={slide.btn2.href}
                  className="px-8 py-4 font-heading text-sm font-semibold uppercase tracking-wider rounded border-2 transition-all hover:opacity-90"
                  style={{ backgroundColor: "#ffffff", color: "#2d5016", borderColor: "#ffffff" }}
                >
                  {slide.btn2.label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/15 backdrop-blur-sm text-white text-xl flex items-center justify-center hover:bg-white/30 transition-colors z-10"
        aria-label="Previous"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/15 backdrop-blur-sm text-white text-xl flex items-center justify-center hover:bg-white/30 transition-colors z-10"
        aria-label="Next"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === current ? "bg-white scale-125" : "bg-white/40"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
