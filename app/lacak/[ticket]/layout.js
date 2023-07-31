import Navbar from "@/components/home/Navbar";
import "../../../app/globals.css";

export const metadata = {
  title: "SILANTAR | Lacak Laporan",
  description: "Sistem Informasi Laporan Masyarakat",
};

export default function TicketDetailLayout({children}) {
  return (
    <>
      <Navbar />
      <section className="pt-14">{children}</section>;
    </>
  );
}
