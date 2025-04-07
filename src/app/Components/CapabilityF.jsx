"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import { AnimatePresence, motion } from "framer-motion"; // Import motion
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import LineHead from "./Heading/LineHead";
import Link from "next/link";
// const CapabilitiesF = () => {

//   const [activeTab, setActiveTab] = useState(0); // Track active tab index

//   const [activeIndex, setActiveIndex] = useState(0);
//   const swiperRef = useRef(null);
//   // Handle navigation
//   const handleNext = () => {
//     if (swiperRef.current && activeIndex < tabs.length - 1) {
//       setActiveIndex(activeIndex + 1);
//       swiperRef.current.slideNext();
//     }
//   };
//   const handlePrev = () => {
//     if (swiperRef.current && activeIndex > 0) {
//       setActiveIndex(activeIndex - 1);
//       swiperRef.current.slidePrev();
//     }
//   };

//   // Fade in
//   const fadeInX = {
//     hidden: { opacity: 0, x: -50 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 1.4, ease: [0.7, 0, 0.4, 1] },
//     },
//     exit: {
//       opacity: 0,
//       x: 50,
//       transition: { duration: 1.4, ease: [0.7, 0, 0.4, 1] },
//     },
//   };
//   return (
//     <div className="bg-[#092241] ">
//       {/* <div className="bg-[#092241] md:h-auto h-fit flex items-end justify-end"> */}
//       <div className="bg-[#092241] md:h-auto h-fit ">
//         {/* <div className="border-white w-full  maxTab xl-1024:ml-[44px] xl-1280:ml-[59px] xl-1366:ml-[60px] xl-1440:ml-[90px] xl-1536:ml-[137px] xl-1600:ml-[175px] xl-1920:ml-[17.5%]  lg:pb-0 pb-[100px] lg:gap-0 gap-[50px] flex lg:flex-row flex-col overflow-hidden"> */}
//         <div className="ml-[max(5%,calc((100vw-1250px)/2))] mr-[max(5%,calc((100vw-1250px)/2))] sm:mr-0 lg:gap-0 gap-[50px] flex lg:flex-row flex-col overflow-hidden">
//           <div className="leftCon flex-1 py-10 ">
//             <div className="pt-[40px]">
//               <LineHead
//                 heading="WHAT WE DO. TO DELIVER VALUE."
//                 bclr="#d7d7d7"
//                 bopacity="34%"
//                 clr="text-white"
//               />
//             </div>
//             {/* Tabs */}
//             <div className="tabs flex flex-nowrap  overflow-x-scroll overflow-y-hidden gap-4  xl-768:w-[95%] xl-1024:w-[90%] min-1280:w-[90%]">
//               {tabs.map((tab, index) => (
//                 <button
//                   key={tab.title}
//                   className={`px-3 whitespace-nowrap h-[46px] border border-[#D7D7D7] border-opacity-35 text-white rounded-[10px]
//                                 ${
//                                   activeTab === index
//                                     ? "bg-[#E30613] text-black"
//                                     : ""
//                                 }`}
//                   onClick={() => setActiveTab(index)} // Update active tab
//                 >
//                   {tab.title}
//                 </button>
//               ))}
//             </div>
//             {/* Animated Content Section */}
//             <div className="w-full pt-[30px] xl:pt-0">
//               <motion.div
//                 key={activeTab} // Re-render on tab change
//                 initial={{ x: 500, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 // exit={{ x: -1000, opacity: 0 }}
//                 transition={{ duration: 0.6, ease: [0.7, 0, 0.4, 1] }}
//                 className="w-full mr-10 contentArea"
//               >
//                 <div className="flex flex-col  xl:pt-10 gap-7 xl-1280:h-[350px]  xl-1366:h-[300px] xl-768:w-full w-[90%] contentArea xl-1024:h-[300px] h-[450px] xl-768:h-auto xl-768:gap-10 xl-1440:h-[330px] 2xl:h-[390px] ">
//                   <h1 className="tabHeading text-4xl md:text-[40px] md:leading-[66px] lg:text-[60px] fpt-500 text-white font-medium border-b-[8px] border-[#F7E327] ]">
//                     {tabs[activeTab].heading}
//                     {/* dangerouslySetInnerHTML= {{ __html: tabs[activeTab].heading }} */}
//                   </h1>
//                   <p className="tabContent text-xl gradinetText xl-1024:text-lg">
//                     {tabs[activeTab].content.split("\n").map((line, indx) => (
//                       <React.Fragment key={indx}>
//                         {line}
//                         <br />
//                         <br />
//                       </React.Fragment>
//                     ))}
//                   </p>
//                 </div>
//               </motion.div>
//             </div>

//             {/* Navigation Buttons */}
//             <div className="flex items-center xl-1366:pt-20 pt-[35px] xl:w-[60%] xl-1280:w-[80%] xl-1024:w-[90%] xl-1440:w-[90%] md:w-[100%] w-[100%] justify-between">
//               <Link
//                 href="/capabilities"
//                 className="flex group hover:translate-x-[5px] transition-transform duration-[400ms] items-center justify-center gap-3"
//               >
//                 <img
//                   src="/buttonarrows/redarico.svg"
//                   width={0}
//                   height={0}
//                   className="h-10 w-10 rotate-45 group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-300 cursor-pointer"
//                   alt="Red Arrow Icon"
//                 />
//                 <p className="text-[#ffffff] fsans-600">Explore More</p>
//               </Link>

//               <div className="flex gap-2 items-center">
//                 <button
//                   className="rounded-full border flex items-center justify-center disabled:opacity-50"
//                   onClick={() => {
//                     setActiveTab((prev) => Math.max(prev - 1, 0));
//                     handleNext();
//                   }}
//                   disabled={activeTab === 0}
//                 >
//                   <img className="w-[40px] h-[40px]" src="/landingr.svg" alt="" />
//                 </button>
//                 <div className="text-base text-[#6C8DAB]">
//                   {activeTab + 1} / {tabs.length}
//                 </div>

//                 <button
//                   className="rounded-full border border-[#D7D7D7] border-opacity-50 w-[40px] h-[40px] flex items-center justify-center disabled:opacity-50"
//                   onClick={() => {
//                     setActiveTab((prev) => Math.min(prev + 1, tabs.length - 1));
//                     handlePrev();
//                   }}
//                   disabled={activeTab === tabs.length - 1}
//                 >
//                   <img className="w-[40px] h-[40px]" src="/landingl.svg" alt="" />
//                 </button>
//               </div>
//             </div>
//           </div>
//           {/* Right Container with Swipers */}
//           <div className="rightCon flex-1 lg:max-w-[50%]">
//             {/* Top Image Swiper */}
//             <div>
//               <Swiper
//                 modules={[EffectFade, Pagination, Navigation]}
//                 pagination={{ clickable: true }}
//                 navigation
//                 className="h-full w-full topSlider"
//               >
//                 {tabs[activeTab].images.top.map((img, idx) => (
//                   <SwiperSlide key={idx}>
//                     <div>
//                       <img
//                         src={img}
//                         alt=""
//                         className="min-h-full min-w-full object-cover"
//                       />
//                     </div>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </div>

