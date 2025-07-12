import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import ProductContent from "../components/ProductDetailsSub/ProductContent/ProductContent";
import ProductZoom from "../components/ProductDetailsSub/ProductZoom/ProductZoom";
import React from "react";

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
                         <div className="productContentContainer w-[60%]">
                              <ProductContent />
                         </div>
                    </div>
               </section>
          </>
     );
};

export default ProductDetails;
