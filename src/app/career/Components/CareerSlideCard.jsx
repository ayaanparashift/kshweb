import React from "react";

const CareerSlideCard = ({ image, title, des }) => {
  return (
    <div className="flex flex-col gap-[22px] w-full">
      <div className="w-full h-[160px]">
        <img
          className="object-cover w-full h-full"
          src={image || "/Career/SlideImgs/cars1.png"}
          alt={title || "Career Slide"}
        />
      </div>
      <div>
        <div className="flex flex-col gap-[10px]">
          <h3 className="fsans-500 text-[18px] leading-[130%] text-white spotlightheaddd">
            {title || "A culture that builds your Future"}
          </h3>
        </div>
        <div>
          <p className="fsans-500 text-[14px] text-[#a7a7a7]">
            {des || "SUSAINA MICHELLE | SALES EXECUTIVE"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareerSlideCard;