//             <div className="flex h-full">
//               {/* Bottom Left Image Swiper */}
//               <div className="w-[50%] h-[236px]">
//                 <Swiper
//                   modules={[Pagination, Navigation]}
//                   pagination={{ clickable: true }}
//                   navigation
//                   className="h-full w-full bottomLeft"
//                 >
//                   {tabs[activeTab].images.bottom1.map((img, idx) => (
//                     <SwiperSlide key={idx}>
//                       <img
//                         src={img}
//                         className="w-full min-h-full object-cover"
//                         alt=""
//                       />
//                     </SwiperSlide>
//                   ))}
//                 </Swiper>
//               </div>
//               {/* Bottom Right Image Swiper */}
//               <div className="w-[50%] h-[236px]">
//                 <Swiper
//                   modules={[Pagination, Navigation]}
//                   pagination={{ clickable: true }}
//                   navigation
//                   className="h-full w-full bottomright"
//                 >
//                   {tabs[activeTab].images.bottom2.map((img, idx) => (
//                     <SwiperSlide key={idx}>
//                       <img
//                         src={img}
//                         className="w-full h-full object-cover"
//                         alt=""
//                       />
//                     </SwiperSlide>
//                   ))}
//                 </Swiper>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default CapabilitiesF;

// const CapabilitiesF = () => {

//   const [activeTab, setActiveTab] = useState(0); // Track active tab index
//   const [activeIndex, setActiveIndex] = useState(0);
//   const swiperRef = useRef(null);

//   // Handle navigation
//   const handleNext = () => {
//     if (swiperRef.current && activeIndex < tabs.length - 1) {
//       setActiveIndex(activeIndex + 1);
//       swiperRef.current.slideNext();
//     }
//   };
//   const handlePrev = () => {
//     if (swiperRef.current && activeIndex > 0) {
//       setActiveIndex(activeIndex - 1);
//       swiperRef.current.slidePrev();
//     }
//   };

//   // Fade in animation for content
//   const fadeInX = {
//     hidden: { opacity: 0, x: -50 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 1.4, ease: [0.7, 0, 0.4, 1] },
//     },
//     exit: {
//       opacity: 0,
//       x: 50,
//       transition: { duration: 1.4, ease: [0.7, 0, 0.4, 1] },
//     },
//   };

//   return (
//     <div className="bg-[#092241]">
//       <div className="bg-[#092241] md:h-auto h-fit">
//         <div className="ml-[max(5%,calc((100vw-1250px)/2))] mr-[max(5%,calc((100vw-1250px)/2))] sm:mr-0 lg:gap-0 gap-[50px] flex lg:flex-row flex-col overflow-hidden">
//           {/* Left Container */}
//           <div className="leftCon flex-1 py-10">
//             <div className="pt-[40px]">
//               <LineHead
//                 heading="WHAT WE DO. TO DELIVER VALUE."
//                 bclr="#d7d7d7"
//                 bopacity="34%"
//                 clr="text-white"
//               />
//             </div>
//             {/* Tabs */}
//             <div className="tabs flex flex-nowrap overflow-x-scroll overflow-y-hidden gap-4 xl-768:w-[95%] xl-1024:w-[90%] min-1280:w-[90%]">
//               {tabs.map((tab, index) => (
//                 <button
//                   key={tab.title}
//                   className={`px-3 whitespace-nowrap h-[46px] border border-[#D7D7D7] border-opacity-35 text-white rounded-[10px] ${
//                     activeTab === index ? "bg-[#E30613] text-black" : ""
//                   }`}
//                   onClick={() => setActiveTab(index)}
//                 >
//                   {tab.title}
//                 </button>
//               ))}
//             </div>
//             {/* Animated Content Section */}
//             <div className="w-full pt-[30px] xl:pt-0">
//               <motion.div
//                 key={activeTab}
//                 initial={{ x: 500, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.6, ease: [0.7, 0, 0.4, 1] }}
//                 className="w-full mr-10 contentArea"
//               >
//                 <div className="flex flex-col xl:pt-10 gap-7 xl-1280:h-[350px] xl-1366:h-[300px] xl-768:w-full w-[90%] contentArea xl-1024:h-[300px] h-[450px] xl-768:h-auto xl-768:gap-10 xl-1440:h-[330px] 2xl:h-[390px]">
//                   <h1 className="tabHeading text-4xl md:text-[40px] md:leading-[66px] lg:text-[60px] fpt-500 text-white font-medium border-b-[8px] border-[#F7E327]">
//                     {tabs[activeTab].heading}
//                   </h1>
//                   <p className="tabContent text-xl gradinetText xl-1024:text-lg">
//                     {tabs[activeTab].content.split("\n").map((line, indx) => (
//                       <React.Fragment key={indx}>
//                         {line}
//                         <br />
//                         <br />
//                       </React.Fragment>
//                     ))}
//                   </p>
//                 </div>
//               </motion.div>
//             </div>
//             {/* Navigation Buttons */}
//             <div className="flex items-center xl-1366:pt-20 pt-[35px] xl:w-[60%] xl-1280:w-[80%] xl-1024:w-[90%] xl-1440:w-[90%] md:w-[100%] w-[100%] justify-between">
//               <Link
//                 href="/capabilities"
//                 className="flex group hover:translate-x-[5px] transition-transform duration-[400ms] items-center justify-center gap-3"
//               >
//                 <img
//                   src="/buttonarrows/redarico.svg"
//                   width={0}
//                   height={0}
//                   className="h-10 w-10 rotate-45 group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-300 cursor-pointer"
//                   alt="Red Arrow Icon"
//                 />
//                 <p className="text-[#ffffff] fsans-600">Explore More</p>
//               </Link>
//               <div className="flex gap-2 items-center">
//                 <button
//                   className="rounded-full border flex items-center justify-center disabled:opacity-50"
//                   onClick={() => {
//                     setActiveTab((prev) => Math.max(prev - 1, 0));
//                     handleNext();
//                   }}
//                   disabled={activeTab === 0}
//                 >
//                   <img className="w-[40px] h-[40px]" src="/landingr.svg" alt="" />
//                 </button>
//                 <div className="text-base text-[#6C8DAB]">
//                   {activeTab + 1} / {tabs.length}
//                 </div>
//                 <button
//                   className="rounded-full border border-[#D7D7D7] border-opacity-50 w-[40px] h-[40px] flex items-center justify-center disabled:opacity-50"
//                   onClick={() => {
//                     setActiveTab((prev) => Math.min(prev + 1, tabs.length - 1));
//                     handlePrev();
//                   }}
//                   disabled={activeTab === tabs.length - 1}
//                 >
//                   <img className="w-[40px] h-[40px]" src="/landingl.svg" alt="" />
//                 </button>
//               </div>
//             </div>
//           </div>
//           {/* Right Container with Swipers */}
//           <div className="rightCon flex-1 lg:max-w-[50%] flex flex-col">
//             {/* Top Image Swiper */}
//             <div className="flex-1">
//               <Swiper
//                 modules={[EffectFade, Pagination, Navigation]}
//                 pagination={{ clickable: true }}
//                 navigation
//                 className="h-full w-full topSlider"
//               >
//                 {tabs[activeTab].images.top.map((img, idx) => (
//                   <SwiperSlide key={idx}>
//                     <div>
//                       <img
//                         src={img}
//                         alt=""
//                         className="min-h-full min-w-full object-cover"
//                       />
//                     </div>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </div>
//             {/* Bottom Images Container */}
//             <div className="flex flex-row flex-1">
//               {/* Bottom Left Image Swiper */}
//               <div className="w-[50%] h-full">
//                 <Swiper
//                   modules={[Pagination, Navigation]}
//                   pagination={{ clickable: true }}
//                   navigation
//                   className="h-full w-full bottomLeft"
//                 >
//                   {tabs[activeTab].images.bottom1.map((img, idx) => (
//                     <SwiperSlide key={idx}>
//                       <img
//                         src={img}
//                         className="w-full h-full object-cover"
//                         alt=""
//                       />
//                     </SwiperSlide>
//                   ))}
//                 </Swiper>
//               </div>
//               {/* Bottom Right Image Swiper */}
//               <div className="w-[50%] h-full">
//                 <Swiper
//                   modules={[Pagination, Navigation]}
//                   pagination={{ clickable: true }}
//                   navigation
//                   className="h-full w-full bottomright"
//                 >
//                   {tabs[activeTab].images.bottom2.map((img, idx) => (
//                     <SwiperSlide key={idx}>
//                       <img
//                         src={img}
//                         className="w-full h-full object-cover"
//                         alt=""
//                       />
//                     </SwiperSlide>
//                   ))}
//                 </Swiper>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CapabilitiesF;

