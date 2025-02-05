
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { request } from 'graphql-request';

// const HYGRAPH_API_ENDPOINT = 'https://ap-south-1.cdn.hygraph.com/content/cm42biopg009607w3wk4e5ay2/master';

// const BlogList = () => {
//   const [Allposts, setAllposts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const { posts } = await request(
//           HYGRAPH_API_ENDPOINT,
//           `
//           {
//             posts {
//               id
//               title
//               slug
//               excerpt
//               coverImage {
//                 url
//               }
//               publishedAt
//             }
//           }
//         `
//         );

//         setAllposts(posts);
//       } catch (err) {
//         console.error('Error fetching blog posts:', err);
//         setError('Failed to fetch blog posts. Please try again.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPosts();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="blog-list bg-yellow-50 py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Blog</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {Allposts.map(({ id, title, slug, excerpt, coverImage, publishedAt }) => (
//             <div key={id} className="bg-white shadow-md rounded-lg overflow-hidden">
//               <img
//                 src={coverImage?.url || 'https://via.placeholder.com/150'}
//                 alt={title}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-6">
//                 <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
//                 <p className="text-gray-600 text-sm mb-4">{excerpt}</p>
//                 <p className="text-gray-500 text-xs">{`Published: ${new Date(
//                   publishedAt
//                 ).toLocaleDateString()}`}</p>
//                 <Link
//                   to={`/blog/${slug}`}
//                   className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full mt-4 inline-block"
//                 >
//                   Read More
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogList;


import React, { useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom';
import { request } from 'graphql-request';
import { trackEvent, trackPageView } from '../../../utils/analytics'; // Import tracking utilities
import { Helmet } from "react-helmet-async"
const HYGRAPH_API_ENDPOINT = 'https://ap-south-1.cdn.hygraph.com/content/cm42biopg009607w3wk4e5ay2/master';

const BlogList = () => {
  const [Allposts, setAllposts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { posts } = await request(
          HYGRAPH_API_ENDPOINT,
          `
          {
            posts {
              id
              title
              slug
              excerpt
              coverImage {
                url
              }
              publishedAt
            }
          }
        `
        );

        setAllposts(posts);

        // Track successful fetching of blog posts
        trackEvent('Blog List', 'Fetch Success', `${posts.length} posts loaded`);
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setError('Failed to fetch blog posts. Please try again.');

        // Track error during fetch
        trackEvent('Blog List', 'Fetch Failure', 'Error fetching posts');
      } finally {
        setLoading(false);
      }
    };

    // Track page view for the blog list
    trackPageView('/blog');

    fetchPosts();
  }, []);

  const handleReadMoreClick = (slug, title) => {
    // Track user clicking the "Read More" link
    trackEvent('Blog List', 'Read More Click', `Post: ${title}, Slug: ${slug}`);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
    
    <Helmet>
  <title>Blog - Web Design Tips & Pet Care Strategies in Northampton | Tail Wagging Web Design Factory</title>
  
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/images/Tailwaggingwebdesignlogo.png" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  {/* <!-- Meta Description --> */}
  <meta
    name="description"
    content="Explore our blog for expert web design tips, SEO strategies, and insights tailored for pet care professionals in Northampton. Learn how to grow your business with a powerful online presence."
  />
  
  {/* <!-- Meta Keywords --> */}
  <meta
    name="keywords"
    content="blog about web design Northampton, pet care business blog, web design blog Northampton, SEO tips for pet care websites, digital marketing for pet businesses, Northampton pet sitting business tips, dog groomer web design, pet trainer web design, 
    # Adding location-focused keywords
    Northampton web design blog, website design tips Northampton, SEO blog Northampton, pet care website strategies"
  />
  
  {/* <!-- Meta Author --> */}
  <meta name="author" content="Tail Wagging Web Design Factory" />

  {/* <!-- Open Graph Meta Tags --> */}
  <meta property="og:title" content="Our Blog - Web Design Tips & Pet Care Strategies in Northampton" />
  <meta
    property="og:description"
    content="Discover blog posts about web design and SEO strategies for pet care professionals in Northampton. Grow your business with expert insights from Tail Wagging Web Design Factory."
  />
  <meta property="og:image" content="/images/Tailwaggingwebdesignlogo.png" />
  <meta property="og:url" content="https://tailwaggingwebdesign.com/blog" />
  <meta property="og:type" content="website" />

  {/* <!-- Twitter Card Meta Tags --> */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Our Blog - Web Design Tips & Pet Care Strategies in Northampton" />
  <meta
    name="twitter:description"
    content="Learn how to grow your pet care business with web design and SEO tips from our Northampton-based experts. Check out the latest posts!"
  />
  <meta name="twitter:image" content="/images/Tailwaggingwebdesignlogo.png" />
  <meta name="twitter:site" content="@woeinvests" />

  {/* <!-- Canonical URL --> */}
  <link rel="canonical" href="https://www.tailwaggingwebdesign.com/blog" />

  {/* <!-- Robots --> */}
  <meta name="robots" content="index, follow" />

  {/* <!-- Theme Color --> */}
  <meta name="theme-color" content="#ffffff" />

  {/* <!-- Dynamic JSON-LD Schema --> */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Blog",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.tailwaggingwebdesign.com/blog"
      },
      "name": "Tail Wagging Web Design Blog",
      "description": "Explore web design tips and pet care business strategies in Northampton. Learn from experts at Tail Wagging Web Design Factory.",
      "url": "https://www.tailwaggingwebdesign.com/blog",
      "author": {
        "@type": "Organization",
        "name": "Tail Wagging Web Design Factory",
        "url": "https://www.tailwaggingwebdesign.com"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Tail Wagging Web Design Factory",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.tailwaggingwebdesign.com/images/logo.png"
        }
      },
      "blogPost": Allposts.map(({ title, slug, excerpt, coverImage, publishedAt }) => ({
        "@type": "BlogPosting",
        "headline": title,
        "image": coverImage?.url || "https://via.placeholder.com/150",
        "author": {
          "@type": "Organization",
          "name": "Tail Wagging Web Design Factory"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Tail Wagging Web Design Factory",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.tailwaggingwebdesign.com/images/logo.png"
          }
        },
        "datePublished": publishedAt,
        "description": excerpt,
        "url": `https://www.tailwaggingwebdesign.com/blog/${slug}`
      }))
    })}
  </script>
</Helmet>
    <div className="blog-list bg-yellow-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Blog</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Allposts.map(({ id, title, slug, excerpt, coverImage, publishedAt }) => (
            <div
              key={id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={coverImage?.url || 'https://via.placeholder.com/150'}
                alt={title}
                className="w-full h-48 object-cover"
                onClick={() => trackEvent('Blog List', 'Image Click', `Post: ${title}, Slug: ${slug}`)} // Optional image click tracking
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
                <p className="text-gray-600 text-sm mb-4">{excerpt}</p>
                <p className="text-gray-500 text-xs">{`Published: ${new Date(
                  publishedAt
                ).toLocaleDateString()}`}</p>
                <Link
                  to={`/blog/${slug}`}
                  className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full mt-4 inline-block"
                  onClick={() => handleReadMoreClick(slug, title)} // Track "Read More" clicks
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default BlogList;
