import { Link } from "react-router-dom";
import Search from "../Search/Search";
import Badge from "@mui/material/Badge";

import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { IoCartOutline } from "react-icons/io5";
import { IoGitCompareOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import Tooltip from "@mui/material/Tooltip";

const Header = () => {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  return (
    <>
      <header>
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
        <div className="header py-3">
          <div className="container flex items-center justify-between">
            <div className="col1 w-[25%]">
              <Link to={"/"}>
                {" "}
                <img src="/logo.jpg" alt="logo" />
              </Link>
            </div>
            <div className="col2 w-[45%]">
              <Search />
            </div>
            <div className="col3 w-[30%] pl-7">
              <ul className="flex w-full items-center justify-end gap-3 text-[16px]">
                <li className="list-none">
                  <Link to="/login" className="link font-[500] transition">
                    Login
                  </Link>{" "}
                  /{"  "}
                  <Link to="/register" className="link font-[500] transition">
                    Signup
                  </Link>
                </li>

                <li>
                  {" "}
                  <Tooltip title="Compare" placement="bottom">
                    <IconButton aria-label="compare">
                      <StyledBadge badgeContent={4} color="secondary">
                        <IoGitCompareOutline />
                      </StyledBadge>
                    </IconButton>
                  </Tooltip>
                </li>

                <li>
                  {" "}
                  <Tooltip title="Cart" placement="bottom">
                    <IconButton aria-label="cart">
                      <StyledBadge badgeContent={4} color="secondary">
                        <IoCartOutline />
                      </StyledBadge>
                    </IconButton>
                  </Tooltip>
                </li>
                <li>
                  {" "}
                  <Tooltip title="Favorite" placement="bottom">
                    <IconButton aria-label="favorite">
                      <StyledBadge badgeContent={4} color="secondary">
                        <IoHeartOutline />
                      </StyledBadge>
                    </IconButton>
                  </Tooltip>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
