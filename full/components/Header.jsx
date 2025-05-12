import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/iskcon.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // Close dropdown if route changes
  useEffect(() => {
    setIsDropdownOpen([
      '/iskcon-bhusawal',
      '/iskcon-society',
      '/srila-prabhupada'
    ].includes(location.pathname));
    setIsMobileMenuOpen(false); // Close menu on route change
  }, [location]);

  const isActive = (path) => location.pathname === path ? 'text-white font-semibold' : 'text-gray-700';

  return (
    <header>
      <nav className="bg-[#d1a664] px-6 py-3 shadow-md">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} className="h-10" alt="ISKCON Logo" />
            <span className="text-xl font-bold text-black">ISKCON Bhusawal</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-black hover:bg-gray-100 rounded-md"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M6 6L14 14M14 6L6 14"
                  clipRule="evenodd"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3 5h14M3 10h14M3 15h14"
                  clipRule="evenodd"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>

          {/* Menu Items */}
          <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:flex lg:items-center w-full lg:w-auto`}>
            <ul className="flex flex-col lg:flex-row lg:space-x-8 mt-4 lg:mt-0">
              <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)} className={`block py-2 ${isActive('/')}`}>Home</Link></li>
              
              {/* Dropdown Menu */}
              <li className="relative">
                <span onClick={toggleDropdown} className="block py-2 cursor-pointer">About</span>
                {isDropdownOpen && (
                  <ul className="absolute z-50 left-0 mt-2 w-48 bg-[#d1a664] rounded-md shadow-lg">
                    <li><Link to="/iskcon-bhusawal" onClick={() => { setIsMobileMenuOpen(false); setIsDropdownOpen(false); }} className="block px-4 py-2 hover:bg-gray-200">ISKCON Bhusawal</Link></li>
                    <li><Link to="/iskcon-society" onClick={() => { setIsMobileMenuOpen(false); setIsDropdownOpen(false); }} className="block px-4 py-2 hover:bg-gray-200">ISKCON Society</Link></li>
                    <li><Link to="/srila-prabhupada" onClick={() => { setIsMobileMenuOpen(false); setIsDropdownOpen(false); }} className="block px-4 py-2 hover:bg-gray-200">Srila Prabhupada</Link></li>
                  </ul>
                )}
              </li>

              <li><Link to="/darshan" onClick={() => setIsMobileMenuOpen(false)} className={`block py-2 text-black ${isActive('/darshan')}`}>Darshan</Link></li>
              <li><Link to="/weekly-programs" onClick={() => setIsMobileMenuOpen(false)} className={`block py-2 ${isActive('/weekly-programs')}`}>Weekly Programs</Link></li>
              <li><Link to="/activities" onClick={() => setIsMobileMenuOpen(false)} className={`block py-2 ${isActive('/activities')}`}>Activities</Link></li>
              <li><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className={`block py-2 ${isActive('/contact')}`}>Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
