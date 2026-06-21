import React, { useState } from "react";
import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";
import gaur from "../assets/gaur.jpg";
import prabhupada from "../assets/srila-prabhupada.png";

// ── Seva data from ISKCON Bhusawal flyers ────────────────────────────────────

const VIGRAH_SEVA = {
  title: "विग्रह सेवा",
  subtitle: "Vigrah Seva",
  color: "from-pink-600 to-purple-700",
  accent: "bg-pink-600",
  light: "bg-pink-50",
  border: "border-pink-200",
  text: "text-pink-700",
  tagline: "कृष्ण के प्रति हमारा प्रेम हमारे भीतर उनकी और भी अधिक भक्तिपूर्वक सेवा करने की इच्छा जगाता है।",
  desc: "Vigrah Seva is performed by devotees who dedicate themselves to the Lord daily, remembering Him with complete devotion. By sponsoring deity worship, you directly participate in serving Sri Sri Radha Murlidhar.",
  quote: "\"One who directly worships Lord Krishna through puja and service has understood the essence of the Vedas.\"",
  source: "— Śrīmad-Bhāgavatam 4.7.46, Tātparya",
  items: [
    { name: "मंगल खीर", en: "Mangal Kheer", amount: 2100 },
    { name: "बाल भोग", en: "Bal Bhog", amount: 3100 },
    { name: "राज भोग", en: "Raj Bhog", amount: 5500 },
    { name: "दूध और फल", en: "Dudh aur Phal", amount: 5100 },
    { name: "संध्या भोग", en: "Sandhya Bhog", amount: 2100 },
    { name: "विग्रह की माला और फूलों की सजावट", en: "Mala & Flower Decoration", amount: 21000 },
  ],
};

const SADHU_SEVA = {
  title: "साधु सेवा",
  subtitle: "Sadhu Seva",
  color: "from-orange-500 to-amber-600",
  accent: "bg-orange-500",
  light: "bg-orange-50",
  border: "border-orange-200",
  text: "text-orange-700",
  tagline: "साधु भगवान की करुणा के वाहक होते हैं। आइए हम अपने उदार योगदान के लिए साधु भोजदान के माध्यम से उनके प्रति कृतज्ञता व्यक्त करें।",
  desc: "Sadhus carry the mercy of the Lord. By feeding them, you earn immense spiritual merit. Sadhu Seva is a service motivated by the spirit of offering to the holy saints.",
  quote: "\"Awakening of love for Krishna begins not only in the association of devotees, but can also reach its fullness through the association of sadhus.\"",
  source: "— Śrīmad-Bhāgavatam 1.2.17, Commentary",
  items: [
    { name: "महा प्रीति भोज", en: "Maha Preeti Bhoj", amount: 5100 },
    { name: "प्रीति भोज", en: "Preeti Bhoj (Large)", amount: 3100 },
    { name: "प्रीति भोज", en: "Preeti Bhoj (Standard)", amount: 2100 },
    { name: "नियमित भोज", en: "Niyamit Bhoj", amount: 1100 },
  ],
};

const GRANTH_DAN = {
  title: "ग्रन्थ दान",
  subtitle: "Granth Dan — Book Distribution",
  color: "from-blue-600 to-indigo-700",
  accent: "bg-blue-600",
  light: "bg-blue-50",
  border: "border-blue-200",
  text: "text-blue-700",
  tagline: "भारत की कालातीत बुद्धिमत्ता वेदों और संस्कृत ग्रंथों में अभिव्यक्त होती है जो मानव ज्ञान के सभी क्षेत्रों को छूती है।",
  desc: "Sponsor the distribution of Srila Prabhupada's transcendental books. These books have transformed millions of lives worldwide. Sponsoring even one book plants the seed of devotion in someone's heart.",
  quote: "\"There is no literature in the entire universe like Śrīmad-Bhāgavatam. It is the matchless gift. Every word is meant for the welfare of human society. Please distribute books.\"",
  source: "— Srila Prabhupada",
  items: [
    { name: "श्रीमद भागवतम", en: "Śrīmad-Bhāgavatam (18 vols.)", amount: 7000 },
    { name: "भगवद्गीता", en: "Bhagavad-Gītā As It Is", amount: 350 },
    { name: "चैतन्य चरितामृत", en: "Caitanya-caritāmṛta (9 vols.)", amount: 3000 },
    { name: "प्रभुपाद लीलामृत", en: "Prabhupāda-līlāmṛta", amount: 1500 },
  ],
};

