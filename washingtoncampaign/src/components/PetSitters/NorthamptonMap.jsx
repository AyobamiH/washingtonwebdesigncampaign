import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiYXlvYmFtaWoiLCJhIjoiY20wczlscGtxMGhweTJpc2JlaTV5a3V0bCJ9.2I7odcwuW_Zz0Et9tQcwJw'; // replace with your token

const NorthamptonMap = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  
  const northamptonCoordinates = [-0.9027, 52.2405]; // Correct Northampton coordinates

  useEffect(() => {
    if (map.current) return; // Initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11', // Mapbox style
      center: northamptonCoordinates,
      zoom: 12,
      interactive: false, // Disable all map interactions
    });

    // Add marker to the center of the map
    
  }, []);

  return (
    

    <section className="py-12 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Serving Northampton Pet Care Professionals
        </h2>
        {/* Subheading */}
        <p className="text-gray-700 text-lg sm:text-xl mb-8">
          Tailwagging Web Design Factory is a Northampton-based web design service dedicated to helping local pet care businesses thrive online.
        </p>
        {/* Map Container */}
        <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
          <div
            ref={mapContainer}
            className="w-full h-96 md:h-80 sm:h-72" // Responsive height with Tailwind CSS
          />
        </div>
      </div>
    </section>
  );
};

export default NorthamptonMap;
