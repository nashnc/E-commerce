import React, { useContext } from "react";
import { Button } from "@mui/material";
import { FaPlus } from "react-icons/fa6";
import { TbFileExport } from "react-icons/tb";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import { MyContext } from "../../App";
import CategoryListUploading from "../../Pages/Category/CategoryListUploading";

const CategoryListHome = (props) => {
  const { openDialogBannerUpload, closeDialogBannerUpload } =
    useContext(MyContext);

  const crumbsCate = [
    { title: "Dashboard", path: "/" },
    { title: "Category", path: "/category/list" },
    { title: "Category  List", path: "" },
  ];
  const crumbsSubCate = [
    { title: "Dashboard", path: "/" },
    { title: "Subcategory", path: "/subcategory/list" },
    { title: "Subcategory  List", path: "" },
  ];
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const handleOpen = () => setDialogOpen(true);
  const handleClose = () => setDialogOpen(false);

  return (
    <>
      <div className="card rounded-md bg-white p-5 shadow-md">
        <div className="col1 flex items-center justify-between">
          <h1 className="text-[20px] font-[600] text-[rgba(0,0,0,0.7)]">
            {props.title === "subCate" ? "Subcategory List" : "Category  List"}
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
              <p>
                {props.title === "subCate" ? "Add SubCategory" : "Add Category"}
              </p>
            </Button>
          </div>
        </div>
        <section>
          {props.title === "subCate" ? (
            <BreadCrumbs crumbs={crumbsSubCate} />
          ) : (
            <BreadCrumbs crumbs={crumbsCate} />
          )}
        </section>
      </div>

      <CategoryListUploading
        type={props.title === "subCate" ? "subCate" : ""}
        isOpen={dialogOpen}
        onClose={handleClose}
      />
    </>
  );
};

export default CategoryListHome;
