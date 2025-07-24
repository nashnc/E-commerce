import { Button } from "@mui/material";
import React, { useContext } from "react";
import { RiMenu2Line } from "react-icons/ri";
import Badge from "@mui/material/Badge";
import { FaRegBell } from "react-icons/fa";
import "./Header.css";
import HeaderAccountMenu from "./HeaderAccountMenu";
import { MyContext } from "../../App"; // Update this line
import { Link } from "react-router-dom";

const Header = () => {
  const context = useContext(MyContext);

  // Fix the typo in the onClick handler
  const handleSidebarToggle = () =>
    context.setSideBarIsOpen(!context.sideBarIsOpen);

  // ... rest of the code

  return (
    <>
      <header
        className={`flex h-auto w-full items-center justify-between bg-[#fff] py-3 transition-all duration-[1s] ${context.sideBarIsOpen ? "pl-[19%]" : "pl-[5%]"} pr-10 shadow-md`}
      >
        <div className="part1">
          <Button
            onClick={handleSidebarToggle}
            className="!h-[40px] !w-[40px] !min-w-[40px] !rounded-full !text-[rgba(0,0,0,0.8)]"
          >
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
            {context.isLogin === true ? (
              <HeaderAccountMenu />
            ) : (
              <>
                <Button
                  component={Link}
                  to="/login"
                  className="btn-blue btn-sm"
                >
                  Login
                </Button>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
