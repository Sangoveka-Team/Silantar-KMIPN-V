"use client";
import LaporanTerbaruCard from "@/components/home/LaporanTerbaruCard";
import Pagination from "@/components/home/Pagination";
import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";

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

const Laporan = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const [currentPosts, setCurrentPosts] = useState([]);
  const [data, setData] = useState([]);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const getDataAll = async () => {
    await fetch("https://api.silantar.my.id/api/get-laporan", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (res) => {
      const data = await res.json();
      setData(data.payload.semuaLaporan);
      setCurrentPosts(
        data.payload.semuaLaporan.slice(firstPostIndex, lastPostIndex)
      );
    });
  };

  useEffect(() => {
    getDataAll();
  }, []);

  if (currentPosts.length === 0 && data === null) {
    <p className="animate-pulse text-3xl font-bold text-center mt-10">
      Loading...
    </p>;
  }
  return (
    <div className="mt-2 flex flex-col justify-center items-center">
      <div>
        <div className="flex items-center font-medium text-[15px] mb-[11px]">
          <Link href="/">
            <Image
              src="/icon/arrow-left-black.svg"
              width={24}
              height={24}
              alt="arrow left"
              className="mr-2"
            />
          </Link>
          <h2 className="text-primary">LAPORAN TERBARU</h2>
        </div>
        <div className="flex flex-col gap-[15px] mb-[15px]">
          <LaporanTerbaruCard datas={currentPosts} />
        </div>
        <div className="mb-[19px] flex justify-center">
          <div className="join">
            <Pagination
              totalPosts={data.length}
              postsPerPage={postsPerPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laporan;
