import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "../SideBar.css";
import { Collapse } from "react-collapse";
import { Button } from "@mui/material";
import { FaAngleUp } from "react-icons/fa";

const ShopByAvailability = () => {
     const [isOpenAvailState, setIsOpenAvailState] = useState(false);

     return (
          <>
               <h3 className="items relative mb-3 flex w-full items-center justify-between text-[16px] font-[600]">
                    Availability
                    <Button
                         className="absolute right-1/4 ml-auto !h-[30px] !w-[30px] !min-w-[30px] !rounded-full !text-[16px] !text-black hover:!text-primary"
                         onClick={() => setIsOpenAvailState(!isOpenAvailState)}
                    >
                         {isOpenAvailState === true ? (
                              <FaAngleUp className="rotate-0 transition-all duration-300" />
                         ) : (
                              <FaAngleUp className="-rotate-180 transition-all duration-300" />
                         )}
                    </Button>
               </h3>
               <Collapse isOpened={isOpenAvailState}>
                    <div className="scroll relative -left-[10px] px-4 text-[13px]">
                         <FormGroup>
                              {/* incase wrap issue use w-full */}
                              <FormControlLabel
                                   control={<Checkbox size="small" />}
                                   className="w-full"
                                   label="Available  (17)"
                              />
                              <FormControlLabel
                                   control={<Checkbox size="small" />}
                                   className="w-full"
                                   label="In Stock (17)"
                              />
                              <FormControlLabel
                                   control={<Checkbox size="small" />}
                                   className="w-full"
                                   label="Not Available  (2)"
                              />
                         </FormGroup>
                    </div>
               </Collapse>
          </>
     );
};

export default ShopByAvailability;
