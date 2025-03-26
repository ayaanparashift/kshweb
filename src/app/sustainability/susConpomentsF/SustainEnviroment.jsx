// "use client";
// import React, { useRef, useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/scrollbar";
// import SwiperCard from "../../Components/USP/SwiperCard";
// import LineHead from "../../Components/Heading/LineHead";
// import { motion } from "framer-motion";
// const SustainEnviroment = () => {
//   const videoRef = useRef(null);
//   const [hasPlayed, setHasPlayed] = useState(false);

//   const swcontent = [
//     {
//       title: "Positioned at a prime location seamless connectivity",
//       icon: "/uspicons/icon1.svg",
//       content: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
//     },
//     {
//       title: "Equipped with modern warehousing facilities",
//       icon: "/uspicons/icon2.svg",
//       content: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
//     },
//     {
//       title: "Offers competitive pricing models and eco-friendly operations",
//       icon: "/uspicons/icon4.svg",
//       content: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
//     },
//     {
//       title: "Positioned at a prime location seamless connectivity",
//       icon: "/uspicons/icon1.svg",
//       content: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
//     },
//   ];

//   return (
//     <div className="bg-white uspcontainer w-full flex items-center justify-center flex-col overflow-hidden">
//       <div className="flex flex-col max-w-[100vw] h-fit">
//         <div className="relative z-10 pt-[50px] max-w-[1250px] w-[90%] mx-auto md:pt-[92px] h-fit flex flex-col">
//           <LineHead heading={"Environmental"} fontSize={44} lineHeigth={30} />
//         </div>
//         <div className="flex lg:flex-row flex-col-reverse md:p-0 px-5 pt-0 max-h-fit lg:gap-0 gap-5 relative ">
//           <div className="hidden min-1280:flex items-end justify-center bottom-[140px] absolute left-0 w-[675px]">
//             {/* <video
//               ref={videoRef}
//               src="/uspicons/USP.mp4"
//               className="min-w-full min-h-full scale-[1.3]"
//               muted
//             ></video> */}
//             <img
//               src="Sustainability/SustainEnvironmental.png"
//               className="min-w-full min-h-full scale-[1.3]"
//               alt=""
//             />
//           </div>
//           <div className="xl:w-full lg:w-[90%] xl-768:w-[90%] mx-auto flex flex-col h-fit max-w-full justify-center items-start gap-[33px] lg:pb-[110px] xl:pl-[765px] xl-1280:pl-[700px] pb-20">
//             <motion.div className="flex sm:flex-row flex-col sm:items-center items-start justify-start gap-[20px] sm:gap-[92px] xl-1024:mr-[50px] xl-1280:mr-[59px] xl-1366:mr-[55px] xl-1600:mr-[171px] xl-1536:mr-[145px] xl-1440:mr-[90px] xl-1920:mr-[29%]">
//               <p className="fsans-400 text-[18px] leading-[26px] text-[#6C8DAB] z-[1]">
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
//                 aliquid quas sapiente quaerat eligendi voluptatum necessitatibus
//                 natus, incidunt ipsa ipsum, sequi enim asperiores dolorum.
//                 Nobis, numquam totam! Ipsam, numquam facilis!
//               </p>
//             </motion.div>
//             <Swiper
//               slidesPerGroup={1}
//               className="max-w-full customsw"
//               spaceBetween={20} // Maintain good spacing
//               modules={[FreeMode, Navigation]}
//               loopAdditionalSlides={2}
//               freeMode={false}
//               centeredSlides={false}
//               navigation={{ nextEl: ".arrowright", prevEl: ".arrowleft" }}
//               speed={500}
//               loop={true} // Prevents right alignment issue
//               breakpoints={{
//                 320: { slidesPerView: 1 },
//                 768: { slidesPerView: 2, spaceBetween: 20 },
//                 1024: { slidesPerView: 3, spaceBetween: 30 },
//                 1280: { slidesPerView: 2.2, spaceBetween: 20 },
//                 1366: { slidesPerView: 2, spaceBetween: 20 }, // Ensures 2.5 slides at a time
//                 1440: { slidesPerView: 2.1, spaceBetween: 40 }, // Ensures 2.5 slides at a time
//                 1536: { slidesPerView: 2.2, spaceBetween: 30 }, // Ensures 2.5 slides at a time
//                 1600: { slidesPerView: 2.5, spaceBetween: 20 }, // Ensures 2.5 slides at a time
//                 1920: { slidesPerView: 3.3, spaceBetween: 30 }, // Ensures 2.5 slides at a time
//               }}
//             >
//               {swcontent.map((slide, index) => (
//                 <SwiperSlide key={slide.icon + index}>
//                   <SwiperCard
//                     content={slide.content}
//                     title={slide.title}
//                     icon={slide.icon}
//                   />
//                   {/* Add empty slides if needed */}
//                 </SwiperSlide>
//               ))}
//             </Swiper>

