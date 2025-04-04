// // "use client";
// // import React, { useState, useRef, useEffect } from "react";
// // import { motion } from "framer-motion";
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { Navigation, Pagination, Autoplay } from "swiper/modules";
// // import "swiper/css";
// // import "swiper/css/navigation";
// // import "swiper/css/pagination";
// // const timelineData = [
// //   {
// //     id: 1,
// //     year: 1969,
// //     content:
// //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
// //     image: "/time/timespot.png",
// //     marginTop: "190px",
// //   },
// //   {
// //     id: 2,
// //     year: 1979,
// //     content: "Consectetur adipiscing elit.",
// //     image: "/time/timespot.png",
// //     marginTop: "50px",
// //   },
// //   {
// //     id: 4,
// //     year: 1981,
// //     content: "Sed do eiusmod tempor incididunt.",
// //     image: "/time/timespot.png",
// //     marginTop: "0px",
// //   },
// //   {
// //     id: 5,
// //     year: 1989,
// //     content: "Ut labore et dolore magna aliqua.",
// //     image: "/time/timespot.png",
// //     marginTop: "150px",
// //   },
// //   {
// //     id: 6,
// //     year: 1991,
// //     content: "Enim ad minim veniam.",
// //     image: "/time/timespot.png",
// //     marginTop: "30px",
// //   },
// //   {
// //     id: 7,
// //     year: 1998,
// //     content: "Quis nostrud exercitation ullamco.",
// //     image: "/time/timespot.png",
// //     marginTop: "50px",
// //   },
// //   {
// //     id: 8,
// //     year: 1999,
// //     content: "Duis aute irure dolor in reprehenderit.",
// //     image: "/time/timespot.png",
// //     marginTop: "90px",
// //   },
// //   {
// //     id: 9,
// //     year: 2002,
// //     content: "Duis aute irure dolor in reprehenderit.",
// //     image: "/time/timespot.png",
// //     marginTop: "150px",
// //   },
// //   {
// //     id: 10,
// //     year: 2003,
// //     content: "Duis aute irure dolor in reprehenderit.",
// //     image: "/time/timespot.png",
// //     marginTop: "-20px",
// //   },
// //   {
// //     id: 11,
// //     year: 2006,
// //     content: "Duis aute irure dolor in reprehenderit.",
// //     image: "/time/timespot.png",
// //     marginTop: "90px",
// //   },
// //   {
// //     id: 12,
// //     year: 2008,
// //     content: "Duis aute irure dolor in reprehenderit.",
// //     image: "/time/timespot.png",
// //     marginTop: "160px",
// //   },
// //   {
// //     id: 13,
// //     year: 2011,
// //     content: "Duis aute irure dolor in reprehenderit.",
// //     image: "/time/timespot.png",
// //     marginTop: "90px",
// //   },
// //   {
// //     id: 14,
// //     year: 2012,
// //     content: "Duis aute irure dolor in reprehenderit.",
// //     image: "/time/timespot.png",
// //     marginTop: "-40px",
// //   },
// //   {
// //     id: 15,
// //     year: 2013,
// //     content: "Duis aute irure dolor in reprehenderit.",
// //     image: "/time/timespot.png",
// //     marginTop: "90px",
// //   },
// //   {
// //     id: 16,
// //     year: 2015,
// //     content: "Duis aute irure dolor in reprehenderit.",
// //     image: "/time/timespot.png",
// //     marginTop: "190px",
// //   },
// //   {
// //     id: 17,
// //     year: 2016,
// //     content: "Duis aute irure dolor in reprehenderit.",
// //     image: "/time/timespot.png",
// //     marginTop: "70px",
// //   },
// //   {
// //     id: 18,
// //     year: 2017,
// //     content: "Duis aute irure dolor in reprehenderit.",
// //     image: "/time/timespot.png",
// //     marginTop: "-30px",
// //   },
// //   {
// //     id: 19,
// //     year: 2018,
// //     content: "Duis aute irure dolor in reprehenderit.",
// //     image: "/time/timespot.png",
// //     marginTop: "90px",
// //   },
// //   {
// //     id: 20,
// //     year: 2019,
// //     content: "Duis aute irure dolor in reprehenderit.",
// //     image: "/time/timespot.png",
// //     marginTop: "90px",
// //   },
// //   {
// //     id: 21,
// //     year: 2021,
// //     content: "Duis aute irure dolor in reprehenderit.",
// //     image: "/time/timespot.png",
// //     marginTop: "90px",
// //   },
// //   {
// //     id: 22,
// //     year: 2022,
// //     content: "Duis aute irure dolor in reprehenderit.",
// //     image: "/time/timespot.png",
// //     marginTop: "0px",
// //   },
// // ];
// // const Timeline = () => {
// //   const [selectedYear, setSelectedYear] = useState(null);
// //   const [position, setPosition] = useState({ top: 0, left: 0 });
// //   const dotsRef = useRef({});
// //   const swiperRef = useRef(null);
// //   useEffect(() => {
// //     // Set initial selection to the first item
// //     const firstItem = timelineData[0];
// //     if (firstItem) {
// //       setSelectedYear(firstItem.id);
// //       // Set the initial position of the content box
// //       setTimeout(() => handleMouseEnter(firstItem.id), 100); // Delay to ensure DOM is ready
// //     }
// //   }, []);
// //   const handleMouseEnter = (id) => {
// //     setSelectedYear(id);
// //     if (dotsRef.current[id]) {
// //       const rect = dotsRef.current[id].getBoundingClientRect();
// //       setPosition({
// //         top: rect.top + window.scrollY + rect.height + 10, // Position below the dot with a small gap
// //         left: rect.left + rect.width / 2, // Center it horizontally with the dot
// //       });
// //     }
// //   };
// //   const handleSlideChange = () => {
// //     // Reset the selected year when the slide changes
// //     setSelectedYear(null);
// //   };
// //   return (
// //     <div
// //       className="bg-cover bg-no-repeat bg-center py-10"
// //       style={{ backgroundImage: "url('/tbg.png')" }}
// //     >
// //       <h2 className="w-fit text-4xl font-bold ml-[max(5%,calc((100vw-1250px)/2))] text-white border-b-[6px] border-b-[#F7E327]">
// //         The KSH Legacy
// //       </h2>
// //       <div className="px-10 pb-12 relative flex flex-col items-center ">
// //         {/* Swiper Slider */}
// //         <Swiper
// //           className="w-full h-[500px]"
// //           modules={[Navigation, Pagination, Autoplay]}
// //           slidesPerView={1}
// //           navigation={{ nextEl: ".arrowright", prevEl: ".arrowleft" }}
// //           onSlideChange={handleSlideChange} // Add the slide change event handler
// //           ref={swiperRef}
// //         >
// //           {/* Split timelineData into 3 slides */}
// //           {[0, 1, 2, 3, 4, 5].map((slideIndex) => (
// //             <SwiperSlide key={slideIndex}>
// //               {/* <div className="relative  flex items-center justify-center gap-[150px]  "> */}
// //               <div className="relative  flex items-center justify-evenly ">
// //                 {timelineData
// //                   .slice(slideIndex * 4, slideIndex * 4 + 4) // 3 items per slide
// //                   .map(({ id, year, marginTop }) => (
// //                     <div
// //                       key={id}
// //                       ref={(el) => (dotsRef.current[id] = el)}
// //                       className="flex flex-col items-center cursor-pointer group"
// //                       onMouseEnter={() => handleMouseEnter(id)}
// //                       style={{ marginTop }}
// //                     >
// //                       {/* Dot */}
// //                       <p className="mb-2 text-white fsans-500 text-base">
// //                         {year}
// //                       </p>
// //                       <div className="relative bg-white w-12 h-12 flex items-center justify-center border-2 border-gray-500 z-50 rounded-full transition-transform duration-300 group-hover:scale-125">
// //                         <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
// //                       </div>
// //                     </div>
// //                   ))}
// //               </div>
// //             </SwiperSlide>
// //           ))}
// //         </Swiper>
// //         {/* Content Box Positioned near Corresponding Dot */}
// //         {selectedYear && (
// //           //Main Content Section
// //           <motion.div
// //             key={selectedYear}
// //             initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
// //             animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
// //             transition={{ duration: 0.7, ease: [0.7, 0, 0.4, 1] }}
// //             className="absolute flex-col flex items-center space-x-6 transition-opacity duration-300"
// //             style={{
// //               position: "absolute",
// //               // top: `${position.top - 60}px`,
// //               top: `${position.top} `,
// //               left: `${position.left}px`,
// //               transform: "translateX(-50%)",
// //             }}
// //           >
// //             <div
// //               style={{
// //                 borderImage:
// //                   "linear-gradient(to top right, rgba(221, 221, 221, 0.89), rgba(221, 221, 221, 0)) 10",
// //               }}
// //               transition={{ duration: 1, ease: "easeInOut" }}
// //               // className=" border-solid border-transparent w-[2px] bg-red-500 h-[120px] mt-2"
// //               className=" border-solid border-transparent border-[1px]  h-[100px] mt-2"
// //             ></div>
// //             <div className="flex xl-1024:w-[330px] w-[480px]">
// //               <img
// //                 src={
// //                   timelineData.find((item) => item.id === selectedYear)?.image
// //                 }
// //                 alt="event"
// //                 className="w-[165px] min-h-full object-cover"
// //               />
// //               <div className="bg-white w-full py-[17px] px-[16px] space-y-2 ">
// //                 <h3 className="fpt-700 text-4xl text-[#092241] leading-9 font-bold">
// //                   {timelineData.find((item) => item.id === selectedYear)?.year}
// //                 </h3>
// //                 <p className="pt-2 fsans-400 text-sm text-[#474747]">
// //                   {
// //                     timelineData.find((item) => item.id === selectedYear)
// //                       ?.content
// //                   }
// //                 </p>
// //               </div>
// //             </div>
// //           </motion.div>
// //         )}
// //       </div>
// //       <div className="flex gap-[14px] items-center justify-center">
// //         <button className="arrowleft">
// //           <img
// //             className="h-[41px] w-[41px]"
// //             src="/time/lw.svg"
// //             alt="ArrowLeft"
// //           />
// //         </button>
// //         <button className="arrowright ">
// //           <img
// //             className="h-[41px] w-[41px]"
// //             src="/time/rw.svg"
// //             alt="ArrowRight"
// //           />
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };
// // export default Timeline;

// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const timelineData = [
//   {
//     id: 1,
//     year: 1969,
//     content:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     image: "/time/timespot.png",
//     marginTop: "190px",
//   },
//   {
//     id: 2,
//     year: 1979,
//     content: "Consectetur adipiscing elit.",
//     image: "/time/timespot.png",
//     marginTop: "50px",
//   },
//   {
//     id: 4,
//     year: 1981,
//     content: "Sed do eiusmod tempor incididunt.",
//     image: "/time/timespot.png",
//     marginTop: "0px",
//   },
//   {
//     id: 5,
//     year: 1989,
//     content: "Ut labore et dolore magna aliqua.",
//     image: "/time/timespot.png",
//     marginTop: "150px",
//   },
//   {
//     id: 6,
//     year: 1991,
//     content: "Enim ad minim veniam.",
//     image: "/time/timespot.png",
//     marginTop: "30px",
//   },
//   {
//     id: 7,
//     year: 1998,
//     content: "Quis nostrud exercitation ullamco.",
//     image: "/time/timespot.png",
//     marginTop: "50px",
//   },
//   {
//     id: 8,
//     year: 1999,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "90px",
//   },
//   {
//     id: 9,
//     year: 2002,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "150px",
//   },
//   {
//     id: 10,
//     year: 2003,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "-20px",
//   },
//   {
//     id: 11,
//     year: 2006,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "90px",
//   },
//   {
//     id: 12,
//     year: 2008,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "160px",
//   },
//   {
//     id: 13,
//     year: 2011,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "90px",
//   },
//   {
//     id: 14,
//     year: 2012,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "-40px",
//   },
//   {
//     id: 15,
//     year: 2013,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "90px",
//   },
//   {
//     id: 16,
//     year: 2015,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "190px",
//   },
//   {
//     id: 17,
//     year: 2016,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "70px",
//   },
//   {
//     id: 18,
//     year: 2017,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "-30px",
//   },
//   {
//     id: 19,
//     year: 2018,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "90px",
//   },
//   {
//     id: 20,
//     year: 2019,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "90px",
//   },
//   {
//     id: 21,
//     year: 2021,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "90px",
//   },
//   {
//     id: 22,
//     year: 2022,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "0px",
//   },
// ];

