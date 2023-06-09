import "../globals.css";
import FooterCopyright from "@/components/home/FooterCopyright";

export const metadata = {
  title: "Sign-Up",
  description: "Sistem Informasi Laporan Masyarakat",
};

export default function SignUpLayout({children}) {
  return (
    <main>
      {children}
      <FooterCopyright />
    </main>
  );
}
