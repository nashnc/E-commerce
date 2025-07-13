import { Button } from "@mui/material";
import CartItem from "./CartItem";
import "./CartSlide.css";
import Drawer from "@mui/material/Drawer";
import React from "react";
import { IoCloseSharp } from "react-icons/io5";

const CartSlide = (props) => {
  return (
    <>
      <Drawer
        open={props.open}
        anchor="right"
        onClose={props.toggleCart(false)}
        className="cartPanel"
      >
        <div className="border-[rgba(0,0,0,0.1 )] flex items-center justify-between gap-3 border-b px-4 py-3">
          <h4>Shopping Cart (1)</h4>
          <IoCloseSharp
            className="link cursor-pointer text-[20px] transition-all hover:scale-150"
            onClick={props.toggleCart(false)}
          />
        </div>
        <div className="cartScroll max-h-[300px] w-full overflow-y-auto overflow-x-hidden px-4 py-3">
          <CartItem />
        </div>

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
          <button></button>
          <div className="flex w-full items-center justify-between gap-5">
            <Button className="btn-orange btn-lg w-[50%]">View Cart</Button>
            <Button className="btn-orange btn-lg w-[50%]">CheckOut</Button>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default CartSlide;
