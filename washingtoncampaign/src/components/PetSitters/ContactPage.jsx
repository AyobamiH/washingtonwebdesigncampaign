import React from "react";
import {motion} from "framer-motion"

import NorthamptonMap from "./NorthamptonMap"; 
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"; // Social media icons
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ContactPage = () => {
  return (
    <> 
      <Helmet>
    <title>Contact Tail Wagging Web Design | Northampton</title>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/images/Tailwaggingwebdesignlogo.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    {/* */}
    <meta
      name="description"
      content="Contact Tail Wagging Web Design in Northampton for a free quote on pet care website design and SEO services. Websites for dog walkers, vets, groomers & more!"
    />

    {/* */}
    <meta
      name="keywords"
      content="dog walkers in Northampton, dog sitters near me in Northampton, best pet sitters in Northampton, affordable dog walking services Northampton, reliable pet sitting services in Northampton, dog groomers specializing in in Northampton, pet groomers with experience in in Northampton, dog boarding kennels with outdoor play areas in Northampton, pet boarding facilities for in Northampton, dog day care with in Northampton, pet taxi service to in Northampton"
    />

    {/* */}
    <meta name="author" content="Tail Wagging Web Design Factory" />

    {/* */}
    <meta property="og:title" content="Contact Tail Wagging Web Design | Northampton" />
    <meta
      property="og:description"
      content="Get in touch with Tail Wagging Web Design for expert web design and SEO for your pet care business in Northampton."
    />
    <meta property="og:image" content="https://www.tailwaggingwebdesign.com/images/Tailwaggingwebdesignlogo.png" />
    <meta property="og:url" content="https://www.tailwaggingwebdesign.com/contact" />
    <meta property="og:type" content="website" />

    {/* */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Contact Tail Wagging Web Design | Northampton" />
    <meta
      name="twitter:description"
      content="Northampton pet care businesses, contact us today for a website that gets results! Web design and SEO by Tail Wagging Web Design."
    />
    <meta name="twitter:image" content="https://www.tailwaggingwebdesign.com/images/Tailwaggingwebdesign.png" />
    <meta name="twitter:site" content="@woeinvests" />

    {/* */}
    <link rel="canonical" href="https://www.tailwaggingwebdesign.com/contact" />

    {/* */}
    <meta name="robots" content="index, follow" />

    {/* */}
    <meta name="theme-color" content="#ffffff" />

    {/* */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Us",
        "url": "https://www.tailwaggingwebdesign.com/contact",
        "description": "Contact Tail Wagging Web Design Factory for web design and SEO services in Northampton. Helping pet care professionals grow online.",
        "mainEntity": {
          "@type": "Organization",
          "name": "Tail Wagging Web Design Factory",
          "logo": "https://www.tailwaggingwebdesign.com/images/Tailwaggingwebdesignlogo.png",
          "email": "heryourbarme@live.com",
          "telephone": "+44 07402342694",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Turners Gardens",
            "addressLocality": "Northampton",
            "addressRegion": "Northamptonshire",
            "postalCode": "NN4 6LZ",
            "addressCountry": "UK"
          },
          "openingHours": [
            "Mo-Fr 09:00-15:00",
            "Sa Closed",
            "Su Closed"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+44 07402342694",
            "contactType": "Customer Service",
            "availableLanguage": ["English"]
          }
        }
      })}
    </script>
      </Helmet>

    <div className="bg-yellow-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        {/* Header Section */}
        <header className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Let's Chat!</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question about our web design services for pet care businesses in Northampton? We're happy to help! Send us a message, and we'll get back to you soon.
          </p>
        </header>

        {/* Top Section with Contact Form and Direct Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="p-6 bg-yellow-100 rounded-lg shadow">
            <h3 className="text-2xl font-bold text-yellow-700 mb-4">Leave A Message</h3>
            <form className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label htmlFor="email" className="block text-lg font-medium text-yellow-700">Email</label>
                  <input type="email" id="email" placeholder="Your Email" className="mt-2 block w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-opacity-50 focus:ring-orange-500" />
                </div>
                <div className="flex-1">
                  <label htmlFor="phone" className="block text-lg font-medium text-yellow-700">Phone</label>
                  <input type="tel" id="phone" placeholder="Your Phone" className="mt-2 block w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-opacity-50 focus:ring-orange-500" />
                </div>
              </div>

              <div>
                <label htmlFor="name" className="block text-lg font-medium text-yellow-700">Name</label>
                <input type="text" id="name" placeholder="Your Full Name" className="mt-2 block w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-opacity-50 focus:ring-orange-500" />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-medium text-yellow-700">Message</label>
                <textarea id="message" rows="4" placeholder="How can I assist you?" className="mt-2 block w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-opacity-50 focus:ring-orange-500"></textarea>
              </div>
              <Link to="/send-message" className="block mt-4">
                <motion.button
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 xs:py-3 xs:px-6 sm:py-3 sm:px-8 text-sm xs:text-base sm:text-lg rounded-full transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Send Message"
                >
                 Send Message
                </motion.button>
              </Link>
            </form>
          </div>

          {/* Contact Details */}
          <div className="p-6 bg-yellow-400 rounded-lg shadow space-y-8">
            <h3 className="text-2xl font-bold text-gray-900">Direct Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-bg-yellow-200 rounded-full flex items-center justify-center text-gray-800 text-lg font-bold">
                  📞
                </div>
                <p className="text-lg text-gray-700">(+44) 07402342694</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center text-gray-800 text-lg font-bold">
                  📧
                </div>
                <p className="text-lg text-gray-700">heryourbarme@live.com</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-800 text-lg font-bold">
                  📍
                </div>
                <p className="text-lg text-gray-700">Turners Gardens, Northampton.</p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-gray-900">Business Hours</h4>
              <p className="text-gray-700">Mon - Fri: 9am - 3pm</p>
              <p className="text-gray-700">Sat: Closed(text and emails Only)</p>
              <p className="text-gray-700">Sun: Closed (text and emails Only)</p>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-6 mt-6">
              <a href="https://facebook.com" className="text-gray-700 hover:text-gray-900">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com" className="text-gray-700 hover:text-gray-900">
                <FaInstagram size={24} />
              </a>
              <a href="https://twitter.com" className="text-gray-700 hover:text-gray-900">
                <FaTwitter size={24} />
              </a>
              <a href="https://linkedin.com" className="text-gray-700 hover:text-gray-900">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-12 bg-yellow-100 p-6 rounded-lg shadow text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">What Our Clients Say</h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            "Thanks to the excellent service, my website now attracts many more local customers. The booking system has saved me hours of admin work!"
            - Sarah, Pet Care Professional
          </p>
        </div>


        {/* Map Section */}
        <div className="mt-12">
          <NorthamptonMap />
        </div>

        {/* Accessibility Statement */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            We are committed to ensuring that our website is accessible to everyone, including individuals with disabilities. If you experience any issues, please don't hesitate to contact us for assistance.
          </p>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center bg-yellow-400">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
          <p className="text-lg text-gray-700 mb-6">Contact us today to discuss how we can help your pet care business thrive online!</p>
          <Link to="/contact">
            
                <motion.button
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 xs:py-3 xs:px-6 sm:py-3 sm:px-8 text-sm xs:text-base sm:text-lg rounded-full transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label=" Contact Us"
                >
                 Contact Us
                </motion.button>
              
          </Link>
        </div>

        
      </div>
    </div>
  </>
  );
};

export default ContactPage;
