import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./VerticalImageSlider.css";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

const VerticalImageSlider = ({ selectedIndex, goto, sliderRef }) => {
     const images = [
          "https://assets.myntassets.com/h_1080,q_90,w_762/v1/assets/images/32256534/2025/1/8/1663548c-13b6-47cf-98a4-f5e3a64a11e01736333044514TheIndianGarageCoMenTailoredJacket1.jpg",
          "https://assets.myntassets.com/h_1080,q_90,w_762/v1/assets/images/32256534/2025/1/8/017237b3-278d-44ac-b45b-24250163429d1736333044493TheIndianGarageCoMenTailoredJacket2.jpg",
          "https://assets.myntassets.com/h_1080,q_90,w_762/v1/assets/images/32256534/2025/1/8/80ba6da4-eb6c-4b98-85c8-58d55697ff241736333044557TheIndianGarageCoMenTailoredJacket3.jpg",
          "https://assets.myntassets.com/h_1080,q_90,w_762/v1/assets/images/32256534/2025/1/8/60aea058-c412-40f5-9bd5-d0af8b89a9d41736333044579TheIndianGarageCoMenTailoredJacket4.jpg",
          "https://assets.myntassets.com/h_1080,q_90,w_762/v1/assets/images/32256534/2025/1/8/af6e26a8-346a-4799-abbc-07779ab2fe301736333044471TheIndianGarageCoMenTailoredJacket5.jpg",
          "https://assets.myntassets.com/h_1080,q_90,w_762/v1/assets/images/32256534/2025/1/8/10a674cd-9b14-487c-b687-c7993e0c4ffd1736333044536TheIndianGarageCoMenTailoredJacket6.jpg",
     ];
     return (
          <>
               <div className="homeCatSlider pb-8">
                    <div className="container">
                         <Swiper
                              ref={sliderRef}
                              direction={"vertical"}
                              slidesPerView={5}
                              spaceBetween={5}
                              modules={[Navigation]}
                              navigation={true}
                              className="productSliderThumbs h-[500px] overflow-hidden"
                              initialSlide={selectedIndex}
                              slideToClickedSlide={true}
                         >
                              {images.map((image, index) => (
                                   <SwiperSlide key={index}>
                                        <div
                                             className={`item group cursor-pointer overflow-hidden rounded-md ${index === selectedIndex ? "opacity-1" : "opacity-30"}`}
                                             onClick={() => goto(index)}
                                        >
                                             <img
                                                  src={image}
                                                  alt={`slide-${index}`}
                                                  className="w-full transition-all group-hover:!scale-105"
                                             />
                                        </div>
                                   </SwiperSlide>
                              ))}
                         </Swiper>
                    </div>
               </div>
          </>
     );
};
export default VerticalImageSlider;
