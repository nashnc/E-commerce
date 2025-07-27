import React from "react";
import {
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Slide,
} from "@mui/material";
import { IoClose } from "react-icons/io5";
import AddHomeBanners from "../../Components/HomeBanners/AddHomeBanners";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const HomeBannersUploading = ({ isOpen, onClose }) => {
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
              Add Home Banners
            </Typography>

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
            <AddHomeBanners />
          </>
        </div>
      </Dialog>
    </div>
  );
};

export default HomeBannersUploading;
