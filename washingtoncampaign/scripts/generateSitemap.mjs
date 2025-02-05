// // Import necessary modules
// import { SitemapStream, streamToPromise } from 'sitemap';
// import { writeFileSync } from 'fs';
// import path from 'path';

// // Base URL of your website
// const BASE_URL = 'https://websites-design-factory-on-the-web.com';

// // Define your static paths
// const paths = [
//   { url: '/', changefreq: 'daily', priority: 1.0 },
//   { url: '/pet-care-web-design-portfolio-northampton', changefreq: 'weekly', priority: 0.8 },
//   { url: '/contact', changefreq: 'monthly', priority: 0.5 },
//   { url: '/', changefreq: 'monthly', priority: 0.5 },
//   { url: '/pet-care-website-design-northampton', changefreq: 'monthly', priority: 0.5 },
//   { url: '/website-design-questionnaire', changefreq: 'monthly', priority: 0.5 },
//   { url: '/blog', changefreq: 'monthly', priority: 0.5 },
//   { url: '/dm-hedges-landscaping-website-northampton', changefreq: 'monthly', priority: 0.5 },
//   { url: '/pamelas-pampered-pets-booking-system-website', changefreq: 'monthly', priority: 0.5 },

// ];

// // Function to generate the sitemap
// const generateSitemap = async () => {
//   try {
//     // Create a SitemapStream instance
//     const sitemapStream = new SitemapStream({ hostname: BASE_URL });

//     // Write static paths to the sitemap
//     paths.forEach((path) => sitemapStream.write(path));

//     // End the stream
//     sitemapStream.end();

//     // Convert the stream to a string and write it to a file
//     const sitemapXML = await streamToPromise(sitemapStream);
//     const sitemapPath = path.resolve('public', 'sitemap.xml');
//     writeFileSync(sitemapPath, sitemapXML.toString());
//     console.log(`Sitemap successfully generated at ${sitemapPath}`);
//   } catch (error) {
//     console.error('Error generating sitemap:', error);
//   }
// };

// // Run the generator
// generateSitemap();



// Import necessary modules
import { SitemapStream, streamToPromise } from 'sitemap';
import { writeFileSync } from 'fs';
import path from 'path';

// Array of base URLs for the two domains
const BASE_URLS = [
  'https://websites-design-factory-on-the-web.com',
  'https://tailwaggingwebdesign.com',
];

// Define your static paths
const paths = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/pet-care-web-design-portfolio-northampton', changefreq: 'weekly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.5 },
  { url: '/pet-care-website-design-northampton', changefreq: 'monthly', priority: 0.5 },
  { url: '/website-design-questionnaire', changefreq: 'monthly', priority: 0.5 },
  { url: '/blog', changefreq: 'monthly', priority: 0.5 },
  { url: '/dm-hedges-landscaping-website-northampton', changefreq: 'monthly', priority: 0.5 },
  { url: '/pamelas-pampered-pets-booking-system-website', changefreq: 'monthly', priority: 0.5 },
];

// Function to generate the sitemap for each domain
const generateSitemaps = async () => {
  try {
    // Iterate over the base URLs
    for (const BASE_URL of BASE_URLS) {
      // Create a SitemapStream instance for the current domain
      const sitemapStream = new SitemapStream({ hostname: BASE_URL });

      // Write static paths to the sitemap
      paths.forEach((path) => sitemapStream.write(path));

      // End the stream
      sitemapStream.end();

      // Convert the stream to a string and write it to a file
      const sitemapXML = await streamToPromise(sitemapStream);
      const domainName = new URL(BASE_URL).hostname.replace(/\./g, '-'); // Replace dots with hyphens for the filename
      const sitemapPath = path.resolve('public', `sitemap-${domainName}.xml`);
      writeFileSync(sitemapPath, sitemapXML.toString());

      console.log(`Sitemap successfully generated for ${BASE_URL} at ${sitemapPath}`);
    }
  } catch (error) {
    console.error('Error generating sitemaps:', error);
  }
};

// Run the generator
generateSitemaps();
