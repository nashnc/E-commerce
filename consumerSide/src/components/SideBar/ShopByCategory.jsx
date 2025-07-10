import React from 'react'
import CategoryCollapse from "../CategoryCollapse/CategoryCollapse";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./SideBar.css";
import { Collapse } from "react-collapse";

const ShopByCategory = () => {
  return (
    <>
      <FormGroup>
        {/* incase wrap issue use w-full */}
        <FormControlLabel
          control={<Checkbox size="small" />}
          className="w-full"
          label="Fashion"
        />
        <FormControlLabel
          control={<Checkbox size="small" />}
          className="w-full"
          label="Electronics"
        />
        <FormControlLabel
          control={<Checkbox size="small" />}
          className="w-full"
          label="Bags"
        />
        <FormControlLabel
          control={<Checkbox size="small" />}
          className="w-full"
          label="Footwear"
        />
        <FormControlLabel
          control={<Checkbox size="small" />}
          className="w-full"
          label="Groceries"
        />
        <FormControlLabel
          control={<Checkbox size="small" />}
          className="w-full"
          label="Beauty"
        />
        <FormControlLabel
          control={<Checkbox size="small" />}
          className="w-full"
          label="Wellness"
        />
        <FormControlLabel
          control={<Checkbox size="small" />}
          className="w-full"
          label="Jewelry"
        />
      </FormGroup>
    </>
  );
}

export default ShopByCategory