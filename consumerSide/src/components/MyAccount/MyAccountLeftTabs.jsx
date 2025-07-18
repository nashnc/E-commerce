import React from "react";
import { Button } from "@mui/material";
import { FaRegUser } from "react-icons/fa6";
import { BsFillBagCheckFill } from "react-icons/bs";
import { IoHeart } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { NavLink } from "react-router";

const MyAccountLeftTabs = () => {
  return (
    <>
      <ul className="myAccountTabs list-none bg-[#f1f1f1] pb-5">
        <li className="w-full">
          <NavLink to="/myaccount " exact={true} activeClassName="isActive">
            <Button className="flex !w-full items-center !justify-start gap-2 !rounded-none !px-5 !py-3 !text-left !capitalize !text-[rgba(0,0,0,0.8)]">
              <FaRegUser className="text-[20px]" /> My Profile
            </Button>
          </NavLink>
        </li>
        <li className="w-full">
          <NavLink to="/mylist " exact={true} activeClassName="isActive">
            <Button className="flex !w-full items-center !justify-start gap-2 !rounded-none !px-5 !py-3 !text-left !capitalize !text-[rgba(0,0,0,0.8)]">
              <IoHeart className="text-[20px]" /> My List
            </Button>
          </NavLink>
        </li>
        <li className="w-full">
          <NavLink to="/myorders " exact={true} activeClassName="isActive">
            <Button className="flex !w-full items-center !justify-start gap-2 !rounded-none !px-5 !py-3 !text-left !capitalize !text-[rgba(0,0,0,0.8)]">
              <BsFillBagCheckFill className="text-[20px]" /> My Orders
            </Button>
          </NavLink>
        </li>
        <li className="w-full">
          <NavLink to="/logout " exact={true} activeClassName="isActive">
            <Button className="flex !w-full items-center !justify-start gap-2 !rounded-none !px-5 !py-3 !text-left !capitalize !text-[rgba(0,0,0,0.8)]">
              <IoIosLogOut className="text-[20px]" /> Logout
            </Button>
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default MyAccountLeftTabs;
