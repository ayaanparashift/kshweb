"use client";
import { motion } from "framer-motion";

const ParkOverviewContent = () => {
  return (
    <div className="bg-[#FFF]">
      <div className="fix12 pt-[72px] pb-[150px]">
        <motion.h1
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
          viewport={{ amount: 0.1, once: true }}
          className="text-[#040404] text-[44px] ftp-400 border-b border-[#D7D7D7] pb-4 whitespace-nowrap overflow-hidden"
        >
          KSH INFRA Parks: New Benchmaks of Logistics Efficiency
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
          viewport={{ amount: 0.1, once: true }}
          className="pt-9 text-[#434343] text-base fsans-400"
        >
          <p>
            We're establishing new benchmarks for sustainable industrial spaces
            and logistics solutions. With major ready-to-move industrial parks
            in Chakan and Talegaon, we're strengthening the strategic industrial
            corridor as a manufacturing and logistics hub.
          </p>{" "}
          <br />
          <p className="">
            Every industrial park we build focuses on three fundamentals:
            productivity, efficiency, and ergonomics. We construct to the
            highest industrial standards with full ESG compliance.
          </p>
          <br />
          <p className="">
            Our team stands firmly committed to building a reimagined green
            industrial future. When you choose our facilities, you're getting
            spaces designed for both business success and environmental
            responsibility.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ParkOverviewContent;
