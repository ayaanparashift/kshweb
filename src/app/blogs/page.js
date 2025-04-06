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

// import React from "react";
// import SlideBlog from "./Components/SlideBlog";
// import BlogSpot from "./Components/BlogSpot";
// import TabBlogs from "./Components/TabBlogs";

// const page = async () => {
//   const baseUrl = "https://www.kshinfra.com/wp-json/wp/v2/posts";
//   const mediaUrl = "https://www.kshinfra.com/wp-json/wp/v2/media";
//   const perPage = 10; // Adjust for pagination

//   // Fetch total post count
//   const firstResponse = await fetch(`${baseUrl}?per_page=1`, {
//     cache: "no-store",
//   });
//   const totalPosts = firstResponse.headers.get("X-WP-Total");
//   const totalPages = Math.ceil(totalPosts / perPage);

//   // Fetch all posts
//   const requests = Array.from({ length: totalPages }, (_, i) =>
//     fetch(`${baseUrl}?per_page=${perPage}&page=${i + 1}`, {
//       cache: "no-store",
//     }).then((res) => res.json())
//   );

//   const allBlogs = (await Promise.all(requests)).flat();

//   // Fetch media details for featured images
//   const mediaRequests = allBlogs
//     .map((blog) => blog.featured_media)
//     .filter(Boolean) // Remove empty featured_media IDs
//     .map((id) =>
//       fetch(`${mediaUrl}/${id}`, { cache: "no-store" }).then((res) =>
//         res.json()
//       )
//     );

//   const mediaData = await Promise.all(mediaRequests);
//   const mediaMap = Object.fromEntries(
//     mediaData.map((media) => [media.id, media.source_url])
//   );

//   // Attach image URLs to blogs
//   const blogs = allBlogs.map((blog) => ({
//     ...blog,
//     thumbnail: mediaMap[blog.featured_media] || "No Thumbnail",
//   }));

//   console.log(
//     blogs.map((blog) => ({
//       id: blog.id,
//       thumbnail: blog.thumbnail, // This should now log the actual image URL
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

// export default page;

import React from "react";
import Link from "next/link";
import BlogSpot from "./Components/BlogSpot";
import SlideBlog from "./Components/SlideBlog";
import TabBlogs from "./Components/TabBlogs";

// Server function to fetch blogs for a given page
const fetchBlogByPage = async (page = 1) => {
  // const resp = await fetch(
  //   `https://www.kshinfra.com/wp-json/wp/v2/posts?page=${page}`,
  //   { next: { revalidate: 60 } } // Optional: cache for 60 seconds
  // );
  const resp = await fetch(
    `https://www.kshinfra.com/wp-json/wp/v2/posts?per_page=31`, // Fetch 31 posts
    { next: { revalidate: 60 } } // Optional: ISR cache for 60 seconds
  );

  if (!resp.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await resp.json();
  const totalPages = parseInt(resp.headers.get("X-WP-TotalPages") || "1", 10);

  return { data, totalPages };
};

// Server Component
const BlogPage = async ({ searchParams }) => {
  const currentPage = parseInt(searchParams.page || "1", 10);
  const { data: blogs, totalPages } = await fetchBlogByPage(currentPage);

  // Create an array of page numbers (can add logic to limit if needed)
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  // console.log(blogs);
  return (
    // <div className="my-7">
    //   <div>
    //     {blogs.map((blog) => (
    //       <div key={blog.id} className="m-2 p-2 border-2">
    //         <h2 dangerouslySetInnerHTML={{ __html: blog.title.rendered }} />
    //       </div>
    //     ))}
    //   </div>

    //   {/* Pagination Controls */}
    //   <div className="flex gap-2 mt-4 items-center justify-center">
    //     {currentPage > 1 && (
    //       <Link
    //         href={`?page=${currentPage - 1}`}
    //         className="px-3 py-1 border rounded bg-gray-200"
    //       >
    //         Prev
    //       </Link>
    //     )}

    //     {pageNumbers.map((num) => (
    //       <Link
    //         key={num}
    //         href={`?page=${num}`}
    //         className={`px-3 py-1 border rounded ${
    //           num === currentPage ? "bg-blue-500 text-white" : "bg-gray-100"
    //         }`}
    //       >
    //         {num}
    //       </Link>
    //     ))}

    //     {currentPage < totalPages && (
    //       <Link
    //         href={`?page=${currentPage + 1}`}
    //         className="px-3 py-1 border rounded bg-gray-200"
    //       >
    //         Next
    //       </Link>
    //     )}
    //   </div>
    // </div>
    <>
      <BlogSpot />
      <SlideBlog blogs={blogs} />
      <TabBlogs blogs={blogs} />
    </>
  );
};

export default BlogPage;
