// "use client";
// import { motion } from "framer-motion";
// import CareerSlideCard from "./CareerSlideCard";

// export const CarSlide = () => {
//   return (
//     <div className="w-full pt-[70px]">
//       <div
//         className="w-full"
//         style={{
//           background: "linear-gradient(to bottom, #ffffff 90%, #092241 10%)",
//         }}
//       >
//         <div className="fix12">
//           <motion.h1
//             initial={{ width: 0 }}
//             whileInView={{ width: "100%" }}
//             transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
//             viewport={{ amount: 0.1, once: true }}
//             className="text-[44px] text-[#092241] leading-[111%] w-full pb-[10px] border-b-[1px] border-[#D7D7D7] whitespace-nowrap overflow-hidden"
//           >
//             What our team says!
//           </motion.h1>

//           <div
//             id="nothumb"
//             className="flex w-full gap-[70px] lg:h-[530px] pt-[55px]"
//           >
//             {/* Video Container - Fixed Width */}
//             <div className="w-[770px] h-full bg-[url(/Career/SlideImgs/slidethbg.png)] bg-cover bg-no-repeat bg-center overflow-hidden flex justify-center items-center px-[100px] py-[70px] shadow-[4px_4px_34px] shadow-[rgba(0,0,0,0.15)]">
//               <video
//                 className="w-auto h-auto max-w-full max-h-full"
//                 src="/Career/SlideImgs/slidevid1.webm"
//                 autoPlay
//                 loop
//                 muted
//               ></video>
//             </div>

//             {/* Text Content - Fills Remaining Space */}
//             <div className="flex flex-col flex-1 h-full justify-between">
//               <div className="flex flex-col gap-[30px]">
//                 <h3 className="fsans-600 text-[36px] text-[#181818]">
//                   A culture that builds your future
//                 </h3>
//                 <p className="text-[22px] text-[#4F4F4F] leading-[130%]">
//                   SUSAINA MICHELLE | SALES EXECUTIVE
//                 </p>
//                 <p className="text-[14px] text-[#434343] leading-[26px]">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//                   do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//                   do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                 </p>
//               </div>
//               <div className="flex gap-[15px] justify-end">
//                 <button
//                   id="carprev"
//                   className="w-10 h-10 flex items-center justify-center"
//                 >
//                   <img className="h-10 w-10" src="/landingr.svg" alt="" />
//                 </button>

//                 <button
//                   id="carnext"
//                   className="w-10 h-10 flex items-center justify-center"
//                 >
//                   <img className="h-10 w-10" src="/landingl.svg" alt="" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="w-full bg-[#092241] pt-[35px] pb-[70px]">
//         <div className="fix12">
//           <CareerSlideCard />
//         </div>
//       </div>
//     </div>
//   );
// };

// 888888888888888888888&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*88888888888888888888888************* //
// 888888888888888888888&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*88888888888888888888888************* //
// 888888888888888888888&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*88888888888888888888888************* //
// 888888888888888888888&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*88888888888888888888888************* //
// 888888888888888888888&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*88888888888888888888888************* //
// 888888888888888888888&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*88888888888888888888888************* //
// 888888888888888888888&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*88888888888888888888888************* //
// 888888888888888888888&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*88888888888888888888888************* //
// 888888888888888888888&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*88888888888888888888888************* //

// "use client";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Thumbs } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";
// import CareerSlideCard from "./CareerSlideCard";

// // Dummy slides data – you can modify or extend this as needed.
// const slides = [
//   {
//     video: "/Career/SlideImgs/slidevid1.webm",
//     title: "A culture that builds your future",
//     subtitle: "SUSAINA MICHELLE | SALES EXECUTIVE",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     video: "/Career/SlideImgs/slidevid1.webm",
//     title: "Innovation at its best",
//     subtitle: "JOHN DOE | DEVELOPER",
//     description:
//       "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//   },
//   {
//     video: "/Career/SlideImgs/slidevid1.webm",
//     title: "Leading the industry",
//     subtitle: "JANE SMITH | MANAGER",
//     description:
//       "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//   },
// ];

