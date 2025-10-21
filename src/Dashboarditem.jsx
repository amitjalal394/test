import {
  ArrowBigUp,
  Bell,
  Bird,
  BookCopy,
  CirclePause,
  Fingerprint,
  Forklift,
  Globe,
  Mail,
  Plus,
  Rainbow,
  ScanBarcode,
  Search,
  ShipWheel,
  SquareStop,
  SunSnow,
  User,
  Video,
} from "lucide-react";
import React from "react";
import Dashcompartment from "./Dashcompartment";
import Newproject from "./Newproject";

const projectItems = [
  {
    name: "Develop API Endpoint",
    icon: <ShipWheel size={30} className="items-center text-blue-500" />,
    date: "Due Date: Nov 26, 2025",
  },
  {
    name: "Onboarding Flow",
    icon: <SunSnow className="text-green-500" size={30} />,
    date: "Due Date: Nov 28, 2025",
  },
  {
    name: "Bulid Dashboard",
    icon: <Bird className="text-yellow-500" size={30} />,
    date: "Due Date: Nov 30, 2025",
  },
  {
    name: "Optimize Page Load",
    icon: <BookCopy className="text-orange-500" size={30} />,
    date: "Due Date: Dec 5, 2025",
  },
  {
    name: "Cross-Browser Testing",
    icon: <Rainbow className="text-purple-500" size={30} />,
    date: "Due Date: Dec 6, 2025",
  },
];
const teamCollabs = [
  {
    name: "Elexgendra Dreff",
    icon: <User size={30} className="text-amber-500" />,
    date: "Working on github project responsteory",
  },
  {
    name: "Edwin Adenike",
    icon: <Fingerprint size={30} className="text-cyan-500" />,
    date: "Working on Integrat user authentication with firebase",
  },
  {
    name: "Mark Adenike",
    icon: <Forklift size={30} className="text-pink-500" />,
    date: "Working on develop search Filter functionality",
  },
  {
    name: "Alex George",
    icon: <Globe size={30} className="text-green-500" />,
    date: "Working on responsive layout from homepage",
  },
];

