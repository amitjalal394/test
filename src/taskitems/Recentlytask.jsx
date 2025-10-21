import { Dot, Ellipsis, Infinity, MessageCircleMore } from "lucide-react";
import React from "react";

const Recentlytask = ({
  heading,
  header,
  para,
  icon,
  color,
  inf,
  mess,
  bgcolor,
  textcolor,
}) => {
  return (
    <div className="bg-gray-200 rounded-2xl m-2 px-3 py-2">
      <div className="flex justify-between">
        <div
          className={`flex  items-center rounded-lg px-3 ${textcolor} font-bold  ${bgcolor}`}
        >
          <Dot size={30} />

          <h1>{heading}</h1>
        </div>
        <Ellipsis />
      </div>
      <div className="py-5">
        <h1 className="font-bold text-lg py-2">{header}</h1>
        <p>{para}</p>
      </div>

      <div className="bg-gray-200 rounded-2xl border w-52 h-6 overflow-hidden">
        <div className={`${color} h-6 bg-red-600`}></div>
      </div>

      <div className="flex justify-between py-5">
        {icon}
        <div className="flex gap-2">
          <button className="flex items-center gap-2">
            <Infinity />
            {inf}
          </button>
          <button className="flex items-center gap-2">
            <MessageCircleMore />
            {mess}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recentlytask;
