import React from "react";
import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";

const CartItem = () => {
  const image = [
    "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/19080432/2025/2/15/14f72abe-fd4f-4f0a-aedd-c479e15ac57c1739615244475-HIGHLANDER-Men-Blue-Slim-Fit-Printed-Casual-Shirt-5517396152-4.jpg",
  ];
  return (
    <>
      <div className="cartItem border-[rgba(0,0,0,0.1 )] flex w-full items-center border-b pb-3">
        <div className="img h-[80px] w-[25%] overflow-hidden rounded-md">
          <Link to="/product/655  " className="group">
            <img src={image} alt="" className="w-full group-hover:scale-105" />
          </Link>
        </div>
        <div className="info relative w-[75%] pl-5">
          <h4>
            <Link to="/product/3465" className="link text-[16px] font-[500]">
              HIGHLANDER
            </Link>
          </h4>
          <p className="mb-2 mt-2 flex items-center gap-5">
            <span>
              Qty : <span>3</span>
            </span>
            <span className="font-bold text-primary">
              Price : <span>$25.00</span>
            </span>
          </p>
          <MdDeleteOutline className="link absolute right-[10px] top-[10px] cursor-pointer text-[20px] transition-all hover:scale-150" />
        </div>
      </div>
    </>
  );
};

export default CartItem;