const Dashboarditem = () => {
  const menuItems = [
    {
      name: "Total project",
      icon: 2,
      heading: 24,
      para: "incressed from last month",
      img: <ArrowBigUp size={13} />,
      bgcolor: "bg-yellow-500",
    },
    {
      name: "Ended project",
      icon: 3,
      heading: 12,
      para: "incressed from last month",
      img: <ArrowBigUp size={13} />,
      bgcolor: "bg-yellow-500",
    },
    {
      name: "Running project",
      icon: 5,
      heading: 10,
      para: "incressed from last month",
      img: <ArrowBigUp size={13} />,
      bgcolor: "bg-yellow-500",
    },
    {
      name: "Pending project",
      icon: "on Discuss",
      heading: 2,
      para: "",
    },
  ];

  return (
    <div className="bg-gray-300  text-black px-4 pt-5 rounded-2xl mt-4 w-full">
      {/*  */}
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

      {/* 2 compatment */}
      <div className="bg-gray-400 rounded-2xl px-3 py-5 mt-5">
        <div className="flex justify-between">
          <div>
            <h1 className="font-extrabold text-2xl">
              Dashboard <br />
            </h1>
            <span className="text-xs">
              Plan,Prioritize,and accomplish your task is ease.
            </span>
          </div>
          <div className="flex justify-between gap-2">
            <button className="flex gap-1 items-center bg-green-400 px-2  rounded-4xl">
              <Plus />
              Add project
            </button>
            <button className="border-green-400 border-2 text-green-400 rounded-4xl px-2 bg-white">
              Import data
            </button>
          </div>
        </div>

        {/* 3 compatment */}
        <div className="flex gap-3">
          <div className="flex gap-3">
            {menuItems?.map((item) => (
              <Dashcompartment key={item.name} {...item} />
            ))}
          </div>
        </div>

        {/* 4 compatment */}
        <div className="flex gap-3">
          <div className="bg-gray-300 rounded-2xl px-3 py-5 mt-5">
            <h1 className="font-extrabold text-2xl py-2">Project Analytics</h1>
            <div className="flex gap-2 items-end">
              <div className="text-center">
                <div
                  className="bg-white rounded-full h-30 w-15"
                  style={{
                    background:
                      "repeating-conic-gradient(black 0deg 3deg, transparent 1deg 6deg)",
                  }}
                ></div>
                <h1>S</h1>
              </div>
              <div className="text-center">
                <div className="bg-green-400 rounded-full h-33 w-15"></div>
                <h1>M</h1>
              </div>
              <div className="text-center">
                <div className="bg-green-800 rounded-full h-25 w-15"></div>
                <h1>T</h1>
              </div>
              <div className="text-center">
                <div className="bg-cyan-400 rounded-full h-35 w-15"></div>
                <h1>W</h1>
              </div>
              <div className="text-center">
                <div
                  className="bg-white rounded-full h-38 w-15"
                  style={{
                    background:
                      "repeating-conic-gradient(black 0deg 3deg, transparent 1deg 6deg)",
                  }}
                ></div>
                <h1>T</h1>
              </div>
              <div className="text-center">
                <div
                  className="bg-white rounded-full h-23 w-15"
                  style={{
                    background:
                      "repeating-conic-gradient(black 0deg 3deg, transparent 1deg 6deg)",
                  }}
                ></div>
                <h1>F</h1>
              </div>
              <div className="text-center">
                <div
                  className="bg-white rounded-full h-30 w-15"
                  style={{
                    background:
                      "repeating-conic-gradient(black 0deg 3deg, transparent 1deg 6deg)",
                  }}
                ></div>
                <h1>S</h1>
              </div>
            </div>
          </div>

          {/*5 compatment  */}
          <div className="bg-gray-300 rounded-2xl px-3 py-5 mt-5">
            <h1 className="font-extrabold text-2xl my-3">Reminders</h1>
            <h1 className="text-green-400 text-2xl my-2 font-bold">
              Meeting with ARC Company
            </h1>
            <p className="my-2">Time :02:00 PM - 04:00 PM</p>
            <div className="text-center flex items-center justify-center">
              <button className="bg-green-600 flex items-center gap-2 text-white rounded-3xl px-5 py-3 my-5 text-center hover:bg-green-400 hover:text-black">
                <span>
                  <Video size={20} />
                </span>
                Start Meeting
              </button>
            </div>
          </div>
          {/* 6 compatment */}
          <Newproject items={projectItems} />
          <div className="flex gap-3"></div>
        </div>

        {/* 7 compatment */}
        <div className="flex gap-3">
          <div>
            <Newproject items={teamCollabs} />
          </div>
          {/* 8 compatment */}
          <div className="bg-gray-300 rounded-2xl px-3 py-5 mt-5">
            <h1 className="my-4 border-b-2 text-center w-[40%] py-1 text-2xl">
              Project Progress
            </h1>

            <div className="flex justify-center items-center my-3">
              <div className="relative w-48 h-24 overflow-hidden">
                <div className="absolute w-48 h-48 rounded-full border-[12px] border-t-transparent border-l-transparent border-black rotate-[230deg]"></div>
                <div className="absolute w-48 h-48 rounded-full border-[12px] border-t-transparent border-l-transparent border-blue-500 rotate-[135deg]"></div>
                <div className="absolute w-48 h-48 rounded-full border-[12px] border-t-transparent border-b-transparent border-green-500 rotate-[250deg]"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-xl font-semibold text-gray-800">
                  43%
                  <h1 className="text-sm font-normal text-gray-500">
                    Ended Project
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-10">
              <div className="flex items-center gap-2">
                <div className="bg-blue-500 rounded-full w-4 h-4"></div>
                <h1>Completed</h1>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-full w-4 h-4"></div>
                <h1> In process</h1>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-black rounded-full w-4 h-4"></div>
                <h1> Pending</h1>
              </div>
            </div>
          </div>
          {/* 9 compatment */}
          <div className="bg-green-600 rounded-2xl px-20 py-5 mt-5">
            <h1 className="text-2xl font-bold uppercase border-b-4">
              Time Tracker
            </h1>
            <h1 className="font-extrabold text-4xl py-5 text-center">
              01:15:33
            </h1>
            <div className="flex  items-center gap-4 justify-center">
              <button>
                <CirclePause
                  size={50}
                  className="bg-white rounded-3xl px-2 py-1 hover:bg-gray-400 hover:text-white"
                />
              </button>
              <button>
                <SquareStop
                  size={50}
                  className="bg-red-500  rounded-3xl px-2 py-1 hover:bg-red-300  text-red-900"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboarditem;
