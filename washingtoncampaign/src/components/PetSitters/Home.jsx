import React from "react";
import { motion } from "framer-motion";
import Layout from "./Layout";
import HeroSection from "./HeroSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
import TestimonialsSection from "./TestimonialsSection";
import ProcessSection from "./ProcessSection";
import CallToAction from "./CallToAction";
import PricingComponent from "./PricingPlan";
import ServicesSlider from "./ServicesSlider";
import MyWorkInAction from "./MyWorkInAction";
import FAQSection from './faq/FAQSection';
import { Helmet } from "react-helmet-async";

const Home = () => {
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Tailwagging Websites Design Factory",
    "image": "/images/Tailwaggingwebdesignlogo.png",
    "url": "https://www.tailwaggingwebdesign.com",
    "telephone": "+44 07402342694",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Turners Gardens",
      "addressLocality": "Northampton",
      "addressRegion": "Northamptonshire",
      "postalCode": "NN4 6LZ",
      "addressCountry": "UK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "52.2405",
      "longitude": "-0.902656"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "15:00"
      }
    ],
    "serviceArea": {
      "@type": "AdministrativeArea",
      "name": "Northampton"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Design Packages",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Basic",
          "priceSpecification": {
            "@type": "PaymentSpecification",
            "numberOfLoanPayments": 36,
            "loanPaymentAmount": {
              "@type": "MonetaryAmount",
              "value": "79.99",
              "currency": "GBP"
            },
            "downPayment": {
              "@type": "MonetaryAmount",
              "value": "160.00",
              "currency": "GBP"
            }
          },
          "description": "Perfect for Personal Pet Care Portfolios or Small Pet Care Websites",
          "itemOffered": {
            "@type": "Service",
            "name": "Basic Web Design Package",
            "description": "Perfect for Personal Pet Care Portfolios or Small Pet Care Websites",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Tailwagging Web Designs"
            }
          }
        }
      ]
    }
  };

  const serviceLdSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Website Design for Pet Care Professionals",
  "description": "I create beautiful, user-friendly websites that help pet care businesses in Northampton attract pet owners and increase bookings.",
  "serviceType": "Web Design",
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "Northampton"
  },
  "provider": {
    "@type": "LocalBusiness",
    "name": "Tailwagging Web Designs"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Web Design Packages",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Basic",
        "priceSpecification": {
          "@type": "PaymentSpecification",
          "numberOfLoanPayments": 36,
          "loanPaymentAmount": {
            "@type": "MonetaryAmount",
            "value": "79.99",
            "currency": "GBP"
          },
          "downPayment": {
            "@type": "MonetaryAmount",
            "value": "160.00",
            "currency": "GBP"
          }
        },
        "description": "Perfect for Personal Pet Care Portfolios or Small Pet Care Websites - 36 monthly installments of £79.99 + £100.00 onboarding fee.",
        "itemOffered": {
          "@type": "Service",
          "name": "Basic Web Design Package",
          "description": "Perfect for Personal Pet Care Portfolios or Small Pet Care Websites",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Tailwagging Web Designs"
          }
        }
      },
      {
        "@type": "Offer",
        "name": "Professional",
        "priceSpecification": {
          "@type": "PaymentSpecification",
          "numberOfLoanPayments": 48,
          "loanPaymentAmount": {
            "@type": "MonetaryAmount",
            "value": "128.79",
            "currency": "GBP"
          },
          "downPayment": {
            "@type": "MonetaryAmount",
            "value": "160.00",
            "currency": "GBP"
          }
        },
        "description": "Small to Medium Businesses with Multiple Locations - 48 monthly installments of £128.79 + £120.00 onboarding fee.",
        "itemOffered": {
          "@type": "Service",
          "name": "Professional Web Design Package",
          "description": "Small to Medium Businesses with Multiple Locations",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Tailwagging Web Designs"
          }
        }
      },
      {
        "@type": "Offer",
        "name": "Enterprise",
        "priceSpecification": {
          "@type": "PaymentSpecification",
          "numberOfLoanPayments": 48,
          "loanPaymentAmount": {
            "@type": "MonetaryAmount",
            "value": "198.99",
            "currency": "GBP"
          },
          "downPayment": {
            "@type": "MonetaryAmount",
            "value": "160.00",
            "currency": "GBP"
          }
        },
        "description": "Large Businesses with Advanced Needs - 48 monthly installments of £198.99 + £160.00 onboarding fee.",
        "itemOffered": {
          "@type": "Service",
          "name": "Enterprise Web Design Package",
          "description": "Large Businesses with Advanced Needs",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Tailwagging Web Designs"
          }
        }
      }
    ]
  }
};

const websiteLdSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Tailwagging Web Designs",
  "url": "https://www.tailwaggingwebdesign.com" // Replace with your actual website URL
};


  return (
    <>
      
      <Helmet>
        <title>Pet Care Web Design & SEO Northampton | Tail Wagging Web Design Factory</title>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/images/Tailwaggingwebdesignlogo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* <!-- Meta Description --> */}
        <meta
          name="description"
          content="Boost your pet care business with expert web design and SEO services in Northampton. Specializing in websites for dog walkers, pet sitters, vets, and pet care professionals."
        />

        {/* <!-- Meta Keywords --> */}
        <meta
          name="keywords"
          content="pet care web design Northampton, dog walker website design, pet sitter website design Northampton, website design for pet care professionals, pet care website development Northampton, Northampton dog groomer web design, web design for vets Northampton, pet boarding website design Northampton, dog training website design Northampton, pet care SEO Northampton, pet-friendly website design Northampton, Northampton pet shop web design, website repairs Northampton, website maintenance Northampton, one page web design Northampton, web copywriting Northampton, PPC advertising Northampton, pet care Northampton, pet sitters Northampton, pet groomers Northampton, doggy day care Northampton, raw pet food suppliers Northampton"
        />

        {/* <!-- Author --> */}
        <meta name="author" content="Tail Wagging Web Design Factory" />

        {/* <!-- Open Graph Meta Tags --> */}
        <meta property="og:title" content="Pet Care Web Design & SEO in Northampton" />
        <meta
          property="og:description"
          content="Professional web design services in Northampton tailored for pet care businesses like pet sitters, dog walkers, groomers, and vets. Get a free consultation today!"
        />
        <meta property="og:image" content="/images/Tailwaggingwebdesignlogo.png" />
        <meta property="og:url" content="https://www.tailwaggingwebdesign.com" />
        <meta property="og:type" content="website" />

        {/* <!-- Twitter Card Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pet Care Web Design & SEO in Northampton" />
        <meta
          name="twitter:description"
          content="Looking to grow your pet care business? We design custom websites for pet care professionals in Northampton, including SEO services. Learn more today!"
        />
        <meta name="twitter:image" content="/images/Tailwaggingwebdesign.png" />
        <meta name="twitter:site" content="@woeinvests" />

        {/* <!-- Canonical URL --> */}
        <link rel="canonical" href="https://www.tailwaggingwebdesign.com" />

        {/* <!-- Robots --> */}
        <meta name="robots" content="index, follow" />

        {/* <!-- Theme Color --> */}
        <meta name="theme-color" content="#ffffff" />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLdSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceLdSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(websiteLdSchema)}
        </script>
      </Helmet>

      <Layout>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <HeroSection />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
          <ServicesSlider />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
          <PricingComponent />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }}>
          <WhyChooseUsSection />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2 }}>
          <ProcessSection />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2.5 }}>
          <CallToAction />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 3 }}>
          <MyWorkInAction />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 3.5 }}>
          <TestimonialsSection />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 4 }}>
          <FAQSection />
        </motion.div>
      </Layout>
    </>
  );
};

export default Home;
