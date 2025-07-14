import { Button } from "@mui/material";
import CartItem from "./CartItem";
import "./CartSlide.css";
import Drawer from "@mui/material/Drawer";
import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import CartBottomInfo from "./CartBottomInfo";

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

        <div className="">
          <CartBottomInfo />
        </div>
      </Drawer>
    </>
  );
};

export default CartSlide;
