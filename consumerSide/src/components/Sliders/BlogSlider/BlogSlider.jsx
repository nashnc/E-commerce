import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./BlogSlider.css";

// import required modules
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import BlogItem from "./BlogItem/BlogItem";
const BlogSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        modules={[Navigation]}
        navigation={true}
        className="blogSlider"
      >
        <SwiperSlide>
          <BlogItem />
        </SwiperSlide>
        <SwiperSlide>
          <BlogItem />
        </SwiperSlide>
        <SwiperSlide>
          <BlogItem />
        </SwiperSlide>
        <SwiperSlide>
          <BlogItem />
        </SwiperSlide>
        <SwiperSlide>
          <BlogItem />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default BlogSlider;
