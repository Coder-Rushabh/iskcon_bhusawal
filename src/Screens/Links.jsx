import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaFacebookF, FaYoutube, FaGlobe } from "react-icons/fa";
import { usePageMeta } from "../hooks/usePageMeta";
import logo from "../assets/iskcon-logo.png";

const LINKS = [
  {
    label: "Nectar Of Sri Sri Radha Murlidharji",
    href: "https://chat.whatsapp.com/BRfH7w9xx2oHItZx8Zgr9e",
    icon: <FaWhatsapp size={20} />,
    iconBg: "bg-[#25D366]",
  },
  {
    label: "IYS Boys Group",
    href: "https://chat.whatsapp.com/BXcnvH0VqKdDQFKHu7mkrn",
    icon: <FaWhatsapp size={20} />,
    iconBg: "bg-[#25D366]",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/iskcon_bhusawal/",
    icon: <FaInstagram size={20} />,
    iconBg: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/Iskconbhusawal.ssrm/",
    icon: <FaFacebookF size={18} />,
    iconBg: "bg-[#1877F2]",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCJagYE271S8A54O8vRQlOug",
    icon: <FaYoutube size={20} />,
    iconBg: "bg-[#FF0000]",
  },
];

function Links() {
  usePageMeta({
    title: "Our Links",
    description: "All ISKCON Bhusawal social media and contact links in one place — WhatsApp, Instagram, Facebook and YouTube.",
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-stone-50 to-stone-100 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-sm text-center">

        <div className="w-24 h-24 mx-auto rounded-full bg-white shadow-md flex items-center justify-center p-3 mb-5">
          <img src={logo} alt="ISKCON Bhusawal" className="w-full h-full object-contain" />
        </div>

        <h1 className="font-serif text-2xl font-bold text-stone-900 mb-2">@ISKCON_BHUSAWAL</h1>
        <p className="text-stone-500 text-sm leading-relaxed mb-8">
          ISKCON Bhusawal &mdash; Spiritual and Educational Place in Bhusawal.
        </p>

        <p className="text-stone-700 font-semibold text-sm mb-4">Get In Touch with Us</p>

        <div className="space-y-3">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white border border-stone-200 rounded-2xl shadow-sm hover:shadow-md hover:border-saffron-300 transition-all duration-200 px-4 py-3.5"
            >
              <span className={`shrink-0 w-9 h-9 rounded-lg text-white flex items-center justify-center ${l.iconBg}`}>
                {l.icon}
              </span>
              <span className="flex-1 text-stone-800 font-medium text-sm text-center">{l.label}</span>
              <span className="w-9" aria-hidden="true" />
            </a>
          ))}
        </div>

        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-white text-sm font-medium px-6 py-3 rounded-full tracking-wide transition-colors duration-200"
        >
          <FaGlobe size={14} /> Visit Our Website
        </Link>

        <p className="text-stone-400 text-xs mt-10 tracking-widest">
          Hare Krishna Hare Krishna &middot; Krishna Krishna Hare Hare
          <br />
          Hare Rama Hare Rama &middot; Rama Rama Hare Hare
        </p>
      </div>
    </div>
  );
}

export default Links;
