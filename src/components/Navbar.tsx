import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { FiMail } from 'react-icons/fi';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["home", "about", "skills", "projects"];

  return (
    <nav className="bg-[#F4F6F8] shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-xl font-bold">
            <a href="#home" className='flex items-center gap-4'>
              <img
                src={logo}
                alt="logo"
                className="h-12 w-auto"
              />
              <p className='bg-gray-50 text-[#1E1E2F]'>Portfolio</p>
            </a>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-6 font-medium items-center">
            {navLinks.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className="relative group text-[#1E1E2F] font-semibold transition-all"
                >
                  <span className="group-hover:text-[#A2D2FF] transition-colors">
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </span>
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#A2D2FF] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}

            {/* Contact Me Button */}
            <li>
              <a
                href="#contact"
                className="ml-2 px-4 py-2 flex items-center gap-2 rounded-md bg-[#B2F7EF] text-[#1E1E2F] hover:bg-[#A2D2FF] font-semibold transition"
              >
                <FiMail className="text-lg" />
                Contact Me
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden z-50 bg-white p2 rounded"
          >
            <div className="space-y-1">
              <span
                className={`block h-0.5 w-6 bg-[#1E1E2F] transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1.5 bg-[#A2D2FF]' : ''}`}
              />
              <span
                className={`block h-0.5 w-6 bg-[#1E1E2F] transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`block h-0.5 w-6 bg-[#1E1E2F] transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5 bg-[#A2D2FF]' : ''}`}
              />
            </div>
          </button>

          {/* Mobile Nav */}
        </div>
      </div>

      {/* Mobile Nav Links */}
      <div
        className={`flex flex-col gap-4 p-4 absolute top-16 right-0 w-full bg-white shadow-md 
          transform transition-all duration-300 ease-in-out md:hidden
          ${isOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-6 opacity-0 invisible'}`}
      >
        {[...navLinks, "contact"].map((section) => {
          const isContact = section === "contact";
          return isContact ? (
            <a
              key={section}
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 text-center rounded-md bg-[#B2F7EF] text-[#1E1E2F] hover:bg-[#A2D2FF] font-semibold transition flex items-center justify-center gap-2"
            >
              <FiMail className="text-lg" />
              Contact Me
            </a>
          ) : (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => setIsOpen(false)}
              className="relative group text-[#1E1E2F] font-semibold transition-all"
            >
              <span className="group-hover:text-[#A2D2FF] transition-colors">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#A2D2FF] transition-all duration-300 group-hover:w-full" />
            </a>
          );
        })}
      </div>
    </nav>
  );
};
