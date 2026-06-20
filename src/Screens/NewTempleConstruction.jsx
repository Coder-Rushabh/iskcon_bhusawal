import React from "react";
import { Link } from "react-router-dom";
import templeSite from "../assets/new_temple2.jpg";
import d3 from "../assets/d3.png";
import d2 from "../assets/d2.png";
import { usePageMeta } from "../hooks/usePageMeta";

const YOUTUBE_VIDEO_ID = "8ZUbkxtZeLk";

const CONTACT = {
  address: "Mohit Nagar, Near Radha Krishna Residency, Ring Road, Bhusawal, Maharashtra 425201",
  phone: "+91-90112-19587 / +91-77670-43798",
  email: "infoiskcon.bhusawal@gmail.com",
};

const DONATION_OPTIONS = [
  { label: "1 sq ft Sponsorship",          amount: "₹1,500",    desc: "Every square foot builds this sacred abode." },
  { label: "2 sq ft Sponsorship",          amount: "₹2,800",    desc: "Double your contribution to the Lord's home." },
  { label: "Pillar Sponsorship",           amount: "₹25,000",   desc: "Your name etched on a pillar for eternity." },
  { label: "Altar / Shrine Sponsorship",   amount: "₹1,00,000", desc: "Sponsor the sacred altar where deities reside." },
];

function NewTempleConstruction() {
  usePageMeta({
    title: "New Temple Construction — Sri Sri Radha Murlidhar, Bhusawal",
    description:
      "Support the construction of the new ISKCON Bhusawal temple — Sri Sri Radha Murlidhar Mandir. Donate and be part of building a permanent spiritual home.",
  });

  return (
    <div className="bg-stone-50">
      {/* Hero */}
      <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img
          src={templeSite}
          alt="New ISKCON Bhusawal temple site"
          className="absolute inset-0 w-full h-full object-cover"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A04]/90 via-black/40 to-black/10" />
        <div className="relative h-full flex flex-col items-center justify-end text-center pb-16 px-4">
          <p className="text-saffron-300 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Under Construction
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-3">
            New Temple Construction
          </h1>
          <p className="font-serif text-saffron-200 italic text-xl mb-6">
            Sri Sri Radha Murlidhar — Bhusawal
          </p>
          <p className="text-stone-300 text-sm max-w-xl leading-relaxed">
            A place to awaken spiritual joy and peace for generations to come.
          </p>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label mb-4">Our Dream</p>
          <h2 className="section-title mb-6">A Permanent Spiritual Home</h2>
          <div className="w-10 h-0.5 bg-saffron-400 mx-auto mb-8" />
          <div className="space-y-5 text-stone-600 leading-relaxed text-[15px] text-left max-w-3xl mx-auto">
            <p>
              ISKCON Bhusawal is constructing a grand new temple for Sri Sri Radha
              Murlidhar — a permanent, beautiful home for the Lord and devotees of
              the Jalgaon district and beyond. The temple will serve as a center of
              devotional culture, spiritual education, and community service.
            </p>
            <p>
              This sacred project is sustained by the loving contributions of
              devotees like you. Every donation — however large or small — is an
              act of devotion and an eternal investment in the Lord's service.
            </p>
          </div>
          <Link to="/donation" className="btn-primary mt-8 inline-flex">
            Donate for Temple Construction
          </Link>
        </div>
      </section>

      {/* Donation options */}
      <section className="py-20 bg-saffron-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-4">How to Contribute</p>
            <h2 className="section-title">Sponsorship Options</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-saffron-200">
            {DONATION_OPTIONS.map((opt, i) => (
              <div key={i} className="bg-white p-8">
                <div className="w-8 h-0.5 bg-saffron-400 mb-5" />
                <div className="font-serif text-3xl text-saffron-500 mb-2">{opt.amount}</div>
                <h3 className="font-medium text-stone-900 text-sm mb-3">{opt.label}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{opt.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/donation" className="btn-primary">
              Make a Donation
            </Link>
          </div>
        </div>
      </section>

      {/* Proposed plan video */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="section-label mb-4">Proposed Plan</p>
            <h2 className="section-title">Temple Architecture &amp; Design</h2>
          </div>
          <div className="aspect-video w-full bg-stone-100">
            <iframe
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0`}
              title="New Temple Construction — Proposed Plan"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Design renders */}
      <section className="bg-saffron-50 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="section-label mb-4">Renders</p>
            <h2 className="section-title">Temple Design</h2>
          </div>
          <div className="space-y-6">
            <img src={d3} alt="Temple design render" loading="lazy" className="w-full shadow-xl" />
            <img src={d2} alt="Temple design render 2" loading="lazy" className="w-full shadow-xl" />
          </div>
          <div className="mt-10 text-center">
            <Link to="/donation" className="btn-primary">
              Donate for Temple Construction
            </Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-[#2C1208] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <p className="section-label text-saffron-300 mb-3">Location</p>
            <h2 className="font-serif text-2xl text-white mb-2">Temple Site Address</h2>
            <p className="text-stone-400 text-sm max-w-lg">{CONTACT.address}</p>
          </div>
          <div className="shrink-0 space-y-2 text-sm text-stone-400">
            <p><a href={`tel:${CONTACT.phone}`} className="hover:text-saffron-300 transition-colors">{CONTACT.phone}</a></p>
            <p><a href={`mailto:${CONTACT.email}`} className="hover:text-saffron-300 transition-colors">{CONTACT.email}</a></p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewTempleConstruction;
