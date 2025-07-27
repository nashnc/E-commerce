import { TextField } from "@mui/material";
import React from "react";

const SearchBox = () => {
  return (
    <>
      <div className="h-[40px] w-full">
        <TextField
          type="text"
          id="search"
          label="Search Products*"
          variant="outlined"
          className="!h-[40px] w-full"
          name="search"
          
        />
      </div>
    </>
  );
};

export default SearchBox;
