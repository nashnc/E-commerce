import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const BottomStrip = () => {
  return (
    <>
      <div className="container">
        <div className="flex items-center justify-between">
          <ul className="flex items-center gap-2">
            <li className="list-none">
              <Link
                to="/"
                target="blank"
                className="group flex h-[35px] w-[35px] items-center justify-center rounded-full border border-[rgba(0,0,0,0.2)] transition-all hover:bg-primary"
              >
                <FaFacebookF className="text-[15px] group-hover:text-white" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                target="blank"
                className="group flex h-[35px] w-[35px] items-center justify-center rounded-full border border-[rgba(0,0,0,0.2)] transition-all hover:bg-primary"
              >
                <AiOutlineYoutube className="text-[20px] group-hover:text-white" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                target="blank"
                className="group flex h-[35px] w-[35px] items-center justify-center rounded-full border border-[rgba(0,0,0,0.2)] transition-all hover:bg-primary"
              >
                <FaPinterestP className="text-[18px] group-hover:text-white" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                target="blank"
                className="group flex h-[35px] w-[35px] items-center justify-center rounded-full border border-[rgba(0,0,0,0.2)] transition-all hover:bg-primary"
              >
                <FaInstagram className="text-[18px] group-hover:text-white" />
              </Link>
            </li>
          </ul>
          <p className="mb-0 text-center text-[13px]">
            © 2024 - Ecommerce Template
          </p>
          <div className="flex items-center">
            <img src="/carte_bleue.png" alt="" />
            <img src="/visa.png" alt="" />
            <img src="/master_card.png" alt="" />
            <img src="/american_express.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomStrip;
