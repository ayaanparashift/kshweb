// "use client";
// import { useState, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { motion, AnimatePresence } from "framer-motion";
// import "swiper/css";
// import "swiper/css/navigation";

// const SlideBlog = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const swiperRef = useRef(null);
//   const lastClickTime = useRef(Date.now());

//   const slideimgs = [
//     { name: "slide1" },
//     { name: "slide2" },
//     { name: "slide3" },
//     { name: "slide4" },
//   ];
//   const getTransitionSpeed = () => {
//     const now = Date.now();
//     const delta = now - lastClickTime.current;
//     lastClickTime.current = now;
//     return delta < 300 ? 200 : 600;
//   };

//   const handleNext = () => {
//     if (swiperRef.current) {
//       const newIndex = (activeIndex + 1) % 3;
//       const speed = getTransitionSpeed();
//       setActiveIndex(newIndex);
//       swiperRef.current.slideTo(newIndex, speed, false);
//     }
//   };

//   const handlePrev = () => {
//     if (swiperRef.current) {
//       const newIndex = (activeIndex - 1 + 3) % 3;
//       const speed = getTransitionSpeed();
//       setActiveIndex(newIndex);
//       swiperRef.current.slideTo(newIndex, speed, false);
//     }
//   };

//   return (
//     <div
//       className="h-auto lg:h-[690px] flex overflow-hidden"
//       style={{
//         background: "linear-gradient(to bottom, #ffffff 50%, #092241 50%)",
//       }}
//     >
//       <div className="relative h-fit lg:h-[596px] flex lg:flex-row flex-col overflow-hidden  w-[100%] xl-1920:mr-[17.4%] xl-1600:mr-[172px] xl-1536:mr-[140px] xl-1440:mr-[94px] xl-1366:mr-[66px] xl-1280:mr-[62px] xl-1024:mr-[50px]">
//         {/* Left Section */}
//         <div className="leftCon bg-[#141D28] w-full lg:w-[60%] xl-1920:pl-[21%] xl-1600:pl-[174px] xl-1536:pl-[140px] xl-1440:pl-[90px] xl-1366:pl-[70px] xl-1280:pl-[64px] xl-1024:pl-[50px] xl-768:pl-[40px]">
//           {/* Heading */}
//           <div className="px-[5%] md:px-0 md:flex items-center justify-between xl-1024:w-[90%] xl-768:pr-[40px] lg:w-[600px] pt-[70px] border-b-[1px] pb-3 border-[#D7D7D7] border-opacity-50 xl-1920:w-[80%]">
//             <h1 className="text-xl pb-4 md:pb-0 text-white font-semibold">
//               Careers at KSH
//             </h1>
//           </div>

//           {/* Animated Content Section */}
//           <div className="relative w-full h-[300px] xl-1024:h-[350px] overflow-hidden px-[5%] md:px-0">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeIndex}
//                 initial={{ x: 500, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 exit={{ x: -500, opacity: 0 }}
//                 transition={{ duration: 0.6, ease: [0.7, 0, 0.4, 1] }}
//                 className="absolute text-white "
//               >
//                 {/* <h1 className="text-3xl md:text-6xl font-medium border-b-[8px] border-[#F7E327] w-fit pb-3 pt-16">
//                   Slide {activeIndex + 1}
//                 </h1> */}
//                 <p className="md:w-[60%] pt-6 md:pt-12 md:pb-12 text-base text-[#6C8DAB]">
//                   Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
//                   eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut
//                   enim ad minim veniam, quis nostrum exercitationem ullam
//                   corporis suscipit.
//                 </p>
//               </motion.div>
//             </AnimatePresence>
//           </div>
//           {/* Navigation Buttons */}
//           <div className="flex items-center pt-[45px] px-[5%] md:px-0 md:w-[60%] justify-between pb-[70px]">
//             <div className="flex items-center gap-4 text-[#fff] text-[16px] group hover:translate-x-[5px] transition-transform duration-[400ms] cursor-pointer">
//               <img
//                 src="/buttonarrows/redarico.svg"
//                 className="group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-[400ms] ease-in-out h-10 w-10 rotate-45 hover:rotate-0 cursor-pointer"
//                 alt=""
//               />
//               Explore Careers
//             </div>

//             <div className="flex gap-2 items-center">
//               <button
//                 className="w-10 h-10 flex items-center justify-center"
//                 onClick={handlePrev}
//               >
//                 <img className="h-10 w-10" src="/landingr.svg" alt="" />
//               </button>
//               <div className="text-base text-[#6C8DAB]">
//                 {activeIndex + 1} / 3
//               </div>
//               <button
//                 className="w-10 h-10 flex items-center justify-center"
//                 onClick={handleNext}
//               >
//                 <img className="h-10 w-10" src="/landingl.svg" alt="" />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Right Section (Swiper) */}
//         <div className="rightCon w-full lg:w-[40%] h-full rigthSectionOfCarrer min-h-full">
//           <Swiper
//             speed={1600}
//             allowTouchMove={false}
//             simulateTouch={false}
//             style={{ minHeight: "100%" }}
//             onSwiper={(swiper) => (swiperRef.current = swiper)}
//           >
//             {slideimgs.map((slide) => (
//               <SwiperSlide
//                 key={slide}
//                 className="min-h-full"
//                 style={{ minHeight: "100%" }}
//               >
//                 <img
//                   draggable={false}
//                   src={`/slideimgs2/${slide.name}.png`}
//                   alt={`Slide image`}
//                   className="max-w-none w-full min-h-full object-cover"
//                 />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SlideBlog;

