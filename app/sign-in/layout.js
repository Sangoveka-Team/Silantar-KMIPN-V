import "../globals.css";
import FooterCopyright from "@/components/home/FooterCopyright";

export const metadata = {
  title: "SILANTAR | Sign-in",
  description: "Sistem Informasi Laporan Masyarakat",
};

export default function SignInLayout({children}) {
  return (
    <section>
      {children}
      <FooterCopyright />
    </section>
  );
}
