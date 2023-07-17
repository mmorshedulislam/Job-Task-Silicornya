import React from "react";

const TeacherDashboard = () => {
  const data = [
    {
      icon: "/src/asests/icons/total.png",
      count: 1560,
      text: "New Course Sale",
      percentage: 70,
      background: "bg-gradient from-[] to-[]",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-4 gap-5">
        {data.map((item) => (
          <div className="border rounded-lg shadow-md p-10 m-10">
            <div className="flex items-center gap-x-2">
              <img src={item.icon} alt="" />
              <div>
                <p>{item.count}</p>
                <p>{item.text}</p>
              </div>
            </div>
            <div className="">
                <div className={`w-${item.percentage} h-1 bg-red-600`}>
                </div>
                <p>{item.percentage}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherDashboard;
