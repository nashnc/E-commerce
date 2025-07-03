import React from "react";
import "./Search.css";
import Button from "@mui/material/Button";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <>
      <div className="searchBox relative h-[50px] w-[100%] rounded-[5px] bg-[#e5e5e5]">
        <input
          type="text"
          name=""
          id=" "
          placeholder="Search Products ..."
          className="h-[45px] w-full bg-inherit p-4 text-[15px] focus:outline-none"
        />
        <Button className="!absolute !right-[5px] !top-[5px] z-50 !h-[35px] !w-[35px] !min-w-[35px] !rounded-full !text-[#000]">
          <IoSearch className="text-[28px] text-[#3b3b3b]" />
        </Button>
      </div>
    </>
  );
};

export default Search;
