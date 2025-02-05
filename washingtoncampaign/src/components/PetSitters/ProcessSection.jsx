import React, { useState, useEffect, Suspense } from "react"; 
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import call from "./animations/call.json";
import developmentAnimation from "./animations/websitesDesign.json";
import support from "./animations/support.json";
import { InlineWidget } from "react-calendly"; 
import { trackEvent } from "../../../utils/analytics"; // Import analytics utilities
import { Link } from "react-router-dom";

const steps = [
  {
    icon: call,
    title: "Discovery Call",
    description: "A comprehensive discovery call is held to fully understand your goals and the specific needs of your pet care business in Northampton. During this phase, we discuss the services you offer at your pet care business—and ensure that your custom website design aligns with your vision. This process establishes a strong foundation for building trust with potential clients and positioning your business for success in local search results.",
  },
  {
    icon: developmentAnimation,
    title: "Design and Development",
    description: "Your website is custom-designed and developed to reflect the unique qualities of your brand. For pet care professionals in Northampton, this means an intuitive, easy-to-navigate site that showcases warmth, professionalism, and user-centric features. By incorporating SEO-optimized content and responsive design, I will ensure your site reaches more pet owners searching for services like yours, enhancing your visibility and engagement.",
  },
  {
    icon: support,
    title: "Launch and Support",
    description:
      "Once the design is complete, the website is launched smoothly, backed by continuous support. As a leading web designer for pet care professionals in Northampton, I provide ongoing maintenance to ensure your site performs at its best, stays updated, and continues to drive traffic. This step is key to maintaining strong local SEO performance and ensuring long-term success in your online presence.",
  },
];

const ProcessSection = () => { 
  const [showScheduler, setShowScheduler] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    // Set initial state and track layout view
    handleResize();
    trackEvent("Process Section", "View", `Layout: ${isMobileView ? "Mobile" : "Desktop"}`);

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileView]);

  const handleSchedulerOpen = () => {
    setShowScheduler(true);
    trackEvent("Process Section", "CTA Click", "Open Scheduler");
  };
  
  const handleFreeQuoteClick = () => {
    // Track when the "Request A Free Quote" button is clicked
    trackEvent('Hero Section', 'Click', 'Request A Free Quote Button');
  };

  const handleSchedulerClose = () => {
    setShowScheduler(false);
    trackEvent("Process Section", "CTA Click", "Close Scheduler");
  };

  const handleStepView = (stepTitle) => {
    trackEvent("Process Section", "Step View", stepTitle);
  };

  return (
    <>
       <section className="py-10 sm:py-16 min-h-[calc(100vh-64px)] bg-yellow-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Title Section */}
        <motion.h2
          className="text-center text-3xl sm:text-5xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Web Design Process
        </motion.h2>

        <motion.p
          className="text-center text-lg text-gray-700 mb-12 max-w-6xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Crafting a website that truly captures your business starts with understanding your goals and vision. From the initial discovery call to the final launch, I’ll guide you every step of the way.
        </motion.p>

        {/* Steps Grid */}
        <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col justify-between bg-yellow-100 shadow-lg rounded-lg p-6 text-center h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onViewportEnter={() => handleStepView(step.title)}
            >
              <Suspense fallback={<div>Loading...</div>}>
                {/* Icon Section */}
                <div className="flex items-center justify-center h-32 mb-4">
                  <Lottie
                    animationData={step.icon}
                    loop
                    className="w-32 h-32 object-contain"
                  />
                </div>
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {step.title}
                </h3>
                {/* Description */}
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed flex-grow">
                  {step.description}
                </p>
              </Suspense>
            </motion.div>
          ))}
        </div>

        {/* Sticky CTA */}
        <div className="flex flex-col xs:flex-row justify-center items-center flex-wrap gap-4 m-8">
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
      </div>
    </section>
    </>
  );
};

export default ProcessSection;
