import "../globals.css";
import {Nunito} from "next/font/google";
import Navbar from "@/components/home/Navbar";
import FooterCopyright from "@/components/home/FooterCopyright";

const nunito = Nunito({subsets: ["latin"]});

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
