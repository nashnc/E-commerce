import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./HomeCatSlider.css";

// import required modules
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const HomeCatSlider = () => {
  return (
    <>
      <div className="homeCatSlider pb-8 pt-4">
        <div className="container">
          <Swiper
            slidesPerView={8}
            spaceBetween={10}
            modules={[Navigation]}
            navigation={true}
            className="mySwiper"
          >
            {/* 1 */}
            <SwiperSlide>
              <Link to="/">
                <div className="item flex flex-col items-center justify-center rounded-sm bg-[#fff] px-3 py-7 text-center">
                  <img
                    alt=""
                    src="https://api.spicezgold.com/download/file_1734525204708_fash.png"
                    className="w-[60px] transition-all"
                  />
                  <h3 className="text-[18px]">Fashion</h3>
                </div>
              </Link>
            </SwiperSlide>
            {/* 2 */}
            <SwiperSlide>
              <Link to="/">
                <div className="item flex flex-col items-center justify-center rounded-sm bg-[#fff] px-3 py-7 text-center">
                  <img
                    alt=""
                    src="https://api.spicezgold.com/download/file_1734525218436_ele.png"
                    className="w-[60px] transition-all"
                  />
                  <h3 className="text-[18px]">Electronics</h3>
                </div>
              </Link>
            </SwiperSlide>
            {/* 3 */}
            <SwiperSlide>
              <Link to="/">
                <div className="item flex flex-col items-center justify-center rounded-sm bg-[#fff] px-3 py-7 text-center">
                  <img
                    alt=""
                    src="https://api.spicezgold.com/download/file_1734525231018_bag.png"
                    className="w-[60px] transition-all"
                  />
                  <h3 className="text-[18px]">Bags</h3>
                </div>
              </Link>
            </SwiperSlide>
            {/* 4 */}
            <SwiperSlide>
              <Link to="/">
                <div className="item flex flex-col items-center justify-center rounded-sm bg-[#fff] px-3 py-7 text-center">
                  <img
                    alt=""
                    src="https://api.spicezgold.com/download/file_1734525239704_foot.png"
                    className="w-[60px] transition-all"
                  />
                  <h3 className="text-[18px]">Footwear</h3>
                </div>
              </Link>
            </SwiperSlide>
            {/* 5 */}
            <SwiperSlide>
              <Link to="/">
                <div className="item flex flex-col items-center justify-center rounded-sm bg-[#fff] px-3 py-7 text-center">
                  <img
                    alt=""
                    src="https://api.spicezgold.com/download/file_1734525248057_gro.png"
                    className="w-[60px] transition-all"
                  />
                  <h3 className="text-[18px]">Groceries</h3>
                </div>
              </Link>
            </SwiperSlide>
            {/* 6 */}
            <SwiperSlide>
              <Link to="/">
                <div className="item flex flex-col items-center justify-center rounded-sm bg-[#fff] px-3 py-7 text-center">
                  <img
                    alt=""
                    src="https://api.spicezgold.com/download/file_1734525255799_beauty.png"
                    className="w-[60px] transition-all"
                  />
                  <h3 className="text-[18px]">Beauty</h3>
                </div>
              </Link>
            </SwiperSlide>
            {/* 7*/}
            <SwiperSlide>
              <Link to="/">
                <div className="item flex flex-col items-center justify-center rounded-sm bg-[#fff] px-3 py-7 text-center">
                  <img
                    alt=""
                    src="https://api.spicezgold.com/download/file_1734525275367_well.png"
                    className="w-[60px] transition-all"
                  />
                  <h3 className="text-[18px]">Wellness</h3>
                </div>
              </Link>
            </SwiperSlide>
            {/* 8*/}
            <SwiperSlide>
              <Link to="/">
                <div className="item flex flex-col items-center justify-center rounded-sm bg-[#fff] px-3 py-7 text-center">
                  <img
                    alt=""
                    src="https://serviceapi.spicezgold.com/download/1749273446706_jw.png"
                    className="w-[60px] transition-all"
                  />
                  <h3 className="text-[18px]">Jewelry</h3>
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default HomeCatSlider;
