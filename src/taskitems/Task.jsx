import { Calendar, Ellipsis } from "lucide-react";
import React from "react";

const Task = ({ name, icon, para, heading }) => {
  return (
    <div>
      <div className="bg-gray-100 rounded-2xl my-3 ">
        <div className="flex justify-between p-3">
          {icon}
          {para}
        </div>
        <div className="flex justify-between p-3 items-center">
          <h1> {name}</h1>
          <h1 className="font-extrabold text-2xl pl-4 text-center">
            {heading}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Task;
