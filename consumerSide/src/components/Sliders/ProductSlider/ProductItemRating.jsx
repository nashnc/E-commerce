import Rating from "@mui/material/Rating";
import React from "react";

const ProductItemRating = (props) => {
     return (
          <>
               <Rating
                    name="size-small"
                    defaultValue={props.score}
                    size={props.sizeOf}
                    {...(props.readAble === "false" ? {} : { readOnly: true })}
               />
          </>
     );
};

export default ProductItemRating;
