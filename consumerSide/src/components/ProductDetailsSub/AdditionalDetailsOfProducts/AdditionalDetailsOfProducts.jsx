import "./AdditionalDetailsOfProducts.css";
import AdditionalDetailsProductDescription from "./AdditionalDetailsProductDescription";
import AdditionalDetailsProductDetails from "./AdditionalDetailsProductDetails";
import AdditionalDetailsProductReview from "./AdditionalDetailsProductReview";
import React, { useState } from "react";

const AdditionalDetailsOfProducts = () => {
     const [activeTab, setActiveTab] = useState(0);

     return (
          <>
               <div className="flex items-center gap-10 mb-5 ">
                    <h3
                         onClick={() => setActiveTab(0)}
                         className={`link text-[18px] cursor-pointer font-[600] ${activeTab === 0 ? "text-primary" : ""}`}
                    >
                         Description
                    </h3>
                    <h3
                         onClick={() => setActiveTab(1)}
                         className={`link text-[18px] cursor-pointer font-[600] ${activeTab === 1 ? "text-primary" : ""}`}
                    >
                         Product Details
                    </h3>
                    <h3
                         onClick={() => setActiveTab(2)}
                         className={`link text-[18px] cursor-pointer font-[600] ${activeTab === 2 ? "text-primary" : ""}`}
                    >
                         Reviews (5)
                    </h3>
               </div>
               <div className="additionalProductsDetailTab">
                    {activeTab === 0 && <AdditionalDetailsProductDescription />}

                    {activeTab === 1 && <AdditionalDetailsProductDetails />}
                    {activeTab === 2 && <AdditionalDetailsProductReview />}
               </div>
          </>
     );
};

export default AdditionalDetailsOfProducts;