// Animation done here
// const CapabilitiesF = () => {
//   const tabs = [
//     {
//       title: "Land Acquisition",
//       heading: (
//         <>
//           Land <br /> Acquisition
//         </>
//       ),
//       content:
//         "We find the perfect locations for your business success. Our industrial and logistics parks offer excellent connectivity and room for logistics and operations to thrive. Our meticulous experts carefully select sites with the best access to transportation and growing markets. When you move in, you'll have everything you need to operate efficiently today and expand tomorrow.",
//       images: {
//         top: ["/OurCapabilities/land_top1.png"],
//         bottom1: ["/OurCapabilities/land_bottom1_1.png"],
//         bottom2: ["/OurCapabilities/land_bottom2_1.png"],
//       },
//     },
//     {
//       title: "Capital Deployment",
//       heading: (
//         <>
//           {" "}
//           Capital <br /> Deployment{" "}
//         </>
//       ),
//       content:
//         "Our smart capital deployment approach and strong partnerships help us build start-of-the-art facilities suitable for a whole range of industries. We know how to use capital wisely to allocate resources across people, technology, and the environment to deliver infrastructure that fits exactly what your business needs.",
//       images: {
//         top: ["/OurCapabilities/Cap_top1.png"],
//         bottom1: ["/OurCapabilities/capBottom1_1.png"],
//         bottom2: ["/OurCapabilities/capBottom2_1.png"],
//       },
//     },
//     {
//       title: "Project Development",
//       heading: <>Project Development</>,
//       content:
//         "From start to finish, our experienced professionals handle everything—planning, construction, and completion. You get high-quality custom industrial and warehousing facilities, delivered when you need them.",
//       images: {
//         top: ["/OurCapabilities/DevTop1.png"],
//         bottom1: ["/OurCapabilities/DevBottom1.png"],
//         bottom2: ["/OurCapabilities/DevBottom2.png"],
//       },
//     },
//     {
//       title: "Leasing ",
//       heading: <>Leasing</>,
//       content:
//         "We offer flexible leases that work for you. Choose custom-built spaces, move-in ready spaces or whichever option fits your business for a smooth start.",
//       images: {
//         top: ["/OurCapabilities/leasTop.png"],
//         bottom1: ["/OurCapabilities/leasBottom1.png"],
//         bottom2: ["/OurCapabilities/leasBottom2.png"],
//       },
//     },
//     {
//       title: "Property Management",
//       heading: (
//         <>
//           {" "}
//           Property <br /> Management{" "}
//         </>
//       ),
//       content:
//         "Our property management team keeps everything running smoothly. We handle all maintenance so that you can focus completely on your core business.\nWe take care of your facility needs day in and day out. No hassles and no worries—just well-maintained properties that support your operations.",
//       images: {
//         top: ["/OurCapabilities/propertyTop.png"],
//         bottom1: ["/OurCapabilities/propertyBottom1.png"],
//         bottom2: ["/OurCapabilities/propertyBottom2.png"],
//       },
//     },
//   ];

//   const [activeTab, setActiveTab] = useState(0); // Track active tab index
//   const [activeIndex, setActiveIndex] = useState(0);
//   const swiperRef = useRef(null);

//   // Handle navigation
//   const handleNext = () => {
//     if (swiperRef.current && activeIndex < tabs.length - 1) {
//       setActiveIndex(activeIndex + 1);
//       swiperRef.current.slideNext();
//     }
//   };
//   const handlePrev = () => {
//     if (swiperRef.current && activeIndex > 0) {
//       setActiveIndex(activeIndex - 1);
//       swiperRef.current.slidePrev();
//     }
//   };

//   // Fade in animation for content
//   const fadeInX = {
//     hidden: { opacity: 0, x: -50 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 1.4, ease: [0.7, 0, 0.4, 1] },
//     },
//     exit: {
//       opacity: 0,
//       x: 50,
//       transition: { duration: 1.4, ease: [0.7, 0, 0.4, 1] },
//     },
//   };

