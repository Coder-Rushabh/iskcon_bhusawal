import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/iskcon.png";

const aboutLinks = [
  { to: "/iskcon-bhusawal", label: "ISKCON Bhusawal" },
  { to: "/iskcon-society", label: "ISKCON Society" },
  { to: "/srila-prabhupada", label: "Srila Prabhupada" },
];

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/darshan", label: "Darshan" },
  { to: "/weekly-programs", label: "Programs" },
  { to: "/content", label: "Content" },
  { to: "/nav-mandir-nirman", label: "New Temple" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path) => location.pathname === path;
  const isAboutActive = aboutLinks.some((l) => l.to === location.pathname);

  const linkClass = (active) =>
    `text-sm font-medium tracking-wide transition-colors duration-200 ${
      active ? "text-saffron-500" : "text-stone-700 hover:text-saffron-500"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : "shadow-sm border-b border-stone-100"
      }`}
    >
      {/* Announcement bar */}
      <div className="bg-stone-950 text-stone-300 text-center py-2 text-xs tracking-widest font-light">
        Hare Krishna &nbsp;&mdash;&nbsp; Sri Sri Radha Murlidhar Mandir, Bhusawal
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src={logo} alt="ISKCON Bhusawal logo" className="h-9 w-auto" loading="eager" />
            <div className="hidden sm:block leading-tight">
              <div className="text-sm font-serif font-semibold text-stone-900">ISKCON Bhusawal</div>
              <div className="text-[9px] tracking-[0.18em] text-stone-400 uppercase">Sri Sri Radha Murlidhar</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-7">
            <Link to="/" className={linkClass(isActive("/"))}>Home</Link>

            {/* About dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen((p) => !p)}
                className={`${linkClass(isAboutActive)} flex items-center gap-1`}
              >
                About
                <svg
                  className={`w-3.5 h-3.5 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-52 bg-white border border-stone-100 shadow-lg z-50">
                  {aboutLinks.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="block px-5 py-3 text-sm text-stone-700 hover:text-saffron-500 hover:bg-saffron-50 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(1).map((l) => (
              <Link key={l.to} to={l.to} className={linkClass(isActive(l.to))}>
                {l.label}
              </Link>
            ))}

            <Link
              to="/donation"
              className="bg-saffron-500 hover:bg-saffron-600 text-white text-sm font-medium px-5 py-2.5 tracking-wide transition-colors duration-200"
            >
              Donate
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileMenuOpen((p) => !p)}
            className="lg:hidden p-2 text-stone-600 hover:text-saffron-500 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-stone-100 px-4 py-3">
          {[navLinks[0], ...aboutLinks, ...navLinks.slice(1)].map((item) => (
            <Link
              key={item.to + item.label}
              to={item.to}
              className={`block py-3 text-sm font-medium border-b border-stone-50 ${
                isActive(item.to) ? "text-saffron-500" : "text-stone-700"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/donation"
            className="block mt-4 text-center bg-saffron-500 hover:bg-saffron-600 text-white py-3.5 text-sm font-medium tracking-wide transition-colors"
          >
            Donate to the Temple
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
