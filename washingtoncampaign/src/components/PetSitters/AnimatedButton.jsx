// // import React, { useRef, useEffect, useState } from "react";
// // import { gsap } from "gsap";

// // const AnimatedButton = ({ children, onClick, className }) => {
// //   const buttonRef = useRef(null);
// //   const [isSpotlight, setIsSpotlight] = useState(false); // State to track if spotlight is active

// //   useEffect(() => {
// //     const buttonElement = buttonRef.current;

// //     // GSAP Timeline for flicker effect
// //     const flickerAnimation = gsap.timeline({ paused: true });
// //     flickerAnimation
// //       .to(buttonElement, { opacity: 0.9, duration: 0.1, repeat: 5, yoyo: true })
// //       .to(buttonElement, { scale: 1.05, duration: 0.3 });

// //     // Mousemove event to track cursor and create the brightness effect
// //     const handleMouseMove = (e) => {
// //       const rect = buttonElement.getBoundingClientRect();
// //       const x = e.clientX - rect.left; // X position within the button
// //       const y = e.clientY - rect.top;  // Y position within the button

// //       // Apply a radial gradient with a subtle spotlight effect using theme colors
// //       buttonElement.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(143, 50, 22, 0.2), ${bgColor})`;

// //       // Activate spotlight text color change
// //       setIsSpotlight(true);
// //     };

// //     // Mouseleave event to reset the background and text color
// //     const handleMouseLeave = () => {
// //       buttonElement.style.background = bgColor; // Reset to default background color
// //       setIsSpotlight(false); // Reset to default text color (white)
// //     };

// //     buttonElement.addEventListener("mousemove", handleMouseMove);
// //     buttonElement.addEventListener("mouseleave", handleMouseLeave);
// //     buttonElement.addEventListener("mouseenter", () => flickerAnimation.play());
// //     buttonElement.addEventListener("mouseleave", () => flickerAnimation.reverse());

// //     return () => {
// //       buttonElement.removeEventListener("mousemove", handleMouseMove);
// //       buttonElement.removeEventListener("mouseleave", handleMouseLeave);
// //       buttonElement.removeEventListener("mouseenter", () => flickerAnimation.play());
// //       buttonElement.removeEventListener("mouseleave", () => flickerAnimation.reverse());
// //     };
// //   }, [bgColor]);

// //   return (
// //     <button
// //       ref={buttonRef}
// //       onClick={onClick}
// //       className={`px-8 py-4 font-bold text-lg rounded-lg transition duration-300 ${isSpotlight ? "text-black" : "text-white"}`}
// //       style={{ background: bgColor }}
// //     >
// //       {children}
// //     </button>
// //   );
// // };

// // export default AnimatedButton;


// import React, { useRef, useEffect, useState } from "react";
// import { gsap } from "gsap";

// const AnimatedButton = ({ children, onClick, className, bgColor = "rgba(255, 128, 75, 1)" }) => {
//   const buttonRef = useRef(null);
//   const [isSpotlight, setIsSpotlight] = useState(false); // State to track if spotlight is active

//   useEffect(() => {
//     const buttonElement = buttonRef.current;

//     // GSAP Timeline for flicker effect
//     const flickerAnimation = gsap.timeline({ paused: true });
//     flickerAnimation
//       .to(buttonElement, { opacity: 0.9, duration: 0.1, repeat: 5, yoyo: true })
//       .to(buttonElement, { scale: 1.05, duration: 0.3 });

//     // Mousemove event to track cursor and create the brightness effect
//     const handleMouseMove = (e) => {
//       const rect = buttonElement.getBoundingClientRect();
//       const x = e.clientX - rect.left; // X position within the button
//       const y = e.clientY - rect.top;  // Y position within the button

//       // Apply a radial gradient with a subtle spotlight effect using theme colors
//       buttonElement.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(250, 250, 250, 0.2), ${bgColor})`;

//       // Activate spotlight text color change
//       setIsSpotlight(true);
//     };

//     // Mouseleave event to reset the background and text color
//     const handleMouseLeave = () => {
//       buttonElement.style.background = bgColor; // Reset to default background color
//       setIsSpotlight(false); // Reset to default text color (white)
//     };

//     buttonElement.addEventListener("mousemove", handleMouseMove);
//     buttonElement.addEventListener("mouseleave", handleMouseLeave);
//     buttonElement.addEventListener("mouseenter", () => flickerAnimation.play());
//     buttonElement.addEventListener("mouseleave", () => flickerAnimation.reverse());

//     return () => {
//       buttonElement.removeEventListener("mousemove", handleMouseMove);
//       buttonElement.removeEventListener("mouseleave", handleMouseLeave);
//       buttonElement.removeEventListener("mouseenter", () => flickerAnimation.play());
//       buttonElement.removeEventListener("mouseleave", () => flickerAnimation.reverse());
//     };
//   }, [bgColor]);

