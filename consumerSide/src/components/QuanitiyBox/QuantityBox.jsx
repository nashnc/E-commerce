import "./QuantityBox.css";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";


const QuantityBox = () => {
     const [quantityValue, setQuantityValue] = useState(1);

     const plusQuantity = () => {
          setQuantityValue(quantityValue + 1);
     };
     const minusQuantity = () => {
          quantityValue === 1
               ? setQuantityValue === 1
               : setQuantityValue(quantityValue - 1);
     };

     return (
          <>
               <div className="quantityBox flex items-center relative">
                    <input
                         type="number"
                         name=""
                         id=""
                         value={quantityValue}
                         className="w-full  h-[40px]  p-2 pl-5 text-[500] text-[15px] focus:outline-none border border-[rgba(0,0,0,0.3)] rounded-md "
                    />

                    <div className="flex flex-col items-center justify-between border-l border-[rgba(0,0,0,0.3)] absolute top-0 right-0 z-50 h-[40px]">
                         <Button
                              onClick={plusQuantity}
                              className="!min-w-[25px] opacity-55  !w-[25px] !h-[20px] !rounded-br-none  !rounded-l-none  hover:!bg-primary !text-black hover:!text-white"
                         >
                              <FaAngleUp />
                         </Button>
                         <Button
                              onClick={minusQuantity}
                              className="!min-w-[25px] opacity-55  !w-[25px] !h-[20px] !rounded-l-none !rounded-tr-none hover:!bg-primary !text-black hover:!text-white"
                         >
                              <FaAngleDown />
                         </Button>
                    </div>
               </div>
          </>
     );
};

export default QuantityBox;
