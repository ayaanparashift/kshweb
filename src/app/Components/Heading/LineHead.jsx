"use client";
import React from "react";
import { motion } from "framer-motion";

const LineHead = ({ heading, clr, bclr, bopacity, fontSize, lineHeigth }) => {
  return (
    <div className="overflow-x-hidden h-fit w-full">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 2, ease: [0.7, 0, 0.4, 1] }}
        className="overflow-x-hidden h-fit whitespace-nowrap"
      >
        <h2
          className={`leading-[26px] w-full text-[20px] pb-[20px] border-b xl:mb-[66px] mb-[36px] border-[${bclr}] border-opacity-[${bopacity}] fsans-600 text-[#092241] ${clr} linehead-text`}
          style={{ fontSize: `${fontSize}px`, lineHeight: `${lineHeigth}px` }}
        >
          {heading}
        </h2>
      </motion.div>
    </div>
  );
};

export default LineHead;
