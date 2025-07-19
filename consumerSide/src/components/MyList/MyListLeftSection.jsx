import React from "react";
import MyListLeftSectionMyListItem from "./MyListLeftSectionMyListItem";

const MyListLeftSection = () => {
  return (
    <>
      <div className="rounded-md border-b border-[rgba(0,0,0,0.2)] bg-white pb-5 shadow-md">
        <div className="border-b border-[rgba(0,0,0,0.2)] px-3 py-2">
          <h2>Your List</h2>
          <p className="mb-0 mt-0">
            There are <span className="font-bold text-primary"> 2 </span>
            products in your list
          </p>
          <MyListLeftSectionMyListItem />
        </div>
      </div>
    </>
  );
};

export default MyListLeftSection;
