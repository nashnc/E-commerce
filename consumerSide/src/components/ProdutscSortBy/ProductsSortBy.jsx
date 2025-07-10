import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const ProductsSortBy = () => {
     const [anchorEl, setAnchorEl] = React.useState(null);
     const open = Boolean(anchorEl);
     const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
     };
     const handleClose = () => {
          setAnchorEl(null);
     };

     return (
          <div>
               <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    className="!bg-white !text-[12px] !capitalize !text-black"
               >
                    Sales, highest to lowest
               </Button>
               <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    slotProps={{
                         list: {
                              "aria-labelledby": "basic-button",
                         },
                    }}
               >
                    <MenuItem onClick={handleClose}>
                         Sales, highest to lowest
                    </MenuItem>

                    <MenuItem onClick={handleClose}>Relevance</MenuItem>
                    <MenuItem onClick={handleClose}>Name, A to Z</MenuItem>
                    <MenuItem onClick={handleClose}>Name, Z to A</MenuItem>
                    <MenuItem onClick={handleClose}>
                         Price, low to high
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                         Price, high to low
                    </MenuItem>
               </Menu>
          </div>
     );
};

export default ProductsSortBy;
