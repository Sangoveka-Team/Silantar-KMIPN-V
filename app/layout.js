import "./globals.css";
import {Nunito} from "next/font/google";

const nunito = Nunito({subsets: ["latin"]});

export const metadata = {
  title: "SILANTAR",
  description: "Sistem Informasi Laporan Masyarakat",
};

export default function RootLayout({children}) {
  return (
    <html lang="en" className="scroll-smooth" data-theme="light">
      <body className={nunito.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
