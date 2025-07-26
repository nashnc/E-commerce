import React, { useContext } from "react";
import Header from "../../Components/Header/Header";
import SideBar from "../../Components/SideBar/Sidebar";
import { MyContext } from "../../App"; // Update this line
import ProductsHome from "../../Components/Products/ProductsHome";
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
          </div>
        </div>
      </section>z
    </>
  );
};

export default Products;
