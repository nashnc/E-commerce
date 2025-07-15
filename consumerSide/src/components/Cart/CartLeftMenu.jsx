import React, { useState } from "react";
import { GoTriangleDown } from "react-icons/go";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const CartLeftMenu = () => {
  const [sizeAnchorEl, setSizeAnchorEl] = useState(null);
  const [selectedSize, setSelectedSize] = useState("S");
  const sizeOpen = Boolean(sizeAnchorEl);
  const handleSizeClick = (event) => {
    setSizeAnchorEl(event.currentTarget);
  };
  const handleSizeClose = () => {
    setSizeAnchorEl(null);
  };
  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    handleSizeClose();
  };

  const [qtyAnchorEl, setQtyAnchorEl] = useState(null);
  const [selectedQty, setSelectedQty] = useState("1");
  const qtyOpen = Boolean(qtyAnchorEl);
  const handleQtyClick = (event) => {
    setQtyAnchorEl(event.currentTarget);
  };
  const handleQtyClose = () => {
    setQtyAnchorEl(null);
  };
  const handleQtySelect = (qty) => {
    setSelectedQty(qty);
    handleQtyClose();
  };

  return (
    <>
      <div className="mt-2 flex items-center gap-4">
        <div className="relative">
          <p
            onClick={handleSizeClick}
            className="flex cursor-pointer items-center justify-center gap-2 rounded-md bg-[#f1f1f1] px-2 py-1 text-[13px] font-[600]"
          >
            Size : {selectedSize} <GoTriangleDown />
          </p>
          <Menu
            id="sizeMenu"
            anchorEl={sizeAnchorEl}
            open={sizeOpen}
            onClose={handleSizeClose}
            slotProps={{
              list: {
                "aria-labelledby": "basic-button",
              },
            }}
          >
            <MenuItem onClick={() => handleSizeSelect("S")}>S</MenuItem>
            <MenuItem onClick={() => handleSizeSelect("M")}>M</MenuItem>
            <MenuItem onClick={() => handleSizeSelect("L")}>L</MenuItem>
            <MenuItem onClick={() => handleSizeSelect("XL")}>XL</MenuItem>
            <MenuItem onClick={() => handleSizeSelect("XXL")}>XXL</MenuItem>
          </Menu>
        </div>

        <div className="relative">
          <p
            onClick={handleQtyClick}
            className="flex cursor-pointer items-center justify-center gap-2 rounded-md bg-[#f1f1f1] px-2 py-1 text-[13px] font-[600]"
          >
            Qty : {selectedQty} <GoTriangleDown />
          </p>
          <Menu
            id="qtyMenu"
            anchorEl={qtyAnchorEl}
            open={qtyOpen}
            onClose={handleQtyClose}
            slotProps={{
              list: {
                "aria-labelledby": "basic-button",
              },
            }}
          >
            <MenuItem onClick={() => handleQtySelect("1")}>1</MenuItem>
            <MenuItem onClick={() => handleQtySelect("2")}>2</MenuItem>
            <MenuItem onClick={() => handleQtySelect("3")}>3</MenuItem>
            <MenuItem onClick={() => handleQtySelect("4")}>4</MenuItem>
            <MenuItem onClick={() => handleQtySelect("5")}>5</MenuItem>
          </Menu>
        </div>
      </div>
    </>
  );
};

export default CartLeftMenu;
