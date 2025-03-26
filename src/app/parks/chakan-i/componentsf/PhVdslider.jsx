"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
// import GenLineHead from "./app/Components/Heading/GenLineHead";
import GenLineHead from "../../../Components/Heading/GenLineHead";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

const PhVdslider = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.params.navigation.prevEl =
        ".swiper-button-prev-landingp";
      swiperRef.current.swiper.params.navigation.nextEl =
        ".swiper-button-next-landingn";
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, []);

  return (
    <div className="py-[65px] overflow-hidden w-full">
      <div className="fix12">
        <GenLineHead heading="Park Gallery" />
      </div>
      <div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
          viewport={{ amount: 0.5, once: true }}
          className="ml-[max(5%,calc((100vw-1250px)/2))]"
          id="slidercontpp"
        >
          <Swiper
            ref={swiperRef}
            modules={[Navigation, FreeMode]}
            spaceBetween={4}
            slidesPerView={1.5}
            speed={300}
            freeMode={true}
            preventInteractionOnTransition={true}
            // allowTouchMove={false}
            // touchMoveStopPropagation={true}
            breakpoints={{
              320: { slidesPerView: 1 },
              1024: { slidesPerView: 1.3, spaceBetween: 30 },
              1280: { slidesPerView: 1.6 },
              1440: { slidesPerView: 1.9 },
            }}
          >
            <SwiperSlide>
              <img
                className="w-[690px] select-none h-[380px] max-w-[100%]"
                src="/ParkPage/card1.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-[690px] select-none h-[380px] max-w-[100%]"
                src="/ParkPage/card2.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-[690px] select-none h-[380px] max-w-[100%]"
                src="/ParkPage/card1.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-[690px] select-none h-[380px] max-w-[100%]"
                src="/ParkPage/card2.png"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </motion.div>
        <div className="fix12 flex items-start pt-[45px]">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
            viewport={{ amount: 0.1, once: true }}
            className="flex gap-[14px] items-center justify-center"
          >
            <button className="swiper-button-prev-landingp h-[41px] w-[41px]">
              <img
                className="h-[41px] w-[41px]"
                src="/ParkPage/parrowp.svg"
                alt="ArrowLeft"
              />
            </button>
            <button className="swiper-button-next-landingn h-[41px] w-[41px]">
              <img
                className="h-[41px] w-[41px]"
                src="/ParkPage/parrown.svg"
                alt="ArrowRight"
              />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PhVdslider;
