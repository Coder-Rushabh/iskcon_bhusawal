import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import img from "../assets/new_temple.jpg";

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      <img
        src={img}
        alt="Sri Sri Radha Murlidhar Mandir, Bhusawal"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        fetchpriority="high"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/75" />

      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4 pb-20">
        <p className="text-xs font-medium tracking-[0.4em] uppercase text-saffron-300 mb-6">
          {t("hero.label")}
        </p>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] mb-6 max-w-4xl">
          {t("hero.title_line1")}
          <br />
          <em className="not-italic text-saffron-200">{t("hero.title_line2")}</em>
        </h1>

        <div className="flex items-center gap-4 mb-7">
          <div className="w-16 h-px bg-saffron-300/50" />
          <div className="w-1.5 h-1.5 bg-saffron-300 rotate-45" />
          <div className="w-16 h-px bg-saffron-300/50" />
        </div>

        <p className="text-sm text-white/60 font-light tracking-[0.25em] mb-10">
          {t("hero.mantra")}
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to="/nav-mandir-nirman"
            className="bg-saffron-500 hover:bg-saffron-600 text-white text-sm font-medium px-8 py-3.5 tracking-wide transition-colors duration-200"
          >
            {t("hero.cta_temple")}
          </Link>
          <Link
            to="/donation"
            className="border border-white/60 text-white hover:bg-white/10 text-sm font-medium px-8 py-3.5 tracking-wide transition-colors duration-200"
          >
            {t("hero.cta_support")}
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 pointer-events-none">
        <span className="text-[9px] tracking-[0.35em] uppercase">{t("hero.scroll")}</span>
        <div className="w-px h-8 bg-white/25" />
      </div>
    </section>
  );
}

export default Hero;
