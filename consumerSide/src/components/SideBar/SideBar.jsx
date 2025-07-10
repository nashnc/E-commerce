import React, { useState } from "react";
import "./SideBar.css";
import ShopByCategory from "./ShopBy/ShopByCategory";

import ShopByAvailability from "./ShopBy/ShopByAvailability";
import ShopBySize from "./ShopBy/ShopBySize";
import ShopByRange from "./ShopBy/ShopByRange";
import ShopByRating from "./ShopBy/ShopByRating";

const SideBar = () => {
     return (
          <>
               <aside className="sideBar py-5">
                    <div className="box">
                         <ShopByCategory />
                    </div>
                    <div className="box">
                         <ShopByAvailability />
                    </div>
                    <div className="box">
                         <ShopBySize />
                    </div>
                    <div className="box">
                         <ShopByRange />
                    </div>
                    <div className="box">
                         <ShopByRating />
                    </div>
               </aside>
          </>
     );
};

export default SideBar;