// const Timeline = () => {
//   const [selectedYear, setSelectedYear] = useState(null);
//   const [position, setPosition] = useState({ top: 0, left: 0 });
//   const [isSliding, setIsSliding] = useState(false);
//   const dotsRef = useRef({});
//   const swiperRef = useRef(null);

//   useEffect(() => {
//     // Set initial selection to the first item
//     const firstItem = timelineData[0];
//     if (firstItem) {
//       setSelectedYear(firstItem.id);
//       // Set the initial position of the content box
//       setTimeout(() => handleMouseEnter(firstItem.id), 100); // Delay to ensure DOM is ready
//     }
//   }, []);

//   const handleMouseEnter = (id) => {
//     setSelectedYear(id);
//     if (dotsRef.current[id]) {
//       const rect = dotsRef.current[id].getBoundingClientRect();
//       setPosition({
//         top: rect.top + window.scrollY + rect.height + 10, // Position below the dot with a small gap
//         left: rect.left + rect.width / 2, // Center it horizontally with the dot
//       });
//     }
//   };

//   const handleSlideChange = () => {
//     // Set the state when sliding starts
//     setIsSliding(true);
//   };

//   const handleSlideChangeTransitionEnd = () => {
//     // Set the state back to false when the slide transition ends
//     setIsSliding(false);
//   };

//   return (
//     <div
//       className="bg-cover bg-no-repeat bg-center py-10"
//       style={{ backgroundImage: "url('/tbg.png')" }}
//     >
//       <h2 className="w-fit text-4xl font-bold ml-[max(5%,calc((100vw-1250px)/2))] text-white border-b-[6px] border-b-[#F7E327]">
//         The KSH Legacy
//       </h2>
//       <div className="px-10 pb-12 relative flex flex-col items-center">
//         {/* Swiper Slider */}
//         <Swiper
//           className="w-full h-[500px]"
//           modules={[Navigation, Pagination, Autoplay]}
//           slidesPerView={1}
//           navigation={{ nextEl: ".arrowright", prevEl: ".arrowleft" }}
//           onSlideChange={handleSlideChange} // Set state to true when slide changes
//           onSlideChangeTransitionEnd={handleSlideChangeTransitionEnd} // Set state to false when slide change ends
//           ref={swiperRef}
//         >
//           {/* Split timelineData into 3 slides */}
//           {[0, 1, 2, 3, 4, 5].map((slideIndex) => (
//             <SwiperSlide key={slideIndex}>
//               <div className="relative flex items-center justify-evenly ">
//                 {timelineData
//                   .slice(slideIndex * 4, slideIndex * 4 + 4) // 4 items per slide
//                   .map(({ id, year, marginTop }) => (
//                     <div
//                       key={id}
//                       ref={(el) => (dotsRef.current[id] = el)}
//                       className={`flex flex-col items-center cursor-pointer group ${
//                         isSliding ? "pointer-events-none" : ""
//                       }`}
//                       onMouseEnter={() => handleMouseEnter(id)}
//                       style={{ marginTop }}
//                     >
//                       {/* Dot */}
//                       <p className="mb-2 text-white fsans-500 text-base">
//                         {year}
//                       </p>
//                       <div className="relative bg-white w-12 h-12 flex items-center justify-center border-2 border-gray-500 z-50 rounded-full transition-transform duration-300 group-hover:scale-125">
//                         <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
//                       </div>
//                     </div>
//                   ))}
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Content Box Positioned near Corresponding Dot */}
//         {!isSliding && selectedYear && (
//           <motion.div
//             key={selectedYear}
//             initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
//             animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
//             transition={{ duration: 0.7, ease: [0.7, 0, 0.4, 1] }}
//             className="absolute flex-col flex items-center space-x-6 transition-opacity duration-300"
//             style={{
//               position: "absolute",
//               top: `${position.top} `,
//               left: `${position.left}px`,
//               transform: "translateX(-50%)",
//             }}
//           >
//             <div
//               style={{
//                 borderImage:
//                   "linear-gradient(to top right, rgba(221, 221, 221, 0.89), rgba(221, 221, 221, 0)) 10",
//               }}
//               className="border-solid border-transparent border-[1px] h-[100px] mt-2"
//             ></div>
//             <div className="flex xl-1024:w-[330px] w-[480px]">
//               <img
//                 src={
//                   timelineData.find((item) => item.id === selectedYear)?.image
//                 }
//                 alt="event"
//                 className="w-[165px] min-h-full object-cover"
//               />
//               <div className="bg-white w-full py-[17px] px-[16px] space-y-2 ">
//                 <h3 className="fpt-700 text-4xl text-[#092241] leading-9 font-bold">
//                   {timelineData.find((item) => item.id === selectedYear)?.year}
//                 </h3>
//                 <p className="pt-2 fsans-400 text-sm text-[#474747]">
//                   {
//                     timelineData.find((item) => item.id === selectedYear)
//                       ?.content
//                   }
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </div>
//       <div className="flex gap-[14px] items-center justify-center">
//         <button className="arrowleft">
//           <img
//             className="h-[41px] w-[41px]"
//             src="/time/lw.svg"
//             alt="ArrowLeft"
//           />
//         </button>
//         <button className="arrowright ">
//           <img
//             className="h-[41px] w-[41px]"
//             src="/time/rw.svg"
//             alt="ArrowRight"
//           />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Timeline;

// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const timelineData = [
//   {
//     id: 1,
//     year: 1969,
//     content:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     image: "/time/timespot.png",
//     marginTop: "190px",
//   },
//   {
//     id: 2,
//     year: 1979,
//     content: "Consectetur adipiscing elit.",
//     image: "/time/timespot.png",
//     marginTop: "50px",
//   },
//   {
//     id: 4,
//     year: 1981,
//     content: "Sed do eiusmod tempor incididunt.",
//     image: "/time/timespot.png",
//     marginTop: "0px",
//   },
//   {
//     id: 5,
//     year: 1989,
//     content: "Ut labore et dolore magna aliqua.",
//     image: "/time/timespot.png",
//     marginTop: "150px",
//   },
//   {
//     id: 6,
//     year: 1991,
//     content: "Enim ad minim veniam.",
//     image: "/time/timespot.png",
//     marginTop: "30px",
//   },
//   {
//     id: 7,
//     year: 1998,
//     content: "Quis nostrud exercitation ullamco.",
//     image: "/time/timespot.png",
//     marginTop: "50px",
//   },
//   {
//     id: 8,
//     year: 1999,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "90px",
//   },
//   {
//     id: 9,
//     year: 2002,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "150px",
//   },
//   {
//     id: 10,
//     year: 2003,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "-20px",
//   },
//   {
//     id: 11,
//     year: 2006,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "90px",
//   },
//   {
//     id: 12,
//     year: 2008,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "160px",
//   },
//   {
//     id: 13,
//     year: 2011,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "90px",
//   },
//   {
//     id: 14,
//     year: 2012,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "-40px",
//   },
//   {
//     id: 15,
//     year: 2013,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "90px",
//   },
//   {
//     id: 16,
//     year: 2015,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "190px",
//   },
//   {
//     id: 17,
//     year: 2016,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "70px",
//   },
//   {
//     id: 18,
//     year: 2017,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "-30px",
//   },
//   {
//     id: 19,
//     year: 2018,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "90px",
//   },
//   {
//     id: 20,
//     year: 2019,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "90px",
//   },
//   {
//     id: 21,
//     year: 2021,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "90px",
//   },
//   {
//     id: 22,
//     year: 2022,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "0px",
//   },
// ];

// const Timeline = () => {
//   const [selectedYear, setSelectedYear] = useState(null);
//   const [position, setPosition] = useState({ top: 0, left: 0 });
//   const dotsRef = useRef({});
//   const swiperRef = useRef(null);

//   useEffect(() => {
//     // Set initial selection to the first item
//     const firstItem = timelineData[0];
//     if (firstItem) {
//       setSelectedYear(firstItem.id);
//       setTimeout(() => handleMouseEnter(firstItem.id), 100); // Delay to ensure DOM is ready
//     }
//   }, []);

//   const handleMouseEnter = (id) => {
//     setSelectedYear(id);
//     if (dotsRef.current[id]) {
//       const dot = dotsRef.current[id];
//       const parent = dot.offsetParent; // Get the closest positioned ancestor

//       // Get the dot's position relative to the viewport
//       const rect = dot.getBoundingClientRect();

//       // Calculate the position relative to the parent container
//       const parentRect = parent.getBoundingClientRect();
//       const relativeTop = rect.top - parentRect.top;

//       // Set the position of the content box near the corresponding dot
//       setPosition({
//         top: relativeTop - 60, // Adjust for any required offsets, like padding
//         left: rect.left + rect.width / 2, // Center the content box horizontally
//       });
//     }
//   };

//   const handleSlideChange = () => {
//     // Reset the selected year when the slide changes
//     setSelectedYear(null);
//   };