//   return (
//     <div className="bg-[#092241]">
//       <div className="bg-[#092241] md:h-auto h-fit">
//         <div className="ml-[max(5%,calc((100vw-1250px)/2))] mr-[max(5%,calc((100vw-1250px)/2))] sm:mr-0 lg:gap-0 gap-[50px] flex lg:flex-row flex-col overflow-hidden">
//           {/* Left Container */}
//           <div className="leftCon flex-1 py-10">
//             <div className="pt-[40px]">
//               <LineHead
//                 heading="WHAT WE DO. TO DELIVER VALUE."
//                 bclr="#d7d7d7"
//                 bopacity="34%"
//                 clr="text-white"
//               />
//             </div>
//             {/* Tabs */}
//             <div className="tabs flex flex-nowrap overflow-x-scroll overflow-y-hidden gap-4 xl-768:w-[95%] xl-1024:w-[90%] min-1280:w-[90%]">
//               {tabs.map((tab, index) => (
//                 <button
//                   key={tab.title}
//                   className={`px-3 whitespace-nowrap h-[46px] border border-[#D7D7D7] border-opacity-35 text-white rounded-[10px] ${
//                     activeTab === index ? "bg-[#E30613] text-black" : ""
//                   }`}
//                   onClick={() => setActiveTab(index)}
//                 >
//                   {tab.title}
//                 </button>
//               ))}
//             </div>
//             {/* Animated Content Section */}
//             <div className="w-full pt-[30px] xl:pt-0">
//               <motion.div
//                 key={activeTab}
//                 initial={{ x: 500, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.6, ease: [0.7, 0, 0.4, 1] }}
//                 className="w-full mr-10 contentArea"
//               >
//                 <div className="flex flex-col xl:pt-10 gap-7 xl-1280:h-[350px] xl-1366:h-[300px] xl-768:w-full w-[90%] contentArea xl-1024:h-[300px] h-[450px] xl-768:h-auto xl-768:gap-10 xl-1440:h-[330px] 2xl:h-[390px]">
//                   <h1 className="tabHeading text-4xl md:text-[40px] md:leading-[66px] lg:text-[60px] fpt-500 text-white font-medium border-b-[8px] border-[#F7E327]">
//                     {tabs[activeTab].heading}
//                   </h1>
//                   <p className="tabContent text-xl gradinetText xl-1024:text-lg">
//                     {tabs[activeTab].content.split("\n").map((line, indx) => (
//                       <React.Fragment key={indx}>
//                         {line}
//                         <br />
//                         <br />
//                       </React.Fragment>
//                     ))}
//                   </p>
//                 </div>
//               </motion.div>
//             </div>
//             {/* Navigation Buttons */}
//             <div className="flex items-center xl-1366:pt-20 pt-[35px] xl:w-[60%] xl-1280:w-[80%] xl-1024:w-[90%] xl-1440:w-[90%] md:w-[100%] w-[100%] justify-between">
//               <Link
//                 href="/capabilities"
//                 className="flex group hover:translate-x-[5px] transition-transform duration-[400ms] items-center justify-center gap-3"
//               >
//                 <img
//                   src="/buttonarrows/redarico.svg"
//                   width={0}
//                   height={0}
//                   className="h-10 w-10 rotate-45 group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-300 cursor-pointer"
//                   alt="Red Arrow Icon"
//                 />
//                 <p className="text-[#ffffff] fsans-600">Explore More</p>
//               </Link>
//               <div className="flex gap-2 items-center">
//                 <button
//                   className="rounded-full border flex items-center justify-center disabled:opacity-50"
//                   onClick={() => {
//                     setActiveTab((prev) => Math.max(prev - 1, 0));
//                     handleNext();
//                   }}
//                   disabled={activeTab === 0}
//                 >
//                   <img className="w-[40px] h-[40px]" src="/landingr.svg" alt="" />
//                 </button>
//                 <div className="text-base text-[#6C8DAB]">
//                   {activeTab + 1} / {tabs.length}
//                 </div>
//                 <button
//                   className="rounded-full border border-[#D7D7D7] border-opacity-50 w-[40px] h-[40px] flex items-center justify-center disabled:opacity-50"
//                   onClick={() => {
//                     setActiveTab((prev) => Math.min(prev + 1, tabs.length - 1));
//                     handlePrev();
//                   }}
//                   disabled={activeTab === tabs.length - 1}
//                 >
//                   <img className="w-[40px] h-[40px]" src="/landingl.svg" alt="" />
//                 </button>
//               </div>
//             </div>
//           </div>
//           {/* Right Container with Swipers */}
//           <div className="rightCon flex-1 lg:max-w-[50%] flex flex-col">
//             {/* Top Image Swiper */}
//             <div className="flex-1">
//               <Swiper
//                 modules={[EffectFade, Pagination, Navigation]}
//                 pagination={{ clickable: true }}
//                 navigation
//                 className="h-full w-full topSlider"
//               >
//                 {tabs[activeTab].images.top.map((img) => (
//                   <SwiperSlide key={img}>
//                     <AnimatePresence>
//                       <motion.img
//                         key={img}
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                         transition={{ duration: 0.6, ease: [0.7, 0, 0.3, 1] }}
//                         src={img}
//                         alt=""
//                         className="min-h-full min-w-full object-cover"
//                       />
//                     </AnimatePresence>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </div>
//             {/* Bottom Images Container */}
//             <div className="flex flex-row flex-1">
//               {/* Bottom Left Image Swiper */}
//               <div className="w-[50%] h-full">
//                 <Swiper
//                   modules={[Pagination, Navigation]}
//                   pagination={{ clickable: true }}
//                   navigation
//                   className="h-full w-full bottomLeft"
//                 >
//                   {tabs[activeTab].images.bottom1.map((img) => (
//                     <SwiperSlide key={img}>
//                       <AnimatePresence>
//                         <motion.img
//                           key={img}
//                           initial={{ opacity: 0 }}
//                           animate={{ opacity: 1 }}
//                           exit={{ opacity: 0 }}
//                           transition={{ duration: 0.6, ease: [0.7, 0, 0.3, 1] }}
//                           src={img}
//                           className="w-full h-full object-cover"
//                           alt=""
//                         />
//                       </AnimatePresence>
//                     </SwiperSlide>
//                   ))}
//                 </Swiper>
//               </div>
//               {/* Bottom Right Image Swiper */}
//               <div className="w-[50%] h-full">
//                 <Swiper
//                   modules={[Pagination, Navigation]}
//                   pagination={{ clickable: true }}
//                   navigation
//                   className="h-full w-full bottomright"
//                 >
//                   {tabs[activeTab].images.bottom2.map((img) => (
//                     <SwiperSlide key={img}>
//                       <AnimatePresence>
//                         <motion.img
//                           key={img}
//                           initial={{ opacity: 0 }}
//                           animate={{ opacity: 1 }}
//                           exit={{ opacity: 0 }}
//                           transition={{ duration: 0.6, ease: [0.7, 0, 0.3, 1] }}
//                           src={img}
//                           className="w-full h-full object-cover"
//                           alt=""
//                         />
//                       </AnimatePresence>
//                     </SwiperSlide>
//                   ))}
//                 </Swiper>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CapabilitiesF;

//Finalising animation
// const CapabilitiesF = () => {
//   const tabs = [
//     {
//       title: "Land Acquisition",
//       heading: (
//         <>
//           Land <br /> Acquisition
//         </>
//       ),
//       content:
//         "We find the perfect locations for your business success. Our industrial and logistics parks offer excellent connectivity and room for logistics and operations to thrive. Our meticulous experts carefully select sites with the best access to transportation and growing markets. When you move in, you'll have everything you need to operate efficiently today and expand tomorrow.",
//       images: {
//         top: ["/OurCapabilities/land_top1.png"],
//         bottom1: ["/OurCapabilities/land_bottom1_1.png"],
//         bottom2: ["/OurCapabilities/land_bottom2_1.png"],
//       },
//     },
//     {
//       title: "Capital Deployment",
//       heading: (
//         <>
//           {" "}
//           Capital <br /> Deployment{" "}
//         </>
//       ),
//       content:
//         "Our smart capital deployment approach and strong partnerships help us build start-of-the-art facilities suitable for a whole range of industries. We know how to use capital wisely to allocate resources across people, technology, and the environment to deliver infrastructure that fits exactly what your business needs.",
//       images: {
//         top: ["/OurCapabilities/Cap_top1.png"],
//         bottom1: ["/OurCapabilities/capBottom1_1.png"],
//         bottom2: ["/OurCapabilities/capBottom2_1.png"],
//       },
//     },
//     {
//       title: "Project Development",
//       heading: <>Project Development</>,
//       content:
//         "From start to finish, our experienced professionals handle everything—planning, construction, and completion. You get high-quality custom industrial and warehousing facilities, delivered when you need them.",
//       images: {
//         top: ["/OurCapabilities/DevTop1.png"],
//         bottom1: ["/OurCapabilities/DevBottom1.png"],
//         bottom2: ["/OurCapabilities/DevBottom2.png"],
//       },
//     },
//     {
//       title: "Leasing ",
//       heading: <>Leasing</>,
//       content:
//         "We offer flexible leases that work for you. Choose custom-built spaces, move-in ready spaces or whichever option fits your business for a smooth start.",
//       images: {
//         top: ["/OurCapabilities/leasTop.png"],
//         bottom1: ["/OurCapabilities/leasBottom1.png"],
//         bottom2: ["/OurCapabilities/leasBottom2.png"],
//       },
//     },
//     {
//       title: "Property Management",
//       heading: (
//         <>
//           {" "}
//           Property <br /> Management{" "}
//         </>
//       ),
//       content:
//         "Our property management team keeps everything running smoothly. We handle all maintenance so that you can focus completely on your core business.\nWe take care of your facility needs day in and day out. No hassles and no worries—just well-maintained properties that support your operations.",
//       images: {
//         top: ["/OurCapabilities/propertyTop.png"],
//         bottom1: ["/OurCapabilities/propertyBottom1.png"],
//         bottom2: ["/OurCapabilities/propertyBottom2.png"],
//       },
//     },
//   ];

//   const [activeTab, setActiveTab] = useState(0); // Track active tab index
//   const [activeIndex, setActiveIndex] = useState(0);
//   const swiperRef = useRef(null);

