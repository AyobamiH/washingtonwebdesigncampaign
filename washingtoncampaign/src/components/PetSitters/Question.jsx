// // Question.js
import React from 'react';
import {motion} from "framer-motion"

const booleanProperties = [
  'haveExistingWebsite',
  'needEcommerce',
  'includeBlogOrNewsletter',
  'includePetResources',
  'haveLogoAndBranding',
  'anticipateServiceExpansion',
  'needWebsiteFlexibility',
  'interestedInSEO',
  'interestedInAnalytics',
  'agreeToCommunications',
];

const arrayProperties = [
  'servicesOffered',
  'idealClients',
  'primaryPetsServed',
  'primaryWebsiteGoal',
  'secondaryWebsiteGoal',
  'desiredCustomerFeelings',
  'importantUserInteractions',
  'websiteStyle',
  'preferredImagery',
  'mustHaveFeatures',
  'websiteUpdateFrequency',
  'desiredVisitorActions',
  'ctaPlacement',
  'preferredColorSchemes',
];

// const Question = ({ question, selectedAnswers, handleAnswerChange }) => {


//   const { propertyName } = question;
//   const value = selectedAnswers[propertyName] || '';

//   // Determine the question type
//   const isMultipleChoice = Array.isArray(question.options);
//   const isYesNoQuestion =
//     isMultipleChoice && question.options.includes('Yes') && question.options.includes('No');

//   // Handle changes for different question types
//   const handleOptionChange = (option) => {
//     if (arrayProperties.includes(propertyName)) {
//       const currentValues = selectedAnswers[propertyName] || [];
//       const newValues = currentValues.includes(option)
//         ? currentValues.filter((val) => val !== option)
//         : [...currentValues, option];
//       handleAnswerChange(propertyName, newValues);
//     } else if (booleanProperties.includes(propertyName)) {
//       handleAnswerChange(propertyName, option === 'Yes' || 'No');
      
//     } else {
//       handleAnswerChange(propertyName, option);
//     } 
//   };

//   const handleInputChange = (e) => {
//     handleAnswerChange(propertyName, e.target.value);
//   };

//   return (
//     <div>
//       {/* Display the question text */}
//       <h2 className="text-3xl font-bold text-gray-900 mb-8">{question.text}</h2>

//       {/* Render options or input field */}
//       {isMultipleChoice ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
//           {question.options.map((option, index) => {
//             const isSelected = arrayProperties.includes(propertyName)
//               ? (value || []).includes(option)
//               : value === option || value === (option === 'Yes');

//             return (
//               <div
//                 key={index}
//                 className={`border rounded-lg p-6  ${
//                   isSelected ? 'border-purple-500 bg-purple-200' : 'border-purple-300'
//                 }`}
//                 onClick={() => handleOptionChange(option)}
//               >
//                 <input
//                   type="checkbox"
//                   className="mr-2 cursor-pointer text-pink-800 border rounded-lg p-4 shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
//                   checked={isSelected}
//                   readOnly
//                 />
//                 <label className="text-gray-700">{option}</label>
//               </div>
//             );
//           })}
//         </div>
//       ) : (
//         <input
//           type="text"
//           className="w-full border rounded-lg p-4 shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
//           placeholder="Type your answer here..."
//           onChange={handleInputChange}
//           value={value}
//         />
//       )}
//     </div>
//   );
// };




const Question = ({ question, selectedAnswers, handleAnswerChange }) => {
  const { propertyName } = question;
  const value = selectedAnswers[propertyName] || '';

  // Determine the question type
  const isMultipleChoice = Array.isArray(question.options);
  const isYesNoQuestion =
    isMultipleChoice && question.options.includes('Yes') && question.options.includes('No');

  // Handle changes for different question types
  const handleOptionChange = (option) => {
    if (arrayProperties.includes(propertyName)) {
      const currentValues = selectedAnswers[propertyName] || [];
      const newValues = currentValues.includes(option)
        ? currentValues.filter((val) => val !== option)
        : [...currentValues, option];
      handleAnswerChange(propertyName, newValues);
    } else if (booleanProperties.includes(propertyName)) {
      handleAnswerChange(propertyName, option === 'Yes' || 'No');
    } else {
      handleAnswerChange(propertyName, option);
    }
  };

  const handleInputChange = (e) => {
    handleAnswerChange(propertyName, e.target.value);
  };

  return (
    <section className="py-10 xs:py-12 sm:py-16 min-h-[calc(100vh-64px)] bg-yellow-50"> 
      <div className="w-full max-w-5xl mx-auto px-4 xs:px-6 sm:px-8">
        <motion.h2
          className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center mb-6 xs:mb-8 sm:mb-12"
          style={{ fontSize: 'clamp(1.5rem, 3vw + 1rem, 3.5rem)' }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {question.text}
        </motion.h2>

        {/* Render options or input field */}
        {isMultipleChoice ? (
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2  gap-6 mb-12">
            {question.options.map((option, index) => {
              const isSelected = arrayProperties.includes(propertyName)
                ? (value || []).includes(option)
                : value === option || value === (option === 'Yes');

              return (
                <motion.div
                  key={index}
                  className={`border rounded-lg p-6 w-full transition-all cursor-pointer ${
                    isSelected ? 'border-yellow-700 bg-yellow-100' : 'border-yellow-300'
                  }`}
                  onClick={() => handleOptionChange(option)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Select ${option}`}
                >
                  <div className="flex items-center flex-col">
                    <input
                      type="checkbox"
                      className="mr-3 cursor-pointer w-5 h-5 rounded focus:outline-none focus:ring focus:ring-yellow-200"
                      checked={isSelected}
                      readOnly
                    />
                    <label className="text-gray-800 text-sm sm:text-md md:text-lg">{option}</label>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <input
              type="text"
              className="w-full border border-yellow-300 rounded-lg p-4 shadow-sm focus:outline-none focus:ring focus:ring-yellow-200 placeholder-gray-500 text-gray-800"
              placeholder="Type your answer here..."
              onChange={handleInputChange}
              value={value}
              aria-label={`Answer input for ${question.text}`}
            />
          </motion.div>
        )}
      </div>

      {/* Sticky CTA Button */}
      {/* <div className="sticky bottom-4 w-full flex justify-center mt-12">
        <motion.button
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-6 rounded-full transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Submit your answers"
        >
          Submit Your Answers
        </motion.button>
      </div> */}
    </section>
  );
};

export default Question;