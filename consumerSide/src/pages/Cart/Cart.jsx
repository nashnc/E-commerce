import React from "react";
import CartLeftSection from "../../components/Cart/CartLeftSection";
import "./Cart.css";
import CartRightSection from "../../components/Cart/CartRightSection";
const Cart = () => {
  return (
    <div className="section py-10">
      <div className="left container">
        <div className="flex w-[80%] max-w-[80%] gap-5">
          <div className="leftPart w-[70%]">
            <CartLeftSection />
          </div>
          <div className="rightPart w-[30%]">
            <CartRightSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
