"use client";
import CardDetailLaporan from "@/components/CardDetailLaporan";
import LacakCard from "@/components/home/LacakCard";
import dynamic from "next/dynamic";
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

const CardDetailLaporanDynamic = dynamic(
  () => import("../../../components/CardDetailLaporan"),
  {ssr: false}
);

const LacakDetail = ({params}) => {
  const [data, setData] = useState({});
  const [images, setImages] = useState([]);

  const getDataAll = async () => {
    await fetch("https://api.silantar.my.id/api/get-laporan", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (res) => {
      const datas = await res.json();
      const filtering = datas.payload.semuaLaporan.filter(
        (e) => e.id_laporan === params.ticket
      );
      filtering.map((e) => {
        setData(e);
        console.log(e);
        const gambar = datas.payload.semuaGambar.filter(
          (image) => e.id === parseInt(image.laporan_id)
        );
        console.log(gambar);
        setImages(gambar);
        console.log(datas.payload.semuaGambar);
      });
    });
  };

  // console.log(data);
  // console.log(images);
  useEffect(() => {
    getDataAll();
  }, []);

  if (images.length === 0) {
    return <p></p>;
  }
  return (
    <div className="mt-2 mx-[20px]">
      <div className="space-y-[15px]">
        <h3 className="font-semibold text-[15px] text-primary">
          LACAK STATUS LAPORAN
        </h3>
        <LacakCard id={params.ticket} />
      </div>
      <div className="mt-[13px]">
        {params.ticket === data.id_laporan ? (
          <CardDetailLaporanDynamic data={data} images={images} backUrl="/" />
        ) : (
          <h3 className="font-bold text-center text-xl">Laporan Tidak Ada</h3>
        )}
      </div>
    </div>
  );
};

export default LacakDetail;
