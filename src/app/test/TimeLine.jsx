"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import LineHead from "../Components/Heading/LineHead";

const timelineData = [
  {
    year: 1969,
    content: "Lorem ipsum dolor sit amet.",
    image: "https://source.unsplash.com/200x200/?building ",
    marginTop: "190px",
  },
  {
    year: 1979,
    content: "Consectetur adipiscing elit.",
    image: "https://source.unsplash.com/200x200/?architecture",
    marginTop: "50px",
  },
  {
    year: 1981,
    content: "Sed do eiusmod tempor incididunt.",
    image: "https://source.unsplash.com/200x200/?city",
    marginTop: "0px",
  },
  {
    year: 1989,
    content: "Ut labore et dolore magna aliqua.",
    image: "https://source.unsplash.com/200x200/?tower",
    marginTop: "150px",
  },
  {
    year: 1991,
    content: "Enim ad minim veniam.",
    image: "https://source.unsplash.com/200x200/?skyscraper",
    marginTop: "30px",
  },
  {
    year: 1998,
    content: "Quis nostrud exercitation ullamco.",
    image: "https://source.unsplash.com/200x200/?urban",
    marginTop: "50px",
  },
  {
    year: 1999,
    content: "Duis aute irure dolor in reprehenderit.",
    image: "https://source.unsplash.com/200x200/?building ,night",
    marginTop: "90px",
  },
  {
    year: 1999,
    content: "Duis aute irure dolor in reprehenderit.",
    image: "https://source.unsplash.com/200x200/?building ,night",
    marginTop: "90px",
  },
  {
    year: 1999,
    content: "Duis aute irure dolor in reprehenderit.",
    image: "https://source.unsplash.com/200x200/?building ,night",
    marginTop: "90px",
  },
  {
    year: 1999,
    content: "Duis aute irure dolor in reprehenderit.",
    image: "https://source.unsplash.com/200x200/?building ,night",
    marginTop: "90px",
  },
  {
    year: 1999,
    content: "Duis aute irure dolor in reprehenderit.",
    image: "https://source.unsplash.com/200x200/?building ,night",
    marginTop: "90px",
  },
  {
    year: 1999,
    content: "Duis aute irure dolor in reprehenderit.",
    image: "https://source.unsplash.com/200x200/?building ,night",
    marginTop: "90px",
  },
  {
    year: 1999,
    content: "Duis aute irure dolor in reprehenderit.",
    image: "https://source.unsplash.com/200x200/?building ,night",
    marginTop: "90px",
  },
  {
    year: 1999,
    content: "Duis aute irure dolor in reprehenderit.",
    image: "https://source.unsplash.com/200x200/?building ,night",
    marginTop: "90px",
  },
  {
    year: 1999,
    content: "Duis aute irure dolor in reprehenderit.",
    image: "https://source.unsplash.com/200x200/?building ,night",
    marginTop: "90px",
  },
  {
    year: 1999,
    content: "Duis aute irure dolor in reprehenderit.",
    image: "https://source.unsplash.com/200x200/?building ,night",
    marginTop: "90px",
  },
  {
    year: 1999,
    content: "Duis aute irure dolor in reprehenderit.",
    image: "https://source.unsplash.com/200x200/?building ,night",
    marginTop: "90px",
  },
  {
    year: 1999,
    content: "Duis aute irure dolor in reprehenderit.",
    image: "https://source.unsplash.com/200x200/?building ,night",
    marginTop: "90px",
  },
  {
    year: 1999,
    content: "Duis aute irure dolor in reprehenderit.",
    image: "https://source.unsplash.com/200x200/?building ,night",
    marginTop: "90px",
  },
  {
    year: 1999,
    content: "Duis aute irure dolor in reprehenderit.",
    image: "https://source.unsplash.com/200x200/?building ,night",
    marginTop: "90px",
  },
  {
    year: 1999,
    content: "Duis aute irure dolor in reprehenderit.",
    image: "https://source.unsplash.com/200x200/?building ,night",
    marginTop: "90px",
  },
  {
    year: 1999,
    content: "Duis aute irure dolor in reprehenderit.",
    image: "https://source.unsplash.com/200x200/?building ,night",
    marginTop: "90px",
  },
];

