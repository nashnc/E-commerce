import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const CartBottomInfo = () => {
  return (
    <>
      <div className="bottomSection absolute bottom-[10px] w-full p-5">
        <div className="bottomInfo border-[rgba(0,0,0,0.1 )] flex w-full flex-col items-center justify-between border-t px-4 py-3">
          <div className="flex w-full items-center justify-between">
            <p className="text-[14px] font-[600]">2 item </p>
            <p className="font-bold text-primary">$106.00</p>
          </div>
          <div className="flex w-full items-center justify-between">
            <p className="text-[14px] font-[600]">Shipping</p>
            <p className="font-bold text-primary">$16.00</p>
          </div>
        </div>{" "}
        <div className="bottomInfo border-[rgba(0,0,0,0.1 )] flex w-full flex-col items-center justify-between border-t px-4 py-3">
          <div className="flex w-full items-center justify-between">
            <p className="text-[14px] font-[600]">Total (tax excl.) </p>
            <p className="font-bold text-primary">$136.00</p>
          </div>
        </div>{" "}
        <div className="flex w-full items-center justify-between gap-5">
          <Button
            component={Link}
            to="/cart"
            className="btn-orange btn-lg w-[50%]"
          >
            View Cart
          </Button>
          <Button
            component={Link}
            to="/checkout"
            className="btn-orange btn-lg w-[50%]"
          >
            CheckOut
          </Button>
        </div>
      </div>
    </>
  );
};

export default CartBottomInfo;
