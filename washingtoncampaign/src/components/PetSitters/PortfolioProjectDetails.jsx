import React from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async"; 

const projectData = [
  {
    id: 0,
    slug: "pawsome-pet-sitting-website", 
    title: "Pawsome Pet Sitting",
    client: "Confidential",
    industry: "Pet Care",
    description:
      "A vibrant website redesign for a local pet sitting service, featuring mobile responsiveness and user-friendly navigation.",
    challenges: [
      "Creating a playful yet professional design.",
      "Ensuring seamless functionality across devices.",
      "Integrating an appointment booking system.",
    ],
    solutions: [
      "Used a responsive design approach to cater to mobile and desktop users.",
      "Implemented a robust booking system for scheduling services.",
      "Enhanced visual appeal with custom illustrations and animations.",
    ],
    results: [
      "Increased client bookings by 30% in the first month.",
      "Enhanced user experience with positive feedback from clients.",
    ],
    technologies: ["React.js", "Tailwind CSS", "Node.js"],
    testimonial:
      "The redesign exceeded our expectations! We've seen a significant increase in client engagement.",
    images: ["/images/parrot.png", "/images/littledog.gif"],
    callToAction:
      "Need a playful and professional website for your pet care business? Contact us today!",
    url: "https://example.com/pawsome",
  },
  {
    id: 1,
     slug: "eyewear-ecommerce-platform-ar-try-on",
    title: "Eyewear E-commerce Platform with AR Try-on",
    client: "Confidential",
    industry: "Eyewear Retail",
    description:
      "Developed a cutting-edge e-commerce platform featuring advanced product customization and a virtual try-on experience powered by augmented reality.",
    challenges: [
      "Implementing a seamless virtual try-on feature.",
      "Ensuring a responsive design for multiple devices.",
      "Integrating a product customization tool.",
    ],
    solutions: [
      "Used AR technology for interactive virtual try-on.",
      "Developed a mobile-first responsive design.",
      "Created a custom product configurator for eyewear options.",
    ],
    results: [
      "Achieved a 40% increase in sales within three months.",
      "Enhanced user engagement with a 50% increase in session duration.",
    ],
    technologies: ["React.js", "Node.js", "MongoDB", "WebAR"],
    testimonial:
      "The virtual try-on feature is a game-changer! Our customers love it, and sales are up.",
    images: ["/images/eyewear.png", ],
    callToAction:
      "Looking to enhance your online presence with AR technology? Contact us today!",
    url: "https://woeinvests.wixstudio.com/eyewear",
  },
  {
  id: 2,
  slug: "nellacqua-sustainable-swimwear-ecommerce-northampton",
  title: "Nell'Acqua: A Sustainable Swimwear E-commerce Site Making Waves (in Northampton!)",
  client: "Nell'Acqua",
  industry: "E-commerce / Swimwear / Sustainable Fashion / Web Design Northampton",
  location: "Northampton, UK",
  description:
    "This project involved creating a visually captivating and functional e-commerce platform for Nell'Acqua, a sustainable swimwear brand based in Northampton. The website showcases their commitment to eco-friendly practices while providing a seamless and engaging shopping experience for customers worldwide. This case study highlights our expertise in e-commerce development, UX design, and visual storytelling, skills that are highly valuable to businesses in Northampton and beyond.",
  challenges: [
    "Brand Representation: Ensuring the website accurately reflects Nell'Acqua’s sustainability ethos and high-end swimwear aesthetic.",
    "Dynamic Product Catalog: Organizing various swimwear categories (One Piece, Two Piece) for easy browsing and product discovery.",
    "Promotional Highlights: Integrating seasonal promotions (e.g., 'Save 30% with Code SC2035') to drive conversions and sales.",
    "Global Usability: Ensuring seamless shopping for a worldwide audience with optimized navigation, multilingual support, and a currency-friendly setup.",
    "Responsive Design: Creating a responsive platform to provide a consistent and enjoyable experience across all devices (desktops, tablets, and smartphones)."
  ],
  solutions: [
    "Hero Section with Promotions: Designed a visually striking hero section showcasing Nell'Acqua's 'Ultimate Swimwear' with high-quality visuals and clear CTAs like 'Shop All.' Prominently featured promotional banners for discounts to encourage immediate purchases.",
    "Category-Based Navigation: Implemented intuitive navigation for product categories (One Piece, Two Piece) with real-time filters for price, size, and color. Added sorting options like 'Recommended' to streamline user experience.",
    "Dynamic Product Listings: Developed detailed product pages displaying price, eco-friendly materials, and multiple views (e.g., front, back, close-up). Incorporated tags like 'Sale,' 'Best Seller,' and 'New' to highlight key items.",
    "Sustainability Section: Created a dedicated section to highlight eco-friendly practices, such as recyclable packaging and responsibly sourced fabrics, reinforcing the brand’s commitment to sustainability.",
    "Mobile Optimization: Designed a fully responsive site to ensure seamless shopping, browsing, and checkout on any device.",
    "Social Media Integration: Embedded Instagram, Facebook, and TikTok feeds to connect with customers and showcase user-generated content under #NellAcqua.",
    "Newsletter Signup: Integrated a subscription form offering a discount for first-time customers to build an email list and foster customer loyalty.",
    "Content and Policies: Added transparency through clearly outlined policies, including Terms & Conditions, Refunds, Shipping, and Accessibility Statements."
  ],
  results: [
    "Increased Sales: Achieved a 45% boost in sales during the promotional campaign using the 'SC2035' discount code.",
    "Enhanced Customer Engagement: Increased average session duration by 40%, driven by intuitive navigation and dynamic product listings.",
    "Global Audience Reach: Attracted international customers with user-friendly features like responsive design, global shipping details, and promotional discounts.",
    "Brand Loyalty: Captured over 5,000 newsletter sign-ups within the first three months, strengthening customer relationships."
  ],
  technologies: [
    "Wix Studio: Website-building platform.",
    "Responsive Design Framework: Optimized for all devices.",
    "SEO Optimization: Improved organic search rankings.",
    "Social Media Integration: Embedded Instagram, TikTok, and Facebook."
  ],
  testimonial:
    "Nell'Acqua’s new website beautifully captures our brand's ethos and makes shopping an absolute breeze for our customers. The promotions and eco-friendly storytelling have resonated with our audience, and sales have been amazing!",
  images: [
    "/images/nellacqua.png",

  ],
  callToAction:
    "Looking for a web design agency in Northampton to create a stunning and functional e-commerce website? Contact us today to elevate your online presence and drive sales!",
  url: "https://woeinvests.wixstudio.io/nellacqua"
  },
  {
  id: 3,
  slug: "pamelas-pampered-pets-booking-system-website", 
  title: "Pamela’s Pampered Pets: Comprehensive Booking System and Website Development",
  client: "Pamela Marbett, Owner of Pamela’s Pampered Pets",
  industry: "Pet Care Services",
  description:
    "Pamela Marbett, with over 20 years of experience in pet care, initially required a booking form to streamline client appointments. After successful implementation, we expanded the project to develop a full-fledged website to enhance her online presence and service accessibility.",
  challenges: [
    "Creating an intuitive booking form that accommodates various services, including daily walks, special needs care, pet sitting, and overnight stays.",
    "Developing a user-friendly website that reflects Pamela’s extensive experience and gentle care approach.",
    "Ensuring the platform is responsive and accessible across all devices."
  ],
  solutions: [
    "Designed and implemented a comprehensive booking form allowing clients to easily schedule services, specify pet needs, and receive confirmations.",
    "Developed a responsive website featuring service descriptions, client testimonials, and an about section highlighting Pamela’s credentials and experience.",
    "Integrated SEO best practices to improve online visibility and search engine ranking."
  ],
  results: [
    "Streamlined the booking process, reducing manual scheduling efforts by 60%.",
    "Increased client engagement through an informative and accessible online platform.",
    "Enhanced online presence, leading to a 40% increase in new client inquiries within the first three months post-launch."
  ],
  technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "TailwindCSS"],
  testimonial:
    "The new booking system and website have transformed how I manage my business. Clients find it easy to schedule services, and I’ve noticed a significant uptick in new inquiries. The website truly reflects my passion and dedication to pet care.",
  images: [

    "/images/pamela-home.png"
  ],
  callToAction:
    "Looking to enhance your pet care business with a seamless booking system and engaging website? Contact us to discuss how we can help elevate your services.",
  url: "https://hellopamela.com/"
  },
  {
    id: 4,
    slug: "dm-hedges-landscaping-website-northampton",
    title: "DM Hedges: Landscaping Website for Northampton Gardens",
    client: "DM Hedges",
    industry: "Landscaping / Garden Maintenance / Web Design Northampton",
    location: "Northamptonshire, UK",
    description:
      "This project showcases our ability to create effective websites for local businesses like DM Hedges, a landscaping company in Northamptonshire. We focused on showcasing their services (hedge cutting, shrub shaping, ivy removal), optimizing for local SEO, and driving conversions with clear calls to action. This case study is perfect for Northampton businesses looking to enhance their online presence and attract more clients.",
    challenges: [
      "Service Showcase: Presenting multiple services in a visually appealing and easy-to-understand manner.",
      "Local SEO Optimization: Ensuring the website ranks well in local searches.",
      "Customer Engagement: Implementing features to boost conversions (free quotes, offers, testimonials).",
      "Responsive Design: Providing a seamless experience across all devices.",
      "Trust and Transparency: Building credibility as a local landscaping expert."
    ],
    solutions: [
      "Engaging Hero Section: Designed a hero section with a clear tagline and a 'Get a Free Quote' CTA.",
      "Service Showcase: Developed a visually engaging 'My Services' section with detailed pages for each service.",
      "Promotional Offers: Integrated promotional banners with a 'Get Offer' CTA.",
      "Service Stories: Created a section to demonstrate real results and customer satisfaction.",
      "Responsive Design: Ensured the website is fully responsive across all devices.",
      "Local SEO Optimization: Optimized the website with location-based keywords.",
      "Trust-Building Elements: Incorporated a FAQ section and a detailed 'About DM Hedges' page.",
      "Social Media Integration: Linked to DM Hedges’ social media accounts."
    ],
    results: [
      "Increased Client Inquiries: 35% increase in free quote requests.",
      "Enhanced Local Visibility: Boosted search engine rankings.",
      "Improved Engagement: Increased average time spent on site by 50%.",
      "Higher Conversion Rates: 25% increase in service bookings."
    ],
    technologies: [
      "Vercel: Hosting platform.",
      "Responsive Design Framework: Ensures accessibility on all devices.",
      "SEO Optimization: Improves visibility in local search results.",
      "ReactJS, TailwindCSS, Express for backend NodeJS.",
      "Social Media Integration: Enhances online presence and customer engagement."
    ],
    testimonial:
      "The new website has been a game-changer for my business. Clients love how easy it is to navigate, and the free quote feature has brought in more inquiries than ever before!",
    images: [
      "/images/dmhedgesmockup.png"
    ],
    callToAction:
      "Need a professional website to grow your business in Northamptonshire? Contact us today!",
    url: "https://dmhedges.vercel.app/"
  },
  {
  id: 5,
  slug: "snip-barbers-website-washington-dc", 
  title: "Snip Barbers: A Sharp Website for a Cutting-Edge Barber",
  client: "Snip Barbers",
  industry: "Barber Shop / Men's Grooming / Appointment Booking",
  location: "Washington, DC",
  description:
    "This project involved crafting a sleek and user-friendly website for a modern barber shop. It showcases our ability to create online experiences that not only look great but also drive bookings and engagement – skills that are highly relevant to businesses in Northampton, especially those in the pet care industry who rely on online scheduling and visual appeal.",
  challenges: [
    "Limited online visibility with an outdated or non-existent website.",
    "Manual appointment booking processes leading to inefficiencies.",
    "Lack of an online portfolio to showcase hairstyles and services."
  ],
  solutions: [
    "Website Design: Created a visually appealing, user-friendly website that reflects the brand's identity and appeals to the target audience. We understand the importance of creating a strong first impression, which is crucial for pet care businesses as well.",
    "Online Booking System: Integrated a seamless appointment scheduling system, allowing clients to book services online at their convenience. This feature is essential for busy pet owners in Northampton who need a quick and easy way to schedule appointments.",
    "Service Showcase: Developed dedicated sections to display available services, pricing, and a gallery of hairstyles to attract potential clients. Similarly, pet care businesses can showcase their services, packages, and happy clients.",
    "Mobile Optimization: Ensured the website is fully responsive, providing an optimal experience across all devices. This is crucial for reaching pet owners who often use their phones to find and book services."
  ],
  results: [
    "Increased online appointment bookings by 70% within the first two months post-launch.",
    "Enhanced client engagement, leading to a 50% increase in new client inquiries.",
    "Improved online presence, resulting in higher search engine rankings and increased website traffic."
  ],
  technologies: ["Wix Studio", "Responsive Design", "SEO Optimization"],
  testimonial:
    "The new website has significantly improved our business operations. Clients appreciate the ease of online booking, and we've seen a substantial increase in new appointments.",
  images: [
    "/images/Snipmock.png"
  ],
  callToAction:
    "Looking to elevate your business with a professional online presence in Northampton? Whether you're a pet care provider, a stylish salon, or any local business, we can help you achieve your goals. Contact us today to discuss your project!",
  url: "https://woeinvests.wixstudio.com/barber"
  },
  {
    id: 7,
    slug: "pawfectcare-pet-business-services-website",
    title: "PawfectCare: The Website That Unleashed Growth for Pet Care Businesses",
    client: "PawfectCare",
    industry: "Pet Care / Business Services / SaaS / Northampton",
    location: "Relevant to Northampton (Exact location not specified)",
    description:
      "This project involved creating a dynamic website for PawfectCare, a company dedicated to helping pet care businesses thrive. We focused on building a platform that not only looks amazing but also drives user engagement and boosts conversions – skills that are highly valuable to businesses in Northampton and beyond.",
    challenges: [
      "Creating a professional and visually appealing platform to showcase services and offerings.",
      "Ensuring seamless navigation for users to explore services, testimonials, and contact options.",
      "Implementing a responsive design to provide a consistent user experience across all devices.",
      "Establishing strong calls-to-action (CTAs) to drive sign-ups and inquiries."
    ],
    solutions: [
      "Engaging Hero Section: Designed an impactful hero section with a clear value proposition: 'Boost Your Pet Business with Our Services.' Included visually appealing imagery of happy pets and pet owners to resonate with the target audience. Integrated a prominent CTA ('Sign Up Today') to encourage immediate action.",
      "Service Highlight Section: Developed a visually rich service showcase section with key benefits and offerings. Highlighted how PawfectCare helps businesses enhance efficiency and customer satisfaction.",
      "Testimonials Integration: Added a testimonials section featuring feedback from pet care professionals, building trust and credibility.",
      "Recognition Display: Showcased awards and recognition badges ('#1 Pet Care Service Enhancer') to reinforce the brand’s authority in the industry.",
      "Mobile Optimization: Ensured the site is fully responsive for an optimal browsing experience on desktops, tablets, and mobile devices.",
      "Streamlined Navigation: Implemented an intuitive menu with easy access to services, testimonials, and contact options."
    ],
    results: [
      "Increased User Engagement: Enhanced visitor engagement with interactive elements and visually appealing design.",
      "Boosted Sign-Ups: Achieved a significant increase in service sign-ups due to clear CTAs and streamlined navigation.",
      "Improved Brand Recognition: Built trust and credibility through testimonials and industry recognition.",
      "Responsive Design Success: Provided a seamless user experience across devices, ensuring accessibility for all visitors."
    ],
    technologies: ["Responsive Design", "SEO Optimization", "Interactive UI Features"],
    testimonial:
      "PawfectCare's new website truly reflects our mission. Our clients love the ease of navigation and the professional look, and we've seen a noticeable uptick in sign-ups since the launch.",
    images: [
      "/images/pwfectcare.gif",
      "/images/pawfectcare_services.png",
      "/images/pawfectcare_testimonials.png"
    ],
    callToAction:
      "Want to transform your business with a professional website in Northampton? Whether you're in pet care, retail, or any other industry, we can help you achieve your goals. Contact us today to discuss your project!",
    url: "https://woeinvests.wixstudio.com/pawfectcare"
  },

  {
  id: 8,
  slug: "poppy-lily-handcrafted-toys-ecommerce-website", 
  title: "Poppy & Lily: Handcrafted Wooden Toys E-commerce Website",
  client: "Poppy & Lily",
  industry: "Handcrafted Wooden Toys",
  location: "[Location]",
  description:
    "Poppy & Lily creates timeless, handcrafted wooden toys designed to inspire creativity and joy in children. To share their passion and unique products with a wider audience, they needed an online store that reflected their brand's charm and provided a seamless shopping experience. This project demonstrates our ability to create engaging e-commerce websites that drive sales and enhance brand storytelling – skills that are valuable to businesses in Northampton and beyond.",
  challenges: [
    "Limited online visibility and an outdated website design.",
    "Manual order processing leading to inefficiencies.",
    "Lack of mobile responsiveness, hindering the user experience."
  ],
  solutions: [
    "Website Redesign: Developed a modern, responsive website with intuitive navigation and engaging visuals to showcase products and tell the Poppy & Lily brand story.",
    "E-commerce Integration: Implemented a user-friendly e-commerce platform, allowing customers to browse products, add items to their cart, and complete purchases seamlessly. This included secure payment gateway integration and order management tools.",
    "Search Engine Optimization (SEO): Applied SEO strategies to improve search rankings and increase organic traffic, ensuring the website is easily found by those seeking high-quality wooden toys.",
    "Mobile Optimization: Ensured the website is fully responsive, providing an optimal experience across all devices, recognizing that customers often shop online using their phones and tablets."
  ],
  results: [
    "Achieved a significant increase in website traffic within the first month post-launch.",
    "Reduced order processing time through the automated e-commerce system.",
    "Improved customer engagement, leading to an increase in sales and positive customer feedback."
  ],
  technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Bootstrap"],
  testimonial:
    "The new website has transformed our business. Customers find it easier to shop, and our online presence has never been stronger.",
  images: [
    "/images/poppynlilly.gif",
  ],
  callToAction:
    "Looking to elevate your business in Northampton? Whether you need an e-commerce store, a captivating website to showcase your services, or a digital strategy to reach more customers, we can help. Contact us today to discuss your project!",
  url: "https://woeinvests.wixstudio.com/poppynlilly"
  },
  {
    id: 9,
    slug: "puffers-ecommerce-website-global-reach",
    title: "Puffers: An E-commerce Website with Global Reach (and Northampton-Ready Skills!)",
    client: "Puffers",
    industry: "E-commerce / Apparel / Fashion / Web Design Inspiration",
    location: "Miami, Florida (But with techniques applicable to Northampton businesses)",
    description:
      "This project involved designing and developing a sleek and functional e-commerce website for Puffers, a brand specializing in everyday essential apparel. Though Puffers is based in Miami, this project showcases key e-commerce and user experience (UX) elements that are highly relevant to businesses in Northampton looking to sell online or enhance their digital presence.",
    challenges: [
      "Complex Product Catalog: Organizing a wide range of products (men's, women's, accessories) into intuitive categories for easy browsing.",
      "Visual Appeal: Creating a modern and engaging design that reflects the Puffers brand identity and resonates with a fashion-forward audience.",
      "Responsive Design: Ensuring a seamless user experience across all devices (desktops, tablets, smartphones).",
      "Conversion Optimization: Encouraging purchases with clear CTAs, promotions, and streamlined checkout processes.",
      "Seasonal Promotions: Highlighting seasonal collections and sales to boost conversions during peak shopping periods."
    ],
    solutions: [
      "Hero Section with Impactful Visuals: Designed a hero section featuring Puffers' 'Winter Collection' with engaging images and a bold 'Shop Now' CTA. Highlighted free worldwide shipping to attract international customers.",
      "Shop by Category: Developed intuitive category-based navigation (Men, Women, Accessories) for quick product discovery. Included real-time stock and promotional tags ('New In,' 'Best Seller,' 'Sale').",
      "Dynamic Product Listings: Implemented dynamic product listings showcasing key details (pricing, discounts, color options). Added hover effects for product previews.",
      "Seasonal Promotions: Created dedicated sections for sales ('End of the Season Last Catch') to drive urgency. Integrated a 'New In' section for new products.",
      "Mobile Optimization: Ensured full responsiveness across devices for seamless browsing, shopping, and checkout.",
      "Social Media Integration: Embedded an Instagram gallery (#puffers) to connect with the brand's social audience.",
      "Content Pages: Developed an 'Our Story' page and policy pages (Privacy Policy, Refund Policy) for transparency and trust.",
      "Global Reach: Emphasized free worldwide shipping to cater to an international audience."
    ],
    results: [
      "Increased Sales: Achieved a 40% boost in sales during seasonal campaigns.",
      "Enhanced User Engagement: Improved engagement with dynamic visuals and intuitive navigation (50% increase in average session duration).",
      "Higher Conversion Rates: Streamlined checkout and clear CTAs drove higher conversion rates.",
      "Global Customer Base: Attracted international customers with free shipping and a user-friendly interface."
    ],
    technologies: [
      "Wix Studio: Website building platform.",
      "Responsive Design: Ensuring optimal viewing across devices.",
      "SEO Optimization: Improving search engine visibility.",
      "Social Media Integration: Connecting with social media audiences."
    ],
    testimonial:
      "The Puffers website perfectly captures our brand identity while providing a seamless shopping experience. We've seen a significant increase in sales and positive feedback!",
    images: [
      "/images/puffer-mock.png"
    ],
    callToAction:
      "Looking for a web design agency in Northampton to create a stunning and functional e-commerce website? Contact us today to elevate your online presence and drive growth!",
    url: "https://woeinvests.wixstudio.io/puffers"
  },

  {
    id: 10,
    slug: "larissa-coleman-real-estate-website-washington-dc",
    title: "Larissa Coleman Real Estate: A Stunning Website to Captivate Washington, D.C. Homebuyers",
    client: "Larissa Coleman Real Estate",
    industry: "Real Estate / Property Listings / Washington, D.C.",
    location: "Washington, D.C.",
    description:
      "This project involved developing a captivating website for Larissa Coleman Real Estate, aimed at attracting potential homebuyers in the vibrant Washington, D.C. market. It showcases our expertise in creating stunning, user-friendly websites that drive engagement and conversions – skills that are highly transferable to businesses across various industries, including those in Northampton.",
    challenges: [
      "Creating a platform that effectively showcases property listings and neighborhood information in the competitive Washington, D.C. market.",
      "Ensuring the website is easy to navigate, allowing visitors to find relevant information seamlessly.",
      "Implementing a responsive design to provide an optimal viewing experience across various devices."
    ],
    solutions: [
      "Engaging Website Design: Crafted a visually appealing and intuitive website that reflects the brand's identity and appeals to the discerning tastes of Washington, D.C. homebuyers. We understand the importance of making a strong first impression, which is crucial for any business, including those in the pet care sector.",
      "Comprehensive Property Listings: Integrated a robust system to display current property listings with detailed information, high-quality images, and virtual tours, making it easy for potential buyers to explore homes in Washington, D.C.",
      "In-Depth Neighborhood Information: Developed dedicated sections to provide insights into various Washington, D.C. neighborhoods, including amenities, schools, and local attractions, helping clients make informed decisions.",
      "Responsive Design: Ensured the website is fully responsive, providing an optimal viewing experience across all devices, catering to the tech-savvy residents of Washington, D.C."
    ],
    results: [
      "Increased Website Traffic: Significantly boosted online visibility and attracted more potential clients in the Washington, D.C. area.",
      "Enhanced User Experience: Created a seamless and enjoyable browsing experience, leading to longer website visits and higher engagement.",
      "Improved Lead Generation: Generated more qualified leads through effective calls to action and contact forms."
    ],
    technologies: ["Wix Studio", "Responsive Design", "SEO Optimization", "Virtual Tours Integration"],
    testimonial:
      "The new website has revolutionized our online presence. Clients are impressed by the stunning design and comprehensive property information, and we've seen a significant increase in inquiries.",
    images: [
      "/images/real-estate.png",
    
    ],
    callToAction:
      "Looking to elevate your business with a professional website in Northampton? Whether you're in real estate, pet care, or any other industry, we can help you achieve your goals. Contact us today to discuss your project!",
    url: "https://woeinvests.wixstudio.com/larissacoleman"
  }

];



