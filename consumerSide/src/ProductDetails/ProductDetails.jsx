import React from "react";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import ProductZoom from "../components/ProductDetailsSub/ProductZoom/ProductZoom";
import ProductItemRating from "../components/Sliders/ProductSlider/ProductItemRating";

const ProductDetails = () => {
     const crumbs = [
          { title: "Home", path: "/" },
          { title: "Fashion", path: "/" },
          { title: "Padded Gilet Jacket", path: "" },
     ];

     return (
          <>
               <div className="py-5">
                    <div className="container">
                         <BreadCrumbs crumbs={crumbs} />
                    </div>
               </div>

               <section className="gap-5 bg-white py-5">
                    <div className="container flex gap-4">
                         <div className="productZoomContainer h-[500px] w-[40%] overflow-hidden">
                              <ProductZoom />
                         </div>
                         <div className="productContent w-[60%]">
                              <h3 className="mb-2 text-[22px] font-[600] text-black">
                                   The Indian Garage Co
                              </h3>
                              <div className="flex items-center gap-3">
                                   <p className="text-[13px] opacity-75">
                                        Brands :{" "}
                                        <span className="font-[500] text-black">
                                             Men Collarless Solid Cotton Casual
                                             Gilet Jacket
                                        </span>
                                   </p>
                                   <ProductItemRating />

                                   <p className="cursor-pointer select-none text-[13px]">
                                        Reviews (5)
                                   </p>
                              </div>
                              <div className="mt-4 flex items-center gap-4">
                                   <span className="oldPrice text-[18px] font-[400] text-[rgba(0,0,0,0.5)] line-through">
                                        ₹2699
                                   </span>
                                   <span className="newPrice text-[18px] font-[600] text-[#ff5252]">
                                        ₹998
                                   </span>
                              </div>
                              <br />
                              <p className="text-[14px] leading-[25px]">
                                   Black casual jacket Collarless Gilet No
                                   sleeves Straight hemline Polyester lining
                                   Size & Fit The model (height 6') is wearing a
                                   size M Material & Care Cotton Machine Wash
                                   Specifications Sleeve Length Sleeveless Type
                                   Gilet Collar Collarless Length Regular
                                   Closure Zip Lining Fabric Polyester Number of
                                   Pockets 4 Hemline Straight Surface Styling
                                   Zip Detail Surface Styling Zip Detail Number
                                   of Items 1 Package Contains 1 Jacket
                              </p>
                         </div>
                    </div>
               </section>
          </>
     );
};

export default ProductDetails;
