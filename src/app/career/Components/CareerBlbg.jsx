import Link from "next/link";
import React from "react";

const CareerBlbg = () => {
  return (
    <div className="flex flex-col items-center px-[max(5%,calc((100vw-1250px)/2))] justify-center gap-6 capEnqBg lg:h-[292px] py-14 lg:py-0">
      <h1 className="fpt-600 text-2xl text-center  md:text-3xl lg:text-[44px] lg:leading-[50px] text-white">
        Let's build something great together.
      </h1>
      <Link
        href="#appformtitle"
        className="border-[D7D7D7] border text-sm md:text-base fsans-600 text-white flex items-center px-[30px] py-[22px] gap-3 rounded-[10px] cursor-pointer"
      >
        Join Us <img src="/Cap/cap_enquire.svg" alt="" />
      </Link>
    </div>
  );
};

export default CareerBlbg;