//   return (
//     <div
//       className="bg-cover bg-no-repeat bg-center py-10"
//       style={{ backgroundImage: "url('/AboutPage/timeline/timeLineBG.png')" }}
//     >
//       <h2 className="w-fit text-4xl font-bold ml-[max(5%,calc((100vw-1250px)/2))] text-white border-b-[6px] border-b-[#F7E327]">
//         The KSH Legacy
//       </h2>
//       <div className="px-10 pb-12 relative flex flex-col items-center">
//         {/* Swiper Slider */}
//         <Swiper
//           className="w-full h-[500px]"
//           modules={[Navigation, Pagination, Autoplay]}
//           slidesPerView={1}
//           navigation={{ nextEl: ".arrowright", prevEl: ".arrowleft" }}
//           onSlideChange={handleSlideChange}
//           ref={swiperRef}
//         >
//           {/* Split timelineData into slides */}
//           {[0, 1, 2, 3, 4, 5].map((slideIndex) => (
//             <SwiperSlide key={slideIndex}>
//               <div className="relative flex items-center justify-evenly">
//                 {timelineData
//                   .slice(slideIndex * 4, slideIndex * 4 + 4) // 4 items per slide
//                   .map(({ id, year, marginTop }) => (
//                     <div
//                       key={id}
//                       ref={(el) => (dotsRef.current[id] = el)}
//                       className="flex flex-col items-center cursor-pointer group"
//                       onMouseEnter={() => handleMouseEnter(id)}
//                       style={{ marginTop }}
//                     >
//                       {/* Dot */}
//                       <p className="mb-2 text-white fsans-500 text-base">
//                         {year}
//                       </p>
//                       <div className="relative bg-white w-12 h-12 flex items-center justify-center border-2 border-gray-500 z-50 rounded-full transition-transform duration-300 group-hover:scale-125">
//                         <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
//                       </div>
//                     </div>
//                   ))}
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Content Box Positioned near Corresponding Dot */}
//         {selectedYear && (
//           <motion.div
//             key={selectedYear}
//             initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
//             animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
//             transition={{ duration: 0.7, ease: [0.7, 0, 0.4, 1] }}
//             className="absolute flex-col flex items-center space-x-6 transition-opacity duration-300"
//             style={{
//               position: "absolute",
//               top: `${position.top}px`,
//               left: `${position.left}px`,
//               transform: "translateX(-50%)",
//             }}
//           >
//             <div
//               className="border-solid border-transparent border-[1px] h-[100px] mt-2"
//               style={{
//                 borderImage:
//                   "linear-gradient(to top right, rgba(221, 221, 221, 0.89), rgba(221, 221, 221, 0)) 10",
//               }}
//             ></div>
//             <div className="flex xl-1024:w-[330px] w-[480px]">
//               <img
//                 src={
//                   timelineData.find((item) => item.id === selectedYear)?.image
//                 }
//                 alt="event"
//                 className="w-[165px] h-[138px] object-cover"
//               />
//               <div className="bg-white w-full pt-3 p-2 space-y-2">
//                 <h3 className="fpt-500 text-4xl text-[#092241] leading-9 font-bold">
//                   {timelineData.find((item) => item.id === selectedYear)?.year}
//                 </h3>
//                 <p className="pt-2 fsans-400 text-sm text-[#474747]">
//                   {
//                     timelineData.find((item) => item.id === selectedYear)
//                       ?.content
//                   }
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </div>

//       <div className="flex gap-[14px] items-center justify-center">
//         <button className="arrowleft border-[2px] border-gray-400 rounded-full h-[41px] w-[41px] flex items-center justify-center">
//           <img className="" src="leftWhite.svg" alt="ArrowLeft" />
//         </button>
//         <button className="arrowright border-[2px] border-gray-400 rounded-full h-[41px] w-[41px] flex items-center justify-center">
//           <img className="" src="/rigthWhite.svg" alt="ArrowRight" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Timeline;

//// 9999999999999999 888888888888888***********
//// 9999999999999999 888888888888888***********
//// 9999999999999999 888888888888888***********
//// 9999999999999999 888888888888888***********
//// 9999999999999999 888888888888888***********
//// 9999999999999999 888888888888888***********
//// 9999999999999999 888888888888888***********

// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const timelineData = [
//   {
//     id: 1,
//     year: 1969,
//     content:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     image: "/time/timespot.png",
//     marginTop: "190px",
//   },
//   {
//     id: 2,
//     year: 1979,
//     content: "Consectetur adipiscing elit.",
//     image: "/time/timespot.png",
//     marginTop: "50px",
//   },
//   {
//     id: 4,
//     year: 1981,
//     content: "Sed do eiusmod tempor incididunt.",
//     image: "/time/timespot.png",
//     marginTop: "0px",
//   },
//   {
//     id: 5,
//     year: 1989,
//     content: "Ut labore et dolore magna aliqua.",
//     image: "/time/timespot.png",
//     marginTop: "150px",
//   },
//   {
//     id: 6,
//     year: 1991,
//     content: "Enim ad minim veniam.",
//     image: "/time/timespot.png",
//     marginTop: "30px",
//   },
//   {
//     id: 7,
//     year: 1998,
//     content: "Quis nostrud exercitation ullamco.",
//     image: "/time/timespot.png",
//     marginTop: "50px",
//   },
//   {
//     id: 8,
//     year: 1999,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "90px",
//   },
//   {
//     id: 9,
//     year: 2002,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "150px",
//   },
//   {
//     id: 10,
//     year: 2003,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "-20px",
//   },
//   {
//     id: 11,
//     year: 2006,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "90px",
//   },
//   {
//     id: 12,
//     year: 2008,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "160px",
//   },
//   {
//     id: 13,
//     year: 2011,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "90px",
//   },
//   {
//     id: 14,
//     year: 2012,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "-40px",
//   },
//   {
//     id: 15,
//     year: 2013,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "90px",
//   },
//   {
//     id: 16,
//     year: 2015,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "190px",
//   },
//   {
//     id: 17,
//     year: 2016,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "70px",
//   },
//   {
//     id: 18,
//     year: 2017,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "-30px",
//   },
//   {
//     id: 19,
//     year: 2018,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "90px",
//   },
//   {
//     id: 20,
//     year: 2019,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "90px",
//   },
//   {
//     id: 21,
//     year: 2021,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "90px",
//   },
//   {
//     id: 22,
//     year: 2022,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "0px",
//   },
// ];

