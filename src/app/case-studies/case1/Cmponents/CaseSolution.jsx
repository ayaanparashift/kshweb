import React from "react";

const CaseSolution = () => {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to bottom, #1B4273 0%, #092241 81%)",
      }}
      className="flex flex-col items-center gap-[66px] pt-[71px] pb-[85px] caseSolBgGradients "
    >
      <h1 className="text-white w-fit fpt-500 text-[44px] leading-[120%] border-b-[4px] border-b-[#F7E327]">
        The Solution
      </h1>

      <div className="relative">
        <img
          src="caseInside/line.png"
          className="absolute left-[50%] top-[-40px]"
          alt=""
        />
        <div className="space-y-8">
          <div className="text-white flex items-center max-w-[975px] caseSolGlass border-[1px] border-white justify-center gap-5 p-7">
            <img src="/caseInside/caseSolshape.svg" alt="" />
            <p className="fsans-400 text-base leading-[130%]">
              KSH INFRA consultants obtained all the required permissions from
              MIDC for the operation.
            </p>
          </div>
          <div className="text-white flex items-center max-w-[975px] caseSolGlass border-[1px] border-white justify-center gap-5 p-7">
            <img src="/caseInside/caseSolshape.svg" alt="" />
            <p className="fsans-400 text-base leading-[130%]">
              6000 sq. ft. was allocated to the manufacturing division. The
              ground floor was used as a showroom area.
            </p>
          </div>
          <div className="text-white flex items-center max-w-[975px] caseSolGlass border-[1px] border-white justify-center gap-5 p-7">
            <img src="/caseInside/caseSolshape.svg" alt="" />
            <p className="fsans-400 text-base leading-[130%]">
              The above-mentioned area was equipped with workstations, cabins,
              toilet blocks and conference rooms.
            </p>
          </div>
          <div className="text-white flex items-center max-w-[975px] caseSolGlass border-[1px] border-white justify-center gap-5 p-7">
            <img src="/caseInside/caseSolshape.svg" alt="" />
            <p className="fsans-400 text-base leading-[130%]">
              Another 6000 square feet was converted into a corporate office for
              the R&D division.
            </p>
          </div>
          <div className="text-white flex items-center max-w-[975px] caseSolGlass border-[1px] border-white justify-center gap-5 p-7">
            <img src="/caseInside/caseSolshape.svg" alt="" />
            <p className="fsans-400 text-base leading-[130%]">
              Temperature-controlled HVAC systems were installed in the
              production office, QC labs, and R&D facilities.
            </p>
          </div>
          <div className="text-white flex items-center max-w-[975px] caseSolGlass border-[1px] border-white justify-center gap-5 p-7">
            <img src="/caseInside/caseSolshape.svg" alt="" />
            <p className="fsans-400 text-base leading-[130%]">
              200 lux lighting was fitted within the warehouse in the
              manufacturing and assembly areas.
            </p>
          </div>
          <div className="text-white flex items-center max-w-[975px] caseSolGlass border-[1px] border-white justify-center gap-5 p-7">
            <img src="/caseInside/caseSolshape.svg" alt="" />
            <p className="fsans-400 text-base leading-[130%]">
              800 lux lighting was fitted in the QC labs.
            </p>
          </div>
          <div className="text-white flex items-center max-w-[975px] caseSolGlass border-[1px] border-white justify-center gap-5 p-7">
            <img src="/caseInside/caseSolshape.svg" alt="" />
            <p className="fsans-400 text-base leading-[130%]">
              KSH INFRA consultants obtained all the required permissions from
              MIDC for the operation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseSolution;
