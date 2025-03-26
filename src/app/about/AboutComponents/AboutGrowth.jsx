// import React from "react";

// const AboutGrowth = () => {
//   return (
//     <div className="Main fix12 py-16 lg:py-[100px]">
//       <div className="lg:flex items-center justify-between xl-1280:gap-[5%] xl-1024:gap-[30px]">
//         <div className="xl-1024:w-full xl:w-[521px] xl-1280:w-[50%] flex ">
//           <h1 className="text-[#092241] pb-2 text-3xl lg:text-6xl fpt-500 border-[#F7E327] border-b-[6px]">
//             Impact. Growth. Opportunity.
//           </h1>
//         </div>
//         <div className="xl:w-[612px] xl-1280:w-[50%] lg:h-[330px] md:flex  border-2 mt-5 lg:mt-0">
//           <div className="xl-1024:min-w-[190px] md:min-w-[292px]">
//             <img
//               src="./AboutPage/AboutGrowth/AboutGrowth-Sus.png"
//               alt=""
//               className="xl-1024:w-[190px] md:w-[292px] w-full  h-full object-cover"
//             />
//           </div>
//           <div className="max-w-fit py-[30px] px-[20px] flex flex-col justify-between">
//             <div className="">
//               <h1 className="text-2xl fsan-600 pb-4">Sustainability</h1>
//               <p className="text-[#565656] fsan-600 text-[20px] md:pb-0 pb-6">
//                 Sustainability at its core structured governance mechanism.
//               </p>
//             </div>

//             <div className="flex items-center gap-2 py-[30px]">
//               <div className="w-[30px] h-[30px] bg-[#EEF0F3] rounded-full flex items-center justify-center">
//                 <img src="./AboutPage/AboutGrowth/learnMore.svg" alt="" />
//               </div>
//               <p>Learn More</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="lg:flex items-center justify-between lg:pt-[65px] pt-5 xl-1280:gap-[5%] xl-1024:gap-[30px]">
//         <div className="xl:w-[612px] xl-1280:w-[50%] lg:h-[330px] md:flex  border-2  lg:mt-0">
//           <div className="xl-1024:min-w-[190px] md:min-w-[292px]">
//             <img
//               src="./AboutPage/AboutGrowth/AboutGrowth-Inves.png"
//               alt=""
//               className="xl-1024:w-[190px] md:w-[292px] w-full  h-full object-cover"
//             />
//           </div>
//           <div className="max-w-fit py-[30px] px-[20px] flex flex-col justify-between">
//             <div className="">
//               <h1 className="text-2xl fsan-600 pb-4">Investor Relations</h1>
//               <p className="text-[#565656] fsan-600 text-[20px]">
//                 Investor Relations Having delivered over 4 million square feet
//                 of high-quality.
//               </p>
//             </div>

//             <div className="flex items-center gap-2 py-[30px]">
//               <div className="w-[30px] h-[30px] bg-[#EEF0F3] rounded-full flex items-center justify-center">
//                 <img src="./AboutPage/AboutGrowth/learnMore.svg" alt="" />
//               </div>
//               <p>Learn More</p>
//             </div>
//           </div>
//         </div>
//         <div className="xl:w-[612px] xl-1280:w-[50%] lg:h-[330px] md:flex  border-2 mt-5  lg:mt-0">
//           <div className="xl-1024:min-w-[190px] md:min-w-[292px]">
//             <img
//               src="./AboutPage/AboutGrowth/AboutGrowth-Careers.png"
//               alt=""
//               className="xl-1024:w-[190px] md:w-[292px] w-full  h-full object-cover"
//             />
//           </div>
//           <div className="max-w-fit py-[30px] px-[20px] flex flex-col justify-between">
//             <div className="">
//               <h1 className="text-2xl fsan-600 pb-4">Careers @KSH</h1>
//               <p className="text-[#565656] fsan-600 text-[20px]">
//                 Grow with a team that values innovation, collaboration, and
//                 professional development.
//               </p>
//             </div>

//             <div className="flex items-center gap-2 py-[30px]">
//               <div className="w-[30px] h-[30px] bg-[#EEF0F3] rounded-full flex items-center justify-center">
//                 <img src="./AboutPage/AboutGrowth/learnMore.svg" alt="" />
//               </div>
//               <p>Learn More</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutGrowth;

