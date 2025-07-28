import React, { useContext } from "react";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import { MyContext } from "../../App";
import SearchBox from "../SearchBox/SearchBox";

const OrdersHome = () => {
  const { openDialogProductUpload, closeDialogProductUpload } =
    useContext(MyContext);

  const crumbs = [
    { title: "Dashboard", path: "/" },
    { title: "Orders", path: "/orders" },
    { title: "Recent Orders", path: "" },
  ];

  return (
    <>
      <div className="card rounded-md bg-white p-5 shadow-md">
        <div className="col1 flex items-center justify-between">
          <h1 className="text-[20px] font-[600] text-[rgba(0,0,0,0.7)]">
            Order Activity
          </h1>
          <div className="h-[56px] w-[250px]">
            <SearchBox />
          </div>
        </div>
        <section>
          <BreadCrumbs crumbs={crumbs} />
        </section>
      </div>
    </>
  );
};

export default OrdersHome;
