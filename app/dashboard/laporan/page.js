"use client";
import TableLaporan from "@/components/dashboard/TableLaporan";
import {useEffect, useState} from "react";

const Laporan = () => {
  const [data, setData] = useState(null);

  const getLaporan = async () => {
    await fetch(
      `https://api.silantar.my.id/api/${
        localStorage.getItem("userLevel") === "Kelurahan"
          ? "show"
          : "all-laporan"
      }`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    ).then(async (res) => {
      const data = await res.json();
      setData(data.payload);
    });
  };

  useEffect(() => {
    getLaporan();
  }, []);

  if (data === null) {
    return (
      <p className="animate-pulse text-3xl font-bold text-center mt-10">
        Loading...
      </p>
    );
  }
  return (
    <div className="my-5 ml-[23px] mr-[31px]">
      <h1 className="font-bold text-[22px]">
        Semua <span className="text-primary">Laporan</span>
      </h1>
      <TableLaporan data={data} />
    </div>
  );
};

export default Laporan;
