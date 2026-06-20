import React, { useState } from "react";
import d3 from "../assets/d3.png";
import d2 from "../assets/d2.png";
import { usePageMeta } from "../hooks/usePageMeta";

// Replace with your live Razorpay Key ID from razorpay.com
const RAZORPAY_KEY_ID = "rzp_test_YourKeyHere";

const DONATION_CATEGORIES = [
  {
    category: "Patrons",
    items: [
      { name: "Diamond Patron",         amount: "1 Crore",  value: 10000000 },
      { name: "Gold Patron",            amount: "51 Lakh",  value: 5100000  },
      { name: "Silver Premium Patron",  amount: "25 Lakh",  value: 2500000  },
      { name: "Silver Plus Patron",     amount: "15 Lakh",  value: 1500000  },
      { name: "Silver Patron",          amount: "7 Lakh",   value: 700000   },
    ],
  },
  {
    category: "Bricks",
    items: [
      { name: "Radha-Krishna Brick",       amount: "2 Lakh", value: 200000 },
      { name: "Gaur-Nitai Brick",          amount: "1 Lakh", value: 100000 },
      { name: "Srila Prabhupada Brick",    amount: "75,000", value: 75000  },
      { name: "Altar Brick",               amount: "50,000", value: 50000  },
    ],
  },
  {
    category: "Temple Components",
    items: [
      { name: "Temple Hall",   amount: "99 Lakh", value: 9900000 },
      { name: "Main Altar",    amount: "40 Lakh", value: 4000000 },
      { name: "Diorama",       amount: "31 Lakh", value: 3100000 },
      { name: "Devotee Room",  amount: "11 Lakh", value: 1100000 },
      { name: "Temple Pillar", amount: "10 Lakh", value: 1000000 },
    ],
  },
];

