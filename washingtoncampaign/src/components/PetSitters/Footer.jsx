import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="bg-yellow-700 text-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8">
        {/* Logo Section */}
        <div className="flex justify-center mb-8">
          <img
            src="/images/Tailwaggingwebdesignlogo.png"
            alt="Tail-Wagging Web Design Logo"
            className="h-16 xs:h-20 sm:h-24 w-auto lazyload"
            loading="lazy"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg xs:text-xl sm:text-2xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="hover:text-yellow-300 transition duration-300"
                  aria-label="Navigate to Home"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="hover:text-yellow-300 transition duration-300"
                  aria-label="Navigate to Portfolio"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-yellow-300 transition duration-300"
                  aria-label="Navigate to Services"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-yellow-300 transition duration-300"
                  aria-label="Navigate to Contact"
                >
                  Contact
                </Link>                  
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-yellow-300 transition duration-300"
                  aria-label="Navigate to Blog"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg xs:text-xl sm:text-2xl font-semibold mb-4">Contact Info</h3>
            <p className="text-sm xs:text-base sm:text-lg">Phone: 07402342694</p>
            <p className="text-sm xs:text-base sm:text-lg">Email: heryourbarme@live.com</p>
            <p className="text-sm xs:text-base sm:text-lg">Address: Wootton Northampton, Northamptonshire</p>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg xs:text-xl sm:text-2xl font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <motion.a
                href="https://www.facebook.com/friendlylocaldeveloper"
                whileHover={{ scale: 1.2 }}
                className="text-2xl text-yellow-100 hover:text-yellow-300"
                aria-label="Follow us on Facebook"
              >
                <FaFacebook />
              </motion.a>
              
              <motion.a
                href="https://www.instagram.com/friendlylocaldeveloper"
                whileHover={{ scale: 1.2 }}
                className="text-2xl text-yellow-100 hover:text-yellow-300"
                aria-label="Follow us on Instagram"
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/john-haastrup/"
                whileHover={{ scale: 1.2 }}
                className="text-2xl text-yellow-100 hover:text-yellow-300"
                aria-label="Follow us on LinkedIn"
              >
                <FaLinkedin />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Footer Bottom with Dynamic Year */}
        <div className="mt-8 pt-8 border-t border-yellow-600 text-center">
          <p className="text-sm xs:text-base sm:text-lg">&copy; {currentYear} Tail Wagging Web Design Factory for Pet Care Professionals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
