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
              <img src="/marqicons/row1/r1.svg" alt="JCB" className="" />
              <img src="/marqicons/row1/r2.svg" alt="JCB" />
              <img src="/marqicons/row1/r3.svg" alt="JCB" />
              <img src="/marqicons/row1/r4.svg" alt="JCB" />
              <img src="/marqicons/row1/r5.svg" alt="JCB" />
              <img src="/marqicons/row1/r6.svg" alt="JCB" />
              <img src="/marqicons/row1/r7.svg" alt="JCB" />
              <img src="/marqicons/row1/r8.svg" alt="JCB" />
              <img src="/marqicons/row1/r9.svg" alt="JCB" />
              <img src="/marqicons/row1/r10.svg" alt="JCB" />
            </div>
          </Marquee>
        </div>
        <div className="merqueSlide flex items-center justify-between h-[90px]">
          <Marquee direction="right" speed={120}>
            <div className="flex space-x-12 md:space-x-12">
              <img src="/marqicons/row2/r11.svg" alt="JCB" className="" />
              <img src="/marqicons/row2/r12.svg" alt="JCB" />
              <img src="/marqicons/row2/r13.svg" alt="JCB" />
              <img src="/marqicons/row2/r14.svg" alt="JCB" />
              <img src="/marqicons/row2/r15.svg" alt="JCB" />
              <img src="/marqicons/row2/r16.svg" alt="JCB" />
              <img src="/marqicons/row2/r17.svg" alt="JCB" />
              <img src="/marqicons/row2/r18.svg" alt="JCB" />
              <img src="/marqicons/row2/r19.svg" alt="JCB" />
              <img src="/marqicons/row2/r20.svg" alt="JCB" />
            </div>
          </Marquee>
        </div>
        <div className="merqueSlide flex items-center justify-between h-[90px]">
          <Marquee direction="left" speed={120}>
            <div className="flex space-x-12 md:space-x-12">
              <img src="/marqicons/row3/r21.svg" alt="JCB" className="" />
              <img src="/marqicons/row3/r22.svg" alt="JCB" />
              <img src="/marqicons/row3/r23.svg" alt="JCB" />
              <img src="/marqicons/row3/r24.svg" alt="JCB" />
              <img src="/marqicons/row3/r25.svg" alt="JCB" />
              <img src="/marqicons/row3/r26.svg" alt="JCB" />
              <img src="/marqicons/row3/r27.svg" alt="JCB" />
              <img src="/marqicons/row3/r28.svg" alt="JCB" />
              <img src="/marqicons/row3/r29.svg" alt="JCB" />
              <img src="/marqicons/row3/r30.svg" alt="JCB" />
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
