"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import Landing from "./Landing";
import VidLand from "./VidLand";

const LandingSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div style={{ position: "relative" }}>
      <Swiper
        slidesPerGroup={1}
        className="max-w-full"
        speed={1500}
        modules={[FreeMode, Navigation]}
        navigation={{ nextEl: ".landingr", prevEl: ".landingl" }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        <SwiperSlide>
          <VidLand />
        </SwiperSlide>
        <SwiperSlide>
          <Landing isActive={activeIndex === 1} />
        </SwiperSlide>
      </Swiper>
      <div className="flex gap-10 items-center lg:justify-start justify-between absolute firstswbtns bottom-[20px] lg:bottom-[30px] z-10">
        <p className="text-white opacity-60 fsans-400 text-[16px]">
          Explore the Advantage <br />
          with KSH INFRA
        </p>
        <div className="flex items-center justify-center gap-5">
          <button className="landingl w-fit">
            <img className="w-10 h-10" src="/landingr.svg" alt="Prev" />
          </button>
          <button className="landingr w-10 h-10">
            <img className="w-10 h-10" src="/landingl.svg" alt="Next" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingSwiper;

// "use client";
// import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode, Navigation } from "swiper/modules";
// import { motion } from "framer-motion";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/scrollbar";
// import Landing from "./Landing";
// import VidLand from "./VidLand";

// const LandingSwiper = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(true);

//   useEffect(() => {
//     if (isAnimating) {
//       document.body.style.overflow = "hidden"; // Disable scrolling
//     } else {
//       document.body.style.overflow = "auto"; // Enable scrolling after animation
//     }

//     return () => {
//       document.body.style.overflow = "auto"; // Cleanup on unmount
//     };
//   }, [!isAnimating]);

//   return (
//     <div className="h-screen">
//       <motion.div
//         className="relative overflow-hidden"
//         initial={{ height: 0 }}
//         whileInView={{ height: "100vh" }}
//         transition={{
//           duration: 1,
//           ease: [0.7, 0, 0.4, 1],
//         }}
//         onAnimationComplete={() => setIsAnimating(false)} // Unlock scrolling after animation
//       >
//         <Swiper
//           slidesPerGroup={1}
//           className="max-w-full"
//           speed={1000}
//           modules={[FreeMode, Navigation]}
//           navigation={{ nextEl: ".landingr", prevEl: ".landingl" }}
//           onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
//         >
//           <SwiperSlide>
//             <motion.div
//               initial={{ width: 0 }}
//               animate={{ width: activeIndex === 0 ? "100%" : 0 }}
//               transition={{ duration: 0.3, ease: [0.7, 0, 0.4, 1] }}
//             >
//               <VidLand />
//             </motion.div>
//           </SwiperSlide>

//           <SwiperSlide>
//             <motion.div
//               initial={{ width: 0 }}
//               animate={{ width: activeIndex === 1 ? "100%" : 0 }}
//               transition={{ duration: 0.3, ease: [0.7, 0, 0.4, 1] }}
//             >
//               <Landing isActive={activeIndex === 1} />
//             </motion.div>
//           </SwiperSlide>
//         </Swiper>

//         {/* Navigation Buttons */}
//         <div className="flex gap-10 items-center lg:justify-start justify-between absolute firstswbtns bottom-[20px] lg:bottom-[30px] z-10">
//           <p className="text-white opacity-60 fsans-400 text-[16px]">
//             Explore the Advantage <br />
//             with KSH INFRA
//           </p>
//           <div className="flex items-center justify-center gap-5">
//             <button className="landingl w-fit">
//               <img className="w-10 h-10" src="/landingr.svg" alt="Prev" />
//             </button>
//             <button className="landingr w-10 h-10">
//               <img className="w-10 h-10" src="/landingl.svg" alt="Next" />
//             </button>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default LandingSwiper;

// "use client";
// import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode, Navigation } from "swiper/modules";
// import { motion } from "framer-motion";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/scrollbar";
// import Landing from "./Landing";
// import EnquireNow from "./EnquireNow";
// import VidLand from "./VidLand";

// const LandingSwiper = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [showEnquire, setShowEnquire] = useState(false);

//   const handleEnquireClick = () => {
//     setShowEnquire(true); // Show the EnquireNow component when the button is clicked
//   };

//   return (
//     <div className="h-screen">
//       <button
//         className="text-[#092241] px-[10px] py-[25px] absolute top-[50%] z-[1000]
//          bg-gradient-to-l from-white from-[39%] to-[#A4AFCA] -rotate-180 right-0 [writing-mode:tb-rl] fsans-600 text-[16px]"
//         onClick={handleEnquireClick} // On click, show EnquireNow
//       >
//         Enquire Now
//       </button>

//       {/* EnquireNow Component */}
//       {showEnquire && (
//         <motion.div
//           className="absolute top-0 right-0 w-full h-full bg-white z-[9999] p-5"
//           initial={{ x: "100%" }} // Start off the screen
//           animate={{ x: 0 }} // Slide in from the right
//           exit={{ x: "100%" }} // Slide out to the right
//           transition={{ duration: 0.5 }} // Duration of the slide animation
//         >
//           <EnquireNow />
//         </motion.div>
//       )}
//       <motion.div
//         className="relative overflow-hidden max-w-screen"
//         initial={{ maxWidth: 0 }}
//         whileInView={{ maxWidth: "100vw" }}
//         transition={{
//           duration: 1,
//           ease: [0.7, 0, 0.4, 1],
//         }}
//         viewport={{ amount: 0, once: true }}
//         style={{ maxWidth: "100vw" }}
//       >
//         <Swiper
//           slidesPerGroup={1}
//           className="max-w-full"
//           speed={1000}
//           modules={[FreeMode, Navigation]}
//           navigation={{ nextEl: ".landingr", prevEl: ".landingl" }}
//           onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
//         >
//           <SwiperSlide>
//             <motion.div
//               initial={{ width: 0 }}
//               animate={{ width: activeIndex === 0 ? "100%" : 0 }}
//               transition={{ duration: 0.3, ease: [0.7, 0, 0.4, 1] }}
//             >
//               <VidLand />
//             </motion.div>
//           </SwiperSlide>

//           <SwiperSlide>
//             <motion.div
//               initial={{ width: 0 }}
//               animate={{ width: activeIndex === 1 ? "100%" : 0 }}
//               transition={{ duration: 0.3, ease: [0.7, 0, 0.4, 1] }}
//             >
//               <Landing isActive={activeIndex === 1} />
//             </motion.div>
//           </SwiperSlide>
//         </Swiper>

//         {/* Navigation Buttons */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1.2, ease: [0.7, 0, 0.4, 1] }}
//           viewport={{ amount: 0, once: true }}
//           className="flex gap-10 items-center lg:justify-start justify-between absolute firstswbtns bottom-[20px] lg:bottom-[30px] z-10"
//         >
//           <p className="text-white opacity-60 fsans-400 text-[16px]">
//             Explore the Advantage <br />
//             with KSH INFRA
//           </p>
//           <div className="flex items-center justify-center gap-5">
//             <button className="landingl w-fit">
//               <img className="w-10 h-10" src="/landingr.svg" alt="Prev" />
//             </button>
//             <button className="landingr w-10 h-10">
//               <img className="w-10 h-10" src="/landingl.svg" alt="Next" />
//             </button>
//           </div>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default LandingSwiper;

// LandingSwiper.js
// "use client";
// import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode, Navigation } from "swiper/modules";
// import { AnimatePresence, motion } from "framer-motion";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/scrollbar";
// import Landing from "./Landing";
// import EnquireNow from "./EnquireNow";
// import VidLand from "./VidLand";

// const LandingSwiper = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [showEnquire, setShowEnquire] = useState(false);

//   const handleEnquireClick = () => {
//     setShowEnquire(true); // Show the EnquireNow component when the button is clicked
//   };

//   const handleCloseEnquire = () => {
//     setShowEnquire(false); // Hide the EnquireNow component when the back arrow is clicked
//   };

//   return (
//     <div className="h-screen relative overflow-hidden">
//       <button
//         className="text-[#092241] px-[10px] py-[25px] absolute top-[50%] z-[1000]
//          bg-gradient-to-l from-white from-[39%] to-[#A4AFCA] -rotate-180 right-0 [writing-mode:tb-rl] fsans-600 text-[16px]"
//         onClick={handleEnquireClick} // On click, show EnquireNow
//       >
//         Enquire Now
//       </button>

//       {/* EnquireNow Component */}
//       <AnimatePresence>
//         {showEnquire && (
//           <motion.div
//             className="absolute z-[100000000000000000] top-0 right-0 w-[510px] overflow-hidden"
//             initial={{ x: "510px" }} // Start off the screen
//             animate={{ x: 0 }} // Slide in from the right
//             exit={{
//               x: "510px", // Slide out to the right
//               transition: { duration: 0.5 }, // Duration of the slide-out animation
//             }}
//             transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }} // Duration of the slide animation
//           >
//             <EnquireNow closeEnquire={handleCloseEnquire} />
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <motion.div
//         className="relative overflow-hidden max-w-screen"
//         initial={{ maxWidth: 0 }}
//         whileInView={{ maxWidth: "100vw" }}
//         transition={{
//           duration: 1,
//           ease: [0.7, 0, 0.4, 1],
//         }}
//         viewport={{ amount: 0, once: true }}
//         style={{ maxWidth: "100vw" }}
//       >
//         <Swiper
//           slidesPerGroup={1}
//           className="max-w-full"
//           speed={1000}
//           modules={[FreeMode, Navigation]}
//           navigation={{ nextEl: ".landingr", prevEl: ".landingl" }}
//           onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
//         >
//           <SwiperSlide>
//             <motion.div
//               initial={{ width: 0 }}
//               animate={{ width: activeIndex === 0 ? "100%" : 0 }}
//               transition={{ duration: 0.3, ease: [0.7, 0, 0.4, 1] }}
//             >
//               <VidLand />
//             </motion.div>
//           </SwiperSlide>

//           <SwiperSlide>
//             <motion.div
//               initial={{ width: 0 }}
//               animate={{ width: activeIndex === 1 ? "100%" : 0 }}
//               transition={{ duration: 0.3, ease: [0.7, 0, 0.4, 1] }}
//             >
//               <Landing isActive={activeIndex === 1} />
//             </motion.div>
//           </SwiperSlide>
//         </Swiper>

//         {/* Navigation Buttons */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1.2, ease: [0.7, 0, 0.4, 1] }}
//           viewport={{ amount: 0, once: true }}
//           className="flex gap-10 items-center lg:justify-start justify-between absolute firstswbtns bottom-[20px] lg:bottom-[30px] z-10"
//         >
//           <p className="text-white opacity-60 fsans-400 text-[16px]">
//             Explore the Advantage <br />
//             with KSH INFRA
//           </p>
//           <div className="flex items-center justify-center gap-5">
//             <button className="landingl w-fit">
//               <img className="w-10 h-10" src="/landingr.svg" alt="Prev" />
//             </button>
//             <button className="landingr w-10 h-10">
//               <img className="w-10 h-10" src="/landingl.svg" alt="Next" />
//             </button>
//           </div>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default LandingSwiper;
