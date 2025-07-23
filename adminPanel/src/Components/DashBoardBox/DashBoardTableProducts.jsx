import { Button } from "@mui/material";
import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import Select from "@mui/material/Select";
import { TbFileExport } from "react-icons/tb";
import { Link } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import ProgressBar from "../ProgressBar/ProgressBar";
import { BsEye } from "react-icons/bs";
import { PiTrashDuotone } from "react-icons/pi";
import Pagination from "@mui/material/Pagination";
import { FaPlus } from "react-icons/fa6";

const DashBoardTableProducts = () => {
  const [openOrderProduct, setOpenOrderProduct] = useState(null);

  const showOrderProducts = (index) => {
    if (openOrderProduct === index) {
      setOpenOrderProduct(null);
    } else {
      setOpenOrderProduct(index);
    }
  };
  const [categoryFilterValue, setCategoryFilterValue] = useState();
  const handleChangeFilterValue = (event) => {
    setCategoryFilterValue(event.target.value);
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const image = [
    "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/33399100/2025/4/5/6478af3f-ce1a-469e-ae8c-bb88adac1f241743850680594-House-of-Pataudi-Chevron-Embroidered-Straight-Kurta-22417438-1.jpg",
  ];
  return (
    <>
      <div className="dashBoardTable mt-4 rounded-md bg-white pb-3 shadow-md">
        <div className="px-5 py-5">
          <h3 className="text-[20px] font-[600]">Products</h3>
        </div>
        <div className="mb-3 flex w-full items-center justify-between pl-6 pr-5">
          <div className="col w-[20%]">
            <h4 className="text-[14px] font-[500]">Category By</h4>
            <Select
              labelId="demo-simple-select-helper-label"
              className="w-full"
              size="small"
              id="demo-simple-select-helper"
              value={categoryFilterValue}
              label="Category By"
              onChange={handleChangeFilterValue}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Men</MenuItem>
              <MenuItem value={20}>Woman</MenuItem>
              <MenuItem value={30}>Kids</MenuItem>
            </Select>
          </div>

          <div className="col ml-auto flex w-[20%] items-center gap-3">
            <Button className="btn-green btn-sm gap-3 !capitalize">
              <TbFileExport />

              <p>Export</p>
            </Button>
            <Button className="btn-blue btn-sm gap-3 !capitalize">
              <FaPlus />
              <p> Add Product</p>
            </Button>
          </div>
        </div>

        <>
          <div className="overflow-x-auto">
            <table className="w-full min-w-max text-left">
              <thead className="text-[16px]">
                <tr>
                  <th className="border-b border-primary bg-[#f1f1f1] p-4">
                    <p className="block bg-[#f1f1f1] font-normal leading-none text-black">
                      <Checkbox {...label} size="small" />
                    </p>
                  </th>
                  <th className="border-b border-primary bg-[#f1f1f1] p-4">
                    <p className="block bg-[#f1f1f1] font-normal leading-none text-black">
                      Product
                    </p>
                  </th>
                  <th className="border-b border-primary bg-[#f1f1f1] p-4">
                    <p className="block bg-[#f1f1f1] font-normal leading-none text-black">
                      Category
                    </p>
                  </th>
                  <th className="border-b border-primary bg-[#f1f1f1] p-4">
                    <p className="block bg-[#f1f1f1] font-normal leading-none text-black">
                      Subcategory
                    </p>
                  </th>

                  <th className="border-b border-primary bg-[#f1f1f1] p-4">
                    <p className="block bg-[#f1f1f1] font-normal leading-none text-black">
                      Price
                    </p>
                  </th>
                  <th className="border-b border-primary bg-[#f1f1f1] p-4">
                    <p className="block bg-[#f1f1f1] font-normal leading-none text-black">
                      Sales
                    </p>
                  </th>
                  <th className="border-b border-primary bg-[#f1f1f1] p-4">
                    <p className="block bg-[#f1f1f1] font-normal leading-none text-black">
                      Action
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody className="text-[14px]">
                <tr className="hover:bg-primary/10">
                  <td className="border-b border-slate-200 p-4">
                    <p className="block text-[rgba(0,0,0,0.7)]">
                      <Checkbox {...label} size="small" />
                    </p>
                  </td>
                  <td className="border-b border-slate-200 p-4 text-[rgba(0,0,0,0.5)]">
                    <div className="flex w-[350px] items-center gap-4">
                      <div className="img group h-[50px] w-[50px] overflow-hidden rounded-md leading-5 hover:text-primary">
                        <img
                          src={image}
                          alt=""
                          component={Link}
                          to="/product/165"
                          className="transition-all group-hover:scale-105"
                        />
                      </div>
                      <div className="info w-[75%]">
                        <Link to="/products/4569">
                          <h3 className="text-[14px] font-[600]">
                            Men Turtle Neck Pullover Sweaters
                          </h3>
                        </Link>
                        <p className="text-[12 px]"> RARE RABBIT</p>
                      </div>
                    </div>
                  </td>
                  <td className="border-b border-slate-200 p-4">
                    <p className="block text-[rgba(0,0,0,0.7)]">Clothes</p>
                  </td>
                  <td className="border-b border-slate-200 p-4">
                    <p className="block text-[rgba(0,0,0,0.7)]">Men</p>
                  </td>

                  <td className="border-b border-slate-200 p-4">
                    <p className="block text-[rgba(0,0,0,0.7)]">
                      <div className="">
                        <p className="mt-2 flex flex-col items-start gap-2">
                          <span className="newPrice text-[14px] font-[600] text-primary">
                            $58.00
                          </span>
                          <span className="oldPrice text-[14px] font-[400] text-[rgba(0,0,0,0.5)] line-through">
                            $58.00
                          </span>
                        </p>
                      </div>
                    </p>
                  </td>

                  <td className="border-b border-slate-200 p-4">
                    <p className="block text-[14px] text-[rgba(0,0,0,0.7)]">
                      <span className="font-[600]">223 </span> Sales
                    </p>
                    <ProgressBar fillBy="55.4" status="good" />
                  </td>

                  <td className="border-b border-slate-200 p-4">
                    <div className="actionIcons flex items-center justify-evenly gap-3">
                      <p className="block">
                        <div className="flex !h-[40px] !w-[40px] !min-w-[40px] items-center gap-4 overflow-hidden rounded-md border border-[[rgba(0,0,0,0.1)]]">
                          <Tooltip title="Edit">
                            <Button className="!h-[40px] !w-[40px] !min-w-[40px] rounded-md">
                              <CiEdit className="text-[40px] !text-[rgba(0,0,0,0.7)]" />
                            </Button>
                          </Tooltip>
                        </div>
                      </p>
                      <p className="block">
                        <div className="flex !h-[40px] !w-[40px] !min-w-[40px] items-center gap-4 overflow-hidden rounded-md border border-[[rgba(0,0,0,0.1)]]">
                          <Tooltip title="View">
                            <Button className="!h-[40px] !w-[40px] !min-w-[40px] rounded-md">
                              <BsEye className="text-[40px] !text-[rgba(0,0,0,0.7)]" />
                            </Button>
                          </Tooltip>
                        </div>
                      </p>
                      <p className="block">
                        <div className="flex !h-[40px] !w-[40px] !min-w-[40px] items-center gap-4 overflow-hidden rounded-md border border-[[rgba(0,0,0,0.1)]]">
                          <Tooltip title="Delete">
                            <Button className="!h-[40px] !w-[40px] !min-w-[40px] rounded-md">
                              <PiTrashDuotone className="text-[40px] !text-[rgba(0,0,0,0.7)]" />
                            </Button>
                          </Tooltip>
                        </div>
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
        <div className="mt-5 flex w-full items-center justify-center bg-white">
          <Pagination count={10} />
        </div>
      </div>
    </>
  );
};

export default DashBoardTableProducts;
