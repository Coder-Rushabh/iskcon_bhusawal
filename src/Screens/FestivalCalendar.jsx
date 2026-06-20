import React, { useState, useMemo } from "react";
import { usePageMeta } from "../hooks/usePageMeta";

const FESTIVALS = [
  // ── 2025 ──────────────────────────────────────────
  { date: "2025-01-10", name: "Saphala Ekadashi", type: "ekadashi" },
  { date: "2025-01-25", name: "Putrada Ekadashi (Vaikuntha Ekadashi)", type: "ekadashi", special: true, desc: "One of the most auspicious Ekadashis — fasting brings liberation." },
  { date: "2025-02-08", name: "Sat-tila Ekadashi", type: "ekadashi" },
  { date: "2025-02-12", name: "Nityananda Trayodashi", type: "major", desc: "Appearance day of Sri Nityananda Prabhu, the supreme devotee and associate of Lord Chaitanya." },
  { date: "2025-02-23", name: "Jaya Ekadashi", type: "ekadashi" },
  { date: "2025-02-24", name: "Srila Bhaktisiddhanta Sarasvati Thakura — Disappearance", type: "vaishnava" },
  { date: "2025-03-10", name: "Vijaya Ekadashi", type: "ekadashi" },
  { date: "2025-03-13", name: "Gaura Purnima", type: "major", special: true, desc: "Appearance day of Sri Chaitanya Mahaprabhu — the golden avatar who spread the Hare Krishna maha-mantra." },
  { date: "2025-03-25", name: "Papamochani Ekadashi", type: "ekadashi" },
  { date: "2025-04-06", name: "Rama Navami", type: "major", desc: "Appearance day of Lord Sri Ramachandra, the ideal king and seventh avatar of Vishnu." },
  { date: "2025-04-09", name: "Kamada Ekadashi", type: "ekadashi" },
  { date: "2025-04-23", name: "Varuthini Ekadashi", type: "ekadashi" },
  { date: "2025-05-08", name: "Mohini Ekadashi", type: "ekadashi" },
  { date: "2025-05-12", name: "Nrisimha Chaturdashi", type: "major", desc: "Appearance day of Lord Nrisimhadeva — the half-man, half-lion avatar who protected Prahlada Maharaja." },
  { date: "2025-05-23", name: "Apara Ekadashi", type: "ekadashi" },
  { date: "2025-06-06", name: "Nirjala Ekadashi", type: "ekadashi", special: true, desc: "The most sacred Ekadashi — complete fast without even water. Observing this equals the merit of all 24 Ekadashis." },
  { date: "2025-06-20", name: "Yogini Ekadashi", type: "ekadashi" },
  { date: "2025-06-27", name: "Ratha Yatra", type: "major", desc: "Grand festival of the chariots of Lord Jagannatha, Baladeva, and Subhadra. Celebrated worldwide." },
  { date: "2025-07-05", name: "Sayana Ekadashi", type: "ekadashi" },
  { date: "2025-07-20", name: "Kamika Ekadashi", type: "ekadashi" },
  { date: "2025-08-04", name: "Sravana Putrada Ekadashi", type: "ekadashi" },
  { date: "2025-08-16", name: "Sri Krishna Janmashtami", type: "major", special: true, desc: "Appearance day of Lord Sri Krishna — the Supreme Personality of Godhead. Midnight celebration with kirtan, abhishek & drama." },
  { date: "2025-08-17", name: "Srila Prabhupada Vyasa Puja", type: "prabhupada", desc: "Appearance day of ISKCON Founder-Acarya A.C. Bhaktivedanta Swami Prabhupada." },
  { date: "2025-08-19", name: "Annada Ekadashi", type: "ekadashi" },
  { date: "2025-09-02", name: "Radhashtami", type: "major", special: true, desc: "Appearance day of Srimati Radharani — the eternal consort of Lord Krishna and embodiment of divine love." },
  { date: "2025-09-03", name: "Parsva Ekadashi", type: "ekadashi" },
  { date: "2025-09-17", name: "Indira Ekadashi", type: "ekadashi" },
  { date: "2025-10-02", name: "Pasankusa Ekadashi", type: "ekadashi" },
  { date: "2025-10-17", name: "Rama Ekadashi", type: "ekadashi" },
  { date: "2025-10-20", name: "Diwali — Naraka Chaturdashi", type: "major", desc: "Festival of lights. ISKCON celebrates with special aarti, lamps, and fireworks." },
  { date: "2025-10-22", name: "Govardhan Puja — Annakuta", type: "major", desc: "Celebration of Lord Krishna lifting Govardhan Hill. Massive food offering (Annakuta) made to the Lord." },
  { date: "2025-11-01", name: "Haribodhini Ekadashi (Devutthana)", type: "ekadashi", special: true, desc: "Lord Vishnu awakens from His cosmic sleep on this auspicious day." },
  { date: "2025-11-09", name: "Srila Prabhupada — Disappearance Day", type: "prabhupada", desc: "Disappearance day of ISKCON Founder-Acarya A.C. Bhaktivedanta Swami Prabhupada (1977)." },
  { date: "2025-11-16", name: "Utpanna Ekadashi", type: "ekadashi" },
  { date: "2025-12-01", name: "Mokshada Ekadashi — Gita Jayanti", type: "ekadashi", special: true, desc: "Appearance day of Bhagavad Gita. Lord Krishna spoke the Gita to Arjuna on the battlefield of Kurukshetra on this day." },
  { date: "2025-12-16", name: "Saphala Ekadashi", type: "ekadashi" },
  { date: "2025-12-30", name: "Vaikuntha Ekadashi (Putrada)", type: "ekadashi", special: true, desc: "Fasting on this Ekadashi grants liberation and entry into Vaikuntha." },
  // ── 2026 ──────────────────────────────────────────
  { date: "2026-01-14", name: "Sat-tila Ekadashi", type: "ekadashi" },
  { date: "2026-01-29", name: "Jaya Ekadashi", type: "ekadashi" },
  { date: "2026-02-01", name: "Nityananda Trayodashi", type: "major", desc: "Appearance day of Sri Nityananda Prabhu." },
  { date: "2026-02-13", name: "Vijaya Ekadashi", type: "ekadashi" },
  { date: "2026-03-03", name: "Gaura Purnima", type: "major", special: true, desc: "Appearance day of Sri Chaitanya Mahaprabhu." },
  { date: "2026-03-14", name: "Papamochani Ekadashi", type: "ekadashi" },
  { date: "2026-03-26", name: "Rama Navami", type: "major", desc: "Appearance day of Lord Sri Ramachandra." },
  { date: "2026-03-28", name: "Kamada Ekadashi", type: "ekadashi" },
  { date: "2026-04-27", name: "Varuthini Ekadashi", type: "ekadashi" },
  { date: "2026-05-11", name: "Mohini Ekadashi", type: "ekadashi" },
  { date: "2026-05-12", name: "Nrisimha Chaturdashi", type: "major", desc: "Appearance day of Lord Nrisimhadeva." },
  { date: "2026-05-26", name: "Apara Ekadashi", type: "ekadashi" },
  { date: "2026-06-10", name: "Nirjala Ekadashi", type: "ekadashi", special: true, desc: "Most sacred Ekadashi — complete fast without water." },
  { date: "2026-06-29", name: "Snana Yatra", type: "vaishnava", desc: "Bathing festival of Lord Jagannatha." },
  { date: "2026-07-16", name: "Ratha Yatra", type: "major", desc: "Grand festival of the chariots of Lord Jagannatha." },
  { date: "2026-08-05", name: "Sri Krishna Janmashtami", type: "major", special: true, desc: "Appearance day of Lord Sri Krishna." },
  { date: "2026-08-06", name: "Srila Prabhupada Vyasa Puja", type: "prabhupada", desc: "Appearance day of ISKCON Founder-Acarya A.C. Bhaktivedanta Swami Prabhupada." },
  { date: "2026-08-22", name: "Radhashtami", type: "major", special: true, desc: "Appearance day of Srimati Radharani." },
  { date: "2026-10-08", name: "Diwali — Naraka Chaturdashi", type: "major" },
  { date: "2026-10-10", name: "Govardhan Puja — Annakuta", type: "major", desc: "Celebration of Lord Krishna lifting Govardhan Hill." },
  { date: "2026-11-29", name: "Mokshada Ekadashi — Gita Jayanti", type: "ekadashi", special: true, desc: "Appearance day of Bhagavad Gita." },
];

