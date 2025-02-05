import React from "react";
import Lottie from "lottie-react";
import webDesign from "./animations/websitesDesign.json";
import websiteRevamp from "./animations/revamp.json";
import websiteOptimization from "./animations/weboptimisation.json";
import seoAnimation from "./animations/seo.json";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import ecommerceAnimation from "./animations/ecommerce.json";
import { Link } from 'react-router-dom';

const servicePackages = [
  {
    id: 1,
    image: webDesign,
    title: "Website Design",
    description: "Custom designs tailored for pet care services in Northampton.",
    features: [
      "Responsive for all devices",
      "Custom branding & logos",
      "User-friendly navigation",
      "Booking system integration",
      "SEO structure for better local visibility",
      "High-quality images & graphics",
      "Pet profiles & trust-building features to showcase care quality",
      "Highlight reviews, testimonials, and service guarantees",
    ],
    value: "Create a professional online presence that attracts pet owners, builds trust, and boosts bookings. Stand out in the Northampton market with a site that reflects your quality of care.",
  },
  {
    id: 2,
    image: websiteRevamp,
    title: "Website Revamps",
    description: "Refresh outdated designs to improve performance and appeal for Northampton pet care businesses.",
    features: [
      "Design updates that reflect your brand",
      "Faster performance for better user experience",
      "Mobile-friendly redesigns",
      "Regular content updates for relevancy",
      "SEO enhancements to drive more local traffic",
      "Seamless booking system integration",
    ],
    value: "Give your website a fresh, professional look that attracts more Northampton pet owners, enhances functionality, and drives more bookings. Stand out in local searches and offer pet parents a seamless online experience.",
  },
  {
    id: 3,
    image: websiteOptimization,
    title: "Website Optimization",
    description: "Ensure your site works perfectly on all devices, providing a smooth experience for Northampton pet owners.",
    features: [
      "Performance boosts for faster loading times",
      "Mobile responsiveness for a seamless experience",
      "Enhanced SEO to rank higher in Google",
      "Accessibility improvements for all users",
      "Regular security updates to keep your site safe",
      "Keep your site running smoothly and error-free",
    ],
    value: "Enhance your site’s performance and visibility, driving more traffic and attracting local pet owners in Northampton. With faster load times and better search rankings, watch your views turn into bookings.",
  },
  {
    id: 4,
    image: seoAnimation,
    title: "SEO and Local Visibility",
    description: "Get found by more pet owners in Northampton and surrounding areas.",
    features: [
      "Keyword optimization for better search engine results",
      "Local SEO strategies to attract nearby pet owners in Northampton",
      "Google My Business setup to enhance local visibility",
      "Content creation to engage your audience",
      "Backlink building to improve domain authority",
      "Detailed analytics & reports to track progress",
    ],
    value: "Boost your local search visibility to drive more traffic from pet owners in your area, turning views into bookings. Stand out in Northampton with strong local SEO strategies.",
  },
  {
    id: 5,
    image: ecommerceAnimation,
    title: "E-commerce Website Development",
    description: "Create a seamless online store for pet care products and services, tailored for Northampton pet care businesses.",
    features: [
      "Custom online store design tailored to pet care products",
      "Integrated payment gateways for easy transactions",
      "Inventory management system to keep track of products",
      "SEO optimization for product pages to drive organic traffic",
      "Mobile-friendly shopping experience",
      "Customer account creation for streamlined repeat purchases",
      "Secure checkout process to protect customer data",
    ],
    value: "Expand your business with an online store that caters to pet owners, making it easy for them to purchase your products and services directly from your website. Increase revenue streams and enhance customer convenience.",
  },
];

const ServicePackages = () => {
  return (
    <section className="bg-yellow-50 py-12 px-4 xs:px-6 sm:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          className="text-3xl xs:text-4xl sm:text-5xl font-bold text-gray-800 mb-4 p-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Web Design and Development Services
        </motion.h2>
        <motion.p
          className="text-base xs:text-lg sm:text-xl text-gray-700 mt-2 mb-8 max-w-4xl p-4 mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Choose the perfect package to elevate your pet care business in Northampton.
        </motion.p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 gap-6 xs:gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3 w-full">
          {servicePackages.map((service, index) => (
            <motion.div
              key={service.id}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-lg shadow-lg bg-yellow-100 text-gray-800 hover:shadow-xl transition-shadow flex flex-col"
              aria-label={`Service package: ${service.title}`}
            >
              {/* Image */}
              <div className="w-full h-40 flex items-center justify-center mb-4">
                <Lottie
                  animationData={service.image}
                  loop={true}
                  className="h-32 w-auto object-contain"
                  loading="lazy"
                />
              </div>

              {/* Service Details */}
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">{service.title}</h2>
              <p className="text-sm xs:text-base sm:text-lg mb-4 text-gray-700">{service.description}</p>
              <p className="text-sm text-gray-600 italic mb-6">{service.value}</p>

              {/* Features */}
             <ul className="text-left text-sm xs:text-base space-y-4 flex-grow mb-6">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start space-x-3"
                    style={{ alignItems: "flex-start" }} // Ensures consistent alignment
                  >
                    <FaCheck className="w-5 h-5 text-yellow-900 flex-shrink-0" /> {/* Larger, consistent icon size */}
                    <span className="leading-relaxed">{feature}</span> {/* Ensures text wraps cleanly */}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-auto">
                <Link
                  to="/website-design-questionnaire"
                  className="w-full block py-2 rounded-lg font-medium text-center bg-yellow-400 text-gray-800 hover:bg-yellow-500 transition duration-300"
                >
                  Request A Quote
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServicePackages;