//             <div className="flex flex-col md:flex-row items-center justify-between w-full xl:w-[90%]">
//               <a className="text-[#E30613] fsans-600 md:order-1  order-2 pt-4 text-base flex items-center gap-2 underline cursor-pointer">
//                 Learn more about our environmental thoughts
//                 <img src="/AboutPage/aboutSlide/envRedArrow.svg" alt="" />
//               </a>
//               <div className="flex gap-[14px] items-center justify-center md:order-2">
//                 <button className="arrowleft h-[41px] w-[41px]">
//                   <img
//                     className="h-[41px] w-[41px]"
//                     src="/buttonarrows/arrowleft.svg"
//                     alt="ArrowLeft"
//                   />
//                 </button>
//                 <button className="arrowright h-[41px] w-[41px]">
//                   <img
//                     className="h-[41px] w-[41px]"
//                     src="/buttonarrows/arrowright.svg"
//                     alt="ArrowRight"
//                   />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SustainEnviroment;

"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import SwiperCard from "../../Components/USP/SwiperCard";
import LineHead from "../../Components/Heading/LineHead";
import { motion } from "framer-motion";
import Popup from "./Popup";

const SustainEnviroment = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const swcontent = [
    {
      title: "Intelligent Energy Management",
      icon: "/uspicons/icon1.svg",
      content:
        "Optimizing energy consumption for efficiency and sustainability.",
    },
    {
      title: "Preserving Water Resources",
      icon: "/uspicons/icon2.svg",
      content: "Implementing smart water conservation and recycling systems.",
    },
    {
      title: "Waste Minimization and Segregation",
      icon: "/uspicons/icon4.svg",
      content: "Reducing, reusing, and recycling for a cleaner environment.",
    },
    {
      title: "Wellbeing",
      icon: "/uspicons/icon1.svg",
      content:
        "Prioritizing employee health, safety, and a balanced work environment.",
    },
    {
      title: "Positive Environmental Effects",
      icon: "/uspicons/icon1.svg",
      content: "Reducing carbon footprint through eco-friendly initiatives.",
    },
    {
      title: "Sustainable Development Standards",
      icon: "/uspicons/icon1.svg",
      content:
        "Building infrastructure with long-term environmental responsibility.",
    },
  ];

  return (
    <div className="bg-white uspcontainer w-full flex items-center justify-center flex-col overflow-hidden">
      <div className="flex flex-col max-w-[100vw] h-fit">
        <div className="relative z-10 pt-[50px] max-w-[1250px] w-[90%] mx-auto lg:pt-[92px] h-fit flex flex-col">
          <div className="overflow-x-hidden h-fit w-full">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 2, ease: [0.7, 0, 0.4, 1] }}
              className="overflow-x-hidden h-fit whitespace-nowrap"
            >
              <h2 className="md:text-[44px] text-[24px] leading-[111%] w-full pb-[10px] border-b xl:mb-[66px] mb-[36px] text-[#092241] border-[#d7d7d7]">
                KSH INFRA Chakan Park II:
                <br className="lg:hidden flex" /> Committed to the Environment
              </h2>
            </motion.div>
          </div>
        </div>
        <div className="flex xl:flex-row flex-col-reverse md:p-0 px-5 pt-0 max-h-fit h-fit lg:gap-0 gap-5 relative">
          <div className="lg:flex items-end xl:top-[15%] justify-center mt-0 xl:absolute relative xl:left-0 w-full xl:w-[700px] hidden ">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: [0.7, 0, 0.4, 1], duration: 1.4 }}
              viewport={{ once: true, amount: 0.3 }}
              src="Sustainability/SustainEnvironmental.png"
              alt="Sus"
            />
          </div>

          <div className="xl:w-full mx-auto flex flex-col h-fit max-w-full justify-center items-start gap-[33px] xl:pb-[110px] xl:pl-[565px] pb-14">
            {/* Text & Navigation Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: [0.7, 0, 0.4, 1], duration: 1.4 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex sm:flex-row flex-col sm:items-center items-start justify-start gap-[20px] sm:gap-[92px] w-full sm:w-[90%] sm:mx-auto xl:w-auto xl-1024:mr-[50px] xl-1280:mr-[59px] xl-1366:mr-[55px] xl-1600:mr-[171px] xl-1536:mr-[145px] xl-1440:mr-[90px] xl-1920:mr-[29%]"
            >
              <p className="fsans-400 text-[18px] leading-[26px] text-[#6C8DAB] z-[1]">
                KSH INFRA Chakan Park II is a great example of how KSH INFRA is
                driving sustainable environmental practices while creating
                modern, high-quality warehousing and industrial parks.
              </p>
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
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: [0.7, 0, 0.4, 1], duration: 1.4 }}
              viewport={{ once: true, amount: 0.3 }}
              className=" flex sm:flex-row flex-col sm:items-center items-start justify-between gap-[20px] sm:gap-[92px] w-full "
            >
              <div
                onClick={() => setIsPopupOpen(true)}
                className=" flex gap-[5px] z-[1] cursor-pointer items-center"
              >
                <p className="fsans-600 text-[16px] leading-[auto] text-[#E30613] underline">
                  Learn more about our environmental thoughts
                </p>
                <img
                  className="w-[24px] h-[24px]"
                  src="/buttonarrows/redarup.svg"
                  alt=""
                />
              </div>
              <div className="flex gap-[14px] items-center justify-center mr-[max(5%,calc((100vw-1250px)/2))]">
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
          </div>
        </div>
      </div>
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
};

export default SustainEnviroment;
