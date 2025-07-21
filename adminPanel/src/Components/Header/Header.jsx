import { Button } from "@mui/material";
import React from "react";
import { RiMenu2Line } from "react-icons/ri";
import Badge from "@mui/material/Badge";
import { FaRegBell } from "react-icons/fa";
import "./Header.css";
import HeaderAccountMenu from "./HeaderAccountMenu";
const Header = () => {
  const image = [
    "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/aa/aab6771e4833fbc103aad66947080737c4be0278_full.jpg",
  ];
  return (
    <>
      <header className="h-autp flex w-full items-center justify-between bg-[#f1f1f1] py-3 pl-[19%] pr-10 shadow-md">
        <div className="part1">
          <Button className="!h-[40px] !w-[40px] !min-w-[40px] !rounded-full !text-[rgba(0,0,0,0.8)]">
            <RiMenu2Line className="text-[20px] text-[rgba(0,0,0,0.8)]" />
          </Button>
        </div>
        <div className="part2 flex w-[40%] items-center justify-end gap-5">
          <Badge
            badgeContent={4}
            className="warning text-[20px] text-[rgba(0,0,0,0.8)]"
          >
            <FaRegBell />
          </Badge>
          <div className="accountMenu">
            <HeaderAccountMenu />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
