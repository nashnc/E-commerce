import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./AdsBannerSlider.css";

// import required modules
import { Navigation } from "swiper/modules";

import Bannerbox from "../BannerBox/Bannerbox";

// import required modules
const AdsBannerSlider = (props) => {
  return (
    <>
      <section className="w-full py-5">
        <Swiper
          slidesPerView={props.items}
          spaceBetween={10}
          modules={[Navigation]}
          navigation={true}
          className="smallBtn"
        >
          <SwiperSlide>
            <Bannerbox img={"/banner1.webp"} link={"/"} />
          </SwiperSlide>
          <SwiperSlide>
            <Bannerbox img={"/banner2.webp"} link={"/"} />
          </SwiperSlide>
          <SwiperSlide>
            <Bannerbox img={"/banner3.webp"} link={"/"} />
          </SwiperSlide>
          <SwiperSlide>
            <Bannerbox img={"/banner4.webp"} link={"/"} />
          </SwiperSlide>
          <SwiperSlide>
            <Bannerbox img={"/banner5.webp"} link={"/"} />
          </SwiperSlide>
          <SwiperSlide>
            <Bannerbox img={"/banner3.webp"} link={"/"} />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default AdsBannerSlider;
