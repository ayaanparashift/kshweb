import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ButtomComp = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.7, 0, 0.4, 1], delay: 0.5 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <Link
        href="/about"
        className="flex items-center justify-center hover:translate-x-[5px] transition-transform duration-[400ms] gap-3 group"
      >
        <Image
          src="/buttonarrows/redarico.svg"
          width={0}
          height={0}
          className="group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-[400ms] ease-in-out  h-10 w-10 rotate-45 hover:rotate-0 cursor-pointer"
          alt="Red Arrow Icon"
        />
        <p className="text-[#092241] fsans-600">Find out why</p>
      </Link>
      {/* 
      <button className="flex group hover:translate-x-[5px] transition-transform duration-[400ms] items-center justify-center gap-3">
        <img
          src="/buttonarrows/redarico.svg"
          width={0}
          height={0}
          className="h-10 w-10 rotate-45 group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-300 cursor-pointer"
          alt="Red Arrow Icon"
        />
        <p className="text-[#ffffff] fsans-600">Explore More</p>
      </button> */}
    </motion.div>
  );
};

export default ButtomComp;
