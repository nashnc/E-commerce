import React from "react";
import "./BannerBoxV2.css";
import { Link } from "react-router-dom";
const BannerBoxV2 = (props) => {
  return (
    <div className="bannerBoxV2 group relative w-full overflow-hidden rounded-md text-black">
      <img
        src={props.image}
        alt=""
        className="w-full transition-all duration-150 group-hover:scale-105"
      />
      <div
        className={`info absolute top-0 gap-3 ${props.info === "left" ? "left-0" : "right-0"} ${props.info === "left" ? "" : "pl-5"} item z-50 flex h-[100%] w-[50%] flex-col justify-center p-5`}
      >
        <h2 className="text-[20px] font-[600]">{props.title}</h2>
        <p className="w-full text-[25px] font-[600] text-primary">$129.00</p>
        <div className="w-full">
          <Link to="/" className="link text-[16px] font-[600] hover:underline">
            SHOP NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerBoxV2;
