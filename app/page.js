"use client";
import ArrowUp from "@/components/home/ArrowUp";
import Footer from "@/components/home/Footer";
import LacakCard from "@/components/home/LacakCard";
import LaporanTerbaruCard from "@/components/home/LaporanTerbaruCard";
import Navbar from "@/components/home/Navbar";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";

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

const dummyDataLaporan = [
  {
    category: "Arus Lalu Lintas",
    gl: {
      lat: -3.332062,
      lng: 114.580431,
    },
    img: [
      "/dummy-images/traffic-lights.png",
      "/dummy-images/polluted-river.png",
      "/dummy-images/scattered-tree-branches.png",
    ],
    status: "Ditolak",
    ticket: "2348748247623423",
    catatan: "lorem Ipsum dolor sit amet, consectetur adipiscing el",
    date: "17-07-2023",
    address: "Jl. kayu tangi 2",
    deskripsi:
      "Kerusakan lampu lalu lintas didaerah kayutangi, alur pengendara jadi terganggujkadkjawdawdiub",
    namaPelapor: "Slamet Kopling",
  },
  {
    category: "Fasilitas Umum",
    gl: {
      lat: -3.332062,
      lng: 114.580431,
    },
    img: [
      "/dummy-images/traffic-lights.png",
      "/dummy-images/polluted-river.png",
      "/dummy-images/scattered-tree-branches.png",
    ],
    status: "Belum Diproses",
    ticket: "2348748249012830",
    catatan: "lorem Ipsum dolor sit amet, consectetur adipiscing el",
    date: "14-07-2023",
    address: "Jl. kayu tangi 3",
    deskripsi:
      "halte bus smk 4 banjarmasin sudah berkarat dan hampir rusak, membahayakan orang-orang yang menumpang duduk bersinggah untuk istirahat...",
    namaPelapor: "Honda Mio",
  },
];
const WhatsappBoxDynamic = dynamic(
  () => import("../components/home/WhatsappBox"),
  {ssr: false}
);

export default function Home() {
  const [dataTerbaru, setDataTerbaru] = useState(null);

  const getDataTerbaru = async () => {
    await fetch("https://api.silantar.my.id/api/laporan-terbaru", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        const data = await res.json();
        setDataTerbaru(data.payload);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDataTerbaru();
  }, []);

  if (dataTerbaru === null) {
    return (
      <p className="animate-pulse text-3xl font-bold text-center mt-10">
        Loading...
      </p>
    );
  }

  return (
    <div>
      <Navbar />
      {/* arrow up */}
      <ArrowUp />
      {/* arrow up end*/}
      {/* whatsapp icon */}
      <WhatsappBoxDynamic />
      {/* whatsapp icon */}

      {/* HERO */}
      <section id="hero">
        <div className="hero h-full lg:bg-cover bg-primary">
          <div className="w-full mt-11 h-auto pt-[26px] pl-[29px] pr-[25px] pb-[25px] relative">
            <Image
              src="/home/Icon-header-mobile.svg"
              width={167}
              height={136}
              alt="icon mobile"
              className="absolute right-[25px] top-[80px]"
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
                href="#cara-melapor"
                className="btn btn-white btn-xs h-[34px] bg-transparent border border-white text-white hover:bg-white hover:text-primary font-normal text-[15px]"
              >
                Cara melapor?
              </a>
              <a
                href="#lacak-laporan"
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
        <div id="cara-melapor" className="mt-[11px] space-y-[10px]">
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
            <LaporanTerbaruCard datas={dataTerbaru} />
          </div>
          <Link
            href="/laporan"
            className="text-primary font-medium italic text-xs self-end"
          >
            Lihat semua..
          </Link>
        </div>
        <div id="lacak-laporan" className="mt-[41px] space-y-[6px]">
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
