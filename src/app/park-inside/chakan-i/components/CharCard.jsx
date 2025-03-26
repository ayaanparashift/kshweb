import React from "react";

const CharCard = () => {
  return (
    <div className="w-[320px] select-none gap-[25px] flex flex-col items-center justify-center h-[300px] bg-white border-[1px] border-[#6C8DAB] border-opacity-[0.5] p-[40px]">
      <div className="fsans-600 w-full flex items-start text-[72px] leading-[111%] text-[#E30613]">
        01
      </div>
      <p className="text-[18px] leading-[26px]">
        Located near the Pune-Mumbai Highway, connecting to Pune-Nashik and
        Pune-Ahmednagar-Aurangabad Highways.
      </p>
    </div>
  );
};

export default CharCard;
