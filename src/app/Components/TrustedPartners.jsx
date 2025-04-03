"use client";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
const TrustedPartners = ({ paddingB }) => {
  return (
    <div
      className='merqueMain h-auto xl-1280:pt-20 pt-16  bg-[url("/tpfiles/marqueBg.webp")] flex-col bg-cover bg-center flex justify-end'
      style={{ paddingBottom: paddingB }}
    >
      <div className="max-w-[1250px] w-[90%] mx-auto  pb-9 ">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: [0.7, 0, 0.4, 1], duration: 1.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-left w-full text-xl font-semibold spotlightheaddd fsans-600 text-[#092241] pb-1 "
        >
          Our Trusted Partners
        </motion.h3>
      </div>

      <div className="relative overflow-hidden max-w-[1250px] w-[90%] bg-white gap-[26px] flex flex-col merqueSlider border mx-auto h-auto md:h-[415px] md:px-[65px] md:py-[40px]">
        <div className="merqueSlide flex items-center justify-between h-[90px]">
          <Marquee direction="left" speed={120}>
            <div className="flex space-x-12 md:space-x-12">
              <img src="/tpfiles/r1/call11.svg" alt="JCB" className="ml-28" />
              <img src="/tpfiles/r1/lin12.svg" alt="JCB" />
              <img src="/tpfiles/r1/ren13.svg" alt="JCB" />
              <img src="/tpfiles/r1/kaw14.svg" alt="JCB" />
              <img src="/tpfiles/r1/uni15.svg" alt="JCB" />
              <img src="/tpfiles/r1/rie16.svg" alt="JCB" />
              <img src="/tpfiles/r1/sal17.svg" alt="JCB" />
            </div>
          </Marquee>
        </div>
        <div className="merqueSlide flex items-center justify-between h-[90px]">
          <Marquee direction="right" speed={120}>
            <div className="flex space-x-12 md:space-x-12">
              <img src="/tpfiles/r2/exc21.svg" alt="JCB" className="ml-28" />
              <img src="/tpfiles/r2/hyu22.svg" alt="JCB" />
              <img src="/tpfiles/r2/ksh23.svg" alt="JCB" />
              <img src="/tpfiles/r2/kim24.svg" alt="JCB" />
              <img src="/tpfiles/r2/ged25.svg" alt="JCB" />
              <img src="/tpfiles/r2/bos26.svg" alt="JCB" />
              <img src="/tpfiles/r2/jcb27.svg" alt="JCB" />
            </div>
          </Marquee>
        </div>
        <div className="merqueSlide flex items-center justify-between h-[90px]">
          <Marquee direction="left" speed={120}>
            <div className="flex space-x-12 md:space-x-12">
              <img src="/tpfiles/r3/env31.svg" alt="JCB" className="ml-28" />
              <img src="/tpfiles/r3/kli32.svg" alt="JCB" />
              <img src="/tpfiles/r3/jab33.svg" alt="JCB" />
              <img src="/tpfiles/r3/htl.svg" alt="JCB" />
              <img src="/tpfiles/r3/apm.svg" alt="JCB" />
              <img src="/tpfiles/r3/fau.svg" alt="JCB" />
              <img src="/tpfiles/r3/nis.svg" alt="JCB" />
              <img src="/tpfiles/r3/mgh.svg" alt="JCB" />
            </div>
          </Marquee>
        </div>
        <motion.div
          initial={{ x: 0 }}
          whileInView={{ x: "100%" }}
          transition={{ ease: [0.7, 0, 0.4, 1], duration: 1.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="absolute h-full w-full top-0 left-0 z-50 bg-[#D2D4D8]"
        />
      </div>
    </div>
  );
};
export default TrustedPartners;
