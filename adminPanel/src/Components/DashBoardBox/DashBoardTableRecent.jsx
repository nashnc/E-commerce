import { Button, Pagination } from "@mui/material";
import React, { useState } from "react";
import { FaAngleUp } from "react-icons/fa";

import Badge from "../Badge/Badge";
import { Link } from "react-router-dom";

const DashBoardTableRecent = () => {
  const [openOrderProduct, setOpenOrderProduct] = useState(null);

  const showOrderProducts = (index) => {
    if (openOrderProduct === index) {
      setOpenOrderProduct(null);
    } else {
      setOpenOrderProduct(index);
    }
  };

  const image = [
    "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/33399100/2025/4/5/6478af3f-ce1a-469e-ae8c-bb88adac1f241743850680594-House-of-Pataudi-Chevron-Embroidered-Straight-Kurta-22417438-1.jpg",
  ];
  return (
    <>
      <div className="dashBoardTable mt-4 rounded-md bg-white pb-3 shadow-md">
        <div className="px-5 py-5">
          <h3 className="text-[20px] font-[600]">Recent Orders</h3>
        </div>

        <div className="mb-3 w-full overflow-x-auto">
          <table className="w-full table-auto text-left">
            <thead className="text-[16px]">
              <tr>
                <th className="border-b border-primary bg-[#f1f1f1] p-4">
                  <p className="block bg-[#f1f1f1] font-normal leading-none text-black">
                    &nbsp;
                  </p>
                </th>
                <th className="border-b border-primary bg-[#f1f1f1] p-4">
                  <p className="block bg-[#f1f1f1] font-normal leading-none text-black">
                    Order ID
                  </p>
                </th>
                <th className="border-b border-primary bg-[#f1f1f1] p-4">
                  <p className="block bg-[#f1f1f1] font-normal leading-none text-black">
                    Payment ID
                  </p>
                </th>
                <th className="border-b border-primary bg-[#f1f1f1] p-4">
                  <p className="block bg-[#f1f1f1] font-normal leading-none text-black">
                    Name
                  </p>
                </th>
                <th className="border-b border-primary bg-[#f1f1f1] p-4">
                  <p className="block bg-[#f1f1f1] font-normal leading-none text-black">
                    Mobile
                  </p>
                </th>
                <th className="border-b border-primary bg-[#f1f1f1] p-4">
                  <p className="block bg-[#f1f1f1] font-normal leading-none text-black">
                    Address
                  </p>
                </th>
                <th className="border-b border-primary bg-[#f1f1f1] p-4">
                  <p className="block bg-[#f1f1f1] font-normal leading-none text-black">
                    PIN Code
                  </p>
                </th>
                <th className="border-b border-primary bg-[#f1f1f1] p-4">
                  <p className="block bg-[#f1f1f1] font-normal leading-none text-black">
                    Total Amount
                  </p>
                </th>
                <th className="border-b border-primary bg-[#f1f1f1] p-4">
                  <p className="block bg-[#f1f1f1] font-normal leading-none text-black">
                    E mail
                  </p>
                </th>
                <th className="border-b border-primary bg-[#f1f1f1] p-4">
                  <p className="block bg-[#f1f1f1] font-normal leading-none text-black">
                    User ID
                  </p>
                </th>
                <th className="border-b border-primary bg-[#f1f1f1] p-4">
                  <p className="block bg-[#f1f1f1] font-normal leading-none text-black">
                    Order Status
                  </p>
                </th>
                <th className="border-b border-primary bg-[#f1f1f1] p-4">
                  <p className="block bg-[#f1f1f1] font-normal leading-none text-black">
                    Date
                  </p>
                </th>
              </tr>
            </thead>
            <tbody className="text-[14px]">
              <tr className="hover:bg-primary/10">
                <td className="border-b border-slate-200 p-4">
                  <p className="block text-[rgba(0,0,0,0.7)]">
                    <Button
                      className="absolute right-1/4 ml-auto !h-[40px] !w-[40px] !min-w-[40px] !rounded-full bg-[#f1f1f1] !text-[16px] font-[600] !text-black hover:!text-primary"
                      onClick={() => showOrderProducts(0)}
                    >
                      {openOrderProduct === 0 ? (
                        <FaAngleUp className="rotate-0 transition-all duration-[1s]" />
                      ) : (
                        <FaAngleUp className="-rotate-180 transition-all duration-[1s]" />
                      )}
                    </Button>
                  </p>
                </td>
                <td className="border-b border-slate-200 p-4">
                  <p className="block font-[600] text-primary">273848</p>
                </td>
                <td className="border-b border-slate-200 p-4 font-[400]">
                  <p className="block font-[600] text-primary">65423</p>
                </td>
                <td className="border-b border-slate-200 p-4">
                  <p className="block text-[rgba(0,0,0,0.7)]">John Michael</p>
                </td>
                <td className="border-b border-slate-200 p-4">
                  <p className="block text-[rgba(0,0,0,0.7)]">7894561230</p>
                </td>
                <td className="border-b border-slate-200 p-4">
                  <p className="block w-[300px] text-[rgba(0,0,0,0.7)]">
                    New York, USA
                  </p>
                </td>
                <td className="border-b border-slate-200 p-4">
                  <p className="block text-[rgba(0,0,0,0.7)]">65656</p>
                </td>
                <td className="border-b border-slate-200 p-4">
                  <p className="block text-[rgba(0,0,0,0.7)]">$12.23</p>
                </td>
                <td className="border-b border-slate-200 p-4">
                  <p className="block text-[rgba(0,0,0,0.7)]">
                    john.michael@example.com
                  </p>
                </td>
                <td className="border-b border-slate-200 p-4">
                  <p className="block font-[600] text-primary">urb487gbwe</p>
                </td>
                <td className="border-b border-slate-200 p-4">
                  <p className="block text-[rgba(0,0,0,0.7)]">
                    <Badge titles="" status="pending" />
                  </p>
                </td>
                <td className="border-b border-slate-200 p-4">
                  <p className="block text-[rgba(0,0,0,0.7)]">
                    20/07/2025 @ 00:55
                  </p>
                </td>
              </tr>
              {openOrderProduct === 0 && (
                <tr>
                  <td className="bg-[#f1f1f1]" colSpan={6}>
                    <>
                      <table className="w-full table-auto bg-white text-left">
                        <thead className="text-[16px]">
                          <tr>
                            <th className="border-b border-primary bg-[#f1f1f1] p-4">
                              <p className="block bg-[#f1f1f1] font-normal leading-none text-black">
                                &nbsp;
                              </p>
                            </th>
                            <th className="border-b border-primary bg-[#f1f1f1] p-4">
                              <p className="block bg-[#f1f1f1] font-normal leading-none text-black">
                                Product ID
                              </p>
                            </th>
                            <th className="border-b border-primary bg-[#f1f1f1] p-4">
                              <p className="block bg-[#f1f1f1] font-normal leading-none text-black">
                                Product Title
                              </p>
                            </th>
                            <th className="border-b border-primary bg-[#f1f1f1] p-4">
                              <p className="block bg-[#f1f1f1] font-normal leading-none text-black">
                                Image
                              </p>
                            </th>
                            <th className="border-b border-primary bg-[#f1f1f1] p-4">
                              <p className="block bg-[#f1f1f1] font-normal leading-none text-black">
                                Quantity
                              </p>
                            </th>
                            <th className="border-b border-primary bg-[#f1f1f1] p-4">
                              <p className="block bg-[#f1f1f1] font-normal leading-none text-black">
                                Price
                              </p>
                            </th>
                            <th className="border-b border-primary bg-[#f1f1f1] p-4">
                              <p className="block bg-[#f1f1f1] font-normal leading-none text-black">
                                Sub Total
                              </p>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="text-[14px]">
                          <tr className="hover:bg-primary/10">
                            <td className="border-b border-slate-200 p-4">
                              <p className="block text-[rgba(0,0,0,0.7)]">
                                &nbsp;
                              </p>
                            </td>
                            <td className="border-b border-slate-200 p-4">
                              <p className="block font-[600] text-primary">
                                sdj7465zxbnf45
                              </p>
                            </td>
                            <td className="border-b border-slate-200 p-4">
                              <p className="block text-[rgba(0,0,0,0.7)]">
                                Kurtha Paijama
                              </p>
                            </td>
                            <td className="border-b border-slate-200 p-4">
                              <p className="block text-[rgba(0,0,0,0.7)]">
                                <div className="img group h-[50px] w-[50px] overflow-hidden rounded-md">
                                  <img
                                    src={image}
                                    alt=""
                                    component={Link}
                                    to="/product/165"
                                    className="transition-all group-hover:scale-105"
                                  />
                                </div>
                              </p>
                            </td>
                            <td className="border-b border-slate-200 p-4">
                              <p className="block text-[rgba(0,0,0,0.7)]">2</p>
                            </td>
                            <td className="border-b border-slate-200 p-4">
                              <p className="block w-[300px] text-[rgba(0,0,0,0.7)]">
                                $32.54
                              </p>
                            </td>

                            <td className="border-b border-slate-200 p-4">
                              <p className="block text-[rgba(0,0,0,0.7)]">
                                $12.23
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="mt-5 flex w-full items-center justify-center bg-white">
            <Pagination count={10} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoardTableRecent;
