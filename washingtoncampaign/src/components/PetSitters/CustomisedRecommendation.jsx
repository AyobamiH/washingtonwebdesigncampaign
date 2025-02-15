// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { Link, useParams } from "react-router-dom";
// import CheckoutButton from "./CheckoutButton";
// import PricingPlan from "./PricingPlan"

// const plans = [
//   {
//     name: "Basic",
//     price: "£79.99",
//     description: "Perfect for Personal Pet Care Portfolios or Small Pet Care Websites",
//     validity: "Valid for 36 months",
//     onboardingFee: "+£100 Onboarding",
//     features: [
//       "Responsive Design: Works across all devices",
//       "Mobile Friendly: Optimized for mobile users",
//       "Basic SEO Setup: Simple keyword and on-page optimization",
//       "User-friendly Navigation: Easy for visitors to navigate",
//       "Integration with Basic Booking System: Simple calendar or form",
//     ],
//   },
//   {
//     name: "Professional",
//     price: "£128.79",
//     description: "Small to Medium Businesses with Multiple Locations",
//     validity: "Valid for 48 months",
//     onboardingFee: "+£120 Onboarding",
//     features: [
//       "Custom Design: Fully tailored to your brand and business",
//       "Mobile Optimization: Advanced responsiveness",
//       "Advanced SEO Setup: Keyword optimization and metadata",
//       "Improved Site Performance and Speed",
//       "Organized Content Restructuring",
//       "Basic Security Updates",
//       "Booking System Integration",
//     ],
//   },
//   {
//     name: "Enterprise",
//     price: "£198.99",
//     description: "Large Businesses with Advanced Needs",
//     validity: "Valid for 48 months",
//     onboardingFee: "+£160 Onboarding",
//     features: [
//       "Custom Design & Branding: Fully customized to your branding",
//       "Full SEO Optimization: Includes Local SEO and keyword research",
//       "Advanced Site Performance Improvements",
//       "Flawless Mobile Responsiveness",
//       "Full-scale Security Updates",
//       "Web Accessibility Enhancements",
//       "Regular Maintenance & Post-launch Support",
//       "Advanced Booking Systems: Notifications & reminders",
//     ],
//   },
// ];

// const CustomizedRecommendationPage = () => {
//   const { id } = useParams(); // Get the questionnaire ID from the URL
//   const [loading, setLoading] = useState(true);
//   const [recommendedStyle, setRecommendedStyle] = useState('');
//   const [featureList, setFeatureList] = useState([]);
//   const [suggestedPackage, setSuggestedPackage] = useState({ name: '', features: [] });
//   const [booleanFeatures, setBooleanFeatures] = useState([]);
//   const [targetAudienceRecommendations, setTargetAudienceRecommendations] = useState([]);
//   const [serviceSpecificRecommendations, setServiceSpecificRecommendations] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchQuestionnaireData = async () => {
//       try {
//         const response = await fetch(`http://localhost:8050/questionnaire/${id}`);
        
//         if (!response.ok) {
//           throw new Error('Failed to fetch questionnaire data');
//         }

//         const data = await response.json();
//         // Assuming data contains recommendedStyle, featureList, suggestedPackage, etc.
//         setRecommendedStyle(data.recommendedStyle);
//         setFeatureList(data.featureList);
//         setSuggestedPackage(data.suggestedPackage);

//         // Find matching plan details
//         const plan = plans.find((plan) => plan.name === data.suggestedPackage.name);
//         if (plan) {
//           setSuggestedPlan(plan); // Store the full plan details here
//         }

//         // Extract and format boolean features based on schema values
//         const booleanFields = [
//           { key: 'haveExistingWebsite', label: 'Have an existing website' },
//           { key: 'needEcommerce', label: 'Need an eCommerce feature' },
//           { key: 'includeBlogOrNewsletter', label: 'Include a blog or newsletter' },
//           { key: 'includePetResources', label: 'Include pet-related resources' },
//           { key: 'haveLogoAndBranding', label: 'Have a logo and branding in place' },
//           { key: 'anticipateServiceExpansion', label: 'Anticipate expanding services' },
//           { key: 'needWebsiteFlexibility', label: 'Need a flexible website' },
//           { key: 'interestedInSEO', label: 'Interested in SEO optimization' },
//           { key: 'interestedInAnalytics', label: 'Interested in tracking analytics' },
//           { key: 'agreeToCommunications', label: 'Agree to further communications' }
//         ];

