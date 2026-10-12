import React, { useEffect, useState } from "react";
import { usePageMeta } from "../hooks/usePageMeta";
import titleImg from "../assets/parivartan/title.png";
import speakerImg from "../assets/parivartan/speaker.png";
import day1Img from "../assets/parivartan/day1.png";
import day2Img from "../assets/parivartan/day2.png";
import qrImg from "../assets/parivartan/qr.png";
import bannerImg from "../assets/parivartan/banner.png";
import posterImg from "../assets/parivartan/poster.jpg";
import logo from "../assets/iskcon.png";

// Event: Sat 24 & Sun 25 Oct 2026, 6:30 – 8:30 PM IST
const EVENT_START = new Date("2026-10-24T18:30:00+05:30");
const EVENT_END = new Date("2026-10-25T20:30:00+05:30");
const WHATSAPP_NUMBER = "919011219587";
const PHONES = ["9011219587", "9423029322"];
// Google Form hookup ("PARIVARTAN 2026 Registration"). Entry ids come from the form itself.
// An empty id is skipped, so a field can be left out without breaking the submit.
const GOOGLE_FORM = {
  action:
    "https://docs.google.com/forms/d/e/1FAIpQLScNetJTjqQ3eDHDsfIhZikF7McxRcKnwQUiPn8jqq1T86AyjQ/formResponse",
  fields: {
    name: "", // TODO: the form's "Full Name" item is a text block, not a question — add a Short answer and paste its entry id
    dob: "entry.367582098", // date question: submitted as _year / _month / _day
    mobile: "entry.1048372024",
    education: "entry.1389160814",
    source: "entry.1343812768",
  },
};
const SOURCES = ["Poster", "Friend", "Instagram", "WhatsApp", "other"]; // values must match the form's options
const MAP_URL = "https://www.google.com/maps/search/?api=1&query=Balaji+Mandir+Bhusawal";

const INK = "#16102A";
const PURPLE = "#5A1A7A";
const MAGENTA = "#B531E0";
const YELLOW = "#FFC933";
const PAPER = "#F7F0DF";

const display = { fontFamily: "'Bangers', 'Impact', sans-serif", letterSpacing: "0.04em" };
const hand = { fontFamily: "'Patrick Hand', 'Comic Sans MS', cursive" };

function useCountdown(target) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target.getTime() - now);
  return {
    done: diff === 0,
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    mins: Math.floor((diff / 60000) % 60),
    secs: Math.floor((diff / 1000) % 60),
  };
}

function Sticker({ children, className = "", rotate = -2, bg = YELLOW, color = INK }) {
  return (
    <span
      className={`inline-block px-4 py-1.5 shadow-[3px_3px_0_0_#16102A] border-2 border-[#16102A] ${className}`}
      style={{ background: bg, color, transform: `rotate(${rotate}deg)`, ...display }}
    >
      {children}
    </span>
  );
}

