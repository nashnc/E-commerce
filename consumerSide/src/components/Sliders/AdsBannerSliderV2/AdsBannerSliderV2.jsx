import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./AdsBannerSliderV2.css";

// import required modules
import { Navigation } from "swiper/modules";

import BannerBoxV2 from "./BannerBoxV2/BannerBoxV2";

// import required modules
const AdsBannerSliderV2 = (props) => {
  return (
    <>
      <section className="w-full py-5 pt-2">
        <Swiper
          slidesPerView={props.items}
          spaceBetween={10}
          modules={[Navigation]}
          navigation={true}
          className="smallBtn"
        >
          <SwiperSlide>
            <BannerBoxV2
              info="right"
              image={
                "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-2.jpg"
              }
              title={
                <>
                  S22 Samsung <br /> Smartphone
                </>
              }
              price="$250.00"
              link={"/"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <BannerBoxV2
              info="right"
              image={
                "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-2.jpg"
              }
              title={
                <>
                  Armchair Mad By <br /> shopstic
                </>
              }
              price="$190.00"
              link={"/"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <BannerBoxV2
              info="right"
              image={
                "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-2.jpg"
              }
              title={
                <>
                  Noise Wireless <br /> Headphones{" "}
                </>
              }
              price="$129.00"
              link={"/"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <BannerBoxV2
              info="right"
              image={
                "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-2.jpg"
              }
              title={
                <>
                  Samsung Gear <br /> VR Camera
                </>
              }
              link={"/"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <BannerBoxV2
              info="right"
              image={
                "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-2.jpg"
              }
              title={
                <>
                  Samsung Gear <br /> VR Camera
                </>
              }
              link={"/"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <BannerBoxV2
              info="right"
              image={
                "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-2.jpg"
              }
              title={
                <>
                  Samsung Gear <br /> VR Camera
                </>
              }
              link={"/"}
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default AdsBannerSliderV2;
