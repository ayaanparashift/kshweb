// import React from "react";

// const PopForm = () => {
//   return (
//     <div className="max-w-screen w-full flex justify-center items-center max-h-screen">
//       <div className="lg:w-[720px] max-w-screen h-[510px] flex flex-col gap-[40px] px-[30px] py-[40px]">
//         <div className="flex justify-between items-center">
//           <div>
//             <h3 className="text-[44px] leading-[111%] fpt-700 text-black">
//               Enter credentials
//             </h3>
//             <p className="fsans-400 text-[24px] leading-[111%] text-[#E30613]">
//               Lorem Ipsm
//             </p>
//           </div>
//           <div className="cursor-pointer">
//             <img src="/Sustainability/closepopf.svg" alt="SVG" />
//           </div>
//         </div>
//         <div className="flex flex-col gap-[20px]">
//           <div className="flex flex-col gap-[10px]">
//             <label
//               className="fsans-600 text-[16px] leading-[34px] text-[#767676]"
//               htmlFor="name"
//             >
//               Name
//             </label>
//             <input
//               className="outline-none text-[#454545] text-[16px] py-[7px] pl-[16px] leading-[26px] fsans-400 border border-[#BABABA]"
//               type="text"
//               id="name"
//             />
//           </div>
//           <div className="flex flex-col gap-[10px]">
//             <label
//               className="fsans-600 text-[16px] leading-[34px] text-[#767676]"
//               htmlFor="email"
//             >
//               Email
//             </label>
//             <input
//               className="outline-none text-[#454545] text-[16px] py-[7px] pl-[16px] leading-[26px] fsans-400 border border-[#BABABA]"
//               type="email"
//               id="email"
//             />
//           </div>
//         </div>
//         <div>
//           <button className="bg-[#E30613] text-[#fff] py-[14px] px-[21px] flex gap-[10px] items-center rounded-full">
//             <p className="fsans-600 text-[16px]">Proceed to Download</p>
//             <img
//               className="h-[24px] w-[24px]"
//               src="/Sustainability/susdownarr.svg"
//               alt="Down Arrow"
//             />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PopForm;

// 99 ****************************************************
// 99 ****************************************************
// 99 ****************************************************
// 99 ****************************************************
// 99 ****************************************************
// 99 ****************************************************
// 99 ****************************************************
// 99 ****************************************************
// 99 ****************************************************
// 99 ****************************************************
// 99 ****************************************************
// 99 ****************************************************
// 99 ****************************************************

// import React from "react";

// const PopForm = ({ onClose }) => {
//   return (
//     <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
//       <div className="lg:w-[720px] max-w-screen h-[510px] flex flex-col gap-[40px] px-[30px] py-[40px] bg-white">
//         <div className="flex justify-between items-center">
//           <div>
//             <h3 className="text-[44px] leading-[111%] fpt-700 text-black">
//               Enter credentials
//             </h3>
//             <p className="fsans-400 text-[24px] leading-[111%] text-[#E30613]">
//               Lorem Ipsm
//             </p>
//           </div>
//           <div className="cursor-pointer" onClick={onClose}>
//             <img src="/Sustainability/closepopf.svg" alt="Close Popup" />
//           </div>
//         </div>
//         <div className="flex flex-col gap-[20px]">
//           <div className="flex flex-col gap-[10px]">
//             <label
//               className="fsans-600 text-[16px] leading-[34px] text-[#767676]"
//               htmlFor="name"
//             >
//               Name
//             </label>
//             <input
//               className="outline-none text-[#454545] text-[16px] py-[7px] pl-[16px] leading-[26px] fsans-400 border border-[#BABABA]"
//               type="text"
//               id="name"
//             />
//           </div>
//           <div className="flex flex-col gap-[10px]">
//             <label
//               className="fsans-600 text-[16px] leading-[34px] text-[#767676]"
//               htmlFor="email"
//             >
//               Email
//             </label>
//             <input
//               className="outline-none text-[#454545] text-[16px] py-[7px] pl-[16px] leading-[26px] fsans-400 border border-[#BABABA]"
//               type="email"
//               id="email"
//             />
//           </div>
//         </div>
//         <div>
//           <button className="bg-[#E30613] text-white py-[14px] px-[21px] flex gap-[10px] items-center rounded-full">
//             <p className="fsans-600 text-[16px]">Proceed to Download</p>
//             <img
//               className="h-[24px] w-[24px]"
//               src="/Sustainability/susdownarr.svg"
//               alt="Down Arrow"
//             />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PopForm;

//99******************************************************
//99******************************************************
//99******************************************************
//99******************************************************
//99******************************************************
//99******************************************************
//99******************************************************
//99******************************************************
//99******************************************************

import React from "react";
import { motion } from "framer-motion";

const PopForm = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.7, 0, 0.4, 1] }}
      className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
    >
      <div className="lg:w-[720px] max-w-screen h-[510px] flex flex-col gap-[40px] px-[30px] py-[40px] bg-white">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-[44px] leading-[111%] fpt-700 text-black">
              Download ESG Report
            </h3>
            {/* <p className="fsans-400 text-[24px] leading-[111%] text-[#E30613]">
              Lorem Ipsum
            </p> */}
          </div>
          <div className="cursor-pointer" onClick={onClose}>
            <img src="/Sustainability/closepopf.svg" alt="Close Popup" />
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <div className="flex flex-col gap-[10px]">
            <label
              className="fsans-600 text-[16px] leading-[34px] text-[#767676]"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="outline-none text-[#454545] text-[16px] py-[7px] pl-[16px] leading-[26px] fsans-400 border border-[#BABABA]"
              type="text"
              id="name"
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <label
              className="fsans-600 text-[16px] leading-[34px] text-[#767676]"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="outline-none text-[#454545] text-[16px] py-[7px] pl-[16px] leading-[26px] fsans-400 border border-[#BABABA]"
              type="email"
              id="email"
            />
          </div>
        </div>
        <div>
          <button className="bg-[#E30613] text-white py-[14px] px-[21px] flex gap-[10px] items-center rounded-full">
            <p className="fsans-600 text-[16px]">Proceed to Download</p>
            <img
              className="h-[24px] w-[24px]"
              src="/Sustainability/susdownarr.svg"
              alt="Down Arrow"
            />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PopForm;
