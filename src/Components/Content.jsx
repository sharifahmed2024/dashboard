import React from "react";
import user from "../../public/user.png";

import { BsThreeDots } from "react-icons/bs";
import Listcard from "./Layout/Listcard";
import { FaShoppingCart } from "react-icons/fa";
import Chart from "./Chart";

const Content = ({ className, titletext }) => {
  return (
    <div className="w-full">
      <div className={`py-[60px] px-[100px] h-screen w-full ${className}`}>
        <div className="title flex items-center justify-between ">
          <h1 className="font-semibold text-[40px] text-[#262A41]">
            {titletext}
          </h1>
          <img src={user} alt="" />
        </div>
        <p className="pt-2.5 font-Poppins text-black/35 ">
          01 - 25 March, 2020
        </p>
        <div className="py-11 barchart">
          <Chart />
        </div>

        <div className="text flex justify-between items-center border-[#D8D8D8] border-b py-2">
          <h4 className="text-text-color font-semibold text-xl font-Poppins">
            Today
          </h4>
          <div className="doticon">
            <BsThreeDots className="w-[25px] h-9 text-[#D8D8D8]" />
          </div>
        </div>

        <div className="list">
          <div className="pt-6 pb-[60px] flex flex-col gap-6">
            <Listcard
              bgcolor="bg-[#32A7E2]"
              icon={<FaShoppingCart />}
              heading="Grocery"
              descption="5:12 pm  •  Belanja di pasar"
              price="-326.800"
            />
            <Listcard
              bgcolor="bg-[#B548C6]"
              icon={<FaShoppingCart />}
              heading="Transportation"
              descption="5:12 pm  •  Belanja di pasar"
              price="-15.000"
            />
            <Listcard
              bgcolor="bg-[#FF8700]"
              icon={<FaShoppingCart />}
              heading="Housing"
              descption="5:12 pm  •  Belanja di pasar"
              price="-185.750"
            />
          </div>
        </div>

        <div className="text2 flex justify-between items-center border-[#D8D8D8]  border-b py-2">
          <h4 className="text-text-color font-semibold text-xl font-Poppins">
            Monday, 23 March 2020
          </h4>
          <div className="doticon">
            <BsThreeDots className="w-[25px] h-9 text-[#D8D8D8]" />
          </div>
        </div>

        <div className="pt-6 flex flex-col gap-6">
          <Listcard
            bgcolor="bg-[#DC3434]"
            icon={<FaShoppingCart />}
            heading="Food and Drink"
            descption="5:12 pm  •  Makan Steak"
            price="-156.000"
          />
          <Listcard
            bgcolor="bg-[#4BA83D]"
            icon={<FaShoppingCart />}
            heading="Entertainment"
            descption="5:12 pm  •  Nonton Bioskop"
            price="-35.200"
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
