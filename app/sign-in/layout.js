import "../globals.css";
import FooterCopyright from "@/components/home/FooterCopyright";

export const metadata = {
  title: "Sign-in",
  description: "Sistem Informasi Laporan Masyarakat",
};

export default function SignInLayout({children}) {
  return (
    <main>
      {children}
      <FooterCopyright />
    </main>
  );
}
