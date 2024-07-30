"use client";
import React, { useRef, useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const PostCarousel: React.FC = () => {

  const [slides, setSlides] = useState<string[]>(
    Array.from({ length: 10 }).map((_, index) => `Slide ${index + 1}`)
  );

  return (
    <div>
      <span>최근 작성 글</span>
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        slidesPerView={3}
        centeredSlides={false}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        virtual
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={slideContent} >
            {slideContent}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PostCarousel;
