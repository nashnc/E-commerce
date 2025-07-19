import React from "react";
import CartLeftSectionCartItem from "./CartLeftSectionCartItem";

const CartLeftSection = () => {
  return (
    <>
      <div className="rounded-md border-b border-[rgba(0,0,0,0.2)] bg-white pb-5 shadow-md">
        <div className="border-b border-[rgba(0,0,0,0.2)] px-3 py-2">
          <h2>Your Cart</h2>
          <p className="mb-0 mt-0">
            There are <span className="font-bold text-primary"> 2 </span>
            products in your cart
          </p>
          <CartLeftSectionCartItem />
        </div>
      </div>
    </>
  );
};

export default CartLeftSection;
