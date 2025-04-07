"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import { AnimatePresence, motion } from "framer-motion"; // Import motion
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import LineHead from "../../Components/Heading/LineHead";
const AboutCap = () => {
  const tabs = [
    {
      title: "KSH DISTRIPARKS",
      heading: "ROBUST SOLUTIONS. ENHANCED SUPPLY CHAINS.",
      content:
        "The KSH Container Depot spans 17 acres in Talegaon, a vital convergence point of NH4 and the Mumbai-Pune Expressway.",
      images: {
        top: ["/AboutPage/aboutSlide/dparks.png"],
      },
      links: "www.kshdistriparks.com",
    },
    {
      title: "KSH INTEGRATED LOGISTICS",
      heading: "SETTING UP MULTI-CLIENT WAREHOUSING SOLUTIONS PAN-INDIA",
      content:
        "KSH has over half a million square feet of warehousing across key Indian markets. The facilities are plug-and-play, effectively adaptive to all our clients' needs.",
      images: {
        top: ["/AboutPage/aboutSlide/il.png"],
      },
      links: "www.kshlogistics.com",
    },
    {
      title: "KSH INTERNATIONAL",
      heading: "A LEADING MAKER OF INSULATED CONDUCTORS ACROSS THE GLOBE.",
      content:
        "KSH International is a leading manufacturer of bare and insulated Rectangular & round winding wires and transposed cables in India.",
      images: {
        // top: ["./AboutPage/aboutSlide/KshINTL.png"],
        top: ["/AboutPage/aboutSlide/intl.png"],
      },
      links: "www.kshinternational.com",
    },
  ];
  const [activeTab, setActiveTab] = useState(0); // Track active tab index

  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  // Handle navigation
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

  // Fade in
  const fadeInX = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.4, ease: [0.7, 0, 0.4, 1] },
    },
    exit: {
      opacity: 0,
      x: 50,
      transition: { duration: 1.4, ease: [0.7, 0, 0.4, 1] },
    },
  };
  return (
    <div className="bg-[#092241] ">
      <div className="bg-[#092241] md:h-[680px] flex items-end justify-end ">
        {/* <div className="border-white w-full  maxTab xl-1024:ml-[44px] xl-1280:ml-[59px] xl-1366:ml-[60px] xl-1440:ml-[90px] xl-1536:ml-[137px] xl-1600:ml-[175px] xl-1920:ml-[17.5%]  lg:pb-0 pb-[100px] lg:gap-0 gap-[50px] flex lg:flex-row flex-col overflow-hidden"> */}
        <div className="border-white w-full md:mr-0  ml-[max(5%,calc((100vw-1250px)/2))] mr-[max(5%,calc((100vw-1250px)/2))] lg:pb-0 pb-[100px] lg:gap-0 gap-[50px] flex lg:flex-row flex-col overflow-hidden relative z-[1]">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 1.4,
              ease: [0.7, 0, 0.4, 1],
              delay: 0.2,
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="leftCon flex-1  md:max-h-[600px] "
          >
            <div className="pt-[66px]">
              <LineHead
                heading="Our Group Companies"
                bclr="#d7d7d7"
                bopacity="34%"
                clr="text-white"
              />
            </div>
            {/* Tabs */}
            <div className="tabs flex flex-nowrap overflow-x-scroll overflow-y-hidden gap-4  xl-768:w-[95%] xl-1024:w-[90%] xl-1280:w-[90%] xl-1440:w-[90%]">
              {tabs.map((tab, index) => (
                <button
                  key={tab.title}
                  className={`px-3 whitespace-nowrap h-[46px] border border-[#D7D7D7] border-opacity-35 text-white rounded-[10px]
                                ${
                                  activeTab === index
                                    ? "bg-[#E30613] text-black"
                                    : ""
                                }`}
                  onClick={() => setActiveTab(index)} // Update active tab
                >
                  {tab.title}
                </button>
              ))}
            </div>
            {/* Animated Content Section */}
            <div className="w-full md:h-[250px] md:min-h-[250px] min-h-[300px] h-[300px]">
              <motion.div
                key={activeTab} // Re-render on tab change
                initial={{ x: 500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                // exit={{ x: -1000, opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.7, 0, 0.4, 1] }}
                className="w-[90%]  xl:w-[516px] xl-1024:w-[400px] contentArea"
              >
                <div className="flex flex-col  md:h-[300px]">
                  <h1 className="text-[20px] xl-1024:text-[25px] pt-7 md:pt-[57px] pb-4 text-white fpt-500">
                    {tabs[activeTab].heading}
                  </h1>
                  <p className="tabContent text-lg text-[#C1C1C1]  ">
                    {tabs[activeTab].content}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col gap-7 pt-12 xl-1024:pt-20 xl:w-[60%] xl-1280:w-[80%] xl-1024:w-[90%] xl-1440:w-[90%] md:w-[70%] w-[100%] justify-between">
              <div className="flex items-center gap-2">
                <h1 className="text-[14px] fpt-700 text-[#fff]">
                  FIND OUT MORE :
                </h1>{" "}
                <span className="text-[#F7E327] text-base">
                  <a
                    href={tabs[activeTab].links}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {tabs[activeTab].links}
                  </a>
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <button
                  className="rounded-full border flex items-center justify-center disabled:opacity-50"
                  onClick={() => {
                    setActiveTab((prev) => Math.max(prev - 1, 0));
                    handleNext();
                  }}
                  disabled={activeTab === 0}
                >
                  <img className="w-10 h-10" src="/landingr.svg" alt="" />
                </button>
                <div className="text-base text-[#6C8DAB]">
                  {activeTab + 1} / {tabs.length}
                </div>

                <button
                  className="rounded-full border border-[#D7D7D7] border-opacity-50 w-10 h-10 flex items-center justify-center disabled:opacity-50"
                  onClick={() => {
                    setActiveTab((prev) => Math.min(prev + 1, tabs.length - 1));
                    handlePrev();
                  }}
                  disabled={activeTab === tabs.length - 1}
                >
                  <img className="w-10 h-10" src="/landingl.svg" alt="" />
                </button>
              </div>
            </div>
          </motion.div>
          {/* Right Container with Swipers */}
          <div className="rightCon relative z-[100000000] flex-1 lg:max-w-[638px]">
            {/* Top Image Swiper */}
            <div className="relative overflow-hidden">
              <Swiper
                modules={[EffectFade, Pagination, Navigation]}
                pagination={{ clickable: true }}
                navigation
                className="h-full w-full topSlider"
                style={{ zIndex: 10 }}
              >
                {tabs[activeTab].images.top.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={Date.now()}
                        initial={{ opacity: 0 }}
                        className="relative z-[100000000]"
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
                      >
                        <img
                          src={img}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </SwiperSlide>
                ))}
              </Swiper>
              <motion.div
                className="absolute top-0 left-0 bg-[#092241] w-full h-full z-20"
                initial={{ x: 0 }}
                whileInView={{ x: "100%" }}
                transition={{
                  duration: 1,
                  ease: [0.7, 0, 0.4, 1],
                }}
                viewport={{ amount: 0.5, once: true }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutCap;