//   // Handle navigation
//   const handleNext = () => {
//     if (swiperRef.current && activeIndex < tabs.length - 1) {
//       setActiveIndex(activeIndex + 1);
//       swiperRef.current.slideNext();
//     }
//   };
//   const handlePrev = () => {
//     if (swiperRef.current && activeIndex > 0) {
//       setActiveIndex(activeIndex - 1);
//       swiperRef.current.slidePrev();
//     }
//   };

//   return (
//     <div className="bg-[#092241]">
//       <div className="bg-[#092241] md:h-auto h-fit">
//         <div className="ml-[max(5%,calc((100vw-1250px)/2))] mr-[max(5%,calc((100vw-1250px)/2))] sm:mr-0 lg:gap-0 gap-[50px] flex lg:flex-row flex-col overflow-hidden">
//           {/* Left Container */}
//           <div className="leftCon flex-1 py-10">
//             <div className="pt-[40px]">
//               <LineHead
//                 heading="WHAT WE DO. TO DELIVER VALUE."
//                 bclr="#d7d7d7"
//                 bopacity="34%"
//                 clr="text-white"
//               />
//             </div>
//             {/* Tabs */}
//             <div className="tabs flex flex-nowrap overflow-x-scroll overflow-y-hidden gap-4 xl-768:w-[95%] xl-1024:w-[90%] min-1280:w-[90%]">
//               {tabs.map((tab, index) => (
//                 <button
//                   key={tab.title}
//                   className={`px-3 whitespace-nowrap h-[46px] border border-[#D7D7D7] border-opacity-35 text-white rounded-[10px] ${
//                     activeTab === index ? "bg-[#E30613] text-black" : ""
//                   }`}
//                   onClick={() => setActiveTab(index)}
//                 >
//                   {tab.title}
//                 </button>
//               ))}
//             </div>
//             {/* Animated Content Section */}
//             <div className="w-full pt-[30px] xl:pt-0">
//               <motion.div
//                 key={activeTab}
//                 initial={{ x: 500, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.6, ease: [0.7, 0, 0.4, 1] }}
//                 className="w-full mr-10 contentArea"
//               >
//                 <div className="flex flex-col xl:pt-10 gap-7 xl-1280:h-[350px] xl-1366:h-[300px] xl-768:w-full w-[90%] contentArea xl-1024:h-[300px] h-[450px] xl-768:h-auto xl-768:gap-10 xl-1440:h-[330px] 2xl:h-[390px]">
//                   <h1 className="tabHeading text-4xl md:text-[40px] md:leading-[66px] lg:text-[60px] fpt-500 text-white font-medium border-b-[8px] border-[#F7E327]">
//                     {tabs[activeTab].heading}
//                   </h1>
//                   <p className="tabContent text-xl gradinetText xl-1024:text-lg">
//                     {tabs[activeTab].content.split("\n").map((line, indx) => (
//                       <React.Fragment key={indx}>
//                         {line}
//                         <br />
//                         <br />
//                       </React.Fragment>
//                     ))}
//                   </p>
//                 </div>
//               </motion.div>
//             </div>
//             {/* Navigation Buttons */}
//             <div className="flex items-center xl-1366:pt-20 pt-[35px] xl:w-[60%] xl-1280:w-[80%] xl-1024:w-[90%] xl-1440:w-[90%] md:w-[100%] w-[100%] justify-between">
//               <Link
//                 href="/capabilities"
//                 className="flex group hover:translate-x-[5px] transition-transform duration-[400ms] items-center justify-center gap-3"
//               >
//                 <img
//                   src="/buttonarrows/redarico.svg"
//                   width={0}
//                   height={0}
//                   className="h-10 w-10 rotate-45 group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-300 cursor-pointer"
//                   alt="Red Arrow Icon"
//                 />
//                 <p className="text-[#ffffff] fsans-600">Explore More</p>
//               </Link>
//               <div className="flex gap-2 items-center">
//                 <button
//                   className="rounded-full border flex items-center justify-center disabled:opacity-50"
//                   onClick={() => {
//                     setActiveTab((prev) => Math.max(prev - 1, 0));
//                     handleNext();
//                   }}
//                   disabled={activeTab === 0}
//                 >
//                   <img className="w-[40px] h-[40px]" src="/landingr.svg" alt="" />
//                 </button>
//                 <div className="text-base text-[#6C8DAB]">
//                   {activeTab + 1} / {tabs.length}
//                 </div>
//                 <button
//                   className="rounded-full border border-[#D7D7D7] border-opacity-50 w-[40px] h-[40px] flex items-center justify-center disabled:opacity-50"
//                   onClick={() => {
//                     setActiveTab((prev) => Math.min(prev + 1, tabs.length - 1));
//                     handlePrev();
//                   }}
//                   disabled={activeTab === tabs.length - 1}
//                 >
//                   <img className="w-[40px] h-[40px]" src="/landingl.svg" alt="" />
//                 </button>
//               </div>
//             </div>
//           </div>
//           {/* Right Container with Swipers */}
//           <div className="rightCon flex-1 lg:max-w-[50%] flex flex-col overflow-hidden">
//             {/* Top Image Swiper */}
//             <div className="flex-1">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={`top-${activeTab}`}
//                   initial={{ y: -100, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   exit={{ y: 100, opacity: 0 }}
//                   transition={{ duration: 1, ease: [0.7, 0, 0.3, 1] }}
//                   className="h-full w-full"
//                 >
//                   <Swiper
//                     modules={[EffectFade, Pagination, Navigation]}
//                     pagination={{ clickable: true }}
//                     navigation
//                     className="h-full w-full topSlider"
//                   >
//                     {tabs[activeTab].images.top.map((img) => (
//                       <SwiperSlide key={img}>
//                         <img
//                           src={img}
//                           alt=""
//                           className="min-h-full min-w-full object-cover"
//                         />
//                       </SwiperSlide>
//                     ))}
//                   </Swiper>
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//             {/* Bottom Images Container */}
//             <div className="flex flex-row flex-1">
//               {/* Bottom Left Image Swiper */}
//               <div className="w-[50%] h-full">
//                 <AnimatePresence mode="wait">
//                   <motion.div
//                     key={`bottom1-${activeTab}`}
//                     initial={{ x: -100, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     exit={{ x: -100, opacity: 0 }}
//                     transition={{
//                       duration: 1,
//                       ease: [0.7, 0, 0.3, 1],
//                       delay: 0.1,
//                     }}
//                     className="h-full w-full"
//                   >
//                     <Swiper
//                       modules={[Pagination, Navigation]}
//                       pagination={{ clickable: true }}
//                       navigation
//                       className="h-full w-full bottomLeft"
//                     >
//                       {tabs[activeTab].images.bottom1.map((img) => (
//                         <SwiperSlide key={img}>
//                           <img
//                             src={img}
//                             className="w-full h-full object-cover"
//                             alt=""
//                           />
//                         </SwiperSlide>
//                       ))}
//                     </Swiper>
//                   </motion.div>
//                 </AnimatePresence>
//               </div>
//               {/* Bottom Right Image Swiper */}
//               <div className="w-[50%] h-full">
//                 <AnimatePresence mode="wait">
//                   <motion.div
//                     key={`bottom2-${activeTab}`}
//                     initial={{ x: 100, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     exit={{ x: 100, opacity: 0 }}
//                     transition={{
//                       duration: 1,
//                       ease: [0.7, 0, 0.3, 1],
//                       delay: 0.1,
//                     }}
//                     className="h-full w-full"
//                   >
//                     <Swiper
//                       modules={[Pagination, Navigation]}
//                       pagination={{ clickable: true }}
//                       navigation
//                       className="h-full w-full bottomright"
//                     >
//                       {tabs[activeTab].images.bottom2.map((img) => (
//                         <SwiperSlide key={img}>
//                           <img
//                             src={img}
//                             className="w-full h-full object-cover"
//                             alt=""
//                           />
//                         </SwiperSlide>
//                       ))}
//                     </Swiper>
//                   </motion.div>
//                 </AnimatePresence>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CapabilitiesF;

