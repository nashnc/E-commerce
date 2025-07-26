import MuiRating from "@mui/material/Rating";
import React from "react";

const Rating = (props) => {
  return (
    <>
      <MuiRating
        name="size-small"
        defaultValue={props.score}
        size={props.sizeOf}
        {...(props.readAble === "false" ? {} : { readOnly: true })}
      />
    </>
  );
};

export default Rating;
