import "../../app/globals.css";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";

export const metadata = {
  title: "SILANTAR | Laporan",
  description: "Sistem Informasi Laporan Masyarakat",
};
 
export default function LaporanLayout({children}) {
  return (
    <>
      <Navbar />
      <section className="pt-14">{children}</section>
      <Footer />
    </>
  );
}