// export const CarSlide = () => {
//   const [thumbsSwiper, setThumbsSwiper] = useState(null);

//   return (
//     <div className="w-full pt-[70px]">
//       {/* Main Section with Background Gradient */}
//       <div
//         className="w-full"
//         style={{
//           background: "linear-gradient(to bottom, #ffffff 90%, #092241 10%)",
//         }}
//       >
//         <div className="fix12">
//           <motion.h1
//             initial={{ width: 0 }}
//             whileInView={{ width: "100%" }}
//             transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
//             viewport={{ amount: 0.1, once: true }}
//             className="text-[44px] text-[#092241] leading-[111%] w-full pb-[10px] border-b-[1px] border-[#D7D7D7] whitespace-nowrap overflow-hidden"
//           >
//             What our team says!
//           </motion.h1>

//           {/* Main Slider – wraps the original #nothumb content */}
//           <Swiper
//             modules={[Thumbs]}
//             thumbs={{
//               swiper:
//                 thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
//             }}
//             speed={1} // use a minimal speed so the active slide updates
//             className="main-swiper"
//           >
//             {slides.map((slide, index) => (
//               <SwiperSlide key={index}>
//                 <div className="flex w-full gap-[70px] lg:h-[530px] pt-[55px]">
//                   {/* Video Container */}
//                   <div className="w-[770px] h-full bg-[url(/Career/SlideImgs/slidethbg.png)] bg-cover bg-no-repeat bg-center overflow-hidden flex justify-center items-center px-[100px] py-[70px] shadow-[4px_4px_34px_rgba(0,0,0,0.15)]">
//                     <video
//                       className="w-auto h-auto max-w-full max-h-full"
//                       src={slide.video}
//                       autoPlay
//                       loop
//                       muted
//                     ></video>
//                   </div>

//                   {/* Text Content */}
//                   <div className="flex flex-col flex-1 h-full justify-between">
//                     <div className="flex flex-col gap-[30px]">
//                       <h3 className="fsans-600 text-[36px] text-[#181818]">
//                         {slide.title}
//                       </h3>
//                       <p className="text-[22px] text-[#4F4F4F] leading-[130%]">
//                         {slide.subtitle}
//                       </p>
//                       <p className="text-[14px] text-[#434343] leading-[26px]">
//                         {slide.description}
//                       </p>
//                     </div>
//                     {/* (Note: Main slider does not include navigation controls) */}
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//           {/* Global CSS for opacity fade effect on main slider */}
//           <style jsx global>{`
//             .main-swiper .swiper-slide {
//               opacity: 0;
//               transition: opacity 0.5s ease-in-out;
//             }
//             .main-swiper .swiper-slide-active {
//               opacity: 1;
//             }
//           `}</style>
//         </div>
//       </div>

//       {/* Thumbs Slider Section */}
//       <div className="w-full bg-[#092241] pt-[35px] pb-[70px]">
//         <div className="fix12">
//           {/* Custom Navigation Buttons for the thumbs slider */}
//           <div className="flex gap-[15px] justify-end mb-4">
//             <button
//               id="carprev"
//               className="w-10 h-10 flex items-center justify-center"
//             >
//               <img className="h-10 w-10" src="/landingr.svg" alt="" />
//             </button>
//             <button
//               id="carnext"
//               className="w-10 h-10 flex items-center justify-center"
//             >
//               <img className="h-10 w-10" src="/landingl.svg" alt="" />
//             </button>
//           </div>

//           <Swiper
//             onSwiper={setThumbsSwiper}
//             modules={[Navigation, Thumbs]}
//             spaceBetween={10}
//             slidesPerView={4}
//             watchSlidesProgress
//             navigation={{
//               nextEl: "#carnext",
//               prevEl: "#carprev",
//             }}
//             className="thumb-swiper"
//           >
//             {slides.map((slide, index) => (
//               <SwiperSlide key={index}>
//                 <CareerSlideCard {...slide} />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </div>
//   );
// };

