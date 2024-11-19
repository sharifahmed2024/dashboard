import React from "react";

const Listcard = ({ className, icon, heading, descption, price, bgcolor }) => {
  return (
    <div
      className={`main ${className} flex items-center justify-between gap-[17px]`}
    >
      <div className="flex gap-4">
        <div
          className={`icon_text flex items-center justify-between ${bgcolor} p-5 rounded-full text-white`}
        >
          {icon}
        </div>
        <div className="text">
          <h4 className="font-medium font-Poppins">{heading}</h4>
          <p className="text-[#404852] font-Poppins">{descption}</p>
        </div>
      </div>
      <div className="flex  items-center items">
        <div className="price font-semibold font-Poppins text-lg">
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
};

export default Listcard;
