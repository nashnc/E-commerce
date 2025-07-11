import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

//css
import "./HomeSliderV2.css";
import { Button } from "@mui/material";

const HomeSliderV2 = () => {
     return (
          <>
               <Swiper
                    autoplay={{
                         delay: 2500,
                         disableOnInteraction: false,
                    }}
                    loop={true}
                    spaceBetween={30}
                    effect={"fade"}
                    navigation={true}
                    pagination={{
                         clickable: true,
                    }}
                    modules={[EffectFade, Navigation, Pagination, Autoplay]}
                    className="homeSliderV2 overflow-hidden text-black"
               >
                    <SwiperSlide>
                         <div className="item relative w-full overflow-hidden rounded-md">
                              <img
                                   className="w-full"
                                   src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_imageslider/views/img/sample-1.jpg "
                              />
                              <div className="info absolute -right-[100%] top-0 z-50 flex h-[100%] w-[50%] flex-col items-center justify-center p-8 opacity-0 transition-all duration-700">
                                   <h4 className="relative -right-[100%] mb-3 w-full text-left text-[18px] font-[500] opacity-0">
                                        Big Saving Days Sale
                                   </h4>
                                   <h2 className="relative -right-[100%] w-full text-left text-[35px] font-[700] opacity-0">
                                        Women Solid Round <br /> Green T-Shirt
                                   </h2>
                                   <h3 className="relative -right-[100%] mb-3 mt-3 flex w-full items-center gap-3 text-left text-[18px] font-[500] opacity-0">
                                        Starting At Only
                                        <span className="text-[30px] font-[600] text-primary">
                                             $59.00
                                        </span>
                                   </h3>
                                   <div className="btn relative -bottom-[100%] w-full opacity-0">
                                        <Button className="btn-orange">
                                             SHOP NOW
                                        </Button>
                                   </div>
                              </div>
                         </div>
                    </SwiperSlide>
                    <SwiperSlide>
                         <div className="item flex w-full items-center overflow-hidden rounded-md">
                              <img
                                   className="w-full"
                                   src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_imageslider/views/img/sample-2.jpg"
                              />
                              <div className="info absolute -right-[100%] top-0 z-50 flex h-[100%] w-[50%] flex-col items-center justify-center p-8 opacity-0 transition-all duration-700">
                                   <h4 className="relative -right-[100%] mb-3 w-full text-left text-[18px] font-[500] opacity-0">
                                        Big Saving Days Sale
                                   </h4>
                                   <h2 className="relative -right-[100%] w-full text-left text-[35px] font-[700] opacity-0">
                                        Buy Modern Chair In <br /> Black Color
                                   </h2>
                                   <h3 className="relative -right-[100%] mb-3 mt-3 flex w-full items-center gap-3 text-left text-[18px] font-[500] opacity-0">
                                        Starting At Only
                                        <span className="text-[30px] font-[600] text-primary">
                                             $99.00
                                        </span>
                                   </h3>
                                   <div className="btn relative -bottom-[100%] w-full opacity-0">
                                        <Button className="btn-orange">
                                             SHOP NOW
                                        </Button>
                                   </div>
                              </div>
                         </div>
                    </SwiperSlide>
               </Swiper>
          </>
     );
};
export default HomeSliderV2;
