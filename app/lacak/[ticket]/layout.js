import Navbar from "@/components/home/Navbar";
import "../../../app/globals.css";

export const metadata = {
  title: "Lapor",
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
