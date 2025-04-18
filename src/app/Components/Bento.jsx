import React from "react";
import LineHead from "./Heading/LineHead";
import Link from "next/link";

const Bento = ({}) => {
  return (
    <div className="flex pt-0 md:pt-[20px] sm:flex-row flex-col gap-[10px] items-center justify-between h-fit">
      <Link
        href="/blogs/the-evolution-of-grade-a-industrial-and-logistics-parks-trends-and-insights"
        className={`h-[585px] md:hover:translate-y-[-20px] transition-[transform] duration-300 ease-in-out w-full sm:w-[33%] cursor-pointer xl:w-[385px] bg-[url(https://www.kshinfra.com/wp-content/uploads/2025/02/1.jpg)] bg-cover bg-center flex flex-col justify-end  px-4 xl:px-[25px] pb-[50px] gap-[10px]`}
      >
        <p
          className="fsans-400 text-[22px] leading-[130%] text-white"
          style={{ textShadow: "2px 2px #000" }}
        >
          The Evolution of Grade A Industrial and Logistics Parks: Trends and
          Insights
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
        href="/blogs/why-sustainable-industrial-and-logistics-parks-is-the-need-of-the-hour-for-indian-industry-2"
        className={`h-[585px] md:hover:translate-y-[-20px] transition-[transform] duration-300 ease-in-out w-full sm:w-[33%] cursor-pointer xl:w-[315px] bg-[url(https://www.kshinfra.com/wp-content/uploads/2025/02/freepik__the-style-is-candid-image-photography-with-natural__24755.png)] bg-cover bg-center flex flex-col justify-end sm:justify-start px-4 xl:px-[31px] pb-[50px] sm:pt-[50px] gap-[10px]`}
      >
        <p className="fsans-400 text-[22px] leading-[130%] text-white sm:text-[#092241]">
          Why Sustainable Industrial and Logistics Parks is the Need of the Hour
          for Indian Industry
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
          href="/blogs/the-impact-of-ergonomics-on-worker-productivity-and-safety"
          className={`md:hover:translate-y-[-20px] transition-[transform] duration-300 ease-in-out h-[479px] bg-[url(https://www.kshinfra.com/wp-content/uploads/2025/01/corridor-1280-inside-1280-warehouse-1280-dedicated-1280-selfstorage.webp)] bg-cover bg-center flex flex-col items-start justify-end px-4 xl:pl-[50px] xl:pr-[125px] pb-[50px] gap-[10px]`}
          style={{ textShadow: "2px 2px #000" }}
        >
          <p className="fsans-400 text-[22px] leading-[130%] text-white">
            The Impact of Ergonomics on Worker Productivity and Safety
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

export default Bento;