const NITYA_DAN = {
  title: "नित्य दान",
  subtitle: "Nitya Dan — Monthly Devotion",
  color: "from-green-600 to-emerald-700",
  accent: "bg-green-600",
  light: "bg-green-50",
  border: "border-green-200",
  text: "text-green-700",
  tagline: "नित्य सेवा एक मासिक दान कार्यक्रम है, जिसमें भक्त कृष्ण के चरण कमलों में दान देकर मासिक रूप से भाग ले सकता है।",
  desc: "Nitya Dan is a monthly giving program. By contributing regularly, devotees receive the continuous blessings of Sri Sri Radha Murlidhar and advance steadily in Krishna consciousness.",
  quote: "\"पत्रं पुष्पं फलं तोयं यो मे भक्त्या प्रयच्छति | तदहं भक्त्युपहृतमश्नामि प्रयतात्मनः ||\" — If one offers Me with love and devotion a leaf, a flower, fruit or water, I will accept it.",
  source: "— Bhagavad-gītā 9.26",
  items: [
    { name: "सुदामा श्रद्धा दान", en: "Sudama Shraddha Dan", amount: 501 },
    { name: "सुदामा भक्ति दान", en: "Sudama Bhakti Dan", amount: 1001 },
    { name: "सुदामा समर्पण दान", en: "Sudama Samarpan Dan", amount: 2100 },
    { name: "सुदामा सेवा दान", en: "Sudama Seva Dan", amount: 5100 },
    { name: "सुदामा सौभाग्य दान", en: "Sudama Saubhagya Dan", amount: 11000 },
    { name: "सुदामा महादान", en: "Sudama Mahadan", amount: 21000 },
  ],
};

const BANK = {
  name: "International Society For Krishna Consciousness",
  account: "911010002501853",
  ifsc: "UTIB0001040",
  branch: "Bhusawal",
  receipt: "7767043798",
};

const SEVA_CATEGORIES = [
  { key: "vigrah", label: "Vigrah Seva", data: VIGRAH_SEVA },
  { key: "sadhu",  label: "Sadhu Seva",  data: SADHU_SEVA },
  { key: "granth", label: "Granth Dan",  data: GRANTH_DAN },
  { key: "nitya",  label: "Nitya Dan",   data: NITYA_DAN },
];

const RAZORPAY_KEY_ID = "rzp_test_YourKeyHere";

function openRazorpay(amountInRupees, description) {
  if (!window.Razorpay) {
    alert("Payment gateway not loaded. Please refresh and try again.");
    return;
  }
  const rzp = new window.Razorpay({
    key: RAZORPAY_KEY_ID,
    amount: amountInRupees * 100,
    currency: "INR",
    name: "ISKCON Bhusawal",
    description,
    image: "/src/assets/iskcon.png",
    handler(res) {
      alert(`Hare Krishna! Donation received.\nPayment ID: ${res.razorpay_payment_id}\nThank you!`);
    },
    notes: { temple: "Sri Sri Radha Murlidhar Mandir, Bhusawal" },
    theme: { color: "#C8860A" },
  });
  rzp.open();
}

function handleUpiFallback(amount, description) {
  const params = new URLSearchParams({
    pa: "037322010400054@axisbank",
    pn: "INTERNATIONAL SOCIETY FOR KRISHNA CONSCIOUSNESS",
    am: amount.toString(),
    tn: description,
    cu: "INR",
  });
  window.open(`upi://pay?${params.toString()}`, "_blank");
}

// ── Sub-components ────────────────────────────────────────────────────────────

