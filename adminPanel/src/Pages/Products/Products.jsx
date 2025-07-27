import React, { useContext } from "react";
import Header from "../../Components/Header/Header";
import SideBar from "../../Components/SideBar/Sidebar";
import { MyContext } from "../../App";
import ProductsHome from "../../Components/Products/ProductsHome";
import ProductsHomeProductsTable from "../../Components/Products/ProductsHomeProductsTable";

const Products = () => {
  const context = useContext(MyContext);
  return (
    <>
      <section className="main">
        <Header />
        <div className="contentMain flex">
          <div
            className={`sideWrapper transition-all duration-[1s] ${context.sideBarIsOpen ? "w-[18%]" : "w-[4%] overflow-hidden"}`}
          >
            <SideBar />
          </div>
          <div
            className={`contentRight transition-all duration-[1s] ${context.sideBarIsOpen ? "w-[82%]" : "w-[90%]"} px-5 py-4`}
          >
            <ProductsHome />
            <ProductsHomeProductsTable />
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
