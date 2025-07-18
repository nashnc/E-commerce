import { MyContext } from "../../App";
import Search from "../Search/Search";
import Navigation from "./Navigation/Navigation";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { useContext } from "react";
import { IoCartOutline } from "react-icons/io5";
import { IoGitCompareOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import UserButton from "./UserButton/UserButton";

const Header = () => {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));
  const context = useContext(MyContext);
  return (
    <>
      <header className="bg-white">
        <div className="top-strip border-y-[1px] border-gray-200 py-2">
          <div className="container">
            <div className="flex items-center justify-between">
              <div className="col1 w-[50%]">
                <p className="text-[12px] font-[500]">
                  Get up to 50% off new season styles, limited time only
                </p>
              </div>
              <div className="col2 flex items-center justify-end">
                <ul className="flex items-center gap-2">
                  <li className="list-none">
                    <Link
                      to="/help-center"
                      className="link text-[13px] font-[500] transition"
                    >
                      Help Center
                    </Link>
                    <Link
                      to="/order-tracking"
                      className="link text-[13px] font-[500] transition"
                    >
                      Order Tracking
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="header border-b-[1px] border-gray-200 py-4">
          <div className="container flex items-center justify-between">
            <div className="col1 w-[25%]">
              <Link to={"/"}>
                <img src="/logo.jpg" alt="logo" />
              </Link>
            </div>
            <div className="col2 w-[40%]">
              <Search />
            </div>
            <div className="col3 w-[35%] pl-7">
              <ul className="flex w-full items-center justify-end gap-3 text-[16px]">
                {context.isLogin === false ? (
                  <li className="list-none">
                    <Link to="/login" className="link font-[500] transition">
                      Login
                    </Link>
                    /{"  "}
                    <Link to="/register" className="link font-[500] transition">
                      Signup
                    </Link>
                  </li>
                ) : (
                  <div className="userButton">
                    <UserButton />
                  </div>
                )}

                <>
                  <li>
                    <Tooltip title="Compare" placement="bottom">
                      <IconButton aria-label="compare">
                        <StyledBadge badgeContent={4} color="secondary">
                          <IoGitCompareOutline />
                        </StyledBadge>
                      </IconButton>
                    </Tooltip>
                  </li>

                  <li>
                    <Tooltip title="Cart" placement="bottom">
                      <IconButton
                        onClick={() => context.setOpenCartSlide(true)}
                        aria-label="cart"
                      >
                        <StyledBadge badgeContent={4} color="secondary">
                          <IoCartOutline />
                        </StyledBadge>
                      </IconButton>
                    </Tooltip>
                  </li>
                  <li>
                    <Tooltip title="Favorite" placement="bottom">
                      <IconButton aria-label="favorite">
                        <StyledBadge badgeContent={4} color="secondary">
                          <IoHeartOutline />
                        </StyledBadge>
                      </IconButton>
                    </Tooltip>
                  </li>
                </>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <Navigation />
        </div>
      </header>
    </>
  );
};

export default Header;
