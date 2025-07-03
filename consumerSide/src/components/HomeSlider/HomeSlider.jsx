import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./HomeSlider.css";

// import required modules

const HomeSlider = () => {
  return (
    <>
      <div className="homeSlider py-4">
        <div className="container">
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div class="item overflow-hidden rounded-[20px]">
                <img
                  src="https://api.spicezgold.com/download/file_1734524878924_1721277298204_banner.jpg"
                  alt="Banner Slide"
                  class="w-full"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div class="item overflow-hidden rounded-[20px]">
                <img
                  src="https://api.spicezgold.com/download/file_1734524930884_NewProject(6).jpg"
                  alt="Banner Slide"
                  class="w-full"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div class="item overflow-hidden rounded-[20px]">
                <img
                  src="https://api.spicezgold.com/download/file_1734524971122_NewProject(8).jpg"
                  alt="Banner Slide"
                  class="w-full"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div class="item overflow-hidden rounded-[20px]">
                <img
                  src="https://api.spicezgold.com/download/file_1734524985581_NewProject(11).jpg"
                  alt="Banner Slide"
                  class="w-full"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div class="item overflow-hidden rounded-[20px]">
                <img
                  src="https://api.spicezgold.com/download/file_1734525002307_1723967638078_slideBanner1.6bbeed1a0c8ffb494f7c.jpg"
                  alt="Banner Slide"
                  class="w-full"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div class="item overflow-hidden rounded-[20px]">
                <img
                  src="https://api.spicezgold.com/download/file_1734525014348_NewProject(7).jpg"
                  alt="Banner Slide"
                  class="w-full"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default HomeSlider;
