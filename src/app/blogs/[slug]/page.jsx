// import { notFound } from "next/navigation";
// import Image from "next/image";
// import BCard from "./Components/BCard";

// async function fetchBlogData(slug) {
//   const res = await fetch(
//     `https://www.kshinfra.com/wp-json/wp/v2/posts?slug=${slug}&_embed`,
//     { cache: "no-store" }
//   );

//   if (!res.ok) return null;
//   const data = await res.json();
//   if (data.length === 0) return null;

//   const blog = data[0];

//   let featuredImage =
//     blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

//   if (!featuredImage && blog.featured_media) {
//     try {
//       const mediaRes = await fetch(
//         `https://www.kshinfra.com/wp-json/wp/v2/media/${blog.featured_media}`,
//         { cache: "no-store" }
//       );
//       if (mediaRes.ok) {
//         const mediaData = await mediaRes.json();
//         featuredImage = mediaData.source_url || null;
//       }
//     } catch (error) {
//       console.error("Media fetch error:", error);
//     }
//   }

//   return { ...blog, featuredImage: featuredImage || "/default-image.jpg" };
// }

// async function fetchAllBlogs() {
//   const res = await fetch(
//     `https://www.kshinfra.com/wp-json/wp/v2/posts?_embed&per_page=100`,
//     { cache: "no-store" }
//   );

//   if (!res.ok) return [];
//   return await res.json();
// }

// export default async function BlogPage({ params }) {
//   const blog = await fetchBlogData(params.slug);
//   if (!blog) return notFound();

//   const allBlogs = await fetchAllBlogs();

//   const relatedBlogs = allBlogs
//     .filter((b) => b.id !== blog.id)
//     .map((b) => ({
//       ...b,
//       featuredImage: b._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
//     }));

//   const categoryLabels = {
//     17: "Blogs",
//     18: "News",
//   };
//   const categoryToShow =
//     blog.categories.map((cat) => categoryLabels[cat]).find(Boolean) ||
//     "Uncategorized";

//   return (
//     <div id="bloginside">
//       {/* Blog Header */}
//       <div className="bg-[#092241]">
//         <div className="fix12 pb-20 pt-32">
//           <div className="pb-16">
//             <p
//               className="text-[#D7D7D7A3] text-base fsans-400 pb-7"
//               dangerouslySetInnerHTML={{ __html: "Home &gt; Blog" }}
//             />
//             <div className="space-y-7">
//               <p
//                 className="w-fit py-1 px-3 fsans-600 text-base bg-[#F7E327]"
//                 dangerouslySetInnerHTML={{ __html: categoryToShow }}
//               />
//               <h1
//                 className="fpt-700 text-[44px] leading-[105%] text-white"
//                 dangerouslySetInnerHTML={{ __html: blog.title.rendered }}
//               />
//             </div>
//           </div>

//           {/* Blog Featured Image */}
//           <div className="imgCon">
//             <Image
//               src={blog.featuredImage}
//               alt={blog.title.rendered}
//               width={1200}
//               height={600}
//               className="w-full h-auto object-cover"
//               priority
//             />
//           </div>
//         </div>
//       </div>

//       {/* Blog Content */}
//       <div className="fix12 px-10">
//         <div className="middleBlogContent flex lg:gap-20 gap-9 py-20 relative">
//           {/* Social Icons */}
//           <div className="colIcon h-fit sticky top-20">
//             <div className="flex w-10 flex-col gap-8">
//               <span
//                 dangerouslySetInnerHTML={{
//                   __html: `<img class="w-9 h-9" src="/binside/BinFB.svg" alt="Facebook" width="36" height="36" />`,
//                 }}
//               />
//               <span
//                 dangerouslySetInnerHTML={{
//                   __html: `<img class="w-9 h-9" src="/binside/BinIN.svg" alt="LinkedIn" width="36" height="36" />`,
//                 }}
//               />
//               <span
//                 dangerouslySetInnerHTML={{
//                   __html: `<img class="w-9 h-9" src="/binside/BinInsta.svg" alt="Instagram" width="36" height="36" />`,
//                 }}
//               />
//             </div>
//           </div>

