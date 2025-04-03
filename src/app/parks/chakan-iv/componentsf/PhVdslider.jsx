"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GenLineHead from "../../../Components/Heading/GenLineHead";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

const PhVdslider = () => {
  const [acbtn, setAcBtn] = useState("Photos");

  const swiperRef1 = useRef(null);
  const swiperRef2 = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (acbtn === "Photos" && swiperRef1.current) {
        swiperRef1.current.update();
      } else if (acbtn === "Videos" && swiperRef2.current) {
        swiperRef2.current.update();
      }
    }, 200); // Delay to ensure Swiper has mounted
  }, [acbtn]);

  return (
    <div className="py-[65px] overflow-hidden w-full">
      <div className="fix12">
        <GenLineHead heading="Park Gallery" acbtn={acbtn} setAcBtn={setAcBtn} />
      </div>

      {/* Sliders Wrapper */}
      <div className="ml-[max(5%,calc((100vw-1250px)/2))] min-h-[420px]">
        <AnimatePresence mode="wait">
          {acbtn === "Photos" && (
            <motion.div
              key="photos-slider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Swiper
                onSwiper={(swiper) => (swiperRef1.current = swiper)}
                modules={[Navigation, FreeMode]}
                spaceBetween={4}
                slidesPerView={1.5}
                speed={300}
                freeMode={true}
                preventInteractionOnTransition={true}
                navigation={{
                  prevEl: ".swiper-button-prev-slider1",
                  nextEl: ".swiper-button-next-slider1",
                }}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  1024: { slidesPerView: 1.3, spaceBetween: 30 },
                  1280: { slidesPerView: 1.6 },
                  1440: { slidesPerView: 1.8 },
                  1920: { slidesPerView: 2.1 },
                }}
              >
                {[
                  "chakan-4/chakan-4-1.png",
                  "chakan-4/chakan-4-2.jpg",
                  "chakan-4/chakan-4-3.jpg",
                  "chakan-4/chakan-4-4.jpg",
                  "chakan-4/chakan-4-5.png",
                  "chakan-4/chakan-4-6.jpg",
                  "chakan-4/chakan-4-7.png",
                  "chakan-4/chakan-4-8.png",
                ].map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      className="w-[690px] select-none h-[380px] max-w-[100%]"
                      src={`/ParkPage/${img}`}
                      alt=""
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation Buttons for Photos */}
              <div className="flex items-start pt-[20px] w-full">
                <div className="flex gap-[14px] items-center w-full justify-start">
                  <button className="swiper-button-prev-slider1 h-[41px] w-[41px]">
                    <img
                      className="h-[41px] w-[41px]"
                      src="/ParkPage/parrowp.svg"
                      alt="ArrowLeft"
                    />
                  </button>
                  <button className="swiper-button-next-slider1 h-[41px] w-[41px]">
                    <img
                      className="h-[41px] w-[41px]"
                      src="/ParkPage/parrown.svg"
                      alt="ArrowRight"
                    />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {acbtn === "Videos" && (
            <motion.div
              key="videos-slider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Swiper
                onSwiper={(swiper) => (swiperRef2.current = swiper)}
                modules={[Navigation, FreeMode]}
                spaceBetween={4}
                slidesPerView={1.5}
                speed={300}
                freeMode={true}
                preventInteractionOnTransition={true}
                navigation={{
                  prevEl: ".swiper-button-prev-slider2",
                  nextEl: ".swiper-button-next-slider2",
                }}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  1024: { slidesPerView: 1.3, spaceBetween: 30 },
                  1280: { slidesPerView: 1.6 },
                  1440: { slidesPerView: 1.8 },
                  1920: { slidesPerView: 2.1 },
                }}
              >
                {[
                  "chakan-4/chakan-4-1.png",
                  "chakan-4/chakan-4-2.jpg",
                  "chakan-4/chakan-4-3.jpg",
                  "chakan-4/chakan-4-4.jpg",
                  "chakan-4/chakan-4-5.png",
                  "chakan-4/chakan-4-6.jpg",
                  "chakan-4/chakan-4-7.png",
                  "chakan-4/chakan-4-8.png",
                ].map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      className="w-[690px] select-none h-[380px] max-w-[100%]"
                      src={`/ParkPage/${img}`}
                      alt=""
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation Buttons for Videos */}
              <div className="flex items-start pt-[20px] w-full">
                <div className="flex gap-[14px] items-center w-full justify-start">
                  <button className="swiper-button-prev-slider2 h-[41px] w-[41px]">
                    <img
                      className="h-[41px] w-[41px]"
                      src="/ParkPage/parrowp.svg"
                      alt="ArrowLeft"
                    />
                  </button>
                  <button className="swiper-button-next-slider2 h-[41px] w-[41px]">
                    <img
                      className="h-[41px] w-[41px]"
                      src="/ParkPage/parrown.svg"
                      alt="ArrowRight"
                    />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PhVdslider;