//   return (
//     <button
//       ref={buttonRef}
//       onClick={onClick}
//       className={`px-8 py-4 font-bold text-lg rounded-lg transition duration-300 ${isSpotlight ? "text-black" : "text-white"} ${className}`}
//       style={{ background: bgColor }}
//     >
//       {children}
//     </button>
//   );
// };

// export default AnimatedButton;

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

const AnimatedButton = ({
  children,
  onClick,
  className,
  // bgColor = "rgba(255, 192, 0, 1)", // Default theme color (yellow-orange)
}) => {
  const buttonRef = useRef(null);
  const [isSpotlight, setIsSpotlight] = useState(false); // State to track if spotlight is active

  useEffect(() => {
    const buttonElement = buttonRef.current;

    // GSAP Timeline for flicker effect
    const flickerAnimation = gsap.timeline({ paused: true });
    flickerAnimation
      .to(buttonElement, { opacity: 0.9, duration: 0.1, repeat: 5, yoyo: true })
      .to(buttonElement, { scale: 1.05, duration: 0.3 });

    // Mousemove event to track cursor and create the brightness effect
    const handleMouseMove = (e) => {
      const rect = buttonElement.getBoundingClientRect();
      const x = e.clientX - rect.left; // X position within the button
      const y = e.clientY - rect.top; // Y position within the button

      // Apply a radial gradient with a subtle spotlight effect using theme colors
      // buttonElement.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(199, 100, 6, 0.2), ${bgColor})`;

      // Activate spotlight text color change
      setIsSpotlight(true);
    };

    // Mouseleave event to reset the background and text color
    const handleMouseLeave = () => {

      setIsSpotlight(false); // Reset to default text color (white)
    };

    buttonElement.addEventListener("mousemove", handleMouseMove);
    buttonElement.addEventListener("mouseleave", handleMouseLeave);
    buttonElement.addEventListener("mouseenter", () => flickerAnimation.play());
    buttonElement.addEventListener("mouseleave", () => flickerAnimation.reverse());

    return () => {
      buttonElement.removeEventListener("mousemove", handleMouseMove);
      buttonElement.removeEventListener("mouseleave", handleMouseLeave);
      buttonElement.removeEventListener("mouseenter", () => flickerAnimation.play());
      buttonElement.removeEventListener("mouseleave", () => flickerAnimation.reverse());
    };
  },[]);

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      className={`px-8 py-4 font-bold text-lg rounded-lg transition duration-300 ${
        isSpotlight ? "text-black" : "text-white"
      } hover:shadow-lg transform hover:scale-105 ${className}`}
      style={{
      
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow for consistency
      }}
    >
      {children}
    </button>
  );
};

export default AnimatedButton;



// import React, { useRef, useEffect, useState } from "react";
// import { gsap } from "gsap";

// const AnimatedButton = ({
//   children,
//   onClick,
//   className,
//   bgColor = "rgba(0, 0, 0, 1)", // Default black color
// }) => {
//   const buttonRef = useRef(null);
//   const [isSpotlight, setIsSpotlight] = useState(false);

//   useEffect(() => {
//     const buttonElement = buttonRef.current;

//     // GSAP Timeline for flicker effect
//     const flickerAnimation = gsap.timeline({ paused: true });
//     flickerAnimation
//       .to(buttonElement, { opacity: 0.9, duration: 0.1, repeat: 5, yoyo: true })
//       .to(buttonElement, { scale: 1.05, duration: 0.3 });

//     const handleMouseMove = (e) => {
//       const rect = buttonElement.getBoundingClientRect();
//       const x = e.clientX - rect.left;
//       const y = e.clientY - rect.top;

//       buttonElement.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(250, 250, 18, 0.2), ${bgColor})`;
//       setIsSpotlight(true);
//     };

//     const handleMouseLeave = () => {
//       buttonElement.style.background = bgColor;
//       setIsSpotlight(false);
//     };

//     buttonElement.addEventListener("mousemove", handleMouseMove);
//     buttonElement.addEventListener("mouseleave", handleMouseLeave);
//     buttonElement.addEventListener("mouseenter", () => flickerAnimation.play());
//     buttonElement.addEventListener("mouseleave", () => flickerAnimation.reverse());

//     return () => {
//       buttonElement.removeEventListener("mousemove", handleMouseMove);
//       buttonElement.removeEventListener("mouseleave", handleMouseLeave);
//       buttonElement.removeEventListener("mouseenter", () => flickerAnimation.play());
//       buttonElement.removeEventListener("mouseleave", () => flickerAnimation.reverse());
//     };
//   }, [bgColor]);

//   return (
//     <button
//       ref={buttonRef}
//       onClick={onClick}
//       className={`px-8 py-4 font-bold text-lg rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-lg ${className}`}
//       style={{
//         background: bgColor,
//         boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//       }}
//     >
//       {children}
//     </button>
//   );
// };

// export default AnimatedButton;
