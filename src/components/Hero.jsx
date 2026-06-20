import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/new_temple.jpg";

function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <img
        src={img}
        alt="Sri Sri Radha Murlidhar Mandir, Bhusawal"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        fetchpriority="high"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/75" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4 pb-20">
        {/* Label */}
        <p className="text-xs font-medium tracking-[0.4em] uppercase text-saffron-300 mb-6">
          Sri Sri Radha Murlidhar Mandir &mdash; Bhusawal
        </p>

        {/* Title */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] mb-6 max-w-4xl">
          Where Devotion Meets
          <br />
          <em className="not-italic text-saffron-200">Divine Grace</em>
        </h1>

        {/* Decorative divider */}
        <div className="flex items-center gap-4 mb-7">
          <div className="w-16 h-px bg-saffron-300/50" />
          <div className="w-1.5 h-1.5 bg-saffron-300 rotate-45" />
          <div className="w-16 h-px bg-saffron-300/50" />
        </div>

        {/* Mantra */}
        <p className="text-sm text-white/60 font-light tracking-[0.25em] mb-10">
          Hare Krishna Hare Krishna &middot; Krishna Krishna Hare Hare
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to="/nav-mandir-nirman"
            className="bg-saffron-500 hover:bg-saffron-600 text-white text-sm font-medium px-8 py-3.5 tracking-wide transition-colors duration-200"
          >
            New Temple Construction
          </Link>
          <Link
            to="/donation"
            className="border border-white/60 text-white hover:bg-white/10 text-sm font-medium px-8 py-3.5 tracking-wide transition-colors duration-200"
          >
            Support Our Mission
          </Link>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 pointer-events-none">
        <span className="text-[9px] tracking-[0.35em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/25" />
      </div>
    </section>
  );
}

export default Hero;
