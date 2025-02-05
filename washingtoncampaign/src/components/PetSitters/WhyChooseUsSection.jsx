// import React, { useEffect } from "react"; 
// import { motion } from "framer-motion";
// import Lottie from "lottie-react";
// import { Link } from "react-router-dom";
// import { trackEvent, trackPageView } from "../../../utils/analytics"; // Import analytics utilities
// import specializedAnimation from "./animations/websitesDesign.json";
// import service from "./animations/service.json";
// import connection from "./animations/connection.json";
// import location from "./animations/location.json";
// import trustAnimation from "./animations/trustanimation.json";
// import grow from "./animations/grow.json";
 
// const sections = [
//   {
//     id: 1,
//     icon: specializedAnimation,
//     headline: "A Website That Get Your Service Noticed",
//     body: "Forget generic templates! Your pet care business deserves a website as unique as the services you offer. I understand the needs of local pet professionals, and I design websites that...",
//     points: [
//       { subtext: "Attract pet owners in northampton:", text: " Optimised with local keywords like 'dog walker Northampton,' 'pet sitter Northampton,' 'dog grooming Northampton,' and more to ensure you're found by clients in your area." },
//       { subtext: "Streamline your business:", text: "Integrate user-friendly booking systems that make it easy for Northampton pet owners to schedule your services online." },
//       { subtext: "Build trust with local clients:", text: "Feature testimonials from happy pet owners in Northampton to build credibility and showcase your expertise." },
//     ],
//   },
//   {
//     id: 2,
//     icon: service,
//     headline: "Showcasing Your Pet Care Service",
//     body: "Give Northampton pet owners peace of mind with a website that prioritises their furry friends. I design websites with...",
//     points: [
//       { subtext: "Dedicated pet profile sections:", text: "Allow clients to easily upload their pet's care preferences, medical details, and emergency contacts, ensuring you have all the information you need to provide top-notch care." },
//       { subtext: "Photo galleries:", text: "Showcase your love for animals and highlight your experience with adorable photos of happy pets in Northampton." },
//       { subtext: "Service-specific pages:", text: "Clearly outline the services you offer, whether it's dog walking, pet sitting, grooming, or specialised care for different animals." },
//     ],
//   },
//   {
//     id: 3,
//     icon: connection,
//     headline: "Connect with Pet Parents",
//     body: "Capture the hearts of pet parents in Northampton with a website that reflects your passion and compassion. I create websites that...",
//     points: [
//       { subtext: "Evoke an emotional connection:", text: "Feature high-quality imagery of pets and warm, inviting pages that resonate with animal lovers." },
//       { subtext: "Highlight your unique selling points:", text: "Showcase what makes your Northampton pet care business special, whether it's your experience, personalised approach, or commitment to animal welfare." },
//       { subtext: "Build a lasting impression:", text: "Create a positive and memorable online experience that encourages Northampton pet owners to choose your services." },
//     ],
//   },
//   {
//     id: 4,
//     icon: location,
//     headline: "Dominate Pet Care Scene Online",
//     body: "I'll make sure your website ranks high in local search results. My SEO strategies include...",
//     points: [
//       { subtext: "Keyword optimisation:", text: "Targeting top keywords in the pet care business like 'dog walker Northampton,' 'pet sitter Northampton,' 'dog grooming Northampton,' and more to ensure your website appears when potential clients are searching." },
//       { subtext: "Local SEO:", text: "Optimising your Google My Business profile and building local citations to boost your visibility in Northampton." },
//       { subtext: "On-page optimisation:", text: "Crafting compelling website content that's both informative for pet owners and optimised for search engines." },
//     ],
//   },
//   {
//     id: 5,
//     icon: trustAnimation,
//     headline: "Building Trust with Pet Parents",
//     body: "Inspire confidence and showcase your expertise with a website that builds trust from the first click. I'll integrate...",
//     points: [
//       { subtext: "Easy-to-use review systems:", text: "Make it simple for satisfied Northampton pet owners to share their positive experiences and build social proof." },
//       { subtext: "Certification badges:", text: "Proudly display your qualifications and certifications to demonstrate your professionalism and commitment to pet care." },
//       { subtext: "Safety protocols:", text: "Highlight your safety measures and procedures to reassure Northampton pet owners that their furry friends are in safe hands." },
//     ],
//   },
//   {
//     id: 6,
//     icon: grow,
//     headline: "Grow Your Pet Care Business with Ease",
//     body: "Your website should grow with your business. I provide..",
//     points: [
//       { subtext: "Scalable website designs:", text: "Flexible layouts and features that can adapt to your evolving needs as your pet care business expands throughout Northampton." },
//       { subtext: "Appointment management tools:", text: "Streamline your bookings and client communication with integrated scheduling and messaging features." },
//       { subtext: "Client databases:", text: "Keep track of your clients and their pets with organised profiles and easy-to-access information." },
//     ],
//   },
// ];

