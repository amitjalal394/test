import { MoveUpRight } from "lucide-react";
import React from "react";

const Dashcompartment = ({ name, icon, heading, para, img, bgcolor }) => {
  return (
    <div className="bg-green-400 rounded-2xl p-5 mt-4 ">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-lg"> {name}</h1>
        <div className="bg-white rounded-full p-2">
          <MoveUpRight />
        </div>
      </div>
      <h1 className="text-5xl">{heading}</h1>
      <p className="flex items-center gap-2  text-yellow-300">
        <span className={`flex items-center rounded-2xl px-2 ${bgcolor}`}>
          {icon} {img}
        </span>
        {para}
      </p>
    </div>
  );
};

export default Dashcompartment;
