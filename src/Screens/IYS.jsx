import React, { useState } from "react";
import boysCamp from "../assets/gaur.jpg";
import { usePageMeta } from "../hooks/usePageMeta";

const CONTACT_BOYS = {
  leader: "IYS Boys Coordinator — Shriman Jitendra Kumar",
  phone: "+91-90112-19587",
};

const CONTACT_GIRLS = {
  leader: "IYS Girls Coordinator — Dr. Rekha Patil",
  phone: "+91-80077-22277",
};

const TEMPLE_CONTACT = {
  name: "Sri Sri Radha Murlidhar Mandir, ISKCON Bhusawal",
  address: "Near Roop Darshan Photo Studio, Ram Mandir Ward, Bhusawal, Maharashtra 425201",
  phone: "+91-77670-43798 / +91-90112-19587",
  email: "infoiskcon.bhusawal@gmail.com",
};

const BOYS_FEATURES = [
  { label: "Weekly sessions", detail: "Bhagavad Gita study, kirtan, and group discussion." },
  { label: "Practical skills", detail: "Public speaking, confidence building, time management." },
  { label: "Camps", detail: "Seasonal retreats and guided pilgrimages." },
];

const GIRLS_FEATURES = [
  { label: "Weekly sessions", detail: "Devotional practice, art and music classes." },
  { label: "Workshops", detail: "Self-care, emotional health, and leadership skills." },
  { label: "Cultural events", detail: "Dance, drama, and festival performances." },
];

const TESTIMONIALS = [
  { quote: "IYS changed how I see leadership — it's service first. Camps helped me find my calm.", name: "Aditya", age: 21 },
  { quote: "The cultural programs helped me reconnect with our traditions while learning new skills.", name: "Meera", age: 19 },
  { quote: "Friendly mentors and a supportive community — a great place to grow and serve.", name: "Karan", age: 24 },
];

const FAQ = [
  { q: "What is the age group for IYS?", a: "Typically youth between 13 to 30 years. Subgroups and activities are age-appropriate." },
  { q: "Are sessions free?", a: "Weekly sessions are generally free. Camps and retreats may have a small fee to cover logistics." },
  { q: "Can parents join or volunteer?", a: "Yes — parents and volunteers are welcome to assist with events, seva, and logistics." },
  { q: "What does registration require?", a: "Basic contact details. For residential events, health information and consent (if minor)." },
];

