import "../globals.css";
import FooterCopyright from "@/components/home/FooterCopyright";

export const metadata = {
  title: "SILANTAR | Sign-Up",
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
