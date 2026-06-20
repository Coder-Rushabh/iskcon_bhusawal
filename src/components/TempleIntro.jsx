import React from "react";
import { Link } from "react-router-dom";
import img2 from "../assets/new_temple2.jpg";

const features = [
  {
    title: "New Temple Construction",
    description:
      "A magnificent new temple dedicated to Sri Sri Radha Murlidhar is rising in Bhusawal — a sanctuary of devotion, peace, and divine beauty.",
    link: "/nav-mandir-nirman",
    image: img2,
  },
  {
    title: "Spiritual Study Center",
    description:
      "Explore the depth of Bhagavad-Gita and Srimad Bhagavatam through guided courses, satsangs, and personal mentorship.",
    link: "/spiritual-study-center",
  },
  {
    title: "Youth Spiritual Programs",
    description:
      "The ISKCON Youth Service nurtures spiritual values and discipline in the next generation through engaging and transformative programs.",
    link: "/iys",
  },
];

function ArrowRight() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

function TempleIntro() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <p className="section-label mb-4">About the Temple</p>
          <h2 className="section-title mb-5">Vrindavan in Bhusawal</h2>
          <div className="w-10 h-0.5 bg-saffron-400 mb-6" />
          <p className="text-stone-500 leading-relaxed text-lg">
            Sri Sri Radha Murlidhar Mandir is a sacred space where devotees experience the joy of
            Krishna consciousness through kirtan, spiritual classes, and loving community service.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-stone-100">
          {features.map((feature, i) => (
            <div key={i} className="bg-white p-8 lg:p-10 flex flex-col group">
              {feature.image ? (
                <div className="mb-7 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    loading="lazy"
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="w-8 h-0.5 bg-saffron-400 mb-7" />
              )}

              <h3 className="font-serif text-xl text-stone-900 mb-3 leading-snug">
                {feature.title}
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed flex-1 mb-6">
                {feature.description}
              </p>
              <Link
                to={feature.link}
                className="inline-flex items-center gap-2 text-sm font-medium text-saffron-500 hover:text-saffron-600 transition-colors"
              >
                Learn more <ArrowRight />
              </Link>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-px grid grid-cols-2 md:grid-cols-4 gap-px bg-stone-100">
          {[
            { value: "1966", label: "Year ISKCON Founded" },
            { value: "850+", label: "Centres Worldwide" },
            { value: "55+", label: "Years of Service" },
            { value: "108", label: "Temples in India" },
          ].map((stat, i) => (
            <div key={i} className="bg-stone-50 px-8 py-8 text-center">
              <div className="font-serif text-3xl text-saffron-500 mb-1">{stat.value}</div>
              <div className="text-xs text-stone-500 tracking-wide uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TempleIntro;
