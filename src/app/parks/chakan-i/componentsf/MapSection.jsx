// "use client";
// import React, { useState } from "react";
// import MapCard from "./MapCard";

// const MapSection = () => {
//   const [selectedAirport, setSelectedAirport] = useState(null);

//   const handleSelectAirport = (airport) => {
//     setSelectedAirport(airport);
//   };

//   return (
//     <div>
//       <div className="flex max-w-screen w-full justify-end">
//         <MapCard onSelectAirport={handleSelectAirport} />
//       </div>

//       {/* Conditionally render the map if an airport is selected */}
//       {selectedAirport && (
//         <div className="map-container">
//           {/* Embed Google Maps or your map component here */}
//           <iframe
//             src={`https://www.google.com/maps/embed?pb=${selectedAirport.mapUrl}`}
//             width="600"
//             height="450"
//             style={{ border: 0 }}
//             allowFullScreen=""
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           ></iframe>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MapSection;

// "use client";
// import React, { useState } from "react";
// import MapCard from "./MapCard";

// const MapSection = () => {
//   const [selectedAirport, setSelectedAirport] = useState(null);

//   const handleSelectAirport = (airport) => {
//     setSelectedAirport(airport);
//   };

//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       {/* Background Map */}
//       {selectedAirport && (
//         <iframe
//           className="absolute top-0 left-0 w-full h-full z-0"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.003291515759!2d73.85030181538302!3d18.520430587402875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c06e90d30a91%3A0x5b3a42d96fdb5e14!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1618575073550!5m2!1sen!2sin"
//           allowFullScreen=""
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//           style={{ border: 0 }}
//         ></iframe>
//       )}

//       {/* Overlay MapCard */}
//       <div className="absolute top-0 right-0 z-10">
//         <MapCard onSelectAirport={handleSelectAirport} />
//       </div>
//     </div>
//   );
// };

// export default MapSection;
// "use client";
// import React, { useState } from "react";
// import MapCard from "./MapCard";

// const MapSection = () => {
//   const [selectedIndex, setSelectedIndex] = useState(null);

//   // 5 predefined iframe embed URLs
//   const iframeUrls = [
//     "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.1963479527845!2d73.85674347493385!3d18.516426569292938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c070a7329b1f%3A0xf6893e89f7f50db9!2sPune%20Airport!5e0!3m2!1sen!2sin!4v1683472567890",
//     "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609799617!2d72.74110197312294!3d19.082197838935716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63f37d4a1d9%3A0xb992d9f12353fa06!2sMumbai%20International%20Airport!5e0!3m2!1sen!2sin!4v1683472651326",
//     "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609799617!2d72.82922032883242!3d19.082197838935716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d15c344ad95b%3A0xdf7eb3511d29c9df!2sJNPT%20Port!5e0!3m2!1sen!2sin!4v1683472712459",
//     "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.763226004225!2d73.84952747493416!3d18.53418636908457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0655792f5c3%3A0xdf5c53635c60e6a!2sNational%20Highway%2060%2C%20Pune!5e0!3m2!1sen!2sin!4v1683472785480",
//     "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.571192353077!2d73.84837387493419!3d18.54188176897805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c080b1e23eeb%3A0x6e9e6c6f4b2c708!2sShivajinagar%2C%20Pune!5e0!3m2!1sen!2sin!4v1683472833494",
//   ];

//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       {/* Background Route Map */}
//       {selectedIndex !== null && (
//         <iframe
//           src={iframeUrls[selectedIndex]}
//           width="100%"
//           height="100%"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//         ></iframe>
//       )}

//       {/* Overlay MapCard */}
//       <div className="absolute top-0 right-0 z-10">
//         <MapCard onSelectAirport={(index) => setSelectedIndex(index)} />
//       </div>
//     </div>
//   );
// };

// export default MapSection;

"use client";
import React, { useState } from "react";
import MapCard from "./MapCard";

const MapSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const iframeUrls = [
    "https://www.google.com/maps/embed?pb=!1m24!1m8!1m3!1d241951.32895502!2d73.70385896191407!3d18.64201697837987!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3bc2b427f3ca505d%3A0xd175ea8fa8d8f15f!2sKSH%20Infra%2C%20QQ3J%2BPQ5%2C%20Sawardari%2C%20Maharashtra%20410507!3m2!1d18.7540191!2d73.7822305!4m5!1s0x3bc2c134e6c4ff8f%3A0xa810745cf9310798!2sPune%20International%20Airport%2C%20New%20Airport%20Rd%2C%20Pune%20International%20Airport%20Area%2C%20Lohegaon%2C%20Pune%2C%20Maharashtra%20411032!3m2!1d18.579342999999998!2d73.9089168!5e0!3m2!1sen!2sin!4v1744064883358!5m2!1sen!2sin",
    "https://www.google.com/maps/embed?pb=!1m24!1m8!1m3!1d966322.9434910386!2d73.316076!3d18.90043!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3bc2b427f3ca505d%3A0xd175ea8fa8d8f15f!2sKSH%20Infra%2C%20QQ3J%2BPQ5%2C%20Sawardari%2C%20Maharashtra%20410507!3m2!1d18.7540191!2d73.7822305!4m5!1s0x3be7c85099bd2947%3A0x1ecc1a60c474a8ae!2sChhatrapati%20Shivaji%20Maharaj%20International%20Airport%20Mumbai%2C%20Mumbai%2C%20Maharashtra%20400099!3m2!1d19.0902177!2d72.86281199999999!5e0!3m2!1sen!2sin!4v1744066719634!5m2!1sen!2sin",
    "https://www.google.com/maps/embed?pb=!1m24!1m8!1m3!1d966398.5930168404!2d73.314673!3d18.887325!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3bc2b427f3ca505d%3A0xd175ea8fa8d8f15f!2sKSH%20Infra%2C%20QQ3J%2BPQ5%2C%20Sawardari%2C%20Maharashtra%20410507!3m2!1d18.7540191!2d73.7822305!4m5!1s0x3be7ce299e2b5e8b%3A0x5655b08ab6f01561!2sMumbai%20Port%20Trust%2C%20Mazgaon%2C%20Mumbai%2C%20Maharashtra!3m2!1d18.9482881!2d72.8441629!5e0!3m2!1sen!2sin!4v1744066778535!5m2!1sen!2sin",
    "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d120968.75171917143!2d73.75828006065481!3d18.65171942885317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3bc2b427f3ca505d%3A0xd175ea8fa8d8f15f!2sQQ3J%2BPQ5%20KSH%20Infra%2C%20Sawardari%2C%20Maharashtra%20410507!3m2!1d18.7540148!2d73.7822271!4m5!1s0x3bc2c134e6c4ff8f%3A0xa810745cf9310798!2sPune%20International%20Airport%20(PNQ)%2C%20New%20Airport%20Road%2C%20Pune%20International%20Airport%20Area%2C%20Lohegaon%2C%20Pune%2C%20Maharashtra!3m2!1d18.579342999999998!2d73.9089168!5e0!3m2!1sen!2sin!4v1672824325508!5m2!1sen!2sin",
    "https://www.google.com/maps/embed?pb=!1m24!1m8!1m3!1d241910.69237252203!2d73.765441!3d18.670521!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3bc2b427f3ca505d%3A0xd175ea8fa8d8f15f!2sKSH%20Infra%2C%20QQ3J%2BPQ5%2C%20Sawardari%2C%20Maharashtra%20410507!3m2!1d18.7540191!2d73.7822305!4m5!1s0x3bc2bbe7af9b56b1%3A0x7c1c86b796e12483!2sCity%20Centre%20-%20Kolte%20Patil%2C%20Hinjewadi%20Phase%201%20Rd%2C%20Phase%201%2C%20Hinjawadi%20Rajiv%20Gandhi%20Infotech%20Park%2C%20Hinjawadi%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411057!3m2!1d18.5866126!2d73.7384206!5e0!3m2!1sen!2sin!4v1744066944513!5m2!1sen!2sin",
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Render iframe if a location is selected */}
      {selectedIndex !== null && (
        <iframe
          src={iframeUrls[selectedIndex]}
          width="100%"
          height="100%"
          style={{
            border: 0,
            transform: "translateX(-100px)", // <-- shift content inside left
            scale: "120%",
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      )}

      {/* Overlay MapCard on top-right */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 z-10">
        <MapCard onSelectAirport={(index) => setSelectedIndex(index)} />
      </div>
    </div>
  );
};

export default MapSection;
