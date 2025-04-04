import React, { useState } from "react";
import MapCard from "./MapCard";

const MapSection = () => {
  const [selectedAirport, setSelectedAirport] = useState(null);

  const handleSelectAirport = (airport) => {
    setSelectedAirport(airport);
  };

  return (
    <div>
      <div>
        <MapCard onSelectAirport={handleSelectAirport} />
      </div>

      {/* Conditionally render the map if an airport is selected */}
      {selectedAirport && (
        <div className="map-container">
          {/* Embed Google Maps or your map component here */}
          <iframe
            src={`https://www.google.com/maps/embed?pb=${selectedAirport.mapUrl}`}
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default MapSection;
