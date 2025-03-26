import React from "react";

const MapSC = ({ parkimg, title, city, tarea, tbuild }) => {
  return (
    <>
      <div className="relative pb-[65px]">
        <div className="h-[272px] flex items-center justify-between px-10 bg-white gap-10 w-full">
          <div className="flex-[0.5]">
            <img src={parkimg} className="object-cover" alt="first infra" />
          </div>
          <div className="flex flex-col gap-10 flex-1 w-full">
            <h2 className="pb-[15px] text-5xl border-b-[10px] border-[#F7E327] text-[#092241] font-bold overflow-hidden text-ellipsis max-w-fit">
              {title}
            </h2>
            <div className="flex flex-col gap-[5px] w-full">
              <div className="flex w-full min-w-0">
                <p className="w-[70%] flex-1 text-[#092241]">CITY</p>
                <p className="w-[30%] flex-1 text-[#092241]">{city}</p>
              </div>
              <div className="flex w-full min-w-0">
                <p className="w-[70%] flex-1 text-[#092241]">TOTAL AREA</p>
                <p className="w-[30%] flex-1 text-[#092241]">{tarea}</p>
              </div>
              <div className="flex w-full min-w-0">
                <p className="w-[70%] flex-1 text-[#092241]">TOTAL BUILDINGS</p>
                <p className="w-[30%] flex-1 text-[#092241]">{tbuild}</p>
              </div>
            </div>
          </div>
        </div>
        <button className="flex group hover:translate-x-[5px] transition-transform duration-[400ms] items-center justify-center gap-3">
          <img
            src="/buttonarrows/redarico.svg"
            width={0}
            height={0}
            className="mt-2 h-10 w-10 rotate-45 group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-300 cursor-pointer"
            alt="Red Arrow Icon"
          />
          <p className="text-[#ffffff] fsans-600">Explore More</p>
        </button>
      </div>
    </>
  );
};

export default MapSC;