function Parivartan() {
  usePageMeta({
    title: "Parivartan — A Youth Program (Age 15–30)",
    description:
      "Parivartan, a two-day youth program by IYS ISKCON Bhusawal for ages 15–30. 24 & 25 October 2026, 6:30–8:30 PM at Balaji Mandir, Bhusawal. Stop scrolling. Start revolting.",
  });

  const { done, days, hours, mins, secs } = useCountdown(EVENT_START);
  const eventOver = Date.now() > EVENT_END.getTime();

  const [form, setForm] = useState({ name: "", dob: "", mobile: "", education: "", source: "" });
  const [error, setError] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | done
  const setField = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  // Returns the cleaned mobile number, or null (and sets an error) when the form is invalid.
  const validate = () => {
    const mobile = form.mobile.replace(/D/g, "").slice(-10);
    if (!form.name.trim() || !form.dob || !form.education.trim()) {
      setError("Please fill in name, date of birth, mobile and education.");
      return null;
    }
    if (mobile.length !== 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return null;
    }
    const age = Math.floor((EVENT_START - new Date(form.dob)) / (365.25 * 86400000));
    if (age < 15 || age > 30) {
      setError("Parivartan is for youth aged 15 to 30 years.");
      return null;
    }
    setError("");
    return mobile;
  };

  const submitToGoogleForm = async (e) => {
    e.preventDefault();
    const mobile = validate();
    if (!mobile) return;
    const f = GOOGLE_FORM.fields;
    const body = new URLSearchParams();
    const add = (id, v) => id && v && body.append(id, v);
    const [y, m, d] = form.dob.split("-");
    add(f.name, form.name.trim());
    add(f.dob && `${f.dob}_year`, y);
    add(f.dob && `${f.dob}_month`, String(Number(m)));
    add(f.dob && `${f.dob}_day`, String(Number(d)));
    add(f.mobile, mobile);
    add(f.education, form.education.trim());
    add(f.source, form.source);
    setStatus("sending");
    try {
      // no-cors: the response is opaque, so a resolved fetch is treated as success
      await fetch(GOOGLE_FORM.action, { method: "POST", mode: "no-cors", body });
      setStatus("done");
    } catch {
      setStatus("idle");
      setError("Could not submit. Please check your connection and try again, or use WhatsApp.");
    }
  };

  const registerOnWhatsApp = () => {
    const mobile = validate();
    if (!mobile) return;
    const msg =
      `Hare Krishna! I would like to register for *Parivartan* (24 & 25 Oct 2026).

` +
      `Name: ${form.name.trim()}
DOB: ${form.dob}
Mobile: ${mobile}
Education: ${form.education.trim()}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
  };

  const inputClass =
    "w-full bg-white border-2 border-[#16102A] px-4 py-3 text-[#16102A] text-base outline-none focus:shadow-[4px_4px_0_0_#B531E0] transition-shadow";

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: PAPER, color: INK }}>
      {/* ── Hero ── */}
      <section
        className="relative px-4 pt-10 pb-16"
        style={{
          background:
            "radial-gradient(circle at 50% 38%, #FFD95A 0%, #FFE9A6 28%, rgba(247,240,223,0) 62%), " + PAPER,
        }}
      >
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <img src={logo} alt="ISKCON Bhusawal" className="h-10 w-auto" />
            <p className="text-sm sm:text-base font-bold tracking-[0.3em] uppercase">
              IYS ISKCON Bhusawal <span className="block sm:inline font-normal tracking-[0.4em]">presents</span>
            </p>
          </div>

          <img
            src={titleImg}
            alt="Parivartan — a youth program, age 15–30"
            className="w-full max-w-3xl mx-auto drop-shadow-[0_8px_0_rgba(22,16,42,0.08)]"
            loading="eager"
          />

          <div className="mt-2 flex flex-wrap justify-center items-center gap-3">
            <Sticker rotate={-3} className="text-2xl sm:text-4xl px-6 py-2">
              24 &amp; 25 OCT 2026
            </Sticker>
            <Sticker rotate={2} bg={PURPLE} color="#fff" className="text-xl sm:text-2xl">
              6:30 – 8:30 PM
            </Sticker>
          </div>

          <p className="mt-6 text-lg sm:text-xl font-semibold" style={hand}>
            Balaji Mandir, Behind Pandurang Talkes, Bhusawal
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#register"
              className="px-8 py-3.5 text-xl border-2 border-[#16102A] shadow-[4px_4px_0_0_#16102A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#16102A] transition-all"
              style={{ ...display, background: PURPLE, color: "#fff" }}
            >
              Register Now
            </a>
            <a
              href="#days"
              className="px-8 py-3.5 text-xl border-2 border-[#16102A] bg-white shadow-[4px_4px_0_0_#16102A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#16102A] transition-all"
              style={display}
            >
              See the 2 Days
            </a>
          </div>
        </div>
      </section>

      {/* ── Banner + Countdown ── */}
      <section className="px-4 -mt-4 pb-14">
        <div className="max-w-4xl mx-auto">
          <img src={bannerImg} alt="Stop scrolling. Start revolting." className="w-full" />

          <div className="mt-8 text-center">
            {eventOver ? (
              <p className="text-2xl" style={display}>Parivartan has concluded — thank you for revolting with us!</p>
            ) : done ? (
              <p className="text-3xl" style={{ ...display, color: PURPLE }}>It's happening now — come join us!</p>
            ) : (
              <>
                <p className="text-sm font-bold tracking-[0.3em] uppercase mb-4">Starts in</p>
                <div className="flex justify-center gap-3 sm:gap-5">
                  {[
                    ["Days", days],
                    ["Hours", hours],
                    ["Mins", mins],
                    ["Secs", secs],
                  ].map(([label, v], i) => (
                    <div
                      key={label}
                      className="w-[72px] sm:w-24 py-3 border-2 border-[#16102A] shadow-[4px_4px_0_0_#16102A]"
                      style={{ background: i % 2 ? YELLOW : "#fff", transform: `rotate(${i % 2 ? 2 : -2}deg)` }}
                    >
                      <div className="text-4xl sm:text-5xl leading-none" style={{ ...display, color: PURPLE }}>
                        {String(v).padStart(2, "0")}
                      </div>
                      <div className="text-[10px] sm:text-xs font-bold tracking-widest uppercase mt-1">{label}</div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ── Two days ── */}
      <section id="days" className="px-4 py-16" style={{ background: INK, color: "#fff" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-bold tracking-[0.3em] uppercase" style={{ color: YELLOW }}>
              Two evenings · Two questions
            </p>
            <h2 className="text-4xl sm:text-6xl mt-2" style={display}>
              The <span style={{ color: MAGENTA }}>Conversation</span> You've Been Avoiding
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <article className="text-center">
              <img src={day1Img} alt="Day 1: Everyone is winning except me" className="w-full max-w-sm mx-auto" loading="lazy" />
              <p className="mt-4 text-xs font-bold tracking-widest uppercase" style={{ color: YELLOW }}>
                Saturday, 24 Oct · 6:30 – 8:30 PM
              </p>
              <p className="mt-3 text-lg leading-relaxed text-stone-200 max-w-md mx-auto" style={hand}>
                Every scroll shows someone else's highlight reel. Why does everyone else's life look perfect — and what is
                it quietly doing to us? An honest evening on FOMO, comparison and finding your own ground.
              </p>
            </article>

            <article className="text-center">
              <img src={day2Img} alt="Day 2: Can Krishna make me successful?" className="w-full max-w-sm mx-auto" loading="lazy" />
              <p className="mt-4 text-xs font-bold tracking-widest uppercase" style={{ color: YELLOW }}>
                Sunday, 25 Oct · 6:30 – 8:30 PM
              </p>
              <p className="mt-3 text-lg leading-relaxed text-stone-200 max-w-md mx-auto" style={hand}>
                Ambition, career, success — where does Krishna fit in? A fresh look at the Bhagavad-gita's answer to
                "who is your ever well-wisher?" and what real success looks like.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ── Speaker ── */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-2 mx-auto">
            <img src={speakerImg} alt="HG Sukumar Gaur Prabhu" className="w-full max-w-xs" loading="lazy" />
          </div>
          <div className="md:col-span-3 text-center md:text-left">
            <Sticker rotate={-2} bg={PURPLE} color="#fff" className="text-lg">Your Speaker</Sticker>
            <h2 className="text-4xl sm:text-5xl mt-4" style={display}>HG Sukumar Gaur Prabhu</h2>
            <p className="text-lg font-semibold mt-1" style={{ ...hand, color: PURPLE }}>B.E. Mechanical</p>
            <p className="mt-4 text-lg leading-relaxed text-stone-700" style={hand}>
              An engineer by education and a devotee by choice, he speaks to young people in their own language — about
              real pressures, real questions, and the timeless wisdom that answers them.
            </p>
          </div>
        </div>
      </section>

      {/* ── Register ── */}
      <section id="register" className="px-4 py-16" style={{ background: YELLOW }}>
        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-10">
          {status === "done" ? (
            <div className="lg:col-span-3 bg-white border-2 border-[#16102A] shadow-[6px_6px_0_0_#16102A] p-8 text-center flex flex-col justify-center">
              <h2 className="text-4xl sm:text-5xl" style={{ ...display, color: PURPLE }}>You're in!</h2>
              <p className="mt-3 text-xl" style={hand}>
                Hare Krishna, {form.name.trim().split(" ")[0]}! Your registration for Parivartan is received.
                Scan the QR to join the WhatsApp group for updates.
              </p>
              <button
                type="button"
                onClick={() => {
                  setForm({ name: "", dob: "", mobile: "", education: "", source: "" });
                  setStatus("idle");
                }}
                className="mt-6 mx-auto text-sm font-bold underline underline-offset-4"
              >
                Register another person
              </button>
            </div>
          ) : (
          <form
            onSubmit={submitToGoogleForm}
            className="lg:col-span-3 bg-white border-2 border-[#16102A] shadow-[6px_6px_0_0_#16102A] p-6 sm:p-8"
            noValidate
          >
            <h2 className="text-4xl" style={display}>Reserve your seat</h2>
            <p className="mt-1 text-stone-600" style={hand}>
              Fill in your details to register for both days — submit directly, or send them to us on WhatsApp.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <label className="sm:col-span-2 block">
                <span className="block text-sm font-bold mb-1">Name</span>
                <input className={inputClass} value={form.name} onChange={setField("name")} autoComplete="name" />
              </label>
              <label className="block">
                <span className="block text-sm font-bold mb-1">Date of birth</span>
                <input type="date" className={inputClass} value={form.dob} onChange={setField("dob")} autoComplete="bday" />
              </label>
              <label className="block">
                <span className="block text-sm font-bold mb-1">Mobile no.</span>
                <input
                  type="tel"
                  inputMode="numeric"
                  className={inputClass}
                  value={form.mobile}
                  onChange={setField("mobile")}
                  autoComplete="tel"
                />
              </label>
              <label className="sm:col-span-2 block">
                <span className="block text-sm font-bold mb-1">Education</span>
                <input
                  className={inputClass}
                  value={form.education}
                  onChange={setField("education")}
                  placeholder="e.g. 12th, B.Com, B.E., Working professional"
                />
              </label>
              <label className="sm:col-span-2 block">
                <span className="block text-sm font-bold mb-1">How did you hear about Parivartan? (optional)</span>
                <select className={inputClass} value={form.source} onChange={setField("source")}>
                  <option value="">Select…</option>
                  {SOURCES.map((o) => (
                    <option key={o} value={o}>
                      {o === "other" ? "Other" : o}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {error && (
              <p role="alert" className="mt-4 text-sm font-semibold text-red-700">
                {error}
              </p>
            )}

            <div className="mt-6 flex flex-wrap gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="px-8 py-3.5 text-xl border-2 border-[#16102A] shadow-[4px_4px_0_0_#16102A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#16102A] transition-all disabled:opacity-60"
                style={{ ...display, background: PURPLE, color: "#fff" }}
              >
                {status === "sending" ? "Submitting…" : "Submit Registration"}
              </button>
              <button
                type="button"
                onClick={registerOnWhatsApp}
                className="px-8 py-3.5 text-xl border-2 border-[#16102A] shadow-[4px_4px_0_0_#16102A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#16102A] transition-all"
                style={{ ...display, background: "#25D366", color: INK }}
              >
                Register via WhatsApp
              </button>
            </div>
          </form>
          )}

          <aside className="lg:col-span-2 flex flex-col items-center text-center justify-center gap-4">
            <img src={qrImg} alt="Scan to join the Parivartan WhatsApp group" className="w-56 max-w-full" loading="lazy" />
            <p className="text-lg font-semibold" style={hand}>
              Scan to join the WhatsApp group for updates.
            </p>
            <a
              href={posterImg}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-bold underline underline-offset-4"
            >
              View the poster
            </a>
          </aside>
        </div>
      </section>

      {/* ── Venue ── */}
      <section className="px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <Sticker rotate={2} className="text-lg">Find us</Sticker>
          <h2 className="text-4xl sm:text-5xl mt-4" style={display}>Balaji Mandir, Bhusawal</h2>
          <p className="mt-2 text-xl" style={hand}>Behind Pandurang Talkes, Bhusawal</p>
          <p className="mt-1 text-lg font-semibold" style={{ ...hand, color: PURPLE }}>
            24 &amp; 25 October 2026 · 6:30 PM to 8:30 PM
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={MAP_URL}
              target="_blank"
              rel="noreferrer"
              className="px-7 py-3 text-lg border-2 border-[#16102A] bg-white shadow-[4px_4px_0_0_#16102A]"
              style={display}
            >
              Get Directions
            </a>
            {PHONES.map((p) => (
              <a
                key={p}
                href={`tel:+91${p}`}
                className="px-7 py-3 text-lg border-2 border-[#16102A] shadow-[4px_4px_0_0_#16102A]"
                style={{ ...display, background: YELLOW }}
              >
                Call {p}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Parivartan;
