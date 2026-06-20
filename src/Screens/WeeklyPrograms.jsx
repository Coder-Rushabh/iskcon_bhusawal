import React from "react";
import { usePageMeta } from "../hooks/usePageMeta";
import img1 from "../assets/darshan/1.jpeg";
import img2 from "../assets/darshan/2.jpeg";
import img3 from "../assets/darshan/3.jpeg";
import img4 from "../assets/darshan/4.jpeg";
import img5 from "../assets/darshan/5.jpeg";
import img6 from "../assets/darshan/6.jpeg";
import img7 from "../assets/darshan/7.jpeg";
import img8 from "../assets/darshan/8.jpeg";
import img9 from "../assets/darshan/9.jpeg";

const PROGRAMS = [
  {
    day: "Tuesday",
    title: "Bhagavad Gita Class",
    description:
      "Deep discussion on the teachings of Bhagavad Gita, followed by Q&A, kirtan, and mahaprasad.",
    time: "7:00 PM – 9:30 PM",
  },
  {
    day: "Friday",
    title: "Youth Boys Meetup",
    description:
      "Interactive session for students and young professionals focused on spirituality and self-growth.",
    time: "7:30 PM – 9:00 PM",
  },
  {
    day: "Friday",
    title: "Chetna Program",
    description:
      "A devotional session designed for women and girls, focused on self-improvement and bhakti.",
    time: "4:00 PM – 6:30 PM",
  },
  {
    day: "Sunday",
    title: "Bhagavatam Class & Sunday Feast",
    description:
      "Insightful discourse on Srimad Bhagavatam followed by kirtan and the celebrated Sunday prasadam.",
    time: "8:00 AM – 10:00 AM",
  },
  {
    day: "Sunday",
    title: "Gopal Fun School",
    description:
      "Spiritual education for children through engaging stories, devotional songs, and creative activities.",
    time: "10:00 AM – 11:00 AM",
  },
];

const DARSHAN_IMAGES = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

function ClockIcon() {
  return (
    <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
    </svg>
  );
}

function WeeklyPrograms() {
  usePageMeta({
    title: "Weekly Programs",
    description:
      "Join ISKCON Bhusawal for weekly programs — Bhagavad Gita classes, Sunday feast, Gopal Fun School, and youth meetups at Sri Sri Radha Murlidhar Mandir.",
  });
  return (
    <div className="bg-stone-50">
      {/* Page header */}
      <div className="page-header">
        <p className="page-header-label">Join Us in Devotion</p>
        <h1 className="page-header-title">Weekly Programs</h1>
      </div>

      {/* Program cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200">
            {PROGRAMS.map((p, i) => (
              <article key={i} className="bg-white p-8 flex flex-col">
                <span className="section-label mb-4">{p.day}</span>
                <h3 className="font-serif text-xl text-stone-900 mb-3 leading-snug">{p.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed flex-1 mb-6">
                  {p.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-stone-400 border-t border-stone-100 pt-4">
                  <ClockIcon />
                  <span>{p.time}</span>
                </div>
              </article>
            ))}
          </div>

          {/* Visit note */}
          <div className="mt-px bg-saffron-50 border border-saffron-100 p-6 text-center text-sm text-stone-600">
            All programs are held at{" "}
            <strong className="text-stone-800">Sri Sri Radha Murlidhar Mandir</strong>, Bhusawal.
            Entry is free and open to all. Prasadam is served.
          </div>
        </div>
      </section>

      {/* Darshan gallery */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Sri Sri Radha Murlidhar</p>
            <h2 className="font-serif text-3xl text-stone-900">Darshan Gallery</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-stone-200">
            {DARSHAN_IMAGES.map((img, i) => (
              <div key={i} className="relative overflow-hidden group bg-stone-100">
                <img
                  src={img}
                  alt={`Darshan ${i + 1} — Sri Sri Radha Murlidhar Mandir Bhusawal`}
                  loading="lazy"
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default WeeklyPrograms;
