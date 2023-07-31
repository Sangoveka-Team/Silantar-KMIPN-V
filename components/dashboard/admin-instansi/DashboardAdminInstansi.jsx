"use client";
import {useDataContext} from "@/contexts/DataContext";
import Image from "next/image";
import {useEffect} from "react";
import TableLaporan from "../TableLaporan";

const DashboardAdminInstansi = () => {
  const {data, setData} = useDataContext();
  const getData = async () => {
    if (typeof window !== "undefined") {
      await fetch("https://api.silantar.my.id/api/dashboard-dinas", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then(async (res) => {
        const data = await res.json();
        setData(data.payload);
      });
    }
  };

  useEffect(() => {
    getData();
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
      <h1 className="font-bold text-[22px]">Dashboard</h1>
      <div className="flex gap-5 flex-wrap mt-[17px]">
        <div className="bg-primary w-[200px] h-[148px] px-4 pt-[30px] pb-[40px] flex rounded-2xl relative">
          <div className="text-white font-bold">
            <div className="text-[32px]">{data.allLaporan}</div>
            <p className="text-sm mt-4">SEMUA LAPORAN</p>
          </div>
          <div className="absolute right-4">
            <Image src="/icon/all.svg" width={55} height={40} alt="all icon" />
          </div>
        </div>
        <div className="bg-primary w-[200px] h-[148px] px-4 pt-[30px] pb-[40px] flex rounded-2xl relative">
          <div className="text-white font-bold">
            <div className="text-[32px]">{data.laporanTuntas}</div>
            <p className="text-sm mt-4">LAPORAN TUNTAS</p>
          </div>
          <div className="absolute right-4">
            <Image src="/icon/all.svg" width={55} height={40} alt="all icon" />
          </div>
        </div>
        <div className="bg-primary w-[200px] h-[148px] px-4 pt-[30px] pb-[40px] flex rounded-2xl relative">
          <div className="text-white font-bold">
            <div className="text-[32px]">{data.laporanDiproses}</div>
            <p className="text-sm mt-4">LAPORAN DIPROSES</p>
          </div>
          <div className="absolute right-4">
            <Image src="/icon/all.svg" width={55} height={40} alt="all icon" />
          </div>
        </div>
        <div className="bg-primary w-[200px] h-[148px] px-4 pt-[30px] pb-[40px] flex rounded-2xl relative">
          <div className="text-white font-bold">
            <div className="text-[32px]">{data.laporanBelumDiproses}</div>
            <p className="text-sm mt-4">BELUM DIPROSES</p>
          </div>
          <div className="absolute right-4">
            <Image src="/icon/all.svg" width={55} height={40} alt="all icon" />
          </div>
        </div>
        <div className="bg-primary w-[200px] h-[148px] px-4 pt-[30px] pb-[40px] flex rounded-2xl relative">
          <div className="text-white font-bold">
            <div className="text-[32px]">{data.laporanDitolak}</div>
            <p className="text-sm mt-4">LAPORAN DITOLAK</p>
          </div>
          <div className="absolute right-4">
            <Image src="/icon/all.svg" width={55} height={40} alt="all icon" />
          </div>
        </div>
      </div>
      <TableLaporan data={data.laporanDinas} />
    </div>
  );
};

export default DashboardAdminInstansi;
