import React from "react";

const QUOTES = [
  {
    text: "The purpose of human life is to realize God. No other work is as important as this.",
    source: "Srila Prabhupada",
  },
  {
    text: "Chant Hare Krishna, be happy, and spread this happiness to everyone.",
    source: "Srila Prabhupada",
  },
  {
    text: "Even a little devotional service can save one from the greatest danger.",
    source: "Bhagavad Gita 2.40",
  },
];

function PhilosophyQuote() {
  return (
    <section className="bg-saffron-500 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Decorative element */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="w-16 h-px bg-white/40" />
          <div className="w-1.5 h-1.5 bg-white rotate-45" />
          <div className="w-16 h-px bg-white/40" />
        </div>

        {/* Main quote */}
        <blockquote>
          <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white leading-snug italic mb-6">
            &ldquo;{QUOTES[0].text}&rdquo;
          </p>
          <footer className="text-saffron-100 text-sm tracking-widest uppercase">
            &mdash; {QUOTES[0].source}
          </footer>
        </blockquote>

        <div className="flex items-center justify-center gap-4 mt-10">
          <div className="w-16 h-px bg-white/40" />
          <div className="w-1.5 h-1.5 bg-white rotate-45" />
          <div className="w-16 h-px bg-white/40" />
        </div>

        {/* Secondary quotes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
          {QUOTES.slice(1).map((q, i) => (
            <blockquote
              key={i}
              className="bg-white/10 border border-white/20 p-6 text-left"
            >
              <p className="font-serif text-white text-base italic leading-relaxed mb-3">
                &ldquo;{q.text}&rdquo;
              </p>
              <footer className="text-saffron-100 text-xs tracking-wider uppercase">
                &mdash; {q.source}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PhilosophyQuote;
