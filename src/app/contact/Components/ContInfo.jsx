"use client";
import { motion } from "framer-motion";
import Link from "next/link";
const ContInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
      viewport={{ amount: 0.3, once: true }}
      className="flex flex-col gap-[60px]"
    >
      <div className="flex flex-col gap-[30px]">
        {/* email */}
        <div className="flex gap-[10px] items-center justify-center w-fit">
          <div>
            <img src="/contact/icons/contem.svg" alt="Contact Email" />
          </div>
          <div>
            <Link
              className="fsans-400 text-[18px] leading-[111%] text-[#5E5E5E]"
              href="mailto:sales@kshinfra.com"
            >
              sales@kshinfra.com
            </Link>
          </div>
        </div>
        {/* Phone */}
        <div className="flex gap-[10px] items-center justify-center w-fit">
          <div>
            <img src="/contact/icons/contph.svg" alt="Contact Email" />
          </div>
          <div>
            <Link
              className="fsans-400 text-[18px] leading-[111%] text-[#5E5E5E]"
              href="tel:1800-212-2030"
            >
              1800-212-2030 (Toll-Free)
            </Link>
          </div>
        </div>
        {/* Pune Address */}
        <div className="flex flex-col gap-[10px] justify-center w-fit">
          <div className="flex w-fit justify-center items-center gap-[28px]">
            <h3 className="spotlightheaddd fsans-600 text-[24px] leading-[130%]">
              Pune
            </h3>
            <p className="fsans-600 text-[18px] leading-[130%] text-[#787878]">
              (Head Office)
            </p>
          </div>
          <p className="fsans-400 text-[18px] leading-[28px] text-[#5E5E5E]">
            Gokhale Sanchit, Office No. 4, Survey No. 846, Servants of India
            Society, Near Marathwada College, Shivajinagar, Pune - 411 004,
            Maharashtra, India
          </p>
        </div>
        {/* Mumbai Address */}
        <div className="flex flex-col gap-[10px] justify-center w-fit">
          <div className="flex w-fit justify-center items-center gap-[28px]">
            <h3 className="spotlightheaddd fsans-600 text-[24px] leading-[130%]">
              Mumbai
            </h3>
            <p className="fsans-600 text-[18px] leading-[130%] text-[#787878]">
              (Head Office)
            </p>
          </div>
          <p className="fsans-400 text-[18px] leading-[28px] text-[#5E5E5E]">
            Birla Centurion 3rd Floor, Pandurang Budhkar Marg, Worli, Mumbai,
            Maharashtra 400030
          </p>
        </div>
      </div>
      {/* Socials /////////////// */}
      <div className="flex flex-col gap-[10px] justify-center w-fit">
        <h3 className="spotlightheaddd fsans-600 text-[24px] leading-[130%]">
          Follow us on
        </h3>
        <div className="flex gap-[60px]">
          <img src="/contact/icons/contins.svg" alt="" />
          <img src="/contact/icons/contyt.svg" alt="" />
          <img src="/contact/icons/contx.svg" alt="" />
        </div>
      </div>
    </motion.div>
  );
};

export default ContInfo;
