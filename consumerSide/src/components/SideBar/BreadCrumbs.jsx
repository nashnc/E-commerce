import React from "react";

import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const BreadCrumbs = () => {
  return (
    <>
      <div role="presentation" onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            color="inherit"
            className="link transition"
            href="/"
          >
            Home
          </Link>

          <Typography className="text-black">Fashion</Typography>
        </Breadcrumbs>
      </div>
    </>
  );
};
export default BreadCrumbs;
