


// import React, { useState } from "react";
// import FAQSearch from "./FAQSearch";
// import { motion } from "framer-motion"
// import FAQNavigation from "./FAQNavigation";
// import FAQContact from "./FAQContact"


// const categories = [
//   'General Questions',
//   'Services Offered',
//   'Pricing and Payments',
//   'Policies and Procedures',
//   'General Website & Design',
//   'Marketing & Online Presence',
//   'Niche-Specific Questions'
// ];

// const faqData = {
//   "General Questions": [
//     { 
//       "question": "What areas do you serve?", 
//       "answer": "I am a Northampton-based web designer, but I can work with pet care professionals throughout the UK." 
//     },
//     { 
//       "question": "What types of pet care businesses do you create websites for?", 
//       "answer": "I specialise in creating websites for a wide range of pet care businesses in Northampton, including dog walkers, pet sitters, dog groomers, pet boarding facilities, and more. If you have a unique pet care business, please contact me to discuss your specific needs." 
//     },
//     { 
//       "question": "Do you have experience working with Wix?", 
//       "answer": "Yes, I am a Wix expert and specialise in creating beautiful, functional, and affordable Wix websites for pet care professionals in Northampton." 
//     },
//     { 
//       "question": "How do I contact you?", 
//       "answer": "You can contact me through the contact form on my website, by email at heryourbarme@live.com, or by phone at 07402342694. I'm always happy to answer any questions you may have." 
//     }
//   ],

//   "Services Offered": [
//     { 
//       "question": "What services do you offer?", 
//       "answer": "I offer a variety of website design and development services tailored for pet care businesses in Northampton, including Wix website design, website maintenance, SEO optimization, and content creation. Please visit my services page for a complete list and detailed descriptions." 
//     },
//     { 
//       "question": "Can you create an online booking system for my pet care website?", 
//       "answer": "Yes, I can integrate online booking systems into your Wix website, making it easy for clients in Northampton to schedule appointments or book your services online." 
//     },
//     { 
//       "question": "Can you help me with my website's SEO?", 
//       "answer": "Absolutely! I can help you optimise your website for search engines, ensuring that your pet care business appears at the top of Google when people search for relevant keywords in Northampton." 
//     },
//     { 
//       "question": "Do you offer website maintenance services?", 
//       "answer": "Yes, I offer ongoing website maintenance packages to ensure your website stays up-to-date, secure, and running smoothly. This includes regular backups, security updates, and content updates." 
//     }
//   ],
//   "Pricing and Payments": [
//     { 
//       "question": "What are your rates?", 
//       "answer": "My rates vary depending on the complexity of the project and the specific services you require. I offer competitive pricing and transparent quotes for all my web design services. Contact me for a personalised quote for your pet care website." 
//     },
//     { 
//       "question": "How do I make a payment?", 
//       "answer": "I accept various payment methods, including bank transfers, credit cards, and PayPal. We can discuss the best payment option for you during our initial consultation." 
//     },
//     { 
//       "question": "Do you offer discounts?", 
//       "answer": "Yes, I occasionally offer discounts for new clients or for specific services. Contact me to inquire about any current discounts or special offers." 
//     }
//   ],
//   "Policies and Procedures": [
//     { 
//       "question": "What is your cancellation policy?", 
//       "answer": "I have a clear and fair cancellation policy. Please contact me to discuss the details." 
//     },
//     { 
//       "question": "Do you offer refunds?", 
//       "answer": "I strive to provide the highest quality service to all my clients. Please contact me to discuss my refund policy in detail." 
//     },
//     { 
//       "question": "How do you handle project revisions?", 
//       "answer": "I offer a specific number of revisions within each project to ensure your satisfaction. We can discuss the revision process in more detail during our initial consultation." 
//     }
//   ],
//   "General Website & Design": [ 
//     { 
//       "question": "I'm worried about my website looking like everyone else's. Can you make mine unique?", 
//       "answer": "Absolutely! We understand the importance of standing out. We'll work closely with you to create a custom Wix website that reflects your brand, showcases your unique selling points, and appeals to pet owners in Northampton." 
//     },
//     {
//       "question": "What if I already have a website, but it's outdated?",
//       "answer": "No problem! We offer website revamp services to breathe new life into your existing site. We can update your design, improve functionality, and optimise it for search engines to attract more clients in Northampton."
//     }
//   ],