//         const extractedBooleanFeatures = booleanFields
//           .filter(field => data[field.key] === true)
//           .map(field => field.label);

//         setBooleanFeatures(extractedBooleanFeatures);

//         // Generate recommendations based on specific services offered
//         if (data.servicesOffered) {
//           const serviceRecommendations = [];
//           if (data.servicesOffered.includes('Pet Grooming')) {
//             serviceRecommendations.push('Add a gallery showcasing pet grooming styles.');
//             serviceRecommendations.push('Include an online booking system for grooming services.');
//           }
//           if (data.servicesOffered.includes('Pet Boarding')) {
//             serviceRecommendations.push('Feature client testimonials to build trust for boarding services.');
//             serviceRecommendations.push('Provide a section for pet owners to view boarding facilities.');
//           }
//           if (data.servicesOffered.includes('Pet Training')) {
//             serviceRecommendations.push('Include a blog for pet training tips to build authority.');
//             serviceRecommendations.push('Provide an easy-to-use contact form for training inquiries.');
//           }
//           setServiceSpecificRecommendations(serviceRecommendations);
//         }

//         // Generate recommendations based on target audience
//         if (data.idealClients) {
//           const audienceRecommendations = [];
//           if (data.idealClients.includes('Families')) {
//             audienceRecommendations.push('Use family-oriented imagery to connect with pet owners.');
//             audienceRecommendations.push('Add a testimonial section with family stories to build credibility.');
//           }
//           if (data.idealClients.includes('Busy professionals')) {
//             audienceRecommendations.push('Ensure online booking is prominently featured for convenience.');
//             audienceRecommendations.push('Add clear call-to-actions to quickly book services.');
//           }
//           if (data.idealClients.includes('Elderly pet owners')) {
//             audienceRecommendations.push('Use larger fonts and simple navigation to enhance accessibility.');
//             audienceRecommendations.push('Include contact information prominently for easy access.');
//           }
//           setTargetAudienceRecommendations(audienceRecommendations);
//         }
        
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchQuestionnaireData();
//   }, [id]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   return (
//     <section className="py-12 xs:py-16 sm:py-20 min-h-[calc(100vh-64px)] bg-yellow-50">

//         <div className="relative w-full text-center text-gray-800  py-8 flex flex-col items-center justify-center  rounded-md">

//           <motion.h1
//           className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl  mb-4 leading-tight xs:leading-tight sm:leading-tight md:leading-snug lg:leading-snug 2xl:leading-normal text-gray-900"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//         >
//           Thank you for completing the questionnaire! 
//         </motion.h1>
          
//           {/* <p className="text-lg mb-6">Based on your responses, we've recommended a package that best suits your needs. We believe this package will help you reach your business goals effectively.</p>
//           <p className="text-md mb-4">Take a look at your personalized recommendations and let us know if you have any questions — we’re excited to help you move forward!</p>
//           <div className="flex space-x-4">
//             <Link to="/" className="text-yellow-700 hover:underline text-lg mt-4">
//               Back to Home
//             </Link>
//             <button className="text-yellow-700 hover:underline text-lg mt-4">
//               View Booking Summary
//             </button>
//           </div> */}
//         </div>
//       <div className="w-full max-w-7xl mx-auto px-4 py-4 xs:px-6 sm:px-8">
//         <motion.h2
//           className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-700 text-center mb-6 xs:mb-8 sm:mb-12"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//         >
//           Your Recommended Website Style & Features
//         </motion.h2>

//         {/* Recommended Design Style Section */}
//         <div className="bg-yellow-100 p-6 rounded-lg shadow-lg mb-12">
//           <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Suggested Style: {recommendedStyle}</h3>
//           <p className="text-sm xs:text-md sm:text-lg text-gray-800">
//             Based on your answers, a <strong>{recommendedStyle}</strong> design style is recommended for your pet care business. This style will resonate best with your target audience and set you apart from competitors.
//           </p>
//         </div>

