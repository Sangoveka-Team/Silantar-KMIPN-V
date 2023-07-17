"use client";
import DashboardSuperAdmin from "@/components/dashboard/super-admin/DashboardSuperAdmin";
import DashboardUser from "@/components/dashboard/DashboardUser";
import {useUserContext} from "@/contexts/UserContext";
import {redirect} from "next/navigation";
import DashboardAdminInstansi from "@/components/dashboard/admin-instansi/DashboardAdminInstansi";
import DashboardAdminPejabat from "@/components/dashboard/admin-pejabat/DashboardAdminPejabat";

const Dashboard = () => {
  const {session, setSession} = useUserContext();
  if (!session.isAuth) {
    return redirect("/sign-in");
  }

  return (
    <div>
      {session.user && <DashboardUser />}
      {session.superAdmin && <DashboardSuperAdmin />}
      {session.adminInstansi && <DashboardAdminInstansi />}
      {session.adminPejabat && <DashboardAdminPejabat />}
    </div>
  );
};

export default Dashboard;
