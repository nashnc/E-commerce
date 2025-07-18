import React from "react";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import ProductItemRating from "../Sliders/ProductSlider/ProductItemRating";
import CartLeftMenu from "./CartLeftMenu";
const CartLeftSectionCartItem = () => {
  const image = [
    "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/33399100/2025/4/5/6478af3f-ce1a-469e-ae8c-bb88adac1f241743850680594-House-of-Pataudi-Chevron-Embroidered-Straight-Kurta-22417438-1.jpg",
  ];
  return (
    <>
      <div className="cartItem flex w-full items-center gap-4 p-3">
        <div className="img group w-[15%] overflow-hidden rounded-md">
          <img
            src={image}
            alt=""
            component={Link}
            to="/product/165"
            className="transition-all group-hover:scale-105"
          />
        </div>
        <div className="info relative w-[85%]">
          <IoCloseSharp className="absolute right-[0px] top-[0px] cursor-pointer text-[22px]" />
          <p className="text-[13px]">House of Pataudi </p>
          <h3 component={Link} to="/product/165" className="link text-[16px]">
            Chevron Embroidered Straight Kurta
          </h3>
          <ProductItemRating score="4" />
          <CartLeftMenu />
          <div className="mt-2 flex items-center gap-4">
            <span className="newPrice text-[14px] font-[600] text-[#ff5252]">
              $58.00
            </span>
            <span className="oldPrice text-[14px] font-[400] text-[rgba(0,0,0,0.5)] line-through">
              $58.00
            </span>
            <span className="newPrice text-[14px] text-[#ff5252]">55% OFF</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartLeftSectionCartItem;
