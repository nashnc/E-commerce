import React from "react";
import Rating from "@mui/material/Rating";

const ProductItemRating = () => {
  return (
    <>
      {" "}
      <Rating name="size-small" defaultValue={4} size="small " readOnly />
    </>
  );
};

export default ProductItemRating;
