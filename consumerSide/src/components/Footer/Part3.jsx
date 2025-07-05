import React from "react";
import "./Footer.css";
import { Button } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const Part3 = () => {
  return (
    <>
      <h2 className="mb-4 text-[18px] font-[600]">Subscribe to newsletter</h2>
      <p className="pb-4 text-[14px] font-[400]">
        Subscribe to our latest newsletter to get news about special discounts.
      </p>
      <form action="" className="mt-5">
        <input
          type="text"
          name=""
          id=""
          className="mb-4 h-[45px] w-full rounded-sm pl-4 pr-4 outline-none focus:border-4"
          placeholder="Your Email Address "
        />
        <Button className="btn-orange">SUBSCRIBE</Button>
        <FormControlLabel
          control={<Checkbox />}
          label="I agree to the terms and conditions and the privacy policy"
        />
      </form>
    </>
  );
};

export default Part3;
