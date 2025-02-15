// import React from 'react'
// import { motion } from "framer-motion";
// import { FiArrowRight, FiArrowLeft } from "react-icons/fi"; // Import arrow icons

// const PortfolioItem = ({ project, isHovered, showDetails, isLeft, isMobileView }) => {
//   return (
//     <motion.div
//       className="portfolio-item relative w-full aspect-w-16 aspect-h-9 mb-8"
//       initial={{ opacity: 1 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       {/* Portfolio Image */}
//       <img src={project.image} alt={project.name} className="w-full h-auto px-6" />

//       {/* Portfolio Details on Hover or Tap */}
//       {showDetails && (
//         <motion.div
//           className={`portfolio-details ${
//             isMobileView ? "absolute inset-0 w-full" : "absolute inset-y-0"
//           } bg-[#292929] first-line:text-white  *:font-bold *:text-[#e87c10] text-center min-w-full`}
//           initial={{ opacity: 0, x: isMobileView ? 0 : 100 }}
//           animate={{ opacity: 1, x: 0 }}
//           exit={{ opacity: 0, x: isMobileView ? 0 : 100 }}
//           transition={{ duration: 0.5 }}
//         >
//           {/* Display the arrow */}
//           {isHovered && !isMobileView && (
//             <div
//               className={`absolute top-8 transform -translate-y-1/2 ${
//                 isLeft ? "left-full" : "right-full"
//               }`}
//             >
//               {/* Arrow icons */}
//               {isLeft ? (
//                 <FiArrowRight className="z-10 text-[#e87c10] bg-[#292929] text-3xl w-16 h-auto" /> // Right-facing arrow for left items
//               ) : (
//                 <FiArrowLeft className="text-[#e87c10]  bg-[#292929] text-3xl w-16 h-auto " /> // Left-facing arrow for right items
//               )}
//             </div>
//           )}

//           <h3 className="text-xl font-semibold">{project.name}</h3>
//           <p className="text-md mt-2">{project.description}</p>

//           {/* Lottie Animation */}
          
//         </motion.div>
//       )}
//     </motion.div>
//   );
// };

// export default PortfolioItem;
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PortfolioItem = ({ project, isHovered, showDetails, isMobileView }) => {
  return (
    <motion.div
      className="portfolio-item relative w-full h-60 bg-gray-100"
      initial={{ opacity: 1 }}
      animate={{ opacity: isHovered ? 0.9 : 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image */}
      <img
        src={project.image}
        alt={project.name}
        className={`w-full h-full object-cover ${
          isHovered ? "scale-105" : "scale-100"
        } transition-transform`}
      />

      {/* Details */}
      {showDetails && (
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-75 text-white flex flex-col justify-center items-center text-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-bold">{project.name}</h3>
          <p className="mt-2 text-md">{project.description}</p>
          <Link to={project.url} className="block mt-4">
            <motion.button
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default PortfolioItem;