// const Timeline = () => {
//   const [selectedYear, setSelectedYear] = useState(null);
//   const [position, setPosition] = useState({ top: 0, left: 0 });
//   const dotsRef = useRef({});
//   const swiperRef = useRef(null);

//   useEffect(() => {
//     // Set initial selection to the first item
//     const firstItem = timelineData[0];
//     if (firstItem) {
//       setSelectedYear(firstItem.id);
//       setTimeout(() => handleMouseEnter(firstItem.id), 100); // Delay to ensure DOM is ready
//     }
//   }, []);

//   const handleMouseEnter = (id) => {
//     setSelectedYear(id);
//     if (dotsRef.current[id]) {
//       const dot = dotsRef.current[id];
//       const parent = dot.offsetParent; // Get the closest positioned ancestor

//       // Get the dot's position relative to the viewport
//       const rect = dot.getBoundingClientRect();

//       // Calculate the position relative to the parent container
//       const parentRect = parent.getBoundingClientRect();
//       const relativeTop = rect.top - parentRect.top;

//       // Log the Y position of the dot relative to its parent
//       console.log(
//         `Dot Y position relative to its parent for ID ${id}:`,
//         relativeTop
//       );

//       // Set the content box position using the Y value of the dot
//       setPosition({
//         top: relativeTop, // Use the relative top value directly
//         left: rect.left + rect.width / 2, // Center the content box horizontally
//       });
//     }
//   };

//   const handleSlideChange = () => {
//     // Reset the selected year when the slide changes
//     setSelectedYear(null);
//   };

//   return (
//     <div
//       className="bg-cover bg-no-repeat bg-center py-10"
//       style={{ backgroundImage: "url('/AboutPage/timeline/timeLineBG.png')" }}
//     >
//       <h2 className="w-fit text-4xl font-bold ml-[max(5%,calc((100vw-1250px)/2))] text-white border-b-[6px] border-b-[#F7E327]">
//         The KSH Legacy
//       </h2>
//       <div className="px-10 pb-12 relative flex flex-col items-center">
//         {/* Swiper Slider */}
//         <Swiper
//           className="w-full h-[500px]"
//           modules={[Navigation, Pagination, Autoplay]}
//           slidesPerView={1}
//           navigation={{ nextEl: ".arrowright", prevEl: ".arrowleft" }}
//           onSlideChange={handleSlideChange}
//           ref={swiperRef}
//         >
//           {/* Split timelineData into slides */}
//           {[0, 1, 2, 3, 4, 5].map((slideIndex) => (
//             <SwiperSlide key={slideIndex}>
//               <div className="relative flex items-center justify-evenly">
//                 {timelineData
//                   .slice(slideIndex * 4, slideIndex * 4 + 4) // 4 items per slide
//                   .map(({ id, year, marginTop }) => (
//                     <div
//                       key={id}
//                       ref={(el) => (dotsRef.current[id] = el)}
//                       className="flex flex-col items-center cursor-pointer group"
//                       onMouseEnter={() => handleMouseEnter(id)}
//                       style={{ marginTop }}
//                     >
//                       {/* Dot */}
//                       <p className="mb-2 text-white fsans-500 text-base">
//                         {year}
//                       </p>
//                       <div className="relative bg-white w-12 h-12 flex items-center justify-center border-2 border-gray-500 z-50 rounded-full transition-transform duration-300 group-hover:scale-125">
//                         <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
//                       </div>
//                     </div>
//                   ))}
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Content Box Positioned near Corresponding Dot */}
//         {selectedYear && (
//           <motion.div
//             key={selectedYear}
//             initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
//             animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
//             transition={{ duration: 0.7, ease: [0.7, 0, 0.4, 1] }}
//             className="absolute flex-col flex items-center space-x-6 transition-opacity duration-300"
//             style={{
//               position: "absolute",
//               top: `${position.top + 70}px`, // Use the calculated Y position
//               left: `${position.left}px`, // Keep the horizontal center
//               transform: "translateX(-50%)",
//             }}
//           >
//             <div
//               className="border-solid border-transparent border-[1px] h-[100px] mt-2"
//               style={{
//                 borderImage:
//                   "linear-gradient(to top right, rgba(221, 221, 221, 0.89), rgba(221, 221, 221, 0)) 10",
//               }}
//             ></div>
//             <div className="flex xl-1024:w-[330px] w-[480px]">
//               <img
//                 src={
//                   timelineData.find((item) => item.id === selectedYear)?.image
//                 }
//                 alt="event"
//                 className="w-[165px] h-[138px] object-cover"
//               />
//               <div className="bg-white w-full pt-3 p-2 space-y-2">
//                 <h3 className="fpt-500 text-4xl text-[#092241] leading-9 font-bold">
//                   {timelineData.find((item) => item.id === selectedYear)?.year}
//                 </h3>
//                 <p className="pt-2 fsans-400 text-sm text-[#474747]">
//                   {
//                     timelineData.find((item) => item.id === selectedYear)
//                       ?.content
//                   }
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </div>

