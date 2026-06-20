import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/darshan/1.jpeg';
import img2 from '../assets/darshan/2.jpeg';
import img3 from '../assets/darshan/3.jpeg';
import img4 from '../assets/darshan/4.jpeg';
import img5 from '../assets/darshan/5.jpeg';
import img6 from '../assets/darshan/6.jpeg';
import img7 from '../assets/darshan/7.jpeg';
import img8 from '../assets/darshan/8.jpeg';
import img9 from '../assets/darshan/9.jpeg';
import gaur from '../assets/gaur.jpg';

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
      'A special interactive session for students and young professionals focused on spirituality and self-growth.',
    time: '7:30 PM - 9:00 PM',
    image: gaur,
    link: '/iys'
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
        </div>
      </section>
    </div>
  );
}

export default WeeklyPrograms;