const Timeline = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const dotsRef = useRef({});

  const handleMouseEnter = (year) => {
    setSelectedYear(year);
    if (dotsRef.current[year]) {
      const rect = dotsRef.current[year].getBoundingClientRect();
      setPosition({
        top: rect.top + window.scrollY + 70,
        left: rect.left + rect.width / 2,
      });
    }
  };

  return (
    <>
      <div className="relative flex flex-col items-center px-10 py-16 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-6">The KSH Legacy</h2>
        <p className="text-center text-gray-600 max-w-xl mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          // spaceBetween={50}
          slidesPerView={1}
          navigation={{ nextEl: ".arrowright", prevEl: ".arrowleft" }}
          // pagination={{ clickable: true }}
          // autoplay={{ delay: 3000 }}
          // loop={true}
          className="fix12"
        >
          {/* Split timelineData into 3 slides */}
          {[0, 1, 2].map((slideIndex) => (
            <SwiperSlide key={slideIndex}>
              <div className="relative w-fit flex items-center gap-[120px] xl-1366:gap-24 xl-1280:gap-[80px] xl-1024:gap-[60px] justify-center  bg-red-500 mb-8">
                {timelineData
                  .slice(slideIndex * 7, slideIndex * 7 + 7) // 3 items per slide
                  .map(({ year, marginTop }) => (
                    <div
                      key={year}
                      ref={(el) => (dotsRef.current[year] = el)}
                      className="flex flex-col items-center cursor-pointer group"
                      onMouseEnter={() => handleMouseEnter(year)}
                      style={{ marginTop }}
                    >
                      {/* Dot */}
                      <div className="relative bg-white w-12 h-12 flex items-center justify-center border-2 border-gray-500 z-50 rounded-full transition-transform duration-300 group-hover:scale-125">
                        <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                      </div>
                      <p className="mt-2 text-gray-700">{year}</p>
                    </div>
                  ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Content Box Positioned near Corresponding Dot */}
        {selectedYear && (
          <motion.div
            key={selectedYear}
            initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 0.7, ease: [0.7, 0, 0.4, 1] }}
            className="absolute flex-col flex items-center space-x-6 transition-opacity duration-300"
            style={{
              position: "absolute",
              top: `${position.top}px`,
              left: `${position.left}px`,
              transform: "translateX(-50%)",
            }}
          >
            <div
              transition={{ duration: 1, ease: "easeInOut" }}
              className="w-[2px] bg-red-500 h-[100px]"
            ></div>

            <div className="bg-red-500 xl-1024:w-[330px] w-[400px]">
              <img
                src={
                  timelineData.find((item) => item.year === selectedYear)?.image
                }
                alt="event"
                className="w-32 h-32 rounded-md object-cover"
              />
              <div>
                <h3 className="text-xl font-bold text-blue-800">
                  {selectedYear}
                </h3>
                <p className="text-gray-600">
                  {
                    timelineData.find((item) => item.year === selectedYear)
                      ?.content
                  }
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <div className="flex gap-[14px] items-center justify-center">
        <button className="arrowleft h-[41px] w-[41px]">
          <img
            className="h-[41px] w-[41px]"
            src="/buttonarrows/arrowleft.svg"
            alt="ArrowLeft"
          />
        </button>
        <button className="arrowright h-[41px] w-[41px]">
          <img
            className="h-[41px] w-[41px]"
            src="/buttonarrows/arrowright.svg"
            alt="ArrowRight"
          />
        </button>
      </div>
    </>
  );
};

export default Timeline;