"use client";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

const SlideBlog = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const lastClickTime = useRef(Date.now());

  const slideimgs = [
    { name: "slide1" },
    { name: "slide2" },
    { name: "slide3" },
    { name: "slide4" },
  ];

  const getTransitionSpeed = () => {
    const now = Date.now();
    const delta = now - lastClickTime.current;
    lastClickTime.current = now;
    return delta < 300 ? 200 : 600;
  };

  const handleNext = () => {
    if (swiperRef.current) {
      const newIndex = (activeIndex + 1) % 3;
      const speed = getTransitionSpeed();
      setActiveIndex(newIndex);
      swiperRef.current.slideTo(newIndex, speed, false);
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      const newIndex = (activeIndex - 1 + 3) % 3;
      const speed = getTransitionSpeed();
      setActiveIndex(newIndex);
      swiperRef.current.slideTo(newIndex, speed, false);
    }
  };

  return (
    // Set a fixed height for the outer container.
    <div
      className="h-[465px] flex overflow-hidden mt-[110px]"
      style={{
        background: "linear-gradient(to bottom, #ffffff 50%, #092241 50%)",
      }}
    >
      <div className="relative h-full flex lg:flex-row flex-col overflow-hidden w-full xl-1920:mr-[17.4%] xl-1600:mr-[172px] xl-1536:mr-[140px] xl-1440:mr-[94px] xl-1366:mr-[66px] xl-1280:mr-[62px] xl-1024:mr-[50px]">
        {/* Left Section */}
        <div className="leftCon bg-[#141D28] w-full lg:w-[60%] xl-1920:pl-[21%] xl-1600:pl-[174px] xl-1536:pl-[140px] xl-1440:pl-[90px] xl-1366:pl-[70px] xl-1280:pl-[64px] xl-1024:pl-[50px] xl-768:pl-[40px]">
          {/* Heading */}
          <div className="px-[5%] md:px-0 md:flex items-center justify-between xl-1024:w-[90%] xl-768:pr-[40px] lg:w-[600px] pt-[70px] border-b-[1px] pb-3 border-[#D7D7D7] border-opacity-50 xl-1920:w-[80%]">
            <h1 className="text-xl pb-4 md:pb-0 text-white font-semibold">
              Careers at KSH
            </h1>
          </div>

          {/* Animated Content Section */}
          <div className="relative w-full h-[200px] xl-1024:h-[250px] overflow-hidden px-[5%] md:px-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ x: 500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -500, opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.7, 0, 0.4, 1] }}
                className="absolute text-white"
              >
                <p className="md:w-[60%] pt-6 md:pt-12 md:pb-12 text-base text-[#6C8DAB]">
                  Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                  eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrum exercitationem ullam
                  corporis suscipit.
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Navigation Buttons */}
          <div className="flex items-center pt-[45px] px-[5%] md:px-0 md:w-[60%] justify-between pb-[70px]">
            <div className="flex items-center gap-4 text-[#fff] text-[16px] group hover:translate-x-[5px] transition-transform duration-[400ms] cursor-pointer">
              <img
                src="/buttonarrows/redarico.svg"
                className="group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-[400ms] ease-in-out h-10 w-10 rotate-45 hover:rotate-0 cursor-pointer"
                alt="Explore Careers"
              />
              Explore Careers
            </div>

            <div className="flex gap-2 items-center">
              <button
                className="w-10 h-10 flex items-center justify-center"
                onClick={handlePrev}
              >
                <img
                  className="h-10 w-10"
                  src="/landingr.svg"
                  alt="Previous slide"
                />
              </button>
              <div className="text-base text-[#6C8DAB]">
                {activeIndex + 1} / 3
              </div>
              <button
                className="w-10 h-10 flex items-center justify-center"
                onClick={handleNext}
              >
                <img
                  className="h-10 w-10"
                  src="/landingl.svg"
                  alt="Next slide"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Right Section (Swiper) */}
        <div className="rightCon w-full lg:w-[40%] h-full">
          <Swiper
            speed={1600}
            allowTouchMove={false}
            simulateTouch={false}
            style={{ height: "100%" }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {slideimgs.map((slide, index) => (
              <SwiperSlide
                key={index}
                className="h-full"
                style={{ height: "100%" }}
              >
                <img
                  draggable={false}
                  src={`/slideimgs2/${slide.name}.png`}
                  alt={`Slide ${index + 1}`}
                  className="max-w-none w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SlideBlog;
