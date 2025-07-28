import { Button } from "@mui/material";
import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import Tooltip from "@mui/material/Tooltip";

import { Link } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import { BsEye } from "react-icons/bs";
import { PiTrashDuotone } from "react-icons/pi";
import Pagination from "@mui/material/Pagination";
const HomeBannersTable = () => {
  const [openHomePageBanner, setOpenHomePageBanner] = useState(null);

  const showHomePageBanners = (index) => {
    if (openHomePageBanner === index) {
      setOpenHomePageBanner(null);
    } else {
      setOpenHomePageBanner(index);
    }
  };
  const [categoryFilterValue, setCategoryFilterValue] = useState();
  const handleChangeFilterValue = (event) => {
    setCategoryFilterValue(event.target.value);
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const image =
    "https://api.spicezgold.com/download/file_1734525014348_NewProject(7).jpg";
  return (
    <>
      <div className="dashBoardTable mt-4 rounded-md bg-white pb-3 shadow-md">
        <div className="px-5 py-5">
          <h3 className="text-[20px] font-[600]">Home Banner Slider</h3>
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
                      Banner
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
                    <div className="flex w-[450px] items-center gap-4">
                      <div className="img group overflow-hidden rounded-md leading-5 hover:text-primary">
                        <img
                          src={image}
                          alt=""
                          component={Link}
                          to="/product/165"
                          className="transition-all group-hover:scale-105"
                        />
                      </div>
                    </div>
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
export default HomeBannersTable;
