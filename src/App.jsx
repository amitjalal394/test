import Dashboarditem from "./Dashboarditem";
import Sidebar from "./Sidebar";
import React from "react";
import Taskitemfirst from "./taskitems/Taskitemfirst";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div className="flex gap-5 bg-gray-100 rounded-2xl">
      <Sidebar />
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Taskitemfirst />} /> */}
          <Route path="/dashboard" element={<Dashboarditem />} />
          <Route path="/tasks" element={<Taskitemfirst />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
