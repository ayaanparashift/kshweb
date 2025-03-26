"use client";
import { motion } from "framer-motion";
// import LineHead from "@/app/Components/Heading/LineHead";
import LineHead from "../../../Components/Heading/LineHead";
const ParkOverview = () => {
  return (
    <div
      className="w-full h-fit lg:h-[594px] pt-[70px] pb-[20px]"
      id="parkov"
      style={{
        background: "linear-gradient(to bottom, #141D28 70%, #EEF0F3 30%)",
      }}
    >
      <motion.div
        initial={{ "--bg-pos": "50% -120%" }} // Background starts at the bottom
        whileInView={{ "--bg-pos": "50% 50%" }} // Moves to the original position
        transition={{
          duration: 1.4,
          ease: [0.7, 0, 0.4, 1],
          property: "background-position",
        }}
        viewport={{ once: true, amount: 0.5 }}
        className="md:mr-[max(5%,calc((100vw-1250px)/2))] mr-0 lg:h-[502px] bg-[url(/ParkPage/pobg.webp)] bg-cover bg-no-repeat flex flex-col overflow-hidden"
        style={{
          backgroundPosition: "var(--bg-pos)",
          willChange: "background-position",
        }}
      >
        <div className="ml-[max(5%,calc((100vw-1250px)/2))] md:mr-0 mr-[max(5%,calc((100vw-1250px)/2))]  flex flex-col w-auto lg:w-[75%] xl:w-[40%] py-[70px]">
          <LineHead heading="KSH INFRA Chakan III Park" />
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
            viewport={{ once: true, amount: 0.5 }}
            className="xl-1280:text-[22px] gradinetText2 leading-[130%] spotlightheaddd fsans-700 text-[20px] mt-[-20px] xl:1024:mt-[-40px] xl-1280:mt-[-20px]"
          >
            Chakan in Pune is one of India’s fastest-growing integrated
            industrial hubs
            {/* Our first major development, Chakan Industrial Park I, established
            our reputation as a world-class green industrial developer in India. */}
          </motion.h3>
          {/* <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
            viewport={{ once: true, amount: 0.5 }}
            className="flato-400 text-[18px] leading-[26px] text-[#6C8DAB] pt-[24px]"
          >
            Chakan Park I now serves as a thriving manufacturing, logistics, and
            warehousing hub for several major multinational companies. The park
            showcases our ability to create industrial spaces that meet global
            standards while maintaining strong environmental credentials{" "}
            <br className="xl:flex hidden" />
            for your workforce.
          </motion.p> */}
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
            viewport={{ once: true, amount: 0 }}
            className="bg-[#E30613] max-w-fit h-[50px] flex items-center text-base fsans-600 text-white px-[21px] py-[14px] gap-[10px] rounded-3xl mt-[50px]"
          >
            <p>Read More</p>
            <img
              className="h-[24px] w-[24px] -rotate-[90deg]"
              src="/downarrow.svg"
              alt="Arrow"
            />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default ParkOverview;
