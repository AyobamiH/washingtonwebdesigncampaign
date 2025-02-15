
// import React from "react";
// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules"; // Correct path for Pagination
// import { Autoplay } from "swiper/modules";   // Correct path for Autoplay
// import { HashLink as Link } from 'react-router-hash-link';
// import AnimatedButton from './AnimatedButton';
// import "swiper/css";
// import "swiper/css/pagination";


// const testimonials = [
//   {
//     id:3,
   
//     slug: "pamelas-pampered-pets-booking-system-website",
//     quote:
//       "The Tail-Wagging Websites Design Factory transformed my pet sitting website into something truly special.",
//     author: " Pamela Marbett",
//     company: "CEO, Pamela's Pampered Pets",
//     image: "/images/ingrid.png",
//   },
//   {
//     id:4,
//      slug: "dm-hedges-landscaping-website-northampton",
//     quote:  "We've seen a significant increase in web traffic. The design is amazing!",
//     author: "DM Hedges",
//     company: "Founder, DM Hedges Landscaping",
//     image: "/images/DMHEDGESLandscaping.png",
//   },
//   // {
//   //   quote: "Our clients love the new look of our site. Thank you, The Tail Wagging Websites Design Factory!",
//   //   author: "Emily Brown",
//   //   company: "Owner, Kitty Care Cattery",
//   //   image: "/images/parrot.png",
//   // },
// ];

// const TestimonialsSection = () => {
//   return (
   
//           <section className="py-8 sm:py-12 md:py-16  bg-yellow-100">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//               <motion.h2
//                 className="text-center text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-900 mb-8 sm:mb-12"
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 viewport={{ once: true }}
//               >
//                 Client Reviews...
//               </motion.h2>
//               <Swiper
//                 modules={[Pagination, Autoplay]} // Initialize the modules here
//                 spaceBetween={20}
//                 slidesPerView={1}
//                 autoplay={{ delay: 5000 }}
//                 pagination={{ clickable: true }}
//                 breakpoints={{
//                   640: {
//                     slidesPerView: 1,
//                   },
//                   768: {
//                     slidesPerView: 2,
//                   },
//                   1024: {
//                     slidesPerView: 3,
//                   },
//                 }}
//               >
//                 {testimonials.map((testimonial, index) => (
//                   <SwiperSlide key={index}>
//                     <motion.div
//                       className="bg-yellow-100 shadow-custom-md p-6 sm:p-8 rounded-lg relative flex flex-col  items-center"
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.5, delay: index * 0.1 }}
//                       viewport={{ once: true }}
//                     >
//                       {/* Outer Chat Bubble */}
//                       <div className="relative w-full mt-12 sm:mt-16 bg-yellow-700 rounded-lg p-4 sm:p-6">
//                         {/* Inner Chat Bubble */}
//                         <div className="bg-yellow-100 p-4 sm:p-6 rounded-lg text-gray-800 relative z-10">
//                           <img
//                             src={testimonial.image}
//                             alt={testimonial.author}
//                             className="absolute -top-12 sm:-top-20 rounded-full left-0 h-16 w-16 sm:h-24 sm:w-24 z-10"
//                           />
//                           <p className="text-base sm:text-lg md:text-xl text-yellow-900 font-bold mb-1">{testimonial.author}</p>
//                           <p className="text-sm sm:text-base text-gray-600 mb-3">{testimonial.company}</p>
//                           <p className="italic text-sm sm:text-base md:text-lg text-gray-500">"{testimonial.quote}"</p>

//                           {/* Inner Chat Bubble Tail (Pointy) */}
//                           <div className="absolute -bottom-4 left-4 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-yellow-100"></div>
//                         </div>

//                         {/* Outer Chat Bubble Tail (Pointy) */}
//                         <div className="absolute -bottom-4 left-3 sm:left-4 w-0 h-0 border-l-[24px] border-l-transparent border-t-[24px] border-t-yellow-700"></div>
//                       </div>

//                       {/* Button */}
//                       <Link className="mt-4 sm:mt-6" to ={`/portfolio/${testimonial.slug}`}>
                        
//                         <motion.button
//                         className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 xs:py-3 xs:px-6 sm:py-3 sm:px-8 text-sm xs:text-base sm:text-lg rounded-full transition duration-300 "
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         aria-label={`Learn more about ${testimonial.author}`}
//                       >
//                        More About Project
//                       </motion.button>
//                       </Link>
//                     </motion.div>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </div>
//           </section>
  
      
//   );
// };

// export default TestimonialsSection;


import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { HashLink as Link } from "react-router-hash-link";
import { trackEvent } from "../../../utils/analytics"; // Import analytics utilities
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 3,
    slug: "pamelas-pampered-pets-booking-system-website",
    quote:
      "The Tail-Wagging Websites Design Factory transformed my pet sitting website into something truly special.",
    author: "Pamela Marbett",
    company: "CEO, Pamela's Pampered Pets",
    image: "/images/ingrid.png",
  },
  {
    id: 4,
    slug: "dm-hedges-landscaping-website-northampton",
    quote: "We've seen a significant increase in web traffic. The design is amazing!",
    author: "DM Hedges",
    company: "Founder, DM Hedges Landscaping",
    image: "/images/DMHEDGESLandscaping.png",
  },
];

const TestimonialsSection = () => {
  const handleSlideChange = (swiper) => {
    trackEvent("Testimonials Section", "Slide Change", `Active Slide: ${swiper.activeIndex}`);
  };

  const handleTestimonialClick = (author) => {
    trackEvent("Testimonials Section", "Button Click", `More About: ${author}`);
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-yellow-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-center text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-900 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Client Reviews...
        </motion.h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          onSlideChange={handleSlideChange} // Track slide changes
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id}>
              <motion.div
                className="bg-yellow-100 shadow-custom-md p-6 sm:p-8 rounded-lg relative flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Outer Chat Bubble */}
                <div className="relative w-full mt-12 sm:mt-16 bg-yellow-700 rounded-lg p-4 sm:p-6">
                  {/* Inner Chat Bubble */}
                  <div className="bg-yellow-100 p-4 sm:p-6 rounded-lg text-gray-800 relative z-10">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="absolute -top-12 sm:-top-20 rounded-full left-0 h-16 w-16 sm:h-24 sm:w-24 z-10"
                    />
                    <p className="text-base sm:text-lg md:text-xl text-yellow-900 font-bold mb-1">
                      {testimonial.author}
                    </p>
                    <p className="text-sm sm:text-base text-gray-600 mb-3">{testimonial.company}</p>
                    <p className="italic text-sm sm:text-base md:text-lg text-gray-500">
                      "{testimonial.quote}"
                    </p>

                    {/* Inner Chat Bubble Tail */}
                    <div className="absolute -bottom-4 left-4 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-yellow-100"></div>
                  </div>

                  {/* Outer Chat Bubble Tail */}
                  <div className="absolute -bottom-4 left-3 sm:left-4 w-0 h-0 border-l-[24px] border-l-transparent border-t-[24px] border-t-yellow-700"></div>
                </div>

                {/* Button */}
                <Link
                  className="mt-4 sm:mt-6"
                  to={`/portfolio/${testimonial.slug}`}
                  onClick={() => handleTestimonialClick(testimonial.author)} // Track button click
                >
                  <motion.button
                    className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 xs:py-3 xs:px-6 sm:py-3 sm:px-8 text-sm xs:text-base sm:text-lg rounded-full transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`Learn more about ${testimonial.author}`}
                  >
                    More About Project
                  </motion.button>
                </Link>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;
