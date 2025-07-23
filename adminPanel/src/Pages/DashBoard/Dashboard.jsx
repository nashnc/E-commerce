import React from "react";
import DashBoardBox from "../../Components/DashBoardBox/DashBoardBox";
import DashBoardWelcome from "../../Components/DashBoardBox/DashBoardWelcome";
import "./DashBoard.css";
import DashBoardTableRecent from "../../Components/DashBoardBox/DashBoardTableRecent";
import DashBoardTableProducts from "../../Components/DashBoardBox/DashBoardTableProducts";
import DashBoardLineChartOne from "../../Components/DashBoardBox/DashBoardLineChartOne";

const Dashboard = () => {
  return (
    <>
      <DashBoardWelcome />

      <DashBoardBox />
      <DashBoardTableProducts />
      <DashBoardTableRecent />
      <DashBoardLineChartOne />
    </>
  );
};

export default Dashboard;
