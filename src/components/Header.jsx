import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/iskcon.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef();

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (path) =>
    location.pathname === path
      ? "text-white font-semibold"
      : "text-[#3e2a14] hover:text-white transition-colors duration-300";

  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-gradient-to-r from-[#d1a664] to-[#c2935a] shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logo}
                alt="ISKCON Logo"
                className="h-10 w-auto hover:scale-105 transition-transform duration-300"
              />
              <span className="text-lg md:text-xl font-serif font-bold text-white">
                ISKCON Bhusawal
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-md text-white hover:bg-white/20 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-8 items-center">
              <Link to="/" className={isActive("/")}>
                Home
              </Link>

              {/* Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={toggleDropdown}
                  className="text-[#3e2a14] hover:text-white transition-colors duration-300 flex items-center gap-1"
                >
                  About
                  <svg
                    className={`w-4 h-4 transform transition-transform ${isDropdownOpen ? "rotate-180" : ""
                      }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <ul className="absolute left-0 mt-2 w-52 bg-white rounded-md shadow-lg overflow-hidden">
                    <li>
                      <Link
                        to="/iskcon-bhusawal"
                        className="block px-4 py-2 text-[#3e2a14] hover:bg-[#f5e6c5]"
                      >
                        ISKCON Bhusawal
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/iskcon-society"
                        className="block px-4 py-2 text-[#3e2a14] hover:bg-[#f5e6c5]"
                      >
                        ISKCON Society
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/srila-prabhupada"
                        className="block px-4 py-2 text-[#3e2a14] hover:bg-[#f5e6c5]"
                      >
                        Srila Prabhupada
                      </Link>
                    </li>
                  </ul>
                )}
              </div>

              <Link to="/darshan" className={isActive("/darshan")}>
                Darshan
              </Link>
              <Link
                to="/weekly-programs"
                className={isActive("/weekly-programs")}
              >
                Weekly Programs
              </Link>
              {/* <Link to="/activities" className={isActive("/activities")}>
                Activities
              </Link> */}
              <Link to="/contact" className={isActive("/contact")}>
                Contact
              </Link>
              <div className="bg-[#d1a664] p-2 rounded-lg"><Link to="/donation" className={isActive("/contact")}>
                Donation
              </Link>
              </div>

            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-[#d1a664] rounded-lg shadow-md py-4 px-3 space-y-2 animate-fadeIn">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 ${isActive("/")}`}
              >
                Home
              </Link>

              {/* Mobile Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="block w-full text-left py-2 text-[#3e2a14] font-medium"
                >
                  About
                </button>
                {isDropdownOpen && (
                  <div className="pl-4 space-y-1">
                    <Link
                      to="/iskcon-bhusawal"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-1 text-[#3e2a14] hover:text-white"
                    >
                      ISKCON Bhusawal
                    </Link>
                    <Link
                      to="/iskcon-society"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-1 text-[#3e2a14] hover:text-white"
                    >
                      ISKCON Society
                    </Link>
                    <Link
                      to="/srila-prabhupada"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-1 text-[#3e2a14] hover:text-white"
                    >
                      Srila Prabhupada
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/darshan"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 ${isActive("/darshan")}`}
              >
                Darshan
              </Link>
              <Link
                to="/weekly-programs"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 ${isActive("/weekly-programs")}`}
              >
                Weekly Programs
              </Link>
              {/* <Link
                to="/activities"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 ${isActive("/activities")}`}
              >
                Activities
              </Link> */}
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 ${isActive("/contact")}`}
              >
                Contact
              </Link>

              <Link to="/donation"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 ${isActive("/donation")}`}
              >
                Donation
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
