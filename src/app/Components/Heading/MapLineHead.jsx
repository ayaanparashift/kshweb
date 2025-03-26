// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const MapLineHead = ({ heading, acbtn, setAcBtn }) => {
//   const spotlight_btn_content = [
//     { title: "All Parks" },
//     { title: "Maharashtra" },
//     { title: "Tamil Nadu" },
//     { title: "Karnataka" },
//   ];

//   return (
//     <div className=" min-w-full border-b lg:mb-[66px] mb-[36px] tablinehead overflow-hidden whitespace-nowrap">
//       <motion.div
//         className="flex pb-[20px] border-[#D7D7D7] border-opacity-[34%] overflow-hidden whitespace-nowrap  items-center justify-between w-[100%] lg:gap-0 gap-[20px]"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true, amount: 0.1 }}
//         transition={{ duration: 2, ease: [0.7, 0, 0.4, 1] }}
//       >
//         <h2 className="leading-[26px] text-[20px] fsans-600 text-[#ffffff] tbhead">
//           {heading}
//         </h2>
//         <div
//           className="flex gap-[5px] overflow-x-auto scrollbar"
//           style={{
//             scrollbarWidth: "none", // Hides scrollbar in Firefox
//             msOverflowStyle: "none",
//           }}
//         >
//           {spotlight_btn_content.map((btntitle, index) => (
//             <button
//               onClick={() => setAcBtn(btntitle.title)}
//               key={btntitle.title + " " + String(index)}
//               className={`px-[12px] py-[10px] flex items-center justify-center rounded-[10px] border-[#d7d7d7] border-opacity-30 text-white border ${
//                 acbtn === btntitle.title ? "bg-[#E30613] border-[#E30613]" : ""
//               }`}
//             >
//               {btntitle.title}
//             </button>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default MapLineHead

// /////////////////////////////////////////////// 8888888888888***********

// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const MapLineHead = ({ heading, acbtn, setAcBtn }) => {
//   const spotlight_btn_content = [
//     { title: "Pune" },
//     { title: "Goa" },
//     { title: "Hyderabad" },
//   ];

//   return (
//     <div className="relative min-w-full lg:mb-[66px] mb-[36px] tablinehead overflow-hidden whitespace-nowrap">
//       <motion.div
//         className="relative flex pb-[20px] overflow-hidden whitespace-nowrap items-center justify-between w-full lg:gap-0 gap-[20px]"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true, amount: 0.1 }}
//         transition={{ duration: 2, ease: [0.7, 0, 0.4, 1] }}
//       >
//         <h2 className="leading-[26px] text-[20px] fsans-600 text-[#ffffff] tbhead">
//           {heading}
//         </h2>
//         <div
//           className="flex gap-[5px] overflow-x-auto scrollbar"
//           style={{
//             scrollbarWidth: "none", // Hides scrollbar in Firefox
//             msOverflowStyle: "none",
//           }}
//         >
//           {spotlight_btn_content.map((btntitle, index) => (
//             <button
//               onClick={() => setAcBtn(btntitle.title)}
//               key={btntitle.title + " " + String(index)}
//               className={`px-[12px] py-[10px] flex items-center justify-center rounded-[10px] border-[#d7d7d7] border-opacity-30 text-white border ${
//                 acbtn === btntitle.title ? "bg-[#E30613] border-[#E30613]" : ""
//               }`}
//             >
//               {btntitle.title}
//             </button>
//           ))}
//         </div>
//       </motion.div>

//       {/* Animated Border Using Empty Div */}
//       <motion.div
//         className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D7D7D7]"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 0.34 }}
//         viewport={{ once: true, amount: 0.1 }}
//         transition={{ duration: 2, ease: [0.7, 0, 0.4, 1] }}
//       />
//     </div>
//   );
// };

// export default MapLineHead;

// /////////////////////////////////////////////// 8888888888888***********

"use client";
import React from "react";
import { motion } from "framer-motion";

const MapLineHead = ({
  heading,
  acbtn,
  setAcBtn,
  hotspots,
  setActiveHotspot,
}) => {
  const spotlight_btn_content = [
    { title: "Pune" },
    { title: "Goa" },
    { title: "Hyderabad" },
  ];

  return (
    <div className="relative min-w-full lg:mb-[66px] mb-[36px] tablinehead overflow-hidden whitespace-nowrap">
      <motion.div
        className="relative flex pb-[20px] overflow-hidden whitespace-nowrap items-center justify-between w-full lg:gap-0 gap-[20px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 2, ease: [0.7, 0, 0.4, 1] }}
      >
        <h2 className="leading-[26px] text-[20px] fsans-600 text-[#ffffff] tbhead">
          {heading}
        </h2>
        <div
          className="flex gap-[5px] overflow-x-auto scrollbar"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {spotlight_btn_content.map((btntitle, index) => {
            const isActive = acbtn === btntitle.title;

            return (
              <button
                key={btntitle.title + " " + String(index)}
                onClick={() => {
                  setAcBtn(btntitle.title);
                  const matchingHotspot = hotspots.find(
                    (h) => h.park_name === btntitle.title
                  );

                  // Set active hotspot ID
                  setActiveHotspot(matchingHotspot ? matchingHotspot.id : null);
                }}
                className={`px-[12px] py-[10px] flex items-center justify-center rounded-[10px] border-[#d7d7d7] border-opacity-30 text-white border ${
                  isActive ? "bg-[#E30613] border-[#E30613]" : ""
                }`}
              >
                {btntitle.title}
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Animated Border Using Empty Div */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D7D7D7]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.34 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 2, ease: [0.7, 0, 0.4, 1] }}
      />
    </div>
  );
};

export default MapLineHead;
