


// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { request } from 'graphql-request';

// const HYGRAPH_API_ENDPOINT = 'https://ap-south-1.cdn.hygraph.com/content/cm42biopg009607w3wk4e5ay2/master';

// const BlogDetails = () => {
//   const { slug } = useParams(); // Extract the slug from the URL
//   const [post, setPost] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPost = async () => {
//       try {
//         const { post } = await request(
//           HYGRAPH_API_ENDPOINT,
//           `
//           query GetPostBySlug($slug: String!) {
//             post(where: { slug: $slug }) {
//               id
//               title
//               slug
//               content {
//                 html
//               }
//               excerpt
//               coverImage {
//                 url
//               }
//               publishedAt
//               author {
//                 name
//                 picture {
//                   url
//                 }
//               }
//             }
//           }
//           `,
//           { slug }
//         );

//         setPost(post);
//       } catch (err) {
//         console.error('Error fetching blog post:', err);
//         setError('Failed to fetch the blog post. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPost();
//   }, [slug]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;
//   if (!post) return <p>Post not found!</p>;

//   return (
//     <article className="min-h-screen bg-gray-50 py-12">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-md rounded-lg p-8">
//         {/* Cover Image */}
//         <img
//           src={post.coverImage?.url || 'https://via.placeholder.com/150'}
//           alt={post.title}
//           className="w-full h-72 object-cover rounded-lg"
//         />

//         {/* Title and Meta */}
//         <h1 className="text-3xl font-bold text-gray-900 mt-6">{post.title}</h1>
//         <p className="text-gray-600 italic mt-2">{`Published: ${new Date(
//           post.publishedAt
//         ).toLocaleDateString()}`}</p>

//         {/* Author Information */}
//         {post.author && (
//           <div className="flex items-center mt-4">
//             <img
//               src={post.author.picture?.url || 'https://via.placeholder.com/50'}
//               alt={post.author.name}
//               className="w-10 h-10 rounded-full"
//             />
//             <p className="ml-3 text-gray-800">{post.author.name}</p>
//           </div>
//         )}

//         {/* Content */}
//         <div
//           className="text-gray-700 mt-6 leading-relaxed"
//           dangerouslySetInnerHTML={{ __html: post.content?.html }}
//         />

//         {/* Excerpt */}
//         <blockquote className="mt-8 bg-gray-100 p-4 italic border-l-4 border-gray-300">
//           {post.excerpt}
//         </blockquote>
//       </div>
//     </article>
//   );
// };

// export default BlogDetails;


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { request } from 'graphql-request';
import { trackEvent, trackPageView } from '../../../utils/analytics'; // Import tracking utilities

const HYGRAPH_API_ENDPOINT = 'https://ap-south-1.cdn.hygraph.com/content/cm42biopg009607w3wk4e5ay2/master';

const BlogDetails = () => {
  const { slug } = useParams(); // Extract the slug from the URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { post } = await request(
          HYGRAPH_API_ENDPOINT,
          `
          query GetPostBySlug($slug: String!) {
            post(where: { slug: $slug }) {
              id
              title
              slug
              content {
                html
              }
              excerpt
              coverImage {
                url
              }
              publishedAt
              author {
                name
                picture {
                  url
                }
              }
            }
          }
          `,
          { slug }
        );

        setPost(post);

        // Track successful fetch of the blog post
        trackEvent('Blog Interaction', 'Fetch Success', `Post: ${post.title}`);
      } catch (err) {
        console.error('Error fetching blog post:', err);
        setError('Failed to fetch the blog post. Please try again later.');
        
        // Track fetch failure
        trackEvent('Blog Interaction', 'Fetch Failure', `Slug: ${slug}`);
      } finally {
        setLoading(false);
      }
    };

    // Track page view for the blog post
    trackPageView(`/blog/${slug}`);

    fetchPost();
  }, [slug]);

  const handleAuthorClick = () => {
    if (post.author) {
      trackEvent('Author Interaction', 'Click', `Author: ${post.author.name}`);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!post) {
    // Track when the post is not found
    trackEvent('Blog Interaction', 'Post Not Found', `Slug: ${slug}`);
    return <p>Post not found!</p>;
  }

  return (
    <article className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-md rounded-lg p-8">
        {/* Cover Image */}
        <img
          src={post.coverImage?.url || 'https://via.placeholder.com/150'}
          alt={post.title}
          className="w-full h-72 object-cover rounded-lg"
        />

        {/* Title and Meta */}
        <h1 className="text-3xl font-bold text-gray-900 mt-6">{post.title}</h1>
        <p className="text-gray-600 italic mt-2">{`Published: ${new Date(
          post.publishedAt
        ).toLocaleDateString()}`}</p>

        {/* Author Information */}
        {post.author && (
          <div className="flex items-center mt-4 cursor-pointer" onClick={handleAuthorClick}>
            <img
              src={post.author.picture?.url || 'https://via.placeholder.com/50'}
              alt={post.author.name}
              className="w-10 h-10 rounded-full"
            />
            <p className="ml-3 text-gray-800">{post.author.name}</p>
          </div>
        )}

        {/* Content */}
        <div
          className="text-gray-700 mt-6 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content?.html }}
        />

        {/* Excerpt */}
        <blockquote className="mt-8 bg-gray-100 p-4 italic border-l-4 border-gray-300">
          {post.excerpt}
        </blockquote>
      </div>
    </article>
  );
};

export default BlogDetails;
