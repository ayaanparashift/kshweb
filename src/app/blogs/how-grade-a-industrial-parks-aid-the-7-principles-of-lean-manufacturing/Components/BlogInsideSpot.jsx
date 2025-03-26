import React from "react";

const BlogInsideSpot = () => {
  return (
    <div className="bg-[#092241]">
      <div className="fix12 py-20">
        <div className="pb-16">
          <p className="text-[#D7D7D7A3] text-base fsans-400 pb-7">{`Home > Blog`}</p>

          <div className="space-y-7">
            <p className="w-fit py-1 px-3 fsans-600 text-base bg-[#F7E327]">
              Brand
            </p>
            <h1 className="fpt-500 text-[44px] leading-[105%] text-white">
              How Grade A Industrial Parks Aid the 7 Principles of Lean
              Manufacturing
            </h1>
          </div>
        </div>
        <div className="imgCon">
          <img src="/blog/blog2.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default BlogInsideSpot;
