import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/gaur.jpg";
import wwt from "../assets/wwt.jpg";
import ffl from "../assets/ffl.jpg";
import { usePageMeta } from "../hooks/usePageMeta";

const PILLARS = [
  {
    src: img1,
    alt: "Bhakti Yoga",
    title: "Bhakti Yoga",
    desc: "A path of love and devotion toward God, expressed through chanting, prayer, and service. It connects the soul to Krishna in eternal joy.",
  },
  {
    src: wwt,
    alt: "Temples Worldwide",
    title: "Temples Worldwide",
    desc: "With centers in over 100 countries, ISKCON inspires millions through cultural festivals, spiritual retreats, and vegetarian food programs.",
  },
  {
    src: ffl,
    alt: "Food for Life",
    title: "Food for Life",
    desc: "ISKCON's Food for Life initiative serves millions of free nutritious vegetarian meals daily, spreading compassion through food.",
  },
];

const STATS = [
  { value: "1966", label: "Founded" },
  { value: "600+", label: "Centers worldwide" },
  { value: "100+", label: "Countries" },
  { value: "55+", label: "Years of service" },
];

function IskconSociety() {
  usePageMeta({
    title: "What is ISKCON?",
    description:
      "ISKCON — the International Society for Krishna Consciousness — is a global spiritual movement founded in 1966 by Srila Prabhupada, dedicated to spreading the teachings of Lord Krishna.",
  });

  return (
    <div className="bg-stone-50">
      {/* Page header */}
      <div className="page-header">
        <p className="page-header-label">About ISKCON</p>
        <h1 className="page-header-title mb-4">What is ISKCON?</h1>
        <p className="text-stone-400 text-sm max-w-xl mx-auto leading-relaxed">
          The International Society for Krishna Consciousness — a global movement
          dedicated to spreading devotion, peace, and the teachings of Lord Krishna.
        </p>
      </div>

      {/* About */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label mb-4">A Global Spiritual Movement</p>
          <h2 className="section-title mb-6">Founded in Devotion, Spread Worldwide</h2>
          <div className="w-10 h-0.5 bg-saffron-400 mx-auto mb-8" />
          <div className="space-y-5 text-stone-600 leading-relaxed text-[15px] text-left max-w-3xl mx-auto">
            <p>
              Founded in 1966 by His Divine Grace A.C. Bhaktivedanta Swami Prabhupada,
              ISKCON has grown into a worldwide confederation of over 600 temples,
              farms, schools, and communities. Rooted in the ancient Vedic wisdom of
              India, ISKCON focuses on the practice of Bhakti Yoga — the yoga of love
              and devotion to Lord Krishna.
            </p>
            <p>
              The mission of ISKCON is to help every soul reconnect with their spiritual
              nature through chanting the Hare Krishna mantra, reading the Bhagavad Gita,
              and engaging in selfless devotional service. Every program, every kirtan,
              every act of seva is an expression of this mission.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-saffron-50 border-y border-saffron-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-saffron-200">
            {STATS.map((s, i) => (
              <div key={i} className="py-10 text-center">
                <div className="font-serif text-4xl text-saffron-500 mb-1">{s.value}</div>
                <div className="text-stone-500 text-xs uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ISKCON Bhusawal */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-4">Bhusawal Chapter</p>
              <h2 className="section-title mb-5">Sri Sri Radha Murlidhar Mandir</h2>
              <div className="w-10 h-0.5 bg-saffron-400 mb-7" />
              <div className="space-y-5 text-stone-600 leading-relaxed text-[15px]">
                <p>
                  ISKCON Bhusawal is a serene spiritual center dedicated to spreading
                  the divine message of Lord Krishna. Devotees regularly gather for
                  kirtans, Bhagavad Gita discourses, and festivals like Janmashtami
                  and Ratha Yatra.
                </p>
                <p>
                  The temple's deity forms of Sri Sri Radha Murlidhar are the heart of
                  devotion for the local community, inspiring love and service to the
                  Supreme Lord. We also conduct youth preaching, prasadam distribution,
                  and cultural programs that uplift society spiritually and morally.
                </p>
              </div>
              <Link to="/iskcon-bhusawal" className="btn-primary mt-8 inline-flex">
                Learn More About Our Temple
              </Link>
            </div>
            <div className="relative">
              <img
                src={img1}
                alt="ISKCON Bhusawal Sri Sri Radha Murlidhar Mandir"
                loading="lazy"
                className="w-full h-96 object-cover shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-saffron-300 hidden lg:block pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Three pillars */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-4">Three Pillars</p>
            <h2 className="section-title">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-200">
            {PILLARS.map((item, i) => (
              <div key={i} className="bg-white group overflow-hidden">
                <div className="overflow-hidden h-56">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="w-8 h-0.5 bg-saffron-400 mb-5" />
                  <h3 className="font-serif text-xl text-stone-900 mb-3">{item.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maha-Mantra quote */}
      <section className="bg-saffron-500 py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-white/40" />
            <div className="w-1.5 h-1.5 bg-white rotate-45" />
            <div className="w-12 h-px bg-white/40" />
          </div>
          <p className="font-serif text-2xl sm:text-3xl text-white italic leading-snug mb-4">
            &ldquo;Hare Krishna Hare Krishna Krishna Krishna Hare Hare &mdash;
            Hare Rama Hare Rama Rama Rama Hare Hare&rdquo;
          </p>
          <p className="text-saffron-100 text-xs tracking-widest uppercase">The Maha-Mantra</p>
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="w-12 h-px bg-white/40" />
            <div className="w-1.5 h-1.5 bg-white rotate-45" />
            <div className="w-12 h-px bg-white/40" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-3xl text-stone-900 mb-4">Join the ISKCON Family</h2>
          <p className="text-stone-500 text-sm leading-relaxed mb-8">
            Discover a life of peace, devotion, and joy through Krishna Consciousness.
            Participate in kirtans, spiritual discussions, and selfless service at
            ISKCON Bhusawal.
          </p>
          <Link to="/contact" className="btn-primary">
            Get Involved
          </Link>
        </div>
      </section>
    </div>
  );
}

export default IskconSociety;
