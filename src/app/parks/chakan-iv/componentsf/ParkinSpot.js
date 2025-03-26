"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
const ParkinSpot = ({}) => {
  return (
    <div className="bg-[url(/fistfold.png)] bg-cover bg-center z-0 relative">
      <div className="ml-[max(5%,calc((100vw-1250px)/2))] lg:mr-0 mr-[max(5%,calc((100vw-1250px)/2))] pt-[150px] flex items-center lg:justify-center justify-evenly lg:h-screen xl:gap-[100px] md:gap-[50px] gap-[20px] lg:flex-row flex-col-reverse">
        {/* Left Side Content */}
        <div className="flex flex-col flex-1 max-w-full gap-5 xl:gap-10 justify-center relative">
          <div>
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.7, 0, 0.4, 1] }}
              viewport={{ once: true, amount: 0 }}
              className="fpt-600 xl:text-[56px] lg:text-[40px] md:text-[32px] text-[20px] text-white leading-[150%] md:leading-[105%] pb-5 2xl:text-[70px]"
            >
              KSH Chakan IV
            </motion.h1>
            <motion.div
              initial={{ x: -150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.7, 0, 0.4, 1] }}
              viewport={{ once: true, amount: 0 }}
              className="bg-[#F7E327] h-[10px] w-full"
            ></motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
            viewport={{ once: true, amount: 0 }}
            className="fsans-500 gradinetText text-[14px] lg:text-[14px] xl:text-[16px] leading-[26px]"
            // style={{
            //   backgroundImage: "linear-gradient(to bottom, #ffffff, #163E71)",
            //   WebkitBackgroundClip: "text",
            //   WebkitTextFillColor: "transparent",
            //   backgroundClip: "text",
            //   color: "transparent",
            // }}
          >
            Chakan Park IV in Shinde, Pune exemplifies high-quality sustainable
            warehousing and industrial infrastructure, setting new standards for
            environmental responsibility. The industrial park has earned IGBC
            pre-certified Platinum status, showcasing our deep commitment to
            green industrial development. Its thoughtful design and premium
            amenities create a workspace where your team can thrive. <br />
            <br />
            This fully customizable, move-in ready facility ensures excellent
            productivity, efficiency, and safety for your workforce. We've
            considered every detail so you can focus on what matters
            most—running your business successfully.
          </motion.p>
          <div>
            <Link href="/contact/#contform">
              <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
                viewport={{ once: true, amount: 0 }}
                className="bg-[#E30613] max-w-fit h-[50px] flex items-center text-base fsans-600 text-white px-[21px] py-[14px] gap-[10px] rounded-3xl"
              >
                <p>Enquire Now</p>
                <img
                  className="h-[24px] w-[24px]"
                  src="/downarrow.svg"
                  alt="Arrow"
                />
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="xl:flex-1 flex flex-col justify-center items-end">
          <div className="flex items-end justify-center flex-col lg:w-[688.5px] 2xl:w-[810px] lg:h-[476px] 2xl:h-[560px] max-w-full relative">
            {/* Desktop Image */}
            <div className="relative">
              <div className="relative h-fit overflow-hidden flex lg:justify-center justify-end w-full">
                {/*  */}
                <img
                  src="/ParkPage/container.png"
                  className="object-cover lg:w-full w-[95%] md:inline-block hidden"
                  alt="some"
                />

                <motion.div
                  className="absolute top-0 left-0 w-full h-full z-20 bg-[#092241]"
                  initial={{ x: 0 }}
                  whileInView={{ x: "100%" }}
                  transition={{ duration: 1.2, ease: [0.7, 0, 0.4, 1] }}
                  viewport={{ once: true, amount: 0 }}
                />
              </div>
              <motion.img
                src="/ParkPage/container2.png"
                className="absolute top-[20%] left-0 lg:left-[-5%] z-[10] w-[40vw] md:w-[180px]"
                alt="floating"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 1.2,
                  ease: [0.7, 0, 0.4, 1],
                  delay: 1,
                }}
                viewport={{ once: true, amount: 0 }}
              />
              <motion.img
                src="/ParkPage/container1.png"
                className="absolute top-auto left-[150px] bottom-[-5%] z-[10] w-[50vw] md:w-[274px]"
                alt="floating"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 1.2,
                  ease: [0.7, 0, 0.4, 1],
                  delay: 1,
                }}
                viewport={{ once: true, amount: 0 }}
              />
              <motion.img
                src="/ParkPage/container3.png"
                className="absolute top-auto left-auto right-[3%] bottom-[-5%] z-[10] w-[45vw] md:w-[228px]"
                alt="floating"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 1.2,
                  ease: [0.7, 0, 0.4, 1],
                  delay: 1,
                }}
                viewport={{ once: true, amount: 0 }}
              />
            </div>

            {/* Mobile Image */}
            <div>
              <img
                src="/ParkPage/container.png"
                className="object-cover md:hidden inline-block"
                alt="some"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkinSpot;
