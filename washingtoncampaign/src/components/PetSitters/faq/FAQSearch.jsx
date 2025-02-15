


import React, { useState } from "react";
import { motion } from "framer-motion";

const FAQSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSearch} className="mb-8 w-full max-w-7xl mx-auto px-4 xs:px-6 sm:px-8">
      <div className="relative">
        <motion.input
          type="text"
          placeholder="Search FAQs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="text-gray-800 w-full px-4 py-3 xs:py-4 sm:py-5 mt-4 border border-yellow-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500 text-base xs:text-lg sm:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          aria-label="Search FAQs"
        />
        <motion.button
          type="submit"
      
          className="absolute right-2  mt-2 top-1/2 transform -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-4 py-2 xs:py-3 rounded-full transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Search FAQs"
        >
          Search
        </motion.button>
      </div>
    </form>
  );
};

export default FAQSearch;

