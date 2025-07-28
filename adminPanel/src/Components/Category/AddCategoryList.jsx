import { Button, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import Rating from "../Rating/Rating";
import MediaUpload from "./MediaUpload";

const AddCategoryList = (props) => {
  const [categoryFilterValue, setCategoryFilterValue] = useState();
  const handleChangeFilterValue = (event) => {
    setCategoryFilterValue(event.target.value);
  };
  return (
    <>
      <div className="card">
        <section className="">
          <>
            <form action="">
              <div className="rounded-md bg-white p-5 shadow-md">
                {props.type === "subCate" ? (
                  <div className="mt-3 grid grid-cols-4">
                    <div className="">
                      <h4 className="mb-3 text-[16px] font-[500]">
                        Product Size
                      </h4>
                      <Select
                        labelId="productSize"
                        className="!h-[56px] w-[250px] min-w-[200px]"
                        size="small"
                        id="productSize"
                        value={categoryFilterValue}
                        label="Product Size"
                        onChange={handleChangeFilterValue}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={0}>S</MenuItem>
                        <MenuItem value={1}>M</MenuItem>
                        <MenuItem value={2}>XL</MenuItem>
                        <MenuItem value={3}>XXL</MenuItem>
                        <MenuItem value={4}>XXXL</MenuItem>
                      </Select>
                    </div>
                    <div className="">
                      <h4 className="mb-3 text-[16px] font-[500]">
                        Subcategory Name
                      </h4>

                      <TextField
                        type="text"
                        id="SubCategoryName"
                        label="Subcategory Name *"
                        variant="outlined"
                        name="SubCategoryName"
                        className="w-[250px] !rounded-md"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1">
                    <div className="col">
                      <h4 className="mb-3 text-[16px] font-[500]">
                        Category Name
                      </h4>

                      <TextField
                        type="text"
                        id="CategoryName"
                        label="Category Name *"
                        variant="outlined"
                        name="CategoryName"
                        className="w-full !rounded-md"
                      />
                    </div>
                  </div>
                )}
              </div>
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
          </>
        </section>
      </div>
    </>
  );
};

export default AddCategoryList;
