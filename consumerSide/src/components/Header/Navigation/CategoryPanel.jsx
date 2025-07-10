import React, { useState } from "react"; // useState is not used directly in CategoryPanel, so it can be removed from import
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

import { IoCloseSharp } from "react-icons/io5";
import { FaRegSquarePlus } from "react-icons/fa6";
import "./Navigation.css";
import { Link } from "react-router-dom";
import { FiMinusSquare } from "react-icons/fi";
import CategoryCollapse from "../../CategoryCollapse/CategoryCollapse";

const CategoryPanel = (props) => {
  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      className="categoryPanel"
      // onClick={() => props.setIsOpenCategoryPanel(false)}
    >
      <h3 className="flex items-center justify-between p-3 text-[16px] font-[500]">
        Shop By Categories
        <IoCloseSharp
          className="cursor-pointer text-[20px]"
          onClick={() => props.setIsOpenCategoryPanel(false)}
        />
      </h3>
      <span>
        {/* <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
      </span>
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
