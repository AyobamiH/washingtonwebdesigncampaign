

import React, { useState, useEffect } from "react"; 
import "tailwindcss/tailwind.css"; // Ensure Tailwind is set up in your project
import Lottie from "lottie-react";
import websiteDesignAnimation from "./animations/websitesDesign.json";
import websiteRevampAnimation from "./animations/revamp.json";
import websiteOptimizationAnimation from "./animations/weboptimisation.json";
import seoVisibilityAnimation from "./animations/seo.json";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { trackEvent, trackPageView } from "../../../utils/analytics"; // Import analytics utilities

const services = [
  {
    id: 1,
    animation: websiteDesignAnimation,
    title: "Pet-Friendly Website Design",
    description: "Stand out from the competition with a custom-designed website that reflects your unique brand and services. I create stunning, mobile-optimised websites tailored to pet sitters, vets, groomers, and more.",
  },
  {
    id: 2,
    animation: websiteRevampAnimation,
    title: "Website Revamps",
    description: "Impress pet owners with a modern, mobile-friendly website that drives bookings. I'll transform your outdated online presence into a user-friendly experience that showcases your services and builds trust.",
  },
  {
    id: 3,
    animation: websiteOptimizationAnimation,
    title: "Website Optimisation",
    description: "Is your website slow, confusing, or not generating leads? I'll optimise its speed, user experience, and accessibility to ensure pet owners easily find the information they need and book your services.",
  },
  {
    id: 4,
    animation: seoVisibilityAnimation,
    title: "SEO and Local Visibility",
    description: "Get seen by more local pet owners actively searching for your services! I'll boost your website's ranking on Google with proven SEO strategies, ensuring you appear at the top for searches like 'pet sitter Northampton', 'dog walker near me,' and more",
  },
];

const ServicesSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isNextClicked, setIsNextClicked] = useState(false);
  const [isPrevClicked, setIsPrevClicked] = useState(false);

  useEffect(() => {
    // Track when the slider section is viewed
    trackPageView('/services-slider');
  }, []);

  const nextSlide = () => {
    const nextIndex = (currentSlide + 1) % services.length;
    setCurrentSlide(nextIndex);
    setIsPrevClicked(false);
    setIsNextClicked(true);

    // Track next button click
    trackEvent('Services Slider', 'Next Slide', `Slide ${nextIndex + 1}`);
  };

  const prevSlide = () => {
    const prevIndex = (currentSlide - 1 + services.length) % services.length;
    setCurrentSlide(prevIndex);
    setIsNextClicked(false);
    setIsPrevClicked(true);

    // Track previous button click
    trackEvent('Services Slider', 'Previous Slide', `Slide ${prevIndex + 1}`);
  };

  const handleExploreClick = (serviceTitle) => {
    // Track "Explore [Service]" button clicks
    trackEvent('Services Slider', 'Explore Service', serviceTitle);
  };

  const handlePaginationClick = (index) => {
    setCurrentSlide(index);

    // Track pagination dot clicks
    trackEvent('Services Slider', 'Navigate to Slide', `Slide ${index + 1}`);
  };

  return (
    <section id="services" className="bg-yellow-50 pt-8 pb-4">
      <div className=" mx-auto text-center px-4 md:px-6 lg:px-8 mt-12 ">
        <h2 className="max-w-5xl mx-auto xs:text-4xl sm:text-5xl md:text-6xl font-bold p-4 text-gray-800 leading-relaxed ">
          Website Design Services For Northants Pet Care Professionals 
        </h2>
        
        
        
        <p className="text-base xs:text-sm text-center sm:text-lg  md:text-xl text-gray-900 m-2 p-8">
          Explore my professional pet care web design services. I understand the needs of dog walkers in Abington Park — from pet sitters offering dog boarding and doggy day care, and even vets on billing Road. My SEO-optimized websites get your dcisovered by pet parents, boosting your online presence as a top pet care business in Northampton. 
        </p>
      </div>
      <div className="min-h-[calc(100vh-64px)] py-2 mb-4 relative">
        <div className="w-full text-center max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
          {/* Slider Section */}
          <div className="relative w-full lg:w-4/5 overflow-hidden mb-8 lg:mb-0">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {services.map((service) => (
                <div key={service.id} className="min-w-full flex flex-col py-2 items-center">
                  <div className="w-full rounded-lg mx-auto">
                    <Lottie
                      animationData={service.animation}
                      loop={true}
                      className="h-64 md:h-72 lg:h-80 xl:h-96 flex items-center justify-center w-auto"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Text Content Section */}
          <div className="relative w-full lg:w-4/5 overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {services.map((service) => (
                <div key={service.id} className="min-w-full mx-auto flex flex-col items-center bg-yellow-100 px-4 lg:px-8">
                  <div className="w-full h-auto justify-center p-8 rounded-lg">
                    <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                      {service.title}
                    </h3>
                    <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-800 mb-8">
                      {service.description}
                    </p>
                    <Link to="/pet-care-website-design-northampton">
                      <motion.button
                        className="bg-yellow-400 mb-12 mt-12 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-6   md:py-5 md:px-12 text-base xs:text-sm sm:text-lg rounded-full transition duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={`Learn more about ${service.title}`}
                        onClick={() => handleExploreClick(service.title)} // Track button click
                      >
                        Explore {service.title}
                      </motion.button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center w-full absolute bottom-4 lg:bottom-8 transform -translate-y-1/2 justify-between lg:static lg:top-auto lg:transform-none px-4">
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className={`p-3 lg:p-4 text-2xl lg:text-4xl font-bold rounded-full w-[50px] lg:w-[60px] border-2 bg-white shadow-lg transition duration-300 ${
              isPrevClicked
                ? "border-dashed border-gray-800 scale-105 shadow-yellow-400"
                : "border-yellow-100"
            }`}
          >
            &#8249;
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className={`ml-4 p-3 lg:p-4 text-2xl lg:text-4xl font-bold rounded-full w-[50px] lg:w-[60px] border-2 bg-white shadow-lg transition duration-300 ${
              isNextClicked
                ? "border-dashed border-gray-800 scale-105 shadow-yellow-400"
                : "border-yellow-100"
            }`}
          >
            &#8250;
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="hidden lg:flex justify-start w-full max-w-7xl mt-8 ml-20">
          {services.map((_, index) => (
            <button
              key={index}
              aria-label={`Navigate to slide ${index + 1}`}
              className={`h-2 w-full mx-6 ${
                currentSlide === index ? "bg-yellow-700" : "bg-yellow-300"
              }`}
              onClick={() => handlePaginationClick(index)} // Track dot click
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSlider;
