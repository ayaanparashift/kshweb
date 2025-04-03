"use client";
import { motion } from "framer-motion";
const AboutStop = () => {
  return (
    <div className="relative bg-[#092241] h-[110vh] xl-1366:h-[100vh] xl-1024:h-[110vh] min-1600:h-[95vh] z-0 overflow-hidden">
      {/* <div className=""> */}
      <div className="fix12 xl:pt-[140px] pt-[120px]">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
          viewport={{ amount: 0.1, once: true }}
          className="text-[#D7D7D7A3] text-base fsans-400"
        >{`Home > About`}</motion.p>
        <motion.h1
          initial={{ width: 0 }}
          whileInView={{ width: "fit-content" }}
          transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
          viewport={{ amount: 0.1, once: true }}
          className="text-[60px] max-w-fit ftp-500 text-white border-b-[6px] border-[#F7E327] whitespace-nowrap overflow-hidden"
        >
          About Us &nbsp;&nbsp;&nbsp;
        </motion.h1>
      </div>
      <motion.img
        initial={{ opacity: 0, translateY: "100px" }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1.5, ease: [0.7, 0, 0.4, 1] }}
        viewport={{ amount: 0.1, once: true }}
        src="./AboutPage/aboutspot.webp"
        className="absolute bottom-0 w-full h-auto"
        alt=""
      />
    </div>
  );
};

export default AboutStop;
