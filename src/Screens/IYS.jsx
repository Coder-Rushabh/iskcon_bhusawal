// IYSDetailPage.jsx
import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUserFriends,
  FaRegClock,
  FaRegCalendarCheck,
  FaWhatsapp,
} from "react-icons/fa";

// Replace these image imports with your own images
import boysCamp from "../assets/gaur.jpg";
import girlsFestival from "../assets/gaur.jpg";
import groupService from "../assets/gaur.jpg";
import devotional from "../assets/gaur.jpg";

const contactBoys = {
  leader: "IYS Boys Coordinator – Shriman. Jitendra Kumar",
  phone: "+91-90112-19587",
  email: "boys.iys.bhusawal@iskcon.org",
};

const contactGirls = {
  leader: "IYS Girls Coordinator – Dr. Rekha Patil",
  phone: "+91-80077-22277",
  email: "girls.iys.bhusawal@iskcon.org",
};

const templeContact = {
  name: "Sri Sri Radha Murlidhar Mandir, ISKCON Bhusawal",
  address:
    "Near Roop Darshan Photo Studio, Ram Mandir Ward, Bhusawal, Maharashtra 425201",
  phoneMain: "+91-77670-43798, +91-90112-19587",
  emailMain: "infoiskcon.bhusawal@gmail.com",
};