//         {/* Features List Section */}
//         <div className="bg-yellow-100 p-6 rounded-lg shadow-lg mb-12">
//           <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Recommended Features</h3>
//           <ul className="list-disc list-inside text-sm xs:text-md sm:text-lg text-gray-800">
//             {featureList.map((feature, index) => (
//               <li key={index} className="mb-2">{feature}</li>
//             ))}
//           </ul>
//         </div>

//         {/* Boolean Features Section */}
//         {booleanFeatures.length > 0 && (
//           <div className="bg-yellow-100 p-6 rounded-lg shadow-lg mb-12">
//             <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Additional Preferences Based on Your Answers</h3>
//             <ul className="list-disc list-inside text-sm xs:text-md sm:text-lg text-gray-800">
//               {booleanFeatures.map((feature, index) => (
//                 <li key={index} className="mb-2">{feature}</li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {/* Service-Specific Recommendations Section */}
//         {serviceSpecificRecommendations.length > 0 && (
//           <div className="bg-yellow-100 p-6 rounded-lg shadow-lg mb-12">
//             <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Service-Specific Recommendations</h3>
//             <ul className="list-disc list-inside text-sm xs:text-md sm:text-lg text-gray-800">
//               {serviceSpecificRecommendations.map((recommendation, index) => (
//                 <li key={index} className="mb-2">{recommendation}</li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {/* Target Audience Recommendations Section */}
//         {targetAudienceRecommendations.length > 0 && (
//           <div className="bg-yellow-100 p-6 rounded-lg shadow-lg mb-12">
//             <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Target Audience Recommendations</h3>
//             <ul className="list-disc list-inside text-sm xs:text-md sm:text-lg text-gray-800">
//               {targetAudienceRecommendations.map((recommendation, index) => (
//                 <li key={index} className="mb-2">{recommendation}</li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {/* Pricing Package Recommendation Section */}
//         <div className="bg-yellow-100 p-6 rounded-lg shadow-lg mb-12">
//           <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Suggested Package: {suggestedPackage.name}</h3>
//           <p className="text-sm xs:text-md sm:text-lg text-gray-800 mb-4">
//             The <strong>{suggestedPackage.name}</strong> package offers all the features you need, including:
//           </p>
//           <ul className="list-disc list-inside text-sm xs:text-md sm:text-lg text-gray-800">
//             {suggestedPackage.features.map((feature, index) => (
//               <li key={index} className="mb-2">{feature}</li>
//             ))}
//           </ul>
//           <CheckoutButton className="bg-yellow-700" planName={suggestedPackage.name} planPrice={suggestedPackage.price} planHighlight={null} planCta={`Get Started with`} />
//          {/* <CheckoutButton
//             className="bg-yellow-700"
//             planName={suggestedPackage.name}
//             planPrice={suggestedPackage.price}
//             planHighlight={suggestedPackage.highlight || null}
//             planCta={`Get Started with ${suggestedPackage.name}`}
//           /> */}
//         </div>

//         {/* CTA Buttons Section */}

//         <PricingPlan/>
//         {/* <div className="flex flex-col xs:flex-row justify-center items-center space-y-4 xs:space-y-0 xs:space-x-4">
//           <Link to="/#pricingplan" className="w-full xs:w-auto">
//             <motion.button
//               className="w-full xs:w-auto bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-6 rounded-full transition duration-300"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               aria-label="View Pricing Packages"
//             >
//               View Pricing Packages
//             </motion.button>
//           </Link>
//           <Link to="/schedule-consultation" className="w-full xs:w-auto">
//             <motion.button
//               className="w-full xs:w-auto bg-yellow-700 hover:bg-yellow-800 text-white font-bold py-3 px-6 rounded-full transition duration-300"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               aria-label="Schedule a Consultation"
//             >
//               Schedule a Consultation
//             </motion.button>
//           </Link>
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default CustomizedRecommendationPage;
// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import CheckoutButton from "./CheckoutButton";
// import PricingPlan from "./PricingPlan";
// import { useNavigate, useParams } from "react-router-dom";

