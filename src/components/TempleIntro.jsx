import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import img2 from "../assets/new_temple2.jpg";

function ArrowRight() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

function TempleIntro() {
  const { t } = useTranslation();

  const features = [
    {
      title: t("temple_intro.feature1_title"),
      description: t("temple_intro.feature1_desc"),
      link: "/nav-mandir-nirman",
      image: img2,
    },
    {
      title: t("temple_intro.feature2_title"),
      description: t("temple_intro.feature2_desc"),
      link: "/spiritual-study-center",
    },
    {
      title: t("temple_intro.feature3_title"),
      description: t("temple_intro.feature3_desc"),
      link: "/iys",
    },
  ];

  const stats = [
    { value: "1966", label: t("temple_intro.stat1_label") },
    { value: "850+", label: t("temple_intro.stat2_label") },
    { value: "55+",  label: t("temple_intro.stat3_label") },
    { value: "108",  label: t("temple_intro.stat4_label") },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="section-label mb-4">{t("temple_intro.label")}</p>
          <h2 className="section-title mb-5">{t("temple_intro.title")}</h2>
          <div className="w-10 h-0.5 bg-saffron-400 mb-6" />
          <p className="text-stone-500 leading-relaxed text-lg">{t("temple_intro.desc")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-stone-100">
          {features.map((feature, i) => (
            <div key={i} className="bg-white p-8 lg:p-10 flex flex-col group">
              {feature.image ? (
                <div className="mb-7 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    loading="lazy"
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="w-8 h-0.5 bg-saffron-400 mb-7" />
              )}
              <h3 className="font-serif text-xl text-stone-900 mb-3 leading-snug">{feature.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed flex-1 mb-6">{feature.description}</p>
              <Link
                to={feature.link}
                className="inline-flex items-center gap-2 text-sm font-medium text-saffron-500 hover:text-saffron-600 transition-colors"
              >
                {t("temple_intro.learn_more")} <ArrowRight />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-px grid grid-cols-2 md:grid-cols-4 gap-px bg-stone-100">
          {stats.map((stat, i) => (
            <div key={i} className="bg-stone-50 px-8 py-8 text-center">
              <div className="font-serif text-3xl text-saffron-500 mb-1">{stat.value}</div>
              <div className="text-xs text-stone-500 tracking-wide uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TempleIntro;
