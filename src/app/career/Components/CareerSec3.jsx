"use client";
import { motion } from "framer-motion";

const CareerSec3 = () => {
  return (
    <div className="bg-[#eef0f3] w-full py-[45px]">
      <div className="fix12">
        <motion.h1
          initial={{ opacity: 0, translateX: "-50px" }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
          viewport={{ amount: 0.1, once: true }}
          className="text-[#141414] text-[44px] fpt-500 leading-[48.84px] pb-3 fpt-600"
        >
          Commitment to Employee Well-Being & Growth
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
          viewport={{ amount: 0.1, once: true }}
          className="text-[18px] leading-[30px] text-[#202020] opacity-[0.8]"
        >
          We invest in our people's well-rounded development. We provide clear
          career paths and personal growth programs so everyone on our team has
          the tools to succeed.
          <br />
          <br /> Our approach focuses on building real skills, developing strong
          leaders, and encouraging continuous learning. This helps our employees
          advance professionally while achieving their personal goals. We
          believe that when our people grow, our company grows too. That's why
          we make sure everyone has the support they need to reach their full
          potential.
        </motion.p>
      </div>
    </div>
  );
};

export default CareerSec3;
