

import React, { useState } from "react";
import Logo from "../../../public/images/themed-paw.webm";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-yellow-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <div>
                 <Link to="/">
            <video
              src={Logo}
              autoPlay
              loop
              muted
              className="h-16 w-auto"
              aria-label="Navigate to Home"
            />
          </Link>
              </div> 
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link
              to="/"
              className="hover:border-yellow-400 text-gray-800 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              aria-label="Navigate to Home"
            >
              Home
            </Link>
            <Link
              to="/pet-care-website-design-northampton"
              className="border-transparent hover:border-yellow-400 text-gray-600 hover:text-gray-800 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              aria-label="Navigate to Services"
            >
              Services
            </Link>
            <Link
              to="/pet-care-web-design-portfolio-northampton"
              className="border-transparent hover:border-yellow-400 text-gray-600 hover:text-gray-800 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              aria-label="Navigate to Portfolio"
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className="border-transparent hover:border-yellow-400 text-gray-600 hover:text-gray-800 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              aria-label="Navigate to Contact"
            >
              Contact
            </Link>
            <Link
              to="/blog"
              className="border-transparent hover:border-yellow-400 text-gray-600 hover:text-gray-800 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              aria-label="Navigate to Blog"
            >
              Blog
            </Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="bg-yellow-100 border-yellow-400 text-yellow-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              aria-label="Navigate to Home"
            >
              Home
            </Link>
            <Link
              to="/pet-care-website-design-northampton"
              className="border-transparent text-gray-600 hover:bg-yellow-50 hover:border-yellow-400 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              aria-label="Navigate to Services"
            >
              Services
            </Link>
            <Link
              to="/pet-care-web-design-portfolio-northampton"
              className="border-transparent text-gray-600 hover:bg-yellow-50 hover:border-yellow-400 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              aria-label="Navigate to Portfolio"
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className="border-transparent text-gray-600 hover:bg-yellow-50 hover:border-yellow-400 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              aria-label="Navigate to Contact"
            >
              Contact
            </Link>
            <Link
              to="/blog"
              className="border-transparent hover:border-yellow-400 text-gray-600 hover:text-gray-800 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              aria-label="Navigate to Blog"
            >
              Blog
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
