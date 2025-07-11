import { Button } from "@mui/material";
import React, { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { GoRocket } from "react-icons/go";
import { Link } from "react-router-dom";
import CategoryPanel from "./CategoryPanel";

function Navigation() {
     const [isOpenCategoryPanel, setIsOpenCategoryPanel] = useState(false);

     const openCategoryPanel = () => {
          setIsOpenCategoryPanel(true);
     };

     return (
          <>
               <nav className=" ">
                    <div className="container flex items-center justify-end gap-8">
                         <div className="col_1 w-[20%]">
                              <Button
                                   className="w-full gap-2 !text-black"
                                   onClick={openCategoryPanel}
                              >
                                   <RiMenu2Fill className="text-[18px]" /> shop
                                   by categories
                                   <LiaAngleDownSolid className="ml-auto text-[13px] font-bold" />
                              </Button>
                         </div>
                         <div className="col_2 w-[60%] pl-2">
                              <ul className="nav flex items-center gap-3">
                                   <li className="list-none">
                                        <Link
                                             className="link text-[16px] font-[500] transition"
                                             to="/"
                                        >
                                             <Button className="link !py-4 !font-[500] !text-[rgba(0,0,0,0.7)] transition hover:!text-[#ff5252]">
                                                  Home
                                             </Button>
                                        </Link>
                                   </li>
                                   <li className="relative list-none">
                                        <Link
                                             className="link text-[16px] font-[500] transition"
                                             to="/"
                                        >
                                             <Button className="link !py-4 !font-[500] !text-[rgba(0,0,0,0.7)] transition hover:!text-[#ff5252]">
                                                  Fashion
                                             </Button>
                                        </Link>
                                        <div className="submenu min-w-[ 150px] absolute left-[0%] top-[120%] bg-white opacity-0 shadow-md transition-all">
                                             <ul>
                                                  <li className="relative w-full list-none">
                                                       <Link
                                                            to="/"
                                                            className="w-full"
                                                       >
                                                            <Button className="w-full !justify-start !rounded-none !text-left !text-[rgba(0,0,0,0.7)]">
                                                                 Men
                                                            </Button>
                                                            <div className="submenu min-w-[ 150px] absolute left-[0%] top-[100%] bg-white opacity-0 shadow-md transition-all">
                                                                 <ul>
                                                                      <li className="w-full list-none">
                                                                           <Link
                                                                                to="/"
                                                                                className="w-full"
                                                                           >
                                                                                <Button className="w-full !justify-start !rounded-none !text-left !text-[rgba(0,0,0,0.7)]">
                                                                                     T-Shirt
                                                                                </Button>
                                                                           </Link>
                                                                      </li>
                                                                      <li className="w-full list-none">
                                                                           <Link
                                                                                to="/"
                                                                                className="w-full"
                                                                           >
                                                                                <Button className="w-full !justify-start !rounded-none !text-left !text-[rgba(0,0,0,0.7)]">
                                                                                     Jeans
                                                                                </Button>
                                                                           </Link>
                                                                      </li>
                                                                      <li className="w-full list-none">
                                                                           <Link
                                                                                to="/"
                                                                                className="w-full"
                                                                           >
                                                                                <Button className="w-full !justify-start !rounded-none !text-left !text-[rgba(0,0,0,0.7)]">
                                                                                     Footwear
                                                                                </Button>
                                                                           </Link>
                                                                      </li>
                                                                      <li className="w-full list-none">
                                                                           <Link
                                                                                to="/"
                                                                                className="w-full"
                                                                           >
                                                                                <Button className="w-full !justify-start !rounded-none !text-left !text-[rgba(0,0,0,0.7)]">
                                                                                     Watch
                                                                                </Button>
                                                                           </Link>
                                                                      </li>
                                                                      <li className="w-full list-none">
                                                                           <Link
                                                                                to="/"
                                                                                className="w-full"
                                                                           >
                                                                                <Button className="w-full !justify-start !rounded-none !text-left !text-[rgba(0,0,0,0.7)]">
                                                                                     Pants
                                                                                </Button>
                                                                           </Link>
                                                                      </li>
                                                                 </ul>
                                                            </div>
                                                       </Link>
                                                  </li>
                                                  <li className="w-full list-none">
                                                       <Link
                                                            to="/"
                                                            className="w-full"
                                                       >
                                                            <Button className="w-full !justify-start !rounded-none !text-left !text-[rgba(0,0,0,0.7)]">
                                                                 Women
                                                            </Button>
                                                       </Link>
                                                  </li>
                                                  <li className="w-full list-none">
                                                       <Link
                                                            to="/"
                                                            className="w-full"
                                                       >
                                                            <Button className="w-full !justify-start !rounded-none !text-left !text-[rgba(0,0,0,0.7)]">
                                                                 Kids
                                                            </Button>
                                                       </Link>
                                                  </li>
                                                  <li className="w-full list-none">
                                                       <Link
                                                            to="/"
                                                            className="w-full"
                                                       >
                                                            <Button className="w-full !justify-start !rounded-none !text-left !text-[rgba(0,0,0,0.7)]">
                                                                 Girls
                                                            </Button>
                                                       </Link>
                                                  </li>
                                                  <li className="w-full list-none">
                                                       <Link
                                                            to="/"
                                                            className="w-full"
                                                       >
                                                            <Button className="w-full !justify-start !rounded-none !text-left !text-[rgba(0,0,0,0.7)]">
                                                                 Boys
                                                            </Button>
                                                       </Link>
                                                  </li>
                                             </ul>
                                        </div>
                                   </li>
                                   <li className="list-none">
                                        <Link
                                             to="/"
                                             className="link text-[16px] font-[500] transition"
                                        >
                                             <Button className="link !py-4 !font-[500] !text-[rgba(0,0,0,0.7)] transition hover:!text-[#ff5252]">
                                                  Electronics
                                             </Button>
                                        </Link>
                                   </li>
                                   <li className="list-none">
                                        <Link
                                             to="/"
                                             className="link text-[16px] font-[500] transition"
                                        >
                                             <Button className="link !py-4 !font-[500] !text-[rgba(0,0,0,0.7)] transition hover:!text-[#ff5252]">
                                                  Bags
                                             </Button>
                                        </Link>
                                   </li>
                                   <li className="list-none">
                                        <Link
                                             to="/"
                                             className="link text-[16px] font-[500] transition"
                                        >
                                             <Button className="link !py-4 !font-[500] !text-[rgba(0,0,0,0.7)] transition hover:!text-[#ff5252]">
                                                  Footwear
                                             </Button>
                                        </Link>
                                   </li>
                                   <li className="list-none">
                                        <Link
                                             to="/"
                                             className="link text-[16px] font-[500] transition"
                                        >
                                             <Button className="link !py-4 !font-[500] !text-[rgba(0,0,0,0.7)] transition hover:!text-[#ff5252]">
                                                  Groceries
                                             </Button>
                                        </Link>
                                   </li>
                                   <li className="list-none">
                                        <Link
                                             to="/"
                                             className="link text-[16px] font-[500] transition"
                                        >
                                             <Button className="link !py-4 !font-[500] !text-[rgba(0,0,0,0.7)] transition hover:!text-[#ff5252]">
                                                  Beauty
                                             </Button>
                                        </Link>
                                   </li>
                                   <li className="list-none">
                                        <Link
                                             to="/"
                                             className="link text-[16px] font-[500] transition"
                                        >
                                             <Button className="link !py-4 !font-[500] !text-[rgba(0,0,0,0.7)] transition hover:!text-[#ff5252]">
                                                  Wellness
                                             </Button>
                                        </Link>
                                   </li>
                                   <li className="list-none">
                                        <Link
                                             to="/"
                                             className="link text-[16px] font-[500] transition"
                                        >
                                             <Button className="link !py-4 !font-[500] !text-[rgba(0,0,0,0.7)] transition hover:!text-[#ff5252]">
                                                  Jewelry
                                             </Button>
                                        </Link>
                                   </li>
                              </ul>
                         </div>
                         <div className="col_3 w-[20%]">
                              <p className="mb-0 mt-0 flex items-center gap-3 text-[14px] font-[500]">
                                   <GoRocket className="text-[18px]" /> Free
                                   International Delivery
                              </p>
                         </div>
                    </div>
               </nav>

               {/* side pane drawer */}
               <CategoryPanel
                    isOpenCategoryPanel={isOpenCategoryPanel}
                    setIsOpenCategoryPanel={setIsOpenCategoryPanel}
               />
          </>
     );
}

export default Navigation;
