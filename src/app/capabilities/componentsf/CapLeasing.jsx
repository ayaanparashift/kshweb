"use client";
import { motion } from "framer-motion";
const CapLeasing = () => {
  return (
    <>
      <div className="bg-[#fff]">
        <div className="fix12 flex flex-col gap-10 py-24 lg:flex-row-reverse">
          <div className="LeftCon flex-1 relative overflow-hidden">
            <img src="/Cap/CapLeas.png" alt="" />
            <motion.div
              initial={{ x: 0 }}
              whileInView={{ x: "100%" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
              className="absolute top-0 left-0 w-full h-full bg-[#fff]"
            />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
            className="rigCon flex-1 flex flex-col gap-10"
          >
            <h1 className="text-3xl ftp-500 text-[#092241] leading-[33px] border-b-[#828282] border-b-[1px] pb-2">
              Leasing
            </h1>

            <div className="">
              <h1 className="text-xl fsans-600 leading-[26px] text-[#1C1C1C] pb-[34px]">
                Matching Diverse Business Needs
              </h1>
              <p className="text-lg leading-[28px] fsans-400 text-[#434343]">
                Our leasing team listens carefully to what you need. We create
                flexible space solutions that fit your exact operations, from
                custom layouts to designs that can grow with your business. We
                make sure that our properties wok for diverse business
                activities. With us, your space will use every square foot
                efficiently, helping you make the most of your resources, while
                supporting all your activities.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default CapLeasing;
