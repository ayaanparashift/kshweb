"use client";
import { motion } from "framer-motion";

const CareerSec2 = () => {
  return (
    <>
      <div className=" ">
        <div className="fix12 flex flex-col lg:flex-row justify-between gap-[20px] lg:gap-[6%] md:py-[90px] py-14">
          <div className="flex-1  xl:w-[538px] xl:min-h-[540px] ">
            <div className="w-[100%]">
              <motion.h1
                initial={{ opacity: 0, translateX: "-50px" }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
                viewport={{ amount: 0.1, once: true }}
                className="text-[#141414] text-[30px] fpt-500 leading-[48.84px] pb-3"
              >
                We Make Leaders
                <br /> GROW WITH US.
                <br /> TRANSFORM THE WORLD!
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, translateX: "-100px" }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
                viewport={{ amount: 0.1, once: true }}
                className="bg-[#F7E327] h-[5px] w-[80%]"
              ></motion.div>
            </div>{" "}
            <motion.div
              initial={{ opacity: 0, translateX: "-150px" }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
              viewport={{ amount: 0.1, once: true }}
              className="text-[#434343] text-base flex flex-col justify-between pt-9 gap-3"
            >
              <p>
                Being on the KSH INFRA team is more than just building modern
                warehousing and industrial parks. With us, you will create
                spaces built for tomorrow and respect the natural environment.
              </p>
              <p>
                {" "}
                Our team members bring enthusiasm and determination to every
                challenge. We go the extra mile to deliver real value both to
                our stakeholders and mother earth.
              </p>
              <p>
                {" "}
                When you work with us, you will learn how to create meaningful
                assets that work better today while also preparing for a
                sustainable future.
              </p>
            </motion.div>
          </div>

          <div className="flex-1 relative overflow-hidden md:flex-none lg:flex-1 xl:flex-none xl-768:h-[300px] xl-768:pt-4  xl:w-[640px] xl:min-h-[540px]  ">
            <img
              src="/Career/sec2imgcar.png"
              className="w-full h-full object-cover"
              alt=""
            />
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-white"
              initial={{ x: 0 }}
              whileInView={{ x: "-100%" }}
              transition={{ duration: 1.7, ease: [0.7, 0, 0.4, 1] }}
              viewport={{ once: true, amount: 0.3 }} // Adjust amount to control trigger point
            />
          </div>
        </div>
        {/* <AboutCounter /> */}
      </div>
    </>
  );
};

export default CareerSec2;
