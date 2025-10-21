import {
  Bell,
  Calendar,
  Contact,
  Ellipsis,
  Heading,
  Mail,
  MessageCircleMore,
  ScanBarcode,
  Search,
  UserLock,
} from "lucide-react";
import React from "react";
import Task from "./Task";
import Recentlytask from "./Recentlytask";
import Scheduletask from "./scheduletask";

const menuItems = [
  {
    icon: <Calendar className="text-green-700" />,
    para: <Ellipsis />,
    name: "Total tasks",
    heading: "18",
  },
  {
    icon: <Calendar className="text-green-700" />,
    para: <Ellipsis />,
    name: "In progress",
    heading: "10",
  },
  {
    icon: <Calendar />,
    para: <Ellipsis />,
    name: "Completed",
    heading: "8",
  },
];
const task = [
  {
    heading: "High",
    header: "Mobile App Redesign",
    para: "Mobile App Redesign in React Native and Expo SDK. should be done by today because of deadline urgent issues of our client",
    icon: <UserLock className="text-green-700" />,
    img: <Infinity />,
    text: <MessageCircleMore />,
    color: "w-30",
    inf: "11",
    mess: "8",
    bgcolor: "bg-red-300",
    textcolor: "text-red-600",
  },
  {
    heading: "Medium ",

    header: "API Integration",
    para: "APE Integration of lorem ipsum in round in the famos indestry in the world off the chain you can trust use it for your next project",
    icon: <Contact className="text-blue-700" />,
    img: <Infinity />,
    text: <MessageCircleMore />,
    color: "w-10",
    inf: "6",
    mess: "2",
    bgcolor: "bg-yellow-300  ",
    textcolor: "text-yellow-600",
  },
];
const schedule = [
  {
    heading: " Sprint Planning",
    para: " Starting soon ",
    icon: "Zoom Meeting",
    time: " 10:00 AM - 11:00 AM",
  },
  {
    heading: "Design Handoff",
    para: "Scheduled",
    icon: "Google Meeting",
    time: "01:00 PM - 02:00 PM",
  },
];
const Taskitemfirst = () => {
  return (
    <div className="bg-gray-300  text-black px-4 pt-5 rounded-2xl mt-4 w-full">
      {/* search bar  */}
      <div className="flex justify-between gap-7 bg-gray-400 rounded-2xl px-10 py-5">
        <div className=" py-3 px-5 rounded-3xl bg-white text-black">
          <div className="flex gap-2 items-center">
            <Search />

            <input
              type="text"
              placeholder="Search Task"
              className="outline-none"
            />
            <div className="flex items-center bg-gray-400 rounded-2xl  px-2 gap-1">
              <ScanBarcode />F
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-3 items-center">
          <div className="bg-white rounded-full p-3 ">
            <Mail />
          </div>
          <div className="bg-white rounded-full p-3 ">
            <Bell />
          </div>

          <div className="flex gap-2 items-center">
            <img src="../public/boy.png" alt="" width={40} />
            <div>
              <h1 className="font-bold text-lg">Totak Michal</h1>
              <span>michaltotak@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
      {/* task items */}

      <div>
        <div className="flex gap-5 ">
          {menuItems?.map((item) => (
            <Task key={item.name} {...item} />
          ))}
        </div>
      </div>
      {/* recently task */}
      <div className="border-gray-400 border-4 px-8 py-6 m-4">
        <div className="flex justify-between pb-4">
          <h1 className="font-bold text-lg">Recently Task</h1>
          <Ellipsis />
        </div>
        <div className="flex">
          <div className="flex gap-5 ">
            {task?.map((item) => (
              <Recentlytask key={item.name} {...item} />
            ))}
          </div>
        </div>
      </div>
      {/* Schedule page */}
      <div className="border-gray-400 border-4 px-8 py-6 m-4 w-lg rounded-2xl">
        <div className="flex justify-between pb-4">
          <h1 className="font-bold text-lg">Recently Task</h1>
          <Ellipsis />
        </div>
        <div className="bg-gray-400 rounded-lg  py-2">
          <div className="flex justify-evenly">
            <h1 className="bg-gray-100 rounded-lg px-10 py-2 flex gap-4 items-center">
              Meetings
              <span className="bg-red-500 rounded-full px-2.5 py-0.5">4</span>
            </h1>
            <h1 className="bg-gray-400 rounded-lg px-3 py-2 flex gap-4 items-center">
              Tasks
              <span className="bg-gray-500 rounded-full px-2.5 py-0.5">8</span>
            </h1>
          </div>
        </div>

        <div className="flex flex-col gap-4 my-3">
          {schedule?.map((item) => (
            <Scheduletask key={item.name} {...item} />
          ))}
        </div>
      </div>
      {/* List task */}
      <div>
        <div>
          <h1>List Task</h1>
          <div>
            <h1>Filter</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Taskitemfirst;
