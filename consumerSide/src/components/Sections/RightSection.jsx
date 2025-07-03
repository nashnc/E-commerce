import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./Section.css";

const RightSection = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box>
        <Tabs
          className="w-[60%]"
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Fashion" />
          <Tab label="Electronics" />
          <Tab label="Bags" />
          <Tab label="Footwear" />
          <Tab label="Groceries" />
          <Tab label="Beauty" />
          <Tab label="Wellness" />
          <Tab label="Jewelry" />
        </Tabs>
      </Box>
    </>
  );
};

export default RightSection;
