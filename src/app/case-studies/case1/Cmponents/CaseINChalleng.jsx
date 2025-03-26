import React from "react";

const CaseINChalleng = () => {
  return (
    <div className="bg-[url('/caseInside/challengeSecBg.png')]">
      <div className="max-w-[1047px] mx-auto pt-[82px] pb-[95px]">
        <div className="topConetbnt flex flex-col items-center text-center gap-[32px] pb-[85px]">
          <h1 className="w-fit fpt-500 text-[44px] leading-[120%] border-b-[4px] border-b-[#F7E327]">
            The Challenge
          </h1>
          <p className="fsans-600 text-lg text-[#101021]">
            Lorem enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur.Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
        </div>
        <div className="caseStChallengebtmCon">
          <ul className="grid grid-cols-2 fsans-400 text-base leading-[26px] text-[#101021] abc">
            <li className="pl-3">
              The initial requirement was for a 125,000 sq. ft. space, but
              Kawasaki also wanted two independent office blocks, one each for
              manufacturing and R&D.
            </li>
            <li className="pl-3">
              They needed a canteen block, toilet blocks, production offices, QC
              labs, and R&D engine testing labs.
            </li>
            <li className="pl-3">
              They required a 500 KVA sub-station to meet their energy
              requirements and DG backup for their manufacturing division.
            </li>
            <li className="pl-3">
              KSH INFRA wanted two independent facilities totalling two 125,000
              sq. ft. facilities. They were separated by a 15-metre internal
              road.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CaseINChalleng;
