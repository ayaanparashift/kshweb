import React from "react";
import LineHead from "./Heading/LineHead";
import Link from "next/link";

const Bento2 = ({}) => {
  return (
    <div className="flex pt-0 md:pt-[20px] sm:flex-row flex-col gap-[10px] items-center justify-between h-fit">
      <Link
        href="/blogs/top-challenges-in-logistics-and-industrial-real-estate-development-and-how-ksh-infra-solves-them"
        className={`h-[585px] md:hover:translate-y-[-20px] transition-[transform] duration-300 ease-in-out w-full sm:w-[33%] cursor-pointer xl:w-[385px] bg-[url(https://www.kshinfra.com/wp-content/uploads/2025/01/transport-1280-logistics-1280-concept.webp)] bg-cover bg-center flex flex-col justify-end  px-4 xl:px-[25px] pb-[50px] gap-[10px]`}
      >
        <p
          className="fsans-400 text-[22px] leading-[130%] text-white"
          style={{ textShadow: "2px 2px #000" }}
        >
          Top Challenges in Logistics and Industrial Real Estate Development—and
          How KSH INFRA Solves Them
        </p>
        <p
          className="fsans-400 text-[16px] leading-[130%] text-white opacity-50"
          style={{ textShadow: "2px 2px #000" }}
        >
          Road Freight | 14 Dec 24
        </p>
        <button>
          <img className="h-10 w-10" src="/buttonarrows/bentor1.svg" alt="r1" />
        </button>
      </Link>
      <Link
        href="/blogs/how-grade-a-industrial-parks-aid-the-7-principles-of-lean-manufacturing"
        className={`h-[585px] md:hover:translate-y-[-20px] transition-[transform] duration-300 ease-in-out w-full sm:w-[33%] cursor-pointer xl:w-[315px] bg-[url(https://www.kshinfra.com/wp-content/uploads/2024/11/How-Grade-A-Industrial-Parks-Aid-the-7-Principles-of-Lean-Manufacturing.png)] bg-cover bg-center flex flex-col justify-end sm:justify-start px-4 xl:px-[31px] pb-[50px] sm:pt-[50px] gap-[10px]`}
      >
        <p className="fsans-400 text-[22px] leading-[130%] text-white sm:text-[#092241]">
          How Grade A Industrial Parks Aid the 7 Principles of Lean
          Manufacturing
        </p>
        <p className="fsans-400 text-[16px] leading-[130%] text-white sm:text-[#6C8DAB] sm:opacity-50">
          Road Freight | 14 Dec 24
        </p>
        <button>
          <img className="h-10 w-10" src="/buttonarrows/bentor2.svg" alt="r1" />
        </button>
      </Link>
      <div
        className={`h-[578px] transition-[transform] duration-300 w-full sm:w-[33%] cursor-pointer xl:w-[515px] flex justify-end flex-col-reverse sm:flex-col gap-[30px]`}
      >
        <Link
          href="/blogs/physical-security-in-manufacturing-prioritizing-people-over-perimeters"
          className={`md:hover:translate-y-[-20px] transition-[transform] duration-300 ease-in-out h-[479px] bg-[url(https://www.kshinfra.com/wp-content/uploads/2024/11/Physical-Security-in-Manufacturing-Prioritizing-People-Over-Perimeters.png)] bg-cover bg-center flex flex-col items-start justify-end px-4 xl:pl-[50px] xl:pr-[125px] pb-[50px] gap-[10px]`}
          style={{ textShadow: "2px 2px #000" }}
        >
          <p className="fsans-400 text-[22px] leading-[130%] text-white">
            Physical Security in Manufacturing: Prioritizing People Over
            Perimeters
          </p>
          <p className="fsans-400 text-[16px] leading-[130%] text-white opacity-50">
            Road Freight | 14 Dec 24
          </p>
          <button>
            <img
              className="h-10 w-10"
              src="/buttonarrows/bentor1.svg"
              alt="r1"
            />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Bento2;
