import React from "react";
import img from "../assets/1.jpeg";
import { usePageMeta } from "../hooks/usePageMeta";

const INFO = [
  { label: "Address", value: "Sri Sri Radha Murlidhar Mandir\nNear Roop Darshan Photo Studio,\nRam Mandir Ward, Bhusawal,\nMaharashtra — 425201" },
  { label: "Phone",   value: "9011219587 · 7767037980" },
  { label: "Email",   value: "infoiskcon.bhusawal@gmail.com" },
  { label: "Temple Timings", value: "4:30 AM – 1:00 PM · 4:00 PM – 9:00 PM" },
];

function Contact() {
  usePageMeta({
    title: "Contact",
    description:
      "Get in touch with ISKCON Bhusawal — Sri Sri Radha Murlidhar Mandir. Visit us at Bhusawal, Maharashtra or call 9011219587.",
  });
  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Page header */}
      <div className="page-header">
        <p className="page-header-label">We&rsquo;d Love to Hear From You</p>
        <h1 className="page-header-title">Get in Touch</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: image + info */}
          <div>
            <div className="relative overflow-hidden mb-10">
              <img
                src={img}
                alt="Sri Sri Radha Murlidhar Mandir, Bhusawal"
                loading="lazy"
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            <dl className="space-y-8">
              {INFO.map(({ label, value }) => (
                <div key={label}>
                  <dt className="section-label mb-2">{label}</dt>
                  <dd className="text-stone-700 text-sm leading-relaxed whitespace-pre-line">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right: form */}
          <div className="bg-white border border-stone-100 shadow-sm p-8 lg:p-10">
            <h2 className="font-serif text-2xl text-stone-900 mb-8">Send a Message</h2>
            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Message received! Hare Krishna."); }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="First name"
                  required
                  className="w-full px-4 py-3 border border-stone-200 focus:outline-none focus:border-saffron-400 text-stone-800 text-sm bg-stone-50"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full px-4 py-3 border border-stone-200 focus:outline-none focus:border-saffron-400 text-stone-800 text-sm bg-stone-50"
                />
              </div>
              <input
                type="email"
                placeholder="Email address"
                required
                className="w-full px-4 py-3 border border-stone-200 focus:outline-none focus:border-saffron-400 text-stone-800 text-sm bg-stone-50"
              />
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full px-4 py-3 border border-stone-200 focus:outline-none focus:border-saffron-400 text-stone-800 text-sm bg-stone-50"
              />
              <textarea
                rows="5"
                placeholder="Your message"
                required
                className="w-full px-4 py-3 border border-stone-200 focus:outline-none focus:border-saffron-400 text-stone-800 text-sm bg-stone-50 resize-none"
              />
              <button
                type="submit"
                className="w-full bg-saffron-500 hover:bg-saffron-600 text-white text-sm font-medium py-3.5 tracking-wide transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Google Maps */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="border border-stone-100 shadow-sm overflow-hidden">
          <div className="bg-[#2C1208] px-6 py-4">
            <h2 className="text-sm font-semibold tracking-[0.15em] uppercase text-saffron-300">
              Find Us
            </h2>
          </div>
          <iframe
            title="ISKCON Bhusawal Location"
            src="https://maps.google.com/maps?q=21.0460494,75.7843423&z=16&output=embed"
            width="100%"
            height="400"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <a
          href="https://maps.google.com/?q=21.0460494,75.7843423"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 text-sm text-saffron-500 hover:text-saffron-600 font-medium transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Open in Google Maps
        </a>
      </div>
    </div>
  );
}

export default Contact;
