import "./QuantityBox.css";
import { Button } from "@mui/material";
import React from "react";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

const QuantityBox = () => {
     return (
          <>
               <div className="quantityBox">
                    <input
                         type="number"
                         name=""
                         id=""
                         defaultValue={1}
                         className="w-full h-[40px] p-2 text-[15px] focus:outline-none border border-[rgba(0,0,0,0.3)] rounded-md "
                    />
               </div>
               <div className="flex flex-col items-center">
                    <Button>
                         <FaAngleUp />
                    </Button>
                    <Button>
                         <FaAngleDown />
                    </Button>
               </div>
          </>
     );
};

export default QuantityBox;
