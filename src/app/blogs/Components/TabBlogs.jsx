// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import BlogCard from "./BlogCard";

// const TabBlogs = () => {
//   const tabs = [
//     { title: "All", link: "#parkov" },
//     { title: "News", link: "#parkhighlight" },
//     { title: "Blogs", link: "#pi" },
//     { title: "Press Release", link: "#db" },
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);
//   return (
//     <>
//       <div className="w-full  bg-[#092241]">
//         <div className="fix12 pt-[50px] flex flex-col gap-[60px] pb-[30px]">
//           <h2 className="fpt-600 text-[44px] text-white">Other Blogs</h2>
//           <div>
//             <div className="fix12 flex overflow-x-auto scrollbar-hide items-center border-b-2 border-[#BFBFBF]">
//               {tabs.map((tab, index) => (
//                 <Link
//                   href={tab.link}
//                   key={index}
//                   className={`
//               flex-1 lg:min-w-0 fsans-600 text-[20px] leading-[111%] min-w-[200px] text-center text-sm font-medium transition-colors pb-[15px]
//               ${
//                 activeIndex === index
//                   ? "text-[#F7E327] border-b-2 border-[#F7E327]"
//                   : "text-white hover:text-gray-300"
//               }
//               whitespace-nowrap
//             `}
//                   onClick={() => setActiveIndex(index)}
//                 >
//                   {tab.title}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="fix12 py-[70px] grid grid-cols-2 gap-y-[65px]">
//         <BlogCard />
//         <BlogCard />
//         <BlogCard />
//         <BlogCard />
//         <BlogCard />
//         <BlogCard />
//         <BlogCard />
//         <BlogCard />
//         <BlogCard />
//         <BlogCard />
//         <BlogCard />
//         <BlogCard />
//         <BlogCard />
//         <BlogCard />
//         <BlogCard />
//         <BlogCard />
//         <BlogCard />
//       </div>
//     </>
//   );
// };

// export default TabBlogs;

"use client";
import { useState } from "react";
import BlogCard from "./BlogCard";

const TabBlogs = () => {
  // Tabs with just titles (no link property)
  const tabs = [
    { title: "All" },
    { title: "News" },
    { title: "Blogs" },
    { title: "Press Release" },
  ];

  // Default active tab is "All" (index 0)
  const [activeIndex, setActiveIndex] = useState(0);

  // Sample blog data with two posts per category using the same image
  const blogData = {
    news: [
      {
        id: 1,
        category: "News",
        image: "/blog/blog1.jpg",
        title: `The Evolution of Grade A Industrial and Logistics Parks: Trends
              and Insights`,
      },
      {
        id: 2,
        category: "News",
        image: "/blog/blogin/blogin1.png",
        title: "Breaking: Market Trends Update",
      },
    ],
    blogs: [
      {
        id: 3,
        category: "Blogs",
        image: "/blog/blogin/blogin1.png",
        title:
          "Harnessing AI in Logistics: The Future of Supply Chain Optimization",
      },
      {
        id: 4,
        category: "Blogs",
        image: "/blog/blogin/blogin1.png",
        title: "Inside the World of Digital Transformation",
      },
    ],
    pressRelease: [
      {
        id: 5,
        category: "Press Release",
        image: "/blog/blogin/blogin1.png",
        title: "Company Announces New Partnership",
      },
      {
        id: 6,
        category: "Press Release",
        image: "/blog/blogin/blogin1.png",
        title: "Press Release: Quarterly Earnings Report",
      },
    ],
  };

  // Determine which blogs to display based on the active tab.
  let blogsToDisplay = [];
  if (activeIndex === 0) {
    // "All" tab: show all items
    blogsToDisplay = [
      ...blogData.news,
      ...blogData.blogs,
      ...blogData.pressRelease,
    ];
  } else if (activeIndex === 1) {
    blogsToDisplay = blogData.news;
  } else if (activeIndex === 2) {
    blogsToDisplay = blogData.blogs;
  } else if (activeIndex === 3) {
    blogsToDisplay = blogData.pressRelease;
  }

  return (
    <>
      <div className="w-full bg-[#092241]">
        <div className="fix12 pt-[50px] flex flex-col gap-[60px] pb-[30px]">
          <h2 className="fpt-600 text-[44px] text-white">Other Blogs</h2>
          <div>
            <div className="fix12 flex overflow-x-auto scrollbar-hide items-center border-b-2 border-[#BFBFBF]">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`flex-1 lg:min-w-0 fsans-600 text-[20px] leading-[111%] min-w-[200px] text-center text-sm font-medium transition-colors pb-[15px] whitespace-nowrap ${
                    activeIndex === index
                      ? "text-[#F7E327] border-b-2 border-[#F7E327]"
                      : "text-white hover:text-gray-300"
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  {tab.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="fix12 py-[70px] grid grid-cols-2 gap-y-[65px]">
        {blogsToDisplay.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </>
  );
};

export default TabBlogs;
