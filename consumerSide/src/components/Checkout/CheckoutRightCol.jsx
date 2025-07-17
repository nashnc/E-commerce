import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsFillBagCheckFill } from "react-icons/bs";

const CheckoutRightCol = () => {
  const image = [
    "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/33399100/2025/4/5/6478af3f-ce1a-469e-ae8c-bb88adac1f241743850680594-House-of-Pataudi-Chevron-Embroidered-Straight-Kurta-22417438-1.jpg",
  ];
  return (
    <>
      <div className="card rounded-md bg-white p-5 shadow-md">
        <h2 className="mb-4">Your Order</h2>
        <div>
          <p className="flex items-center justify-between border-y border-[rgba(0,0,0,0.1)] px-2 py-3">
            <span className="text-[14px] font-[600]">Product</span>
            <span className="text-[14px] font-[600]">Subtotal</span>
          </p>
        </div>
        <div className=".scroll mb-5 max-h-[250px] overflow-y-auto overflow-x-hidden pr-2">
          <div className="flex items-center justify-between py-2">
            <div className="part1 flex items-center gap-3">
              <div className="img h-[ ] group w-[50px] min-w-[50px] overflow-hidden rounded-md object-cover">
                <img
                  src={image}
                  alt=""
                  className="w-full cursor-pointer transition-all group-hover:scale-105"
                />
              </div>
              <div className="info">
                <h4 className="text-[14px]">Kurtha Paijama</h4>
                <p className="text-[13px] font-[400]">Qty : 1</p>
              </div>
            </div>
            <div className="part2 flex items-center gap-3">
              <div className="text-[14px] font-[500]">$123.456</div>
            </div>
          </div>
          <Button
            component={Link}
            to="/checkout"
            className="btn-orange btn-lg flex w-full gap-2"
          >
            <BsFillBagCheckFill className="text-[20px]" />
            CheckOut
          </Button>
        </div>
      </div>
    </>
  );
};

export default CheckoutRightCol;
