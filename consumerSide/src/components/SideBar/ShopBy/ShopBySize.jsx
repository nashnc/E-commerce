import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "../SideBar.css";

import { Button } from "@mui/material";
import { FaAngleUp } from "react-icons/fa";
import { Collapse } from "react-collapse";

const ShopBySize = () => {
     const [isOpenSizeState, setIsOpenSizeState] = useState(false);

     return (
          <>
               <h3 className="items relative mb-3 flex w-full items-center justify-between text-[16px] font-[600]">
                    Size
                    <Button
                         className="absolute right-1/4  ml-auto !h-[30px] !w-[30px] !min-w-[30px] !rounded-full !text-[16px] !text-black hover:!text-primary"
                         onClick={() => setIsOpenSizeState(!isOpenSizeState)}
                    >
                         {isOpenSizeState === true ? (
                              <FaAngleUp className="rotate-0 transition-all duration-300" />
                         ) : (
                              <FaAngleUp className="-rotate-180 transition-all duration-300" />
                         )}
                    </Button>
               </h3>
               <Collapse isOpened={isOpenSizeState}>
                    <div className="scroll relative -left-[10px] px-4 text-[13px]">
                         <FormGroup>
                              {/* incase wrap issue use w-full */}
                              <FormControlLabel
                                   control={<Checkbox size="small" />}
                                   className="w-full"
                                   label="Small  (6)"
                              />
                              <FormControlLabel
                                   control={<Checkbox size="small" />}
                                   className="w-full"
                                   label="Medium (5)"
                              />
                              <FormControlLabel
                                   control={<Checkbox size="small" />}
                                   className="w-full"
                                   label="Large  (7)"
                              />
                              <FormControlLabel
                                   control={<Checkbox size="small" />}
                                   className="w-full"
                                   label="XL (1)"
                              />
                              <FormControlLabel
                                   control={<Checkbox size="small" />}
                                   className="w-full"
                                   label="XXL  (4)"
                              />
                         </FormGroup>
                    </div>
               </Collapse>
          </>
     );
};

export default ShopBySize;
