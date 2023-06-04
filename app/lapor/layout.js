import "../globals.css";
import Navbar from "@/components/home/Navbar";
import FooterCopyright from "@/components/home/FooterCopyright";

export const metadata = {
  title: "Lapor",
  description: "Sistem Informasi Laporan Masyarakat",
};

export default function LaporLayout({children}) {
  return (
    <main>
      <Navbar />
      {children}
      <FooterCopyright />
    </main>
  );
}
