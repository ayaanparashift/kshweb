"use client";
import React from "react";
import { motion } from "framer-motion";
import Countersec from "../../Components/Counter/Countersec";
import AboutCounter from "./AboutCounter";
import AboutVision from "./AboutVision";

const AboutSec2 = () => {
  return (
    <>
      <div className=" ">
        <div className="fix12 flex flex-col lg:flex-row justify-between gap-[20px] lg:gap-[5%] py-[49px] sm:py-[98px]">
          <div className="flex-1  xl:w-[538px] xl:min-h-[540px] ">
            <div className="w-[80%]">
              <motion.h1
                initial={{ opacity: 0, translateX: "-50px" }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
                viewport={{ amount: 0.1, once: true }}
                className="text-[#141414] text-[38px] sm:text-[44px] fpt-500 leading-[48.84px] pb-3 whitespace-nowrap"
              >
                Inspiring Green
                <br /> Development
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, translateX: "-100px" }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
                viewport={{ amount: 0.1, once: true }}
                className="bg-[#F7E327] h-[5px] w-[80%]"
              ></motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, translateX: "-150px" }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
              viewport={{ amount: 0.1, once: true }}
              className="text-[#434343] text-base flex flex-col justify-between pt-9 gap-3"
            >
              <p>CARE. QUALITY. INTEGRITY.</p>
              <p>
                {" "}
                With over four million square feet of top-quality industrial and
                logistical spaces and counting, KSH INFRA is expanding across
                country's key markets with plans for 10 million square feet in
                the next five years.
              </p>
              <p>
                {" "}
                Our industrial and logistics parks are green, lean, and
                efficient. We build with care for the environment and local
                communities, reducing the impact of infrastructure development.
              </p>
              <p>
                {" "}
                At KSH INFRA, our core belief drives everything: Inspiring a
                green industrial future with positive effect on people and
                planet. Your success matters - that is why we deliver complex
                projects on time while ensuring long-term savings.
              </p>
              <p>
                {" "}
                We don't just build assets. We drive your business success—with
                a strong commitment to environmental sustainability.
              </p>
            </motion.div>
          </div>

          <div className="flex-1 xl:flex-none overflow-hidden relative xl:w-[640px] xl:min-h-[540px] bg-yellow-300 ">
            <img
              src="/AboutPage/aboutUsSec2.png"
              className="w-full h-full object-cover"
              alt=""
            />

            {/* Mask Animation */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-white"
              initial={{ x: 0 }}
              whileInView={{ x: "-100%" }}
              transition={{ duration: 1.7, ease: [0.7, 0, 0.4, 1] }}
              viewport={{ once: true, amount: 0.3 }} // Adjust amount to control trigger point
            />
          </div>
        </div>
        <AboutCounter />
      </div>
    </>
  );
};

export default AboutSec2;
