//  QuestionairePage.jsx

import Question from './Question';
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { FaLightbulb } from "react-icons/fa";
import { Helmet } from 'react-helmet-async';

const questionnaireData = {
  questions: [
    {
      section: 'About Your Business',
      questions: [
        {
          id: 0,
          propertyName: 'servicesOffered',
          text: 'What services do you offer?',
          options: [
            'Pet Grooming',
            'Pet Boarding',
            'Pet Daycare',
            'Dog Walking',
            'Pet Sitting',
            'Pet Training',
            'Veterinary Services',
            'Pet Transportation',
            'Pet Nutrition & Diet Consulting',
            'Pet Photography',
            'Pet Behavioral Counseling',
            'Pet Spa Services',
            'Pet Waste Management',
            'Pet Adoption Services',
            'Pet Health and Wellness Programs',
            'Exotic Pet Care',
            'Other',
          ],
          hint:
            'Providing a list of services helps create a strong brand identity on your website.',
        },
        {
          id: 1,
          propertyName: 'businessName',
          text: 'What is the name of your pet care business?',
          options: null,
          hint:
            'Providing a clear name and services helps create a strong brand identity on your website.',
        },
        {
          id: 2,
          propertyName: 'uniqueSellingPoints',
          text:
            'What makes your pet care services unique compared to other local competitors?',
          options: null,
          hint:
            'Highlighting your unique selling points ensures your website stands out from the competition.',
        },
      ],
    },
    {
      section: 'Target Audience',
      questions: [
        {
          id: 3,
          propertyName: 'idealClients',
          text: 'Who are your ideal clients?',
          options: ['Busy professionals', 'Families', 'Elderly pet owners', 'Vacationers', 'Other'],
          hint:
            "Identifying your target clients will help tailor the website's design and content to their needs.",
        },
        {
          id: 4,
          propertyName: 'primaryPetsServed',
          text: 'What kind of pets do you primarily serve?',
          options: ['Dogs', 'Cats', 'Exotic pets', 'Small animals', 'Other'],
          hint:
            'Understanding the types of pets you serve will influence the visuals and services highlighted on your website.',
        },
        {
          id: 5,
          propertyName: 'targetAudienceDescription',
          text: 'Describe your target audience or typical client.',
          options: null,
          hint: 'Briefly describe the type of pet owners you serve.',
        },
      ],
    },
    {
      section: 'Website Goals',
      questions: [
        {
          id: 6,
          propertyName: 'primaryWebsiteGoal',
          text: 'What is the primary goal of your website?',
          options: [
            'Attract new clients',
            'Provide information',
            'Allow online booking',
            'Showcase testimonials',
            'Other',
          ],
          hint:
            'Your primary goal should guide the overall design and structure of your website.',
        },
        {
          id: 7,
          propertyName: 'secondaryWebsiteGoal',
          text: 'What is the secondary goal of your website?',
          options: [
            'Build trust through educational content',
            'Create a community through a blog',
            'Offer pet care tips',
            'Other',
          ],
          hint:
            'Secondary goals can enhance user engagement and build customer loyalty over time.',
        },
        {
          id: 8,
          propertyName: 'haveExistingWebsite',
          text: 'Do you currently have a website?',
          options: ['Yes', 'No'],
          hint: 'Indicate whether you have an existing website.',
        },
        {
          id: 9,
          propertyName: 'budgetRange',
          text: 'What is your budget range for this project?',
          options: ['<£1000', '£1000 - £2000', '£2000 - £5000', '>£5000'],
          hint: 'Choose a budget range that fits your needs.',
        },
      ],
    },
    {
      section: 'User Experience (UX)',
      questions: [
        {
          id: 10,
          propertyName: 'desiredCustomerFeelings',
          text: 'How do you want your customers to feel when they visit your website?',
          options: ['Playful and friendly', 'Professional and trustworthy', 'Cozy and welcoming', 'Other'],
          hint:
            'The tone and feel of your website should resonate with your target audience and business goals.',
        },
        {
          id: 11,
          propertyName: 'importantUserInteractions',
          text: 'Which user interactions are most important for you?',
          options: ['Easy navigation', 'Clear call-to-actions', 'Contact form', 'Online booking system', 'Other'],
          hint:
            'Focusing on user experience ensures visitors can easily find the information they need and take action.',
        },
      ],
    },
    {
      section: 'Website Tone and Style',
      questions: [
        {
          id: 12,
          propertyName: 'websiteStyle',
          text: 'What style do you envision for your website?',
          options: ['Modern', 'Minimalist', 'Colorful', 'Playful', 'Elegant', 'Other'],
          hint:
            "Your website's style should reflect your brand's personality and appeal to your target audience.",
        },
        {
          id: 13,
          propertyName: 'preferredImagery',
          text: 'What type of imagery or themes would resonate best with your clients?',
          options: ['Cute pet images', 'Family photos with pets', 'Professional service pictures', 'Other'],
          hint:
            'Using the right imagery can create an emotional connection with your audience, making your website more engaging.',
        },
      ],
    },
    {
      section: 'Website Features',
      questions: [
        {
          id: 14,
          propertyName: 'mustHaveFeatures',
          text: 'Which features are a must-have for your website?',
          options: [
            'Online booking',
            'Service gallery',
            'Client testimonials',
            'Pricing information',
            'Pet care tips blog',
            'Other',
          ],
          hint:
            "Prioritizing essential features ensures your website serves both your business and your customers' needs.",
        },
        {
          id: 15,
          propertyName: 'needEcommerce',
          text: 'Do you need an eCommerce feature for selling pet-related products?',
          options: ['Yes', 'No'],
          hint:
            'If you plan to sell products, adding an eCommerce feature will be critical to your site’s functionality.',
        },
        {
          id: 16,
          propertyName: 'includeBlogOrNewsletter',
          text: 'Would you like to include a blog or newsletter to share pet care tips and advice?',
          options: ['Yes', 'No'],
          hint:
            'A blog or newsletter can help build trust and engage your audience with valuable pet care information.',
        },
      ],
    },
    {
      section: 'Content and Updates',
      questions: [
        {
          id: 17,
          propertyName: 'websiteUpdateFrequency',
          text: 'How frequently do you plan to update your website?',
          options: ['Monthly blog posts', 'Seasonal promotions', 'Real-time availability updates', 'Other'],
          hint:
            'Planning regular updates can keep your website fresh and engaging for returning visitors.',
        },
        {
          id: 18,
          propertyName: 'includePetResources',
          text:
            'Would you like your clients to easily access pet-related resources or information on your site?',
          options: ['Yes', 'No'],
          hint:
            'Providing accessible resources, like pet care guides, can enhance your site’s value to clients.',
        },
      ],
    },
    {
      section: 'Call to Action (CTA)',
      questions: [
        {
          id: 19,
          propertyName: 'desiredVisitorActions',
          text: 'What actions do you want visitors to take on your website?',
          options: ['Book a service', 'Contact you', 'Subscribe to a newsletter', 'Other'],
          hint:
            'Clear calls-to-action guide visitors toward the key goals of your website, like booking or contacting you.',
        },
        {
          id: 20,
          propertyName: 'ctaPlacement',
          text: 'Where would you like the most important CTAs (call-to-action buttons) to be placed?',
          options: ['At the top of the homepage', 'After every service description', 'At the bottom of pages', 'Other'],
          hint:
            'Strategically placed CTA buttons can significantly increase the chances of visitors taking desired actions.',
        },
      ],
    },
    {
      section: 'Competitor Insights',
      questions: [
        {
          id: 21,
          propertyName: 'admiredCompetitorWebsites',
          text: 'Are there any competitor websites that you admire?',
          options: null,
          hint:
            'Understanding what you like about competitor websites can help shape the design and features of your own.',
        },
      ],
    },
    {
      section: 'Branding and Design Preferences',
      questions: [
        {
          id: 22,
          propertyName: 'haveLogoAndBranding',
          text: 'Do you already have a logo and branding in place?',
          options: ['Yes', 'No'],
          hint:
            'Having consistent branding in place ensures a unified look and feel for your website.',
        },
        {
          id: 23,
          propertyName: 'preferredColorSchemes',
          text: 'What are your preferred color schemes?',
          options: ['Bright and playful', 'Neutral and calming', 'Earthy and natural', 'Other'],
          hint:
            'The color scheme can influence how visitors perceive your brand. Choose colors that align with your vision.',
        },
      ],
    },
    {
      section: 'Mobile Experience',
      questions: [
        {
          id: 24,
          propertyName: 'mobileOptimizationImportance',
          text: 'How important is it for your website to work seamlessly on mobile devices?',
          options: ['Very important', 'Somewhat important', 'Not important'],
          hint:
            'With more users accessing websites on mobile devices, optimizing for mobile is essential for user satisfaction.',
        },
      ],
    },
    {
      section: 'Future Growth',
      questions: [
        {
          id: 25,
          propertyName: 'anticipateServiceExpansion',
          text: 'Do you anticipate expanding your services in the future?',
          options: ['Yes', 'No'],
          hint:
            'Planning for growth ensures your website can adapt and scale as your business expands.',
        },
        {
          id: 26,
          propertyName: 'needWebsiteFlexibility',
          text: 'Would you like your website to have the flexibility to grow with your business?',
          options: ['Yes', 'No'],
          hint:
            'A flexible website design allows you to add new features and content as your business grows.',
        },
      ],
    },
    {
      section: 'SEO and Analytics',
      questions: [
        {
          id: 27,
          propertyName: 'interestedInSEO',
          text:
            'Are you interested in optimizing your website for search engines (SEO) to reach more clients?',
          options: ['Yes', 'No'],
          hint:
            'SEO helps your website rank higher in search results, driving more traffic and potential clients to your site.',
        },
        {
          id: 28,
          propertyName: 'interestedInAnalytics',
          text: 'Would you like to track visitor behavior and engagement using analytics?',
          options: ['Yes', 'No'],
          hint:
            'Using analytics allows you to understand how visitors interact with your site and optimize accordingly.',
        },
      ],
    },
    {
      section: 'Business and Personal Contact Information',
      questions: [
        {
          id: 29,
          propertyName: 'email',
          text: 'Email Address',
          options: null,
          hint:
            'Having your contact information readily available will help me reach out to you easily.',
        },
        {
          id: 30,
          propertyName: 'phone',
          text: 'Phone Number',
          options: null,
          hint:
            'Having your contact information readily available will help me reach out to you easily.',
        },
        {
          id: 31,
          propertyName: 'agreeToCommunications',
          text: 'Do you agree to further communication?',
          options: ['Yes', 'No'],
          hint:
            "Selecting 'Yes' will allow me to contact you with a quote and more information.",
        },
      ],
    },
  ],
};




