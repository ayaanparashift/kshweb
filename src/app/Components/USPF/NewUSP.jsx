"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import SwiperCard from "./SwiperCard";
import LineHead from "../Heading/LineHead";
import { motion } from "framer-motion";

const Usp = () => {
  const videoRef = useRef(null);
  const swiperRef = useRef(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasPlayed && videoRef.current) {
          videoRef.current.play();
          setHasPlayed(true);
        }
      },
      { threshold: 0.5 }
    );
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }
    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [hasPlayed]);

  const swcontent = [
    {
      title: "Strategic Locations for Business Growth",
      icon: "/uspicons/icon1.svg",
      content: "Positioned near major hubs for cost-efficiency.",
    },
    {
      title: "Customizable Facilities for Every Need",
      icon: "/uspicons/icon2.svg",
      content: "Offers custom-built and move-in ready options.",
    },
    {
      title: "Move-In Ready Facilities",
      icon: "/uspicons/icon4.svg",
      content: "Pre-built, equipped spaces for ready occupancy.",
    },
    {
      title: "Committed to Sustainability",
      icon: "/uspicons/icon1.svg",
      content:
        "Features such as solar power green areas cultivated following the acclaimed Miyawaki method demonstrate our reverence for mother earth.",
    },
    {
      title: "24-Hour Security Measures",
      icon: "/uspicons/icon1.svg",
      content:
        "Utilizes advanced systems such as drones as well as traditional measures for safety and security.",
    },
    {
      title: "Emergency Preparedness",
      icon: "/uspicons/icon1.svg",
      content:
        "Quick response teams and on-site availability of medical services means we are ready for any emergency.",
    },
    {
      title: "Community Engagement",
      icon: "/uspicons/icon1.svg",
      content:
        "Our events and spaces dedicated to wellness support and promote physical and emotional health practices.",
    },
    {
      title: "Streamlined Transportation and Logistics",
      icon: "/uspicons/icon1.svg",
      content: "We provide efficient transport with smart docking.",
    },
    {
      title: "Innovative Facility Management Systems",
      icon: "/uspicons/icon1.svg",
      content: "We use mobile apps for dynamic facility oversight.",
    },
    {
      title: "Smart Energy and Resource Management",
      icon: "/uspicons/icon1.svg",
      content: "We employ technology to minimize energy costs.",
    },
  ];

  return (
    <div className="bg-white uspcontainer w-full flex items-center justify-center flex-col overflow-hidden">
      <div className="flex flex-col max-w-[100vw] h-fit">
        <div className="relative z-10 pt-[50px] max-w-[1250px] w-[90%] mx-auto md:pt-[92px] h-fit flex flex-col">
          <LineHead heading={"TEN DIFFERENTIATORS of KSH INFRA Parks"} />
        </div>
        <div className="flex xl:flex-row flex-col-reverse md:p-0 px-5 pt-0 max-h-fit lg:gap-0 gap-5 relative">
          <div className="flex items-end bottom-0 xl:bottom-[85px] justify-center mt-0 xl:absolute relative xl:left-0 w-full xl:w-[700px]">
            <video
              ref={videoRef}
              src="/uspicons/USP.mp4"
              className="min-w-full min-h-full scale-100 xl:scale-[1.3]"
              muted
            ></video>
          </div>

          <div className="xl:w-full mx-auto flex flex-col h-fit max-w-full justify-center items-start gap-[33px] lg:pb-[110px] xl:pl-[565px]">
            {/* Text & Navigation Buttons */}
            <motion.div className="flex sm:flex-row flex-col sm:items-center items-start justify-start gap-[20px] sm:gap-[92px] w-full sm:w-[90%] sm:mx-auto xl:w-auto xl-1024:mr-[50px] xl-1280:mr-[59px] xl-1366:mr-[55px] xl-1600:mr-[171px] xl-1536:mr-[145px] xl-1440:mr-[90px] xl-1920:mr-[29%]">
              <p className="fsans-400 text-[18px] leading-[26px] text-[#6C8DAB] z-[1]">
                KSH INFRA builds solutions that meet and grow with your evolving
                industry needs. We create spaces that help you achieve your
                business goals more effectively.
              </p>
              <div className="flex gap-[14px] items-center justify-center">
                <button id="arrowleft" className="h-[41px] w-[41px]">
                  <img
                    className="h-[41px] w-[41px]"
                    src="/buttonarrows/arrowleft.svg"
                    alt="ArrowLeft"
                  />
                </button>
                <button id="arrowright" className="h-[41px] w-[41px]">
                  <img
                    className="h-[41px] w-[41px]"
                    src="/buttonarrows/arrowright.svg"
                    alt="ArrowRight"
                  />
                </button>
              </div>
            </motion.div>

            {/* Swiper Slider */}
            <Swiper
              slidesPerGroup={1}
              className="xl:w-full sm:w-[90%] mx-auto customsw"
              spaceBetween={20} // Maintain good spacing
              modules={[Navigation]} // Removed FreeMode as it's not used
              // loopAdditionalSlides={2}
              // centeredSlides={false}
              navigation={{ nextEl: "#arrowright", prevEl: "#arrowleft" }}
              speed={500}
              loop={true} // Optional: set loop={false} to test performance if needed
              breakpoints={{
                250: { slidesPerView: 1, spaceBetween: 10 }, // Changed from 0 to 1
                400: { slidesPerView: 1.2, spaceBetween: 10 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                769: { slidesPerView: 3, spaceBetween: 20 },
                1279: { slidesPerView: 2.5, spaceBetween: 20 },
                1366: { slidesPerView: 2.5, spaceBetween: 40 },
                1536: { slidesPerView: 3, spaceBetween: 40 },
                1920: { slidesPerView: 4, spaceBetween: 40 },
              }}
            >
              {swcontent.map((slide, index) => (
                <SwiperSlide key={slide.icon + index}>
                  <SwiperCard
                    content={slide.content}
                    title={slide.title}
                    icon={slide.icon}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usp;
