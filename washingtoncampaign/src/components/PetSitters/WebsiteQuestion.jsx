// Question.js
import React from 'react';

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

const Question = ({ question, selectedAnswers, handleAnswerChange }) => {
  const { propertyName } = question;
  const value = selectedAnswers[propertyName] || '';

  const isMultipleChoice = Array.isArray(question.options);
  const isYesNoQuestion =
    isMultipleChoice && question.options.includes('Yes') && question.options.includes('No');

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
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-14">
      {/* Display the question text */}
      <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-900 mb-4 xs:mb-6 sm:mb-8">
        {question.text}
      </h2>

      {/* Render options or input field */}
      {isMultipleChoice ? (
        <div className="grid grid-cols-1  md:grid-cols-2 gap-4 md:gap-6">
          {question.options.map((option, index) => {
            const isSelected = arrayProperties.includes(propertyName)
              ? (value || []).includes(option)
              : value === option || value === (option === 'Yes');

            return (
              <div
                key={index}
                className={`border rounded-lg p-4 xs:p-6 ${
                  isSelected ? 'border-purple-500 bg-purple-200' : 'border-purple-300'
                } cursor-pointer`}
                onClick={() => handleOptionChange(option)}
              >
                <input
                  type="checkbox"
                  className="mr-2 cursor-pointer text-pink-800 border rounded-lg p-4 shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
                  checked={isSelected}
                  readOnly
                />
                <label className="text-sm xs:text-base sm:text-lg text-gray-700">{option}</label>
              </div>
            );
          })}
        </div>
      ) : (
        <input
          type="text"
          className="w-full border rounded-lg p-2 sm:p-4 shadow-sm focus:outline-none focus:ring focus:ring-purple-200 text-sm xs:text-base sm:text-lg"
          placeholder="Type your answer here..."
          onChange={handleInputChange}
          value={value}
        />
      )}
    </div>
  );
};

export default Question;
