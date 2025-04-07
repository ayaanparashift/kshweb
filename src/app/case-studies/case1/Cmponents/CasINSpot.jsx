"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const CasINSpot = () => {
  const [isActive, setIsActive] = useState(1);
  return (
    <div className="bg-[url(/fistfold.png)] bg-cover bg-center pt-[50px] overflow-hidden">
      <div className="fix12 pt-20 pb-[60px] overflow-hidden">
        <div className="pb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
            viewport={{ amount: 0.1, once: true }}
            className="text-[#D7D7D7A3] text-base fsans-400 pb-7"
          >{`Home > Case Studies > Case 1`}</motion.p>

          <div className="space-y-7">
            <motion.h1
              initial={{ width: 0 }}
              whileInView={{ width: "fit-content" }}
              transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
              viewport={{ amount: 0.1, once: true }}
              className="md:text-[60px] md:text-[30px] text-[24px] md:w-[400px] w-fit ftp-500 text-white border-b-[6px] border-[#F7E327] whitespace-nowrap overflow-hidden"
            >
              Kawasaki
            </motion.h1>
          </div>
        </div>
        <div className="imgCon">
          <motion.img
            initial={{ opacity: 0, translateY: "100px" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1.5, ease: [0.7, 0, 0.4, 1] }}
            viewport={{ amount: 0.1, once: true }}
            src="/caseInside/caseInsideSpot.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CasINSpot;