// const plans = [
//   {
//     name: "Basic",
//     price: "£79.99",
//     description: "Perfect for Personal Pet Care Portfolios or Small Pet Care Websites",
//     validity: "Valid for 36 months",
//     onboardingFee: "+£100 Onboarding",
//     features: [
//       "Responsive Design: Works across all devices",
//       "Mobile Friendly: Optimized for mobile users",
//       "Basic SEO Setup: Simple keyword and on-page optimization",
//       "User-friendly Navigation: Easy for visitors to navigate",
//       "Integration with Basic Booking System: Simple calendar or form",
//     ],
//   },
//   {
//     name: "Professional",
//     price: "£128.79",
//     description: "Small to Medium Businesses with Multiple Locations",
//     validity: "Valid for 48 months",
//     onboardingFee: "+£120 Onboarding",
//     features: [
//       "Custom Design: Fully tailored to your brand and business",
//       "Mobile Optimization: Advanced responsiveness",
//       "Advanced SEO Setup: Keyword optimization and metadata",
//       "Improved Site Performance and Speed",
//       "Organized Content Restructuring",
//       "Basic Security Updates",
//       "Booking System Integration",
//     ],
//   },
//   {
//     name: "Enterprise",
//     price: "£198.99",
//     description: "Large Businesses with Advanced Needs",
//     validity: "Valid for 48 months",
//     onboardingFee: "+£160 Onboarding",
//     features: [
//       "Custom Design & Branding: Fully customized to your branding",
//       "Full SEO Optimization: Includes Local SEO and keyword research",
//       "Advanced Site Performance Improvements",
//       "Flawless Mobile Responsiveness",
//       "Full-scale Security Updates",
//       "Web Accessibility Enhancements",
//       "Regular Maintenance & Post-launch Support",
//       "Advanced Booking Systems: Notifications & reminders",
//     ],
//   },
// ];

// const CustomizedRecommendationPage = () => {

//   const navigate = useNavigate();
//   const { id } = useParams(); // Get the questionnaire ID from the URL
//   const [loading, setLoading] = useState(true);
//   const [recommendedStyle, setRecommendedStyle] = useState("");
//   const [featureList, setFeatureList] = useState([]);
//   const [suggestedPackage, setSuggestedPackage] = useState({ name: "", features: [] });
//   const [suggestedPlan, setSuggestedPlan] = useState(null); // Store plan details here
//   const [booleanFeatures, setBooleanFeatures] = useState([]);
//   const [targetAudienceRecommendations, setTargetAudienceRecommendations] = useState([]);
//   const [serviceSpecificRecommendations, setServiceSpecificRecommendations] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchQuestionnaireData = async () => {
//       try {
//         const response = await fetch(`http://localhost:8050/questionnaire/${id}`);

//         if (!response.ok) {
//           throw new Error("Failed to fetch questionnaire data");
//         }

//         const data = await response.json();
//         // Assuming data contains recommendedStyle, featureList, suggestedPackage, etc.
//         setRecommendedStyle(data.recommendedStyle);
//         setFeatureList(data.featureList);
//         setSuggestedPackage(data.suggestedPackage);

//         // Find matching plan details
//         const plan = plans.find((plan) => plan.name === data.suggestedPackage.name);
//         if (plan) {
//           setSuggestedPlan(plan); // Store the full plan details here
//         }

//         // Extract and format boolean features based on schema values
//         const booleanFields = [
//           { key: "haveExistingWebsite", label: "Have an existing website" },
//           { key: "needEcommerce", label: "Need an eCommerce feature" },
//           { key: "includeBlogOrNewsletter", label: "Include a blog or newsletter" },
//           { key: "includePetResources", label: "Include pet-related resources" },
//           { key: "haveLogoAndBranding", label: "Have a logo and branding in place" },
//           { key: "anticipateServiceExpansion", label: "Anticipate expanding services" },
//           { key: "needWebsiteFlexibility", label: "Need a flexible website" },
//           { key: "interestedInSEO", label: "Interested in SEO optimization" },
//           { key: "interestedInAnalytics", label: "Interested in tracking analytics" },
//           { key: "agreeToCommunications", label: "Agree to further communications" },
//         ];

