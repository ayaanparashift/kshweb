"use client";
import React from "react";
import { motion } from "framer-motion";

const MapLineHead = ({ heading }) => {
  return (
    <div className="relative min-w-full lg:mb-[66px] mb-[36px] tablinehead overflow-hidden whitespace-nowrap">
      <motion.div
        className="relative flex pb-[20px] overflow-hidden whitespace-nowrap items-center justify-between w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 2, ease: [0.7, 0, 0.4, 1] }}
      >
        <h2 className="leading-[26px] text-[20px] fsans-600 text-[#ffffff] tbhead">
          {heading}
        </h2>
      </motion.div>

      {/* Animated Border Using Empty Div */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D7D7D7]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.34 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 2, ease: [0.7, 0, 0.4, 1] }}
      />
    </div>
  );
};

export default MapLineHead;