// const ProjectDetails = () => {
//   const { id } = useParams();
//   const project = projectData.find((proj) => proj.id === parseInt(id, 10));

//   if (!project) {
//     return (
//       <div className="text-center py-20">
//         <h2 className="text-2xl font-bold text-gray-800">
//           Project Not Found!
//         </h2>
//         <Link to="/portfolio">
//           <button className="mt-4 px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-white font-bold rounded-lg">
//             Back to Portfolio
//           </button>
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <article className="min-h-screen bg-yellow-50">
//       <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12">
//         <motion.div
//           className="bg-yellow-100 rounded-lg shadow-lg"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <img
//             src={project.images[0]}
//             alt={`${project.title} Homepage`}
//             className="w-full h-72 object-cover rounded-t-lg"
//           />
//           <div className="p-8">
//             <header>
//               <h1 className="text-3xl font-bold text-gray-900">{project.title}</h1>
//               <p className="text-gray-600 mt-2 italic">Client: {project.client}</p>
//               <p className="text-gray-600">Industry: {project.industry}</p>
//             </header>
//             <section className="mt-6">
//               <h2 className="text-2xl font-semibold text-gray-800">Overview</h2>
//               <p className="text-gray-700 mt-2">{project.description}</p>
//             </section>
//             <section className="mt-6">
//               <h2 className="text-2xl font-semibold text-gray-800">Challenges</h2>
//               <ul className="list-disc list-inside text-gray-600 mt-2">
//                 {project.challenges.map((challenge, index) => (
//                   <li key={index}>{challenge}</li>
//                 ))}
//               </ul>
//             </section>
//             <section className="mt-6">
//               <h2 className="text-2xl font-semibold text-gray-800">Solutions</h2>
//               <ul className="list-disc list-inside text-gray-600 mt-2">
//                 {project.solutions.map((solution, index) => (
//                   <li key={index}>{solution}</li>
//                 ))}
//               </ul>
//             </section>
//             <section className="mt-6">
//               <h2 className="text-2xl font-semibold text-gray-800">Results</h2>
//               <ul className="list-disc list-inside text-gray-600 mt-2">
//                 {project.results.map((result, index) => (
//                   <li key={index}>{result}</li>
//                 ))}
//               </ul>
//             </section>
//             <section className="mt-6">
//               <h2 className="text-2xl font-semibold text-gray-800">Technologies Used</h2>
//               <ul className="list-disc list-inside text-gray-600 mt-2">
//                 {project.technologies.map((tech, index) => (
//                   <li key={index}>{tech}</li>
//                 ))}
//               </ul>
//             </section>
//             <section className="mt-6">
//               <h2 className="text-2xl font-semibold text-gray-800">Testimonial</h2>
//               <blockquote className="border-l-4 border-yellow-400 pl-4 text-gray-700 italic mt-2">
//                 {project.testimonial}
//               </blockquote>
//             </section>
//             <div className="flex flex-col sm:flex-row items-start sm:items-center mt-8">
//               <a
//                 href={project.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 px-6 rounded-lg transition duration-300"
//               >
//                 Visit Site
//               </a>
//               <Link to="/portfolio" className="ml-0 sm:ml-4 mt-4 sm:mt-0">
//                 <button className="bg-yellow-200 hover:bg-yellow-300 text-gray-800 font-bold py-2 px-6 rounded-lg">
//                   Back to Portfolio
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </article>
//   );
// };

