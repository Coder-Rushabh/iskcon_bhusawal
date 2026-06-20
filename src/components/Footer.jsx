import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../assets/iskcon.png";

const socials = [
  { href: "https://www.facebook.com/Iskconbhusawal.ssrm/", icon: <FaFacebookF size={13} />, label: "Facebook" },
  { href: "https://www.instagram.com/iskcon_bhusawal/", icon: <FaInstagram size={13} />, label: "Instagram" },
  { href: "https://www.youtube.com/@iskconbhusawal", icon: <FaYoutube size={13} />, label: "YouTube" },
];

function Footer() {
  const { t } = useTranslation();

  const quickLinks = [
    { to: "/", label: t("footer.link_home") },
    { to: "/iskcon-bhusawal", label: t("footer.link_about") },
    { to: "/darshan", label: t("footer.link_darshan") },
    { to: "/weekly-programs", label: t("footer.link_programs") },
    { to: "/contact", label: t("footer.link_contact") },
  ];

  const engageLinks = [
    { to: "/iys", label: t("footer.link_iys") },
    { to: "/spiritual-study-center", label: t("footer.link_study") },
    { to: "/nav-mandir-nirman", label: t("footer.link_temple") },
    { to: "/content", label: t("footer.link_videos") },
    { to: "/donation", label: t("footer.link_support") },
  ];

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
            <p className="text-sm text-stone-400 leading-relaxed">{t("footer.address")}</p>
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
              {t("footer.quick_links")}
            </h5>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-stone-300 hover:text-saffron-300 transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Engage */}
          <div>
            <h5 className="text-xs font-semibold tracking-[0.15em] uppercase text-saffron-300 mb-5">
              {t("footer.engage")}
            </h5>
            <ul className="space-y-3">
              {engageLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-stone-300 hover:text-saffron-300 transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-xs font-semibold tracking-[0.15em] uppercase text-saffron-300 mb-5">
              {t("footer.contact")}
            </h5>
            <ul className="space-y-3 text-sm text-stone-500">
              <li>
                <span className="block text-stone-400 text-xs mb-0.5 font-medium">{t("footer.phone_label")}</span>
                9011295877 &middot; 7767037980
              </li>
              <li>
                <span className="block text-stone-400 text-xs mb-0.5 font-medium">{t("footer.email_label")}</span>
                infoiskcon.bhusawal@gmail.com
              </li>
              <li className="pt-3">
                <Link
                  to="/donation"
                  className="inline-block bg-saffron-500 hover:bg-saffron-600 text-white text-xs font-medium px-5 py-2.5 tracking-widest uppercase transition-colors duration-200"
                >
                  {t("footer.donate_now")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-stone-700/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-stone-400 tracking-widest">{t("footer.mantra")}</p>
          <p className="text-xs text-stone-600">
            &copy; {new Date().getFullYear()} {t("footer.copyright")}
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
