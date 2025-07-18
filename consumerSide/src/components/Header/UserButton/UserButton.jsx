import { Button } from "@mui/material";
import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa6";
import UserButtonMenu from "./UserButtonMenu";

const UserButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="myAccountWrap flex cursor-pointer items-center gap-3">
        <Button
          onClick={handleClick}
          className="thumbnail !h-[50px] !w-[50px] !min-w-[50px] !rounded-full !bg-[#f1f1f1]"
        >
          <FaRegUser className="text-[20px] text-[rgba(0,0,0,0.7)]" />
        </Button>
        <div className="info flex-col">
          <h4 className="mb-0 text-[14px]">MERN Dev</h4>
          <p className="mb-0 text-[13px] font-[400]">
            mernProject@testmail.com
          </p>
        </div>
        <UserButtonMenu
          handleClose={handleClose}
          open={open}
          anchorEl={anchorEl}
        />
      </div>
    </>
  );
};

export default UserButton;
