import NavbarDashboard from "@/components/dashboard/NavbarDashboard";
import Sidebar from "@/components/dashboard/Sidebar";
import "../globals.css";

export const metadata = {
  title: "Dashboard",
  description: "Sistem Informasi Laporan Masyarakat",
};

export default function DashboardLayout({children}) {
  return (
    <section className="bg-[#D9D9D9]">
      <div className="flex relative">
        <Sidebar />
        <NavbarDashboard />
        {children}
      </div>
    </section>
  );
}
