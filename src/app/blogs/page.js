import React from "react";
import SlideBlog from "./Components/SlideBlog";
import BlogSpot from "./Components/BlogSpot";
import TabBlogs from "./Components/TabBlogs";
const page = () => {
  return (
    <>
      <BlogSpot />
      <SlideBlog />
      <TabBlogs />
    </>
  );
};

export default page;
