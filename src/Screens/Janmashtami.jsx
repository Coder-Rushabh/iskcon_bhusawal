import React, { useState } from "react";
import { usePageMeta } from "../hooks/usePageMeta";
import { openRazorpayCheckout, RAZORPAY_MAX_AMOUNT } from "../lib/razorpay";
import heroKrishna from "../assets/darshan/8.jpeg";
import radhaKrishna from "../assets/darshan/3.jpeg";
import kirtanPhoto from "../assets/iskcon-kirtan.jpg";
import paymentQr from "../assets/iskcon-payment-qr.jpeg";

// ── Seva data from the ISKCON Bhusawal Janmashtami flyer ────────────────────

const SEVA_ITEMS = [
  { name: "पंडाल सेवा", en: "Pandal Seva", amount: 60000 },
  { name: "महाप्रसाद सेवा", en: "Mahaprasad Seva", amount: 50000 },
  { name: "विग्रहों के वस्त्र सेवा", en: "Deity Vastra (Garment) Seva", amount: 25000 },
  { name: "पुष्प सेवा", en: "Flower Decoration Seva", amount: 25000 },
  { name: "नंद-यशोदा अभिषेक सेवा", en: "Nand-Yashoda Abhishek Seva", amount: 11000 },
  { name: "महाशंख अभिषेक सेवा", en: "Maha Shankh Abhishek Seva", amount: 5100 },
  { name: "शंख अभिषेक सेवा", en: "Shankh Abhishek Seva", amount: 2100 },
];

const BANK = {
  name: "International Society For Krishna Consciousness",
  account: "911010002501853",
  ifsc: "UTIB0001040",
  branch: "Bhusawal",
  receipt: "7676704379",
  phone2: "9011219587",
};

const PROGRAM = [
  { time: "६:०० सायं", en: "6:00 PM", title: "मंगल कीर्तन", desc: "Sankirtan begins with dhol, mridanga and karatal as devotees gather at Sri Sri Radha Murlidhar Mandir." },
  { time: "७:०० सायं", en: "7:00 PM", title: "श्रीमद्भागवत प्रवचन", desc: "A devotional discourse on the appearance pastimes of Lord Krishna." },
  { time: "८:३० रात्रि", en: "8:30 PM", title: "सांस्कृतिक कार्यक्रम", desc: "Bhajans, dance and a Krishna-leela drama performed by the temple's children and youth." },
  { time: "१०:३० रात्रि", en: "10:30 PM", title: "जागरण कीर्तन", desc: "Continuous kirtan as the whole temple awaits the midnight hour of Krishna's appearance." },
  { time: "१२:०० रात्रि", en: "12:00 AM", title: "महाभिषेक व श्रृंगार दर्शन", desc: "At the exact moment of appearance — abhishek of the deities with milk, dahi, honey and panchamrit, followed by resplendent shringar darshan and Maha Aarti." },
  { time: "१२:३० रात्रि", en: "12:30 AM", title: "महाप्रसाद", desc: "Maha prasad is distributed to every devotee present." },
];

function donate(amount, description) {
  openRazorpayCheckout({
    amount,
    description,
    notes: { temple: "Sri Sri Radha Murlidhar Mandir, Bhusawal", event: "Janmashtami" },
    onSuccess: (res) => {
      alert(`Hare Krishna! Donation received.\nPayment ID: ${res.razorpay_payment_id}\nThank you for your seva!`);
    },
    onFailure: (reason) => {
      alert(
        reason
          ? `Payment failed: ${reason}`
          : "Payment could not be verified. If any amount was deducted, please contact us with your payment ID."
      );
    },
    onOrderError: (reason) => {
      alert(`This amount can't be processed online right now (${reason}). Please use the bank transfer details below, or contact us via WhatsApp: ${BANK.receipt}.`);
      document.getElementById("bank-details")?.scrollIntoView({ behavior: "smooth", block: "center" });
    },
  });
}

