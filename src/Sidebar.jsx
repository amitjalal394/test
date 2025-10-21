import {
  Aperture,
  Calendar,
  ChartNoAxesCombined,
  Drama,
  LayoutDashboard,
  LifeBuoy,
  LogOut,
  Rocket,
  Settings,
  Users,
} from "lucide-react";
import React from "react";
import MenuItem from "./MenuItem";

const menuItems = [
  {
    name: "Dashboard",
    icon: <LayoutDashboard />,
    href: "/dashboard",
  },
  {
    name: "Tasks",
    icon: <Drama />,
    para: "15+",
    href: "/tasks",
  },
  {
    name: "Calendar",
    icon: <Calendar />,
    href: "/calendar",
  },
  {
    name: "Analytics",
    icon: <ChartNoAxesCombined />,
    href: "/analytics",
  },
  {
    name: "Team",
    icon: <Users />,
    href: "/team",
  },
];
// genral
const generalItems = [
  {
    name: "Settings",
    icon: <Settings />,
  },
  {
    name: "Help",
    icon: <LifeBuoy />,
  },
  {
    name: "Logout",
    icon: <LogOut />,
  },
];
const Sidebar = () => {
  return (
    <div className="bg-gray-300  text-black px-8 pt-5 rounded-2xl mt-4 ">
      {/* sidebar title */}
      <div className="bg-gray-400 p-4 rounded-2xl">
        <div className="flex gap-4">
          <Aperture />
          <h1>Donezo</h1>
        </div>
      </div>

      {/* \menu section */}
      <div>
        <h1 className="mt-17 mb-7 font-extrabold text-2xl">Menu</h1>
        <div className="space-y-4">
          {menuItems?.map((item) => (
            <MenuItem key={item.name} {...item} />
          ))}
        </div>
      </div>

      {/* general section */}
      <div>
        <h1 className="mt-17 mb-7 font-extrabold text-2xl">General</h1>
        <div className="space-y-6">
          {generalItems?.map((item) => (
            <MenuItem key={item.name} {...item} />
          ))}
        </div>
      </div>
      {/* download section */}
      <div className="bg-green-200 rounded-2xl px-9 py-4 my-10">
        <Rocket />
        <h1 className="font-bold text-2xl">
          Download our <br /> mobile app
        </h1>
        <p className="text-xs my-3">Get esay in another way </p>
        <div className="bg-green-900 text-white border p-2 text-center rounded-4xl my-4">
          <button>Download</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