//         const extractedBooleanFeatures = booleanFields
//           .filter((field) => data[field.key] === true)
//           .map((field) => field.label);

//         setBooleanFeatures(extractedBooleanFeatures);

//         // Generate recommendations based on specific services offered
//         if (data.servicesOffered) {
//           const serviceRecommendations = [];
//           if (data.servicesOffered.includes("Pet Grooming")) {
//             serviceRecommendations.push("Add a gallery showcasing pet grooming styles.");
//             serviceRecommendations.push("Include an online booking system for grooming services.");
//           }
//           if (data.servicesOffered.includes("Pet Boarding")) {
//             serviceRecommendations.push("Feature client testimonials to build trust for boarding services.");
//             serviceRecommendations.push("Provide a section for pet owners to view boarding facilities.");
//           }
//           if (data.servicesOffered.includes("Pet Training")) {
//             serviceRecommendations.push("Include a blog for pet training tips to build authority.");
//             serviceRecommendations.push("Provide an easy-to-use contact form for training inquiries.");
//           }
//           setServiceSpecificRecommendations(serviceRecommendations);
//         }

//         // Generate recommendations based on target audience
//         if (data.idealClients) {
//           const audienceRecommendations = [];
//           if (data.idealClients.includes("Families")) {
//             audienceRecommendations.push("Use family-oriented imagery to connect with pet owners.");
//             audienceRecommendations.push("Add a testimonial section with family stories to build credibility.");
//           }
//           if (data.idealClients.includes("Busy professionals")) {
//             audienceRecommendations.push("Ensure online booking is prominently featured for convenience.");
//             audienceRecommendations.push("Add clear call-to-actions to quickly book services.");
//           }
//           if (data.idealClients.includes("Elderly pet owners")) {
//             audienceRecommendations.push("Use larger fonts and simple navigation to enhance accessibility.");
//             audienceRecommendations.push("Include contact information prominently for easy access.");
//           }
//           setTargetAudienceRecommendations(audienceRecommendations);
//         }
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchQuestionnaireData();
//   }, [id]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   return (
//     <section className="py-12 xs:py-16 sm:py-20 min-h-[calc(100vh-64px)] bg-yellow-50">
//       {/* Suggested Style Section */}
//       <div className="relative w-full text-center text-gray-800 py-8 flex flex-col items-center justify-center rounded-md">
//         <motion.h1
//           className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl mb-4 text-gray-900"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//         >
//           Thank you for completing the questionnaire!
//         </motion.h1>
//       </div>
//       <div className="w-full max-w-7xl mx-auto px-4 py-4 xs:px-6 sm:px-8">
//         {/* Recommended Design Style Section */}
//         <div className="bg-yellow-100 p-6 rounded-lg shadow-lg mb-12">
//           <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
//             Suggested Style: {recommendedStyle}
//           </h3>
//           <p className="text-sm xs:text-md sm:text-lg text-gray-800">
//             Based on your answers, a <strong>{recommendedStyle}</strong> design style is recommended for your pet care business. This style will resonate best with your target audience and set you apart from competitors.
//           </p>
//         </div>

//         {/* Features List Section */}
//         <div className="bg-yellow-100 p-6 rounded-lg shadow-lg mb-12">
//           <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Recommended Features</h3>
//           <ul className="list-disc list-inside text-sm xs:text-md sm:text-lg text-gray-800">
//             {featureList.map((feature, index) => (
//               <li key={index} className="mb-2">{feature}</li>
//             ))}
//           </ul>
//         </div>

