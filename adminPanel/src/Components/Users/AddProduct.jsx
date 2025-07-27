import { Button, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import Rating from "../Rating/Rating";
import MediaUpload from "./MediaUpload";

const AddProduct = () => {
  const [categoryFilterValue, setCategoryFilterValue] = useState();
  const handleChangeFilterValue = (event) => {
    setCategoryFilterValue(event.target.value);
  };
  return (
    <>
      <div className="card">
        <section className="">
          <form action="">
            <div className="rounded-md bg-white p-5 shadow-md">
              <div className="grid grid-cols-1">
                <div className="col">
                  <h4 className="mb-3 text-[16px] font-[500]">Product Name</h4>

                  <TextField
                    type="text"
                    id="productName"
                    label="Product Name *"
                    variant="outlined"
                    name="productName"
                    className="w-full !rounded-md"
                  />
                </div>
                <h4 className="mb-3 mt-3 text-[16px] font-[500]">
                  Product Description
                </h4>

                <TextField
                  type="text"
                  id="productDescription"
                  label="Product Description *"
                  variant="outlined"
                  name="productDescription"
                  className="w-full !rounded-md"
                  multiline
                  rows={5}
                  maxRows={6}
                />
              </div>
              <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div className="">
                  <h4 className="text-[16px] font-[500]">Select Category</h4>
                  <Select
                    labelId="selectCategory"
                    className="!h-[56px] w-[250px] min-w-[200px]"
                    size="small"
                    id="selectCategory"
                    value={categoryFilterValue}
                    label="SelectCategory"
                    onChange={handleChangeFilterValue}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Men</MenuItem>
                    <MenuItem value={20}>Woman</MenuItem>
                    <MenuItem value={30}>Kids</MenuItem>
                  </Select>
                </div>
                <div className="">
                  <h4 className="text-[16px] font-[500]">
                    Select Sub-Category
                  </h4>
                  <Select
                    labelId="selectSubCategory"
                    className="h-[56px] w-[250px] min-w-[200px]"
                    size="small"
                    id="selectSubCategory"
                    value={categoryFilterValue}
                    label="Select Sub-Category"
                    onChange={handleChangeFilterValue}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Men</MenuItem>
                    <MenuItem value={20}>Woman</MenuItem>
                    <MenuItem value={30}>Kids</MenuItem>
                  </Select>
                </div>
                <div className="">
                  <h4 className="text-[16px] font-[500]">Product Price</h4>

                  <TextField
                    type="number"
                    id="productPrice"
                    label="Product Price *"
                    variant="outlined"
                    name="productPrice"
                    className="!h-[56px] w-[250px] min-w-[200px]"
                  />
                </div>
                <div className="">
                  <h4 className="text-[16px] font-[500]">Product Old Price</h4>

                  <TextField
                    type="number"
                    id="productOldPrice"
                    label="Product Old Price *"
                    variant="outlined"
                    name="productOldPrice"
                    className="!h-[56px] w-[250px] min-w-[200px]"
                  />
                </div>
                <div className="">
                  <h4 className="text-[16px] font-[500]">Is Featured?</h4>
                  <Select
                    labelId="isFeatured"
                    className="!h-[56px] w-[250px] min-w-[200px]"
                    size="small"
                    id="isFeatured"
                    value={categoryFilterValue}
                    label="Is Featured?"
                    onChange={handleChangeFilterValue}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={0}>False</MenuItem>
                    <MenuItem value={1}>True</MenuItem>
                  </Select>
                </div>
                <div className="">
                  <h4 className="text-[16px] font-[500]">Product Stock</h4>

                  <TextField
                    type="number"
                    id="productStock"
                    label="Product Stock *"
                    variant="outlined"
                    name="productStock"
                    className="!h-[56px] w-[250px] min-w-[200px]"
                  />
                </div>
                <div className="">
                  <h4 className="text-[16px] font-[500]">Product Brand</h4>

                  <TextField
                    type="text"
                    id="productBrand"
                    label="Product Brand *"
                    variant="outlined"
                    name="productBrand"
                    className="!h-[56px] w-[250px] min-w-[200px]"
                  />
                </div>
                <div className="">
                  <h4 className="text-[16px] font-[500]">Product Brand</h4>

                  <TextField
                    type="number"
                    id="productDiscount"
                    label="Product Discount *"
                    variant="outlined"
                    name="productDiscount"
                    className="!h-[56px] w-[250px] min-w-[200px]"
                  />
                </div>
                <div className="">
                  <h4 className="text-[16px] font-[500]">Product Rams</h4>
                  <Select
                    labelId="productRams"
                    className="!h-[56px] w-[250px] min-w-[200px]"
                    size="small"
                    id="productRams"
                    value={categoryFilterValue}
                    label="Product Rams"
                    onChange={handleChangeFilterValue}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={0}>False</MenuItem>
                    <MenuItem value={1}>True</MenuItem>
                  </Select>
                </div>
                <div className="">
                  <h4 className="text-[16px] font-[500]">Product Brand</h4>

                  <TextField
                    type="number"
                    id="productDiscount"
                    label="Product Discount *"
                    variant="outlined"
                    name="productDiscount"
                    className="!h-[56px] w-[250px] min-w-[200px]"
                  />
                </div>
                <div className="">
                  <h4 className="text-[16px] font-[500]">Product Size</h4>
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
                <>
                  <div className="!h-[56px] w-[250px] min-w-[200px]">
                    <h4 className="mb-3 text-[16px] font-[500]">
                      Product Rating
                    </h4>
                    <Rating readAble="false" sizeOf="lg" />
                  </div>
                </>
              </div>
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
        </section>
      </div>
    </>
  );
};

export default AddProduct;
