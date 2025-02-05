
import React from "react";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-16 bg-[#acc178]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-3xl font-extrabold text-white mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Ready to Make Your Pet Care Website Stand Out?
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a
            href="#contact"
            className="inline-block bg-white text-[#52727a] font-bold py-3 px-8 rounded-full text-lg transition duration-300 hover:bg-[#1f2b2e] hover:text-[#acc178]"
          >
            Schedule a Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
