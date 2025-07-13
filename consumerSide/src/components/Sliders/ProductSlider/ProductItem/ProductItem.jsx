import { MyContext } from "../../../../App";
import ProductItemRating from "../ProductItemRating";
import "./ProductItem.css";
import { Button } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import React, { useContext } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
import { MdZoomOutMap } from "react-icons/md";
import { Link } from "react-router-dom";

const ProductItem = () => {
  const context = useContext(MyContext);
  return (
    <>
      <div className="productItem overflow-hidden rounded-md border border-[rgba(0,0,0,0.1)] hover:border-collapse hover:shadow-lg">
        <div className="imageWrapper group relative w-full overflow-hidden">
          <Link to="/">
            <div className="img h-[250px]">
              <img
                src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/SEPTEMBER/10/Owx6YEiu_f1d55af95a664a39994cff27278626da.jpg"
                alt=""
                className=""
              />
              <img
                src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/SEPTEMBER/10/UkFOeMEV_999febf338594d70a9110aaf390289f5.jpg"
                alt=""
                className="absolute top-0 w-full opacity-0 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
              />
            </div>
          </Link>
          <span className="discount absolute left-[10px] top-[10px] z-50 flex items-center rounded-lg bg-primary p-1 text-[12px] font-[500] text-white">
            10%
          </span>
          <div className="actions absolute right-[5px] top-[-2000px] z-50 flex w-[50px] flex-col items-center gap-2 transition-all duration-500 group-hover:top-[15px]">
            <Tooltip title="Favorite " placement="left">
              <Button className="!h-[35px] !w-[35px] !min-w-[35px] !rounded-full !bg-white hover:!bg-primary">
                <FaRegHeart className="btnHover text-[18px]" />
              </Button>
            </Tooltip>
            <Tooltip title="Compare " placement="left">
              <Button className="!h-[35px] !w-[35px] !min-w-[35px] !rounded-full !bg-white hover:!bg-primary">
                <IoGitCompareOutline className="btnHover text-[18px]" />
              </Button>
            </Tooltip>
            <Tooltip title="Zoom " placement="left">
              <Button
                onClick={() => context.setOpenProductDetailsModal(true)}
                className="  !h-[35px] !w-[35px]  !min-w-[35px] !rounded-full !bg-white hover:!bg-primary"
              >
                <MdZoomOutMap className="btnHover text-[18px]" />
              </Button>
            </Tooltip>
          </div>
        </div>
        <div className="info p-3 py-4">
          <Link to="/" className="link">
            <h6 className=" font-[400] text-[13px]"> Deel band</h6>
          </Link>
          <h3 className="title mb-1 mt-2 text-[16px] font-[500]">
            <Link to="/" className="link">
              Deel Band Women Rayon Embroidered Kurta Pant Dupatta Set
            </Link>
          </h3>
          <ProductItemRating score="2" sizeOf="small" />

          <div className="flex items-center gap-4">
            <span className="oldPrice text-[14px] font-[400] text-[rgba(0,0,0,0.5)] line-through">
              $58.00
            </span>
            <span className="newPrice text-[14px] font-[600] text-[#ff5252]">
              $58.00
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