function Janmashtami() {
  usePageMeta({
    title: "Sri Krishna Janmashtami",
    description:
      "Join ISKCON Bhusawal for Sri Krishna Janmashtami, Friday 4 September 2026, at Sri Sri Radha Murlidhar Mandir — kirtan, maha-abhishek, cultural program and maha prasad. Sponsor a seva for this year's celebration.",
  });

  const [customAmount, setCustomAmount] = useState("");
  const [copiedField, setCopiedField] = useState(null);
  const overLimit = parseFloat(customAmount) > RAZORPAY_MAX_AMOUNT;

  const handleCustomDonate = () => {
    const amount = parseFloat(customAmount);
    if (!amount || amount <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }
    donate(amount, "Janmashtami Seva — ISKCON Bhusawal");
  };

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    });
  };

  return (
    <div className="bg-stone-50 min-h-screen">

      {/* ── Hero ── */}
      <section className="relative bg-[#2C1208] py-24 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroKrishna} alt="" className="w-full h-full object-cover object-top opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2C1208]/85 via-[#2C1208]/80 to-[#2C1208]" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center text-white">
          <p className="text-saffron-300 text-xs font-semibold tracking-[0.3em] uppercase mb-4">ISKCON Bhusawal &middot; Sri Sri Radha Murlidhar Mandir</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">
            श्री कृष्ण <span className="text-saffron-300">जन्माष्टमी</span>
          </h1>
          <p className="text-xl text-stone-300 mb-4 font-serif italic">Sri Krishna Janmashtami</p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-saffron-400/50" />
            <div className="w-2 h-2 bg-saffron-400 rotate-45" />
            <div className="w-16 h-px bg-saffron-400/50" />
          </div>
          <p className="text-stone-300 text-lg leading-relaxed max-w-xl mx-auto">
            भगवान श्री कृष्ण के दिव्य प्राकट्य महोत्सव में अपने परिवार व मित्रों सहित पधारिए।
          </p>
          <p className="text-stone-400 text-sm mt-2 max-w-xl mx-auto">
            Join us in celebrating the appearance of Lord Sri Krishna with kirtan, maha-abhishek and maha prasad.
          </p>

          <div className="inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mt-8 px-6 py-4 border border-saffron-500/30 bg-white/5">
            <span className="text-saffron-300 font-serif font-semibold text-base">शुक्रवार, ०४ सितम्बर २०२६</span>
            <span className="text-stone-500">&middot;</span>
            <span className="text-stone-300 text-sm">6:00 PM – 12:30 AM</span>
            <span className="text-stone-500">&middot;</span>
            <span className="text-stone-300 text-sm">Ram Mandir Ward, Bhusawal</span>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-10">
            <a href="#seva" className="bg-saffron-500 hover:bg-saffron-600 text-white text-sm font-medium px-7 py-3.5 tracking-wide transition-colors">
              Sponsor a Seva
            </a>
            <a href="#program" className="border border-stone-500 text-stone-200 hover:bg-white/5 text-sm font-medium px-7 py-3.5 tracking-wide transition-colors">
              View the Program
            </a>
          </div>
        </div>
      </section>

      {/* ── Significance ── */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label mb-4">The Significance</p>
            <h2 className="font-serif text-3xl text-stone-900 mb-4">Why Janmashtami Is Celebrated</h2>
            <div className="w-10 h-0.5 bg-saffron-400 mb-6" />
            <div className="space-y-4 text-stone-600 text-[15px] leading-relaxed">
              <p>
                At midnight on Krishna Ashtami of the month of Bhadrapada, under the star Rohini, the Supreme Lord Sri Krishna appeared in the prison cell of Devaki and Vasudeva in Mathura. It was not an ordinary birth — it was the descent of Godhead Himself, to protect dharma and vanquish the forces of adharma.
              </p>
              <p>
                Janmashtami is the living proof of Krishna's own promise in the Bhagavad-gita — that whenever righteousness declines, He appears to restore it.
              </p>
            </div>
          </div>
          <div className="bg-[#2C1208] p-8 text-white rounded-sm">
            <p className="font-serif text-lg text-saffron-200 leading-relaxed text-center mb-1">
              यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।<br />अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥
            </p>
            <p className="font-serif text-lg text-saffron-200 leading-relaxed text-center mb-4">
              परित्राणाय साधूनां विनाशाय च दुष्कृताम्।<br />धर्मसंस्थापनार्थाय सम्भवामि युगे युगे॥
            </p>
            <p className="text-stone-300 text-sm italic leading-relaxed text-center">
              "Whenever and wherever there is a decline in religious practice, O descendant of Bharata, and a predominant rise of irreligion — at that time I descend Myself. To deliver the pious and annihilate the miscreants, as well as to reestablish the principles of dharma, I appear millennium after millennium."
            </p>
            <p className="text-stone-500 text-xs text-center mt-3">— Bhagavad-gītā 4.7–4.8</p>
          </div>
        </div>
      </section>

      {/* ── Bhagavatam birth story ── */}
      <section className="bg-amber-50 border-y border-amber-200 py-16 px-4">
        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="border border-stone-100 shadow-sm overflow-hidden mb-6">
              <img src={radhaKrishna} alt="Sri Sri Radha Murlidhar, ISKCON Bhusawal" className="w-full h-72 object-cover" loading="lazy" />
            </div>
            <div className="bg-white border border-stone-100 shadow-sm p-8">
              <p className="font-serif text-lg text-stone-800 leading-relaxed text-center mb-4">
                तमद्भुतं बालकमम्बुजेक्षणं चतुर्भुजं शङ्खगदाद्युदायुधम्।<br />
                श्रीवत्सलक्ष्मं गलशोभिकौस्तुभं पीताम्बरं सान्द्रपयोदसौभगम्॥
              </p>
              <p className="text-stone-500 text-sm italic leading-relaxed text-center">
                "Vasudeva then saw the newborn child, who had eyes just like lotus petals, four arms holding conch, mace, disc and lotus, and who was decorated with the Srivatsa mark and a brilliant Kaustubha jewel — dressed in yellow silk, His complexion resembling a dense, glistening rain cloud."
              </p>
              <p className="text-saffron-600 text-xs font-medium text-center mt-3">— Śrīmad-Bhāgavatam 10.3.8</p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="section-label mb-4">From the Śrīmad-Bhāgavatam</p>
            <h2 className="font-serif text-3xl text-stone-900 mb-4">Born at Midnight, in a Prison Cell</h2>
            <div className="w-10 h-0.5 bg-saffron-400 mb-6" />
            <div className="space-y-4 text-stone-600 text-[15px] leading-relaxed">
              <p>
                The moment Krishna appeared before Vasudeva and Devaki, He revealed His four-armed form, radiant with divine ornaments. Vasudeva then carried the infant across the flooding Yamuna to Gokul, where He was raised in the loving care of Nanda and Yashoda.
              </p>
              <p>
                It is in remembrance of this very night that devotees keep vigil — chanting, lighting lamps, and waiting for midnight to perform maha-abhishek and shringar darshan of the deities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Program at ISKCON Bhusawal ── */}
      <section id="program" className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="section-label text-center mb-3">ISKCON Bhusawal</p>
          <h2 className="font-serif text-3xl text-stone-900 text-center mb-3">How the Night Unfolds</h2>
          <p className="text-stone-500 text-sm text-center max-w-xl mx-auto mb-4">
            श्री श्री राधा मुरलीधर मंदिर में यह पावन रात्रि भक्ति, संगीत और सेवा के संगम के रूप में मनाई जाती है। सभी का हार्दिक स्वागत है।
          </p>
          <div className="w-10 h-0.5 bg-saffron-400 mx-auto mb-12" />

          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3 border border-stone-200 divide-y divide-stone-100 bg-white">
              {PROGRAM.map((item, i) => (
                <div key={i} className="flex gap-4 p-5">
                  <div className="shrink-0 w-20 text-right">
                    <div className="text-saffron-600 font-serif font-bold text-sm leading-tight">{item.time}</div>
                    <div className="text-stone-400 text-[11px] mt-0.5">{item.en}</div>
                  </div>
                  <div className="w-0.5 self-stretch bg-saffron-200 shrink-0" />
                  <div>
                    <p className="font-serif text-base text-stone-900 mb-1">{item.title}</p>
                    <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:col-span-2 space-y-4">
              <div className="border border-stone-100 shadow-sm overflow-hidden">
                <img src={kirtanPhoto} alt="Sankirtan — devotees chanting the holy names" className="w-full h-56 object-cover" loading="lazy" />
              </div>
              <div className="bg-[#2C1208] p-6 text-center">
                <p className="font-serif text-base text-saffron-200 leading-relaxed">
                  हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे।<br />हरे राम हरे राम राम राम हरे हरे॥
                </p>
                <p className="text-stone-400 text-xs mt-2">The maha-mantra, chanted through the night</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Seva / Donation ── */}
      <section id="seva" className="bg-stone-100 border-t border-stone-200 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label mb-3">Make Your Offering</p>
            <h2 className="font-serif text-3xl text-stone-900">Sponsor This Year's Janmashtami Seva</h2>
            <div className="w-10 h-0.5 bg-saffron-400 mx-auto mt-4" />
            <p className="text-stone-500 text-sm mt-5 max-w-xl mx-auto leading-relaxed">
              From the pandal to the maha prasad, this celebration is made possible entirely through the seva of devotees like you. Choose an offering below.
            </p>
          </div>

          <div className="bg-white border border-stone-100 shadow-sm p-6 mb-10">
            <p className="font-serif text-base text-stone-800 italic leading-relaxed text-center mb-2">
              "दातव्यमिति यद्दानं दीयतेऽनुपकारिणे। देशे काले च पात्रे च तद्दानं सात्त्विकं स्मृतम्॥"
            </p>
            <p className="text-stone-500 text-sm text-center leading-relaxed">
              "Charity given out of duty, without expectation of return, at the proper time and place, and to a worthy person — that charity is considered to be in the mode of goodness."
            </p>
            <p className="text-saffron-600 text-xs font-medium text-center mt-2">— Bhagavad-gītā 17.20</p>
          </div>

          {/* Seva table */}
          <div className="border border-stone-200 overflow-hidden bg-white mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-stone-900 text-stone-200">
                  <th className="text-left px-6 py-4 font-medium tracking-wide">Seva</th>
                  <th className="text-left px-6 py-4 font-medium tracking-wide">Amount</th>
                  <th className="text-right px-6 py-4 font-medium tracking-wide">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {SEVA_ITEMS.map((item, i) => (
                  <tr key={i} className="hover:bg-saffron-50 transition-colors">
                    <td className="px-6 py-4 text-stone-800">
                      {item.name}
                      <span className="block text-xs text-stone-400">{item.en}</span>
                    </td>
                    <td className="px-6 py-4 font-semibold text-saffron-600">
                      &#8377; {item.amount.toLocaleString("en-IN")}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => donate(item.amount, `${item.en} — Janmashtami, ISKCON Bhusawal`)}
                        className="bg-saffron-500 hover:bg-saffron-600 text-white text-xs font-medium px-5 py-2.5 tracking-wide transition-colors"
                      >
                        Donate
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-stone-500 text-xs text-center mb-12 -mt-4">
            Devotees sponsoring the abhishek sevas will have the opportunity to personally perform the abhishek.
          </p>

          {/* Custom donation */}
          <div className="bg-white border border-stone-200 p-8 lg:p-10 mb-8">
            <h3 className="font-serif text-2xl text-stone-900 mb-1">Custom Donation</h3>
            <p className="text-stone-500 text-sm mb-8">Enter any amount you wish to offer for the Janmashtami celebration.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 font-medium">&#8377;</span>
                <input
                  type="number"
                  min="1"
                  placeholder="Enter amount in rupees"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="w-full pl-8 pr-4 py-3.5 border border-stone-200 focus:outline-none focus:border-saffron-400 text-stone-800 bg-stone-50 text-sm"
                />
              </div>
              <button
                onClick={handleCustomDonate}
                disabled={overLimit}
                className={`text-sm font-medium px-8 py-3.5 tracking-wide transition-colors whitespace-nowrap ${
                  overLimit ? "bg-stone-200 text-stone-400 cursor-not-allowed" : "bg-saffron-500 hover:bg-saffron-600 text-white"
                }`}
              >
                Donate Now
              </button>
            </div>
            {overLimit && (
              <p className="text-xs text-stone-500 mt-3">
                Amounts above &#8377;{RAZORPAY_MAX_AMOUNT.toLocaleString("en-IN")} can&apos;t be processed online yet — please use the bank transfer details below.
              </p>
            )}
          </div>

          {/* Bank details */}
          <div id="bank-details" className="bg-stone-900 text-stone-300 p-8 lg:p-10">
            <div className="grid md:grid-cols-5 gap-10">
              <div className="md:col-span-3">
                <h3 className="font-serif text-xl text-white mb-6">Direct Bank Transfer (NEFT / IMPS)</h3>
                <dl className="space-y-3 text-sm mb-6">
                  {[
                    ["Account Name", BANK.name],
                    ["Account Number", BANK.account],
                    ["IFSC Code", BANK.ifsc],
                    ["Branch", BANK.branch],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-start justify-between gap-4 pb-3 border-b border-stone-800 last:border-0">
                      <div className="flex gap-4">
                        <dt className="text-stone-500 w-32 shrink-0">{label}</dt>
                        <dd className="text-stone-200 font-medium">{value}</dd>
                      </div>
                      <button
                        onClick={() => copyToClipboard(value, label)}
                        className="shrink-0 text-xs text-saffron-400 hover:text-saffron-300 font-medium transition-colors"
                      >
                        {copiedField === label ? "✓ Copied" : "Copy"}
                      </button>
                    </div>
                  ))}
                </dl>
                <div className="bg-saffron-500/10 border border-saffron-500/30 p-4 text-sm text-stone-300">
                  <strong className="text-saffron-200">For a donation receipt:</strong> send your payment screenshot and address via WhatsApp to{" "}
                  <strong className="text-white">{BANK.receipt}</strong>. For any queries, call {BANK.receipt} or {BANK.phone2}.
                </div>
              </div>
              <div className="md:col-span-2 flex flex-col items-center justify-start text-center border-t border-stone-800 pt-8 md:border-t-0 md:pt-0 md:border-l md:pl-10 md:border-stone-800">
                <p className="font-serif text-lg text-white mb-1">Scan This to Pay</p>
                <p className="text-stone-500 text-xs mb-5">ISKCON Bhusawal &middot; UPI</p>
                <div className="bg-white p-3 shadow-sm">
                  <img
                    src={paymentQr}
                    alt="UPI QR code for International Society for Krishna Consciousness, ISKCON Bhusawal"
                    className="w-44 h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Closing ── */}
      <section className="py-16 px-4 text-center">
        <p className="section-label mb-4">Hare Krishna</p>
        <h2 className="font-serif text-2xl text-stone-900 mb-6 max-w-lg mx-auto leading-snug">
          इस दिव्य रात्रि में अपने परिवार व मित्रों को साथ लेकर आइए।
        </h2>
        <a
          href="#seva"
          className="inline-block bg-saffron-500 hover:bg-saffron-600 text-white font-medium px-8 py-4 tracking-wide transition-colors duration-200"
        >
          Sponsor a Seva — Hare Krishna 🙏
        </a>
        <p className="text-stone-400 text-sm mt-10 tracking-widest font-light">
          Hare Krishna Hare Krishna &middot; Krishna Krishna Hare Hare
          <br />
          Hare Rama Hare Rama &middot; Rama Rama Hare Hare
        </p>
      </section>

    </div>
  );
}

export default Janmashtami;
