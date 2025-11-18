import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Brand */}
          <div className="flex-shrink-0 text-xl font-bold">
            MyWebsite
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#index" className="hover:text-gray-300">IndexPage</a>
            <a href="https://portfoliosamad1130.netlify.app/" className="hover:text-gray-300">Portfolio</a>
            <a href="https://wa.me/919519770595" className="hover:text-gray-300">Contact</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 px-2 pt-2 pb-4 space-y-1">
          <a href="#index" className="block px-3 py-2 rounded hover:bg-blue-600">IndexPage</a>
          <a href="#portfolio" className="block px-3 py-2 rounded hover:bg-blue-600">Portfolio</a>
          <a href="#contact" className="block px-3 py-2 rounded hover:bg-blue-600">Contact</a>
        </div>
      )}
    </nav>
  );
}
