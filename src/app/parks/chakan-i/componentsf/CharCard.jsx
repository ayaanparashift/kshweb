// import React from "react";

// const CharCard = ({ charnum, charcont, charTitle }) => {
//   return (
//     <div className="w-[320px] select-none gap-[25px] flex flex-col items-start justify-between h-[300px] bg-white border-[1px] border-[#6C8DAB] border-opacity-[0.5] p-[40px]">
//       <div className="fsans-600 w-full flex items-start text-[72px] leading-[111%] text-[#253B57]">
//         {charnum}
//       </div>
//       <div className="flex flex-col gap-[5px]">
//         <h4 className="text-[#092241] text-[24px]">{charTitle}</h4>
//         <p className="text-[18px] text-[#6C8DAB] leading-[26px]">{charcont}</p>
//       </div>
//     </div>
//   );
// };

// export default CharCard;

import React from "react";

const CharCard = ({ charnum, charcont, charTitle }) => {
  return (
    <div className="w-[350px] select-none gap-[25px] flex flex-col items-start justify-between h-[400px] bg-white border-[1px] border-[#6C8DAB] border-opacity-[0.5] p-[40px]">
      <div className="fsans-600 w-full flex items-start text-[72px] leading-[111%] text-[#253B57]">
        {charnum}
      </div>
      <div className="flex flex-col gap-[5px]">
        <h4 className="text-[#092241] text-[24px]">{charTitle}</h4>
        <p className="text-[18px] text-[#6C8DAB] leading-[26px]">{charcont}</p>
      </div>
    </div>
  );
};

export default CharCard;
