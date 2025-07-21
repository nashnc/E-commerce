import React, { Fragment, useState } from "react";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import { LuLogOut } from "react-icons/lu";

import { FaRegUser } from "react-icons/fa6";
const HeaderAccountMenu = () => {
  const image = [
    "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/aa/aab6771e4833fbc103aad66947080737c4be0278_full.jpg",
  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Fragment>
      <Tooltip title="Account">
        <div
          className="h-[40px] w-[40px] cursor-pointer overflow-hidden rounded-full"
          onClick={handleClick}
        >
          <img src={image} alt="" className="h-full w-full object-cover" />
        </div>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
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
        <MenuItem onClick={handleClose} className="bg-white">
          <div className="flex items-center gap-3">
            <div className="h-[40px] w-[40px] cursor-pointer overflow-hidden rounded-full">
              <img src={image} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="info">
              <h2 className="text-[16px] font-[500] leading-5">
                MERN Developer
              </h2>
              <p className="text-[14px] font-[400] opacity-70">
                mernDev@testmail.com
              </p>
            </div>
          </div>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose} className="gap-3 bg-white">
          <FaRegUser className="text-[18px]" />
          <p className="text-[14px]">Profile</p>
        </MenuItem>
        <MenuItem onClick={handleClose} className="gap-3 bg-white">
          <LuLogOut className="text-[18px]" />
          <p className="text-[14px]">Logout</p>
        </MenuItem>
      </Menu>
    </Fragment>
  );
};
export default HeaderAccountMenu;
