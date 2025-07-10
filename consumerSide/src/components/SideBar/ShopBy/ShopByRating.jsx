import React, { useState } from "react";
import Rating from "@mui/material/Rating";

import "../SideBar.css";
const ShopByRating = () => {
     return (
          <>
               <h3 className="items relative mb-3 flex w-full items-center justify-between text-[16px] font-[600]"></h3>
               <div>
                    <Rating
                         name="size-small"
                         defaultValue={5}
                         size="small "
                         readOnly
                         className="!w-full"
                    />
                    <Rating
                         name="size-small"
                         defaultValue={4}
                         size="small "
                         readOnly
                         className="!w-full"
                    />
                    <Rating
                         name="size-small"
                         defaultValue={3}
                         size="small "
                         readOnly
                         className="!w-full"
                    />
                    <Rating
                         name="size-small"
                         defaultValue={2}
                         size="small "
                         readOnly
                         className="!w-full"
                    />
                    <Rating
                         name="size-small"
                         defaultValue={1}
                         size="small "
                         readOnly
                         className="!w-full"
                    />
               </div>
          </>
     );
};

export default ShopByRating;
