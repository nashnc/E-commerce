import Rating from "@mui/material/Rating";
import React from "react";
const Rating = () => {
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

export default Rating;
