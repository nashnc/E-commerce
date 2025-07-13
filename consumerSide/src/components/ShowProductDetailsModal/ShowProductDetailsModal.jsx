import ProductContent from "../ProductDetailsSub/ProductContent/ProductContent";
import ProductZoom from "../ProductDetailsSub/ProductZoom/ProductZoom";
import "./ShowProductDetailsModal.css";
import { ButtonBase } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const ShowProductDetailsModal = (props) => {
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState("lg");

  return (
    <Dialog
      open={props.open}
      onClose={props.close}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className="productDetailsModal"
      fullWidth={fullWidth}
      maxWidth={maxWidth}
    >
      <DialogContent>
        <div className="flex items-center w-full productDetailsModalContainer relative">
          <ButtonBase
            onClick={props.close}
            className="!w-[40px] !absolute top-[0px] right-[0px] !h-[40px] !min-w-[40px] !rounded-full !text=black hover:!text-white hover:!bg-primary"
          >
            <IoCloseSharp />
          </ButtonBase>
          <div className="col1 px-3  py-8 w-[40%]">
            <ProductZoom />
          </div>
          <div className="col2 py-8 px-8   pr-[15px]  w-[60%]  productContent ">
            <ProductContent />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default ShowProductDetailsModal;
