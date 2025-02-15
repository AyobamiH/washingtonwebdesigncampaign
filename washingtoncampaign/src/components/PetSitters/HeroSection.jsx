import React, { useState, useEffect, Suspense } from "react"; 
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { trackEvent, trackPageView } from "../../../utils/analytics"; // Import tracking utilities
import petAnimation from "./animations/petanimations.json";
import heroBackground from "./animations/hero-background.json";
import { InlineWidget } from "react-calendly"; // Import Calendly widget
 
const HeroSection = () => {
  const [showScheduler, setShowScheduler] = useState(false);

  useEffect(() => {
    // Track when the hero section is viewed
    trackPageView('/');
  }, []);

  const handleSchedulerOpen = () => {
    setShowScheduler(true);
    // Track when the scheduler is opened
    trackEvent('Hero Section', 'Open Scheduler', 'Calendly Scheduler Opened');
  };

  const handleSchedulerClose = () => {
    setShowScheduler(false);
    // Track when the scheduler is closed
    trackEvent('Hero Section', 'Close Scheduler', 'Calendly Scheduler Closed');
  };

  const handleFreeQuoteClick = () => {
    // Track when the "Request A Free Quote" button is clicked
    trackEvent('Hero Section', 'Click', 'Request A Free Quote Button');
  };

  return (
    <>
      <section className="relative min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden bg-yellow-50">
        {/* Hero Background Animation */}
        <div className="absolute inset-0 z-0">
          <Suspense fallback={<div>Loading animation...</div>}>
            <Lottie
              className="w-full h-full object-cover opacity-40"
              animationData={heroBackground}
              loop={true}
            />
          </Suspense>
        </div>

        {/* Text Content */}
        <div className="relative z-10 text-center text-gray-800 max-w-7xl mx-auto px-4">
          {/* Responsive Headline */}
          <motion.h1
            initial={{ opacity: 0, x: 50 }} // Start 50px from the side
            animate={{ opacity: 1, x: 0 }}  // Slide into its original position
            transition={{ duration: 2 }} // Adjust duration as needed
            
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold mb-4 leading-tight xs:leading-tight sm:leading-tight md:leading-snug lg:leading-snug 2xl:leading-normal text-gray-900 p-4">
            {/* Website Design for Pet Sitters in Northampton */} I Create Websites That Attract Pet Parent, Build Trust and Boost Bookings
          </motion.h1>
         
              

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }} // Delay for a sequential effect
          className="text-base xs:text-sm text-center sm:text-lg  md:text-xl text-gray-900 m-2 p-8"
          >
            Tail Wagging Web Design Factory crafts custom, low-code websites for a wide
            range of pet care businesses in Northampton. 
          </motion.p>
    
          {/* Call to Action Buttons */}
          <div className="flex flex-col xs:flex-row justify-center items-center flex-wrap gap-4 m-8">
            <motion.button
              className="bg-yellow-400   hover:bg-yellow-500 text-gray-800 font-bold py-3 px-6 xs:px-8 sm:py-4 sm:px-10 md:py-5 md:px-12 text-base xs:text-lg sm:text-xl rounded-full mb-4 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Get a Free Consultation"
              onClick={handleSchedulerOpen} // Track scheduler open
              initial={{ opacity: 0, y: 50 }} // Start 50px below
              animate={{ opacity: 1, y: 0 }}  // Slide into its original position
              transition={{ duration: 2}} // Adjust duration as needed
            >
              Get A Free Consultation
            </motion.button>


            <Link to="/website-design-questionnaire">
              <motion.button
                className="bg-yellow-400   hover:bg-yellow-500 text-gray-800 font-bold py-3 px-6 xs:px-8 sm:py-4 sm:px-10 md:py-5 md:px-12 text-base xs:text-lg sm:text-xl rounded-full mb-4 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Request A Free No Obligation Quote"
                onClick={handleFreeQuoteClick} // Track "Request A Free Quote"
                initial={{ opacity: 0, x: 50 }} // Start 50px from the side
                animate={{ opacity: 1, x: 0 }}  // Slide into its original position
                transition={{ duration: 2 }} // Adjust duration as needed
              >
                Request A Free Quote
              </motion.button>
            </Link>

            {/* Calendly Modal */}
            {showScheduler && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-full relative">
                  <button
                    onClick={handleSchedulerClose} // Track scheduler close
                    className="text-gray-500 hover:text-gray-800 w-3/5 text-2xl font-bold"
                  >
                    &times;
                  </button>
                  <InlineWidget url="https://calendly.com/ayobami-haastrup/consultation" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Pet Animation in the Bottom-Left */}
        <div className="absolute bottom-0 left-0 w-1/2 xs:w-2/5 sm:w-1/3 md:w-1/4 lg:w-1/6 2xl:w-1/8">
          <Suspense fallback={<div>Loading animation...</div>}>
            <Lottie animationData={petAnimation} loop={true} />
          </Suspense>
        </div>
      </section>
      <section className="bg-yellow-200 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h3
            className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl mb-8 text-gray-900"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Get a Website That Get Your Pet Care Business Discovered, Builds Trust & Increases Bookings within 120 days or we’ll work for free until you do!—Satisfaction Guaranteed!
          </motion.h3>
        </div>
      </section>
      
    </>
  );
};

export default HeroSection;
