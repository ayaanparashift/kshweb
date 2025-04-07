// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const MapLineHead = ({ heading }) => {
//   return (
//     <div className="absolute z-[100000000000000] fix12 top-[100px] left-[max(5%,calc((100vw-1250px)/2))] lg:mb-[0px] mb-[36px] tablinehead overflow-hidden whitespace-nowrap">
//       <motion.div
//         className="relative flex pb-[20px] overflow-hidden whitespace-nowrap items-center justify-between w-full"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true, amount: 0.1 }}
//         transition={{ duration: 2, ease: [0.7, 0, 0.4, 1] }}
//       >
//         <h2 className="leading-[26px] text-[20px] fsans-600 text-[#ffffff] tbhead">
//           {heading}
//         </h2>
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

//////////

"use client";
import React from "react";
import { motion } from "framer-motion";

const MapLineHead = ({ heading }) => {
  const spotlight_btn_content = [
    { title: "Maharashtra" },
    { title: "Tamil Nadu" },
  ];
  return (
    <div className="absolute z-[100000000000000] fix12 top-[100px] left-[max(5%,calc((100vw-1250px)/2))] lg:mb-[0px] mb-[36px] tablinehead overflow-hidden whitespace-nowrap">
      <motion.div
        className="relative flex pb-[20px] overflow-hidden whitespace-nowrap items-center justify-between w-full"
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
            scrollbarWidth: "none", // Hides scrollbar in Firefox
            msOverflowStyle: "none",
          }}
        >
          {spotlight_btn_content.map((btntitle, index) => (
            <button
              // onClick={() => setAcBtn(btntitle.title)}
              key={btntitle.title + " " + String(index)}
              className={`px-[12px] py-[10px] flex-1 flex items-center justify-center rounded-[10px] border-[#d7d7d7] border-opacity-30 text-white border `}
            >
              {btntitle.title}
            </button>
          ))}
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
