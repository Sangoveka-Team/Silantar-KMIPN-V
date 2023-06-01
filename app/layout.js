import "./globals.css";
import {Nunito} from "next/font/google";
import Navbar from "@/components/home/Navbar";

const nunito = Nunito({subsets: ["latin"]});

export const metadata = {
  title: "SILANTAR",
  description: "Sistem Informasi Laporan Masyarakat",
};

export default function RootLayout({children}) {
  return (
    <html lang="en" className="scroll-smooth" data-theme="light">
      <body className={nunito.className}>
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
