import React from "react";
import client from "../../public/client.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="pl-[120px] pt-[66px] pb-[184px] w-full">
      <nav>
        <div className="clientimg">
          <img src={client} alt="" />
        </div>
        <div className="text">
          <h1 className="font-semibold text-3xl font-Poppins text-white pt-5 pb-1.5">
            Samantha
          </h1>
          <p className="text-white/50 pb-[117px]">samantha@email.com</p>
        </div>

        <div className="menu">
          <ul className="flex flex-col gap-[30px]">
            <li className="font-semibold text-[25px] font-Poppins text-white hover:ml-3 hover:transition-all duration-200 linear ">
              <Link to="/">Dashboard</Link>
            </li>
            <li className="font-semibold text-[25px] font-Poppins text-white hover:ml-3 hover:transition-all duration-200">
              <Link to="/expenses">Expenses</Link>
            </li>
            <li className="font-semibold text-[25px] font-Poppins text-white hover:ml-3 hover:transition-all duration-200">
              <Link to="/wallets">Wallets</Link>
            </li>
            <li className="font-semibold text-[25px] font-Poppins text-white hover:ml-3  hover:transition-all duration-200">
              <Link to="/summary">Summary</Link>
            </li>
            <li className="font-semibold text-[25px] font-Poppins text-white hover:ml-3  hover:transition-all duration-200">
              <Link to="/accounts">Accounts</Link>
            </li>
            <li className="font-semibold text-[25px] font-Poppins text-white hover:ml-3  hover:transition-all duration-200">
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