//       <div className="flex gap-[14px] items-center justify-center">
//         <button className="arrowleft border-[2px] border-gray-400 rounded-full h-[41px] w-[41px] flex items-center justify-center">
//           <img className="" src="/leftWhite.svg" alt="ArrowLeft" />
//         </button>
//         <button className="arrowright border-[2px] border-gray-400 rounded-full h-[41px] w-[41px] flex items-center justify-center">
//           <img className="" src="/rigthWhite.svg" alt="ArrowRight" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Timeline;

////////// 999999999999999999 888888888888888 *************
////////// 999999999999999999 888888888888888 *************
////////// 999999999999999999 888888888888888 *************
////////// 999999999999999999 888888888888888 *************
////////// 999999999999999999 888888888888888 *************
////////// 999999999999999999 888888888888888 *************

"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const timelineData = [
  {
    id: 1,
    year: 1969,
    content:
      "Mr. Kushal Subbaya Hegde established his business with the setting up of ‘Kamal Motors’, an exclusive Bosch products’ distribution business in Ahmednagar District, Maharashtra.",
    image: "/time/timespot.png",
    marginTop: "190px",
  },
  {
    id: 2,
    year: 1979,
    content:
      "Expanded the Bosch products’ distribution business into Pune city, Maharashtra by taking over the operations of ‘Waterloo Motors’.",
    image: "/time/timespot.png",
    marginTop: "50px",
  },
  {
    id: 4,
    year: 1981,
    content:
      "Founding of Mumbai plant, with 360 MT annual commercial production of Paper Insulated Copper Conductors (PICC).",
    image: "/time/timespot.png",
    marginTop: "0px",
  },
  {
    id: 5,
    year: 1989,
    content:
      "Established Kushal Motors in Pune city, Maharashtra to cater to the Original Equipment customers of Bosch.",
    image: "/time/timespot.png",
    marginTop: "150px",
  },
  {
    id: 6,
    year: 1991,
    content:
      "Established Kushal Electricals to distribute and service the Electrical Power Tools products of Bosch.Expansion of annual capacity to 1200 MT.",
    image: "/time/timespot.png",
    marginTop: "30px",
  },
  {
    id: 7,
    year: 1998,
    content: "Tripled Annual Capacity to 3600 MT.",
    image: "/time/timespot.png",
    marginTop: "50px",
  },
  {
    id: 8,
    year: 1999,
    content:
      "Established i-Logistics (now KSH Logistics) as a Third party Logistics (3PL) company servicing the captive requirements of Bosch in the Western Region,",
    image: "/time/timespot.png",
    marginTop: "90px",
  },
  {
    id: 9,
    year: 2002,
    content:
      "Plant in Pune set up with additional annual capacity of 2400 MT and launched a new product line – Enameled Copper Conductors.",
    image: "/time/timespot.png",
    marginTop: "150px",
  },
  {
    id: 10,
    year: 2003,
    content:
      "Established the transport division of i-Logistics (now KSH Logistics) with the purchase of a new fleet of trucks. Established Waterloo Distributors to handle the distribution of Bosch auto parts.",
    image: "/time/timespot.png",
    marginTop: "-20px",
  },
  {
    id: 11,
    year: 2006,
    content:
      "Introduction of a new product i.e. CTC of annual capacity of 2000 MT.",
    image: "/time/timespot.png",
    marginTop: "90px",
  },
  {
    id: 12,
    year: 2008,
    content:
      "Established ‘KSH Distriparks’ with the setting up of an Inland container Depot in Talegaon, Pune. The Dry Port facility was set up with a capacity of 90,000 TEUs per annum.",
    image: "/time/timespot.png",
    marginTop: "160px",
  },
  {
    id: 13,
    year: 2011,
    content:
      "Approval for supplying 765 KV Transformers to Power Grid Corporation of India (PGCIL).",
    image: "/time/timespot.png",
    marginTop: "90px",
  },
  {
    id: 14,
    year: 2012,
    content:
      "Attracted Private Equity Investment from the Pacific Century Group of HK/Singapore into the INFRA vertical.",
    image: "/time/timespot.png",
    marginTop: "-40px",
  },
  {
    id: 15,
    year: 2013,
    content:
      "Started construction of the first Multi Modal Logistics & Industrial Park in Talegaon, Pune with a planned development of 1,40,000 square feet for Warehousing/Industrial Infrastructure.",
    image: "/time/timespot.png",
    marginTop: "90px",
  },
  {
    id: 16,
    year: 2015,
    content:
      "Started construction of its second Multi Modal Logistics & Industrial Park in Chakan, Pune with a planned development of 8,50,000 square feet for Warehousing/Industrial Infrastructure.",
    image: "/time/timespot.png",
    marginTop: "190px",
  },
  {
    id: 17,
    year: 2016,
    content:
      "Market leader with annual manufacturing capacity of 20,000 MT of which 12,000 MT comprises of CTC.",
    image: "/time/timespot.png",
    marginTop: "70px",
  },
  {
    id: 18,
    year: 2017,
    content:
      "Reached an annual throughput with an excess of 50,000 TEUs at the Inland Container Depot, Talegaon, Pune.",
    image: "/time/timespot.png",
    marginTop: "-30px",
  },
  {
    id: 19,
    year: 2018,
    content:
      "Approval for supplying HVDC transformers to Power Grid Corporation of India (PGCIL).",
    image: "/time/timespot.png",
    marginTop: "90px",
  },
  {
    id: 20,
    year: 2019,
    content:
      "Started construction of the third Industrial & Logistics Park in Chakan, Pune with a planned development of 1.2 millionsquare feet for Warehousing/Industrial Infrastructure with Mapletree Investments of Singapore.",
    image: "/time/timespot.png",
    marginTop: "90px",
  },
  {
    id: 21,
    year: 2021,
    content:
      "Indospace has agreed to invest INR 1000 crores in a joint venture (JV) with KSH INFRA to develop a portfolio of 10 million square feet of world class warehousing and industrial infrastructure across the country.",
    image: "/time/timespot.png",
    marginTop: "90px",
  },
  {
    id: 22,
    year: 2022,
    content:
      "The first project of the JV is underway in Chakan, Pune with a planned development of close to 1.5 million square feet.",
    image: "/time/timespot.png",
    marginTop: "0px",
  },
];

