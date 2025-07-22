import React from "react";
import DashBoardBox from "../../Components/DashBoardBox/DashBoardBox";
import DashBoardWelcome from "../../Components/DashBoardBox/DashBoardWelcome";
import DashBoardTable from "../../Components/DashBoardBox/DashBoardTable";
import './DashBoard.css'

const Dashboard = () => {
  return (
    <>
      <DashBoardWelcome />

      <DashBoardBox />
      <DashBoardTable />
    </>
  );
};

export default Dashboard;
