import React, { useContext } from "react";
import { Button } from "@mui/material";
import { FaPlus } from "react-icons/fa6";
import { TbFileExport } from "react-icons/tb";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import { MyContext } from "../../App";
import HomeBannersUploading from "../../Pages/HomeBanners/HomeBannersUploading";

const HomeBannerHome = () => {
  const { openDialogBannerUpload, closeDialogBannerUpload } =
    useContext(MyContext);

  const crumbs = [
    { title: "Dashboard", path: "/" },
    { title: "Home Banners", path: "/homeBanners" },
    { title: "Home Banners  List", path: "" },
  ];
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const handleOpen = () => setDialogOpen(true);
  const handleClose = () => setDialogOpen(false);

  return (
    <>
      <div className="card rounded-md bg-white p-5 shadow-md">
        <div className="col1 flex items-center justify-between">
          <h1 className="text-[20px] font-[600] text-[rgba(0,0,0,0.7)]">
            Home Banners
          </h1>
          <div className="col ml-auto flex w-[20%] items-center gap-3">
            <Button className="btn-green btn-sm gap-3 !capitalize">
              <TbFileExport />
              <p>Export</p>
            </Button>

            <Button
              onClick={handleOpen}
              className="btn-blue btn-sm gap-3 !capitalize"
            >
              <FaPlus />
              <p>Add Home Banners</p>
            </Button>
          </div>
        </div>
        <section>
          <BreadCrumbs crumbs={crumbs} />
        </section>
      </div>

      <HomeBannersUploading isOpen={dialogOpen} onClose={handleClose} />
    </>
  );
};

export default HomeBannerHome;
