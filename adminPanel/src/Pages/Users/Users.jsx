import React, { useContext } from "react";
import Header from "../../Components/Header/Header";
import SideBar from "../../Components/SideBar/Sidebar";
import { MyContext } from "../../App";
import UsersHome from "../../Components/Users/UsersHome";
import UsersTable from "../../Components/Users/UsersTable";

const Users = () => {
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
            <UsersHome />
            <UsersTable />
          </div>
        </div>
      </section>
    </>
  );
};

export default Users;
