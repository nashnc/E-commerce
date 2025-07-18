import React from "react";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FaRegUser } from "react-icons/fa6";
import { BsFillBagCheckFill } from "react-icons/bs";
import { IoHeart } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";

import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
const UserButtonMenu = (props) => {
  return (
    <Menu
      anchorEl={props.anchorEl}
      id="account-menu"
      open={props.open}
      onClose={props.handleClose}
      onClick={props.handleClose}
      slotProps={{
        paper: {
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <MenuItem
        component={Link}
        to="/myaccount"
        onClick={props.handleClose}
        className="flex gap-4 !py-3"
      >
        <FaRegUser className="text-[20px]" />
        <p className="mb-0 text-[14px]">My Account</p>
      </MenuItem>
      <MenuItem
        component={Link}
        to="/myorders"
        onClick={props.handleClose}
        className="gap-4 !py-3"
      >
        <BsFillBagCheckFill className="text-[20px]" />
        <p className="mb-0 text-[14px]">Orders</p>
      </MenuItem>
      <MenuItem
        component={Link}
        to="/mylist"
        onClick={props.handleClose}
        className="gap-4 !py-3"
      >
        <IoHeart className="text-[20px]" />
        <p className="mb-0 text-[14px]">My List</p>
      </MenuItem>
      <MenuItem
        component={Link}
        to="/logout"
        onClick={props.handleClose}
        className="gap-4 !py-3"
      >
        <IoIosLogOut className="text-[20px]" />
        <p className="mb-0 text-[14px]">Logout</p>
      </MenuItem>
    </Menu>
  );
};
export default UserButtonMenu;
