import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import AdditionalDetailsOfProducts from "../components/ProductDetailsSub/AdditionalDetailsOfProducts/AdditionalDetailsOfProducts";
import ProductContent from "../components/ProductDetailsSub/ProductContent/ProductContent";
import ProductZoom from "../components/ProductDetailsSub/ProductZoom/ProductZoom";
import React from "react";
import ProductSlider from "../components/Sliders/ProductSlider/ProductSlider";

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
                    <div className="container   items-center  flex gap-4">
                         <div className="productZoomContainer h-[500px] w-[40%] overflow-hidden">
                              <ProductZoom />
                         </div>
                         <div className="productContentContainer pr-10 pl-10 w-[60%]">
                              <ProductContent />
                         </div>
                    </div>
                    <div className="container pt-10">
                         <AdditionalDetailsOfProducts />
                    </div>
                    <div className="container mt-5">
                         <h2 className="text-[20px] pb-0 font-[600]">
                              Related Products
                         </h2>

                         <ProductSlider items={6} />
                    </div>
               </section>
          </>
     );
};

export default ProductDetails;
