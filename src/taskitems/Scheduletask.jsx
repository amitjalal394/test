import { Users, Video } from "lucide-react";
import React from "react";

const scheduletask = ({ heading, para, icon, time }) => {
  return (
    <div className="border-2 rounded-2xl px-6 py-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 ">
          <h1 className="font-bold text-lg"> {heading}</h1>
          <h1 className="bg-yellow-300 py-0.5 px-3 rounded-2xl">{para}</h1>
        </div>
        <div>
          <h1 className="font-extrabold">Start at</h1>
        </div>
      </div>

      <div className="flex justify-between py-4">
        <button className="flex  px-2 py-0.5 rounded-lg gap-2 bg-white">
          <Video className="text-blue-500" />
          <h1> {icon}</h1>
        </button>
        <h1 className="font-bold"> {time}</h1>
      </div>
      <div className="flex justify-between text-green-600 py-4">
        <Users />
        <h1>View Detail</h1>
      </div>
    </div>
  );
};

export default scheduletask;
