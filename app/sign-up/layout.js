import "../globals.css";
import FooterCopyright from "@/components/home/FooterCopyright";
import {redirect} from "next/navigation";

export const metadata = {
  title: "Sign-Up",
  description: "Sistem Informasi Laporan Masyarakat",
};

export default function SignUpLayout({children}) {
  return (
    <section>
      {children}
      <FooterCopyright />
    </section>
  );
}
