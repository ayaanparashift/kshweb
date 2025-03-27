// "use client";
// import { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// // import GenLineHead from "./app/Components/Heading/GenLineHead";
// import GenLineHead from "../../../Components/Heading/GenLineHead";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/free-mode";

// const PhVdslider = () => {
//   const swiperRef = useRef(null);

//   useEffect(() => {
//     if (swiperRef.current && swiperRef.current.swiper) {
//       swiperRef.current.swiper.params.navigation.prevEl =
//         ".swiper-button-prev-landingp";
//       swiperRef.current.swiper.params.navigation.nextEl =
//         ".swiper-button-next-landingn";
//       swiperRef.current.swiper.navigation.init();
//       swiperRef.current.swiper.navigation.update();
//     }
//   }, []);

//   return (
//     <div className="py-[65px] overflow-hidden w-full">
//       <div className="fix12">
//         <GenLineHead heading="Park Gallery" />
//       </div>
//       <div>
//         <motion.div
//           initial={{ x: 100, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
//           viewport={{ amount: 0.5, once: true }}
//           className="ml-[max(5%,calc((100vw-1250px)/2))]"
//           id="slidercontpp"
//         >
//           <Swiper
//             ref={swiperRef}
//             modules={[Navigation, FreeMode]}
//             spaceBetween={4}
//             slidesPerView={1.5}
//             speed={300}
//             freeMode={true}
//             preventInteractionOnTransition={true}
//             // allowTouchMove={false}
//             // touchMoveStopPropagation={true}
//             breakpoints={{
//               320: { slidesPerView: 1 },
//               1024: { slidesPerView: 1.3, spaceBetween: 30 },
//               1280: { slidesPerView: 1.6 },
//               1440: { slidesPerView: 1.9 },
//             }}
//           >
//             <SwiperSlide>
//               <img
//                 className="w-[690px] select-none h-[380px] max-w-[100%]"
//                 src="/ParkPage/card1.png"
//                 alt=""
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 className="w-[690px] select-none h-[380px] max-w-[100%]"
//                 src="/ParkPage/card2.png"
//                 alt=""
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 className="w-[690px] select-none h-[380px] max-w-[100%]"
//                 src="/ParkPage/card1.png"
//                 alt=""
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 className="w-[690px] select-none h-[380px] max-w-[100%]"
//                 src="/ParkPage/card2.png"
//                 alt=""
//               />
//             </SwiperSlide>
//           </Swiper>
//         </motion.div>
//         <div className="fix12 flex items-start pt-[45px]">
//           <motion.div
//             initial={{ y: 100, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
//             viewport={{ amount: 0.1, once: true }}
//             className="flex gap-[14px] items-center justify-center"
//           >
//             <button className="swiper-button-prev-landingp h-[41px] w-[41px]">
//               <img
//                 className="h-[41px] w-[41px]"
//                 src="/ParkPage/parrowp.svg"
//                 alt="ArrowLeft"
//               />
//             </button>
//             <button className="swiper-button-next-landingn h-[41px] w-[41px]">
//               <img
//                 className="h-[41px] w-[41px]"
//                 src="/ParkPage/parrown.svg"
//                 alt="ArrowRight"
//               />
//             </button>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PhVdslider;

// 9999999999999999999999999999999999999999999999999999999999999      999999999
// 9999999999999999999999999999999999999999999999999999999999999      999999999
// 9999999999999999999999999999999999999999999999999999999999999      999999999
// 9999999999999999999999999999999999999999999999999999999999999      999999999
// 9999999999999999999999999999999999999999999999999999999999999      999999999
// 9999999999999999999999999999999999999999999999999999999999999      999999999
// 9999999999999999999999999999999999999999999999999999999999999      999999999
// 9999999999999999999999999999999999999999999999999999999999999      999999999
// 9999999999999999999999999999999999999999999999999999999999999      999999999

// "use client";
// import { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import GenLineHead from "../../../Components/Heading/GenLineHead";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/free-mode";

// const PhVdslider = () => {
//   const swiperRef1 = useRef(null);
//   const swiperRef2 = useRef(null);

//   useEffect(() => {
//     if (swiperRef1.current && swiperRef1.current.swiper) {
//       swiperRef1.current.swiper.params.navigation.prevEl =
//         ".swiper-button-prev-slider1";
//       swiperRef1.current.swiper.params.navigation.nextEl =
//         ".swiper-button-next-slider1";
//       swiperRef1.current.swiper.navigation.init();
//       swiperRef1.current.swiper.navigation.update();
//     }

//     if (swiperRef2.current && swiperRef2.current.swiper) {
//       swiperRef2.current.swiper.params.navigation.prevEl =
//         ".swiper-button-prev-slider2";
//       swiperRef2.current.swiper.params.navigation.nextEl =
//         ".swiper-button-next-slider2";
//       swiperRef2.current.swiper.navigation.init();
//       swiperRef2.current.swiper.navigation.update();
//     }
//   }, []);

//   return (
//     <div className='py-[65px] overflow-hidden w-full'>
//       <div className='fix12'>
//         <GenLineHead heading='Park Gallery' />
//       </div>