//   "Marketing & Online Presence": [
//     { 
//       "question": "How quickly can I expect to see results from my new website?", 
//       "answer": "While results vary, a well-designed and optimised website can start attracting new clients within a few weeks. Factors like your niche, competition, and marketing efforts also play a role. Let's discuss your goals and create a strategy for online success!" 
//     }
//   ],
//   "Niche-Specific Questions": [
//     { 
//       "question": "I offer pet boarding in Northampton. How can a website help me attract more clients during peak seasons?", 
//       "answer": "A website can be a powerful tool for attracting pet boarding clients, especially during peak seasons. We can optimise your website for relevant keywords like 'pet boarding Northampton' and create targeted content about holiday pet care. A blog with tips for pet owners preparing for boarding can also attract more visitors to your site." 
//     }
//   ]
// };


// const FAQSection = () => {
//   const [openIndex, setOpenIndex] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState(categories[0]);
//   const [searchResults, setSearchResults] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const handleSearch = (searchTerm) => {
//     if (!searchTerm.trim()) {
//       setSearchResults(null);
//       return;
//     }

//     const results = Object.values(faqData)
//       .flat()
//       .filter(
//         (faq) =>
//           faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
//       );

//     setSearchResults(results);
//   };

//   const faqsToDisplay = searchResults || faqData[selectedCategory];

//   return (
//     <section className="bg-yellow-50 py-12 xs:py-14 sm:py-16">
//       <div className="container mx-auto px-4 max-w-5xl py-12 bg-yellow-100 lg:bg-yellow-50 sm:bg-yellow-100 rounded-lg ">
//         <header className="text-center mb-8">
//           <motion.h2
//             className="text-3xl xs:text-4xl sm:text-5xl font-semibold text-gray-900 text-center mb-6"
//             initial={{ opacity: 0, y: -20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//           >
//             Frequently Asked Questions
//           </motion.h2>
//           <motion.p
//             className="text-lg xs:text-xl sm:text-2xl text-gray-800 text-center mb-8"
//             initial={{ opacity: 0, y: -20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//           >
//             Find answers to common questions about our pet care services.
//           </motion.p>
//         </header>

//         {/* FAQ Navigation */}
//         <FAQNavigation
//           categories={categories}
//           activeCategory={selectedCategory}
//           setActiveCategory={setSelectedCategory}
//         />

//         {/* FAQ Search */}
//         <FAQSearch onSearch={handleSearch} />

//         {/* FAQ List */}
//         <div className="max-w-3xl mx-auto mt-8">
//           {faqsToDisplay.map((faq, index) => (
//             <motion.div
//               key={index}
//               className="mb-6 border-b border-yellow-200 py-4 bg-yellow-50 p-6 rounded-lg shadow-md transition-shadow hover:shadow-lg"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <button
//                 className="flex justify-between items-center w-full text-left font-semibold p-4 bg-yellow-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//                 onClick={() => toggleFAQ(index)}
//                 aria-expanded={openIndex === index}
//                 aria-controls={`faq-content-${index}`}
//               >
//                 <h3 className="text-lg xs:text-xl sm:text-2xl text-gray-800 font-bold mb-2">
//                   {faq.question}
//                 </h3>
//                 <p className="text-yellow-700 font-bold text-lg">
//                   {openIndex === index ? "-" : "+"}
//                 </p>
//               </button>
//               {openIndex === index && (
//                 <motion.div
//                   id={`faq-content-${index}`}
//                   className="mt-4 p-4 bg-yellow-400 rounded-lg text-gray-800"
//                   initial={{ height: 0, opacity: 0 }}
//                   animate={{ height: "auto", opacity: 1 }}
//                   exit={{ height: 0, opacity: 0 }}
//                 >
//                   {faq.answer}
//                 </motion.div>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//       {/* FAQ Contact Section */}
//       <FAQContact />
//     </section>
//   );
// };

