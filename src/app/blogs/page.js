// import React from "react";
// import SlideBlog from "./Components/SlideBlog";
// import BlogSpot from "./Components/BlogSpot";
// import TabBlogs from "./Components/TabBlogs";

// const fetchAllBlogs = async () => {
//   const baseUrl = "https://www.kshinfra.com/wp-json/wp/v2/posts";
//   const perPage = 100;

//   // Step 1: Fetch total post count
//   const firstResponse = await fetch(`${baseUrl}?per_page=1`, {
//     cache: "no-store",
//   });
//   const totalPosts = firstResponse.headers.get("X-WP-Total"); // Total post count
//   const totalPages = Math.ceil(totalPosts / perPage);

//   // Step 2: Fetch all pages concurrently
//   const requests = Array.from({ length: totalPages }, (_, i) =>
//     fetch(`${baseUrl}?per_page=${perPage}&page=${i + 1}`, {
//       cache: "no-store",
//     }).then((res) => res.json())
//   );

//   const allBlogs = (await Promise.all(requests)).flat(); // Flatten array

//   return allBlogs;
// };

// const Page = async () => {
//   const blogs = await fetchAllBlogs();

//   console.log(
//     blogs.map((blog) => ({ id: blog.id, categories: blog.categories }))
//   );

//   return (
//     <>
//       <BlogSpot />
//       <SlideBlog blogs={blogs} />
//       <TabBlogs blogs={blogs} />
//     </>
//   );
// };

// export default Page;
// 999999999999 **************************
// 999999999999 **************************
// 999999999999 **************************
// 999999999999 **************************
// 999999999999 **************************
// 999999999999 **************************
// 999999999999 **************************
// 999999999999 **************************
// 999999999999 **************************
// import React from "react";
// import SlideBlog from "./Components/SlideBlog";
// import BlogSpot from "./Components/BlogSpot";
// import TabBlogs from "./Components/TabBlogs";

// const fetchAllBlogs = async () => {
//   const baseUrl = "https://www.kshinfra.com/wp-json/wp/v2/posts";
//   const perPage = 100;

//   // Fetch total post count
//   const firstResponse = await fetch(`${baseUrl}?per_page=1`, {
//     cache: "no-store",
//   });
//   const totalPosts = firstResponse.headers.get("X-WP-Total"); // Total post count
//   const totalPages = Math.ceil(totalPosts / perPage);

//   // Fetch all pages concurrently
//   const requests = Array.from({ length: totalPages }, (_, i) =>
//     fetch(`${baseUrl}?per_page=${perPage}&page=${i + 1}`, {
//       cache: "no-store",
//     }).then((res) => res.json())
//   );

//   const allBlogs = (await Promise.all(requests)).flat(); // Flatten array

//   return allBlogs;
// };

// const Page = async () => {
//   const blogs = await fetchAllBlogs();

//   console.log(
//     blogs.map((blog) => ({
//       id: blog.id,
//       featured_image: blog.better_featured_image, // Log the entire featured image object
//     }))
//   );
//   return (
//     <>
//       <BlogSpot />
//       <SlideBlog blogs={blogs} />
//       <TabBlogs blogs={blogs} />
//     </>
//   );
// };

// export default Page;

// 99999999999999 &&&&&&&&&&&^^^^^^^^^^^^
// 99999999999999 &&&&&&&&&&&^^^^^^^^^^^^
// 99999999999999 &&&&&&&&&&&^^^^^^^^^^^^
// 99999999999999 &&&&&&&&&&&^^^^^^^^^^^^
// 99999999999999 &&&&&&&&&&&^^^^^^^^^^^^
// 99999999999999 &&&&&&&&&&&^^^^^^^^^^^^
// 99999999999999 &&&&&&&&&&&^^^^^^^^^^^^
// 99999999999999 &&&&&&&&&&&^^^^^^^^^^^^

import React from "react";
import SlideBlog from "./Components/SlideBlog";
import BlogSpot from "./Components/BlogSpot";
import TabBlogs from "./Components/TabBlogs";

const page = async () => {
  const baseUrl = "https://www.kshinfra.com/wp-json/wp/v2/posts";
  const mediaUrl = "https://www.kshinfra.com/wp-json/wp/v2/media";
  const perPage = 10; // Adjust for pagination

  // Fetch total post count
  const firstResponse = await fetch(`${baseUrl}?per_page=1`, {
    cache: "no-store",
  });
  const totalPosts = firstResponse.headers.get("X-WP-Total");
  const totalPages = Math.ceil(totalPosts / perPage);

  // Fetch all posts
  const requests = Array.from({ length: totalPages }, (_, i) =>
    fetch(`${baseUrl}?per_page=${perPage}&page=${i + 1}`, {
      cache: "no-store",
    }).then((res) => res.json())
  );

  const allBlogs = (await Promise.all(requests)).flat();

  // Fetch media details for featured images
  const mediaRequests = allBlogs
    .map((blog) => blog.featured_media)
    .filter(Boolean) // Remove empty featured_media IDs
    .map((id) =>
      fetch(`${mediaUrl}/${id}`, { cache: "no-store" }).then((res) =>
        res.json()
      )
    );

  const mediaData = await Promise.all(mediaRequests);
  const mediaMap = Object.fromEntries(
    mediaData.map((media) => [media.id, media.source_url])
  );

  // Attach image URLs to blogs
  const blogs = allBlogs.map((blog) => ({
    ...blog,
    thumbnail: mediaMap[blog.featured_media] || "No Thumbnail",
  }));

  console.log(
    blogs.map((blog) => ({
      id: blog.id,
      thumbnail: blog.thumbnail, // This should now log the actual image URL
    }))
  );

  return (
    <>
      <BlogSpot />
      <SlideBlog blogs={blogs} />
      <TabBlogs blogs={blogs} />
    </>
  );
};

export default page;
