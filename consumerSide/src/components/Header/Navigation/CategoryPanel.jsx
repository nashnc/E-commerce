import CategoryCollapse from "../../CategoryCollapse/CategoryCollapse";
import "./Navigation.css";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const CategoryPanel = (props) => {
  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      className="categoryPanel"
    >
      <h3 className="flex items-center justify-between p-3 text-[16px] font-[500]">
        Shop By Categories
        <IoCloseSharp
          className="cursor-pointer text-[20px]"
          onClick={() => props.setIsOpenCategoryPanel(false)}
        />
      </h3>
      <span></span>
      <CategoryCollapse />
    </Box>
  );

  return (
    <>
      <div>
        <Drawer
          open={props.isOpenCategoryPanel}
          onClose={() => props.setIsOpenCategoryPanel(false)}
        >
          {DrawerList}
        </Drawer>
      </div>
    </>
  );
};

export default CategoryPanel;
