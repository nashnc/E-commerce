import React from "react";

import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

const BreadCrumbs = ({ crumbs }) => {
  const breadCrumbsSeparator = (
    <div className="flex h-[12px] w-[12px] items-center justify-center rounded-full bg-[rgba(0,0,0,0.1)]">
      <div className="block h-[6px] w-[6px] rounded-full bg-[rgba(0,0,0,0.3)]"></div>
    </div>
  );

  return (
    <Breadcrumbs aria-label="breadcrumb" separator={breadCrumbsSeparator}>
      {crumbs && crumbs.length > 0 ? (
        crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;
          return isLast ? (
            <Typography key={index} className="text-black">
              {crumb.title}
            </Typography>
          ) : (
            <Link
              key={index}
              underline="hover"
              color="inherit"
              className="link transition"
              href={crumb.path}
            >
              {crumb.title}
            </Link>
          );
        })
      ) : (
        <>
          <Link
            underline="hover"
            color="inherit"
            className="link transition"
            href="/"
          >
            Home
          </Link>
          <Typography className="text-black">Fashion</Typography>
        </>
      )}
    </Breadcrumbs>
  );
};

export default BreadCrumbs;