"use client";
import { motion } from "framer-motion";
import Link from "next/link";
const AboutGrowth = () => {
  return (
    <div className="Main fix12 py-16 lg:py-[100px]">
      <div className="lg:flex items-center justify-between xl-1280:gap-[5%] xl-1024:gap-[30px]">
        <div className="xl-1024:flex-1 xl:w-[521px] xl-1280:w-[50%] flex ">
          <motion.h1
            initial={{ width: 0 }}
            whileInView={{ width: "fit-content" }}
            transition={{ duration: 1.7, ease: [0.7, 0, 0.4, 1] }}
            viewport={{ amount: 0.1, once: true }}
            className="text-[#092241] select-none pb-2 whitespace-nowrap overflow-hidden text-3xl xl-1024:text-5xl min-1280:text-6xl fpt-500 border-[#F7E327] border-b-[6px]"
          >
            Trust. Growth.
            <br /> Opportunity. &nbsp;&nbsp;&nbsp;&nbsp;
          </motion.h1>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1,
            ease: [0.7, 0, 0.4, 1],
          }}
          viewport={{ once: true, amount: 0.5 }}
          className="xl-1024:flex-1 xl:w-[612px] xl-1280:w-[50%] lg:h-[330px] md:flex border-2 mt-5 lg:mt-0"
        >
          <div className="xl-1024:min-w-[190px] md:min-w-[292px]">
            <img
              src="./AboutPage/AboutGrowth/AboutGrowth-Sus.png"
              alt=""
              className="xl-1024:w-[190px] md:w-[292px] w-full  h-full object-cover"
            />
          </div>
          <div className="max-w-fit py-[30px] px-[20px] flex flex-col justify-between gap-7">
            <div className="">
              <h1 className="text-2xl fsan-600 pb-4">Sustainability</h1>
              <p className="text-[#565656] fsan-600 text-[20px] md:pb-0 pb-6">
                A core value, a guiding principle.
              </p>
            </div>

            <Link
              href="/sustainability"
              className="flex items-center gap-2 py-[30px]"
            >
              <div className="w-[30px] h-[30px] bg-[#EEF0F3] rounded-full flex items-center justify-center">
                <img src="./AboutPage/AboutGrowth/learnMore.svg" alt="" />
              </div>
              <p>Learn More</p>
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="lg:flex items-center justify-between lg:pt-[65px] pt-5 xl-1280:gap-[5%] xl-1024:gap-[30px]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1,
            ease: [0.7, 0, 0.4, 1],
            delay: 0.2,
          }}
          viewport={{ once: true, amount: 0.5 }}
          className="xl:w-[612px] xl-1280:w-[50%] lg:h-[330px] md:flex  border-2  lg:mt-0"
        >
          <div className="xl-1024:min-w-[190px] md:min-w-[292px]">
            <img
              src="./AboutPage/AboutGrowth/AboutGrowth-Inves.png"
              alt=""
              className="xl-1024:w-[190px] md:w-[292px] w-full  h-full object-cover"
            />
          </div>
          <div className="max-w-fit py-[30px] px-[20px] flex flex-col justify-between">
            <div className="">
              <h1 className="text-2xl fsan-600 pb-4">Investor Relations</h1>
              <p className="text-[#565656] fsan-600 text-[20px]">
                Building strong investor partnerships through transparency,
                communication, and strategic business opportunities.
              </p>
            </div>

            <Link
              href="/investor"
              className="flex items-center gap-2 py-[30px]"
            >
              <div className="w-[30px] h-[30px] bg-[#EEF0F3] rounded-full flex items-center justify-center">
                <img src="./AboutPage/AboutGrowth/learnMore.svg" alt="" />
              </div>
              <p>Learn More</p>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1,
            ease: [0.7, 0, 0.4, 1],
            delay: 0.4,
          }}
          viewport={{ once: true, amount: 0.5 }}
          className="xl:w-[612px] xl-1280:w-[50%] lg:h-[330px] md:flex  border-2 mt-5  lg:mt-0"
        >
          <div className="xl-1024:min-w-[190px] md:min-w-[292px]">
            <img
              src="./AboutPage/AboutGrowth/AboutGrowth-Careers.png"
              alt=""
              className="xl-1024:w-[190px] md:w-[292px] w-full  h-full object-cover"
            />
          </div>
          <div className="max-w-fit py-[30px] px-[20px] flex flex-col justify-between">
            <div className="">
              <h1 className="text-2xl fsan-600 pb-4">Careers @KSH</h1>
              <p className="text-[#565656] fsan-600 text-[20px]">
                Grow with a team that values innovation, collaboration, and
                professional development.
              </p>
            </div>

            <Link href="/career" className="flex items-center gap-2 py-[30px]">
              <div className="w-[30px] h-[30px] bg-[#EEF0F3] rounded-full flex items-center justify-center">
                <img src="./AboutPage/AboutGrowth/learnMore.svg" alt="" />
              </div>
              <p>Learn More</p>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutGrowth;