// const WhyChooseUsSection = () => {
//   ;

//   const handleCardView = (headline) => {
//     // Track when a specific card is viewed
//     trackEvent('Why Choose Us Section', 'Card Viewed', headline);
//   };

//   const handleCTAButtonClick = () => {
//     // Track CTA button clicks
//     trackEvent('Why Choose Us Section', 'CTA Button Click', 'Help Me Choose Today!');
//   };

//   return (
//     <>
//       <section className="py-10 xs:py-12 sm:py-16 min-h-[calc(100vh-64px)] bg-yellow-50">
//         <div className="w-full max-w-7xl mx-auto px-4 xs:px-6 sm:px-8">
//           {/* Title Section */}
//           <motion.h2
//             className="max-w-5xl mx-auto xs:text-4xl sm:text-5xl md:text-6xl font-bold p-4 text-gray-800 leading-relaxed"
//             style={{
//               fontSize: 'clamp(1.5rem, 3vw + 1rem, 3.5rem)', // Fluid scaling font size
//             }}
//             initial={{ opacity: 0, y: -20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//           >
//             Why You Should Choose My Service
//           </motion.h2>
//              <motion.p 
            
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 viewport={{ once: true }}
//                 className="text-base xs:text-sm text-center sm:text-lg  md:text-xl text-gray-900 m-2 p-8">
//                 Discover why pet care professionals in Northampton choose Tail Wagging Web Design Factory for their website needs. Being a local, I get what it takes to build a thriving pet care business in our community.  From dog walkers in Abington Park and pet sitters offering overnight dog boarding, vet on Billing road and doggy day care on Newport Pagnell road – my SEO-optimized websites are designed to attract pet owners, build trust, showcase your services, and improve your online presence. <br/><span className=" text-yellow-800 scale-70 hover:scale-105 p-8 mt-6 font-semibold">Get result in 120 days or its on me.</span> 
//               </motion.p>

    

//           {/* Cards Grid */}
//           <div className="grid grid-cols-1 gap-8  md:grid-cols-2 lg:grid-cols-3">
//             {sections.map((section, index) => (
//               <motion.div
//                 key={section.id}
//                 className="flex flex-col justify-between bg-yellow-100 h-full px-6 py-8 shadow-md rounded-lg hover:shadow-lg transition-shadow"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 onViewportEnter={() => handleCardView(section.headline)} // Track card view
//               >
//                 {/* Icon Section */}
//                 <div className="w-full h-40 mx-auto mb-6 flex items-center justify-center">
//                   <Lottie animationData={section.icon} loop={true} className="w-full h-full object-contain" />
//                 </div>

//                 {/* Headline */}
//                 <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-4 text-center">
//                   {section.headline}
//                 </h3>

//                 {/* Body */}
//                 <p className="text-sm sm:text-base text-left lg:text-lg text-gray-800 mb-6">
//                   {section.body}
//                 </p>

