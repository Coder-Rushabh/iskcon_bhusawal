import React from "react";

const SCHEDULE = [
  { aarti: "Mangal Aarti",    time: "4:30 AM",  note: "Daily" },
  { aarti: "Sringara Darshan", time: "7:30 AM",  note: "Daily" },
  { aarti: "Raj Bhog Aarti",  time: "12:00 PM", note: "Daily" },
  { aarti: "Uthapana Aarti",  time: "4:15 PM",  note: "Daily" },
  { aarti: "Sandhya Aarti",   time: "7:00 PM",  note: "Daily" },
  { aarti: "Shayana Aarti",   time: "8:30 PM",  note: "Daily" },
];

function TempleTimings() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="section-label mb-4">Daily Schedule</p>
            <h2 className="section-title mb-5">Temple Aarti Timings</h2>
            <div className="w-10 h-0.5 bg-saffron-400 mb-6" />
            <p className="text-stone-500 leading-relaxed text-[15px]">
              The daily aarti schedule at Sri Sri Radha Murlidhar Mandir marks the
              rhythm of devotional life. Each ceremony is an opportunity to receive
              the Lord&rsquo;s darshan and offer your heart in service.
            </p>
            <p className="text-stone-500 leading-relaxed text-[15px] mt-3">
              All are welcome to attend any aarti. The temple is open from
              4:30&nbsp;AM to 1:00&nbsp;PM and 4:00&nbsp;PM to 9:00&nbsp;PM daily.
            </p>
          </div>

          {/* Schedule table */}
          <div className="border border-stone-100">
            <div className="bg-[#2C1208] px-6 py-4">
              <h3 className="text-sm font-semibold tracking-[0.15em] uppercase text-saffron-300">
                Aarti &amp; Darshan Schedule
              </h3>
            </div>
            <div className="divide-y divide-stone-100">
              {SCHEDULE.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between px-6 py-4 ${
                    i % 2 === 0 ? "bg-white" : "bg-saffron-50"
                  }`}
                >
                  <div>
                    <div className="text-sm font-medium text-stone-900">{item.aarti}</div>
                    <div className="text-xs text-stone-400 mt-0.5">{item.note}</div>
                  </div>
                  <div className="font-serif text-saffron-600 font-semibold text-base">
                    {item.time}
                  </div>
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
