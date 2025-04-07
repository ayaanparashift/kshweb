// "use client";
// import React from "react";

// const MapCard = ({ onSelectAirport }) => {
//   const airports = [
//     {
//       title: "Pune International Airport",
//       km: 36,
//       icon: "/ParkPage/mapicons/apl.svg",
//       coordinates: { lat: 33.9416, lon: -118.4085 },
//       mapUrl:
//         "1m24!1m8!1m3!1d241926.82499569946!2d73.77953200000002!3d18.65921", // example of unique map URL
//     },
//     {
//       title: "Mumbai International Airport",
//       km: 144,
//       icon: "/ParkPage/mapicons/apl.svg",
//       coordinates: { lat: 33.9416, lon: -118.4085 },
//       mapUrl:
//         "1m24!1m8!1m3!1d241926.82499569946!2d73.77953200000002!3d18.65921", // example of unique map URL
//     },
//     {
//       title: "Seaport",
//       km: 148,
//       icon: "/ParkPage/mapicons/road.svg",
//       coordinates: { lat: 33.9416, lon: -118.4085 },
//       mapUrl:
//         "1m24!1m8!1m3!1d241926.82499569946!2d73.77953200000002!3d18.65921", // example of unique map URL
//     },
//     {
//       title: "National Highways",
//       km: 106,
//       icon: "/ParkPage/mapicons/ship.svg",
//       coordinates: { lat: 33.9416, lon: -118.4085 },
//       mapUrl:
//         "1m24!1m8!1m3!1d241926.82499569946!2d73.77953200000002!3d18.65921", // example of unique map URL
//     },
//     {
//       title: "City Center",
//       km: 106,
//       icon: "/ParkPage/mapicons/clock.svg",
//       coordinates: { lat: 33.9416, lon: -118.4085 },
//       mapUrl:
//         "1m24!1m8!1m3!1d241926.82499569946!2d73.77953200000002!3d18.65921", // example of unique map URL
//     },
//   ];

//   return (
//     <div className="w-[400px]  mr-[max(5%,calc((100vw-1250px)/2))] h-[510px]">
//       {airports.map((airport, index) => (
//         <div key={index + airport.km} onClick={() => onSelectAirport(airport)}>
//           <div
//             className={`bg-[#fff] flex justify-between items-center gap-[30px] py-[20px] pr-[20px] pl-[10px] ${
//               index === airports.length - 1
//                 ? ""
//                 : "border-b-[1px] border-b-[#C6C6C6]"
//             }`}
//           >
//             <div className="flex flex-col w-full gap-[4px] items-end h-fit">
//               <h2 className="fsans-600 text-[18px]">{airport.title}</h2>
//               <span className="flex fsans-600 text-[24px] text-[#E4222E]">
//                 {airport.km}
//               </span>
//             </div>
//             <div className="h-[48px] w-[48px]">
//               <img src={airport.icon} alt={airport.title} />
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MapCard;
// "use client";
// import React from "react";

// const MapCard = ({ onSelectAirport }) => {
//   const airports = [
//     {
//       title: "Pune International Airport",
//       km: 36,
//       icon: "/ParkPage/mapicons/apl.svg",
//     },
//     {
//       title: "Mumbai International Airport",
//       km: 144,
//       icon: "/ParkPage/mapicons/apl.svg",
//     },
//     {
//       title: "Seaport",
//       km: 148,
//       icon: "/ParkPage/mapicons/road.svg",
//     },
//     {
//       title: "National Highways",
//       km: 106,
//       icon: "/ParkPage/mapicons/ship.svg",
//     },
//     {
//       title: "City Center",
//       km: 106,
//       icon: "/ParkPage/mapicons/clock.svg",
//     },
//   ];

//   return (
//     <div className="w-[400px] mr-[max(5%,calc((100vw-1250px)/2))] h-[510px]">
//       {airports.map((airport, index) => (
//         <div
//           className="cursor-pointer"
//           key={`${airport.title}-${index}`}
//           onClick={() => onSelectAirport(index)}
//         >
//           <div
//             className={`bg-[#fff] flex justify-between items-center gap-[30px] py-[20px] pr-[20px] pl-[10px] ${
//               index === airports.length - 1
//                 ? ""
//                 : "border-b-[1px] border-b-[#C6C6C6]"
//             }`}
//           >
//             <div className="flex flex-col w-full gap-[4px] items-end h-fit">
//               <h2 className="fsans-600 text-[18px]">{airport.title}</h2>
//               <span className="flex fsans-600 text-[24px] text-[#E4222E]">
//                 {airport.km}
//               </span>
//             </div>
//             <div className="h-[48px] w-[48px]">
//               <img src={airport.icon} alt={airport.title} />
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MapCard;

"use client";
import React from "react";

const MapCard = ({ onSelectAirport }) => {
  const airports = [
    {
      title: "Pune International Airport",
      km: 34,
      icon: "/ParkPage/mapicons/apl.svg",
    },
    {
      title: "Mumbai International Airport",
      km: 137,
      icon: "/ParkPage/mapicons/apl.svg",
    },
    {
      title: "Seaport 1",
      km: 148,
      icon: "/ParkPage/mapicons/ship.svg",
    },
    {
      title: "National Highways",
      km: 106,
      icon: "/ParkPage/mapicons/road.svg",
    },
    {
      title: "City Center",
      km: 29,
      icon: "/ParkPage/mapicons/clock.svg",
    },
  ];

  return (
    <div className="w-[400px] mr-[max(5%,calc((100vw-1250px)/2))] h-[510px]">
      {airports.map((airport, index) => (
        <div
          className="cursor-pointer"
          key={`${airport.title}-${index}`}
          onClick={() => onSelectAirport(index)}
        >
          <div
            className={`bg-[#fff] flex justify-between items-center gap-[30px] py-[20px] pr-[20px] pl-[10px] ${
              index === airports.length - 1
                ? ""
                : "border-b-[1px] border-b-[#C6C6C6]"
            }`}
          >
            <div className="flex flex-col w-full gap-[4px] items-end h-fit">
              <h2 className="fsans-600 text-[18px]">{airport.title}</h2>
              <span className="flex fsans-600 text-[24px] text-[#E4222E]">
                {airport.km}
              </span>
            </div>
            <div className="h-[48px] w-[48px]">
              <img src={airport.icon} alt={airport.title} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MapCard;
