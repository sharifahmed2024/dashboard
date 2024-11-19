import React from "react";

const Chart = () => {
  // Data for the bar heights
  const data = [
    30, 50, 20, 40, 70, 60, 70, 50, 20, 40, 30, 75, 20, 60, 40, 60, 50, 30, 60, 40, 70, 50, 30, 80, 30, 40, 100, 60,
  ];

  return (
    <div className="flex items-end h-32 space-x-3">
      {data.map((value, index) => (
        <div
          key={index}
          style={{ height: `${value}%` }}
          className={`w-5 ${
            index === data.length - 2 ? "bg-blue-500" : "bg-blue-200"
          }`}
        ></div>
      ))}
    </div>
  );
};

export default Chart;