function IYS() {
  const [faqOpen, setFaqOpen] = useState({});

  usePageMeta({
    title: "ISKCON Youth Services — IYS Bhusawal",
    description:
      "ISKCON Youth Services (IYS) Bhusawal — spiritual programs for young people combining Vedic wisdom, leadership, creative arts, and seva. Separate guided programs for boys and girls.",
  });

  function toggleFaq(i) {
    setFaqOpen((s) => ({ ...s, [i]: !s[i] }));
  }

  return (
    <div className="bg-stone-50">
      {/* Page header */}
      <div className="page-header">
        <p className="page-header-label">Youth Programs</p>
        <h1 className="page-header-title mb-4">ISKCON Youth Services</h1>
        <p className="text-stone-400 text-sm max-w-xl mx-auto leading-relaxed">
          Ignite spirituality. Lead with values. A program for young hearts combining Vedic
          wisdom, creative arts, leadership, and selfless service.
        </p>
      </div>

      {/* About IYS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-4">What is IYS?</p>
              <h2 className="section-title mb-5">A Culturally Rooted Youth Movement</h2>
              <div className="w-10 h-0.5 bg-saffron-400 mb-7" />
              <div className="space-y-5 text-stone-600 leading-relaxed text-[15px]">
                <p>
                  ISKCON Youth Services (IYS) Bhusawal is a dedicated program for young
                  people — combining timeless Vedic wisdom with modern leadership skills,
                  creative arts, and community service.
                </p>
                <p>
                  Separate, guided programs run for boys and girls (ages 13–30), along
                  with shared festivals and mentorship sessions. Every activity is
                  grounded in the principles of devotion, integrity, and service.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={boysCamp}
                alt="IYS youth program at ISKCON Bhusawal"
                loading="lazy"
                className="w-full h-80 object-cover shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-saffron-300 hidden lg:block pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-saffron-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-4">Programs</p>
            <h2 className="section-title">Boys &amp; Girls Programs</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-saffron-200">
            {/* Boys */}
            <div className="bg-white p-8">
              <div className="border-l-2 border-saffron-400 pl-5 mb-7">
                <p className="section-label mb-1">Ages 13–30</p>
                <h3 className="font-serif text-2xl text-stone-900">Boys — Leadership &amp; Seva</h3>
              </div>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                A guided program blending scriptural study, outdoor retreats, leadership
                training, kirtan, and seva. Build inner strength while serving society
                with integrity and devotion.
              </p>
              <div className="space-y-4">
                {BOYS_FEATURES.map((f, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-1 bg-saffron-300 shrink-0 mt-1 mb-1" />
                    <div>
                      <div className="text-sm font-medium text-stone-900">{f.label}</div>
                      <div className="text-sm text-stone-500">{f.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-7 pt-6 border-t border-stone-100 flex flex-wrap gap-3">
                <a
                  href={`tel:${CONTACT_BOYS.phone}`}
                  className="text-sm text-saffron-600 hover:text-saffron-700 font-medium"
                >
                  {CONTACT_BOYS.phone}
                </a>
                <span className="text-stone-300">|</span>
                <span className="text-xs text-stone-400">{CONTACT_BOYS.leader}</span>
              </div>
            </div>

            {/* Girls */}
            <div className="bg-white p-8">
              <div className="border-l-2 border-saffron-400 pl-5 mb-7">
                <p className="section-label mb-1">Ages 13–30</p>
                <h3 className="font-serif text-2xl text-stone-900">Girls — Empowerment &amp; Arts</h3>
              </div>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                Nurturing confidence, creativity, and spiritual practice for young women
                through devotional arts, life-skills workshops, and community service rooted
                in Vedic values.
              </p>
              <div className="space-y-4">
                {GIRLS_FEATURES.map((f, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-1 bg-saffron-300 shrink-0 mt-1 mb-1" />
                    <div>
                      <div className="text-sm font-medium text-stone-900">{f.label}</div>
                      <div className="text-sm text-stone-500">{f.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-7 pt-6 border-t border-stone-100 flex flex-wrap gap-3">
                <a
                  href={`tel:${CONTACT_GIRLS.phone}`}
                  className="text-sm text-saffron-600 hover:text-saffron-700 font-medium"
                >
                  {CONTACT_GIRLS.phone}
                </a>
                <span className="text-stone-300">|</span>
                <span className="text-xs text-stone-400">{CONTACT_GIRLS.leader}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-4">What Youth Say</p>
            <h2 className="section-title">Voices of Youth</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-200">
            {TESTIMONIALS.map((t, i) => (
              <blockquote key={i} className="bg-white p-8">
                <div className="w-8 h-0.5 bg-saffron-400 mb-5" />
                <p className="font-serif text-stone-700 italic leading-relaxed mb-5">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="text-xs text-stone-400 uppercase tracking-widest">
                  &mdash; {t.name}, {t.age}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-4">Questions</p>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          <div className="divide-y divide-stone-200 border-y border-stone-200">
            {FAQ.map((item, i) => (
              <div key={i}>
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-center justify-between py-5 text-left"
                >
                  <span className="text-stone-900 font-medium text-sm pr-8">{item.q}</span>
                  <span className="text-saffron-500 text-lg shrink-0">{faqOpen[i] ? "−" : "+"}</span>
                </button>
                {faqOpen[i] && (
                  <div className="pb-5 text-stone-500 text-sm leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="bg-[#2C1208] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <p className="section-label text-saffron-300 mb-3">Get In Touch</p>
            <h2 className="font-serif text-2xl text-white mb-2">{TEMPLE_CONTACT.name}</h2>
            <p className="text-stone-400 text-sm">{TEMPLE_CONTACT.address}</p>
          </div>
          <div className="shrink-0 space-y-2 text-sm text-stone-400">
            <p>
              <a href={`tel:${TEMPLE_CONTACT.phone}`} className="hover:text-saffron-300 transition-colors">
                {TEMPLE_CONTACT.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${TEMPLE_CONTACT.email}`} className="hover:text-saffron-300 transition-colors">
                {TEMPLE_CONTACT.email}
              </a>
            </p>
            <a
              href={`https://wa.me/917767043798`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 bg-saffron-500 hover:bg-saffron-400 text-white text-sm font-medium px-6 py-2.5 tracking-wide transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default IYS;
