import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../assets/iskcon.png";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/iskcon-bhusawal", label: "About" },
  { to: "/darshan", label: "Darshan" },
  { to: "/weekly-programs", label: "Weekly Programs" },
  { to: "/contact", label: "Contact" },
];

const engageLinks = [
  { to: "/iys", label: "IYS Program" },
  { to: "/spiritual-study-center", label: "Spiritual Study Center" },
  { to: "/nav-mandir-nirman", label: "New Temple Construction" },
  { to: "/content", label: "Videos & Articles" },
  { to: "/donation", label: "Support Us" },
];

const socials = [
  { href: "https://www.facebook.com/Iskconbhusawal.ssrm/", icon: <FaFacebookF size={13} />, label: "Facebook" },
  { href: "https://www.instagram.com/iskcon_bhusawal/", icon: <FaInstagram size={13} />, label: "Instagram" },
  { href: "https://www.youtube.com/@iskconbhusawal", icon: <FaYoutube size={13} />, label: "YouTube" },
];

function Footer() {
  return (
    <footer className="bg-[#2C1208] text-stone-300">
      <div className="h-0.5 bg-saffron-400"></div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/">
              <img
                src={logo}
                alt="ISKCON Bhusawal"
                className="h-10 w-auto mb-5 brightness-0 invert opacity-70"
                loading="lazy"
              />
            </Link>
            <p className="text-sm text-saffron-200 font-medium mb-1">Sri Sri Radha Murlidhar Mandir</p>
            <p className="text-sm text-stone-400 leading-relaxed">
              Near Roop Darshan Photo Studio,<br />
              Bhusawal, Maharashtra 425201
            </p>
            <div className="flex gap-3 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 flex items-center justify-center border border-stone-600 text-stone-400 hover:border-saffron-400 hover:text-saffron-300 transition-colors duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h5 className="text-xs font-semibold tracking-[0.15em] uppercase text-saffron-300 mb-5">
              Quick Links
            </h5>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-stone-300 hover:text-saffron-300 transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Engage */}
          <div>
            <h5 className="text-xs font-semibold tracking-[0.15em] uppercase text-saffron-300 mb-5">
              Engage
            </h5>
            <ul className="space-y-3">
              {engageLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-stone-300 hover:text-saffron-300 transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-xs font-semibold tracking-[0.15em] uppercase text-saffron-300 mb-5">
              Contact
            </h5>
            <ul className="space-y-3 text-sm text-stone-500">
              <li>
                <span className="block text-stone-400 text-xs mb-0.5 font-medium">Phone</span>
                9011295877 &middot; 7767037980
              </li>
              <li>
                <span className="block text-stone-400 text-xs mb-0.5 font-medium">Email</span>
                infoiskcon.bhusawal@gmail.com
              </li>
              <li className="pt-3">
                <Link
                  to="/donation"
                  className="inline-block bg-saffron-500 hover:bg-saffron-600 text-white text-xs font-medium px-5 py-2.5 tracking-widest uppercase transition-colors duration-200"
                >
                  Donate Now
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-stone-700/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-stone-400 tracking-widest">
            Hare Krishna &middot; Hare Krishna &middot; Krishna Krishna &middot; Hare Hare
          </p>
          <p className="text-xs text-stone-600">
            &copy; {new Date().getFullYear()} ISKCON Bhusawal. All rights reserved.
            &nbsp;&middot;&nbsp;
            <Link to="/privacy-policy" className="hover:text-stone-400 transition-colors">Privacy</Link>
            &nbsp;&middot;&nbsp;
            <Link to="/terms-n-conditions" className="hover:text-stone-400 transition-colors">Terms</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
