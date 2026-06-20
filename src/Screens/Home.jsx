import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Hero from "../components/Hero";
import TempleIntro from "../components/TempleIntro";
import Founder from "../components/Founder";
import RecentVideos from "../components/RecentVideos";
import TempleTimings from "../components/TempleTimings";
import Festivals from "../components/Festivals";
import PhilosophyQuote from "../components/PhilosophyQuote";
import { usePageMeta } from "../hooks/usePageMeta";

const CHANNEL_ID = "UCJagYE271S8A54O8vRQlOug";

function DonationCTA() {
  const { t } = useTranslation();
  return (
    <section className="bg-[#2C1208] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="text-center lg:text-left">
          <p className="text-saffron-300 text-xs font-semibold tracking-[0.25em] uppercase mb-3">
            {t("donation_cta.label")}
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl text-white leading-tight">
            {t("donation_cta.title")}
          </h2>
          <p className="text-stone-400 text-sm mt-3 max-w-lg">
            {t("donation_cta.desc")}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <Link
            to="/donation"
            className="bg-saffron-500 hover:bg-saffron-400 text-white text-sm font-medium px-8 py-3.5 tracking-wide transition-colors duration-200 text-center"
          >
            {t("donation_cta.donate_now")}
          </Link>
          <Link
            to="/nav-mandir-nirman"
            className="border border-stone-500 text-stone-300 hover:bg-white/5 text-sm font-medium px-8 py-3.5 tracking-wide transition-colors duration-200 text-center"
          >
            {t("donation_cta.view_progress")}
          </Link>
        </div>
      </div>
    </section>
  );
}

function ServicesStrip() {
  const { t } = useTranslation();

  const services = [
    { title: t("services.prasadam_title"), desc: t("services.prasadam_desc") },
    { title: t("services.gita_title"),     desc: t("services.gita_desc") },
    { title: t("services.kirtan_title"),   desc: t("services.kirtan_desc") },
    { title: t("services.youth_title"),    desc: t("services.youth_desc") },
  ];

  return (
    <section className="bg-saffron-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="section-label text-center mb-10">{t("services.label")}</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-saffron-200">
          {services.map((s, i) => (
            <div key={i} className="bg-white px-7 py-8">
              <div className="w-8 h-0.5 bg-saffron-400 mb-5" />
              <h3 className="font-serif text-lg text-stone-900 mb-2">{s.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Home() {
  usePageMeta({
    description:
      "ISKCON Bhusawal — Sri Sri Radha Murlidhar Mandir. Experience Krishna consciousness through kirtan, Bhagavad Gita classes, and community service in Bhusawal, Maharashtra.",
  });

  return (
    <main>
      <Hero />
      <ServicesStrip />
      <TempleIntro />
      <TempleTimings />
      <Founder />
      <PhilosophyQuote />
      <Festivals />
      <DonationCTA />
      <RecentVideos channelId={CHANNEL_ID} />
    </main>
  );
}

export default Home;
