"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import BCard from "../Components/BCard";

export default function BCSlider({ relatedBlogs }) {
  return (
    <>
      <div className="fix12 py-[70px]">
        <h2
          className="fpt-600 text-[44px] text-[#092241] mb-10 w-fit"
          dangerouslySetInnerHTML={{ __html: "Other Blogs" }}
        />
        {relatedBlogs.length > 0 ? (
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={2}
            navigation
            breakpoints={{
              768: { slidesPerView: 2 },
              320: { slidesPerView: 1 }, // Show 1 card on small screens
            }}
            className="pb-10"
          >
            {relatedBlogs.map((relatedBlog) => (
              <SwiperSlide key={relatedBlog.id}>
                <BCard blog={relatedBlog} image={relatedBlog.featuredImage} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p
            className="text-center"
            dangerouslySetInnerHTML={{
              __html: "No related blogs available.",
            }}
          />
        )}
      </div>
    </>
  );
}