//           {/* Blog Content */}
//           <div id="bloginwy" className="colContnt">
//             <div
//               className="fsans-400 text-base leading-7 space-y-[18px] text-[#434343]"
//               dangerouslySetInnerHTML={{ __html: blog.content.rendered }}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Related Blogs Section */}
//       <div className="fix12 py-[70px]">
//         <h2
//           className="fpt-600 text-[44px] text-[#092241] mb-10"
//           dangerouslySetInnerHTML={{ __html: "Related Blogs" }}
//         />
//         <div className="grid grid-cols-2 gap-y-[65px]">
//           {relatedBlogs.length > 0 ? (
//             relatedBlogs.map((relatedBlog) => (
//               <BCard
//                 key={relatedBlog.id}
//                 blog={relatedBlog}
//                 image={relatedBlog.featuredImage}
//               />
//             ))
//           ) : (
//             <p
//               className="text-center col-span-2"
//               dangerouslySetInnerHTML={{
//                 __html: "No related blogs available.",
//               }}
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

import { notFound } from "next/navigation";
import Image from "next/image";
import BCSlider from "./Components/BCslider";

async function fetchBlogData(slug) {
  const res = await fetch(
    `https://www.kshinfra.com/wp-json/wp/v2/posts?slug=${slug}&_embed`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;
  const data = await res.json();
  if (data.length === 0) return null;

  const blog = data[0];

  let featuredImage =
    blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

  if (!featuredImage && blog.featured_media) {
    try {
      const mediaRes = await fetch(
        `https://www.kshinfra.com/wp-json/wp/v2/media/${blog.featured_media}`,
        { cache: "no-store" }
      );
      if (mediaRes.ok) {
        const mediaData = await mediaRes.json();
        featuredImage = mediaData.source_url || null;
      }
    } catch (error) {
      console.error("Media fetch error:", error);
    }
  }

  return { ...blog, featuredImage: featuredImage || "/default-image.jpg" };
}

async function fetchAllBlogs() {
  const res = await fetch(
    `https://www.kshinfra.com/wp-json/wp/v2/posts?_embed&per_page=100`,
    { cache: "no-store" }
  );

  if (!res.ok) return [];
  return await res.json();
}

export default async function BlogPage({ params }) {
  const blog = await fetchBlogData(params.slug);
  if (!blog) return notFound();

  const allBlogs = await fetchAllBlogs();

  const relatedBlogs = allBlogs
    .filter((b) => b.id !== blog.id)
    .map((b) => ({
      ...b,
      featuredImage: b._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
    }));

  const categoryLabels = {
    17: "Blogs",
    18: "News",
  };
  const categoryToShow =
    blog.categories.map((cat) => categoryLabels[cat]).find(Boolean) ||
    "Uncategorized";

  return (
    <div id="bloginside">
      {/* Blog Header */}
      <div className="bg-[#092241]">
        <div className="fix12 pb-20 pt-32">
          <div className="pb-16">
            <p
              className="text-[#D7D7D7A3] text-base fsans-400 pb-7"
              dangerouslySetInnerHTML={{ __html: "Home &gt; Blog" }}
            />
            <div className="space-y-7">
              <p
                className="w-fit py-1 px-3 fsans-600 text-base bg-[#F7E327]"
                dangerouslySetInnerHTML={{ __html: categoryToShow }}
              />
              <h1
                className="fpt-700 text-[44px] leading-[105%] text-white"
                dangerouslySetInnerHTML={{ __html: blog.title.rendered }}
              />
            </div>
          </div>

          {/* Blog Featured Image */}
          <div className="imgCon">
            <Image
              src={blog.featuredImage}
              alt={blog.title.rendered}
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="fix12 px-10">
        <div className="middleBlogContent flex lg:gap-20 gap-9 py-20 relative">
          {/* Social Icons */}
          <div className="colIcon h-fit sticky top-20">
            <div className="flex w-10 flex-col gap-8">
              <span
                dangerouslySetInnerHTML={{
                  __html: `<img class="w-9 h-9" src="/binside/BinFB.svg" alt="Facebook" width="36" height="36" />`,
                }}
              />
              <span
                dangerouslySetInnerHTML={{
                  __html: `<img class="w-9 h-9" src="/binside/BinIN.svg" alt="LinkedIn" width="36" height="36" />`,
                }}
              />
              <span
                dangerouslySetInnerHTML={{
                  __html: `<img class="w-9 h-9" src="/binside/BinInsta.svg" alt="Instagram" width="36" height="36" />`,
                }}
              />
            </div>
          </div>

          {/* Blog Content */}
          <div id="bloginwy" className="colContnt">
            <div
              className="fsans-400 text-base leading-7 space-y-[18px] text-[#434343]"
              dangerouslySetInnerHTML={{ __html: blog.content.rendered }}
            />
          </div>
        </div>
      </div>

      {/* Related Blogs Section */}
      <BCSlider relatedBlogs={relatedBlogs} />
    </div>
  );
}
