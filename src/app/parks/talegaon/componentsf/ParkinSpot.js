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
              KSH Talegaon
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
            KSH Talegaon was the first industrial park developed by KSH INFRA.
            The exceptional warehousing and manufacturing facilities at this
            park caught the eye of global infrastructure investors. KSH Talegaon
            created the foundation for our Chakan Parks I, II, and III, which
            now represent the gold standard in green industrial development—a
            legacy we take great pride in.
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
                  src="/ParkPage/talegaon/talspot.png"
                  className="object-cover w-full md:inline-block hidden"
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
            </div>

            {/* Mobile Image */}
            <div>
              <img
                src="/ParkPage/talegaon/talspot.png"
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
