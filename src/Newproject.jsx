import { Plus, ShipWheel } from "lucide-react";
import React from "react";

const Newproject = ({ items }) => {
  return (
    <div className="bg-gray-300 rounded-2xl px-3 py-5 mt-5">
      <div className="flex  justify-between  ">
        <h1>Project</h1>
        <button className="flex items-center border-2 rounded-2xl bg-white gap-2 px-2 py-1">
          <Plus size={16} />
          New
        </button>
      </div>

      {items?.map((item) => (
        <div className="flex gap-4 items-center p-5" key={item.name}>
          {item.icon}
          {/* <item.icon className="text-blue-500" size={36} /> */}
          <div>
            <h1 className="font-bold ">{item.name}</h1>
            <h1 className="text-xs">{item.date}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Newproject;
