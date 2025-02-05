
// import React, { useState, useEffect } from "react";

import React, { useState, useEffect, Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { trackEvent } from "../../../utils/analytics"; // Import analytics utilities


const portfolioItems = [
  {
    id: 0,
    slug: "pawsome-pet-sitting-website", 
    name: "Pawsome Pet Sitting",
    description: "A vibrant website redesign for a thriving pet sitting service in Northampton. We helped them connect with more pet owners and showcase their services with a user-friendly design.",
    image: "/images/Tailwaggingwebdesigns.png", 
  },
  {
    id: 4,
    slug: "dm-hedges-landscaping-website-northampton", 
    name: "DM Hedges",
    description: "Helping this Northampton landscaping business blossom with a website that attracts local clients. We focused on user experience and local SEO to drive more inquiries.",
    image: "/images/DMHEDGESLandscaping.png",
    url:"https://dmhedges.vercel.app"
  },
  { 
    id: 7,
    slug: "pawfectcare-pet-business-services-website", 
    name: "Pawfect Care",
    description: "PawfectCare needed a website that would drive results for their pet care business clients. We delivered a dynamic design and seamless user experience that led to a surge in sign-ups and engagement. Let us do the same for your Northampton business!",
    image: "/images/pwfectcare.gif",
    url:"https://woeinvests.wixstudio.io/eyewear"
  },
  {
    id: 3,
    slug: "pamelas-pampered-pets-booking-system-website",
    name: "Pamela’s Pampered Pets",
    description: "This project showcases our expertise in creating user-friendly booking systems, an essential tool for busy pet care professionals like you.  See how we helped this pet sitting service streamline their operations and improve customer satisfaction.",
    image: "/images/pamelahome.gif",
    url:"https://www.hellopamela.com"
  }, 
  {
    id: 1,
    slug: "eyewear-ecommerce-platform-ar-try-on", 
    name: "Eyewear E-commerce Platform",
    description: "This project demonstrates our ability to create engaging online shopping experiences. We developed an e-commerce platform with a user-friendly interface, advanced product customization, and an innovative virtual try-on experience.",
    image: "/images/eyewear.gif",
    url:"https://woeinvests.wixstudio.io/eyewear" 
  },
  {
    id: 2,
    slug: "nellacqua-sustainable-swimwear-ecommerce-northampton", 
    name: "Nell'Acqua",
    description: "We helped this eco-conscious swimwear brand launch a stunning e-commerce website that drives sales. We focused on user experience and impactful promotions to achieve a significant sales boost.",
    image: "/images/Nellaaqua.gif",
    url:"https://woeinvests.wixstudio.io/eyewear"
  }, 
  {
    id: 5,
    slug: "snip-barbers-website-washington-dc",
    name: "Snip Barbers",
    description: "We transformed Snip Barbers' online presence with a sleek, user-friendly website and a seamless booking system, resulting in increased appointments and enhanced client engagement.",
    image: "/images/snip.gif",
    url:"https://woeinvests.wixstudio.io/eyewear"
  },
  {
    id: 8,
    slug: "poppy-lily-handcrafted-toys-ecommerce-website", 
    name: "Poppy & Lily",
    description: "Poppy & Lily needed an online store that reflected their brand's charm and provided a seamless shopping experience. We delivered a captivating e-commerce solution with intuitive navigation and beautiful product displays.",
    image: "/images/poppynlilly.gif",
    url:"https://woeinvests.wixstudio.io/poppynlilly"
  },
  {
    id: 9,
    slug: "puffers-ecommerce-website-global-reach", 
    name: "Puffers Winter Shop",
    description: "We created a captivating e-commerce experience for Puffers, with intuitive navigation, dynamic product displays, and a seamless checkout process. We can bring this same expertise to your Northampton business.",
    image: "/images/puffer.gif",
    url:"https://woeinvests.wixstudio.io/puffers"
  },
  {
    id: 10,
    slug: "larissa-coleman-real-estate-website-washington-dc",
    name: "Larissa Coleman Real Estate",
    description: "This project highlights our ability to combine stunning visuals with comprehensive information to create an engaging website experience. We helped Larissa Coleman Real Estate captivate their target audience.",
    image: "/images/larrisa.gif",
    url:"https://woeinvests.wixstudio.io/larissacoleman"
  }
];

const PortfolioSection = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      setIsMobileView(isMobile);
      trackEvent("Portfolio Section", "Layout Change", isMobile ? "Mobile" : "Desktop");
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Track when the section is rendered
    trackEvent("Portfolio Section", "View", "Section Rendered");
  }, []);

  const handleHover = (id) => {
    setHoveredId(id);
    trackEvent("Portfolio Section", "Hover", `Hovered on item ID: ${id}`);
  };

  const handleItemClick = (name) => {
    trackEvent("Portfolio Section", "Click", `Clicked on: ${name}`);
  };

  return (
    <>
      <Helmet>
        <title>Pet Care Website Design Portfolio | Northampton | Tail Wagging Web Design</title>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/images/Tailwaggingwebdesignlogo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* */}
        <meta
          name="description"
          content="View our portfolio of custom websites for pet care businesses in Northampton. See how we help dog walkers, vets, and groomers [1] grow online with SEO."
        />

        {/* */}
        <meta
          name="keywords"
          content="pet care web design Northampton, dog walker website design, pet sitter website design Northampton, website design for pet care professionals, pet care website development Northampton, Northampton dog groomer web design, web design for vets Northampton, pet boarding website design Northampton, dog training website design Northampton" 
        />

        {/* */}
        <meta name="author" content="Tail Wagging Web Design Factory" />

        {/* */}
        <meta property="og:title" content="Pet Care Website Design Portfolio | Northampton | Tail Wagging Web Design" />
        <meta
          property="og:description"
          content="See our work and how we create stunning websites for pet care pros in Northampton[1]!"
        />
        <meta property="og:image" content="https://www.tailwaggingwebdesign.com/images/Tailwaggingwebdesignlogo.png" />
        <meta property="og:url" content="https://www.tailwaggingwebdesign.com/portfolio" />
        <meta property="og:type" content="website" />

        {/* */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pet Care Website Design Portfolio | Northampton | Tail Wagging Web Design" />
        <meta
          name="twitter:description"
          content="Tail Wagging Web Design: Beautiful, high-performing websites for pet care businesses in Northampton[1]."
        />
        <meta name="twitter:image" content="https://www.tailwaggingwebdesign.com/assets/Tailwaggingwebdesign.png" />
        <meta name="twitter:site" content="@woeinvests" />

        {/* */}
        <link rel="canonical" href="https://www.tailwaggingwebdesign.com/portfolio" />

        {/* */}
        <meta name="robots" content="index, follow" />

        {/* */}
        <meta name="theme-color" content="#ffffff" />

        {/* */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Portfolio - Tail Wagging Web Design",
            "url": "https://www.tailwaggingwebdesign.com/portfolio",
            "description": "Explore our portfolio of SEO-optimized websites for pet care professionals in Northampton. Discover how we help businesses grow online.",
            "mainEntity": portfolioItems.map(({ name, description, image, slug, url }) => ({
              "@type": "CreativeWork",
              "name": name,
              "description": description,
              "url": `https://www.tailwaggingwebdesign.com/portfolio/${slug}`,
              "image": image,
              "creator": {
                "@type": "Organization",
                "name": "Tail Wagging Web Design Factory",
                "url": "https://www.tailwaggingwebdesign.com",
              },
            })),
          })}
        </script>
      </Helmet>


      <section className="bg-yellow-50 py-10 xs:py-12 sm:py-16 min-h-[calc(100vh-64px)]">
        <div className="w-full max-w-7xl mx-auto px-4 xs:px-6 sm:px-8">
          <motion.h2
            className="text-3xl xs:text-4xl sm:text-5xl font-semibold text-gray-900 text-center mb-6 pb-12"
            style={{
              fontSize: "clamp(1.5rem, 3vw + 1rem, 3.5rem)",
            }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Portfolio
          </motion.h2>
          <p className="text-base xs:text-sm text-center sm:text-lg  md:text-xl text-gray-900 m-2 p-8">Take a look at some of my recent projects, where I’ve crafted custom websites for pet care professionals that resonate with local pet owners and build trust. Each site is designed not just to look great but to make a real impact—whether it’s increasing bookings, showcasing the dedication of pet care experts, or boosting online visibility</p>
          <p className="text-base xs:text-sm text-center sm:text-lg  md:text-xl text-gray-900 m-2 p-4">These projects highlight the value of working with a web designer who truly understands your industry. I create personalized websites tailored to your business, delivering real results—like ranking higher in searches for 'SEO-focused web development for pet care' and boosting your online visibility to connect with more clients in Northampton.</p>


          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <Suspense fallback={<div>Loading...</div>} key={item.id}>
                <div
                  className="w-full relative bg-yellow-100 rounded-lg overflow-hidden shadow-md transition-shadow hover:shadow-lg flex flex-col"
                  style={{ height: "100%" }}
                  onMouseEnter={() => handleHover(item.id)} // Track hover
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Image */}
                  <div className="h-60 w-full">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-grow p-6">
                    <h3 className="text-lg sm:text-xl md:text-2xl text-gray-800 font-semibold mb-4 text-center">
                      {item.name}
                    </h3>
                    <p className="text-sm sm:text-md md:text-lg text-gray-700 mb-6 text-center space-y-3 flex-grow">
                      {item.description}
                    </p>

                    {/* Button */}
                    <div className="mt-auto flex justify-center">
                      <Link to={`/portfolio/${item.slug}`}>
                        <motion.button
                          className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 xs:py-3 xs:px-6 sm:py-3 sm:px-8 text-sm xs:text-base sm:text-lg rounded-full transition duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleItemClick(item.name)} // Track click
                        >
                          View Case Study
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Suspense>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioSection;
