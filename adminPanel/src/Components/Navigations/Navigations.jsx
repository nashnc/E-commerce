import React, { useContext } from "react";
import Header from "../Header/Header";
import SideBar from "../SideBar/Sidebar";
import Dashboard from "../../Pages/DashBoard/Dashboard";
import { MyContext } from "../../App"; 
const Navigations = () => {
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
            <Dashboard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Navigations;
