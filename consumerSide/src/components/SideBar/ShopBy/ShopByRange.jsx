import React from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import "../SideBar.css";

const ShopByRange = () => {
     return (
          <>
               <div className="w-[90%]">
                    <h3 className="items relative mb-5 flex w-full items-center justify-between pb-2 text-[16px] font-[600]">
                         Filter By Price
                    </h3>
                    <RangeSlider />

                    <div className="priceRange mt-2 flex pb-2 pt-2">
                         <span>
                              From
                              <strong className="text-dark text-[14px]">
                                   Rs: {100}
                              </strong>
                         </span>
                         <span className="ml-auto">
                              From
                              <strong className="text-dark text-[14px]">
                                   Rs: {5000}
                              </strong>
                         </span>
                    </div>
               </div>
          </>
     );
};

export default ShopByRange;
