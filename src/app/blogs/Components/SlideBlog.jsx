// // "use client";
// // import { useState, useRef } from "react";
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import "swiper/css";
// // import "swiper/css/navigation";

// // const SlideBlog = () => {
// //   const [activeIndex, setActiveIndex] = useState(0);
// //   const swiperRef = useRef(null);
// //   const lastClickTime = useRef(Date.now());

// //   const slideimgs = [
// //     { name: "slide1" },
// //     { name: "slide2" },
// //     { name: "slide3" },
// //     { name: "slide4" },
// //   ];
// //   const getTransitionSpeed = () => {
// //     const now = Date.now();
// //     const delta = now - lastClickTime.current;
// //     lastClickTime.current = now;
// //     return delta < 300 ? 200 : 600;
// //   };

// //   const handleNext = () => {
// //     if (swiperRef.current) {
// //       const newIndex = (activeIndex + 1) % 3;
// //       const speed = getTransitionSpeed();
// //       setActiveIndex(newIndex);
// //       swiperRef.current.slideTo(newIndex, speed, false);
// //     }
// //   };

// //   const handlePrev = () => {
// //     if (swiperRef.current) {
// //       const newIndex = (activeIndex - 1 + 3) % 3;
// //       const speed = getTransitionSpeed();
// //       setActiveIndex(newIndex);
// //       swiperRef.current.slideTo(newIndex, speed, false);
// //     }
// //   };

// //   return (
// //     <div
// //       className="h-auto lg:h-[690px] flex overflow-hidden"
// //       style={{
// //         background: "linear-gradient(to bottom, #ffffff 50%, #092241 50%)",
// //       }}
// //     >
// //       <div className="relative h-fit lg:h-[596px] flex lg:flex-row flex-col overflow-hidden  w-[100%] xl-1920:mr-[17.4%] xl-1600:mr-[172px] xl-1536:mr-[140px] xl-1440:mr-[94px] xl-1366:mr-[66px] xl-1280:mr-[62px] xl-1024:mr-[50px]">
// //         {/* Left Section */}
// //         <div className="leftCon bg-[#141D28] w-full lg:w-[60%] xl-1920:pl-[21%] xl-1600:pl-[174px] xl-1536:pl-[140px] xl-1440:pl-[90px] xl-1366:pl-[70px] xl-1280:pl-[64px] xl-1024:pl-[50px] xl-768:pl-[40px]">
// //           {/* Heading */}
// //           <div className="px-[5%] md:px-0 md:flex items-center justify-between xl-1024:w-[90%] xl-768:pr-[40px] lg:w-[600px] pt-[70px] border-b-[1px] pb-3 border-[#D7D7D7] border-opacity-50 xl-1920:w-[80%]">
// //             <h1 className="text-xl pb-4 md:pb-0 text-white font-semibold">
// //               Careers at KSH
// //             </h1>
// //           </div>

// //           {/* Animated Content Section */}
// //           <div className="relative w-full h-[300px] xl-1024:h-[350px] overflow-hidden px-[5%] md:px-0">
// //             <AnimatePresence mode="wait">
// //               <motion.div
// //                 key={activeIndex}
// //                 initial={{ x: 500, opacity: 0 }}
// //                 animate={{ x: 0, opacity: 1 }}
// //                 exit={{ x: -500, opacity: 0 }}
// //                 transition={{ duration: 0.6, ease: [0.7, 0, 0.4, 1] }}
// //                 className="absolute text-white "
// //               >
// //                 {/* <h1 className="text-3xl md:text-6xl font-medium border-b-[8px] border-[#F7E327] w-fit pb-3 pt-16">
// //                   Slide {activeIndex + 1}
// //                 </h1> */}
// //                 <p className="md:w-[60%] pt-6 md:pt-12 md:pb-12 text-base text-[#6C8DAB]">
// //                   Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
// //                   eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut
// //                   enim ad minim veniam, quis nostrum exercitationem ullam
// //                   corporis suscipit.
// //                 </p>
// //               </motion.div>
// //             </AnimatePresence>
// //           </div>
// //           {/* Navigation Buttons */}
// //           <div className="flex items-center pt-[45px] px-[5%] md:px-0 md:w-[60%] justify-between pb-[70px]">
// //             <div className="flex items-center gap-4 text-[#fff] text-[16px] group hover:translate-x-[5px] transition-transform duration-[400ms] cursor-pointer">
// //               <img
// //                 src="/buttonarrows/redarico.svg"
// //                 className="group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-[400ms] ease-in-out h-10 w-10 rotate-45 hover:rotate-0 cursor-pointer"
// //                 alt=""
// //               />
// //               Explore Careers
// //             </div>

