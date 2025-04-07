"use client";
import React from "react";

const Navlist = () => {
  const navItem = [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Capabilities",
      href: "/capabilities",
    },
    {
      title: "Sustainability",
      href: "/sustainability",
    },
    {
      title: "Investors",
      href: "/investors",
    },
    {
      title: "Career",
      href: "/career",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];
  return (
    <div className="w-fit pl-[170px] mr-[max(5%,calc((100vw-1250px)/2))] flex flex-col bg-[#fff] ">
      {/* <div className="w-full flex justify-end p-3">
        <button
          onClick={() => setIsOpen(false)}
          className="w-8 h-8 bg-transparent text-black flex items-center justify-center rounded-full text-lg font-bold"
        >
          ×
        </button>
      </div> */}
      <div className="h-[130px]">
        <button></button>
        <button></button>
        <button></button>
      </div>
      {navItem.map((index) => (
        <div className="flex  justify-between item-end" key={index}>
          <h3 className="text-[#092F5F] fpt-700 md:text-[44px] sm:text-[32px] text-[24px]">
            {index.title}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Navlist;