//                 {/* Points */}
//                 <div className="text-sm sm:text-base lg:text-lg text-gray-800 space-y-3 text-left">
//                   {section.points.map((item, idx) => (
//                     <p key={idx} className="text-left">
//                       <strong>{item.subtext}</strong> {item.text}
//                     </p>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Sticky CTA Button */}
//           <div className="sticky bottom-4 w-full flex justify-center mt-12">
//             <Link to='/website-design-questionnaire'>
//               <motion.button
//                 className="bg-yellow-400 mb-12 mt-12 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-6 xs:px-8 sm:py-4 sm:px-10 md:py-5 md:px-12 text-base xs:text-lg sm:text-xl rounded-full transition duration-300"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 aria-label="Help Me Choose Today!"
//                 onClick={handleCTAButtonClick} // Track CTA button click
//               >
//                 Help Me Choose Today!
//               </motion.button>
//             </Link>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default WhyChooseUsSection;
import React, { useEffect } from "react"; 
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { trackEvent, trackPageView } from "../../../utils/analytics"; // Import analytics utilities
import specializedAnimation from "./animations/websitesDesign.json";
import service from "./animations/service.json";
import connection from "./animations/connection.json";
import location from "./animations/location.json";
import trustAnimation from "./animations/trustanimation.json";
import grow from "./animations/grow.json";
 
const sections = [
  {
    id: 1,
    icon: specializedAnimation,
    headline: "Web Designs That Get You Noticed",
    body: "Forget generic templates! Your pet care business deserves a website as unique as the services you offer. I understand the needs of local pet professionals, and I design websites that...",
    points: [
      { subtext: "Attract pet owners in northampton:", text: " Optimised with local keywords like 'dog walker Northampton,' 'pet sitter Northampton,' 'dog grooming Northampton,' and more to ensure you're found by clients in your area." },
      { subtext: "Streamline your business:", text: "Integrate user-friendly booking systems that make it easy for Northampton pet owners to schedule your services online." },
      { subtext: "Build trust with local clients:", text: "Feature testimonials from happy pet owners in Northampton to build credibility and showcase your expertise." },
    ],
  },
  {
    id: 2,
    icon: service,
    headline: "Showcasing Your Pet Care Service",
    body: "Give Northampton pet owners peace of mind with a website that prioritises their furry friends. I design websites with...",
    points: [
      { subtext: "Dedicated pet profile sections:", text: "Allow clients to easily upload their pet's care preferences, medical details, and emergency contacts, ensuring you have all the information you need to provide top-notch care." },
      { subtext: "Photo galleries:", text: "Showcase your love for animals and highlight your experience with adorable photos of happy pets in Northampton." },
      { subtext: "Service-specific pages:", text: "Clearly outline the services you offer, whether it's dog walking, pet sitting, grooming, or specialised care for different animals." },
    ],
  },
  {
    id: 3,
    icon: connection,
    headline: "Connect with Pet Parents",
    body: "Capture the hearts of pet parents in Northampton with a website that reflects your passion and compassion. I create websites that...",
    points: [
      { subtext: "Evoke an emotional connection:", text: "Feature high-quality imagery of pets and warm, inviting pages that resonate with animal lovers." },
      { subtext: "Highlight your unique selling points:", text: "Showcase what makes your Northampton pet care business special, whether it's your experience, personalised approach, or commitment to animal welfare." },
      { subtext: "Build a lasting impression:", text: "Create a positive and memorable online experience that encourages Northampton pet owners to choose your services." },
    ],
  },
  {
    id: 4,
    icon: location,
    headline: "Dominate Pet Care Scene Online",
    body: "I'll make sure your website ranks high in local search results. My SEO strategies include...",
    points: [
      { subtext: "Keyword optimisation:", text: "Targeting top keywords in the pet care business like 'dog walker Northampton,' 'pet sitter Northampton,' 'dog grooming Northampton,' and more to ensure your website appears when potential clients are searching." },
      { subtext: "Local SEO:", text: "Optimising your Google My Business profile and building local citations to boost your visibility in Northampton." },
      { subtext: "On-page optimisation:", text: "Crafting compelling website content that's both informative for pet owners and optimised for search engines." },
    ],
  },
  {
    id: 5,
    icon: trustAnimation,
    headline: "Building Trust with Pet Parents",
    body: "Inspire confidence and showcase your expertise with a website that builds trust from the first click. I'll integrate...",
    points: [
      { subtext: "Easy-to-use review systems:", text: "Make it simple for satisfied Northampton pet owners to share their positive experiences and build social proof." },
      { subtext: "Certification badges:", text: "Proudly display your qualifications and certifications to demonstrate your professionalism and commitment to pet care." },
      { subtext: "Safety protocols:", text: "Highlight your safety measures and procedures to reassure Northampton pet owners that their furry friends are in safe hands." },
    ],
  },
  {
    id: 6,
    icon: grow,
    headline: "Grow Your Business with Ease",
    body: "Your website should grow with your business. I provide..",
    points: [
      { subtext: "Scalable website designs:", text: "Flexible layouts and features that can adapt to your evolving needs as your pet care business expands throughout Northampton." },
      { subtext: "Appointment management tools:", text: "Streamline your bookings and client communication with integrated scheduling and messaging features." },
      { subtext: "Client databases:", text: "Keep track of your clients and their pets with organised profiles and easy-to-access information." },
    ],
  },
];