// //             <div className="flex gap-2 items-center">
// //               <button
// //                 className="w-10 h-10 flex items-center justify-center"
// //                 onClick={handlePrev}
// //               >
// //                 <img className="h-10 w-10" src="/landingr.svg" alt="" />
// //               </button>
// //               <div className="text-base text-[#6C8DAB]">
// //                 {activeIndex + 1} / 3
// //               </div>
// //               <button
// //                 className="w-10 h-10 flex items-center justify-center"
// //                 onClick={handleNext}
// //               >
// //                 <img className="h-10 w-10" src="/landingl.svg" alt="" />
// //               </button>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Right Section (Swiper) */}
// //         <div className="rightCon w-full lg:w-[40%] h-full rigthSectionOfCarrer min-h-full">
// //           <Swiper
// //             speed={1600}
// //             allowTouchMove={false}
// //             simulateTouch={false}
// //             style={{ minHeight: "100%" }}
// //             onSwiper={(swiper) => (swiperRef.current = swiper)}
// //           >
// //             {slideimgs.map((slide) => (
// //               <SwiperSlide
// //                 key={slide}
// //                 className="min-h-full"
// //                 style={{ minHeight: "100%" }}
// //               >
// //                 <img
// //                   draggable={false}
// //                   src={`/slideimgs2/${slide.name}.png`}
// //                   alt={`Slide image`}
// //                   className="max-w-none w-full min-h-full object-cover"
// //                 />
// //               </SwiperSlide>
// //             ))}
// //           </Swiper>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SlideBlog;

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
//     { name: "slide1" },
//     { name: "slide1" },
//     { name: "slide1" },
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
//     // Set a fixed height for the outer container.
//     <div
//       className="h-[465px] flex overflow-hidden mt-[110px]"
//       style={{
//         background: "linear-gradient(to bottom, #ffffff 50%, #092241 50%)",
//       }}
//     >
//       <div className="relative h-full flex lg:flex-row flex-col overflow-hidden w-full xl-1920:mr-[17.4%] xl-1600:mr-[172px] xl-1536:mr-[140px] xl-1440:mr-[94px] xl-1366:mr-[66px] xl-1280:mr-[62px] xl-1024:mr-[50px]">
//         {/* Left Section */}
//         <div className="leftCon bg-[#141D28] w-full lg:w-[60%] xl-1920:pl-[21%] xl-1600:pl-[174px] xl-1536:pl-[140px] xl-1440:pl-[90px] xl-1366:pl-[70px] xl-1280:pl-[64px] xl-1024:pl-[50px] xl-768:pl-[40px]">
//           {/* Heading */}
//           <div className="px-[5%] md:px-0 md:flex items-center justify-between xl-1024:w-[90%] xl-768:pr-[40px] lg:w-[600px] pt-[70px] border-b-[1px] pb-3 border-[#D7D7D7] border-opacity-50 xl-1920:w-[80%]">
//             <h1 className="text-xl pb-4 md:pb-0 text-white font-semibold">
//               Careers at KSH
//             </h1>
//           </div>

//           {/* Animated Content Section */}
//           <div className="relative w-full h-[200px] xl-1024:h-[250px] overflow-hidden px-[5%] md:px-0">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeIndex}
//                 initial={{ x: 500, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 exit={{ x: -500, opacity: 0 }}
//                 transition={{ duration: 0.6, ease: [0.7, 0, 0.4, 1] }}
//                 className="absolute text-white"
//               >
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
//                 alt="Explore Careers"
//               />
//               Explore Careers
//             </div>