//         {/* Boolean Features Section */}
//         {booleanFeatures.length > 0 && (
//           <div className="bg-yellow-100 p-6 rounded-lg shadow-lg mb-12">
//             <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Additional Preferences Based on Your Answers</h3>
//             <ul className="list-disc list-inside text-sm xs:text-md sm:text-lg text-gray-800">
//               {booleanFeatures.map((feature, index) => (
//                 <li key={index} className="mb-2">{feature}</li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {/* Service-Specific Recommendations Section */}
//         {serviceSpecificRecommendations.length > 0 && (
//           <div className="bg-yellow-100 p-6 rounded-lg shadow-lg mb-12">
//             <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Service-Specific Recommendations</h3>
//             <ul className="list-disc list-inside text-sm xs:text-md sm:text-lg text-gray-800">
//               {serviceSpecificRecommendations.map((recommendation, index) => (
//                 <li key={index} className="mb-2">{recommendation}</li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {/* Pricing Package Recommendation Section */}
//         {suggestedPlan && (
//           <div className="bg-yellow-100 p-6 rounded-lg shadow-lg mb-12">
//             <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
//               Suggested Package: {suggestedPlan.name}
//             </h3>
//             <p className="text-sm xs:text-md sm:text-lg text-gray-800 mb-4">
//               The <strong>{suggestedPlan.name}</strong> package offers all the features you need, including:
//             </p>
//             <ul className="list-disc list-inside text-sm xs:text-md sm:text-lg text-gray-800">
//               {suggestedPlan.features.map((feature, index) => (
//                 <li key={index} className="mb-2">{feature}</li>
//               ))}
//             </ul>
           
//             <CheckoutButton
//               className="bg-yellow-700"
//               planName={suggestedPlan.name}
//               planPrice={suggestedPlan.price}
//               planHighlight={suggestedPlan.highlight}
//               planCta={suggestedPlan.cta}
//               planFeatures = {suggestedPlan.features.map((feature, index) => (
//                {feature}
//               ))}
//               questionnaireId={id} // Pass the questionnaire ID here
//             />
//           </div>
//         )}

//         {/* CTA Buttons Section */}
       
//       </div>
//     </section>
//   );
// };

// export default CustomizedRecommendationPage;


import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import CheckoutButton from "./CheckoutButton";

const plans = [
  {
    name: "Basic",
    price: 79.99,
    description: "Perfect for Personal Pet Care Portfolios or Small Pet Care Websites",
    validityMonths: 36,
    onboardingFee: 100,
    features: [
      "Responsive Design: Works across all devices",
      "Mobile Friendly: Optimized for mobile users",
      "Basic SEO Setup: Simple keyword and on-page optimization",
      "User-friendly Navigation: Easy for visitors to navigate",
      "Integration with Basic Booking System: Simple calendar or form",
    ],
  },
  {
    name: "Professional",
    price: 128.79,
    description: "Small to Medium Businesses with Multiple Locations",
    validityMonths: 48,
    onboardingFee: 120,
    features: [
      "Custom Design: Fully tailored to your brand and business",
      "Mobile Optimization: Advanced responsiveness",
      "Advanced SEO Setup: Keyword optimization and metadata",
      "Improved Site Performance and Speed",
      "Organized Content Restructuring",
      "Basic Security Updates",
      "Booking System Integration",
    ],
  },
  {
    name: "Enterprise",
    price: 198.99,
    description: "Large Businesses with Advanced Needs",
    validityMonths: 48,
    onboardingFee: 160,
    features: [
      "Custom Design & Branding: Fully customized to your branding",
      "Full SEO Optimization: Includes Local SEO and keyword research",
      "Advanced Site Performance Improvements",
      "Flawless Mobile Responsiveness",
      "Full-scale Security Updates",
      "Web Accessibility Enhancements",
      "Regular Maintenance & Post-launch Support",
      "Advanced Booking Systems: Notifications & reminders",
    ],
  },
];

