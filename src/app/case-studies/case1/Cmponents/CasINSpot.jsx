"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const CasINSpot = () => {
  const [isActive, setIsActive] = useState(1);
  return (
    <div className="bg-[#092241] overflow-hidden">
      <motion.div
        className="bg-[url(/fistfold.png)] bg-cover bg-center w-screen"
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        exit="exit"
      >
        <div className="fix12 pt-20 pb-[60px]">
          <div className="pb-16">
            <p className="text-[#D7D7D7A3] text-base fsans-400 pb-7">{`Home > Blog`}</p>

            <div className="space-y-7">
              <h1 className="w-fit fpt-500 text-[60px] leading-[105%] text-white border-b-[4px] border-b-[#F7E327]">
                India kawasaki Motors{" "}
              </h1>
            </div>
          </div>
          <div className="imgCon">
            <img src="/caseInside/caseInsideSpot.png" alt="" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CasINSpot;
