import React from "react";

const Res = ({ respara }) => {
  return (
    <div className="bg-[url(/caseInside/resbg.jpg)] h-[450px] py-[100px] bg-cover bg-no-repeat w-full">
      <div className="flex bg-[#EEF0F3] flex-col gap-[30px] fix12 items-center">
        <h2 className="text-[#040404] md:text-[44px] text-[28px]">
          The Result
        </h2>
        <p className="text-[18px] leading-[26px] fsans500 py-[55px] px-[150px] text-[#101021] text-center">
          {respara}
        </p>
      </div>
    </div>
  );
};

export default Res;