//       {/* First Slider */}
//       <motion.div
//         initial={{ x: 100, opacity: 0 }}
//         whileInView={{ x: 0, opacity: 1 }}
//         transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
//         viewport={{ amount: 0.5, once: true }}
//         className='ml-[max(5%,calc((100vw-1250px)/2))] mb-10'
//       >
//         <Swiper
//           ref={swiperRef1}
//           modules={[Navigation, FreeMode]}
//           spaceBetween={4}
//           slidesPerView={1.5}
//           speed={300}
//           freeMode={true}
//           preventInteractionOnTransition={true}
//           breakpoints={{
//             320: { slidesPerView: 1 },
//             1024: { slidesPerView: 1.3, spaceBetween: 30 },
//             1280: { slidesPerView: 1.6 },
//             1440: { slidesPerView: 1.9 },
//           }}
//         >
//           <SwiperSlide>
//             <img
//               className='w-[690px] select-none h-[380px] max-w-[100%]'
//               src='/ParkPage/card1.png'
//               alt=''
//             />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img
//               className='w-[690px] select-none h-[380px] max-w-[100%]'
//               src='/ParkPage/card2.png'
//               alt=''
//             />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img
//               className='w-[690px] select-none h-[380px] max-w-[100%]'
//               src='/ParkPage/card1.png'
//               alt=''
//             />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img
//               className='w-[690px] select-none h-[380px] max-w-[100%]'
//               src='/ParkPage/card2.png'
//               alt=''
//             />
//           </SwiperSlide>
//         </Swiper>
//       </motion.div>

//       {/* Navigation Buttons for First Slider */}
//       <div className='fix12 flex items-start pt-[20px]'>
//         <motion.div
//           initial={{ y: 100, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
//           viewport={{ amount: 0.1, once: true }}
//           className='flex gap-[14px] items-center justify-center'
//         >
//           <button className='swiper-button-prev-slider1 h-[41px] w-[41px]'>
//             <img
//               className='h-[41px] w-[41px]'
//               src='/ParkPage/parrowp.svg'
//               alt='ArrowLeft'
//             />
//           </button>
//           <button className='swiper-button-next-slider1 h-[41px] w-[41px]'>
//             <img
//               className='h-[41px] w-[41px]'
//               src='/ParkPage/parrown.svg'
//               alt='ArrowRight'
//             />
//           </button>
//         </motion.div>
//       </div>

//       {/* Second Slider */}
//       <motion.div
//         initial={{ x: 100, opacity: 0 }}
//         whileInView={{ x: 0, opacity: 1 }}
//         transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
//         viewport={{ amount: 0.5, once: true }}
//         className='ml-[max(5%,calc((100vw-1250px)/2))] mt-10'
//       >
//         <Swiper
//           ref={swiperRef2}
//           modules={[Navigation, FreeMode]}
//           spaceBetween={4}
//           slidesPerView={1.5}
//           speed={300}
//           freeMode={true}
//           preventInteractionOnTransition={true}
//           breakpoints={{
//             320: { slidesPerView: 1 },
//             1024: { slidesPerView: 1.3, spaceBetween: 30 },
//             1280: { slidesPerView: 1.6 },
//             1440: { slidesPerView: 1.9 },
//           }}
//         >
//           <SwiperSlide>
//             <img
//               className='w-[690px] select-none h-[380px] max-w-[100%]'
//               src='/ParkPage/card1.png'
//               alt=''
//             />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img
//               className='w-[690px] select-none h-[380px] max-w-[100%]'
//               src='/ParkPage/card2.png'
//               alt=''
//             />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img
//               className='w-[690px] select-none h-[380px] max-w-[100%]'
//               src='/ParkPage/card1.png'
//               alt=''
//             />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img
//               className='w-[690px] select-none h-[380px] max-w-[100%]'
//               src='/ParkPage/card2.png'
//               alt=''
//             />
//           </SwiperSlide>
//         </Swiper>
//       </motion.div>

//       {/* Navigation Buttons for Second Slider */}
//       <div className='fix12 flex items-start pt-[20px]'>
//         <motion.div
//           initial={{ y: 100, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
//           viewport={{ amount: 0.1, once: true }}
//           className='flex gap-[14px] items-center justify-center'
//         >
//           <button className='swiper-button-prev-slider2 h-[41px] w-[41px]'>
//             <img
//               className='h-[41px] w-[41px]'
//               src='/ParkPage/parrowp.svg'
//               alt='ArrowLeft'
//             />
//           </button>
//           <button className='swiper-button-next-slider2 h-[41px] w-[41px]'>
//             <img
//               className='h-[41px] w-[41px]'
//               src='/ParkPage/parrown.svg'
//               alt='ArrowRight'
//             />
//           </button>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default PhVdslider;

// 999999999999999999         9999999999999999999
// 999999999999999999         9999999999999999999
// 999999999999999999         9999999999999999999
// 999999999999999999         9999999999999999999
// 999999999999999999         9999999999999999999
// 999999999999999999         9999999999999999999
// 999999999999999999         9999999999999999999
// 999999999999999999         9999999999999999999
// 999999999999999999         9999999999999999999
// 999999999999999999         9999999999999999999
// 999999999999999999         9999999999999999999

"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GenLineHead from "../../../Components/Heading/GenLineHead";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

const ParkGallery = () => {
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
                  1440: { slidesPerView: 1.9 },
                }}
              >
                {["card1.png", "card2.png", "card1.png", "card2.png"].map(
                  (img, index) => (
                    <SwiperSlide key={index}>
                      <img
                        className="w-[690px] select-none h-[380px] max-w-[100%]"
                        src={`/ParkPage/${img}`}
                        alt=""
                      />
                    </SwiperSlide>
                  )
                )}
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
                  1440: { slidesPerView: 1.9 },
                }}
              >
                {["card1.png", "card2.png", "card1.png", "card2.png"].map(
                  (img, index) => (
                    <SwiperSlide key={index}>
                      <img
                        className="w-[690px] select-none h-[380px] max-w-[100%]"
                        src={`/ParkPage/${img}`}
                        alt=""
                      />
                    </SwiperSlide>
                  )
                )}
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

export default ParkGallery;
