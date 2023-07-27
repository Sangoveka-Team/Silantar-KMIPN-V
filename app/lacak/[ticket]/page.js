"use client";
import CardDetailLaporan from "@/components/CardDetailLaporan";
import LacakCard from "@/components/home/LacakCard";
import {useEffect, useState} from "react";

const dummyDataLaporan = {
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
};

const LacakDetail = ({params}) => {
  const [data, setData] = useState({});
  const [showMap, setShowMap] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(dummyDataLaporan);
    setData(dummyDataLaporan);
  }, []);
  return (
    <div className="mt-2 mx-[20px]">
      <div className="space-y-[15px]">
        <h3 className="font-semibold text-[15px] text-primary">
          LACAK STATUS LAPORAN
        </h3>
        <LacakCard id={params.ticket} />
      </div>
      <div className="mt-[13px]">
        {params.ticket === data.ticket ? (
          <CardDetailLaporan data={dummyDataLaporan} backUrl="/" />
        ) : (
          <h3 className="font-bold text-center text-xl">Laporan Tidak Ada</h3>
        )}
      </div>
    </div>
  );
};

export default LacakDetail;
