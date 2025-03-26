"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const AboutOurLeadership = () => {
  return (
    <div className="bg-[#EEF0F3] overflow-hidden max-w-full">
      <div className="fix12 py-8 lg:py-[90px] relative">
        {/* Wrapper to prevent overflow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1.4,
            ease: [0.7, 0, 0.4, 1],
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative pb-[10px] border-b border-[#D7D7D7] overflow-hidden"
        >
          {/* Content container */}
          <div className="md:flex items-center justify-between">
            <h1 className="text-3xl lg:text-[44px] fpt-600 whitespace-nowrap pb-3 md:pb-0">
              Our Leadership
            </h1>

            <Link
              href="/our-team"
              className="w-fit items-center text-sm btnCon lg:text-[18px] fsans-600 bg-[#E30613] gap-[10px] text-white py-2 flex px-5 lg:py-3 rounded-[70px]"
            >
              Meet The Team{" "}
              <img
                src="/AboutPage/meetTheTeam.svg"
                className="w-[14px] h-[14px]"
                alt=""
              />
            </Link>
          </div>

          {/* Mask covering entire section including the border */}
        </motion.div>

        {/* Image Section */}
        <motion.div className="ImgCon relative overflow-hidden pt-[30px] lg:pt-[50px]">
          <img src="/AboutPage/AboutOurLeadership.png" alt="" />
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-[#EEF0F3]"
            initial={{ translateX: 0 }}
            whileInView={{ translateX: "100%" }}
            transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
            viewport={{ once: true, amount: 0.3 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutOurLeadership;
