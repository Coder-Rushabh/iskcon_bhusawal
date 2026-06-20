import React from "react";
import { useTranslation } from "react-i18next";

function TempleTimings() {
  const { t } = useTranslation();

  const SCHEDULE = [
    { key: "mangal",    time: "4:30 AM"  },
    { key: "sringara",  time: "7:30 AM"  },
    { key: "raj_bhog",  time: "12:00 PM" },
    { key: "uthapana",  time: "4:15 PM"  },
    { key: "sandhya",   time: "7:00 PM"  },
    { key: "shayana",   time: "8:30 PM"  },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="section-label mb-4">{t("timings.label")}</p>
            <h2 className="section-title mb-5">{t("timings.title")}</h2>
            <div className="w-10 h-0.5 bg-saffron-400 mb-6" />
            <p className="text-stone-500 leading-relaxed text-[15px]">{t("timings.desc1")}</p>
            <p className="text-stone-500 leading-relaxed text-[15px] mt-3">{t("timings.desc2")}</p>
          </div>

          <div className="border border-stone-100">
            <div className="bg-[#2C1208] px-6 py-4">
              <h3 className="text-sm font-semibold tracking-[0.15em] uppercase text-saffron-300">
                {t("timings.schedule_title")}
              </h3>
            </div>
            <div className="divide-y divide-stone-100">
              {SCHEDULE.map((item, i) => (
                <div
                  key={item.key}
                  className={`flex items-center justify-between px-6 py-4 ${
                    i % 2 === 0 ? "bg-white" : "bg-saffron-50"
                  }`}
                >
                  <div>
                    <div className="text-sm font-medium text-stone-900">{t(`timings.${item.key}`)}</div>
                    <div className="text-xs text-stone-400 mt-0.5">{t("timings.note_daily")}</div>
                  </div>
                  <div className="font-serif text-saffron-600 font-semibold text-base">{item.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TempleTimings;