const TYPE_CONFIG = {
  major:      { label: "Major Festival", color: "bg-amber-100 text-amber-800 border-amber-300", dot: "bg-amber-500", header: "bg-amber-500" },
  ekadashi:   { label: "Ekadashi",       color: "bg-violet-100 text-violet-800 border-violet-300", dot: "bg-violet-500", header: "bg-violet-500" },
  prabhupada: { label: "Prabhupada",     color: "bg-blue-100 text-blue-800 border-blue-300", dot: "bg-blue-500", header: "bg-blue-500" },
  vaishnava:  { label: "Vaishnava Day",  color: "bg-green-100 text-green-800 border-green-300", dot: "bg-green-500", header: "bg-green-500" },
};

const MONTH_NAMES = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const FILTER_TABS = ["All","Major Festivals","Ekadashi","Prabhupada"];

function formatDate(dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

function daysUntil(dateStr) {
  const today = new Date(); today.setHours(0,0,0,0);
  const target = new Date(dateStr + "T00:00:00");
  return Math.ceil((target - today) / 86400000);
}

export default function FestivalCalendar() {
  usePageMeta({
    title: "Festival Calendar 2025–26",
    description: "ISKCON Bhusawal Vaishnava festival calendar 2025–2026. Dates for Janmashtami, Gaura Purnima, Radhashtami, Ekadashi, and all major ISKCON festivals.",
  });

  const [filter, setFilter] = useState("All");

  const today = new Date(); today.setHours(0,0,0,0);

  const upcoming = useMemo(() =>
    FESTIVALS
      .filter(f => new Date(f.date + "T00:00:00") >= today)
      .slice(0, 3),
    []
  );

  const filtered = useMemo(() => {
    return FESTIVALS.filter(f => {
      if (filter === "All") return true;
      if (filter === "Major Festivals") return f.type === "major";
      if (filter === "Ekadashi") return f.type === "ekadashi";
      if (filter === "Prabhupada") return f.type === "prabhupada";
      return true;
    });
  }, [filter]);

  // Group by year → month
  const grouped = useMemo(() => {
    const map = {};
    filtered.forEach(f => {
      const d = new Date(f.date + "T00:00:00");
      const key = `${d.getFullYear()}-${d.getMonth()}`;
      if (!map[key]) map[key] = { year: d.getFullYear(), month: d.getMonth(), items: [] };
      map[key].items.push(f);
    });
    return Object.values(map).sort((a,b) => a.year !== b.year ? a.year - b.year : a.month - b.month);
  }, [filtered]);

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Header */}
      <div className="page-header">
        <p className="page-header-label">Hare Krishna — 2025 & 2026</p>
        <h1 className="page-header-title">Festival Calendar</h1>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Upcoming banner */}
        {upcoming.length > 0 && (
          <div className="mb-10">
            <p className="section-label mb-5">Coming Up Next</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {upcoming.map((f, i) => {
                const days = daysUntil(f.date);
                const cfg = TYPE_CONFIG[f.type];
                return (
                  <div key={i} className="bg-white border border-stone-100 shadow-sm p-5 relative overflow-hidden">
                    <div className={`absolute top-0 left-0 w-1 h-full ${cfg.header}`} />
                    <div className="pl-3">
                      <span className={`text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded border ${cfg.color}`}>
                        {days === 0 ? "Today" : days === 1 ? "Tomorrow" : `In ${days} days`}
                      </span>
                      <p className="font-serif text-base text-stone-900 mt-2 leading-snug">{f.name}</p>
                      <p className="text-xs text-stone-400 mt-1">{formatDate(f.date)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mb-6">
          {Object.entries(TYPE_CONFIG).map(([key, cfg]) => (
            <div key={key} className="flex items-center gap-2 text-xs text-stone-500">
              <span className={`w-2.5 h-2.5 rounded-full ${cfg.dot}`} />
              {cfg.label}
            </div>
          ))}
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {FILTER_TABS.map(tab => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`text-sm font-medium px-5 py-2 border transition-colors duration-200 ${
                filter === tab
                  ? "bg-saffron-500 border-saffron-500 text-white"
                  : "border-stone-200 text-stone-600 hover:border-saffron-400 hover:text-saffron-500 bg-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Month groups */}
        <div className="space-y-10">
          {grouped.map(({ year, month, items }) => (
            <div key={`${year}-${month}`}>
              <div className="flex items-center gap-4 mb-5">
                <h2 className="font-serif text-2xl text-stone-900">
                  {MONTH_NAMES[month]} <span className="text-saffron-500">{year}</span>
                </h2>
                <div className="flex-1 h-px bg-stone-200" />
              </div>

              <div className="space-y-3">
                {items.map((f, i) => {
                  const cfg = TYPE_CONFIG[f.type];
                  const days = daysUntil(f.date);
                  const isPast = days < 0;
                  const isToday = days === 0;

                  return (
                    <div
                      key={i}
                      className={`flex gap-4 items-start bg-white border border-stone-100 p-4 sm:p-5 transition-opacity ${isPast ? "opacity-50" : ""} ${isToday ? "ring-2 ring-saffron-400" : ""}`}
                    >
                      {/* Date block */}
                      <div className="shrink-0 text-center w-14">
                        <div className="text-2xl font-serif font-bold text-saffron-500 leading-none">
                          {new Date(f.date + "T00:00:00").getDate()}
                        </div>
                        <div className="text-[10px] text-stone-400 uppercase tracking-wide mt-0.5">
                          {MONTH_NAMES[month].slice(0,3)}
                        </div>
                      </div>

                      {/* Divider */}
                      <div className={`w-0.5 self-stretch shrink-0 ${cfg.dot}`} />

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-3 flex-wrap">
                          <div>
                            <p className={`font-serif text-base leading-snug ${isPast ? "text-stone-400" : "text-stone-900"} ${f.special ? "font-semibold" : ""}`}>
                              {f.name}
                              {f.special && <span className="ml-2 text-saffron-500">★</span>}
                            </p>
                            {f.desc && (
                              <p className="text-xs text-stone-500 mt-1 leading-relaxed">{f.desc}</p>
                            )}
                          </div>
                          <span className={`text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded border shrink-0 ${cfg.color}`}>
                            {isToday ? "Today" : cfg.label}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-14 bg-amber-50 border border-amber-200 p-5 text-sm text-amber-800 leading-relaxed">
          <strong>Note:</strong> Festival dates follow the Vaishnava lunar calendar and may vary slightly by location. Dates listed are based on the IST (India Standard Time) timezone for Bhusawal, Maharashtra. Please confirm with the temple for local celebration timings.
        </div>
      </div>
    </div>
  );
}