const ProjectDetails = () => {
  const { slug } = useParams(); // Use slug instead of id
  const project = projectData.find((proj) => proj.slug === slug); // Find project by slug

  if (!project) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-800">Project Not Found!</h2>
        <Link to="/portfolio">
          <button className="mt-4 px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-white font-bold rounded-lg">
            Back to Portfolio
          </button>
        </Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-yellow-50">

      <Helmet>
        <title>{`${project.title} | Web Design Case Study | Northampton`}</title>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/images/Tailwaggingwebdesignlogo.png" /> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content={`${project.description.substring(0, 150)}... See how we helped ${project.client} achieve ${project.results[0]}.`}
        />
        <meta
          name="keywords"
          content={`web design Northampton, ${project.industry}, ${project.title}, website design ${
            project.location || "Northampton" 
          }, ${project.technologies.join(", ")}`}
        />
        <meta property="og:title" content={`${project.title} | Web Design Case Study`} />
        <meta property="og:description" content={project.description} />
        <meta property="og:image" content={project.images[0]} /> 
        <meta property="og:url" content={`https://www.Tailwaggingwebdesign.com/portfolio/${project.slug}`} /> 
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${project.title} | Web Design Case Study`} />
        <meta name="twitter:description" content={project.description} />
        <meta name="twitter:image" content={project.images[0]} /> 
        <link rel="canonical" href={`https://www.Tailwaggingwebdesign.com/portfolio/${project.slug}`} /> 
      </Helmet>
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12">
        <motion.div
          className="bg-yellow-100 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={project.images[0]}
            alt={`${project.title} Homepage`}
            className="w-full h-72 object-cover rounded-t-lg"
          />
          <div className="p-8">
            <header>
              <h1 className="text-3xl font-bold text-gray-900">{project.title}</h1>
              <p className="text-gray-600 mt-2 italic">Client: {project.client}</p>
              <p className="text-gray-600">Industry: {project.industry}</p>
            </header>
            <section className="mt-6">
              <h2 className="text-2xl font-semibold text-gray-800">Overview</h2>
              <p className="text-gray-700 mt-2">{project.description}</p>
            </section>
            <section className="mt-6">
              <h2 className="text-2xl font-semibold text-gray-800">Challenges</h2>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                {project.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </section>
            <section className="mt-6">
              <h2 className="text-2xl font-semibold text-gray-800">Solutions</h2>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                {project.solutions.map((solution, index) => (
                  <li key={index}>{solution}</li>
                ))}
              </ul>
            </section>
            <section className="mt-6">
              <h2 className="text-2xl font-semibold text-gray-800">Results</h2>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                {project.results.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
            </section>
            <section className="mt-6">
              <h2 className="text-2xl font-semibold text-gray-800">Technologies Used</h2>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </section>
            <section className="mt-6">
              <h2 className="text-2xl font-semibold text-gray-800">Testimonial</h2>
              <blockquote className="border-l-4 border-yellow-400 pl-4 text-gray-700 italic mt-2">
                {project.testimonial}
              </blockquote>
            </section>
            <div className="flex flex-col sm:flex-row items-start sm:items-center mt-8">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 px-6 rounded-lg transition duration-300"
              >
                Visit Site
              </a>
              <Link to="/portfolio" className="ml-0 sm:ml-4 mt-4 sm:mt-0">
                <button className="bg-yellow-200 hover:bg-yellow-300 text-gray-800 font-bold py-2 px-6 rounded-lg">
                  Back to Portfolio
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </article>
  );
};

export default ProjectDetails;
