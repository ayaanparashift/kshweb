// "use client";
// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// const CapDev = () => {
//   const tabs = [
//     {
//       title: "Built to Suit",
//       content:
//         "This is the content for Built to Suit. You can add more details here!",
//       image: "./Cap/captabimg.png",
//       listItems: [
//         "Customized Design: Collaborate on design and construction to ensure that the facilities meet your operational needs.",
//         "Client Involvement: We work closely and cohesively with our clients in all the development phases, from layout planning to infrastructure integration to project delivery.",
//         "Efficiency Focus: Our solutions are optimized for productivity with materials and configurations that enhance performance.",
//       ],
//     },
//     {
//       title: "Ready to Move",
//       content:
//         "This is the content for Ready to Move. Provide your ready-to-move details here!",
//       image: "./Cap/captabimg.png",
//       listItems: [
//         "Immediate Availability: Our Ready-to-Move facilities are available for immediate occupation. so that your No construction delays, no waiting hassles.",
//         "High Standards: Our spaces conform to best-in-class industrial and logistical standards, and are ready for starting operations on day one.",
//         "Flexible Use: Our spaces are designed to support various industry needs with essential amenities.",
//       ],
//     },
//   ];

//   const [activeIndex, setActiveIndex] = useState(0); // Tracks which tab is active

//   return (
//     <div className="bg-[#092241] py-[100px]">
//       <div className="fix12">
//         <div className="rigCon flex-1 flex flex-col gap-10 pb-12">
//           <motion.h1
//             initial={{ width: 0 }}
//             whileInView={{ width: "100%" }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
//             className="text-3xl ftp-500 text-[#fff] leading-[33px] border-b-[#828282] border-b-[1px] pb-2 overflow-hidden whitespace-nowrap"
//           >
//             Development
//           </motion.h1>

//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
//             className=""
//           >
//             <h1 className="text-xl fsans-600 cursor-pointer leading-[26px] text-[#E6E6E6] pb-[34px]">
//               Building Success from the Ground Up{" "}
//             </h1>
//             <p className="text-lg leading-[28px] fsans-400 text-[#CECECE]">
//               At KSH INFRA, we understand that your business is unique, and so
//               are your facility requirements. That is why our we offer both
//               ‘Build-to-Suit’ and ‘Ready-to-Move’ solutions to match the diverse
//               needs of our clients.
//             </p>
//           </motion.div>
//         </div>

//         {/* ---------------  */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
//           className="bg-white p-10"
//         >
//           {/* Tab Buttons */}
//           <div className="flex w-full">
//             {tabs.map((tab, index) => (
//               <h1
//                 key={index}
//                 onClick={() => setActiveIndex(index)}
//                 className={`flex-1 fsans-600 cursor-pointer text-center text-lg transition-all duration-300 pb-2 ${
//                   activeIndex === index
//                     ? "border-b-[#E30613] border-b-[4px]"
//                     : "border-b-[#737373] border-b-[3px]"
//                 }`}
//               >
//                 {tab.title}
//               </h1>
//             ))}
//           </div>

//           {/* Content Area */}
//           <div className="flex w-full pt-5">
//             <div className="flex-1">
//               <img src={tabs[activeIndex].image} alt="" />
//             </div>
//             <div className="flex-1 flex flex-col justify-center">
//               <AnimatePresence mode="wait">
//                 <motion.ul
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.5, ease: [0.7, 0, 0.5, 1] }}
//                   exit={{ opacity: 0 }}
//                   className="list-disc pl-8 space-y-2"
//                 >
//                   {tabs[activeIndex].listItems.map((item, idx) => (
//                     <li key={idx} className="text-gray-800">
//                       {item}
//                     </li>
//                   ))}
//                 </motion.ul>
//               </AnimatePresence>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default CapDev;

"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const CapDev = () => {
  const tabs = [
    {
      title: "Built to Suit",
      content:
        "This is the content for Built to Suit. You can add more details here!",
      image: "./Cap/captabimg.png",
      listItems: [
        "Customized Design: Collaborate on design and construction to ensure that the facilities meet your operational needs.",
        "Client Involvement: We work closely and cohesively with our clients in all the development phases, from layout planning to infrastructure integration to project delivery.",
        "Efficiency Focus: Our solutions are optimized for productivity with materials and configurations that enhance performance.",
      ],
    },
    {
      title: "Ready to Move",
      content:
        "This is the content for Ready to Move. Provide your ready-to-move details here!",
      image: "./Cap/captabimg.png",
      listItems: [
        "Immediate Availability: Our Ready-to-Move facilities are available for immediate occupation. so that your No construction delays, no waiting hassles.",
        "High Standards: Our spaces conform to best-in-class industrial and logistical standards, and are ready for starting operations on day one.",
        "Flexible Use: Our spaces are designed to support various industry needs with essential amenities.",
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0); // Tracks which tab is active

  return (
    <div className="bg-[#092241] py-[100px]">
      <div className="fix12">
        <div className="rigCon flex-1 flex flex-col gap-10 pb-12">
          <motion.h1
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
            className="text-3xl ftp-500 text-[#fff] leading-[33px] border-b-[#828282] border-b-[1px] pb-2 overflow-hidden whitespace-nowrap"
          >
            Development
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
          >
            <h1 className="text-xl fsans-600 cursor-pointer leading-[26px] text-[#E6E6E6] pb-[34px]">
              Building Success from the Ground Up
            </h1>
            <p className="text-lg leading-[28px] fsans-400 text-[#CECECE]">
              At KSH INFRA, we understand that your business is unique, and so
              are your facility requirements. That is why our we offer both
              ‘Build-to-Suit’ and ‘Ready-to-Move’ solutions to match the diverse
              needs of our clients.
            </p>
          </motion.div>
        </div>

        {/* ---------------  */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
          className="bg-white p-10"
        >
          {/* Tab Buttons */}
          <div className="flex w-full">
            {tabs.map((tab, index) => (
              <h1
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`flex-1 fsans-600 cursor-pointer text-center text-lg transition-all duration-300 pb-2 ${
                  activeIndex === index
                    ? "border-b-[#E30613] border-b-[4px]"
                    : "border-b-[#737373] border-b-[3px]"
                }`}
              >
                {tab.title}
              </h1>
            ))}
          </div>

          {/* Content Area */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
            className="flex w-full pt-5"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex} // This ensures AnimatePresence detects a change
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: [0.7, 0, 0.5, 1] }}
                className="flex w-full"
              >
                <div className="flex-1">
                  <img src={tabs[activeIndex].image} alt="" />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <motion.ul className="list-disc pl-8 space-y-2">
                    {tabs[activeIndex].listItems.map((item, idx) => (
                      <li key={idx} className="text-gray-800">
                        {item}
                      </li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CapDev;
