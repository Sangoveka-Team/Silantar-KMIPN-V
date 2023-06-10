import "../globals.css";
import FooterCopyright from "@/components/home/FooterCopyright";

export const metadata = {
  title: "Lapor",
  description: "Sistem Informasi Laporan Masyarakat",
};

export default function LaporLayout({children}) {
  return (
    <section>
      {children}
      <FooterCopyright />
    </section>
  );
}
