import React from "react";

import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

function handleClick(event) {
     event.preventDefault();
     console.info("You clicked a breadcrumb.");
}

const BreadCrumbs = ({ crumbs }) => {
     return (
          <>
               <div role="presentation" onClick={handleClick}>
                    <Breadcrumbs aria-label="breadcrumb">
                         {crumbs && crumbs.length > 0 ? (
                              crumbs.map((crumb, index) => {
                                   const isLast = index === crumbs.length - 1;
                                   return isLast ? (
                                        <Typography
                                             key={index}
                                             className="text-black"
                                        >
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
                                   <Typography className="text-black">
                                        Fashion
                                   </Typography>
                              </>
                         )}
                    </Breadcrumbs>
               </div>
          </>
     );
};
export default BreadCrumbs;
