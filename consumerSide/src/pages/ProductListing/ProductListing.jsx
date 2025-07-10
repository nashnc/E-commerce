import React, { useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import BreadCrumbs from "../../components/SideBar/BreadCrumbs";
import ProductItem from "../../components/Sliders/ProductSlider/ProductItem/ProductItem";
import ProductItemListView from "../../components/Sliders/ProductSlider/ProductItemListView/ProductItemListView";
import { Button } from "@mui/material";
import { IoGridSharp } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import ProductsSortBy from "../../components/ProdutscSortBy/ProductsSortBy";

import "./ProductListing.css";
import ProductPagination from "../../components/ProductPagination/ProductPagination";

const ProductListing = () => {
     const [isItemView, setIsItemView] = useState("grid");
     console.log(isItemView);
     return (
          <>
               <section className="py-5 pb-0">
                    <div className="container">
                         <BreadCrumbs />
                    </div>
                    <div className="mt-4 bg-white p-2">
                         <div className="container flex gap-3">
                              <div className="sidebarWrapper h-full w-[20%] bg-white p-3">
                                   <SideBar />
                              </div>

                              <div className="rightContent w-[80%] py-3">
                                   <div className="mb-3 flex w-full items-center justify-between rounded-md bg-[#f1f1f1] p-2">
                                        <div className="col1 itemViewAction flex items-center gap-3">
                                             <Button
                                                  onClick={() =>
                                                       setIsItemView("list")
                                                  }
                                                  className={`${isItemView === "list" && "active"} !h-[40px] !w-[40px] !min-w-[40px] !rounded-full !text-[rgba(0,0,0,0.5)] hover:!text-primary`}
                                             >
                                                  <LuMenu />
                                             </Button>
                                             <Button
                                                  onClick={() =>
                                                       setIsItemView("grid")
                                                  }
                                                  className={`${isItemView === "grid" && "active"} !h-[40px] !w-[40px] !min-w-[40px] !rounded-full !text-[rgba(0,0,0,0.5)] hover:!text-primary`}
                                             >
                                                  <IoGridSharp />
                                             </Button>
                                             <p className="text-[14px] font-[500] text-[rgba(0,0,0,0.7)]">
                                                  There are 32 products.
                                             </p>
                                        </div>
                                        <div className="col2 ml-auto flex items-center justify-end gap-3 pr-4">
                                             <p className="text-[14px] font-[500] text-[rgba(0,0,0,0.7)]">
                                                  Sort By
                                             </p>
                                             <ProductsSortBy />
                                        </div>
                                   </div>

                                   <div
                                        className={`grid gap-4 ${isItemView === "grid" ? "grid-cols-2 gap-4 lg:grid-cols-4" : "grid-cols-1"}`}
                                   >
                                        {isItemView === "grid" ? (
                                             <>
                                                  <ProductItem />
                                                  <ProductItem />
                                                  <ProductItem />
                                                  <ProductItem />
                                                  <ProductItem />
                                                  <ProductItem />
                                                  <ProductItem />
                                                  <ProductItem />
                                                  <ProductItem />
                                                  <ProductItem />
                                             </>
                                        ) : (
                                             <>
                                                  <ProductItemListView />
                                                  <ProductItemListView />
                                                  <ProductItemListView />
                                                  <ProductItemListView />
                                                  <ProductItemListView />
                                                  <ProductItemListView />
                                                  <ProductItemListView />
                                             </>
                                        )}
                                   </div>
                                   <div className="mt-10 flex items-center justify-center">
                                        <ProductPagination />
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
          </>
     );
};

export default ProductListing;
