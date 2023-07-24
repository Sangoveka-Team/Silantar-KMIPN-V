import "./globals.css";
import {Nunito, Poppins} from "next/font/google";
import {UserContextProvider} from "@/contexts/UserContext";

// const nunito = Nunito({subsets: ["latin"]});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "SILANTAR",
  description: "Sistem Informasi Laporan Masyarakat",
};

export default function RootLayout({children}) {
  return (
    <html lang="en" className="scroll-smooth" data-theme="light">
      <body className={poppins.className}>
        <main>
          <UserContextProvider>{children}</UserContextProvider>
        </main>
      </body>
    </html>
  );
}
