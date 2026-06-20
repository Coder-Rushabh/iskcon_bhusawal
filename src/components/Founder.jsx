import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/2.jpg";

function Founder() {
  return (
    <section className="bg-stone-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <img
              src={img}
              alt="His Divine Grace A.C. Bhaktivedanta Swami Srila Prabhupada"
              loading="lazy"
              className="w-full object-cover object-top shadow-xl"
              style={{ maxHeight: "580px" }}
            />
            {/* Offset border decoration */}
            <div className="absolute -bottom-4 -right-4 w-28 h-28 border border-saffron-300 hidden lg:block pointer-events-none" />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <p className="section-label mb-4">Our Founder Acharya</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-stone-900 leading-tight mb-2">
              Srila Prabhupada
            </h2>
            <p className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-8">
              His Divine Grace A.C. Bhaktivedanta Swami
            </p>
            <div className="w-10 h-0.5 bg-saffron-400 mb-8" />

            <div className="space-y-5 text-stone-600 leading-relaxed text-[15px]">
              <p>
                Srila Prabhupada (1896–1977) dedicated his life to sharing the ancient wisdom of
                Krishna consciousness with the world. In 1965, at the age of 69, he arrived in
                New York to fulfil the vision of his spiritual master — to spread Vedic teachings
                to every corner of the globe.
              </p>
              <p>
                Through tireless effort, he established the International Society for Krishna
                Consciousness (ISKCON), founded the Bhaktivedanta Book Trust, and circled the
                globe fourteen times, inspiring millions with his writings and teachings.
              </p>
              <p>
                His books — translated into over 50 languages — form a vast library of Vedic
                philosophy and continue to guide seekers worldwide toward a life of devotion,
                clarity, and spiritual fulfilment.
              </p>
            </div>

            <Link
              to="/srila-prabhupada"
              className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-saffron-500 hover:text-saffron-600 transition-colors tracking-wide"
            >
              Read more
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Founder;
