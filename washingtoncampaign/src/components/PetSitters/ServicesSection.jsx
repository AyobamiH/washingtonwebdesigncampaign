
import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import webDesign from "./animations/webDesign.json";
import websiteRevamp from "./animations/websiteRevamp.json";
import websiteOptimization from "./animations/websiteOptimization.json";
import seoAnimation from "./animations/seoVisibility.json";

const services = [
  {
    icon: webDesign,
    title: "Pet-Friendly Website Design",
    description: "Custom designs tailored for pet care services.",
  },
  {
    icon: websiteRevamp,
    title: "Website Revamps",
    description: "Refresh outdated designs to improve performance and appeal.",
  },
  {
    icon: websiteOptimization,
    title: "Website Optimization",
    description: "Ensure your site works perfectly on all devices.",
  },
  {
    icon: seoAnimation,
    title: "SEO and Local Visibility",
    description: "Get found by more pet owners in your area.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-extrabold text-gray-900 text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Services
        </motion.h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6  w-full rounded-tl-lg "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              {/* <div className=" w-full h-auto rounded-lg shadow-lg">
                <Lottie animationData={service.icon} loop={true} className=" w-full h-auto rounded-lg shadow-lg mb-4 object-cover rounded-tl-lg aspect-video" />
              </div> */}
              {/* <h3 className="text-xl font-semibold text-gray-900 text-center mt-6  mb-2">
                {service.title}
              </h3> */}
              <p className="text-gray-600 text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
