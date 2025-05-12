import React from "react";
import img from "../assets/iskcon.png";

function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-sm">
          {/* Logo & Address */}
          <div className="col-span-full lg:col-span-2">
            <a href="#" className="flex justify-center lg:justify-start">
              <img src={img} alt="ISKCON Bhusawal" className="w-36" />
            </a>
            <p className="mt-4 text-gray-400 text-center lg:text-left">
              Sri Sri Radha Murlidhar Mandir <br />
              Near Roop Darshan Photo Studio, Bhusawal, Maharashtra 425201
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">About</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">Darshan</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Activities</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">Weekly Program</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">IYS Program</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">Jagruti Program</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">Pilgrimage Tour</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">other Pages</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">Donate us</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">Daily Drashan</a>
              </li>
              
            </ul>
          </div>
        </div>

        {/* Divider & Social Media */}
        <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <span className="text-gray-400 text-sm">
            © 2025 <a href="https://pagedone.io/" className="hover:text-white">ISKCON Bhusawal</a>. All rights reserved.
          </span>

          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="w-9 h-9 flex items-center justify-center bg-gray-800 rounded-full hover:bg-indigo-600">
              <i className="fab fa-facebook-f text-white"></i>
            </a>
            <a href="#" className="w-9 h-9 flex items-center justify-center bg-gray-800 rounded-full hover:bg-indigo-600">
              <i className="fab fa-twitter text-white"></i>
            </a>
            <a href="#" className="w-9 h-9 flex items-center justify-center bg-gray-800 rounded-full hover:bg-indigo-600">
              <i className="fab fa-instagram text-white"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
