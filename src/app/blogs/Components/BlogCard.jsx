import Link from "next/link";
import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <div className="flex">
      <div className="w-[292px] h-[268px] max-w-full">
        <img
          className="object-cover h-full w-full"
          src={blog.image}
          alt={blog.title}
        />
      </div>
      <div className="flex flex-col min-h-full justify-between border-[#DDDDDD] border-t border-b border-r w-[310px] max-w-full pl-[30px] pr-[20px] py-[30px]">
        <div className="flex flex-col gap-[16px]">
          <p className="max-w-fit fsans-600 text-[16px] leading-[111%] bg-[#F7E327] py-[8px] px-[12px]">
            {blog.category}
          </p>
          <h3 className="spotlightheaddd fsans-600 text-[20px] text-[#565656]">
            {blog.title}
          </h3>
        </div>
        <Link
          href="blogs/the-evolution-of-grade-a-industrial-and-logistics-parks-trends-and-insights"
          className="flex items-center gap-2"
        >
          <div className="w-[30px] h-[30px] bg-[#EEF0F3] rounded-full flex items-center justify-center">
            <img src="./AboutPage/AboutGrowth/learnMore.svg" alt="Learn More" />
          </div>
          <p>Learn More</p>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
