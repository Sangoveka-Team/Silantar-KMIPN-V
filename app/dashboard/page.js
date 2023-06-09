import NavbarDashboard from "@/components/dashboard/NavbarDashboard";
import Sidebar from "@/components/dashboard/Sidebar";
import React from "react";

const Dashboard = () => {
  return (
    <div className="bg-[#D9D9D9] h-64 w-full">
      {/* <NavbarDashboard /> */}
      <Sidebar />
    </div>
  );
};

export default Dashboard;
