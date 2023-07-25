"use client";
import ArrowUp from "@/components/home/ArrowUp";
import Footer from "@/components/home/Footer";
import LacakCard from "@/components/home/LacakCard";
import Navbar from "@/components/home/Navbar";
import Image from "next/image";
import Link from "next/link";

const imgMelapor = [
  {
    img: "/home/1.png",
  },
  {
    img: "/home/2.png",
  },
  {
    img: "/home/3.png",
  },
  {
    img: "/home/4.png",
  },
];

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* arrow up */}
      <ArrowUp />
      {/* arrow up end*/}
      {/* HERO */}
      <section id="hero">
        <div className="hero h-full lg:bg-cover bg-primary">
          <div className="w-full mt-11 h-auto pt-[26px] pl-[29px] pr-[25px] pb-[25px] relative">
            <Image
              src="/home/Icon-header-mobile.svg"
              width={167}
              height={136}
              alt="icon mobile"
              className="absolute right-[25px]"
            />
            <div className="space-y-[11px]">
              <h2 className="font-bold text-xl text-white w-[204px]">
                SISTEM INFORMASI LAPORAN LINGKUNGAN SEKITAR
              </h2>
              <Link
                href="/lapor"
                className="btn btn-white btn-xs h-[37px] font-semibold text-lg px-[13px]"
              >
                Lapor!
              </Link>
            </div>
            <div className="mt-[52px] space-x-[10px]">
              <a
                href="#"
                className="btn btn-white btn-xs h-[34px] bg-transparent border border-white text-white hover:bg-white hover:text-primary font-normal text-[15px]"
              >
                Cara melapor?
              </a>
              <a
                href="#"
                className="btn btn-white btn-xs h-[34px] font-semibold text-[15px]"
              >
                Lacak Laporan
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* HERO END */}

      <div className="pt-[19px] pl-[29px] pr-[25px] pb-[22px]">
        <div className="space-y-[11px]">
          <h3 className="text-primary font-semibold text-[15px]">
            TENTANG KAMI
          </h3>
          <p className="text-xs italic font-normal">
            <span className="text-primary font-semibold">SILANTAR</span>,
            platform sistem informasi berbasis website yang dibutuhkan
            masyarakat untuk melaporkan masalah lingkungan sekitar ke
            pemerintahan yang bersangkutan. Dengan alur
            masyarakat-kelurahan-dinas, kami berusaha membuat website ini dapat
            menjadi wadah komunikasi antar masyarakat dan pemerintah.
          </p>
        </div>
        <div className="mt-[11px] space-y-[10px]">
          <h3 className="font-semibold text-[15px] text-primary">
            MELAPOR DENGAN SILANTAR
          </h3>
          <div className="carousel w-full">
            {imgMelapor.map((data, index) => (
              <div
                key={index}
                id={`slide${index}`}
                className="carousel-item relative w-full justify-center"
              >
                <Image
                  src={data.img}
                  width={221}
                  height={221}
                  alt={`image cara melapor ${index + 1}`}
                  className="shadow-md"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2 ">
                  <a
                    href={
                      index === 0
                        ? `#slide${imgMelapor.length - 1}`
                        : `#slide${index - 1}`
                    }
                    className="btn btn-circle bg-transparent btn-sm w-9 h-9 border-none"
                  >
                    <Image
                      src="/icon/chevron-left-green.svg"
                      width={36}
                      height={36}
                      alt="arrow left"
                    />
                  </a>
                  <a
                    href={
                      index === imgMelapor.length - 1
                        ? `#slide0`
                        : `#slide${index + 1}`
                    }
                    className="btn btn-circle bg-transparent btn-sm w-9 h-9 border-none"
                  >
                    <Image
                      src="/icon/chevron-right-green.svg"
                      width={36}
                      height={36}
                      alt="arrow right"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-center gap-2">
            <span className="w-10 h-1 bg-primary block rounded-md"></span>
            <span className="w-10 h-1 bg-primary block rounded-md opacity-50"></span>
            <span className="w-10 h-1 bg-primary block rounded-md opacity-50"></span>
            <span className="w-10 h-1 bg-primary block rounded-md opacity-50"></span>
          </div>
        </div>
        <div className="mt-[23px] flex flex-col">
          <h3 className="font-semibold text-[15px] text-primary">
            LAPORAN TERBARU
          </h3>
          <div className="flex flex-col gap-[15px] mt-[15px] mb-[6px]">
            <Link
              href="#"
              className="pt-2 px-[13px] pb-[13px] border border-[#808080] rounded-[10px] w-[306px] space-y-[19px]"
            >
              <div className="space-y-[6px]">
                <h4 className="text-primary font-semibold text-[15px]">
                  Arus Lalu Lintas
                </h4>
                <p className="font-normal text-xs">
                  Kerusakan dijalan Sultan Adam dan terjadinya kemacetan
                  karenanya, mohon tindak lanjutnya.
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-xs font-normal">
                  2023 - 07 - 17 |{" "}
                  <span className="text-primary font-bold">Slamet Kopling</span>
                </div>
                <span className="bg-[#FFCECE] text-[#FF2222] rounded-xl px-[7px] py-[3px] text-xs font-semibold">
                  Ditolak
                </span>
              </div>
            </Link>
            <Link
              href="#"
              className="pt-2 px-[13px] pb-[13px] border border-[#808080] rounded-[10px] w-[306px] space-y-[19px]"
            >
              <div className="space-y-[6px]">
                <h4 className="text-primary font-semibold text-[15px]">
                  Fasilitas Umum
                </h4>
                <p className="font-normal text-xs">
                  halte bus smk 4 banjarmasin sudah berkarat dan hampir rusak,
                  membahayakan orang-orang yang menumpang duduk bersinggah untuk
                  istirahat...
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-xs font-normal">
                  2023-07-14 |{" "}
                  <span className="text-primary font-bold">Honda Mio</span>
                </div>
                <span className="bg-[#C6DAFF] text-[#276EF1] rounded-xl px-[7px] py-[3px] text-xs font-semibold">
                  Belum Diproses
                </span>
              </div>
            </Link>
          </div>
          <button className="text-primary font-medium italic text-xs self-end">
            Lihat semua..
          </button>
        </div>
        <div className="mt-[41px] space-y-[6px]">
          <h3 className="font-semibold text-[15px] text-primary">
            LACAK STATUS LAPORAN
          </h3>
          <p className="font-medium text-xs">
            Anda dapat memantau status laporan yang telah anda ajukan dengan
            fitur “Tiket Laporan”. Silahkan masukkan kode tiket disini.
          </p>
          <LacakCard />
        </div>
      </div>

      {/* footer */}
      <Footer />
      {/* footer END */}
    </div>
  );
}
