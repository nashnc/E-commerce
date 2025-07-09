import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import BreadCrumbs from "../../components/SideBar/BreadCrumbs";

const ProductListing = () => {
  return (
    <>
      <section className="py-8">
        <div className="container">
          <BreadCrumbs />
        </div>
        <div className="container flex gap-3">
          <div className="sidebarWrapper h-full w-[20%] bg-white p-3">
            <SideBar />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductListing;
