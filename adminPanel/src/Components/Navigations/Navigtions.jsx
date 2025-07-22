import React from "react";
import Header from "../Header/Header";
import SideBar from "../SideBar/Sidebar";
import Dashboard from "../../Pages/DashBoard/Dashboard";
const Navigtions = () => {
  return (
    <>
      <section className="main">
        <Header />
        <div className="contentMain flex">
          <div className="sideWrapper w-[18%]">
            <SideBar />
          </div>
          <div className="contentRight w-[82%] px-5 py-4">
            <Dashboard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Navigtions;