const Timeline = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const dotsRef = useRef({});
  const swiperRef = useRef(null);

  useEffect(() => {
    // Set initial selection to the first item
    const firstItem = timelineData[0];
    if (firstItem) {
      setSelectedYear(firstItem.id);
      setTimeout(() => handleMouseEnter(firstItem.id), 100); // Delay to ensure DOM is ready
    }
  }, []);

  const handleMouseEnter = (id) => {
    setSelectedYear(id);
    if (dotsRef.current[id]) {
      const dot = dotsRef.current[id];
      const parent = dot.offsetParent; // Get the closest positioned ancestor

      // Get the dot's position relative to the viewport
      const rect = dot.getBoundingClientRect();

      // Calculate the position relative to the parent container
      const parentRect = parent.getBoundingClientRect();
      const relativeTop = rect.top - parentRect.top;

      // Log the Y position of the dot relative to its parent
      console.log(
        `Dot Y position relative to its parent for ID ${id}:`,
        relativeTop
      );

      // Set the content box position using the Y value of the dot
      setPosition({
        top: relativeTop, // Use the relative top value directly
        left: rect.left + rect.width / 2, // Center the content box horizontally
      });
    }
  };

  const handleSlideChange = () => {
    // Reset the selected year when the slide changes
    setSelectedYear(null);
  };

  return (
    <div
      className="bg-cover bg-no-repeat bg-center py-10"
      style={{ backgroundImage: "url('/AboutPage/timeline/timeLineBG.png')" }}
    >
      <h2 className="w-fit text-4xl font-bold ml-[max(5%,calc((100vw-1250px)/2))] text-white border-b-[6px] border-b-[#F7E327]">
        The KSH Legacy
      </h2>
      <div className="px-10 pb-12 relative flex flex-col items-center">
        {/* Swiper Slider */}
        <Swiper
          className="w-full h-[500px]"
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          navigation={{ nextEl: ".arrowright", prevEl: ".arrowleft" }}
          onSlideChange={handleSlideChange}
          ref={swiperRef}
        >
          {/* Split timelineData into slides */}
          {[0, 1, 2, 3, 4, 5].map((slideIndex) => (
            <SwiperSlide key={slideIndex}>
              <div className="relative flex items-center justify-evenly">
                {timelineData
                  .slice(slideIndex * 4, slideIndex * 4 + 4) // 4 items per slide
                  .map(({ id, year, marginTop }) => (
                    <div
                      key={id}
                      ref={(el) => (dotsRef.current[id] = el)}
                      className="flex flex-col items-center cursor-pointer group"
                      onMouseEnter={() => handleMouseEnter(id)}
                      style={{ marginTop }}
                    >
                      {/* Dot */}
                      <p className="mb-2 text-white fsans-500 text-base">
                        {year}
                      </p>
                      <div className="relative bg-[rgba(255,255,255,0.32)] w-12 h-12 flex items-center justify-center border-2 border-[#092241] bg-opacity-50 z-50 rounded-full transition-transform duration-300 group-hover:scale-125">
                        <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                      </div>
                    </div>
                  ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Content Box Positioned near Corresponding Dot */}
        {selectedYear && (
          <motion.div
            key={selectedYear}
            initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 0.7, ease: [0.7, 0, 0.4, 1] }}
            className="absolute flex-col flex items-center space-x-6 transition-opacity duration-300"
            style={{
              position: "absolute",
              top: `${position.top + 70}px`, // Use the calculated Y position
              left: `${position.left}px`, // Keep the horizontal center
              transform: "translateX(-50%)",
            }}
          >
            <div
              className="border-solid border-transparent border-[1px] h-[100px] mt-2"
              style={{
                borderImage:
                  "linear-gradient(to top right, rgba(221, 221, 221, 0), rgba(221, 221, 221, 0.89)) 10",
              }}
            ></div>
            <div className="flex xl-1024:w-[330px] w-[480px]">
              <img
                src={
                  timelineData.find((item) => item.id === selectedYear)?.image
                }
                alt="event"
                className="w-[165px] min-h-full object-cover"
              />
              <div className="bg-white w-full pt-3 p-2 space-y-2">
                <h3 className="fpt-500 text-4xl text-[#092241] leading-9 font-bold">
                  {timelineData.find((item) => item.id === selectedYear)?.year}
                </h3>
                <p className="pt-2 fsans-400 text-sm text-[#474747]">
                  {
                    timelineData.find((item) => item.id === selectedYear)
                      ?.content
                  }
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <div className="flex gap-[14px] items-center justify-center">
        <button className="arrowleft flex items-center justify-center">
          <img
            className="w-[40px] h-[40px]"
            src="/AboutPage/timeline/whitearrowleft.svg"
            alt="ArrowLeft"
          />
        </button>
        <button className="arrowright flex items-center justify-center">
          <img
            className="w-[40px] h-[40px]"
            src="/AboutPage/timeline/whitearrowright.svg"
            alt="ArrowRight"
          />
        </button>
      </div>
    </div>
  );
};

export default Timeline;