// const CapabilitiesF = () => {
//   const tabs = [
//     {
//       title: "Land Acquisition",
//       heading: (
//         <>
//           Land <br /> Acquisition
//         </>
//       ),
//       content:
//         "We find the perfect locations for your business success. Our industrial and logistics parks offer excellent connectivity and room for logistics and operations to thrive. Our meticulous experts carefully select sites with the best access to transportation and growing markets. When you move in, you'll have everything you need to operate efficiently today and expand tomorrow.",
//       images: {
//         top: ["/OurCapabilities/land_top1.png"],
//         bottom1: ["/OurCapabilities/land_bottom1_1.png"],
//         bottom2: ["/OurCapabilities/land_bottom2_1.png"],
//       },
//     },
//     {
//       title: "Capital Deployment",
//       heading: (
//         <>
//           {" "}
//           Capital <br /> Deployment{" "}
//         </>
//       ),
//       content:
//         "Our smart capital deployment approach and strong partnerships help us build start-of-the-art facilities suitable for a whole range of industries. We know how to use capital wisely to allocate resources across people, technology, and the environment to deliver infrastructure that fits exactly what your business needs.",
//       images: {
//         top: ["/OurCapabilities/Cap_top1.png"],
//         bottom1: ["/OurCapabilities/capBottom1_1.png"],
//         bottom2: ["/OurCapabilities/capBottom2_1.png"],
//       },
//     },
//     {
//       title: "Project Development",
//       heading: <>Project Development</>,
//       content:
//         "From start to finish, our experienced professionals handle everything—planning, construction, and completion. You get high-quality custom industrial and warehousing facilities, delivered when you need them.",
//       images: {
//         top: ["/OurCapabilities/DevTop1.png"],
//         bottom1: ["/OurCapabilities/DevBottom1.png"],
//         bottom2: ["/OurCapabilities/DevBottom2.png"],
//       },
//     },
//     {
//       title: "Leasing ",
//       heading: <>Leasing</>,
//       content:
//         "We offer flexible leases that work for you. Choose custom-built spaces, move-in ready spaces or whichever option fits your business for a smooth start.",
//       images: {
//         top: ["/OurCapabilities/leasTop.png"],
//         bottom1: ["/OurCapabilities/leasBottom1.png"],
//         bottom2: ["/OurCapabilities/leasBottom2.png"],
//       },
//     },
//     {
//       title: "Property Management",
//       heading: (
//         <>
//           {" "}
//           Property <br /> Management{" "}
//         </>
//       ),
//       content:
//         "Our property management team keeps everything running smoothly. We handle all maintenance so that you can focus completely on your core business.\nWe take care of your facility needs day in and day out. No hassles and no worries—just well-maintained properties that support your operations.",
//       images: {
//         top: ["/OurCapabilities/propertyTop.png"],
//         bottom1: ["/OurCapabilities/propertyBottom1.png"],
//         bottom2: ["/OurCapabilities/propertyBottom2.png"],
//       },
//     },
//   ];

//   const [activeTab, setActiveTab] = useState(0); // Track active tab index
//   // New state: starting index for visible tabs (only 3 shown at a time)
//   const [visibleTabStart, setVisibleTabStart] = useState(0);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const swiperRef = useRef(null);

//   // Handle image slider navigation (unchanged)
//   const handleNext = () => {
//     if (swiperRef.current && activeIndex < tabs.length - 1) {
//       setActiveIndex(activeIndex + 1);
//       swiperRef.current.slideNext();
//     }
//   };
//   const handlePrev = () => {
//     if (swiperRef.current && activeIndex > 0) {
//       setActiveIndex(activeIndex - 1);
//       swiperRef.current.slidePrev();
//     }
//   };

