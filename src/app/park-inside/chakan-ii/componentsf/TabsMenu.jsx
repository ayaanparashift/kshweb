"use client";
import { useState } from "react";
import Link from "next/link";

const TabMenu = () => {
  const tabs = [
    { title: "Park Overview", link: "#parkov" },
    { title: "Park Highlights", link: "#parkhighlight" },
    { title: "Location & Connectivity", link: "#lnc" },
    { title: "Park Infrastructure", link: "#pi" },
    { title: "Download Brochure", link: "#db" },
  ];

  const [activeIndex, setActiveIndex] = useState(false);

  return (
    <div className="w-full bg-[#092241] pt-[80px] pb-[48px]">
      <div className="fix12 flex overflow-x-auto scrollbar-hide items-center border-b-2 border-[#BFBFBF]">
        {tabs.map((tab, index) => (
          <Link
            href={tab.link}
            key={index}
            className={`
              flex-1 lg:min-w-0 min-w-[200px] text-center text-sm font-medium transition-colors pb-[15px]
              ${
                activeIndex === index
                  ? "text-[#F7E327] border-b-2 border-[#F7E327]"
                  : "text-white hover:text-gray-300"
              }
              whitespace-nowrap
            `}
            onClick={() => setActiveIndex(index)}
          >
            {tab.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TabMenu;

// 000000000000000000000000000000000000000000000000000000000000000000000000000000

// "use client";
// import { useState } from "react";
// import Link from "next/link";

// const TabMenu = () => {
//   const tabs = [
//     { title: "Park Overview", link: "#parkov" },
//     { title: "Park Highlights", link: "#parkhighlight" },
//     { title: "Location & Connectivity", link: "#lnc" },
//     { title: "Park Infrastructure", link: "#pi" },
//     { title: "Download Brochure", link: "#db" },
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <div className="w-full bg-[#092241] pt-[80px] pb-[48px]">
//       {/* Ensure the parent container takes full width */}
//       <div className="w-full max-w-[1200px] mx-auto">
//         {/* Tabs should take full width of the parent */}
//         <div className="w-full flex border-b border-[#BFBFBF]">
//           {tabs.map((tab, index) => (
//             <div key={index} className="flex-1 text-center relative">
//               <Link
//                 href={tab.link}
//                 className={`
//                   block w-full pb-[15px] text-sm font-medium transition-colors
//                   ${
//                     activeIndex === index
//                       ? "text-[#F7E327]"
//                       : "text-white hover:text-gray-300"
//                   }
//                 `}
//                 onClick={() => setActiveIndex(index)}
//               >
//                 {tab.title}
//               </Link>
//               {/* Active Indicator */}
//               {activeIndex === index && (
//                 <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#F7E327]"></div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TabMenu;

// 000000000000000000000000000000000000000000000000000000000000000000000000

// "use client";
// import { useState } from "react";
// import Link from "next/link";

// const TabMenu = () => {
//   const tabs = [
//     { title: "Park Overview", link: "#parkov" },
//     { title: "Park Highlights", link: "#parkhighlight" },
//     { title: "Location & Connectivity", link: "#lnc" },
//     { title: "Park Infrastructure", link: "#pi" },
//     { title: "Download Brochure", link: "#db" },
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <div className="w-full bg-[#092241] pt-[80px] pb-[48px]">
//       {/* Maintain fix12 for responsive width */}
//       <div className="fix12 flex justify-center overflow-x-auto scrollbar-hide">
//         {/* Tabs container with flex-nowrap for horizontal scrolling */}
//         <div className="fix12 flex border-b border-[#BFBFBF]">
//           {tabs.map((tab, index) => (
//             <div
//               key={index}
//               className="flex-shrink-0 px-4 text-center relative"
//             >
//               <Link
//                 href={tab.link}
//                 className={`
//                   block pb-[15px] text-sm font-medium transition-colors whitespace-nowrap
//                   ${
//                     activeIndex === index
//                       ? "text-[#F7E327]"
//                       : "text-white hover:text-gray-300"
//                   }
//                 `}
//                 onClick={() => setActiveIndex(index)}
//               >
//                 {tab.title}
//               </Link>
//               {activeIndex === index && (
//                 <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#F7E327]"></div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TabMenu;
