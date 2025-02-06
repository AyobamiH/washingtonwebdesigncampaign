import Layout from "./Layout";
import { FaLightbulb } from 'react-icons/fa';
import ServicesHero from "./ServicesHero";
import React, {useEffect} from "react";
import ServicePackages from "./ServicePackages";
import CallToAction from "./CallToAction";
import PricingComponent from "./PricingPlan";

import {motion} from "framer-motion"
import TestimonialsSection from './TestimonialsSection';
import { Helmet } from "react-helmet-async";
import { trackPageView } from "../../../utils/analytics"

const ServicesPage = () => {

   useEffect(() => {
    // Track when the hero section is viewed
    trackPageView('/pet-care-website-design-service-washington-dc-usa');
  }, []);
  return (
    <>
        <Helmet>
    <title>Pet Care Web Design Northampton | Tail Wagging Web Design</title> 
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/images/Tailwaggingwebdesignlogo.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    {/* */}
    <meta
      name="description"
      content="Tail Wagging Web Design: Custom web design & SEO for pet care in Northampton. Websites for dog walkers, vets, groomers & more[1]!"
    />

    {/* */}
    <meta
      name="keywords"
      content="pet care web design Northampton, dog walker website design, pet sitter website design Northampton, website design for pet care professionals, pet care website development Northampton, Northampton dog groomer web design, web design for vets Northampton, pet boarding website design Northampton, dog training website design Northampton" 
    />

    {/* */}
    <meta name="author" content="Tail Wagging Web Design Factory" />

    {/* */}
    <meta property="og:title" content="Pet Care Web Design Northampton | Tail Wagging Web Design" />
    <meta
      property="og:description"
      content="Get more clients with Tail Wagging Web Design! Expert web design and SEO for pet care businesses in Northampton[1]."
    />
    <meta property="og:image" content="https://www.tailwaggingwebdesign.com/images/Tailwaggingwebdesignlogo.png" />
    <meta property="og:url" content="https://www.tailwaggingwebdesign.com/pet-care-web-design-services" />
    <meta property="og:type" content="website" />

    {/* */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Pet Care Web Design Northampton | Tail Wagging Web Design" />
    <meta
      name="twitter:description"
      content="Stunning websites for pet care pros in Northampton! Increase bookings with Tail Wagging Web Design[1]."
    />
    <meta name="twitter:image" content="https://www.tailwaggingwebdesign.com/images/Tailwaggingwebdesign.png" />
    <meta name="twitter:site" content="@woeinvests" />

    {/* */}
    <link rel="canonical" href="https://www.tailwaggingwebdesign.com/pet-care-web-design-services" />

    {/* */}
    <meta name="robots" content="index, follow" />

    {/* */}
    <meta name="theme-color" content="#ffffff" />

    {/* */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Pet Care Web Design Services",
        "description": "Professional web design and SEO services tailored for pet care businesses in Northampton. Boost your bookings, attract local clients, and build a trusted online presence.",
        "provider": {
          "@type": "Organization",
          "name": "Tail Wagging Web Design Factory",
          "logo": "https://www.tailwaggingwebdesign.com/images/Tailwaggingwebdesignlogo.png",
          "url": "https://www.tailwaggingwebdesign.com",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+44 07402342694",
            "contactType": "Customer Service",
            "areaServed": "Northampton",
            "availableLanguage": ["English"]
          },
        },
        "serviceType": [
          "Website Design",
          "SEO Optimization",
          "E-commerce Web Development",
          "Web Redesign Services"
        ],
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Northampton"
        },
        "offers": [
          {
            "@type": "Offer",
            "name": "Custom Web Design Packages",
            "price": "79.99",
            "priceCurrency": "GBP",
            "url": "https://www.tailwaggingwebdesign.com/pet-care-web-design-services",
            "availability": "https://schema.org/InStock",
            "validFrom": "2024-12-01"
          },
        ]
      })}
    </script>
  </Helmet>


    <Layout>  
      <ServicesHero />
    <div className="bg-yellow-50">
      

      {/* Service Packages Section */}
      <section id="services" className=" ">
        <div className=" mx-auto text-center">
                 
          <ServicePackages />
        </div>
      </section>
      <section className="bg-yellow-200 py-12  relative min-h-[calc(40vh-64px)] flex items-center  justify-center overflow-hidden">
       <div className="mt-8  p-6 rounded-lg flex ">
        <FaLightbulb className="text-yellow-700 mr-4" size={32} />
        <motion.p
          className="text-sm xs:text-base sm:text-lg md:text-xl justify-center lg:text-2xl 2xl:text-3xl mb-8 text-yellow-900"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Not happy with your website’s performance in the first 120 days? We’ll work with you for free until you do!
        </motion.p>
        </div>
        
      </section>


      {/* Pricing Plan Section */}
      <section className="py-12 px-6 ">
        <div className="max-w-7xl mx-auto">
          <PricingComponent />
        </div>
      </section>


      {/* Pricing Plan Comparison */}
      {/* <section className="py-12 px-6 ">
        <div className="max-w-7xl mx-auto">
          <PricingComparison />
        </div>
      </section> */}
        {/* Testimonial Section */}
      <section className="py-12 px-6 ">
        <div className="max-w-7xl mx-auto">
         <TestimonialsSection/>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 px-6 ">
        <div className="max-w-7xl mx-auto">
          <CallToAction />
        </div>
      </section>

      
    </div>
    </Layout>

     </>
  );
};

export default ServicesPage;
