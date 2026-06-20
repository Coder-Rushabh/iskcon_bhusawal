import React from "react";
import { Link } from "react-router-dom";

const FESTIVALS = [
  {
    name: "Gaura Purnima",
    month: "March",
    description:
      "The appearance day of Sri Chaitanya Mahaprabhu — the golden avatar who spread the Hare Krishna movement five hundred years ago. Celebrated with all-night kirtan and prasadam.",
  },
  {
    name: "Ratha Yatra",
    month: "June / July",
    description:
      "The Festival of Chariots — Lord Jagannath, Baladeva, and Subhadra ride in a grand procession. Thousands join the joyful kirtans and receive prasadam on the streets.",
  },
  {
    name: "Janmashtami",
    month: "August",
    description:
      "The most celebrated festival — the appearance day of Lord Sri Krishna. Fasting, midnight celebration, abhishek ceremony, and grand prasadam feast mark this auspicious occasion.",
  },
  {
    name: "Radhashtami",
    month: "September",
    description:
      "The appearance day of Srimati Radharani — the supreme devotee and eternal consort of Lord Krishna. The temple is adorned with flowers and devotional offerings.",
  },
  {
    name: "Govardhan Puja",
    month: "October / November",
    description:
      "Celebrates Lord Krishna&rsquo;s lifting of Govardhan Hill to protect the residents of Vrindavan. A grand annakut (mountain of food) is offered to the Lord.",
  },
  {
    name: "Kartik Deepotsav",
    month: "October / November",
    description:
      "The auspicious month of Kartik is the most favorable time for devotional service. Special programs, damodar ashtakam, and deepdan (lamp offerings) are held daily.",
  },
];

function Festivals() {
  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="section-label mb-4">Celebrations</p>
            <h2 className="section-title">Festivals &amp; Special Events</h2>
          </div>
          <Link
            to="/weekly-programs"
            className="text-sm font-medium text-saffron-500 hover:text-saffron-600 transition-colors flex items-center gap-2 shrink-0"
          >
            View weekly schedule
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Festival grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200">
          {FESTIVALS.map((festival, i) => (
            <div key={i} className="bg-white p-8 flex flex-col group">
              <div className="flex items-start justify-between mb-5">
                <h3 className="font-serif text-xl text-stone-900 leading-snug flex-1">
                  {festival.name}
                </h3>
                <span className="ml-4 text-xs font-medium text-saffron-500 bg-saffron-50 border border-saffron-200 px-2.5 py-1 shrink-0">
                  {festival.month}
                </span>
              </div>
              <p
                className="text-stone-500 text-sm leading-relaxed flex-1"
                dangerouslySetInnerHTML={{ __html: festival.description }}
              />
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-stone-400 text-xs mt-6">
          Exact dates vary each year based on the Vaishnava lunar calendar.
          Contact us or follow our YouTube channel for announcements.
        </p>
      </div>
    </section>
  );
}

export default Festivals;
