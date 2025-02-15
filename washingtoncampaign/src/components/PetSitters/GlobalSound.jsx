import React, { useEffect, useRef } from "react";
import dogBarking from "./sounds/dog-barking.wav";

const GlobalSound = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    // Function to play the sound after user interaction
    const playSound = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.log("Playback prevented:", error);
        });
      }
    };

     const handleInteraction = (event) => {
        console.log(`${event.type} detected`);
    playSound(); // Your function to trigger the sound

    // Remove event listeners after first interaction
     // Detect if it's a mobile device
    const isMobileDevice = /Mobi|Android/i.test(navigator.userAgent);

    // If on a mobile device, use `touchstart` as a priority
    if (isMobileDevice) {
      window.addEventListener("touchstart", handleInteraction);
    } else {
      // For desktop devices, listen for more events
      window.addEventListener("click", handleInteraction);
      window.addEventListener("mousemove", handleInteraction);
      window.addEventListener("scroll", handleInteraction);
      window.addEventListener("keydown", handleInteraction);
    }
  };
  // Add event listeners
  window.addEventListener('click', handleInteraction);
  window.addEventListener('touchstart', handleInteraction);
  window.addEventListener('mousemove', handleInteraction);
  window.addEventListener('scroll', handleInteraction);
  window.addEventListener('keydown', handleInteraction);

  return () => {
    // Clean up event listeners when component unmounts
    window.removeEventListener('click', handleInteraction);
    window.removeEventListener('touchstart', handleInteraction);
    window.removeEventListener('mousemove', handleInteraction);
    window.removeEventListener('scroll', handleInteraction);
    window.removeEventListener('keydown', handleInteraction);
  };
}, []);

return <audio ref={audioRef} src={dogBarking} preload="auto" />;

    
  
};


export default GlobalSound;
