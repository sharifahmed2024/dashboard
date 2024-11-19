import React from "react";
import Card from "./Layout/Card";
import bag from "../../public/bag.png";
import tree from "../../public/tree.png";

const StatsBar = () => {
  return (
    <div className="bg-[#F9FAFC] pt-[76px] !px-[50px] w-full">
      <h2 className="text-text-color font-semibold text-xl font-Prompt">
        Where your money go?
      </h2>

      <div className="pb-28">
        <Card />
      </div>

      <div className="save_more_energy">
        <div className="box w-[300px] bg-slate-200 pt-[77px] px-[25px] pb-5 rounded-xl relative">
          <div className="bag">
            <img className="absolute left-[25px] top-0 -translate-y-[15px]" src={bag} alt="" />
          </div>

          <div className="tree">
          <img className="absolute right-[25px] top-0 -translate-y-[34px]" src={tree} alt="" />
          </div>

          <div className="text ">
            <h3 className="font-Poppins text-text-color font-semibold text-lg ">Save more money</h3>
            <p className="font-Poppins  text-[#404852] leading-[21px] mt-1 mb-4">eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
          </div>

          <div className="btn text-center">
            <button className="font-semibold font-Poppins bg-[#101010] py-[16px] px-20 text-white rounded-xl">VIEW TIPS</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