function SevaCard({ seva, index }) {
  const [copied, setCopied] = useState(null);

  const formatAmount = (n) => `₹${n.toLocaleString("en-IN")}`;

  return (
    <div id={seva.subtitle.split(" ")[0].toLowerCase()} className="bg-white border border-stone-100 shadow-sm overflow-hidden">
      {/* Coloured header */}
      <div className={`bg-gradient-to-r ${seva.color} px-8 py-8 text-white`}>
        <p className="text-xs font-medium tracking-[0.3em] uppercase opacity-70 mb-2">ISKCON Bhusawal</p>
        <h2 className="font-serif text-3xl font-bold mb-1">{seva.title}</h2>
        <p className="text-sm opacity-80">{seva.subtitle}</p>
      </div>

      <div className="p-8 lg:p-10">
        {/* Tagline */}
        <p className="text-stone-600 leading-relaxed mb-3 text-[15px] font-medium">{seva.tagline}</p>
        <p className="text-stone-500 text-sm leading-relaxed mb-8">{seva.desc}</p>

        {/* Price list */}
        <div className={`border ${seva.border} rounded-sm overflow-hidden mb-8`}>
          {seva.items.map((item, i) => (
            <div
              key={i}
              className={`flex items-center justify-between px-5 py-4 ${i % 2 === 0 ? "bg-white" : seva.light} border-b ${seva.border} last:border-b-0`}
            >
              <div>
                <p className="font-medium text-stone-800 text-sm">{item.name}</p>
                <p className="text-xs text-stone-400">{item.en}</p>
              </div>
              <span className={`font-serif text-lg font-bold ${seva.text}`}>{formatAmount(item.amount)}</span>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className={`${seva.light} border-l-4 ${seva.accent} px-5 py-4 rounded-r-sm`}>
          <p className="text-sm text-stone-700 italic leading-relaxed">{seva.quote}</p>
          <p className={`text-xs ${seva.text} font-medium mt-2`}>{seva.source}</p>
        </div>
      </div>
    </div>
  );
}

// ── Main Page ────────────────────────────────────────────────────────────────

export default function SudamaSeva() {
  usePageMeta({
    title: "Sudama Seva",
    description: "Join the Sudama Seva program at ISKCON Bhusawal. Sponsor Vigrah Seva, Sadhu Seva, Granth Dan, and Nitya Dan. Receive Krishna's blessings through devotional service.",
  });

  const [copiedField, setCopiedField] = useState(null);
  const [donSeva, setDonSeva] = useState("vigrah");
  const [donItem, setDonItem] = useState(null);
  const [customAmount, setCustomAmount] = useState("");
  const [useUpi, setUseUpi] = useState(false);

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    });
  };

  const handleSevaDonate = () => {
    const amount = donItem ? donItem.amount : parseFloat(customAmount);
    if (!amount || amount <= 0) {
      alert("Please select a seva or enter a custom amount.");
      return;
    }
    const sevaLabel = donItem ? `${donItem.en} — ${SEVA_CATEGORIES.find(s => s.key === donSeva)?.label}` : "Sudama Seva Donation";
    const desc = `${sevaLabel} — ISKCON Bhusawal`;
    if (useUpi) {
      handleUpiFallback(amount, desc);
    } else {
      openRazorpay(amount, desc);
    }
  };

  return (
    <div className="bg-stone-50 min-h-screen">

      {/* ── Hero ── */}
      <section className="relative bg-[#2C1208] py-24 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img src={gaur} alt="" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2C1208]/80 via-[#2C1208]/70 to-[#2C1208]" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center text-white">
          <p className="text-saffron-300 text-xs font-semibold tracking-[0.3em] uppercase mb-4">ISKCON Bhusawal</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">
            सुदामा <span className="text-saffron-300">सेवा</span>
          </h1>
          <p className="text-xl text-stone-300 mb-4 font-serif italic">Sudama Seva</p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-saffron-400/50" />
            <div className="w-2 h-2 bg-saffron-400 rotate-45" />
            <div className="w-16 h-px bg-saffron-400/50" />
          </div>
          <p className="text-stone-300 text-lg leading-relaxed max-w-xl mx-auto">
            सुदामा सेवक बने और अपने जीवन में भगवन की कृपा और आशीर्वाद प्राप्त करे।
          </p>
          <p className="text-stone-400 text-sm mt-2 max-w-xl mx-auto">
            Become a Sudama Sevak and receive the grace and blessings of the Lord in your life.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {["#vigrah","#sadhu","#granth","#nitya"].map((id, i) => (
              <a key={id} href={id} className="bg-saffron-500 hover:bg-saffron-600 text-white text-sm font-medium px-6 py-3 transition-colors">
                {["Vigrah Seva","Sadhu Seva","Granth Dan","Nitya Dan"][i]}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Story of Sudama ── */}
      <section className="bg-amber-50 border-b border-amber-200 py-14 px-4">
        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label mb-4">The Story Behind the Seva</p>
            <h2 className="font-serif text-3xl text-stone-900 mb-4">Who Was Sudama?</h2>
            <div className="w-10 h-0.5 bg-saffron-400 mb-6" />
            <div className="space-y-4 text-stone-600 text-[15px] leading-relaxed">
              <p>Sudama was Lord Krishna's childhood friend and a poor brahmin. Despite extreme poverty, his heart was full of love for Krishna. With great hesitation, he once visited Dwarka to meet his dear friend.</p>
              <p>He brought only a small offering — a handful of flat rice (poha/chida) — as a gift for Lord Krishna. The Lord, moved by pure love, personally washed Sudama's feet, fed him, and showered him with immeasurable blessings.</p>
              <p>By <strong>Sudama Seva</strong>, you follow in the footsteps of this great devotee — offering whatever you have, however small, with a pure heart.</p>
            </div>
          </div>
          <div className="bg-[#2C1208] p-8 text-white rounded-sm">
            <p className="text-saffron-300 text-xs font-semibold tracking-[0.3em] uppercase mb-4">स्वागत है इस्कॉन भुसावल में</p>
            <p className="text-stone-200 text-sm leading-relaxed mb-4">
              आप यहाँ विग्रह सेवा, अन्नदान, गीता-दान, विद्यादान, मंदिर सहयोग, साधु भोजन, फूड फॉर लाइफ आदि के लिए दान कर सकते हैं।
            </p>
            <p className="text-stone-400 text-xs leading-relaxed italic mb-5">
              You can donate here for Vigrah Seva, Anna Dan, Gita Dan, Vidya Dan, Mandir Sahyog, Sadhu Bhojan, Food for Life, and more.
            </p>
            <div className="border border-saffron-500/30 p-4 rounded-sm bg-saffron-500/5">
              <p className="text-saffron-200 text-sm font-serif italic leading-relaxed">
                "यज्ञ, दान और तपस्या को कभी नहीं छोड़ना चाहिए — ये कार्य महान व्यक्तियों को भी शुद्ध करते हैं।"
              </p>
              <p className="text-stone-400 text-xs mt-2">— Bhagavad-gītā 18.5</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Seva Categories ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-10">
        <div id="vigrah"><SevaCard seva={VIGRAH_SEVA} index={0} /></div>
        <div id="sadhu"><SevaCard seva={SADHU_SEVA} index={1} /></div>
        <div id="granth"><SevaCard seva={GRANTH_DAN} index={2} /></div>
        <div id="nitya"><SevaCard seva={NITYA_DAN} index={3} /></div>
      </section>

      {/* ── Inline Donation ── */}
      <section id="donate" className="bg-[#2C1208] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-saffron-300 text-xs font-semibold tracking-[0.3em] uppercase mb-3">Make Your Offering</p>
            <h2 className="font-serif text-3xl text-white">Donate Online</h2>
            <div className="w-10 h-0.5 bg-saffron-400 mx-auto mt-4" />
            <p className="text-stone-400 text-sm mt-4 max-w-md mx-auto">
              Select a seva category and amount, then donate securely via Razorpay or UPI.
            </p>
          </div>

          <div className="bg-stone-800/60 border border-stone-700 p-6 sm:p-8 max-w-2xl mx-auto">
            {/* Category tabs */}
            <p className="text-stone-400 text-[11px] font-semibold tracking-[0.2em] uppercase mb-3">1. Select Seva</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-7">
              {SEVA_CATEGORIES.map(s => (
                <button
                  key={s.key}
                  onClick={() => { setDonSeva(s.key); setDonItem(null); }}
                  className={`py-2.5 text-xs font-medium border transition-colors ${
                    donSeva === s.key
                      ? "bg-saffron-500 border-saffron-500 text-white"
                      : "border-stone-600 text-stone-400 hover:border-saffron-500 hover:text-saffron-300"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>

            {/* Amount options */}
            <p className="text-stone-400 text-[11px] font-semibold tracking-[0.2em] uppercase mb-3">2. Select Amount</p>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {SEVA_CATEGORIES.find(s => s.key === donSeva).data.items.map((item, i) => (
                <button
                  key={i}
                  onClick={() => { setDonItem(item); setCustomAmount(""); }}
                  className={`text-left p-3 border transition-colors ${
                    donItem === item
                      ? "border-saffron-400 bg-saffron-500/10"
                      : "border-stone-700 hover:border-stone-500"
                  }`}
                >
                  <span className="text-stone-400 text-[11px] block leading-tight mb-0.5">{item.en}</span>
                  <span className="text-saffron-300 font-serif font-bold text-base">
                    ₹{item.amount.toLocaleString("en-IN")}
                  </span>
                </button>
              ))}
            </div>

            {/* Custom amount */}
            <div className="relative mb-7">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-500 text-sm">₹</span>
              <input
                type="number"
                min="1"
                placeholder="Or enter a custom amount"
                value={customAmount}
                onChange={e => { setCustomAmount(e.target.value); setDonItem(null); }}
                className="w-full pl-8 pr-4 py-3 bg-stone-900 border border-stone-700 focus:outline-none focus:border-saffron-400 text-stone-200 text-sm placeholder-stone-600"
              />
            </div>

            {/* Payment method toggle */}
            <p className="text-stone-400 text-[11px] font-semibold tracking-[0.2em] uppercase mb-3">3. Payment Method</p>
            <div className="flex items-center gap-3 mb-7">
              <div className="flex border border-stone-700 overflow-hidden">
                <button
                  onClick={() => setUseUpi(false)}
                  className={`px-5 py-2.5 text-xs font-medium transition-colors ${!useUpi ? "bg-saffron-500 text-white" : "text-stone-400 hover:bg-stone-700"}`}
                >
                  Razorpay
                </button>
                <button
                  onClick={() => setUseUpi(true)}
                  className={`px-5 py-2.5 text-xs font-medium transition-colors ${useUpi ? "bg-saffron-500 text-white" : "text-stone-400 hover:bg-stone-700"}`}
                >
                  UPI App
                </button>
              </div>
              <span className="text-stone-600 text-xs">
                {useUpi ? "Opens your UPI app directly" : "Cards, UPI, Net Banking"}
              </span>
            </div>

            {/* Donate button */}
            <button
              onClick={handleSevaDonate}
              className="w-full bg-saffron-500 hover:bg-saffron-600 text-white font-medium py-4 tracking-wide transition-colors text-sm"
            >
              Donate Now — Hare Krishna 🙏
            </button>

            <p className="text-center text-stone-600 text-xs mt-4">
              For receipt, send payment screenshot to WhatsApp: <strong className="text-stone-400">{BANK.receipt}</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ── Bank Details ── */}
      <section className="bg-stone-100 border-t border-stone-200 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label mb-3">Make Your Offering</p>
            <h2 className="font-serif text-3xl text-stone-900">Payment Details</h2>
            <div className="w-10 h-0.5 bg-saffron-400 mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Bank transfer */}
            <div className="bg-white border border-stone-100 shadow-sm p-8">
              <h3 className="font-serif text-xl text-stone-900 mb-6">Bank Transfer (NEFT / IMPS)</h3>
              <dl className="space-y-4">
                {[
                  ["Account Name", BANK.name],
                  ["Account Number", BANK.account],
                  ["IFSC Code", BANK.ifsc],
                  ["Branch", BANK.branch],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-start justify-between gap-4 pb-4 border-b border-stone-100 last:border-0">
                    <div>
                      <dt className="text-xs text-stone-400 font-medium uppercase tracking-wide mb-1">{label}</dt>
                      <dd className="text-stone-800 text-sm font-medium">{value}</dd>
                    </div>
                    <button
                      onClick={() => copyToClipboard(value, label)}
                      className="shrink-0 text-xs text-saffron-500 hover:text-saffron-600 font-medium transition-colors"
                    >
                      {copiedField === label ? "✓ Copied" : "Copy"}
                    </button>
                  </div>
                ))}
              </dl>
              <div className="mt-5 bg-amber-50 border border-amber-200 p-4 text-sm text-amber-800">
                <strong>For receipt:</strong> Send donation screenshot + your name & address to WhatsApp: <strong>{BANK.receipt}</strong>
              </div>
            </div>

            {/* Prabhupada + verse */}
            <div className="space-y-6">
              <div className="bg-[#2C1208] p-8 text-white">
                <p className="text-saffron-300 font-serif text-sm italic leading-relaxed mb-3">
                  "दाताव्यमिति यद्दानं दीयतेऽनुपकारिणे। देशे काले च पात्रे च तद्दानं सात्विकं स्मृतम् ॥"
                </p>
                <p className="text-stone-400 text-xs italic mb-4 leading-relaxed">
                  "Charity given out of duty, without expectation of return, at the proper time and place, and to a worthy person — that charity is considered to be in the mode of goodness."
                </p>
                <p className="text-stone-500 text-xs">— Bhagavad-gītā 17.20</p>
              </div>
              <div className="bg-white border border-stone-100 shadow-sm p-6 flex items-center gap-5">
                <img src={prabhupada} alt="Srila Prabhupada" className="w-20 h-20 object-cover rounded-full border-2 border-saffron-300 shrink-0" />
                <div>
                  <p className="text-stone-500 text-xs leading-relaxed italic">
                    "If you love me, distribute my books."
                  </p>
                  <p className="text-stone-800 text-sm font-medium mt-2">A.C. Bhaktivedanta Swami Prabhupada</p>
                  <p className="text-stone-400 text-xs">Founder-Acarya, ISKCON</p>
                </div>
              </div>
              <a
                href="#donate"
                className="block text-center bg-saffron-500 hover:bg-saffron-600 text-white font-medium py-4 tracking-wide transition-colors duration-200"
              >
                Donate Online via UPI / Razorpay ↑
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
