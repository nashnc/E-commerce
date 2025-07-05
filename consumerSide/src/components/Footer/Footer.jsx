import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturn } from "react-icons/pi";
import { BsWallet2 } from "react-icons/bs";
import { LiaGiftSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import Part1 from "./Part1";
import Part2 from "./Part2";
import Part3 from "./Part3";

const Footer = () => {
  return (
    <footer className="bg-[#f1f1f1] py-6">
      <div className="container">
        <div className="flex items-center justify-evenly py-8 pb-8">
          <div className="col group flex flex-col items-center justify-center text-black">
            <LiaShippingFastSolid className="text-[40px] transition-all duration-300 group-hover:-translate-y-1 group-hover:text-primary" />
            <h3 className="font-[600 mt-3] text-[16px]">Free Shipping</h3>
            <p className="text-[12px] font-[500]">For all Orders Over $100</p>
          </div>
          <div className="col group flex flex-col items-center justify-center text-black">
            <PiKeyReturn className="text-[40px] transition-all duration-300 group-hover:-translate-y-1 group-hover:text-primary" />
            <h3 className="font-[600 mt-3] text-[16px]">30 Days Returns</h3>
            <p className="text-[12px] font-[500]">For an Exchange Product</p>
          </div>
          <div className="col group flex flex-col items-center justify-center text-black">
            <BsWallet2 className="text-[40px] transition-all duration-300 group-hover:-translate-y-1 group-hover:text-primary" />
            <h3 className="font-[600 mt-3] text-[16px]">Secured Payment</h3>
            <p className="text-[12px] font-[500]">Payment Cards Accepted</p>
          </div>
          <div className="col group flex flex-col items-center justify-center text-black">
            <LiaGiftSolid className="text-[40px] transition-all duration-300 group-hover:-translate-y-1 group-hover:text-primary" />
            <h3 className="font-[600 mt-3] text-[16px]">Special Gifts</h3>
            <p className="text-[12px] font-[500]">Our First Product Order</p>
          </div>
          <div className="col group flex flex-col items-center justify-center text-black">
            <BiSupport className="text-[40px] transition-all duration-300 group-hover:-translate-y-1 group-hover:text-primary" />
            <h3 className="font-[600 mt-3] text-[16px]">Support 24/7</h3>
            <p className="text-[12px] font-[500]">Contact us Anytime</p>
          </div>
        </div>
        <br />
        <hr />

        <div className="footer flex items-center py-12">
          <div className="part1 w-[25%] border-r border-[rgba[0,0,0,0.2]]">
            <Part1 />
          </div>
          <div className="part2 flex w-[40%] items-center pl-8">
            <Part2 />
          </div>
          <div className="part3 flex w-[35%] flex-col pr-8">
            <Part3 />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
