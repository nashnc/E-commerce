import { RiUploadCloudFill } from "react-icons/ri";
import React from "react";
import './MyAccountLeftTabs.css'

import MyAccountLeftTabs from "./MyAccountLeftTabs";

const MyAccountLeft = () => {
  const image = [
    "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/35/359b5aff41c5db2c41dbf59f9525806002354cfb_full.jpg",
  ];
  return (
    <>
      <div className="card rounded-md bg-white shadow-md">
        <div className="flex w-full flex-col items-center justify-center p-5">
          <div className="group relative mb-5 h-[110px] w-[110px] overflow-hidden rounded-full">
            <img src={image} alt="" className="h-full w-full object-cover" />
            <div className="overlay absolute left-0 top-0 z-50 flex h-full w-full cursor-pointer items-center justify-center bg-[rgba(0,0,0,0.7)] opacity-0 transition-all group-hover:opacity-100">
              <RiUploadCloudFill className="text-[25px] text-[#fff]" />
              <input
                type="file"
                className="absolute left-0 top-0 h-full w-full opacity-0"
              />
            </div>
          </div>
          <div className="info flex flex-col items-center justify-center">
            <h2 className="mb-0 text-[14px]">MERN Dev</h2>
            <p className="mb-0 text-[13px] font-[400]">
              mernProject@testmail.com
            </p>
          </div>
        </div>
        <MyAccountLeftTabs />
      </div>
    </>
  );
};

export default MyAccountLeft;