//   return (
//     <div className="bg-[#092241]">
//       <div className="bg-[#092241] md:h-auto h-fit">
//         <div className="ml-[max(5%,calc((100vw-1250px)/2))] mr-[max(5%,calc((100vw-1250px)/2))] sm:mr-0 lg:gap-0 gap-[50px] flex lg:flex-row flex-col overflow-hidden">
//           {/* Left Container */}
//           <div className="leftCon flex-1 py-10">
//             <div className="pt-[40px]">
//               <LineHead
//                 heading="WHAT WE DO. TO DELIVER VALUE."
//                 bclr="#d7d7d7"
//                 bopacity="34%"
//                 clr="text-white"
//               />
//             </div>
//             {/* Tabs Section with visible range and custom Prev/Next for tabs */}
//             <div className="mt-6 flex items-center">
//               <button
//                 onClick={() => {
//                   if (visibleTabStart > 0) {
//                     setVisibleTabStart(visibleTabStart - 1);
//                     setActiveTab(visibleTabStart - 1);
//                   }
//                 }}
//                 disabled={visibleTabStart === 0}
//                 className="px-2 disabled:opacity-30"
//               >
//                 Prev
//               </button>
//               <div className="flex flex-nowrap overflow-hidden gap-4">
//                 {tabs
//                   .slice(visibleTabStart, visibleTabStart + 3)
//                   .map((tab, idx) => {
//                     const absoluteIndex = visibleTabStart + idx;
//                     return (
//                       <button
//                         key={tab.title}
//                         className={`px-3 whitespace-nowrap h-[46px] border border-[#D7D7D7] border-opacity-35 text-white rounded-[10px] transition-all duration-300 ${
//                           activeTab === absoluteIndex
//                             ? "bg-[#E30613] text-black"
//                             : ""
//                         }`}
//                         onClick={() => setActiveTab(absoluteIndex)}
//                       >
//                         {tab.title}
//                       </button>
//                     );
//                   })}
//               </div>
//               <button
//                 onClick={() => {
//                   if (visibleTabStart + 3 < tabs.length) {
//                     setVisibleTabStart(visibleTabStart + 1);
//                     setActiveTab(visibleTabStart + 1);
//                   }
//                 }}
//                 disabled={visibleTabStart + 3 >= tabs.length}
//                 className="px-2 disabled:opacity-30"
//               >
//                 Next
//               </button>
//             </div>
//             {/* Animated Content Section */}
//             <div className="w-full pt-[30px] xl:pt-0">
//               <motion.div
//                 key={activeTab}
//                 initial={{ x: 500, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.6, ease: [0.7, 0, 0.4, 1] }}
//                 className="w-full mr-10 contentArea"
//               >
//                 <div className="flex flex-col xl:pt-10 gap-7 xl-1280:h-[350px] xl-1366:h-[300px] xl-768:w-full w-[90%] contentArea xl-1024:h-[300px] h-[450px] xl-768:h-auto xl-768:gap-10 xl-1440:h-[330px] 2xl:h-[390px]">
//                   <h1 className="tabHeading text-4xl md:text-[40px] md:leading-[66px] lg:text-[60px] fpt-500 text-white font-medium border-b-[8px] border-[#F7E327]">
//                     {tabs[activeTab].heading}
//                   </h1>
//                   <p className="tabContent text-xl gradinetText xl-1024:text-lg">
//                     {tabs[activeTab].content.split("\n").map((line, indx) => (
//                       <React.Fragment key={indx}>
//                         {line}
//                         <br />
//                         <br />
//                       </React.Fragment>
//                     ))}
//                   </p>
//                 </div>
//               </motion.div>
//             </div>
//             {/* Navigation Buttons for Image Slider (unchanged) */}
//             <div className="flex items-center xl-1366:pt-20 pt-[35px] xl:w-[60%] xl-1280:w-[80%] xl-1024:w-[90%] xl-1440:w-[90%] md:w-[100%] w-[100%] justify-between">
//               <Link
//                 href="/capabilities"
//                 className="flex group hover:translate-x-[5px] transition-transform duration-[400ms] items-center justify-center gap-3"
//               >
//                 <img
//                   src="/buttonarrows/redarico.svg"
//                   width={0}
//                   height={0}
//                   className="h-10 w-10 rotate-45 group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-300 cursor-pointer"
//                   alt="Red Arrow Icon"
//                 />
//                 <p className="text-[#ffffff] fsans-600">Explore More</p>
//               </Link>
//               <div className="flex gap-2 items-center">
//                 <button
//                   className="flex items-center justify-center disabled:brightness-75 hover:brightness-200"
//                   onClick={() => {
//                     setActiveTab((prev) => Math.max(prev - 1, 0));
//                     handleNext();
//                   }}
//                   disabled={activeTab === 0}
//                 >
//                   <img
//                     className="w-[40px] h-[40px]"
//                     src="/landingr.svg"
//                     alt=""
//                   />
//                 </button>
//                 {/* <div className="text-base text-[#6C8DAB]">
//                   {activeTab + 1} / {tabs.length}
//                 </div> */}
//                 <button
//                   className="flex items-center justify-center disabled:brightness-75 hover:brightness-200"
//                   onClick={() => {
//                     setActiveTab((prev) => Math.min(prev + 1, tabs.length - 1));
//                     handlePrev();
//                   }}
//                   disabled={activeTab === tabs.length - 1}
//                 >
//                   <img
//                     className="w-[40px] h-[40px]"
//                     src="/landingl.svg"
//                     alt=""
//                   />
//                 </button>
//               </div>
//             </div>
//           </div>
//           {/* Right Container with Swipers */}
//           <div className="rightCon flex-1 lg:max-w-[50%] flex flex-col overflow-hidden">
//             {/* Top Image Swiper */}
//             <div className="flex-1">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={`top-${activeTab}`}
//                   initial={{ y: -100, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   exit={{ y: 100, opacity: 0 }}
//                   transition={{ duration: 1, ease: [0.7, 0, 0.3, 1] }}
//                   className="h-full w-full"
//                 >
//                   <Swiper
//                     modules={[EffectFade, Pagination, Navigation]}
//                     pagination={{ clickable: true }}
//                     navigation
//                     className="h-full w-full topSlider"
//                   >
//                     {tabs[activeTab].images.top.map((img) => (
//                       <SwiperSlide key={img}>
//                         <img
//                           src={img}
//                           alt=""
//                           className="min-h-full min-w-full object-cover"
//                         />
//                       </SwiperSlide>
//                     ))}
//                   </Swiper>
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//             {/* Bottom Images Container */}
//             <div className="flex flex-row flex-1">
//               {/* Bottom Left Image Swiper */}
//               <div className="w-[50%] h-full">
//                 <AnimatePresence mode="wait">
//                   <motion.div
//                     key={`bottom1-${activeTab}`}
//                     initial={{ x: -100, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     exit={{ x: -100, opacity: 0 }}
//                     transition={{
//                       duration: 1,
//                       ease: [0.7, 0, 0.3, 1],
//                       delay: 0.1,
//                     }}
//                     className="h-full w-full"
//                   >
//                     <Swiper
//                       modules={[Pagination, Navigation]}
//                       pagination={{ clickable: true }}
//                       navigation
//                       className="h-full w-full bottomLeft"
//                     >
//                       {tabs[activeTab].images.bottom1.map((img) => (
//                         <SwiperSlide key={img}>
//                           <img
//                             src={img}
//                             className="w-full h-full object-cover"
//                             alt=""
//                           />
//                         </SwiperSlide>
//                       ))}
//                     </Swiper>
//                   </motion.div>
//                 </AnimatePresence>
//               </div>
//               {/* Bottom Right Image Swiper */}
//               <div className="w-[50%] h-full">
//                 <AnimatePresence mode="wait">
//                   <motion.div
//                     key={`bottom2-${activeTab}`}
//                     initial={{ x: 100, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     exit={{ x: 100, opacity: 0 }}
//                     transition={{
//                       duration: 1,
//                       ease: [0.7, 0, 0.3, 1],
//                       delay: 0.1,
//                     }}
//                     className="h-full w-full"
//                   >
//                     <Swiper
//                       modules={[Pagination, Navigation]}
//                       pagination={{ clickable: true }}
//                       navigation
//                       className="h-full w-full bottomright"
//                     >
//                       {tabs[activeTab].images.bottom2.map((img) => (
//                         <SwiperSlide key={img}>
//                           <img
//                             src={img}
//                             className="w-full h-full object-cover"
//                             alt=""
//                           />
//                         </SwiperSlide>
//                       ))}
//                     </Swiper>
//                   </motion.div>
//                 </AnimatePresence>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CapabilitiesF;

