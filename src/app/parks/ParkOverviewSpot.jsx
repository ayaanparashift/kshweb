// "use client";
// import { motion } from "framer-motion";

// const ParkOverviewSpot = () => {
//   return (
//     <div className="relative bg-[#092241] h-[742px] z-0">
//       {/* <div className=""> */}
//       <div className="fix12 pt-[140px] ">
//         <motion.p  className="text-[#D7D7D7A3] text-base fsans-400">{`Home > Park Overview`}</motion.p>
//         <h1 className="text-[60px] max-w-fit ftp-500 text-white border-b-[6px] border-[#F7E327] ">
//           Park Overview &nbsp;&nbsp;&nbsp;
//         </h1>
//       </div>
//       <img
//         src="/parkOverview/parkOverviewSpot.png"
//         className="absolute bottom-0 w-full h-[637px]"
//         alt=""
//       />
//     </div>
//   );
// };

// export default ParkOverviewSpot;

"use client";
import { motion } from "framer-motion";
const ParkOverviewSpot = () => {
  return (
    <div className="relative bg-[#092241] md:h-[800px] h-[430px] z-0 overflow-hidden">
      {/* <div className=""> */}
      <div className="fix12 pt-[140px] ">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
          viewport={{ amount: 0.1, once: true }}
          className="text-[#D7D7D7A3] text-base fsans-400"
        >{`Home > Park Overview`}</motion.p>
        <motion.h1
          initial={{ width: 0 }}
          whileInView={{ width: "fit-content" }}
          transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
          viewport={{ amount: 0.1, once: true }}
          className="text-[28px] sm:text-[32px] md:text-[60px] max-w-fit whitespace-nowrap overflow-hidden ftp-500 text-white border-b-[6px] border-[#F7E327] "
        >
          Park Overview &nbsp;&nbsp;&nbsp;
        </motion.h1>
      </div>
      <motion.img
        initial={{ opacity: 0, translateY: "100px" }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1.5, ease: [0.7, 0, 0.4, 1] }}
        viewport={{ amount: 0.1, once: true }}
        src="/parkOverview/parkspot.webp"
        // className="absolute bottom-0 w-full h-[637px]"
        className="absolute bottom-0 w-full"
        alt=""
      />
    </div>
  );
};

export default ParkOverviewSpot;

// investorRelationSpot;
