"use client";
import dynamic from "next/dynamic";
import {useEffect, useState} from "react";

const CardDetailLaporanDynamic = dynamic(
  () => import("../../../../components/CardDetailLaporan"),
  {ssr: false}
);

const RiwayatDetail = ({params}) => {
  const [dataLaporan, setDataLaporan] = useState(null);

  const getDataDetail = async (id) => {
    if (typeof window !== "undefined") {
      await fetch(`https://api.silantar.my.id/api/show-laporan/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then(async (res) => {
        const data = await res.json();
        setDataLaporan(data.payload);
      });
    }
  };

  useEffect(() => {
    getDataDetail(params.id);
  }, []);

  if (dataLaporan === null) {
    return (
      <p className="animate-pulse text-3xl font-bold text-center mt-10">
        Loading...
      </p>
    );
  }

  return (
    <div className="py-[0.375rem] px-2 w-auto">
      <h1 className="text-[15px] font-semibold sm:text-2xl">
        Riwayat <span className="text-primary">Laporan</span>
      </h1>
      <CardDetailLaporanDynamic
        data={dataLaporan.dataLaporan}
        images={dataLaporan.gambarLaporan}
        backUrl="/dashboard/riwayat"
      />
    </div>
  );
};

export default RiwayatDetail;