// export default FAQSection;


import React, { useState } from "react";
import FAQSearch from "./FAQSearch";
import { motion } from "framer-motion";
import FAQNavigation from "./FAQNavigation";
import FAQContact from "./FAQContact";
import { trackEvent } from "../../../../utils/analytics"; // Import analytics utilities

const categories = [
  "General Questions",
  "Services Offered",
  "Pricing and Payments",
  "Policies and Procedures",
  "General Website & Design",
  "Marketing & Online Presence",
  "Niche-Specific Questions",
];

const faqData = {
  "General Questions": [
    { 
      "question": "What areas do you serve?", 
      "answer": "I am a Northampton-based web designer, but I can work with pet care professionals throughout the UK." 
    },
    { 
      "question": "What types of pet care businesses do you create websites for?", 
      "answer": "I specialise in creating websites for a wide range of pet care businesses in Northampton, including dog walkers, pet sitters, dog groomers, pet boarding facilities, and more. If you have a unique pet care business, please contact me to discuss your specific needs." 
    },
    { 
      "question": "Do you have experience working with Wix?", 
      "answer": "Yes, I am a Wix expert and specialise in creating beautiful, functional, and affordable Wix websites for pet care professionals in Northampton." 
    },
    { 
      "question": "How do I contact you?", 
      "answer": "You can contact me through the contact form on my website, by email at heryourbarme@live.com, or by phone at 07402342694. I'm always happy to answer any questions you may have." 
    }
  ],

  "Services Offered": [
    { 
      "question": "What services do you offer?", 
      "answer": "I offer a variety of website design and development services tailored for pet care businesses in Northampton, including Wix website design, website maintenance, SEO optimization, and content creation. Please visit my services page for a complete list and detailed descriptions." 
    },
    { 
      "question": "Can you create an online booking system for my pet care website?", 
      "answer": "Yes, I can integrate online booking systems into your Wix website, making it easy for clients in Northampton to schedule appointments or book your services online." 
    },
    { 
      "question": "Can you help me with my website's SEO?", 
      "answer": "Absolutely! I can help you optimise your website for search engines, ensuring that your pet care business appears at the top of Google when people search for relevant keywords in Northampton." 
    },
    { 
      "question": "Do you offer website maintenance services?", 
      "answer": "Yes, I offer ongoing website maintenance packages to ensure your website stays up-to-date, secure, and running smoothly. This includes regular backups, security updates, and content updates." 
    }
  ],
  "Pricing and Payments": [
    { 
      "question": "What are your rates?", 
      "answer": "My rates vary depending on the complexity of the project and the specific services you require. I offer competitive pricing and transparent quotes for all my web design services. Contact me for a personalised quote for your pet care website." 
    },
    { 
      "question": "How do I make a payment?", 
      "answer": "I accept various payment methods, including bank transfers, credit cards, and PayPal. We can discuss the best payment option for you during our initial consultation." 
    },
    { 
      "question": "Do you offer discounts?", 
      "answer": "Yes, I occasionally offer discounts for new clients or for specific services. Contact me to inquire about any current discounts or special offers." 
    }
  ],
  "Policies and Procedures": [
    { 
      "question": "What is your cancellation policy?", 
      "answer": "I have a clear and fair cancellation policy. Please contact me to discuss the details." 
    },
    { 
      "question": "Do you offer refunds?", 
      "answer": "I strive to provide the highest quality service to all my clients. Please contact me to discuss my refund policy in detail." 
    },
    { 
      "question": "How do you handle project revisions?", 
      "answer": "I offer a specific number of revisions within each project to ensure your satisfaction. We can discuss the revision process in more detail during our initial consultation." 
    }
  ],
  "General Website & Design": [ 
    { 
      "question": "I'm worried about my website looking like everyone else's. Can you make mine unique?", 
      "answer": "Absolutely! We understand the importance of standing out. We'll work closely with you to create a custom Wix website that reflects your brand, showcases your unique selling points, and appeals to pet owners in Northampton." 
    },
    {
      "question": "What if I already have a website, but it's outdated?",
      "answer": "No problem! We offer website revamp services to breathe new life into your existing site. We can update your design, improve functionality, and optimise it for search engines to attract more clients in Northampton."
    }
  ],

  "Marketing & Online Presence": [
    { 
      "question": "How quickly can I expect to see results from my new website?", 
      "answer": "While results vary, a well-designed and optimised website can start attracting new clients within a few weeks. Factors like your niche, competition, and marketing efforts also play a role. Let's discuss your goals and create a strategy for online success!" 
    }
  ],
  "Niche-Specific Questions": [
    { 
      "question": "I offer pet boarding in Northampton. How can a website help me attract more clients during peak seasons?", 
      "answer": "A website can be a powerful tool for attracting pet boarding clients, especially during peak seasons. We can optimise your website for relevant keywords like 'pet boarding Northampton' and create targeted content about holiday pet care. A blog with tips for pet owners preparing for boarding can also attract more visitors to your site." 
    }
  ]
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [searchResults, setSearchResults] = useState(null);

  const toggleFAQ = (index) => {
    const isOpen = openIndex === index;
    setOpenIndex(isOpen ? null : index);
    trackEvent(
      "FAQ Section",
      "Toggle",
      isOpen ? `Collapsed Question ${index}` : `Expanded Question ${index}`
    );
  };

  const handleSearch = (searchTerm) => {
    trackEvent("FAQ Section", "Search", `Search Term: ${searchTerm}`);

    if (!searchTerm.trim()) {
      setSearchResults(null);
      return;
    }

    const results = Object.values(faqData)
      .flat()
      .filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      );

    setSearchResults(results);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    trackEvent("FAQ Section", "Category Change", `Category: ${category}`);
  };

  const faqsToDisplay = searchResults || faqData[selectedCategory];

  return (
    <section className="bg-yellow-50 py-12 xs:py-14 sm:py-16">
      <div className="container mx-auto px-4 max-w-5xl py-12 bg-yellow-100 lg:bg-yellow-50 sm:bg-yellow-100 rounded-lg">
        <header className="text-center mb-8">
          <motion.h2
            className="text-3xl xs:text-4xl sm:text-5xl font-semibold text-gray-900 text-center mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="text-lg xs:text-xl sm:text-2xl text-gray-800 text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Find answers to common questions about our pet care services.
          </motion.p>
        </header>

        {/* FAQ Navigation */}
        <FAQNavigation
          categories={categories}
          activeCategory={selectedCategory}
          setActiveCategory={handleCategoryChange} // Track category change
        />

        {/* FAQ Search */}
        <FAQSearch onSearch={handleSearch} />

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto mt-8">
          {faqsToDisplay.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-6 border-b border-yellow-200 py-4 bg-yellow-50 p-6 rounded-lg shadow-md transition-shadow hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                className="flex justify-between items-center w-full text-left font-semibold p-4 bg-yellow-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                onClick={() => toggleFAQ(index)} // Track toggle interaction
                aria-expanded={openIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <h3 className="text-lg xs:text-xl sm:text-2xl text-gray-800 font-bold mb-2">
                  {faq.question}
                </h3>
                <p className="text-yellow-700 font-bold text-lg">
                  {openIndex === index ? "-" : "+"}
                </p>
              </button>
              {openIndex === index && (
                <motion.div
                  id={`faq-content-${index}`}
                  className="mt-4 p-4 bg-yellow-400 rounded-lg text-gray-800"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ Contact Section */}
      <FAQContact />
    </section>
  );
};

export default FAQSection;
