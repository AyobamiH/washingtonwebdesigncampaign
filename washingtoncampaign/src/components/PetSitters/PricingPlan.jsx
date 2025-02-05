import React, { useEffect } from "react"; 
import BuyPlanButton from "./BuyPlanButton";
import { trackEvent } from "../../../utils/analytics"; // Import analytics utilities

const PricingComponent = () => {
  const plans = [
    {
      name: "Basic",
      price: "79.99",
      onboardingFee: "160.00",
      description: "Perfect for Personal Pet Care Portfolios or Small Pet Care Websites",
      validity: "Valid for 36 months",
      features: [
        "Responsive Design: Works across all devices",
        "Mobile Friendly: Optimized for mobile users",
        "Basic SEO Setup: Simple keyword and on-page optimization",
        "User-friendly Navigation: Easy for visitors to navigate",
        "Integration with Basic Booking System: Simple calendar or form",
      ],
      highlight: false,
    },
    {
      name: "Professional",
      price: "128.79",
      onboardingFee: "160.00",
      description: "Small to Medium Businesses with Multiple Locations",
      validity: "Valid for 48 months",
      features: [
        "Custom Design: Fully tailored to your brand and business",
        "Mobile Optimization: Advanced responsiveness",
        "Advanced SEO Setup: Keyword optimization and metadata",
        "Improved Site Performance and Speed",
        "Organized Content Restructuring",
        "Basic Security Updates",
        "Booking System Integration",
      ],
      highlight: false,
    },
    {
      name: "Enterprise",
      price: "198.99",
      onboardingFee: "160.00",
      description: "Large Businesses with Advanced Needs",
      validity: "Valid for 48 months",
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
      highlight: true,
    },
  ];

  useEffect(() => {
    // Track when the pricing section becomes visible
    trackEvent('Pricing Section', 'View', 'Pricing section loaded on Home');
  }, []);

  const handleBuyPlanClick = (planName) => {
    // Track clicks on "Buy Plan" button
    trackEvent('Pricing Component', 'Buy Plan Click', `Plan: ${planName}`);
  };

  const handleHighlightClick = (planName) => {
    // Track interactions with the highlighted plan
    trackEvent('Pricing Component', 'Highlight Plan Click', `Plan: ${planName}`);
  };

  return (
    <div id="pricingplan" className="bg-yellow-50 py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="max-w-5xl mx-auto xs:text-4xl sm:text-5xl md:text-6xl font-bold p-4 text-gray-800 leading-relaxed">
          Explore My Pricing Plans
        </h2>
        <p className="text-base xs:text-sm text-center sm:text-lg  md:text-xl text-gray-900 m-2 p-8">
          Need a website for your pet care business in Northampton?  Woof woof! You've come to the right place. Whether you're a dog walker in abington park, a pet sitter offering doggy day care, or a vet on billing road, I've got the perfect web design package for you.  From 'pawsitively' basic to 'purrfectly' enterprise, my affordable, SEO-optimized websites will help you get discovered in Northampton, attract more clients and grow your business online. </p>

        <p className="text-base xs:text-sm text-center sm:text-lg  md:text-xl text-gray-900 font-bold m-2 p-8">
        Choose the plan that fits your needs and let's get started!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between p-6 rounded-lg shadow-lg overflow-hidden ${
                plan.highlight ? "bg-black text-white" : "bg-yellow-100 text-gray-800"
              }`}
              onClick={() => plan.highlight && handleHighlightClick(plan.name)} // Track highlight plan clicks
            >
              {/* Card Content */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">{plan.name}</h2>
                {/* Add Responsive Wrapping for Price */}
                <p className="text-4xl font-bold mb-4 whitespace-normal break-words leading-tight">
                  £{plan.price}
                  <span className="text-xs font-medium">/month</span>
                </p>
                <span className="font-medium text-xs">+£{plan.onboardingFee} - Set up fee</span>

                <p className="text-sm mb-4">{plan.description}</p>
                <p className="text-sm text-gray-600 mb-6">{plan.validity}</p>
                <ul className="text-left text-sm space-y-2 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <svg
                        className="w-4 h-4 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Button */}
              <div className="mt-auto">
                <BuyPlanButton
                  planName={plan.name}
                  planPrice={plan.price}
                  onboardingFee={plan.onboardingFee}
                  onClick={() => handleBuyPlanClick(plan.name)} // Track "Buy Plan" button clicks
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;