const WhyChooseUsSection = () => {
  ;

  const handleCardView = (headline) => {
    // Track when a specific card is viewed
    trackEvent('Why Choose Us Section', 'Card Viewed', headline);
  };

  const handleCTAButtonClick = () => {
    // Track CTA button clicks
    trackEvent('Why Choose Us Section', 'CTA Button Click', 'Help Me Choose Today!');
  };

  return (
    <>
      <section className="py-10 sm:py-16 min-h-[calc(100vh-64px)] bg-yellow-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Title */}
        <motion.h2
          className="text-center text-3xl sm:text-5xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Why You Should Choose My Service
        </motion.h2>

        <motion.p
          className="text-center text-lg text-gray-700 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Discover why pet care professionals in Northampton choose Tail Wagging Web Design Factory for their website needs. Being a local, I get what it takes to build a thriving pet care business in our community.  From dog walkers in abington park, pet sitters offering overnight dog boarding, vets on billing road and the doggy day care on newport pagnell road – my SEO-optimized websites are designed to attract pet owners, build trust, showcase your services, and improve your online presence.  <br />
          
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              className="flex flex-col justify-between bg-yellow-100 shadow-lg rounded-lg p-6 h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onViewportEnter={() => handleCardView(section.headline)}
            >
              <div className="flex items-center justify-center h-32 mb-4">
                <Lottie
                  animationData={section.icon}
                  loop
                  className="h-full w-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">
                {section.headline}
              </h3>
              <p className="text-gray-700 text-center line-clamp-3 mb-4">
                {section.body}
              </p>
              <div className="flex-grow"></div>
              <div>
                {section.points.map((item, idx) => (
                  <p key={idx} className="text-sm text-gray-800 mb-2">
                    <strong>{item.subtext}</strong> {item.text}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

       <div className="sticky bottom-4 w-full flex justify-center mt-12">
            <Link to='/website-design-questionnaire'>
              <motion.button
                className="bg-yellow-400 mb-12 mt-12 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-6 xs:px-8 sm:py-4 sm:px-10 md:py-5 md:px-12 text-base xs:text-lg sm:text-xl rounded-full transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Help Me Choose Today!"
                onClick={handleCTAButtonClick} // Track CTA button click
              >
                Help Me Choose Today!
              </motion.button>
            </Link>
          </div>
      </div>
    </section>
    </>
  );
};

export default WhyChooseUsSection;
