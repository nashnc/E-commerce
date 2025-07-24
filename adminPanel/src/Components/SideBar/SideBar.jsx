import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineCategory } from "react-icons/md";
import { GiBoxUnpacking } from "react-icons/gi";
import { GiBoxTrap } from "react-icons/gi";
import { LuLogOut } from "react-icons/lu";
import { LuUsersRound } from "react-icons/lu";
import { TfiLayoutMediaCenterAlt } from "react-icons/tfi";
import { Collapse } from "react-collapse";
import { FaAngleDown } from "react-icons/fa6";
import { MyContext } from "../../App"; // Update this l

const SideBar = () => {
  const context = useContext(MyContext);

  const [openMenu, setOpenMenu] = useState(null);

  const showMenus = (index) => {
    if (context.sideBarIsOpen) {
      if (openMenu === index) {
        setOpenMenu(null);
      } else {
        setOpenMenu(index);
      }
    }
  };

  const image = [
    "https://ecme-react.themenate.net/img/logo/logo-light-full.png",
  ];

  return (
    <>
      <div
        className={`sidebar fixed left-0 top-0 h-full transition-all duration-[1s] ${context.sideBarIsOpen ? "w-[18%]" : "w-[4%] overflow-hidden"} border-r border-[rgba(0,0,0,0.1)] bg-[#fff] px-4 py-2`}
      >
        <div className="w-full py-2 pl-2">
          <Link to={"/"}>
            <img
              src={image}
              alt=""
              className="w-[140px] min-w-[140px] object-cover"
            />
          </Link>
        </div>
        <ul>
          <li>
            <Button
              component={Link}
              to="/"
              className="flex !w-full !justify-start gap-3 !py-2 !text-[14px] !font-[600] !capitalize !text-[rgba(0,0,0,0.8)] hover:!bg-[#ccc]"
            >
              <LuLayoutDashboard className="!min-w-[40px] items-center !text-[20px] !font-[500]" />
              <p>Dashboard</p>
            </Button>
          </li>
          <li>
            <Button
              onClick={() => showMenus(0)}
              className="flex !w-full !justify-start gap-3 !py-2 !text-[14px] !font-[600] !capitalize !text-[rgba(0,0,0,0.8)] hover:!bg-[#ccc]"
            >
              <TfiLayoutMediaCenterAlt className="!min-w-[40px] items-center !text-[20px] !font-[500]" />
              <p>Home Slider</p>
              <div className="ml-auto flex h-[40px] w-[40px] min-w-[40px] items-center justify-center">
                <FaAngleDown
                  className={`${openMenu === 0 ? "-rotate-180 transition-all duration-[500ms]" : "rotate-0 transition-all duration-[500ms]"}`}
                />
              </div>
            </Button>
            <Collapse isOpened={openMenu === 0}>
              <ul className="w-full">
                <li className="w-full">
                  <Button className="!w-full !justify-start gap-3 !pl-9 !text-[14px] !font-[500] !capitalize !text-[rgba(0,0,0,0.7)]">
                    <div className="flex h-[12px] w-[12px] items-center justify-center rounded-full bg-[rgba(0,0,0,0.1)]">
                      <div className="block h-[6px] w-[6px] rounded-full bg-[rgba(0,0,0,0.3)]"></div>
                    </div>
                    Home Banner List
                  </Button>
                </li>
                <li className="w-full">
                  <Button className="!w-full !justify-start gap-3 !pl-9 !text-[14px] !font-[500] !capitalize !text-[rgba(0,0,0,0.7)]">
                    <div className="flex h-[12px] w-[12px] items-center justify-center rounded-full bg-[rgba(0,0,0,0.1)]">
                      <div className="block h-[6px] w-[6px] rounded-full bg-[rgba(0,0,0,0.3)]"></div>
                    </div>
                    Add Home Banner Slide
                  </Button>
                </li>
              </ul>
            </Collapse>
          </li>
          <li>
            <Button
              component={Link}
              to="/users"
              className="flex !w-full !justify-start gap-3 !py-2 !text-[14px] !font-[600] !capitalize !text-[rgba(0,0,0,0.8)] hover:!bg-[#ccc]"
            >
              <LuUsersRound className="!min-w-[40px] items-center !text-[20px] !font-[500]" />
              <p>Users</p>
            </Button>
          </li>
          <li>
            <Button
              onClick={() => showMenus(1)}
              className="flex !w-full !justify-start gap-3 !py-2 !text-[14px] !font-[600] !capitalize !text-[rgba(0,0,0,0.8)] hover:!bg-[#ccc]"
            >
              <GiBoxUnpacking className="!min-w-[40px] items-center !text-[20px] !font-[500]" />
              <p>Products</p>
              <div className="ml-auto flex h-[40px] w-[40px] min-w-[40px] items-center justify-center">
                <FaAngleDown
                  className={`${openMenu === 1 ? "-rotate-180 transition-all duration-[500ms]" : "rotate-0 transition-all duration-[500ms]"}`}
                />
              </div>
            </Button>
            <Collapse isOpened={openMenu === 1}>
              <ul className="w-full">
                <li className="w-full">
                  <Button
                    component={Link}
                    to="/product"
                    className="!w-full !justify-start gap-3 !pl-9 !text-[14px] !font-[500] !capitalize !text-[rgba(0,0,0,0.7)]"
                  >
                    <div className="flex h-[12px] w-[12px] items-center justify-center rounded-full bg-[rgba(0,0,0,0.1)]">
                      <div className="block h-[6px] w-[6px] rounded-full bg-[rgba(0,0,0,0.3)]"></div>
                    </div>
                    Products List
                  </Button>
                </li>
                <li className="w-full">
                  <Button
                    component={Link}
                    to="/product/new"
                    className="!w-full !justify-start gap-3 !pl-9 !text-[14px] !font-[500] !capitalize !text-[rgba(0,0,0,0.7)]"
                  >
                    <div className="flex h-[12px] w-[12px] items-center justify-center rounded-full bg-[rgba(0,0,0,0.1)]">
                      <div className="block h-[6px] w-[6px] rounded-full bg-[rgba(0,0,0,0.3)]"></div>
                    </div>
                    Add New Product
                  </Button>
                </li>
              </ul>
            </Collapse>
          </li>
          <li>
            <Button
              onClick={() => showMenus(2)}
              className="flex !w-full !justify-start gap-3 !py-2 !text-[14px] !font-[600] !capitalize !text-[rgba(0,0,0,0.8)] hover:!bg-[#ccc]"
            >
              <MdOutlineCategory className="!min-w-[40px] items-center !text-[20px] !font-[500]" />
              <p>Categories</p>
              <div className="ml-auto flex h-[40px] w-[40px] min-w-[40px] items-center justify-center">
                <FaAngleDown
                  className={`${openMenu === 2 ? "-rotate-180 transition-all duration-[500ms]" : "rotate-0 transition-all duration-[500ms]"}`}
                />
              </div>
            </Button>
            <Collapse isOpened={openMenu === 2}>
              <ul className="w-full">
                <li className="w-full">
                  <Button
                    component={Link}
                    to="/category"
                    className="!w-full !justify-start gap-3 !pl-9 !text-[14px] !font-[500] !capitalize !text-[rgba(0,0,0,0.7)]"
                  >
                    <div className="flex h-[12px] w-[12px] items-center justify-center rounded-full bg-[rgba(0,0,0,0.1)]">
                      <div className="block h-[6px] w-[6px] rounded-full bg-[rgba(0,0,0,0.3)]"></div>
                    </div>
                    Categories List
                  </Button>
                </li>
                <li className="w-full">
                  <Button
                    component={Link}
                    to="/category/new"
                    className="!w-full !justify-start gap-3 !pl-9 !text-[14px] !font-[500] !capitalize !text-[rgba(0,0,0,0.7)]"
                  >
                    <div className="flex h-[12px] w-[12px] items-center justify-center rounded-full bg-[rgba(0,0,0,0.1)]">
                      <div className="block h-[6px] w-[6px] rounded-full bg-[rgba(0,0,0,0.3)]"></div>
                    </div>
                    Add New Category
                  </Button>
                </li>
                <li className="w-full">
                  <Button
                    component={Link}
                    to="/subcategory"
                    className="!w-full !justify-start gap-3 !pl-9 !text-[14px] !font-[500] !capitalize !text-[rgba(0,0,0,0.7)]"
                  >
                    <div className="flex h-[12px] w-[12px] items-center justify-center rounded-full bg-[rgba(0,0,0,0.1)]">
                      <div className="block h-[6px] w-[6px] rounded-full bg-[rgba(0,0,0,0.3)]"></div>
                    </div>
                    Subcategories List
                  </Button>
                </li>
                <li className="w-full">
                  <Button
                    component={Link}
                    to="/subcategory/new"
                    className="!w-full !justify-start gap-3 !pl-9 !text-[14px] !font-[500] !capitalize !text-[rgba(0,0,0,0.7)]"
                  >
                    <div className="flex h-[12px] w-[12px] items-center justify-center rounded-full bg-[rgba(0,0,0,0.1)]">
                      <div className="block h-[6px] w-[6px] rounded-full bg-[rgba(0,0,0,0.3)]"></div>
                    </div>
                    Add New Subcategory
                  </Button>
                </li>
              </ul>
            </Collapse>
          </li>
          <li>
            <Button className="flex !w-full !justify-start gap-3 !py-2 !text-[14px] !font-[600] !capitalize !text-[rgba(0,0,0,0.8)] hover:!bg-[#ccc]">
              <GiBoxTrap className="!min-w-[40px] items-center !text-[20px] !font-[500]" />
              <p>Orders</p>
            </Button>
          </li>
          <li>
            <Button className="flex !w-full !justify-start gap-3 !py-2 !text-[14px] !font-[600] !capitalize !text-[rgba(0,0,0,0.8)] hover:!bg-[#ccc]">
              <LuLogOut className="!min-w-[40px] items-center !text-[20px] !font-[500]" />
              <p>Logout</p>
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
