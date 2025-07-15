import React from "react";
import CartLeftSectionCartItem from "./CartLeftSectionCartItem";

const CartLeftSection = () => {
  return (
    <>
    <div className="py-2 px-3 border-b border-[rgba(0,0,0,0.2)]"></div>
      <div className="rounded-md border-b border-[rgba(0,0,0,0.2)] bg-white pb-5 shadow-md">
        <CartLeftSectionCartItem />
      </div>
  
    </>
  );
};

export default CartLeftSection;
