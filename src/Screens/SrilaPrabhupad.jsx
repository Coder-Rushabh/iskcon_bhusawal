import React from "react";
import s1 from "../assets/s1.jpg";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.jpg";
import { usePageMeta } from "../hooks/usePageMeta";

const TIMELINE = [
  {
    year: "1896",
    title: "Birth",
    desc: "Born as Abhay Charan De in Kolkata, India, on the auspicious occasion of Nandotsava — the celebration following Lord Krishna's birth.",
  },
  {
    year: "1922",
    title: "Meeting His Guru",
    desc: "Met Srila Bhaktisiddhanta Saraswati Thakur, who instructed him to spread Krishna Consciousness in the Western world.",
  },
  {
    year: "1944",
    title: "Back to Godhead",
    desc: "Founded and published Back to Godhead magazine to share Krishna's message. It continues to inspire readers worldwide.",
  },
  {
    year: "1965",
    title: "Journey to America",
    desc: "Embarked alone on the cargo ship Jaladuta to New York at age 69, enduring hardship with unshakable faith in Lord Krishna.",
  },
  {
    year: "1966",
    title: "Founded ISKCON",
    desc: "Established the International Society for Krishna Consciousness in New York City, fulfilling his guru's instruction.",
  },
  {
    year: "1972",
    title: "Bhagavad-gita As It Is",
    desc: "Published his definitive translation and commentary on the Bhagavad Gita — now the most widely read edition worldwide.",
  },
  {
    year: "1977",
    title: "Final Pastimes",
    desc: "Departed in Vrindavan, leaving behind over 70 books, 108 temples, and a global spiritual movement touching millions.",
  },
];

function SrilaPrabhupada() {
  usePageMeta({
    title: "Srila Prabhupada — Founder-Acharya of ISKCON",
    description:
      "His Divine Grace A.C. Bhaktivedanta Swami Prabhupada — Founder-Acharya of ISKCON. Learn about his life, teachings, and divine mission.",
  });

  return (
    <div className="bg-stone-50">
      {/* Page header */}
      <div className="page-header relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-30"
          style={{
            backgroundImage:
              "url('https://hkmchennai.org/wp-content/uploads/2021/11/srila-prabhupada.png')",
          }}
        />
        <div className="absolute inset-0 bg-[#2C1208]/75" />
        <div className="relative z-10">
          <p className="page-header-label">Founder-Acharya</p>
          <h1 className="page-header-title mb-4">Srila Prabhupada</h1>
          <p className="font-serif text-stone-300 italic text-lg max-w-xl mx-auto">
            &ldquo;If you simply chant Hare Krishna, your life will be sublime.&rdquo;
          </p>
        </div>
      </div>

      {/* About */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label mb-4">His Divine Grace</p>
          <h2 className="section-title mb-6">Founder-Acharya of ISKCON</h2>
          <div className="w-10 h-0.5 bg-saffron-400 mx-auto mb-8" />
          <p className="text-stone-600 leading-relaxed text-[15px] max-w-3xl mx-auto">
            His Divine Grace A.C. Bhaktivedanta Swami Prabhupada (1896–1977)
            dedicated his life to fulfilling the instruction of his spiritual master
            — to spread the teachings of Lord Krishna across the world. In his
            seventies, with no financial support, he traveled alone to America
            and founded the International Society for Krishna Consciousness.
            Today, ISKCON is a global movement that has touched millions of hearts
            across more than 100 countries.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-saffron-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-4">Life &amp; Mission</p>
            <h2 className="section-title">His Divine Journey</h2>
          </div>

          <div className="relative">
            <div className="absolute left-12 top-0 bottom-0 w-px bg-saffron-200" />
            <div className="space-y-8">
              {TIMELINE.map((item, i) => (
                <div key={i} className="relative flex gap-8 items-start">
                  <div className="shrink-0 w-24 text-right">
                    <span className="font-serif text-saffron-500 font-semibold text-base">
                      {item.year}
                    </span>
                  </div>
                  <div className="absolute left-12 top-2 w-2 h-2 bg-saffron-400 rotate-45 -translate-x-1/2" />
                  <div className="flex-1 bg-white border border-stone-100 p-6 ml-4">
                    <h3 className="font-serif text-stone-900 text-lg mb-2">{item.title}</h3>
                    <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote banner */}
      <section className="bg-saffron-500 py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-white/40" />
            <div className="w-1.5 h-1.5 bg-white rotate-45" />
            <div className="w-12 h-px bg-white/40" />
          </div>
          <blockquote>
            <p className="font-serif text-2xl sm:text-3xl text-white italic leading-snug mb-4">
              &ldquo;Chant Hare Krishna and be happy.&rdquo;
            </p>
            <footer className="text-saffron-100 text-xs tracking-widest uppercase">
              &mdash; Srila Prabhupada
            </footer>
          </blockquote>
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="w-12 h-px bg-white/40" />
            <div className="w-1.5 h-1.5 bg-white rotate-45" />
            <div className="w-12 h-px bg-white/40" />
          </div>
          <p className="text-saffron-100 text-sm mt-6 max-w-xl mx-auto leading-relaxed">
            Srila Prabhupada's message remains timeless — a call to connect with the
            divine through devotion, service, and love.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-4">Gallery</p>
            <h2 className="section-title">Memorable Moments</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-stone-200">
            {[s1, s2, s3].map((src, i) => (
              <div key={i} className="overflow-hidden h-72 bg-stone-100">
                <img
                  src={src}
                  alt={`Srila Prabhupada ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2C1208] py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-3xl text-white mb-4">
            Follow Srila Prabhupada's Teachings
          </h2>
          <p className="text-stone-400 text-sm leading-relaxed mb-8">
            Dive deeper into his transcendental wisdom through his books, lectures,
            and teachings — guiding millions on the path of Bhakti Yoga.
          </p>
          <a
            href="https://vedabase.io/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-saffron-500 hover:bg-saffron-600 text-white text-sm font-medium px-8 py-3.5 tracking-wide transition-colors"
          >
            Explore His Books — Vedabase.io
          </a>
        </div>
      </section>
    </div>
  );
}

export default SrilaPrabhupada;
