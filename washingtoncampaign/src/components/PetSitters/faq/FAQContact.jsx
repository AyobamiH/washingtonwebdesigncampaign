import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FAQContact = () => {
  return (
    <section className="py-10 xs:py-12 sm:py-16 min-h-[calc(100vh-64px)] bg-yellow-50"> 
      <div className="w-full max-w-7xl mx-auto px-4 xs:px-6 sm:px-8">
        <motion.h2
          className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 text-center mb-6 xs:mb-8 sm:mb-12"
          style={{
            fontSize: 'clamp(1.5rem, 3vw + 1rem, 3.5rem)' // Fluid scaling font size
          }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Still have questions?
        </motion.h2>

        {/* Contact Information Section */}
        <motion.p
          className="leading-tight text-sm xs:text-base sm:text-lg md:text-xl text-gray-700 text-center max-w-2xl mx-auto mb-8 xs:mb-10 sm:mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Here to help! Please reach out through email or phone:
        </motion.p>

        {/* Contact Links */}
        <div className="space-y-4 text-center">
          <motion.a
            href="mailto:heryourbarme@live.com"
            className="text-lg xs:text-xl sm:text-2xl text-gray-800 hover:underline block transition duration-300"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            heryourbarme@live.com
          </motion.a>
          <motion.a
            href="tel:+4407402342694"
            className="text-lg xs:text-xl sm:text-2xl text-gray-800 hover:underline block transition duration-300"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            07402342694
          </motion.a>
          <Link to="/contact">
            <motion.button
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-6 rounded-full transition duration-300 mt-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              aria-label="Reach Out"
            >
              Reach Out
            </motion.button>
          </Link>
        </div>

        
      </div>
    </section>
  );
};

export default FAQContact;
