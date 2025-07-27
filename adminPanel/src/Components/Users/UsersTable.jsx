import React, { useState } from "react";

import Checkbox from "@mui/material/Checkbox";
import Pagination from "@mui/material/Pagination";
import SearchBox from "../SearchBox/SearchBox";

const UsersTable = () => {
  const [openOrderProduct, setOpenOrderProduct] = useState(null);

  const showOrderProducts = (index) => {
    if (openOrderProduct === index) {
      setOpenOrderProduct(null);
    } else {
      setOpenOrderProduct(index);
    }
  };
 

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const image =
    "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/e2/e284d4873225fa438ab6a79c61a650623267096f_full.jpg";
  return (
    <>
      <div className="dashBoardTable mt-4 rounded-md bg-white pb-3 shadow-md">
        <div className="flex items-center justify-between px-5 py-5">
          <h3 className="text-[20px] font-[600]">Users </h3>
          <div className="col mb-3 ml-auto mt-0 flex w-[20%] items-center gap-3">
            <SearchBox />
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
                      User Image
                    </p>
                  </th>
                  <th className="border-b border-primary bg-[#f1f1f1] p-4">
                    <p className="block bg-[#f1f1f1] font-normal leading-none text-black">
                      User Name
                    </p>
                  </th>
                  <th className="border-b border-primary bg-[#f1f1f1] p-4">
                    <p className="block bg-[#f1f1f1] font-normal leading-none text-black">
                      User Email
                    </p>
                  </th>

                  <th className="border-b border-primary bg-[#f1f1f1] p-4">
                    <p className="block bg-[#f1f1f1] font-normal leading-none text-black">
                      User Mobile
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
                    <div className="flex w-[200px] items-center gap-4">
                      <div className="img group h-[80px] w-[80px] overflow-hidden rounded-md leading-5 hover:text-primary">
                        <img
                          src={image}
                          alt=""
                          className="transition-all group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="border-b border-slate-200 p-4">
                    <p className="block text-[rgba(0,0,0,0.7)]">MERN Dev</p>
                  </td>
                  <td className="border-b border-slate-200 p-4">
                    <p className="block text-[rgba(0,0,0,0.7)]">
                      mernDev@mernmail.com
                    </p>
                  </td>

                  <td className="border-b border-slate-200 p-4">
                    <p className="block text-[rgba(0,0,0,0.7)]">
                      <div className="">
                        <p className="mt-2 flex flex-col items-start gap-2">
                          <span className="oldPrice text-[14px] font-[400] text-[rgba(0,0,0,0.5)]">
                            +91-7845129063
                          </span>
                        </p>
                      </div>
                    </p>
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

export default UsersTable;
