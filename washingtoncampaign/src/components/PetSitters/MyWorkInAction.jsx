// import React, { useState, useEffect } from "react";

import React, { useState, useEffect, Suspense, lazy } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";


const portfolioItems = [
  {
    id: 0,
    slug: "pawsome-pet-sitting-website", 
    name: "Pawsome Pet Sitting",
    description: "A vibrant website redesign for a thriving pet sitting service in Northampton. We helped them connect with more pet owners and showcase their services with a user-friendly design.",
    image: "/images/Tailwaggingwebdesigns.png", 
  },
  {
    id: 4,
    slug: "dm-hedges-landscaping-website-northampton", 
    name: "DM Hedges",
    description: "Helping this Northampton landscaping business blossom with a website that attracts local clients. We focused on user experience and local SEO to drive more inquiries.",
    image: "/images/DMHEDGESLandscaping.png",
    url:"https://dmhedges.vercel.app"
  },
  { 
    id: 7,
    slug: "pawfectcare-pet-business-services-website", 
    name: "Pawfect Care",
    description: "PawfectCare needed a website that would drive results for their pet care business clients. We delivered a dynamic design and seamless user experience that led to a surge in sign-ups and engagement. Let us do the same for your Northampton business!",
    image: "/images/pwfectcare.gif",
    url:"https://woeinvests.wixstudio.io/eyewear"
  },
  {
    id: 3,
    slug: "pamelas-pampered-pets-booking-system-website",
    name: "Pamela’s Pampered Pets",
    description: "This project showcases our expertise in creating user-friendly booking systems, an essential tool for busy pet care professionals like you.  See how we helped this pet sitting service streamline their operations and improve customer satisfaction.",
    image: "/images/pamelahome.gif",
    url:"https://www.hellopamela.com"
  }, 
  {
    id: 1,
    slug: "eyewear-ecommerce-platform-ar-try-on", 
    name: "Eyewear E-commerce Platform",
    description: "This project demonstrates our ability to create engaging online shopping experiences. We developed an e-commerce platform with a user-friendly interface, advanced product customization, and an innovative virtual try-on experience.",
    image: "/images/eyewear.gif",
    url:"https://woeinvests.wixstudio.io/eyewear" 
  },
  {
    id: 2,
    slug: "nellacqua-sustainable-swimwear-ecommerce-northampton", 
    name: "Nell'Acqua",
    description: "We helped this eco-conscious swimwear brand launch a stunning e-commerce website that drives sales. We focused on user experience and impactful promotions to achieve a significant sales boost.",
    image: "/images/Nellaaqua.gif",
    url:"https://woeinvests.wixstudio.io/eyewear"
  }, 
  {
    id: 5,
    slug: "snip-barbers-website-washington-dc",
    name: "Snip Barbers",
    description: "We transformed Snip Barbers' online presence with a sleek, user-friendly website and a seamless booking system, resulting in increased appointments and enhanced client engagement.",
    image: "/images/snip.gif",
    url:"https://woeinvests.wixstudio.io/eyewear"
  },
  {
    id: 8,
    slug: "poppy-lily-handcrafted-toys-ecommerce-website", 
    name: "Poppy & Lily",
    description: "Poppy & Lily needed an online store that reflected their brand's charm and provided a seamless shopping experience. We delivered a captivating e-commerce solution with intuitive navigation and beautiful product displays.",
    image: "/images/poppynlilly.gif",
    url:"https://woeinvests.wixstudio.io/poppynlilly"
  },
  {
    id: 9,
    slug: "puffers-ecommerce-website-global-reach", 
    name: "Puffers Winter Shop",
    description: "We created a captivating e-commerce experience for Puffers, with intuitive navigation, dynamic product displays, and a seamless checkout process. We can bring this same expertise to your Northampton business.",
    image: "/images/puffer.gif",
    url:"https://woeinvests.wixstudio.io/puffers"
  },
  {
    id: 10,
    slug: "larissa-coleman-real-estate-website-washington-dc",
    name: "Larissa Coleman Real Estate",
    description: "This project highlights our ability to combine stunning visuals with comprehensive information to create an engaging website experience. We helped Larissa Coleman Real Estate captivate their target audience.",
    image: "/images/larrisa.gif",
    url:"https://woeinvests.wixstudio.io/larissacoleman"
  }
];

const MyWorkInAction = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (

    <>
    
    <section className="bg-yellow-50 py-10 xs:py-12 sm:py-16 min-h-[calc(100vh-64px)]">
  <div className="w-full max-w-7xl mx-auto px-4 xs:px-6 sm:px-8">
    <motion.h2
      className="max-w-5xl text-center mx-auto xs:text-4xl sm:text-5xl md:text-6xl font-bold p-4 text-gray-800 leading-relaxed"
            style={{
              fontSize: 'clamp(1.5rem, 3vw + 1rem, 3.5rem)', // Fluid scaling font size
            }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
    >
      My Work in Action
    </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-base xs:text-sm text-center sm:text-lg  md:text-xl text-gray-800 m-2 p-8">
                Check out examples of how I've helped pet care businesses succeed online. I create websites that are designed to attract clients and get your pet care services dicovered by local pet parents... So if you are a pet care professional in the Northampton and sorroundings, I can help you showcase your services and grow your business online.

      </motion.p>
    
    {/* Portfolio Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {portfolioItems.map((item) => (
        <Suspense fallback={<div>Loading...</div>} key={item.id}>
          <div
            className="w-full relative bg-yellow-100 rounded-lg overflow-hidden shadow-md transition-shadow hover:shadow-lg flex flex-col"
            style={{ height: "100%" }}
            aria-label={`View details for ${item.name}`}
          >
            {/* Image */}
            <div className="h-60 w-full">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow p-6">
              <h3 className="text-lg sm:text-xl md:text-2xl text-gray-800 font-semibold mb-4 text-center">
                {item.name}
              </h3>
              <p className="text-sm sm:text-md md:text-lg text-gray-700 mb-6 text-center space-y-3 flex-grow">
                {item.description}
              </p>

              {/* Button */}
              <div className="mt-auto flex justify-center">
                <Link to={`/portfolio/${item.slug}`}>
                  <motion.button
                    className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 xs:py-3 xs:px-6 sm:py-3 sm:px-8 text-sm xs:text-base sm:text-lg rounded-full transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`Learn more about ${item.name}`}
                  >
                    View Case Study
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </Suspense>
      ))}
    </div>
  </div>
</section>
</>

  );
};


export default MyWorkInAction;





