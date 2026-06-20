import React, { useState } from "react";
import heroImg from "../assets/gaur.jpg";
import { usePageMeta } from "../hooks/usePageMeta";

const COURSES = [
  {
    title: "Bhagavad Gita Study",
    desc: "Dive deep into the Gita's verses — understanding karma, dharma, devotion, and self-realization. Weekly classes led by experienced scholars with discussions and real-life application.",
    features: [
      "Verse-by-verse analysis with commentary",
      "Group discussion and Q&A sessions",
      "Practical meditations and reflections",
    ],
  },
  {
    title: "Srimad Bhagavatam Study",
    desc: "Explore the divine pastimes, theology, and devotional messages of the Srimad Bhagavatam. Classes include storytelling, reflection, and guidance for integrating teachings into daily life.",
    features: [
      "Katha sessions with commentary",
      "Scripture memorization and recitation",
      "Devotional art, poetry, and reflections",
    ],
  },
];

const SCHEDULE = [
  { day: "Tuesday",  time: "7:00 PM – 8:00 PM",  session: "Bhagavad Gita Class" },
  { day: "Thursday", time: "7:00 PM – 8:00 PM",  session: "Srimad Bhagavatam Class" },
  { day: "Sunday",   time: "5:00 PM – 7:00 PM",  session: "Combined Discourse + Kirtan" },
];

const CONTACT = {
  address: "Sri Sri Radha Murlidhar Mandir, Near Roop Darshan Photo Studio, Ram Mandir Ward, Bhusawal, Maharashtra 425201",
  phone: "+91-77670-43798 / +91-77458-96220",
  email: "iskcon.bhusawal@gmail.com",
};

