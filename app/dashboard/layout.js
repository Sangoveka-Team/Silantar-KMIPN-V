import AddButton from "@/components/dashboard/AddButton";
import NavbarDashboard from "@/components/dashboard/NavbarDashboard";
import Sidebar from "@/components/dashboard/Sidebar";
import "../globals.css";

export const metadata = {
  title: "Dashboard",
  description: "Sistem Informasi Laporan Masyarakat",
};

export default function DashboardLayout({children}) {
  return (
    <section className="bg-[#D0D0D0]">
      <Sidebar />
      <div className="relative min-h-[800px] pl-12 overflow-hidden">
        <AddButton />
        <NavbarDashboard />
        {children}
        <footer className="bg-[#808080] pl-[55px] text-white text-[0.5rem] h-[1.313rem] flex items-center  absolute bottom-0 w-full z-0">
          Copyright SILANTAR 2023-2023 © All Rights Reserved.
        </footer>
      </div>
    </section>
  );
}