//             <div className="flex gap-2 items-center">
//               <button
//                 className="w-10 h-10 flex items-center justify-center"
//                 onClick={handlePrev}
//               >
//                 <img
//                   className="h-10 w-10"
//                   src="/landingr.svg"
//                   alt="Previous slide"
//                 />
//               </button>
//               <div className="text-base text-[#6C8DAB]">
//                 {activeIndex + 1} / 3
//               </div>
//               <button
//                 className="w-10 h-10 flex items-center justify-center"
//                 onClick={handleNext}
//               >
//                 <img
//                   className="h-10 w-10"
//                   src="/landingl.svg"
//                   alt="Next slide"
//                 />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Right Section (Swiper) */}
//         <div className="rightCon w-full lg:w-[40%] h-full">
//           <Swiper
//             speed={1600}
//             allowTouchMove={false}
//             simulateTouch={false}
//             style={{ height: "100%" }}
//             onSwiper={(swiper) => (swiperRef.current = swiper)}
//           >
//             {slideimgs.map((slide, index) => (
//               <SwiperSlide
//                 key={index}
//                 className="h-full"
//                 style={{ height: "100%" }}
//               >
//                 <img
//                   draggable={false}
//                   src={`/slideimgs2/${slide.name}.png`}
//                   alt={`Slide ${index + 1}`}
//                   className="max-w-none w-full h-full object-cover"
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
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-creative";
import "swiper/css/effect-fade";

