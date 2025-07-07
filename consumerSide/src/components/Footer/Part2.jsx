import React from "react";
import { Link } from "react-router-dom";

const Part2 = () => {
  return (
    <>
      <div className="part2_col1 w-[50%]">
        <h2 className="mb-4 text-[18px] font-[600]">Products</h2>
        <ul className="list">
          <li className="mb-2 w-full list-none text-[14px]">
            <Link to="/" className="link">
              Prices drop
            </Link>
          </li>
          <li className="mb-2 w-full list-none text-[14px]">
            <Link to="/" className="link">
              New products
            </Link>
          </li>
          <li className="mb-2 w-full list-none text-[14px]">
            <Link to="/" className="link">
              Best sales
            </Link>
          </li>
          <li className="mb-2 w-full list-none text-[14px]">
            <Link to="/" className="link">
              Contact us
            </Link>
          </li>
          <li className="mb-2 w-full list-none text-[14px]">
            <Link to="/" className="link">
              Sitemap
            </Link>
          </li>
          <li className="mb-2 w-full list-none text-[14px]">
            <Link to="/" className="link">
              Stores
            </Link>
          </li>
        </ul>
      </div>
      <div className="part2_col2 w-[50%]">
        <h2 className="mb-4 text-[18px] font-[600]">Our company</h2>
        <ul className="list">
          <li className="mb-2 w-full list-none text-[14px]">
            <Link to="/" className="link">
              Delivery
            </Link>
          </li>
          <li className="mb-2 w-full list-none text-[14px]">
            <Link to="/" className="link">
              Legal Notice
            </Link>
          </li>
          <li className="mb-2 w-full list-none text-[14px]">
            <Link to="/" className="link">
              Terms and conditions of use
            </Link>
          </li>
          <li className="mb-2 w-full list-none text-[14px]">
            <Link to="/" className="link">
              About us
            </Link>
          </li>
          <li className="mb-2 w-full list-none text-[14px]">
            <Link to="/" className="link">
              Secure payment
            </Link>
          </li>
          <li className="mb-2 w-full list-none text-[14px]">
            <Link to="/" className="link">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Part2;
