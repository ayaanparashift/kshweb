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
//             {/* image Container - Fixed Width */}
//             <div className="w-[770px] h-full bg-[url(/Career/SlideImgs/slidethbg.png)] bg-cover bg-no-repeat bg-center overflow-hidden flex justify-center items-center px-[100px] py-[70px] shadow-[4px_4px_34px] shadow-[rgba(0,0,0,0.15)]">
//               <image
//                 className="w-auto h-auto max-w-full max-h-full"
//                 src="/Career/SlideImgs/slidevid1.webm"
//                 autoPlay
//                 loop
//                 muted
//               ></image>
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
//     image: "/Career/SlideImgs/slidevid1.webm",
//     title: "A culture that builds your future",
//     subtitle: "SUSAINA MICHELLE | SALES EXECUTIVE",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     image: "/Career/SlideImgs/slidevid1.webm",
//     title: "Innovation at its best",
//     subtitle: "JOHN DOE | DEVELOPER",
//     description:
//       "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//   },
//   {
//     image: "/Career/SlideImgs/slidevid1.webm",
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
//                   {/* image Container */}
//                   <div className="w-[770px] h-full bg-[url(/Career/SlideImgs/slidethbg.png)] bg-cover bg-no-repeat bg-center overflow-hidden flex justify-center items-center px-[100px] py-[70px] shadow-[4px_4px_34px_rgba(0,0,0,0.15)]">
//                     <image
//                       className="w-auto h-auto max-w-full max-h-full"
//                       src={slide.image}
//                       autoPlay
//                       loop
//                       muted
//                     ></image>
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
    simgs: "/Career/SlideImgs/ssmall/s1s.png",
    image: "/Career/SlideImgs/sbig/s1.png",
    title: "A culture that builds your future",
    subtitle: "Akhil Ilkar | SALES EXECUTIVE",
    description:
      "At KSH, we create industrial and logistics parks that are sustainable, make working effortless and help enhance processes. Over the past nine years, I have seen that this approach extends to team members as well, they are all fairly compensated and more importantly, given the opportunity to grow and learn in their areas of interest. It is easy to see how well-knit this team is and this is one major reason I enjoy working here.",
  },
  {
    simgs: "/Career/SlideImgs/ssmall/s2s.png",
    image: "/Career/SlideImgs/sbig/s2.png",
    title: "Innovation at its best",
    subtitle: "Prajakta Butala | DEVELOPER",
    description:
      "Working at KSH Infra has helped me to grow as a person and as a professional. I have gained valuable experience and insights into the working of a successful organization. I am highly impressed with the work culture at KSH Infra and believe that it is the perfect place for me to continue my career.",
  },
  {
    simgs: "/Career/SlideImgs/ssmall/s3s.png",
    image: "/Career/SlideImgs/sbig/s3.png",
    title: "Leading the industry",
    subtitle: "Mahesh Sawant | MANAGER",
    description:
      "I can say without a doubt that it is one of the best places to work at. The company has a great work culture and the management is supportive. I have never felt like I am working for a company, but rather I feel like I am part of a family. The work is challenging and there is always something new to learn, which keeps me motivated.",
  },
  {
    simgs: "/Career/SlideImgs/ssmall/s4s.png",
    image: "/Career/SlideImgs/sbig/s4.png",
    title: "Leading the industry",
    subtitle: "Vishram Khatavkar | MANAGER",
    description:
      "I’ve been a part of KSH since 2017 and currently work as a Deputy Manager in the Electrical Department at KSH. Not only have I been able to execute my skills, I have also been able to learn more about my field through the various industrial and logistics parks as well as through client interactions. I have been lucky enough to find my designs used in various projects for clients and that keeps driving me.",
  },
  {
    simgs: "/Career/SlideImgs/ssmall/s5s.png",
    image: "/Career/SlideImgs/sbig/s5.png",
    title: "Leading the industry",
    subtitle: "Suraj Shah | MANAGER",
    description:
      "I come to work every day knowing that I will give all my energy to my job and own my responsibilities. The reason for that is the friendly and conducive work environment at KSH. I have access to some of the best mentors around and real opportunities to gain and enhance my knowledge and skills. I’ve never felt the need to hold an idea back because I know it will be heard and appreciated.",
  },
  {
    simgs: "/Career/SlideImgs/ssmall/s6s.png",
    image: "/Career/SlideImgs/sbig/s6.png",
    title: "Leading the industry",
    subtitle: "Sumit Yadav| MANAGER",
    description:
      "I moved from the residential construction space into the industrial space with KSH, the work culture, team adherence and support helped me get through my personal troubles more than once. This alone is enough to inspire me, but there is more, the value given to employees is something I have experienced at this level. I encourage people who are willing to challenge their attitudes and push the boundaries to join this amazing team.  ",
  },
  {
    simgs: "/Career/SlideImgs/ssmall/s1s.png",
    image: "/Career/SlideImgs/sbig/s1.png",
    title: "Leading the industry",
    subtitle: "Dilip Kadam | MANAGER",
    description:
      "KSH has grown immensely in the past few years, this is due to the undying commitment and vision of both our management and our excellent workforce. We hire people for more than their skills. Their attitudes, their creativity and their willingness to push boundaries are criteria we hold in the highest regard. Nothing that has happened at KSH was done by one person, it has truly been a team effort.",
  },
  {
    simgs: "/Career/SlideImgs/ssmall/s2s.png",
    image: "/Career/SlideImgs/sbig/s2.png",
    title: "Leading the industry",
    subtitle: "Dinesh Hebbar | MANAGER",
    description:
      "The strength of a team can never be undermined. During the last eight years at KSH, I have been able to implement knowledge garnered over the past 35 years in the various multimodal industrial and logistics parks. I’ve been able to express my concerns and ideas. Not only were they heard, but they were also received with gratitude. Coming back to teams, there have been moments where we pulled together to overcome seemingly humongous challenges with ease.",
  },
  {
    simgs: "/Career/SlideImgs/ssmall/s3s.png",
    image: "/Career/SlideImgs/sbig/s3.png",
    title: "Leading the industry",
    subtitle: "Mayur Bhiungade | MANAGER",
    description:
      "The past nine years have been nothing short of glorious. I have learned and grown as a professional and a person. I enjoy every moment and find the team to be a sheer joy to work with. People here know they are valued; they bring enthusiasm and knowledge to the table every day. We have had a lot of opportunities to gel at sporting events, yoga sessions, communication seminars and other workshops that have helped me hone my skills. Both my team and I are filled with gratitude as we continue our journey with KSH.",
  },
  {
    simgs: "/Career/SlideImgs/ssmall/s4s.png",
    image: "/Career/SlideImgs/sbig/s4.png",
    title: "Leading the industry",
    subtitle: "Rohan Patil | MANAGER",
    description:
      "It has only been three months since I joined this team, I was immediately welcomed with warmth and found communication easy. We take on new challenges every day and find the best ways to convert them into opportunities. The senior team here is a constant force of encouragement. The work structure and atmosphere are well-defined and rather wonderful.",
  },
  {
    simgs: "/Career/SlideImgs/ssmall/s5s.png",
    image: "/Career/SlideImgs/sbig/s5.png",
    title: "Leading the industry",
    subtitle: "Sunny Abraham | MANAGER",
    description:
      "The past four years with the KSH Design Department have been an eye-opener. The atmosphere encourages creativity and as an employee, you feel cared about. We feel the importance given to our clients and understand that we are KSH in everything we do. The trust and freedom that were given to me and my team allowed us to explore our potential. I am part of the KSH family.",
  },
  {
    simgs: "/Career/SlideImgs/ssmall/s6s.png",
    image: "/Career/SlideImgs/sbig/s6.png",
    title: "Leading the industry",
    subtitle: "Deepak Khandelwal | MANAGER",
    description:
      "KSH Infra has been a great place to work for me. The company has given me a platform to showcase my skills and grow professionally. I have worked with some great people here who have helped me develop my career.",
  },
  {
    simgs: "/Career/SlideImgs/ssmall/s1s.png",
    image: "/Career/SlideImgs/sbig/s1.png",
    title: "Leading the industry",
    subtitle: "Krishna Vyas | MANAGER",
    description:
      "Working with KSH Infra has been a great experience. The company is professionally managed and the work culture is very good. The team members are very supportive and helpful. The company has good work ethics and values its employees. I would recommend KSH Infra to anyone looking for a good company to work with.",
  },
];

