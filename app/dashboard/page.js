"use client";
import DashboardSuperAdmin from "@/components/dashboard/super-admin/DashboardSuperAdmin";
import DashboardUser from "@/components/dashboard/DashboardUser";
import {useUserContext} from "@/contexts/UserContext";
import {redirect} from "next/navigation";

const Dashboard = () => {
  const {session, setSession} = useUserContext();
  if (!session) {
    redirect("/sign-in");
  }

  return (
    <div>
      {session.user && <DashboardUser />}
      {session.superAdmin && <DashboardSuperAdmin />}
    </div>
  );
};

export default Dashboard;
