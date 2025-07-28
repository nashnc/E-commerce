import { Button, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import Rating from "../Rating/Rating";
import MediaUpload from "./MediaUpload";

const AddHomeBanners = () => {
  const [categoryFilterValue, setCategoryFilterValue] = useState();
  const handleChangeFilterValue = (event) => {
    setCategoryFilterValue(event.target.value);
  };
  return (
    <>
      <div className="card">
        <section className="">
          <form action="">
            <div className="mt-3 rounded-md bg-white p-5 shadow-md">
              <div className="">
                <h4 className="text-[16px] font-[500]">Media & Images</h4>

                <MediaUpload />
              </div>

              <div className="mt-5 flex items-center justify-center">
                <Button type="submit" className="btn-blue">
                  Publish and View
                </Button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default AddHomeBanners;
