"use client";
import DashboardSuperAdmin from "@/components/dashboard/super-admin/DashboardSuperAdmin";
import DashboardUser from "@/components/dashboard/DashboardUser";
import {redirect} from "next/navigation";
import DashboardAdminInstansi from "@/components/dashboard/admin-instansi/DashboardAdminInstansi";
import DashboardAdminPejabat from "@/components/dashboard/admin-pejabat/DashboardAdminPejabat";
import {useEffect, useState} from "react";
import dynamic from "next/dynamic";

const DashboardUserDynamic = dynamic(
  () => import("../../components/dashboard/DashboardUser"),
  {ssr: false}
);

const Dashboard = () => {
  const [userLevel, setUserLevel] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("token") === "") redirect("/sign-in");
    }
  }, []);

  useEffect(() => {
    setUserLevel(localStorage.getItem("userLevel"));
  }, []);

  if (userLevel === null)
    return (
      <p className="animate-pulse text-3xl font-bold text-center mt-10">
        Loading...
      </p>
    );
  return (
    <div>
      {userLevel === "Pelapor" && <DashboardUserDynamic />}
      {userLevel === "Superadmin" && <DashboardSuperAdmin />}
      {userLevel === "Dinas" && <DashboardAdminInstansi />}
      {userLevel === "Kelurahan" && <DashboardAdminPejabat />}
    </div>
  );
};

export default Dashboard;