const QuestionnairePage = () => {
  const navigate = useNavigate();
  const [containerHeight, setContainerHeight] = useState('auto');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isAnswered, setIsAnswered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState('');
  const questionRef = useRef(null);

  const allQuestions = questionnaireData.questions.flatMap((section) => section.questions);
  const totalQuestions = allQuestions.length;
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
  const currentQuestion = allQuestions[currentQuestionIndex];

  useEffect(() => {
    if (questionRef.current) {
      setContainerHeight(questionRef.current.offsetHeight);
    }
  }, [currentQuestionIndex]);

  const handleHeightChange = (height) => {
    setContainerHeight(height);
  };

  const handleAnswerChange = (propertyName, value) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [propertyName]: value,
    }));
    setIsAnswered(value !== null && value !== undefined && value !== '');
  };

  const handleNext = () => {
    if (isAnswered) {
      if (currentQuestionIndex < totalQuestions - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        const nextQuestion = allQuestions[currentQuestionIndex + 1];
        const nextAnswer = selectedAnswers[nextQuestion.propertyName];
        setIsAnswered(nextAnswer !== null && nextAnswer !== undefined && nextAnswer !== '');
      } else {
        handleSubmit();
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      const prevQuestion = allQuestions[currentQuestionIndex - 1];
      const prevAnswer = selectedAnswers[prevQuestion.propertyName];
      setIsAnswered(prevAnswer !== null && prevAnswer !== undefined && prevAnswer !== '');
    }
  };
// 'https://petportfoliositecampaignbackend.onrender.com/questionnaire/create',
  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmissionError('');
   
    try {
      const response = await fetch(
        'https://petportfoliositecampaignbackend.onrender.com/questionnaire/create',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(selectedAnswers),
        }
      );

      // Check if the response is OK
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error submitting questionnaire');
    }

    // Parse the response to extract data
    const responseData = await response.json();
    console.log('Response Data:', responseData); // Debug to verify response

    // Access the `id` returned from the server
    const { id } = responseData;

    if (id) {
      console.log('Received ID:', id);
      // Redirect user to the recommendation page with the generated questionnaire ID
      navigate(`/recommendations/${id}`);
    } else {
      console.error('No ID received from the response');
      setSubmissionError('No ID received from the server, please try again.');
    }

    setIsSubmitted(true);
    // alert('Thank you for completing the questionnaire!');
    // setCurrentQuestionIndex(0);   

    } catch (error) {
      console.error('Error submitting questionnaire:', error);
      setSubmissionError(`Whoops! Looks like something went wrong. Please try again in a moment, or reach out if you need a helping paw!`)
    } finally {
      setIsSubmitting(false);
    }
  };

  return (

    <>
    <Helmet>

      <title>Web Design Questionnaire | Pet Care Businesses | Northampton</title> 
      <meta charset="UTF-8"/>
      <link rel="icon" type="image/svg+xml" href="/images/Tailwaggingwebdesignlogo.png"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

      <meta name="description" content="Get a custom quote for your pet care website design in Northampton. Fill out our questionnaire to help us understand your needs and preferences." />
      <meta name="keywords" content="web design questionnaire, pet care website design, Northampton web design, website design quote, pet care business website, veterinary website design, dog groomer website, pet trainer website" /> 
      <meta name="author" content="Tail-Wagging Websites Design Factory Northampton"/>

      <meta property="og:title" content="Web Design Questionnaire | Pet Care Businesses | Northampton" />
      <meta property="og:description" content="Tell us about your pet care business and website needs. Our questionnaire helps us create a custom quote for your perfect website." /> 
      <meta property="og:image" content="/images/Tailwaggingwebdesignlogo.png"/>
      <meta property="og:url" content="https://www.Tailwaggingwebdesign.com/website-design-questionnaire" /> 
      <meta property="og:type" content="website"/>

      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:title" content="Web Design Questionnaire | Pet Care Businesses | Northampton" />
      <meta name="twitter:description" content="Need a website for your pet care business in Northampton?  Start by filling out our quick questionnaire to get a custom quote." /> 
      <meta name="twitter:image" content="/images/Tailwaggingwebdesign.png"/>
      <meta name="twitter:site" content="@woeinvests"/>

      <link rel="canonical" href="https://www.Tailwaggingwebdesign.com/website-design-questionnaire" /> 

      <meta name="robots" content="index, follow"/>
      <meta name="theme-color" content="#ffffff"/>
      
    </Helmet>
    <div className="w-full min-h-[calc(100vh-64px)] bg-yellow-50 py-8 px-4 mx-auto">
      {isSubmitted ? (
        <div className="relative w-full text-center text-gray-800 mt-12 py-8 flex flex-col items-center justify-center bg-yellow-100 rounded-md">
          <h2 className="text-2xl font-semibold mb-4">Thank You for Your Booking!</h2>
          <p className="text-lg mb-6">Your pet sitting appointment has been received.</p>
          <p className="text-md mb-4">I will be in touch shortly to confirm...</p>
          <div className="flex space-x-4">
            <Link to="/" className="text-yellow-700 hover:underline text-lg mt-4">
              Back to Home
            </Link>
            <button className="text-yellow-700 hover:underline text-lg mt-4">
              View Booking Summary
            </button>
          </div>
        </div>
      ) : isSubmitting ? (
        <div className="text-center mx-auto w-3/5 mt-12 py-8">
          <p className="text-lg font-semibold">Submitting your responses, please wait...</p>
          <div className="loader mx-auto mt-4 w-12 h-12 border-t-4 border-yellow-700 border-solid rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="w-full min-h-[calc(100vh-64px)] py-8 max-w-7xl mx-auto mt-12 px-4">
          <div className="bg-yellow-300 text-gray-900 text-center py-8 rounded-lg mb-12">
            <h1 className="text-4xl font-bold mb-2">
              Find the Perfect Pet Care Website for Your Business
            </h1>
            <p className="text-lg">
              Answer a few short questions to help me understand your business needs and design the
              ideal website for you.
            </p>
          </div>
          {submissionError && (
            <div className="mb-6 bg-red-100 text-red-600 px-4 py-3 rounded-md text-center">
              {submissionError}
            </div>
          )}

          <div className="w-full bg-yellow-300 rounded-full h-2 mb-6">
            <div className="bg-yellow-700 h-2 rounded-full" style={{ width: `${progress}%` }}></div>
          </div>

          <motion.div
            key={currentQuestion.id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="question text-center py-8"
          >
            <motion.div
              animate={{ height: containerHeight }}
              className=""
            >
              <Question
                question={currentQuestion}
                selectedAnswers={selectedAnswers}
                handleAnswerChange={handleAnswerChange}
                onHeightChange={handleHeightChange}
              />
            </motion.div>

            <div className="mt-12 flex justify-between">
              <button
                className="px-6 py-3 bg-yellow-300 text-black font-bold rounded-lg hover:bg-yellow-400"
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
              >
                Previous
              </button>
              <button
                className={`px-6 py-3 font-bold rounded-lg ${
                  isAnswered
                    ? 'bg-yellow-700 text-white hover:bg-yellow-800'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                onClick={handleNext}
                disabled={!isAnswered}
              >
                {currentQuestionIndex === totalQuestions - 1 ? 'Submit' : 'Let’s Go!'}
              </button>
            </div>

            <div className="mt-12 bg-yellow-100 p-6 rounded-lg flex items-start shadow-sm">
              <FaLightbulb className="text-yellow-700 mr-4" size={32} />
              <div>
                <h3 className="text-lg font-bold text-gray-800">{currentQuestion.hint}</h3>
                <p className="text-gray-600">
                  This insight will help you think critically about the choices you make here.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
      
    </div>
    </>
  );
};
export default QuestionnairePage;

