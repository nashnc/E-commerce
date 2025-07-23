import { Button } from "@mui/material";
import React from "react";
import { FaPlus } from "react-icons/fa6";

const DashBoardWelcome = () => {
  return (
    <>
      <section>
        <div className="borer-[rgba(0,0,0,0.1)] mb-5 flex w-full items-center justify-between gap-8 rounded-md border bg-white px-5 py-2 shadow-sm">
          <div className="info">
            <h1 className="mb-3 flex items-center text-[35px] font-bold leading-9">
              Good Morning,
              <br />
              MERN Dev. <span className="text-[45px]">👋</span>
            </h1>
            <p>
              Here’s What happening on your store today. See the statistics at
              once.
            </p>
            <br />
            <Button className="btn-blue gap-3 !capitalize">
              <FaPlus />
              <p className="mb-0"> Add Product</p>
            </Button>
          </div>
          <img src="/shop-illustration.png" alt="" className="w-[250px]" />
        </div>
      </section>
    </>
  );
};

export default DashBoardWelcome;
