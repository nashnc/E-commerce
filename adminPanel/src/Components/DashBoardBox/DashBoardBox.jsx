import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { AiTwotoneGift } from "react-icons/ai";
import { IoStatsChart } from "react-icons/io5";
import { AiTwotonePieChart } from "react-icons/ai";
import { PiBankDuotone } from "react-icons/pi";
import { GiBoxUnpacking } from "react-icons/gi";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

// import required modules
import { Pagination } from "swiper/modules";
const DashBoardBox = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="dashBoardBoxSlider"
      >
        <SwiperSlide>
          <div className="box bg-white   shadow-sm flex cursor-pointer items-center gap-4 rounded-md border border-[rgba(0,0,0,0.1)] p-5 hover:bg-[#f1f1f1]">
            <AiTwotoneGift className="text-[50px] text-[#3872fa]" />
            <div className="info w-[70%]">
              <h3>New Orders</h3>
              <p>
                <b> 1,390</b>
              </p>
            </div>
            <IoStatsChart className="text-[50px] text-[#3872fa]" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box bg-white   shadow-sm flex cursor-pointer items-center gap-4 rounded-md border border-[rgba(0,0,0,0.1)] p-5 hover:bg-[#f1f1f1]">
            <AiTwotonePieChart className="text-[50px] text-[#10b981]" />
            <div className="info w-[70%]">
              <h3>Sales</h3>
              <p>
                <b> $21,390</b>
              </p>
            </div>
            <IoStatsChart className="text-[50px] text-[#10b981]" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box bg-white   shadow-sm flex cursor-pointer items-center gap-4 rounded-md border border-[rgba(0,0,0,0.1)] p-5 hover:bg-[#f1f1f1]">
            <PiBankDuotone className="text-[50px] text-[#7928ca]" />
            <div className="info w-[70%]">
              <h3>Revenue</h3>
              <p>
                <b> $71,390</b>
              </p>
            </div>
            <IoStatsChart className="text-[50px] text-[#7928ca]" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box bg-white   shadow-sm flex cursor-pointer items-center gap-4 rounded-md border border-[rgba(0,0,0,0.1)] p-5 hover:bg-[#f1f1f1]">
            <GiBoxUnpacking className="text-[50px] text-[#312be1d8]" />
            <div className="info w-[70%]">
              <h3>Total Products</h3>
              <p>
                <b> 1,390</b>
              </p>
            </div>
            <IoStatsChart className="text-[50px] text-[#312be1d8]" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default DashBoardBox;
