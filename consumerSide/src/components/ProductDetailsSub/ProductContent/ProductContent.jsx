import QuantityBox from "../../QuanitiyBox/QuantityBox";
import ProductItemRating from "../../Sliders/ProductSlider/ProductItemRating";
import "./ProductContent.css";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { IoGitCompareOutline } from "react-icons/io5";

const ProductContent = () => {
  const [productActionIndex, setProductActionIndex] = useState("null");

  return (
    <>
      <div className="productContent">
        <div className="pl-4">
          <h3 className="mb-2 text-[25px] font-[600] text-black">
            The Indian Garage Co
          </h3>
          <div className="flex items-center gap-3">
            <p className="text-[13px] opacity-75">
              Brands :
              <span className="font-[500] text-black">
                Men Collarless Solid Cotton Casual Gilet Jacket
              </span>
            </p>
            <ProductItemRating score="3" sizeOf="small" />

            <p className="cursor-pointer select-none text-[13px]">
              Reviews (5)
            </p>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <span className="oldPrice text-[20px] font-[400] text-[rgba(0,0,0,0.5)] line-through">
              ₹2699
            </span>
            <span className="newPrice text-[20px] font-[600] text-[#ff5252]">
              ₹998
            </span>
            <p className="text-[14px]">
              Available In Stock:
              <span className="font-bold text-green-600">8486 Items</span>
            </p>
          </div>

          <p className="mb-5 mt-3 pr-10 text-[14px] leading-[25px]">
            Black casual jacket Collarless Gilet No sleeves Straight hemline
            Polyester lining Size & Fit The model (height 6') is wearing a size
            M Material & Care Cotton Machine Wash Specifications Sleeve Length
            Sleeveless Type Gilet Collar Collarless Length Regular Closure Zip
            Lining Fabric Polyester Number of Pockets 4 Hemline Straight Surface
            Styling Zip Detail Surface Styling Zip Detail Number of Items 1
            Package Contains 1 Jacket
          </p>
          <div className="sizeButtons">
            <div className="flex items-center">
              <p className="text-[16px]">Size: </p>
              <div className="actions flex items-center gap-1">
                <Button
                  className={` ${productActionIndex === 0 ? "!bg-primary !text-white" : "!text-black"}`}
                  onClick={() => setProductActionIndex(0)}
                >
                  S
                </Button>
                <Button
                  className={` ${productActionIndex === 1 ? "!bg-primary !text-white" : "!text-black"}`}
                  onClick={() => setProductActionIndex(1)}
                >
                  M
                </Button>
                <Button
                  className={` ${productActionIndex === 2 ? "!bg-primary !text-white" : "!text-black"}`}
                  onClick={() => setProductActionIndex(2)}
                >
                  L
                </Button>
                <Button
                  className={` ${productActionIndex === 3 ? "!bg-primary !text-white" : "!text-black"}`}
                  onClick={() => setProductActionIndex(3)}
                >
                  XL
                </Button>
              </div>
            </div>
          </div>
          <p className="text-[14px] mt-5 mb-2 text-[#000]  ">
            Free Shipping (Est. Delivery Time 2-3 Days)
          </p>
          <div className="quantityBoxWrapper flex items-center gap-4 mb-3 mt-4">
            <div className=" w-[80px] ">
              <QuantityBox />
            </div>
            <Button className="btn-orange  flex gap-2">
              <IoCartOutline className="text-[22px]" /> Add to Cart
            </Button>
          </div>

          <div className="flex items-center mt-4 gap-4 ">
            <p className="flex items-center text-[16px] font-[500] link cursor-pointer gap-3">
              <IoHeartOutline className="text-[20px]" />
              Add to Wishlist
            </p>
            <p className="flex items-center text-[16px] link font-[500] cursor-pointer gap-3">
              <IoGitCompareOutline className="text-[20px]" />
              Add to Compare
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductContent;