function SpiritualStudyCenter() {
  const [showModal, setShowModal] = useState(false);

  usePageMeta({
    title: "Spiritual Study Center — ISKCON Bhusawal",
    description:
      "Deepen your understanding of the Bhagavad Gita and Srimad Bhagavatam at the ISKCON Bhusawal Spiritual Study Center. Weekly classes, retreats, and immersion programs.",
  });

  function handleEnroll(e) {
    e.preventDefault();
    alert("Thank you for connecting! We will reach out to you soon.");
    setShowModal(false);
  }

  return (
    <div className="bg-stone-50">
      {/* Page header */}
      <div className="page-header relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Spiritual Study Center"
            className="w-full h-full object-cover brightness-30"
          />
          <div className="absolute inset-0 bg-[#2C1208]/70" />
        </div>
        <div className="relative z-10">
          <p className="page-header-label">Education &amp; Learning</p>
          <h1 className="page-header-title mb-4">Spiritual Study Center</h1>
          <p className="text-stone-400 text-sm max-w-xl mx-auto leading-relaxed">
            Connect with us to gain the essence of Bhagavad Gita and Srimad
            Bhagavatam through guided weekly classes and immersion programs.
          </p>
        </div>
      </div>

      {/* Courses */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-4">Courses</p>
            <h2 className="section-title">Scripture Study Programs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-saffron-200">
            {COURSES.map((course, i) => (
              <div key={i} className="bg-white p-10">
                <div className="w-8 h-0.5 bg-saffron-400 mb-6" />
                <h3 className="font-serif text-2xl text-stone-900 mb-4">{course.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-6">{course.desc}</p>
                <ul className="space-y-3">
                  {course.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="w-1 h-1 bg-saffron-400 rotate-45 mt-2 shrink-0" />
                      <span className="text-stone-500 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowModal(true)}
              className="btn-primary"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </section>

      {/* Retreat */}
      <section className="py-20 bg-saffron-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src={heroImg}
                alt="Spiritual retreat program"
                loading="lazy"
                className="w-full h-80 object-cover shadow-xl"
              />
            </div>
            <div>
              <p className="section-label mb-4">Immersion</p>
              <h2 className="section-title mb-5">Retreat &amp; Immersion Programs</h2>
              <div className="w-10 h-0.5 bg-saffron-400 mb-7" />
              <p className="text-stone-600 text-sm leading-relaxed mb-5">
                Periodic retreats to deepen your study and practice. Extended sessions
                in serene surroundings with immersive classes, meditation, kirtan, and
                spiritual camaraderie.
              </p>
              <ul className="space-y-3 mb-8">
                {["3–7 day spiritual retreats", "Intensive study and meditation schedule", "Nature walks, reflection, and group sharing"].map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-saffron-400 rotate-45 mt-2 shrink-0" />
                    <span className="text-stone-500 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <button onClick={() => setShowModal(true)} className="btn-primary">
                Explore Retreats
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-4">Weekly Schedule</p>
            <h2 className="section-title">Class Timings</h2>
          </div>
          <div className="border border-stone-100">
            <div className="bg-[#2C1208] px-6 py-4">
              <h3 className="text-sm font-semibold tracking-[0.15em] uppercase text-saffron-300">
                Weekly Class Schedule
              </h3>
            </div>
            <div className="divide-y divide-stone-100">
              {SCHEDULE.map((item, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-3 px-6 py-4 text-sm ${i % 2 === 0 ? "bg-white" : "bg-saffron-50"}`}
                >
                  <div className="font-medium text-stone-900">{item.day}</div>
                  <div className="font-serif text-saffron-600 font-semibold">{item.time}</div>
                  <div className="text-stone-500">{item.session}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-[#2C1208] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <p className="section-label text-saffron-300 mb-3">Location</p>
            <h2 className="font-serif text-2xl text-white mb-2">Center Address</h2>
            <p className="text-stone-400 text-sm max-w-lg">{CONTACT.address}</p>
          </div>
          <div className="shrink-0 space-y-2 text-sm text-stone-400">
            <p><a href={`tel:${CONTACT.phone}`} className="hover:text-saffron-300 transition-colors">{CONTACT.phone}</a></p>
            <p><a href={`mailto:${CONTACT.email}`} className="hover:text-saffron-300 transition-colors">{CONTACT.email}</a></p>
            <button
              onClick={() => setShowModal(true)}
              className="mt-3 inline-block bg-saffron-500 hover:bg-saffron-400 text-white text-sm font-medium px-6 py-2.5 tracking-wide transition-colors"
            >
              Enroll / Contact
            </button>
          </div>
        </div>
      </section>

      {/* Enroll Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white w-full max-w-md">
            <div className="bg-[#2C1208] px-6 py-4 flex items-center justify-between">
              <h3 className="font-serif text-white text-lg">Enroll / Contact</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-stone-400 hover:text-white text-xl leading-none"
                aria-label="Close"
              >
                &times;
              </button>
            </div>
            <form onSubmit={handleEnroll} className="p-6 space-y-4">
              <p className="text-stone-500 text-sm leading-relaxed">
                Share your name, contact, and preference — we will reach out to you.
              </p>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full border border-stone-200 px-4 py-2.5 text-sm focus:outline-none focus:border-saffron-400"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone (e.g. +91-...)"
                required
                className="w-full border border-stone-200 px-4 py-2.5 text-sm focus:outline-none focus:border-saffron-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Email (optional)"
                className="w-full border border-stone-200 px-4 py-2.5 text-sm focus:outline-none focus:border-saffron-400"
              />
              <select
                name="preference"
                required
                className="w-full border border-stone-200 px-4 py-2.5 text-sm focus:outline-none focus:border-saffron-400 text-stone-700"
              >
                <option value="">Select course preference</option>
                <option value="Gita">Bhagavad Gita Study</option>
                <option value="Bhagavatam">Srimad Bhagavatam Study</option>
                <option value="Retreat">Retreat / Immersion</option>
              </select>
              <textarea
                name="notes"
                placeholder="Any note or question"
                rows={2}
                className="w-full border border-stone-200 px-4 py-2.5 text-sm focus:outline-none focus:border-saffron-400"
              />
              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border border-stone-200 text-stone-600 text-sm hover:bg-stone-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-saffron-500 hover:bg-saffron-600 text-white text-sm font-medium transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default SpiritualStudyCenter;
