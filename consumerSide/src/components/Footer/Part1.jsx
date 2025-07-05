import React from "react";
import { Link } from "react-router-dom";
import { PiChats } from "react-icons/pi";
const Part1 = () => {
  return (
    <>
      <h2 className="mb-4 text-[18px] font-[600]">Contact Us</h2>
      <p className="pb-4 text-[14px] font-[400]">
        Classyshop - Mega Super Store <br /> 507-Union Trade Centre France
      </p>
      <Link to="mailto:sales@yourcompany.com" className="link text-[13px]">
        sales@yourcompany.com
      </Link>
      <span className="mb-5 mt-3 block w-full text-[22px] font-[600] text-primary">
        (+91) 9876-543-210
      </span>
      <div className="flex items-center gap-3">
        <PiChats className="text-[40px] text-primary" />
        <span className="text-[18px] font-[600]">
          Online Chat <br /> Get Expert Help
        </span>
      </div>
    </>
  );
};

export default Part1;