export const CarSlide = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // Use the transition end event to trigger image playback
  const handleSlideChangeTransitionEnd = (swiper) => {
    // Pause all images first
    swiper.slides.forEach((slide) => {
      const imageEl = slide.querySelector("image");
      if (imageEl) {
        imageEl.pause();
      }
    });
    // Play the image in the active slide
    const activeSlide = swiper.slides[swiper.activeIndex];
    const activeimage = activeSlide && activeSlide.querySelector("image");
    if (activeimage) {
      activeimage
        .play()
        .catch((error) => console.log("image play error:", error));
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
            className="md:text-[44px] md:text-[30px] text-[24px] text-[#092241] leading-[111%] w-full pb-[10px] border-b-[1px] border-[#D7D7D7] whitespace-nowrap overflow-hidden"
          >
            What our team says!
          </motion.h1>

          {/* Main Slider – wraps the image and text content */}
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
                const activeimage =
                  activeSlide && activeSlide.querySelector("image");
                if (activeimage) {
                  activeimage
                    .play()
                    .catch((error) =>
                      console.log("Initial image play error:", error)
                    );
                }
              }, 0);
            }}
            className="main-swiper"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="flex lg:flex-row h-fit flex-col w-full gap-[35px] lg:gap-[70px] lg:h-fit pt-[55px]">
                  {/* image Container */}
                  <motion.div
                    initial={{ y: "-100px", opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
                    viewport={{ amount: 0.1, once: true }}
                    className="w-fit max-w-full h-fit bg-[url(/Career/SlideImgs/slidethbg.png)] bg-cover bg-no-repeat bg-center overflow-hidden flex justify-center items-center px-[8%] py-[12%] lg:px-[60px] lg:py-[60px] shadow-[4px_4px_34px_rgba(0,0,0,0.15)]"
                  >
                    <img
                      className="w-full h-full"
                      src={slide.image}
                      className="h-full w-full"
                    ></img>
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
                    image={slide.simgs}
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