import { Autoplay, EffectCreative } from "swiper/modules";
import Link from "next/link";
const SlideBlog = ({ blogs, bimg }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  // const tabs = ["Growth", "Culture", "Opportunities"];

  const tabsData = [
    {
      title: "Growth",
      description: "The Impact of Ergonomics on Worker Productivity and Safety",
      image: "/Slideimgs/Growth.png",
      middleImage: "/Slideimgs/Growth-middle.png",
    },
    {
      title: "Culture",
      description:
        "Why Sustainable Industrial and Logistics Parks is the Need of the Hour for Indian Industry",
      image: "/Slideimgs/Culture.png",
      middleImage: "/Slideimgs/Culture-middle.png",
    },
    {
      title: "Opportunities",
      description:
        "The Evolution of Grade A Industrial and Logistics Parks: Trends and Insights",
      image: "/Slideimgs/Opportunities.png",
      middleImage: "/Slideimgs/Opportunities-middle.png",
    },
    {
      title: "One Piece",
      description:
        "Top Challenges in Logistics and Industrial Real Estate Development—and How KSH INFRA Solves Them",
      image: "/Slideimgs/Opportunities.png",
      middleImage: "/Slideimgs/Opportunities-middle.png",
    },
  ];

  const swiperRef = useRef(null);
  // Handle tab click (updates both tab and slide)
  const handleTabClick = (index) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
      if (swiperRef.current) {
        swiperRef.current.slideTo(index);
      }
    }
  };
  // Handle navigation
  const handleNext = () => {
    if (swiperRef.current && activeIndex < tabsData.length - 1) {
      setActiveIndex(activeIndex + 1);
      swiperRef.current.slideNext();
    }
  };
  const handlePrev = () => {
    if (swiperRef.current && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
      swiperRef.current.slidePrev();
    }
  };
  return (
    <div
      className="h-auto mt-[60px] flex overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #ffffff 50%, #092241 50%)",
      }}
    >
      <div className="relative h-fit lg:h-[500px] flex lg:flex-row flex-col overflow-hidden  w-[100%] mr-[max(5%,calc((100vw-1250px)/2))]">
        {/* Left Section */}
        <div className="leftCon bg-[#141D28] w-full lg:w-[60%] xl-1920:pl-[21%] xl-1600:pl-[174px] xl-1536:pl-[140px] xl-1440:pl-[90px] xl-1366:pl-[70px] xl-1280:pl-[64px] xl-1024:pl-[50px] xl-768:pl-[40px]">
          {/* Heading & Tabs */}

          <div className="px-[5%] md:px-0 md:flex items-center justify-between xl-1024:w-[90%] xl-768:pr-[40px] lg:w-[600px] pt-[70px] border-b-[1px] pb-3 border-[#D7D7D7] border-opacity-50 xl-1920:w-[80%]">
            <h1 className="text-[44px] pb-4 md:pb-0 text-white">Featured</h1>
            {/* Tabs */}
          </div>

          {/* Animated Content Section */}
          <div className="relative w-full h-[200px] overflow-hidden px-[5%] md:px-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ x: 500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -500, opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.7, 0, 0.4, 1] }}
                className="text-white" // Removed "absolute"
              >
                <p className="md:w-[60%] max-w-full md:mx-0 mx-auto pt-6 md:pt-12 md:pb-12 text-[24px] text-[#6C8DAB]">
                  {tabsData && tabsData[activeIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center pt-[45px] px-[5%] md:px-0 md:w-[60%] justify-between pb-[70px]">
            {/* <button className="flex group hover:translate-x-[5px] transition-transform duration-[400ms] items-center justify-center gap-3">
              <img
                src="/buttonarrows/redarico.svg"
                width={0}
                height={0}
                className="h-10 w-10 rotate-45 group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-300 cursor-pointer"
                alt="Red Arrow Icon"
              />
              <p className="text-[#ffffff] fsans-600">Explore More</p>
            </button> */}

            <motion.div
              className="flex cursor-pointer group items-center justify-between font-semibold text-[#ffffff] text-[16px] h-[50px] w-fit"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
            >
              {/* Adding a key based on acbtn to force remount if it changes */}
              <Link
                href="/career"
                className="flex group hover:translate-x-[5px] transition-transform duration-[400ms] items-center justify-center gap-3"
              >
                <img
                  src="/buttonarrows/redarico.svg"
                  width={0}
                  height={0}
                  className="h-10 w-10 rotate-45 group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-300 cursor-pointer"
                  alt="Red Arrow Icon"
                />
                <p className="text-[#ffffff] fsans-600">Explore More</p>
              </Link>
            </motion.div>

            <div className="flex gap-2 items-center">
              <button
                className="w-10 h-10 flex items-center justify-center disabled:opacity-50"
                onClick={handlePrev}
                disabled={activeIndex === 0}
              >
                <img className="h-10 w-10" src="/landingr.svg" alt="" />
              </button>
              <div className="text-base text-[#6C8DAB]">
                {activeIndex + 1} / {tabsData.length}
              </div>
              <button
                className="w-10 h-10 flex items-center justify-center disabled:opacity-50"
                onClick={handleNext}
                disabled={activeIndex === tabsData.length - 1}
              >
                <img className="h-10 w-10" src="/landingl.svg" alt="" />
              </button>
            </div>
          </div>
        </div>

        {/* Middle Section (Dynamic Image) */}
        {/* <div className="middleSection w-[205px] left-[52%] z-10 h-full absolute lg:inline-block hidden">
          <motion.div className=" w-full h-fit">
            <motion.img
              key={tabsData && tabsData[activeIndex].middleImage}
              initial={{ y: 14 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.2 }}
              // exit={{ y: -100 }}
              src={tabsData && tabsData[activeIndex].middleImage}
              className="w-full h-auto transition-opacity duration-500 ease-in-out object-cover mt-[125%]"
            />
          </motion.div>
        </div> */}

        {/* Right Section (Swiper) */}
        <div className="rightCon w-full lg:w-[40%] h-full rigthSectionOfCarrer">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            speed={1000}
            modules={[EffectCreative, Autoplay]}
            className="mySwiper"
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {tabsData &&
              tabsData.map((tab) => (
                <SwiperSlide key={tab.title}>
                  <img
                    // src={`/Slideimgs/${tab.image}.png`}
                    src={tab.image}
                    alt={tab}
                    className="max-w-none w-full xl-1440:w-auto xl-1366:w-auto xl-1280:w-auto xl-1024:w-auto"
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