function openRazorpay(amountInRupees, description) {
  if (!window.Razorpay) {
    alert("Payment gateway not loaded. Please refresh the page and try again.");
    return;
  }

  const options = {
    key: RAZORPAY_KEY_ID,
    amount: amountInRupees * 100, // Razorpay expects paise
    currency: "INR",
    name: "ISKCON Bhusawal",
    description,
    image: "/src/assets/iskcon.png",
    handler(response) {
      alert(
        `Hare Krishna! Your donation was received.\nPayment ID: ${response.razorpay_payment_id}\nThank you for supporting the temple.`
      );
    },
    prefill: {
      name: "",
      email: "",
      contact: "",
    },
    notes: {
      temple: "Sri Sri Radha Murlidhar Mandir, Bhusawal",
    },
    theme: {
      color: "#C8860A",
    },
    modal: {
      ondismiss() {},
    },
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
}

function handleUpiFallback(amountValue, description) {
  const params = new URLSearchParams({
    pa: "037322010400054@axisbank",
    pn: "INTERNATIONAL SOCIETY FOR KRISHNA CONSCIOUSNESS",
    am: amountValue.toString(),
    tn: description,
    cu: "INR",
  });
  window.open(`upi://pay?${params.toString()}`, "_blank");
}

function Donation() {
  usePageMeta({
    title: "Donate",
    description:
      "Support the construction of Sri Sri Radha Murlidhar Mandir in Bhusawal. Donate via Razorpay or UPI. 80G tax exemption available.",
  });
  const [customAmount, setCustomAmount] = useState("");
  const [useUpi, setUseUpi] = useState(false);

  const handleDonate = (item) => {
    const desc = `${item.name} — ISKCON Bhusawal Temple Construction`;
    if (useUpi) {
      handleUpiFallback(item.value, desc);
    } else {
      openRazorpay(item.value, desc);
    }
  };

  const handleCustomDonate = () => {
    const amount = parseFloat(customAmount);
    if (!amount || amount <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }
    const desc = "Voluntary Donation — ISKCON Bhusawal Temple Construction";
    if (useUpi) {
      handleUpiFallback(amount, desc);
    } else {
      openRazorpay(amount, desc);
    }
  };

  const handleCopyBankDetails = () => {
    navigator.clipboard
      .writeText(
        `Bank: AXIS BANK\nAccount No: 037322010400054\nAccount Holder: INTERNATIONAL SOCIETY FOR KRISHNA CONSCIOUSNESS\nIFSC: UTIB0001040\nBranch: BHUSAWAL\nUPI ID: 037322010400054@axisbank`
      )
      .then(() => alert("Bank details copied to clipboard."))
      .catch(() => alert("Could not copy. Please copy manually."));
  };

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Page header */}
      <div className="page-header">
        <p className="page-header-label">New Temple Construction</p>
        <h1 className="page-header-title mb-3">Contribute to the Sacred Mission</h1>
        <p className="text-stone-400 text-sm tracking-widest font-light">
          मंदिर निर्माण में योगदान करें
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Donation brochure */}
        <div className="mb-20">
          <p className="section-label text-center mb-8">Donation Brochure</p>
          <div className="space-y-4">
            <div className="border border-stone-200 shadow-sm bg-white">
              <img src={d3} alt="Donation Brochure Page 1" loading="lazy" className="w-full" />
            </div>
            <div className="border border-stone-200 shadow-sm bg-white">
              <img src={d2} alt="Donation Brochure Page 2" loading="lazy" className="w-full" />
            </div>
          </div>
        </div>

        {/* Payment method toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className="text-sm text-stone-500">Payment via:</span>
          <div className="flex border border-stone-200 bg-white overflow-hidden">
            <button
              onClick={() => setUseUpi(false)}
              className={`px-5 py-2.5 text-sm font-medium transition-colors ${
                !useUpi ? "bg-saffron-500 text-white" : "text-stone-600 hover:bg-stone-50"
              }`}
            >
              Razorpay
            </button>
            <button
              onClick={() => setUseUpi(true)}
              className={`px-5 py-2.5 text-sm font-medium transition-colors ${
                useUpi ? "bg-saffron-500 text-white" : "text-stone-600 hover:bg-stone-50"
              }`}
            >
              UPI App
            </button>
          </div>
        </div>

        {/* Donation tables */}
        <div className="mb-16">
          <p className="section-label text-center mb-3">Donation Options</p>
          <h2 className="font-serif text-3xl text-stone-900 text-center mb-12">
            Choose Your Contribution
          </h2>

          {DONATION_CATEGORIES.map((cat, i) => (
            <div key={i} className="mb-12">
              {/* Category header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px flex-1 bg-stone-200" />
                <h3 className="font-serif text-xl text-stone-700">{cat.category}</h3>
                <div className="h-px flex-1 bg-stone-200" />
              </div>

              <div className="border border-stone-200 overflow-hidden bg-white">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-stone-900 text-stone-200">
                      <th className="text-left px-6 py-4 font-medium tracking-wide">
                        Donation Type
                      </th>
                      <th className="text-left px-6 py-4 font-medium tracking-wide">Amount</th>
                      <th className="text-right px-6 py-4 font-medium tracking-wide">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {cat.items.map((item, j) => (
                      <tr
                        key={j}
                        className="hover:bg-saffron-50 transition-colors"
                      >
                        <td className="px-6 py-4 text-stone-800">{item.name}</td>
                        <td className="px-6 py-4 font-semibold text-saffron-600">
                          &#8377; {item.amount}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button
                            onClick={() => handleDonate(item)}
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
            </div>
          ))}
        </div>

        {/* Custom donation */}
        <div className="bg-white border border-stone-200 p-8 lg:p-10 mb-8">
          <h3 className="font-serif text-2xl text-stone-900 mb-1">Custom Donation</h3>
          <p className="text-stone-500 text-sm mb-8">
            Enter any amount you wish to contribute to the temple construction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 font-medium">
                &#8377;
              </span>
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
              className="bg-saffron-500 hover:bg-saffron-600 text-white text-sm font-medium px-8 py-3.5 tracking-wide transition-colors whitespace-nowrap"
            >
              Donate Now
            </button>
          </div>
        </div>

        {/* Bank details */}
        <div className="bg-stone-900 text-stone-300 p-8 lg:p-10 mb-8">
          <h3 className="font-serif text-xl text-white mb-6">Direct Bank Transfer</h3>
          <div className="grid sm:grid-cols-2 gap-8">
            <dl className="space-y-3 text-sm">
              {[
                { label: "Bank",            value: "Axis Bank" },
                { label: "Account Number",  value: "037322010400054" },
                { label: "Account Holder",  value: "International Society for Krishna Consciousness" },
                { label: "IFSC Code",       value: "UTIB0001040" },
                { label: "Branch",          value: "Bhusawal" },
                { label: "UPI ID",          value: "037322010400054@axisbank" },
              ].map((row) => (
                <div key={row.label} className="flex gap-4">
                  <dt className="text-stone-500 w-36 shrink-0">{row.label}</dt>
                  <dd className="text-stone-200 font-medium">{row.value}</dd>
                </div>
              ))}
            </dl>
            <div className="flex items-end">
              <button
                onClick={handleCopyBankDetails}
                className="w-full border border-stone-700 hover:border-saffron-400 text-stone-400 hover:text-saffron-300 text-sm font-medium py-3.5 px-6 transition-colors tracking-wide"
              >
                Copy Bank Details
              </button>
            </div>
          </div>
        </div>

        {/* Payment note */}
        <div className="bg-saffron-50 border border-saffron-200 p-6 text-sm text-stone-600 leading-relaxed mb-10">
          <strong className="text-stone-800">How to donate via Razorpay:</strong> Click any
          &quot;Donate&quot; button — a secure payment window will open. You can pay via UPI,
          debit/credit card, or net banking. Payments go directly to the ISKCON Bhusawal temple
          account and are 80G tax-deductible.
        </div>

        {/* Contact */}
        <div className="text-center pt-8 border-t border-stone-200">
          <p className="section-label mb-4">Contact Us</p>
          <p className="text-stone-600 text-sm mb-1">
            9011295877 &middot; 7767037980
          </p>
          <p className="text-stone-600 text-sm">infoiskcon.bhusawal@gmail.com</p>
        </div>

        <p className="text-center mt-12 text-stone-400 text-sm tracking-widest font-light">
          Hare Krishna Hare Krishna &middot; Krishna Krishna Hare Hare
          <br />
          Hare Rama Hare Rama &middot; Rama Rama Hare Hare
        </p>
      </div>
    </div>
  );
}

export default Donation;
