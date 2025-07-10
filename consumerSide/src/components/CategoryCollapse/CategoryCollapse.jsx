import React, { useState } from "react"; // useState is not used directly in CategoryPanel, so it can be removed from import
import Button from "@mui/material/Button";

import { FaRegSquarePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FiMinusSquare } from "react-icons/fi";

const CategoryCollapse = (props) => {
     const [subMenuIndex, setSubMenuIndex] = useState(null);
    
      const openSubmenu = (index) => {
        if (subMenuIndex === index) {
          setSubMenuIndex(null);
        } else {
          setSubMenuIndex(index);
        }
      };
      const [innerSubMenuIndex, setInnerSubMenuIndex] = useState(null);
    
      const openInnerSubmenu = (index) => {
        if (innerSubMenuIndex === index) {
          setInnerSubMenuIndex(null);
        } else {
          setInnerSubMenuIndex(index);
        }
      };
  return (
    <>
      <div className="scroll">
        <ul className="w-full">
          {/* Fashion */}
          <li className="relative flex list-none flex-col items-center">
            <Link to="/" className="w-full">
              <Button className="w-full !justify-start !px-3 !text-left !text-[rgba(0,0,0,0.7)]">
                Fashion
              </Button>
            </Link>
            {subMenuIndex === 0 ? (
              <FiMinusSquare
                className="absolute right-[15px] top-[10px] cursor-pointer"
                onClick={() => openSubmenu(0)}
              />
            ) : (
              <FaRegSquarePlus
                className="absolute right-[15px] top-[10px] cursor-pointer"
                onClick={() => openSubmenu(0)}
              />
            )}
            {subMenuIndex === 0 && (
              <ul className="submenu w-full pl-3">
                <li className="relative flex list-none flex-col items-center">
                  <Link to="/" className="w-full">
                    <Button className="w-full !justify-start !px-3 !text-left !text-[rgba(0,0,0,0.7)]">
                      apparel
                    </Button>
                  </Link>
                  {innerSubMenuIndex === 0 ? (
                    <FiMinusSquare
                      className="absolute right-[15px] top-[10px] cursor-pointer"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  ) : (
                    <FaRegSquarePlus
                      className="absolute right-[15px] top-[10px] cursor-pointer"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  )}
                  {innerSubMenuIndex === 0 && (
                    <ul className="inner_submenu w-full pl-3">
                      <li className="mb-1list-none items-center">
                        <Link
                          to="/"
                          className="link text-[14px]] w-full !justify-start !px-3 !text-left transition"
                        >
                          Smart Tablet
                        </Link>
                      </li>
                      <li className="mb-1list-none items-center">
                        <Link
                          to="/"
                          className="link text-[14px]] w-full !justify-start !px-3 !text-left transition"
                        >
                          Crepe T-Shirt
                        </Link>
                      </li>

                      <li className="mb-1list-none items-center">
                        <Link
                          to="/"
                          className="link text-[14px]] w-full !justify-start !px-3 !text-left transition"
                        >
                          leather watch
                        </Link>
                      </li>
                      <li className="mb-1list-none items-center">
                        <Link
                          to="/"
                          className="link text-[14px]] w-full !justify-start !px-3 !text-left transition"
                        >
                          Rolling Diamond
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
          {/* fashion */}
          {/* outerwear */}
          <li className="relative flex list-none flex-col items-center">
            <Link to="/" className="w-full">
              <Button className="w-full !justify-start !px-3 !text-left !text-[rgba(0,0,0,0.7)]">
                Outerwear
              </Button>
            </Link>
            {subMenuIndex === 1 ? (
              <FiMinusSquare
                className="absolute right-[15px] top-[10px] cursor-pointer"
                onClick={() => openSubmenu(1)}
              />
            ) : (
              <FaRegSquarePlus
                className="absolute right-[15px] top-[10px] cursor-pointer"
                onClick={() => openSubmenu(1)}
              />
            )}
            {subMenuIndex === 1 && (
              <ul className="submenu w-full pl-3">
                <li className="relative flex list-none flex-col items-center">
                  <Link to="/" className="w-full">
                    <Button className="w-full !justify-start !px-3 !text-left !text-[rgba(0,0,0,0.7)]">
                      apparel
                    </Button>
                  </Link>
                  {innerSubMenuIndex === 1 ? (
                    <FiMinusSquare
                      className="absolute right-[15px] top-[10px] cursor-pointer"
                      onClick={() => openInnerSubmenu(1)}
                    />
                  ) : (
                    <FaRegSquarePlus
                      className="absolute right-[15px] top-[10px] cursor-pointer"
                      onClick={() => openInnerSubmenu(1)}
                    />
                  )}
                  {innerSubMenuIndex === 1 && (
                    <ul className="inner_submenu w-full pl-3">
                      <li className="mb-1list-none items-center">
                        <Link
                          to="/"
                          className="link text-[14px]] w-full !justify-start !px-3 !text-left transition"
                        >
                          Smart Tablet
                        </Link>
                      </li>
                      <li className="mb-1list-none items-center">
                        <Link
                          to="/"
                          className="link text-[14px]] w-full !justify-start !px-3 !text-left transition"
                        >
                          Crepe T-Shirt
                        </Link>
                      </li>

                      <li className="mb-1list-none items-center">
                        <Link
                          to="/"
                          className="link text-[14px]] w-full !justify-start !px-3 !text-left transition"
                        >
                          leather watch
                        </Link>
                      </li>
                      <li className="mb-1list-none items-center">
                        <Link
                          to="/"
                          className="link text-[14px]] w-full !justify-start !px-3 !text-left transition"
                        >
                          Rolling Diamond
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
          {/* outerwear */}
        </ul>
      </div>
    </>
  );
};

export default CategoryCollapse;