const CapabilitiesF = () => {
  const tabs = [
    {
      title: "Land Acquisition",
      heading: (
        <>
          Land <br /> Acquisition
        </>
      ),
      content:
        "We find the perfect locations for your business success. Our industrial and logistics parks offer excellent connectivity and room for logistics and operations to thrive. Our meticulous experts carefully select sites with the best access to transportation and growing markets. When you move in, you'll have everything you need to operate efficiently today and expand tomorrow.",
      images: {
        top: ["/OurCapabilities/land_top1.png"],
        bottom1: ["/OurCapabilities/land_bottom1_1.png"],
        bottom2: ["/OurCapabilities/land_bottom2_1.png"],
      },
    },
    {
      title: "Capital Deployment",
      heading: (
        <>
          {" "}
          Capital <br /> Deployment{" "}
        </>
      ),
      content:
        "Our smart capital deployment approach and strong partnerships help us build start-of-the-art facilities suitable for a whole range of industries. We know how to use capital wisely to allocate resources across people, technology, and the environment to deliver infrastructure that fits exactly what your business needs.",
      images: {
        top: ["/OurCapabilities/Cap_top1.png"],
        bottom1: ["/OurCapabilities/capBottom1_1.png"],
        bottom2: ["/OurCapabilities/capBottom2_1.png"],
      },
    },
    {
      title: "Project Development",
      heading: <>Project Development</>,
      content:
        "From start to finish, our experienced professionals handle everything—planning, construction, and completion. You get high-quality custom industrial and warehousing facilities, delivered when you need them.",
      images: {
        top: ["/OurCapabilities/DevTop1.png"],
        bottom1: ["/OurCapabilities/DevBottom1.png"],
        bottom2: ["/OurCapabilities/DevBottom2.png"],
      },
    },
    {
      title: "Leasing ",
      heading: <>Leasing</>,
      content:
        "We offer flexible leases that work for you. Choose custom-built spaces, move-in ready spaces or whichever option fits your business for a smooth start.",
      images: {
        top: ["/OurCapabilities/leasTop.png"],
        bottom1: ["/OurCapabilities/leasBottom1.png"],
        bottom2: ["/OurCapabilities/leasBottom2.png"],
      },
    },
    {
      title: "Property Management",
      heading: (
        <>
          {" "}
          Property <br /> Management{" "}
        </>
      ),
      content:
        "Our property management team keeps everything running smoothly. We handle all maintenance so that you can focus completely on your core business.\nWe take care of your facility needs day in and day out. No hassles and no worries—just well-maintained properties that support your operations.",
      images: {
        top: ["/OurCapabilities/propertyTop.png"],
        bottom1: ["/OurCapabilities/propertyBottom1.png"],
        bottom2: ["/OurCapabilities/propertyBottom2.png"],
      },
    },
  ];

  const [activeTab, setActiveTab] = useState(0); // Track active tab index
  // State for the starting index of the visible tab buttons (only 3 visible at a time)
  const [visibleTabStart, setVisibleTabStart] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  // Handle image slider navigation (unchanged)
  const handleNext = () => {
    if (swiperRef.current && activeIndex < tabs.length - 1) {
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
    <div className="bg-[#092241]">
      <div className="bg-[#092241] md:h-auto h-fit">
        <div className="ml-[max(5%,calc((100vw-1250px)/2))] mr-[max(5%,calc((100vw-1250px)/2))] sm:mr-0 lg:gap-0 gap-[50px] flex lg:flex-row flex-col overflow-hidden">
          {/* Left Container */}
          <div className="leftCon flex-1 py-10">
            <div className="pt-[40px]">
              <LineHead
                heading="WHAT WE DO. TO DELIVER VALUE."
                bclr="#d7d7d7"
                bopacity="34%"
                clr="text-white"
              />
            </div>
            {/* Tabs Section: Show only 3 tabs */}
            <div className="mt-6">
              <div className="flex flex-nowrap overflow-hidden gap-4">
                {tabs
                  .slice(visibleTabStart, visibleTabStart + 3)
                  .map((tab, idx) => {
                    const absoluteIndex = visibleTabStart + idx;
                    return (
                      <button
                        key={tab.title}
                        className={`px-3 whitespace-nowrap h-[46px] border border-[#D7D7D7] border-opacity-35 text-white rounded-[10px] transition-all duration-300 ${
                          activeTab === absoluteIndex
                            ? "bg-[#E30613] text-black"
                            : ""
                        }`}
                        onClick={() => setActiveTab(absoluteIndex)}
                      >
                        {tab.title}
                      </button>
                    );
                  })}
              </div>
            </div>
            {/* Animated Content Section */}
            <div className="w-full pt-[30px] xl:pt-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ duration: 0.8, ease: [0.7, 0, 0.4, 1] }}
                  className="w-full mr-10 contentArea"
                >
                  <div className="flex flex-col xl:pt-10 gap-7 xl-1280:h-[350px] xl-1366:h-[300px] xl-768:w-full w-[90%] contentArea xl-1024:h-[330px] h-[450px] xl-768:h-auto xl-768:gap-10 xl-1440:h-[360px] 2xl:h-[420px] overflow-hidden">
                    <h1 className="tabHeading text-4xl md:text-[40px] md:leading-[66px] lg:text-[60px] fpt-500 text-white font-medium border-b-[8px] border-[#F7E327]">
                      {tabs[activeTab].heading}
                    </h1>
                    <p className="tabContent text-xl gradinetText xl-1024:text-lg">
                      {tabs[activeTab].content.split("\n").map((line, indx) => (
                        <React.Fragment key={indx}>
                          {line}
                          <br />
                          <br />
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            {/* Navigation Buttons for Image Slider and Tab Navigation */}
            <div className="flex items-center xl-1366:pt-20 pt-[35px] xl:w-[60%] xl-1280:w-[80%] xl-1024:w-[90%] xl-1440:w-[90%] md:w-[100%] w-[100%] justify-between">
              <Link
                href="/capabilities"
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
              <div className="flex gap-2 items-center">
                {/* Left Navigation Button for Tabs */}
                <button
                  className="flex items-center justify-center disabled:brightness-75 hover:brightness-200"
                  onClick={() => {
                    if (activeTab > 0) {
                      const newIndex = activeTab - 1;
                      setActiveTab(newIndex);
                      if (newIndex < visibleTabStart) {
                        setVisibleTabStart(visibleTabStart - 1);
                      }
                    }
                  }}
                  disabled={activeTab === 0}
                >
                  <img
                    className="w-[40px] h-[40px]"
                    src="/landingr.svg"
                    alt="Prev"
                  />
                </button>
                {/* Right Navigation Button for Tabs */}
                <button
                  className="flex items-center justify-center disabled:brightness-75 hover:brightness-200"
                  onClick={() => {
                    if (activeTab < tabs.length - 1) {
                      const newIndex = activeTab + 1;
                      setActiveTab(newIndex);
                      if (newIndex > visibleTabStart + 2) {
                        setVisibleTabStart(visibleTabStart + 1);
                      }
                    }
                  }}
                  disabled={activeTab === tabs.length - 1}
                >
                  <img
                    className="w-[40px] h-[40px]"
                    src="/landingl.svg"
                    alt="Next"
                  />
                </button>
              </div>
            </div>
          </div>
          {/* Right Container with Swipers */}
          <div className="rightCon flex-1 lg:max-w-[50%] flex flex-col overflow-hidden">
            {/* Top Image Swiper */}
            <div className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`top-${activeTab}`}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 100, opacity: 0 }}
                  transition={{ duration: 1, ease: [0.7, 0, 0.3, 1] }}
                  className="h-full w-full"
                >
                  <Swiper
                    modules={[EffectFade, Pagination, Navigation]}
                    pagination={{ clickable: true }}
                    navigation
                    className="h-full w-full topSlider"
                  >
                    {tabs[activeTab].images.top.map((img) => (
                      <SwiperSlide key={img}>
                        <img
                          src={img}
                          alt=""
                          className="min-h-full min-w-full object-cover"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </motion.div>
              </AnimatePresence>
            </div>
            {/* Bottom Images Container */}
            <div className="flex flex-row flex-1">
              {/* Bottom Left Image Swiper */}
              <div className="w-[50%] h-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`bottom1-${activeTab}`}
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -100, opacity: 0 }}
                    transition={{
                      duration: 1,
                      ease: [0.7, 0, 0.3, 1],
                      delay: 0.1,
                    }}
                    className="h-full w-full"
                  >
                    <Swiper
                      modules={[Pagination, Navigation]}
                      pagination={{ clickable: true }}
                      navigation
                      className="h-full w-full bottomLeft"
                    >
                      {tabs[activeTab].images.bottom1.map((img) => (
                        <SwiperSlide key={img}>
                          <img
                            src={img}
                            className="w-full h-full object-cover"
                            alt=""
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </motion.div>
                </AnimatePresence>
              </div>
              {/* Bottom Right Image Swiper */}
              <div className="w-[50%] h-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`bottom2-${activeTab}`}
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 100, opacity: 0 }}
                    transition={{
                      duration: 1,
                      ease: [0.7, 0, 0.3, 1],
                      delay: 0.1,
                    }}
                    className="h-full w-full"
                  >
                    <Swiper
                      modules={[Pagination, Navigation]}
                      pagination={{ clickable: true }}
                      navigation
                      className="h-full w-full bottomright"
                    >
                      {tabs[activeTab].images.bottom2.map((img) => (
                        <SwiperSlide key={img}>
                          <img
                            src={img}
                            className="w-full h-full object-cover"
                            alt=""
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapabilitiesF;
