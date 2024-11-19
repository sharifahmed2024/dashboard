import React from "react";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";
import StatsBar from "../StatsBar";

const RootLayout = () => {
  return (
    <div className="flex bg-[#101010] ">
      <Sidebar />
      <Outlet />
      <StatsBar />
    </div>
  );
};

export default RootLayout;
