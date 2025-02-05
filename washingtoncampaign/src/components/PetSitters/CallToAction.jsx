import React, { useEffect } from "react"; 
import Lottie from "lottie-react"; 
import websiteRevamp from "./animations/websitesDesign.json"; 
import { motion } from "framer-motion"; 
import { Link } from "react-router-dom"; 
import { trackEvent } from "../../../utils/analytics"; // Import analytics utilities

const CallToAction = () => {
  useEffect(() => {
    // Track when the component is rendered
    trackEvent("Call To Action", "View", "Section Rendered");
  }, []);

  const handleAnimationView = () => {
    // Track when the Lottie animation is visible
    trackEvent("Call To Action", "View", "Animation Visible");
  };

  const handleCTAButtonClick = () => {
    // Track when the CTA button is clicked
    trackEvent("Call To Action", "CTA Click", "Help Me Choose Today!");
  };

  return (
    <section className="bg-yellow-50 py-12 px-4 xs:py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2 className="max-w-5xl mx-auto xs:text-4xl sm:text-5xl md:text-6xl font-bold p-4 text-gray-800 leading-relaxed ">
          Need Help Deciding the Design for Your Website?
        </h2>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Lottie Animation */}
          <motion.div
            className="w-full h-64 md:h-72 lg:h-80 xl:h-96 flex items-center justify-center bg-yellow-100 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onViewportEnter={handleAnimationView} // Track animation visibility
          >
            <Lottie
              animationData={websiteRevamp}
              loop={true}
              className="h-56 w-auto md:h-64 lg:h-72 xl:h-80"
            />
          </motion.div>

          {/* Right: Call to Action Text and Button */}
          <motion.div
            className="flex flex-col items-center md:items-start md:ml-12 text-center md:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-gray-800 text-lg sm:text-xl md:text-2xl mb-10">
              Answer a few simple questions, and I’ll recommend a design that suits your specific needs.
            </p>

            <Link to="/website-design-questionnaire" className="block mt-4">
              <motion.button
                className="bg-yellow-400 mb-12 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-6 xs:px-8 sm:py-4 sm:px-10 md:py-5 md:px-12 text-base xs:text-lg sm:text-xl rounded-full transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Help Me Choose Today!"
                onClick={handleCTAButtonClick} // Track button click
              >
                Help Me Choose Today!
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
