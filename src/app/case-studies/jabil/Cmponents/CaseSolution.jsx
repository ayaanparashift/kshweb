import React from "react";

const CaseSolution = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(117deg, #1B4273 -12.83%, #092241 64.77%)",
      }}
      className="flex flex-col items-center gap-[66px] pt-[71px] pb-[85px] caseSolBgGradients"
    >
      <h1 className="text-white w-fit fpt-500 md:text-[44px] sm:text-[32px] text-[24px] leading-[120%] border-b-[4px] border-b-[#F7E327]">
        The Solution
      </h1>

      <div className="relative">
        <img
          src="/caseInside/casebgline.svg"
          className="absolute left-[50%] top-[-40px] h-[112%]"
          alt=""
        />
        <div className="space-y-8">
          <div className="text-white flex items-center max-w-[975px] caseSolGlass border-[1px] border-white justify-center gap-5 p-7">
            <img src="/caseInside/caseSolshape.svg" alt="" />
            <p className="fsans-400 text-base leading-[130%]">
              Installation of a 100-tonne gantry crane transported on rails: A
              temporary foundation were made outside the facility to install and
              transport the crane.
            </p>
          </div>
          <div className="text-white flex items-center max-w-[975px] caseSolGlass border-[1px] border-white justify-center gap-5 p-7">
            <img src="/caseInside/caseSolshape.svg" alt="" />
            <p className="fsans-400 text-base leading-[130%]">
              The existing shopfloor was reengineered and reinforced: This
              allowed the crane to move 100 metres within the facility.
            </p>
          </div>
          <div className="text-white flex items-center max-w-[975px] caseSolGlass border-[1px] border-white justify-center gap-5 p-7">
            <img src="/caseInside/caseSolshape.svg" alt="" />
            <p className="fsans-400 text-base leading-[130%]">
              Jabil was provided with a ground-plus first-floor office block.
              This included the following facilities:
            </p>
          </div>
          <div className="text-white flex items-center max-w-[975px] caseSolGlass border-[1px] border-white justify-center gap-5 p-7">
            <img src="/caseInside/caseSolshape.svg" alt="" />
            <p className="fsans-400 text-base leading-[130%]">
              Enhanced fire and safety standards to meet Jabil's approval
              requirements.
            </p>
          </div>
          <div className="text-white flex items-center max-w-[975px] caseSolGlass border-[1px] border-white justify-center gap-5 p-7">
            <img src="/caseInside/caseSolshape.svg" alt="" />
            <p className="fsans-400 text-base leading-[130%]">
              Installing 300-lux LED lighting for efficient long-term energy
              use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseSolution;
