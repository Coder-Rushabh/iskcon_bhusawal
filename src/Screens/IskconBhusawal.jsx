import React from "react";
import { Link } from "react-router-dom";
import kirtanImage from "../assets/iskcon-kirtan.jpg";
import prabhupada from "../assets/2.jpg";
import { usePageMeta } from "../hooks/usePageMeta";

const PROGRAMS = [
  { title: "Morning & Evening Aarti", desc: "Daily mangal and sandhya aarti with melodious bhajans open to all visitors." },
  { title: "Bhagavad Gita Classes",  desc: "Weekly guided study of the Gita — understanding life's purpose through Vedic wisdom." },
  { title: "Sunday Love Feast",       desc: "Delicious sanctified prasadam and spiritual association every Sunday for the whole family." },
  { title: "Kirtan & Bhajans",        desc: "Congregational chanting of the Hare Krishna maha-mantra — the yoga for this age." },
];

const VIDEO_ID = "hGc-HlFonvo";

function IskconBhusawal() {
  usePageMeta({
    title: "ISKCON Bhusawal",
    description:
      "Learn about ISKCON Bhusawal — Sri Sri Radha Murlidhar Mandir. Our spiritual mission, programs, and history in Bhusawal, Maharashtra.",
  });

  return (
    <div className="bg-stone-50">
      {/* Page header */}
      <div className="page-header">
        <p className="page-header-label">About Us</p>
        <h1 className="page-header-title mb-4">ISKCON Bhusawal</h1>
        <p className="text-stone-400 text-sm max-w-xl mx-auto leading-relaxed">
          A divine abode dedicated to Sri Sri Radha Murlidhar — spreading love and
          devotion through the teachings of Lord Krishna.
        </p>
      </div>

      {/* About */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-4">Our Story</p>
              <h2 className="section-title mb-5">About ISKCON Bhusawal</h2>
              <div className="w-10 h-0.5 bg-saffron-400 mb-7" />
              <div className="space-y-5 text-stone-600 leading-relaxed text-[15px]">
                <p>
                  ISKCON Bhusawal is a branch of the International Society for Krishna
                  Consciousness, founded by His Divine Grace A.C. Bhaktivedanta Swami
                  Prabhupada. It serves as a spiritual oasis where people come to
                  deepen their connection with Lord Krishna through devotional service,
                  kirtan, and the study of sacred scriptures.
                </p>
                <p>
                  The temple — Sri Sri Radha Murlidhar Mandir — is named after the
                  presiding deities: Srimati Radharani and Lord Murlidhar (Krishna, the
                  one who plays the flute). Located in Bhusawal, Maharashtra, it serves
                  devotees and seekers from the entire Jalgaon district.
                </p>
                <p>
                  We conduct courses, seminars, and workshops for all — children, youth,
                  and families. Daily darshan, aarti, and prasadam distribution are open
                  to everyone, free of charge.
                </p>
              </div>
              <Link to="/contact" className="btn-primary mt-8 inline-flex">
                Visit the Temple
              </Link>
            </div>

            <div className="relative">
              <img
                src={prabhupada}
                alt="ISKCON Bhusawal Temple"
                loading="lazy"
                className="w-full object-cover shadow-xl"
                style={{ maxHeight: "520px", objectPosition: "top" }}
              />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-saffron-300 hidden lg:block pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src={kirtanImage}
                alt="Kirtan at ISKCON Bhusawal"
                loading="lazy"
                className="w-full h-80 object-cover shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="section-label mb-4">Our Mission</p>
              <h2 className="section-title mb-5">Spiritual Mission</h2>
              <div className="w-10 h-0.5 bg-saffron-400 mb-7" />
              <div className="space-y-5 text-stone-600 leading-relaxed text-[15px]">
                <p>
                  Following the mission of Srila Prabhupada, ISKCON Bhusawal strives
                  to spread the timeless wisdom of the Bhagavad Gita and Srimad
                  Bhagavatam. Through kirtans, lectures, and prasadam distribution,
                  we aim to bring peace, devotion, and joy to every heart.
                </p>
                <p>
                  Our programs serve people at every stage of life — from children
                  learning spiritual values in Gopal Fun School, to youth finding
                  purpose through IYS, to adults deepening their practice through
                  the Spiritual Study Center.
                </p>
              </div>
              <blockquote className="mt-7 border-l-2 border-saffron-400 pl-5 text-stone-500 italic text-sm">
                &ldquo;Chant Hare Krishna and be happy.&rdquo;
                <span className="block mt-1 text-stone-400 not-italic text-xs">— Srila Prabhupada</span>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-saffron-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-4">Join Us</p>
            <h2 className="section-title">Regular Programs &amp; Events</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-saffron-200">
            {PROGRAMS.map((item, i) => (
              <div key={i} className="bg-white p-8">
                <div className="w-8 h-0.5 bg-saffron-400 mb-5" />
                <h3 className="font-serif text-lg text-stone-900 mb-3">{item.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/weekly-programs" className="btn-primary">
              View Full Schedule
            </Link>
          </div>
        </div>
      </section>

      {/* Kirtan video banner */}
      <section className="relative h-72 overflow-hidden">
        <img
          src={kirtanImage}
          alt="Kirtan at ISKCON Bhusawal"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <p className="section-label text-saffron-300 mb-4">Join Us in Devotion</p>
          <h2 className="font-serif text-4xl text-white mb-6">Chant and Be Happy</h2>
          <Link to="/contact" className="btn-ghost text-white hover:bg-white hover:text-stone-900">
            Plan Your Visit
          </Link>
        </div>
      </section>

      {/* YouTube video */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label text-center mb-4">Watch</p>
          <h2 className="font-serif text-3xl text-stone-900 text-center mb-10">
            ISKCON Bhusawal on YouTube
          </h2>
          <div className="aspect-video w-full bg-stone-100">
            <iframe
              src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0`}
              title="ISKCON Bhusawal"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-saffron-500 py-16 text-center">
        <h2 className="font-serif text-3xl text-white mb-4">Visit ISKCON Bhusawal</h2>
        <p className="text-saffron-100 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
          Be part of our growing family of devotees. Participate in kirtans, seva,
          and festivals celebrating the glory of Lord Krishna.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-white text-saffron-600 hover:bg-saffron-50 text-sm font-medium px-8 py-3.5 tracking-wide transition-colors"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}

export default IskconBhusawal;