function RegisterModal({ open, onClose, defaultFor }) {
  const [form, setForm] = useState({
    name: "",
    age: "",
    phone: "",
    email: "",
    forProgram: defaultFor || "",
    notes: "",
  });

  function handleChange(e) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Replace below with actual submit logic (API / firebase / email)
    alert(
      `Thanks ${form.name}! Registration for ${form.forProgram} received. Coordinator will contact you at ${form.phone}`
    );
    onClose();
  }

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h3 className="text-xl font-semibold">IYS Registration</h3>
          <button
            className="text-gray-600 hover:text-gray-900"
            onClick={onClose}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="px-6 py-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Full name"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-saffron"
            />
            <input
              name="age"
              value={form.age}
              onChange={handleChange}
              placeholder="Age"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-saffron"
            />
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="Phone (e.g. +91-...)"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-saffron"
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email (optional)"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-saffron"
            />
          </div>

          <select
            name="forProgram"
            value={form.forProgram}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-saffron"
            required
          >
            <option value="">Select program</option>
            <option value="Boys Program">Boys Program</option>
            <option value="Girls Program">Girls Program</option>
            <option value="Both / Volunteer">Both / Volunteer</option>
          </select>

          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            placeholder="Any notes / preferences"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-saffron"
            rows={3}
          />

          <div className="flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-saffron-600 hover:bg-saffron-700 text-white font-medium"
              style={{ backgroundColor: "#ef6c00" }}
            >
              Submit Registration
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function IYSDetailPage() {
  const [modal, setModal] = useState({ open: false, forProgram: "" });
  const [faqOpen, setFaqOpen] = useState({});

  function toggleFaq(i) {
    setFaqOpen((s) => ({ ...s, [i]: !s[i] }));
  }

  // decorative saffron color variable
  const saffron = "#ef6c00";

  return (
    <div className="min-h-screen bg-fixed bg-gradient-to-b from-amber-50 via-white to-amber-50 pb-20">
      {/* Decorative top wave + motif */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          aria-hidden
          style={{
            background:
              "radial-gradient(circle at 10% 10%, rgba(239,108,0,0.06), transparent 10%), radial-gradient(circle at 90% 90%, rgba(63,81,181,0.04), transparent 10%)",
          }}
        />
        <header className="max-w-6xl mx-auto px-6 py-12 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h1 className="text-5xl md:text-6xl font-serif text-indigo-900 leading-tight">
                ISKCON Youth Services
                <span className="block text-2xl mt-2 font-medium text-amber-700">
                  Bhusawal — Ignite Spirituality • Lead with Values
                </span>
              </h1>

              <p className="mt-6 text-gray-700 max-w-xl">
                A culturally rooted & modern program for young hearts — combining Vedic wisdom,
                creative arts, leadership training, and seva. Separate guided programs for boys and
                girls, plus shared festivals and mentorship.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  // onClick={() => setModal({ open: true, forProgram: "Boys Program" })}
                  className="px-5 py-3 rounded-lg bg-white/90 border hover:shadow-md flex items-center gap-3"
                >
                  <FaRegCalendarCheck className="text-indigo-700" />
                  <span className="text-indigo-800 font-medium">Register (Boys)</span>
                </button>

                <button
                  // onClick={() => setModal({ open: true, forProgram: "Girls Program" })}
                  className="px-5 py-3 rounded-lg bg-amber-600 hover:bg-amber-700 text-white flex items-center gap-3"
                  style={{ backgroundColor: saffron }}
                >
                  <FaRegCalendarCheck />
                  <span className="font-medium">Register (Girls)</span>
                </button>

                <a
                  href={`mailto:${templeContact.emailMain}?subject=IYS%20Query`}
                  className="px-4 py-3 rounded-lg border hover:bg-gray-50 flex items-center gap-2"
                >
                  <FaEnvelope className="text-gray-700" />
                  <span className="text-gray-800">Contact Temple</span>
                </a>
              </div>
            </div>

            <div className="w-full md:w-1/3 rounded-xl overflow-hidden shadow-xl">
              <img
                src={devotional}
                alt="IYS devotional"
                className="w-full h-60 object-cover"
                style={{ display: devotional ? "block" : "none" }}
              />
            </div>
          </div>
        </header>

        {/* Decorative SVG divider */}
        <svg
          className="w-full -mt-6"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,40 C200,120 400,0 720,40 C1040,80 1240,10 1440,40 L1440 0 L0 0 Z"
            fill="#fff"
          />
        </svg>
      </div>

      <main className="max-w-6xl mx-auto px-6 -mt-10 relative z-20">
        {/* Temple Card */}
        <div className="bg-white border rounded-2xl shadow-xl p-6 flex flex-col md:flex-row items-center gap-6 mb-10">
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-4xl text-indigo-800" />
            <div>
              <h3 className="text-lg font-semibold text-indigo-900">{templeContact.name}</h3>
              <p className="text-gray-700">{templeContact.address}</p>
            </div>
          </div>

          <div className="ml-auto flex items-center gap-6">
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-indigo-700" />
              <a href={`tel:${templeContact.phoneMain}`} className="text-gray-800">
                {templeContact.phoneMain}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-indigo-700" />
              <a href={`mailto:${templeContact.emailMain}`} className="text-gray-800">
                {templeContact.emailMain}
              </a>
            </div>
          </div>
        </div>

        {/* Two-column Programs */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Boys Card */}
          <article className="bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 border-indigo-800">
            <div className="relative">
              <img
                src={boysCamp}
                alt="Boys Camp"
                className="w-full h-56 object-cover"
              />
              <div className="absolute top-4 left-4 bg-indigo-900/80 text-white px-3 py-2 rounded-lg">
                <div className="text-sm">Program</div>
                <div className="text-lg font-semibold">Boys — Leadership & Seva</div>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <h4 className="text-2xl font-serif text-indigo-900">For Young Boys</h4>
              <p className="text-gray-700">
                A guided program (ages ~13–30) blending scriptural study, outdoor retreats,
                leadership training, kirtan & seva. Build inner strength while serving society.
              </p>

              <ul className="grid grid-cols-1 gap-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <FaUserFriends className="mt-1 text-indigo-700" />
                  <span><strong>Weekly sessions:</strong> Bhagavad-Gita study, kirtan & discussion.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaRegClock className="mt-1 text-indigo-700" />
                  <span><strong>Practical skills:</strong> public speaking, confidence, time management.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCalendarAlt className="mt-1 text-indigo-700" />
                  <span><strong>Camps & pilgrimages:</strong> seasonal camps and guided tours.</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-3 mt-4">
                <button
                  // onClick={() => setModal({ open: true, forProgram: "Boys Program" })}
                  className="px-4 py-2 rounded-lg bg-indigo-800 text-white hover:opacity-95"
                >
                  Register (Boys)
                </button>

                <a
                  href={`tel:${contactBoys.phone}`}
                  className="px-4 py-2 rounded-lg border hover:bg-gray-50 flex items-center gap-2"
                >
                  <FaPhoneAlt className="text-indigo-700" /> {contactBoys.phone}
                </a>

                {/* <a
                  href={`mailto:${contactBoys.email}`}
                  className="px-4 py-2 rounded-lg border hover:bg-gray-50 flex items-center gap-2"
                >
                  <FaEnvelope className="text-indigo-700" /> {contactBoys.email}
                </a> */}
              </div>
            </div>
          </article>

          {/* Girls Card */}
          <article className="bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 border-amber-600">
            <div className="relative">
              <img
                src={girlsFestival}
                alt="Girls Festival"
                className="w-full h-56 object-cover"
              />
              <div className="absolute top-4 left-4 bg-amber-700/90 text-white px-3 py-2 rounded-lg">
                <div className="text-sm">Program</div>
                <div className="text-lg font-semibold">Girls — Empowerment & Arts</div>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <h4 className="text-2xl font-serif text-amber-800">For Young Girls</h4>
              <p className="text-gray-700">
                Nurturing confidence, creativity, and spiritual practice for young women through
                devotional arts, life-skills workshops, and community service.
              </p>

              <ul className="grid grid-cols-1 gap-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <FaUserFriends className="mt-1" style={{ color: saffron }} />
                  <span><strong>Weekly sessions:</strong> devotional practice, art & music classes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaRegClock className="mt-1" style={{ color: saffron }} />
                  <span><strong>Workshops:</strong> self-care, emotional health, leadership.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCalendarAlt className="mt-1" style={{ color: saffron }} />
                  <span><strong>Cultural events:</strong> dance, drama, and festival performances.</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-3 mt-4">
                <button
                  // onClick={() => setModal({ open: true, forProgram: "Girls Program" })}
                  className="px-4 py-2 rounded-lg"
                  style={{ backgroundColor: saffron, color: "white" }}
                >
                  Register (Girls)
                </button>

                <a
                  href={`tel:${contactGirls.phone}`}
                  className="px-4 py-2 rounded-lg border hover:bg-gray-50 flex items-center gap-2"
                >
                  <FaPhoneAlt className="text-amber-700" /> {contactGirls.phone}
                </a>

                {/* <a
                  href={`mailto:${contactGirls.email}`}
                  className="px-4 py-2 rounded-lg border hover:bg-gray-50 flex items-center gap-2"
                >
                  <FaEnvelope className="text-amber-700" /> {contactGirls.email}
                </a> */}
              </div>
            </div>
          </article>
        </section>

        {/* Upcoming Events & Timeline */}
        {/* <section className="mb-12">
          <h3 className="text-3xl font-serif text-indigo-900 mb-6">Upcoming Events & Camps</h3>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl border p-6 shadow-sm flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/4 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-900">15–17 Nov</div>
                  <div className="text-sm text-gray-600">Youth Leadership Camp</div>
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-semibold">Prerna Leadership Retreat</h4>
                <p className="text-gray-700 mt-2">
                  A three-day residential camp focused on leadership, group dynamics, seva training,
                  and spiritual introspection with guided workshops & kirtan.
                </p>
                <div className="mt-4 flex gap-3">
                  <button
                    onClick={() => setModal({ open: true, forProgram: "Prerna Retreat" })}
                    className="px-4 py-2 rounded-lg bg-indigo-800 text-white"
                  >
                    Register
                  </button>
                  <a
                    className="px-4 py-2 border rounded-lg"
                    href={`mailto:${templeContact.emailMain}?subject=Prerna%20Retreat%20Registration`}
                  >
                    Email Coordinator
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border p-6 shadow-sm flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/4 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-700">26 Dec</div>
                  <div className="text-sm text-gray-600">Chetana Festival</div>
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-semibold">Cultural & Devotional Festival</h4>
                <p className="text-gray-700 mt-2">
                  Performances, competitions in music & arts, devotional dramas, and community
                  feasts — a celebration of youthful creativity and devotion.
                </p>
                <div className="mt-4 flex gap-3">
                  <a
                    className="px-4 py-2 border rounded-lg"
                    href={`mailto:${templeContact.emailMain}?subject=Chetana%20Festival%20Query`}
                  >
                    Event Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Weekly Schedule & Features */}
        {/* <section className="mb-12">
          <h3 className="text-3xl font-serif text-indigo-900 mb-6">Weekly Schedule </h3>
          <div className="bg-white rounded-2xl border overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-indigo-50">
                <tr>
                  <th className="px-6 py-3">Day</th>
                  <th className="px-6 py-3">Time</th>
                  <th className="px-6 py-3">Activity</th>
                  <th className="px-6 py-3">Venue</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-6 py-4">Saturday</td>
                  <td className="px-6 py-4">5:30 PM – 7:00 PM</td>
                  <td className="px-6 py-4">Bhagavad-Gita Class & Chanting</td>
                  <td className="px-6 py-4">Temple Hall</td>
                </tr>
                <tr className="border-t">
                  <td className="px-6 py-4">Sunday</td>
                  <td className="px-6 py-4">10:00 AM – 12:00 PM</td>
                  <td className="px-6 py-4">Kirtan, Arts & Service</td>
                  <td className="px-6 py-4">Community Room</td>
                </tr>
                <tr className="border-t">
                  <td className="px-6 py-4">Wednesday</td>
                  <td className="px-6 py-4">6:00 PM – 7:30 PM</td>
                  <td className="px-6 py-4">Life Skills Workshop / Debate</td>
                  <td className="px-6 py-4">Study Hall</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section> */}

        {/* Gallery */}
        {/* <section className="mb-12">
          <h3 className="text-3xl font-serif text-indigo-900 mb-6">Gallery & Moments</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[groupService, boysCamp, girlsFestival, devotional].map((src, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden shadow-md transform hover:scale-105 transition"
              >
                <img src={src} alt={`gallery-${i}`} className="w-full h-44 object-cover" />
              </div>
            ))}
          </div>
        </section> */}

        {/* Testimonials */}
        <section className="mb-12">
          <h3 className="text-3xl font-serif text-indigo-900 mb-6">Voices of Youth</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <blockquote className="bg-white p-6 rounded-2xl border shadow-sm">
              <p className="text-gray-800 italic">
                "IYS changed how I see leadership — it's service first. Camps helped me find my calm."
              </p>
              <footer className="mt-4 text-sm text-gray-600">— Aditya, 21</footer>
            </blockquote>

            <blockquote className="bg-white p-6 rounded-2xl border shadow-sm">
              <p className="text-gray-800 italic">
                "The cultural programs helped me reconnect with our traditions while learning new
                skills."{" "}
              </p>
              <footer className="mt-4 text-sm text-gray-600">— Meera, 19</footer>
            </blockquote>

            <blockquote className="bg-white p-6 rounded-2xl border shadow-sm">
              <p className="text-gray-800 italic">
                "Friendly mentors & a supportive community — great place to grow and serve."
              </p>
              <footer className="mt-4 text-sm text-gray-600">— Karan, 24</footer>
            </blockquote>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="mb-16">
          <h3 className="text-3xl font-serif text-indigo-900 mb-6">Frequently Asked Questions</h3>

          <div className="space-y-4">
            {[
              {
                q: "What is the age group for IYS?",
                a: "Typically youth between ~13 to 30 years. Subgroups & activities are age-appropriate.",
              },
              {
                q: "Are sessions free?",
                a: "Weekly sessions are generally free. Camps/retreats may have a small fee to cover logistics.",
              },
              {
                q: "Can parents join or volunteer?",
                a: "Yes — parents and volunteers are welcome to assist with events, seva and logistics.",
              },
              {
                q: "What does registration require?",
                a: "Basic contact details. For residential events, health information and consent (if minor).",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full px-6 py-4 flex justify-between items-center"
                >
                  <span className="text-left">
                    <strong className="text-gray-800">{item.q}</strong>
                  </span>
                  <span className="text-gray-500">{faqOpen[i] ? "−" : "+"}</span>
                </button>

                {faqOpen[i] && (
                  <div className="px-6 pb-4 text-gray-700 border-t">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Footer contact strip */}
        <footer className="bg-white rounded-2xl border p-6 text-gray-700 flex flex-col md:flex-row items-center gap-4">
          <div>
            <h4 className="font-semibold text-indigo-900">Get in touch</h4>
            <p>{templeContact.address}</p>
            <p className="mt-2">
              <FaPhoneAlt className="inline mr-2" />
              <a href={`tel:${templeContact.phoneMain}`}>{templeContact.phoneMain}</a>
            </p>
            <p>
              <FaEnvelope className="inline mr-2" />
              <a href={`mailto:${templeContact.emailMain}`}>{templeContact.emailMain}</a>
            </p>
          </div>

          <div className="ml-auto flex items-center gap-3">
            <a
              href={`https://wa.me/${contactBoys.phone.replace(/\D/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-lg bg-green-600 text-white flex items-center gap-2"
            >
              <FaWhatsapp /> WhatsApp
            </a>

            {/* <a
              href="#register"
              onClick={(e) => {
                e.preventDefault();
                setModal({ open: true, forProgram: "Both / Volunteer" });
              }}
              className="px-4 py-2 rounded-lg border hover:bg-gray-50"
            >
              Register / Volunteer
            </a> */}
          </div>
        </footer>
      </main>

      <RegisterModal
        open={modal.open}
        onClose={() => setModal({ open: false, forProgram: "" })}
        defaultFor={modal.forProgram}
      />
    </div>
  );
}
