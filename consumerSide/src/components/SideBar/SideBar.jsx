import React, { useState } from "react";
import "./SideBar.css";
import ShopByCategory from "./ShopByCategory";
import { Collapse } from "react-collapse";
import { Button } from "@mui/material";
import { FaAngleUp } from "react-icons/fa";

const SideBar = () => {
  const [isOpenCategoryState, setIsOpenCategoryState] = useState(false);
  const [isOpenAvailState, setIsOpenAvailState] = useState(false);
  return (
    <>
      <aside className="sideBar py-5">
        <div className="box">
          <h3 className="relative mb-3 flex w-full items-center text-[16px] font-[600]">
            Shop By Category
            <Button
              className="absolute left-10 ml-auto !h-[30px] !w-[30px] !min-w-[30px] !rounded-full !text-[16px] !text-black hover:!text-primary"
              onClick={() => setIsOpenCategoryState(!isOpenCategoryState)}
            >
              {isOpenCategoryState === true ? (
                <FaAngleUp className="rotate-0 transition-all duration-300" />
              ) : (
                <FaAngleUp className="-rotate-180 transition-all duration-300" />
              )}
            </Button>
          </h3>
          <Collapse isOpened={isOpenCategoryState}>
            <div className="scroll relative -left-[10px] px-4 text-[13px]">
              <ShopByCategory />
            </div>
          </Collapse>
        </div>
        <div className="box">
          <h3 className="relative mb-3 flex w-full items-center text-[16px] font-[600]">
            Shop By Category
            <Button
              className="absolute left-10 ml-auto !h-[30px] !w-[30px] !min-w-[30px] !rounded-full !text-[16px] !text-black hover:!text-primary"
              onClick={() => setIsOpenAvailState(!isOpenAvailState)}
            >
              {isOpenAvailState === true ? (
                <FaAngleUp className="rotate-0 transition-all duration-300" />
              ) : (
                <FaAngleUp className="-rotate-180 transition-all duration-300" />
              )}
            </Button>
          </h3>
          <Collapse isOpened={isOpenAvailState}>
            <div className="scroll relative -left-[10px] px-4 text-[13px]">
              <ShopByCategory />
            </div>
          </Collapse>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
