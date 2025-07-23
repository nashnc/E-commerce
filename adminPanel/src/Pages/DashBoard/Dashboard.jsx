import React from "react";
import DashBoardBox from "../../Components/DashBoardBox/DashBoardBox";
import DashBoardWelcome from "../../Components/DashBoardBox/DashBoardWelcome";
import "./DashBoard.css";
import DashBoardTableRecent from "../../Components/DashBoardBox/DashBoardTableRecent";
import DashBoardTableProducts from "../../Components/DashBoardBox/DashBoardTableProducts";

const Dashboard = () => {
  return (
    <>
      <DashBoardWelcome />

      <DashBoardBox />
      <DashBoardTableProducts />
      <DashBoardTableRecent />
    </>
  );
};

export default Dashboard;
