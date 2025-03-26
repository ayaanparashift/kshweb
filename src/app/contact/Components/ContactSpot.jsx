"use client";
import React from "react";
import { motion } from "framer-motion";

const ContactSpot = () => {
  return (
    <div className="relative bg-[#092241] h-[740px] overflow-hidden z-0">
      {/* <div className=""> */}
      <div className="fix12 pt-[140px] ">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
          viewport={{ amount: 0.1, once: true }}
          className="text-[#D7D7D7A3] text-[13px] md:text-base fsans-400"
        >{`Home > Contact`}</motion.p>
        <motion.h1
          initial={{ width: 0 }}
          whileInView={{ width: "fit-content" }}
          transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
          viewport={{ amount: 0.1, once: true }}
          className="md:text-[60px] text-[30px] md:w-[400px] w-fit ftp-500 text-white border-b-[6px] border-[#F7E327] whitespace-nowrap overflow-hidden"
        >
          Contact Us &nbsp;&nbsp;&nbsp;
        </motion.h1>
      </div>
      {/* <img
        src="./contact/contactheader.webp"
        className="absolute bottom-0 w-full object-cover"
        alt=""
      /> */}
      <motion.img
        initial={{ opacity: 0, translateY: "100px" }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1.5, ease: [0.7, 0, 0.4, 1] }}
        viewport={{ amount: 0.1, once: true }}
        src="./contact/contactheader.webp"
        className="absolute bottom-0 w-full "
        alt=""
      />
    </div>
  );
};

export default ContactSpot;

// "use client";
// import React from "react";

// import { motion } from "framer-motion";
// const SustainSpotLigth = () => {
//   return (
//     <div className="relative bg-[#092241] h-[350px] md:h-[550px] lg:h-[650px] min-1366:h-[95vh] z-0 overflow-hidden">
//       {/* <div className=""> */}
//       <div className="fix12 pt-[125px] md:pt-[140px] xl-1920:pt-44">
//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
//           viewport={{ amount: 0.1, once: true }}
//           className="text-[#D7D7D7A3] text-[13px] md:text-base fsans-400"
//         >{`Home > Sustainability`}</motion.p>
//         <motion.h1
//           initial={{ width: 0 }}
//           whileInView={{ width: "fit-content" }}
//           transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
//           viewport={{ amount: 0.1, once: true }}
//           className="md:text-[60px] text-[30px] md:w-[400px] w-fit ftp-500 text-white border-b-[6px] border-[#F7E327] whitespace-nowrap overflow-hidden"
//         >
//           Sustainability
//         </motion.h1>
//       </div>
//       <motion.img
//         initial={{ opacity: 0, translateY: "100px" }}
//         whileInView={{ opacity: 1, translateY: 0 }}
//         transition={{ duration: 1.5, ease: [0.7, 0, 0.4, 1] }}
//         viewport={{ amount: 0.1, once: true }}
//         src="./Sustainability/sustainSpot.png"
//         className="absolute bottom-0 w-full "
//         alt=""
//       />
//     </div>
//   );
// };

// export default SustainSpotLigth;
