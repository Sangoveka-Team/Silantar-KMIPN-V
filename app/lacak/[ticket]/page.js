"use client";
import CardDetailLaporan from "@/components/CardDetailLaporan";
import LacakCard from "@/components/home/LacakCard";
import dynamic from "next/dynamic";
import {useEffect, useState} from "react";

const CardDetailLaporanDynamic = dynamic(
  () => import("../../../components/CardDetailLaporan"),
  {ssr: false}
);

const LacakDetail = ({params}) => {
  const [data, setData] = useState({});
  const [images, setImages] = useState([]);
  const [isClient, setIsClient] = useState(false);

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
        const gambar = datas.payload.semuaGambar.filter(
          (image) => e.id === parseInt(image.laporan_id)
        );
        setImages(gambar);
      });
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);
      getDataAll();
    }
  }, []);

  if (!isClient) {
    return (
      <p className="animate-pulse text-3xl font-bold text-center mt-10">
        Loading...
      </p>
    );
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