// 888888888888888888888&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*88888888888888888888888************* //
// 888888888888888888888&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*88888888888888888888888************* //
// 888888888888888888888&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*88888888888888888888888************* //
// 888888888888888888888&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*88888888888888888888888************* //
// 888888888888888888888&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*88888888888888888888888************* //
// 888888888888888888888&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*88888888888888888888888************* //
// 888888888888888888888&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*88888888888888888888888************* //
// 888888888888888888888&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*88888888888888888888888************* //
// 888888888888888888888&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*88888888888888888888888************* //

"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import CareerSlideCard from "./CareerSlideCard";

// Dummy slides data – you can modify or extend this as needed.
const slides = [
  {
    video: "/Career/SlideImgs/slidevid1.webm",
    title: "A culture that builds your future",
    subtitle: "SUSAINA MICHELLE | SALES EXECUTIVE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    video: "/Career/SlideImgs/slidevid1.webm",
    title: "Innovation at its best",
    subtitle: "JOHN DOE | DEVELOPER",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    video: "/Career/SlideImgs/slidevid1.webm",
    title: "Leading the industry",
    subtitle: "JANE SMITH | MANAGER",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    video: "/Career/SlideImgs/slidevid1.webm",
    title: "Leading the industry",
    subtitle: "JANE SMITH | MANAGER",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    video: "/Career/SlideImgs/slidevid1.webm",
    title: "Leading the industry",
    subtitle: "JANE SMITH | MANAGER",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    video: "/Career/SlideImgs/slidevid1.webm",
    title: "Leading the industry",
    subtitle: "JANE SMITH | MANAGER",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    video: "/Career/SlideImgs/slidevid1.webm",
    title: "Leading the industry",
    subtitle: "JANE SMITH | MANAGER",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    video: "/Career/SlideImgs/slidevid1.webm",
    title: "Leading the industry",
    subtitle: "JANE SMITH | MANAGER",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    video: "/Career/SlideImgs/slidevid1.webm",
    title: "Leading the industry",
    subtitle: "JANE SMITH | MANAGER",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    video: "/Career/SlideImgs/slidevid1.webm",
    title: "Leading the industry",
    subtitle: "JANE SMITH | MANAGER",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    video: "/Career/SlideImgs/slidevid1.webm",
    title: "Leading the industry",
    subtitle: "JANE SMITH | MANAGER",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    video: "/Career/SlideImgs/slidevid1.webm",
    title: "Leading the industry",
    subtitle: "JANE SMITH | MANAGER",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    video: "/Career/SlideImgs/slidevid1.webm",
    title: "Leading the industry",
    subtitle: "JANE SMITH | MANAGER",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    video: "/Career/SlideImgs/slidevid1.webm",
    title: "Leading the industry",
    subtitle: "JANE SMITH | MANAGER",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    video: "/Career/SlideImgs/slidevid1.webm",
    title: "Leading the industry",
    subtitle: "JANE SMITH | MANAGER",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    video: "/Career/SlideImgs/slidevid1.webm",
    title: "Leading the industry",
    subtitle: "JANE SMITH | MANAGER",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export const CarSlide = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // Use the transition end event to trigger video playback
  const handleSlideChangeTransitionEnd = (swiper) => {
    // Pause all videos first
    swiper.slides.forEach((slide) => {
      const videoEl = slide.querySelector("video");
      if (videoEl) {
        videoEl.pause();
      }
    });
    // Play the video in the active slide
    const activeSlide = swiper.slides[swiper.activeIndex];
    const activeVideo = activeSlide && activeSlide.querySelector("video");
    if (activeVideo) {
      activeVideo
        .play()
        .catch((error) => console.log("Video play error:", error));
    }
  };

  return (
    <div className="w-full pt-[70px]">
      {/* Main Section with Background Gradient */}
      <div className="w-full lg:bg-[linear-gradient(to_bottom,#ffffff_90%,#092241_10%)]">
        <div className="fix12">
          <motion.h1
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
            viewport={{ amount: 0.1, once: true }}
            className="md:text-[44px] text-[30px] text-[#092241] leading-[111%] w-full pb-[10px] border-b-[1px] border-[#D7D7D7] whitespace-nowrap overflow-hidden"
          >
            What our team says!
          </motion.h1>

          {/* Main Slider – wraps the video and text content */}
          <Swiper
            modules={[Thumbs]}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            speed={1} // minimal speed so the active slide updates
            onSlideChangeTransitionEnd={handleSlideChangeTransitionEnd}
            onSwiper={(swiper) => {
              // Trigger play for the first slide once the swiper is ready
              setTimeout(() => {
                const activeSlide = swiper.slides[swiper.activeIndex];
                const activeVideo =
                  activeSlide && activeSlide.querySelector("video");
                if (activeVideo) {
                  activeVideo
                    .play()
                    .catch((error) =>
                      console.log("Initial video play error:", error)
                    );
                }
              }, 0);
            }}
            className="main-swiper"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="flex lg:flex-row h-fit flex-col w-full gap-[35px] lg:gap-[70px] lg:h-[530px] pt-[55px]">
                  {/* Video Container */}
                  <motion.div
                    initial={{ y: "-100px", opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
                    viewport={{ amount: 0.1, once: true }}
                    className="xl:w-[770px] lg:w-[550px] w-full max-w-full h-fit bg-[url(/Career/SlideImgs/slidethbg.png)] bg-cover bg-no-repeat bg-center overflow-hidden flex justify-center items-center px-[8%] py-[12%] lg:px-[100px] lg:py-[70px] shadow-[4px_4px_34px_rgba(0,0,0,0.15)]"
                  >
                    <video
                      className="w-full h-full"
                      src={slide.video}
                      autoPlay
                      loop
                      muted
                    ></video>
                  </motion.div>

                  {/* Text Content */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
                    viewport={{ amount: 0.1, once: true }}
                    className="flex xl:pb-0 pb-10 flex-col flex-1 h-fit lg:h-full justify-between"
                  >
                    <div className="flex flex-col gap-[10px] lg:gap-[30px]">
                      <h3 className="fsans-600 text-[26px] md:text-[36px] text-[#181818]">
                        {slide.title}
                      </h3>
                      <p className="md:text-[22px] text-[18px] text-[#4F4F4F] leading-[130%]">
                        {slide.subtitle}
                      </p>
                      <p className="text-[14px] text-[#434343] leading-[26px]">
                        {slide.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Global CSS for opacity fade effect on main slider */}
          <style jsx global>{`
            .main-swiper .swiper-slide {
              opacity: 0;
              transition: opacity 0.5s ease-in-out;
            }
            .main-swiper .swiper-slide-active {
              opacity: 1;
            }
          `}</style>
        </div>
      </div>

      {/* Thumbs Slider Section */}
      <div className="w-full bg-[#092241] pt-[35px] pb-[70px]">
        <div className="fix12">
          {/* Custom Navigation Buttons for the thumbs slider */}
          <div className="flex gap-[15px] justify-end mb-4">
            <button
              id="carprev"
              className="w-10 h-10 flex items-center justify-center"
            >
              <img className="h-10 w-10" src="/landingr.svg" alt="" />
            </button>
            <button
              id="carnext"
              className="w-10 h-10 flex items-center justify-center"
            >
              <img className="h-10 w-10" src="/landingl.svg" alt="" />
            </button>
          </div>

          <motion.div
            initial={{ x: "-200px", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
            viewport={{ amount: 0.1, once: true }}
          >
            <Swiper
              onSwiper={setThumbsSwiper}
              modules={[Navigation, Thumbs]}
              spaceBetween={40}
              slidesPerView={4}
              watchSlidesProgress
              navigation={{
                nextEl: "#carnext",
                prevEl: "#carprev",
              }}
              className="thumb-swiper"
              breakpoints={{
                320: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2.5, // Show 4 slides on tablets or larger
                },
                1024: {
                  slidesPerView: 3,
                },
                1366: {
                  slidesPerView: 4,
                },
              }}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <CareerSlideCard
                    image="/Career/SlideImgs/cars1.png"
                    title={slide.title}
                    des={slide.subtitle}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// 88888888888888888888888
// 88888888888888888888888
// 88888888888888888888888
// 88888888888888888888888
// 88888888888888888888888
// 88888888888888888888888
// 88888888888888888888888
