import { Button } from "@mui/material";
import React from "react";
import { BsFillBagCheckFill } from "react-icons/bs";
const CartRightSection = () => {
  return (
    <>
      <div className="rounded-md bg-white p-5 shadow-md">
        <h3 className="pb-3">Cart Total</h3>
        <hr />
        <p className="flex items-center justify-between pt-3">
          <span className="text-[14px] font-[500]">Subtotal</span>
          <span className="font-bold text-primary"> $13,300.00</span>
        </p>
        <p className="flex items-center justify-between pt-3">
          <span className="text-[14px] font-[500]">Shipping</span>
          <span className="font-bold text-black"> Free</span>
        </p>
        <p className="flex items-center justify-between pt-3">
          <span className="text-[14px] font-[500]">Estimate For</span>
          <span className="font-bold text-black">Idukky</span>
        </p>
        <p className="flex items-center justify-between pt-3">
          <span className="text-[14px] font-[500]">Total</span>
          <span className="font-bold text-primary"> $13,300.00</span>
        </p>
        <Button className="btn-orange btn-lg gpa-2 flex w-full">
          <BsFillBagCheckFill className="text-[20px]" /> Checkout
        </Button>
      </div>
    </>
  );
};

export default CartRightSection;
