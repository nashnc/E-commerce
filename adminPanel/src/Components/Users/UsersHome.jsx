import React, { useContext } from "react";
import { Button } from "@mui/material";
import { FaPlus } from "react-icons/fa6";
import { TbFileExport } from "react-icons/tb";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import { MyContext } from "../../App";
import ProductsUploading from "../../Pages/Products/ProductsUploading";

const UsersHome = () => {
  const { openDialogProductUpload, closeDialogProductUpload } =
    useContext(MyContext);

  const crumbs = [
    { title: "Dashboard", path: "/" },
    { title: "Users", path: "/users/list" },
    { title: "Users List", path: "" },
  ];
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const handleOpen = () => setDialogOpen(true);
  const handleClose = () => setDialogOpen(false);

  return (
    <>
      <div className="card rounded-md bg-white p-5 shadow-md">
        <div className="col1 flex items-center justify-between">
          <h1 className="text-[20px] font-[600] text-[rgba(0,0,0,0.7)]">
            Users List
          </h1>
     
        </div>
        <section>
          <BreadCrumbs crumbs={crumbs} />
        </section>
      </div>

      <ProductsUploading isOpen={dialogOpen} onClose={handleClose} />
    </>
  );
};

export default UsersHome;