const CustomizedRecommendationPage = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the questionnaire ID from the URL
  const [loading, setLoading] = useState(true);
  const [recommendedStyle, setRecommendedStyle] = useState("");
  const [featureList, setFeatureList] = useState([]);
  const [suggestedPackage, setSuggestedPackage] = useState({ name: "", features: [] });
  const [suggestedPlan, setSuggestedPlan] = useState(null); // Store plan details here
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestionnaireData = async () => {
      try {
        console.log("Suggested Plan:", suggestedPlan);

        const response = await fetch(`https://petportfoliositecampaignbackend.onrender.com/questionnaire/${id}`);

        if (!response.ok) {
          throw new Error("Failed to fetch questionnaire data");
        }

        const data = await response.json();
        setRecommendedStyle(data.recommendedStyle);
        setFeatureList(data.featureList);
        setSuggestedPackage(data.suggestedPackage);

        // Find matching plan details
        const plan = plans.find((plan) => plan.name === data.suggestedPackage.name);
        if (plan) {
          setSuggestedPlan(plan); // Store the full plan details here
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestionnaireData();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section className="py-12 xs:py-16 sm:py-20 min-h-[calc(100vh-64px)] bg-yellow-50">
      {/* Suggested Style Section */}
      <div className="relative w-full text-center text-gray-800 py-8 flex flex-col items-center justify-center rounded-md">
        <motion.h1
          className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl mb-4 text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Thank you for completing the questionnaire!
        </motion.h1>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 py-4 xs:px-6 sm:px-8">
        {/* Recommended Design Style Section */}
        <div className="bg-yellow-100 p-6 rounded-lg shadow-lg mb-12">
          <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Suggested Style: {recommendedStyle}
          </h3>
          <p className="text-sm xs:text-md sm:text-lg text-gray-800">
            Based on your answers, a <strong>{recommendedStyle}</strong> design style is recommended for your pet care business. This style will resonate best with your target audience and set you apart from competitors.
          </p>
        </div>

        {/* Features List Section */}
        <div className="bg-yellow-100 p-6 rounded-lg shadow-lg mb-12">
          <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Recommended Features</h3>
          <ul className="list-disc list-inside text-sm xs:text-md sm:text-lg text-gray-800">
            {featureList.map((feature, index) => (
              <li key={index} className="mb-2">{feature}</li>
            ))}
          </ul>
        </div>

        {/* Pricing Package Recommendation Section */}
        {suggestedPlan && (
          <div className="bg-yellow-100 p-6 rounded-lg shadow-lg mb-12">
            <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              Suggested Package: {suggestedPlan.name}
            </h3>
            <p className="text-sm xs:text-md sm:text-lg text-gray-800 mb-4">
              The <strong>{suggestedPlan.name}</strong> package offers all the features you need, including:
            </p>
            <ul className="list-disc list-inside text-sm xs:text-md sm:text-lg text-gray-800 mb-6">
              {suggestedPlan.features.map((feature, index) => (
                <li key={index} className="mb-2">{feature}</li>
              ))}
            </ul>

            {/* Payment Details Section */}
            <div className="bg-white p-4 rounded-lg shadow-md text-sm text-gray-800">
              <h4 className="font-bold text-lg mb-4">Payment Details</h4>
              <p>
                <strong>Onboarding Fee:</strong> £{suggestedPlan.onboardingFee.toFixed(2)}
              </p>
              <p>
                <strong>First Installment:</strong> £{suggestedPlan.price.toFixed(2)}
              </p>
              <p className="font-bold mt-4 text-lg">
                <strong>Total Due Now:</strong> £{(suggestedPlan.onboardingFee + suggestedPlan.price).toFixed(2)}
              </p>
            </div>

            {/* Checkout Button */}
            {/* <CheckoutButton
              className="bg-yellow-700"
              planName={suggestedPlan.name}
              planPrice={suggestedPlan.price}
              planHighlight={suggestedPlan.highlight}
              planCta={suggestedPlan.cta}
              onboardingFee={suggestedPlan.onboardingFee}
              planFeatures = {suggestedPlan.features.map((feature, index) => (
               {feature}
              ))}
              questionnaireId={id} // Pass the questionnaire ID here
            /> */}

            <CheckoutButton
  planName={suggestedPlan.name}
  planPrice={suggestedPlan.price}
  onboardingFee={suggestedPlan.onboardingFee} // Pass onboarding fee correctly
  questionnaireId={id} // Pass questionnaire ID
  planHighlight={true}
   planFeatures = {suggestedPlan.features.map((feature, index) => (
               {feature}
              ))}
  planCta="Pay Now"
/>

          </div>
        )}
      </div>
    </section>
  );
};

export default CustomizedRecommendationPage;
