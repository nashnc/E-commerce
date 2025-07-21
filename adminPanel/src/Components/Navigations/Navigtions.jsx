import React from "react";
import Header from "../Header/Header";
import SideBar from "../SideBar/Sidebar";
const Navigtions = () => {
  return (
    <>
      <section className="main">
        <Header />
        <div className="contentMain flex">
          <div className="sideWrapper w-[18%]">
            <SideBar />
          </div>
        </div>
      </section>
    </>
  );
};

export default Navigtions;
