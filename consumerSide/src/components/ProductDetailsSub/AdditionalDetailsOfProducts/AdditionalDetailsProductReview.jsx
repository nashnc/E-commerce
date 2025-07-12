import ProductItemRating from "../../Sliders/ProductSlider/ProductItemRating";
import AdditionalDetailsOfProductsReviewTextField from "./AdditionalDetailsOfProductsReviewTextField";
import React from "react";

const AdditionalDetailsProductReview = () => {
     const image = [
          "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/35/359b5aff41c5db2c41dbf59f9525806002354cfb_full.jpg",
     ];
     return (
          <>
               <div className="shadow-md w-[80%] p-5  rounded-md">
                    <div className="productsReviewContainer w-full">
                         <h2 className="text-[18px]">
                              Customer questions & answers
                         </h2>
                         <div className="reviewScroll max-h-[300px] overflow-x-hidden mt-4 overflow-y-auto ">
                              <div className="review w-full pb-5 border-b border-[rgba(0,0,0,0.3)] flex items-center  justify-between">
                                   <div className="info w-[60%] flex items-center gap-3">
                                        <div className="img w-[80px] h-[80px] overflow-hidden  rounded-full">
                                             <img
                                                  src={image}
                                                  className="w-full"
                                             />
                                        </div>
                                        <div className="w-[80%]">
                                             <h4 className="text-[14px]">
                                                  Full Name
                                             </h4>
                                             <h5 className="text-[13px] mb-0">
                                                  12-07-2025
                                             </h5>
                                             <p className="mt-0">
                                                  Lorem ipsum dolor sit amet
                                                  consectetur, adipisicing elit.
                                                  Sunt, impedit ex ab facilis
                                                  assumenda commodi aspernatur
                                                  laboriosam voluptate, animi,
                                                  officiis tenetur quis
                                                  veritatis ea totam sint quas?
                                                  Maiores, eaque officia.
                                             </p>
                                        </div>
                                   </div>
                                   <div className="additionalProductsDetailsRating">
                                        <ProductItemRating
                                             score="2"
                                             sizeOf=""
                                        />
                                   </div>
                              </div>
                         </div>
                         <br />
                         <div className="reviewForm bg-#fafafa p-4 rounded-md">
                              <h2 className="text-[18px]">Add a review </h2>
                              <AdditionalDetailsOfProductsReviewTextField />
                         </div>
                    </div>
               </div>
          </>
     );
};

export default AdditionalDetailsProductReview;
