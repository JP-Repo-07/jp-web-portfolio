import React, { useState } from 'react';
import logo from '../assets/logo.png'

export const Navbar: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-blue-600"><a href="#home"><img src={logo} alt="logo" className="h-8 w-auto" /></a></div>
          <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <li><a href="#home" className="hover:text-blue-500 active:text-blue-600">Home</a></li>
            <li><a href="#about" className="hover:text-blue-500 active:text-blue-600">About</a></li>
            <li><a href="#projects" className="hover:text-blue-500 active:text-blue-600">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-500 active:text-blue-600">Contact</a></li>
          </ul>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-50 bg-white p2 rounded">
            <div className="space-y-1">
              <span className={`block h-0.5 w-6 bg-black transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1.5 bg-blue-500' : ''}`} />
              <span className={`block h-0.5 w-6 bg-black transition-opacity duration-300 ${isOpen ? 'opacity-0 ' : ''}`} />
              <span className={`block h-0.5 w-6 bg-black transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5 bg-blue-500' : ''}`} />
            </div>
          </button>
          <div className={`flex flex-col gap-4 p-4 absolute top-full right-0 w-full bg-white shadow-md 
            transform transition-all duration-300 ease-in-out md:hidden
            ${isOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-6 opacity-0 invisible'}`}>
            <a href="#home" onClick={() => setIsOpen(false)} className="text-black hover:text-blue-500 active:text-blue-600">Home</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="text-black hover:text-blue-500 active:text-blue-600">About</a>
            <a href="#projects" onClick={() => setIsOpen(false)} className="text-black hover:text-blue-500 active:text-blue-600">Projects</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-black hover:text-blue-500 active:text-blue-600">Contact</a>
          </div>
        </div>
      </div>
    </nav >
  );
};
