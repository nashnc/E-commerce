import React from "react";
import {
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Slide,
} from "@mui/material";
import { IoClose } from "react-icons/io5";
import AddProduct from "../../Components/Products/AddProduct";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ProductsUploading = ({ isOpen, onClose }) => {
  return (
    <div className="bg-[#f1f1f1]">
      <Dialog
        fullScreen
        open={isOpen}
        onClose={onClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Add Product
            </Typography>
            {/* <Button autoFocus color="inherit" onClick={onClose}>
              Save
            </Button> */}
            <IconButton
              edge="start"
              color="inherit"
              onClick={onClose}
              aria-label="close"
            >
              <IoClose />
            </IconButton>
          </Toolbar>
        </AppBar>

        <div style={{ padding: "2rem" }}>
          <>
            <AddProduct />
          </>
        </div>
      </Dialog>
    </div>
  );
};

export default ProductsUploading;
