"use client";
import ColorStatus from "@/components/ColorStatus";
import DropdownStatus from "@/components/dashboard/DropdownStatus";
import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";

const Riwayat = () => {
  const [search, setSearch] = useState("");
  const [dataRiwayat, setDataRiwayat] = useState(null);
  const getDataRiwayat = async () => {
    if (typeof window !== "undefined") {
      await fetch("https://api.silantar.my.id/api/riwayat-lapor", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then(async (res) => {
          const data = await res.json();
          setDataRiwayat(data.payload);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    getDataRiwayat();
  }, []);

  if (dataRiwayat === null) {
    return (
      <p className="animate-pulse text-3xl font-bold text-center mt-10">
        Loading...
      </p>
    );
  }

  return (
    <div className="py-[0.375rem] px-2 relative sm:max-w-xl sm:mx-auto h-auto mb-10">
      <h1 className="text-[0.938rem] font-bold sm:text-2xl">
        Riwayat <span className="text-primary">Laporan</span>
      </h1>
      <div className="w-full relative">
        <details
          id="dropdown-dashboard"
          className="collapse bg-white flex flex-col items-center border-2 border-primary rounded-xl max-w-[240px] absolute right-0 z-[99]"
        >
          <summary className="collapse-title text-xs py-2 px-3 font-bold min-h-[33px] h-auto relative">
            Halaman riwayat laporan anda!
            <Image
              src="/icon/dropdown.svg"
              width={24}
              height={24}
              alt="dropdown icon"
              className="absolute right-0 top-1"
            />
          </summary>
          <div className="collapse-content pt-0 pb-2 px-3">
            <p className="text-[10px] font-normal">
              Anda dapat melihat kembali laporan-laporan yang telah anda buat
              sebelumnya dan melihat detail-detailnya!
            </p>
          </div>
        </details>
      </div>
      <div className="mt-[50px] w-full flex flex-col">
        <DropdownStatus />
        <div className="ml-36">
          <div className="input input-sm input-bordered w-[150px] max-w-xs focus:outline-none text-xs relative  border border-[#808080]">
            <input
              type="text"
              placeholder="Cari Laporan"
              className="w-full h-full focus:outline-none"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Image
              src="/icon/search.svg"
              width={18}
              height={18}
              alt="search icon"
              className={`absolute right-2 top-2 ${
                search.length > 0 ? "hidden" : "block"
              }`}
            />
          </div>
        </div>
      </div>
      {dataRiwayat.laporanHariIni.length !== 0 && (
        <div className="mt-5 flex flex-col gap-1">
          <h3 className="text-[15px] font-semibold sm:text-xl">Hari ini</h3>
          {dataRiwayat.laporanHariIni.map((data) => (
            <div className="flex flex-col p-[17px] bg-white border border-primary shadow-xl rounded-[5px] w-[18.375rem]">
              <div className="flex justify-between w-full">
                <h3 className="font-semibold text-[15px] text-primary">
                  {data.kategori_lapor}
                </h3>
                <Link
                  href={`/dashboard/riwayat/${data.id}`}
                  className="btn btn-green btn-xs text-[10px] rounded-[0.313rem] py-1 px-[6px] w-[85px] font-medium"
                >
                  Selengkapnya
                </Link>
              </div>
              <p className="text-xs mt-[7px]">{data.deskripsi}</p>
              <div className="flex justify-between w-full  text-xs mt-2 items-center">
                <p className="font-normal">{data.tanggal}</p>
                <ColorStatus title={data.status_lapor} />
              </div>
            </div>
          ))}
        </div>
      )}
      {dataRiwayat.laporanKemarin.length !== 0 && (
        <div className="mt-5 flex flex-col gap-1">
          <h3 className="text-[15px] font-semibold sm:text-xl">Kemarin</h3>
          {dataRiwayat.laporanKemarin.map((data) => (
            <div className="flex flex-col p-[17px] bg-white border border-primary shadow-xl rounded-[5px] w-[18.375rem]">
              <div className="flex justify-between w-full">
                <h3 className="font-semibold text-[15px] text-primary">
                  {data.kategori_lapor}
                </h3>
                <Link
                  href={`/dashboard/riwayat/${data.id}`}
                  className="btn btn-green btn-xs text-[10px] rounded-[0.313rem] py-1 px-[6px] w-[85px] font-medium"
                >
                  Selengkapnya
                </Link>
              </div>
              <p className="text-xs mt-[7px]">{data.deskripsi}</p>
              <div className="flex justify-between w-full  text-xs mt-2 items-center">
                <p className="font-normal">{data.tanggal}</p>
                <ColorStatus title={data.status_lapor} />
              </div>
            </div>
          ))}
        </div>
      )}
      {dataRiwayat.laporanMingguIni.length !== 0 && (
        <div className="mt-5 flex flex-col gap-1">
          <h3 className="text-[15px] font-semibold sm:text-xl">Minggu ini</h3>
          {dataRiwayat.laporanMingguIni.map((data) => (
            <div className="flex flex-col p-[17px] bg-white border border-primary shadow-xl rounded-[5px] w-[18.375rem]">
              <div className="flex justify-between w-full">
                <h3 className="font-semibold text-[15px] text-primary">
                  {data.kategori_lapor}
                </h3>
                <Link
                  href={`/dashboard/riwayat/${data.id}`}
                  className="btn btn-green btn-xs text-[10px] rounded-[0.313rem] py-1 px-[6px] w-[85px] font-medium"
                >
                  Selengkapnya
                </Link>
              </div>
              <p className="text-xs mt-[7px]">{data.deskripsi}</p>
              <div className="flex justify-between w-full  text-xs mt-2 items-center">
                <p className="font-normal">{data.tanggal}</p>
                <ColorStatus title={data.status_lapor} />
              </div>
            </div>
          ))}
        </div>
      )}
      {dataRiwayat.laporanBulanIni.length !== 0 && (
        <div className="mt-5 flex flex-col gap-1">
          <h3 className="text-[15px] font-semibold sm:text-xl">Bulan ini</h3>
          {dataRiwayat.laporanBulanIni.map((data) => (
            <div className="flex flex-col p-[17px] bg-white border border-primary shadow-xl rounded-[5px] w-[18.375rem]">
              <div className="flex justify-between w-full">
                <h3 className="font-semibold text-[15px] text-primary">
                  {data.kategori_lapor}
                </h3>
                <Link
                  href={`/dashboard/riwayat/${data.id}`}
                  className="btn btn-green btn-xs text-[10px] rounded-[0.313rem] py-1 px-[6px] w-[85px] font-medium"
                >
                  Selengkapnya
                </Link>
              </div>
              <p className="text-xs mt-[7px]">{data.deskripsi}</p>
              <div className="flex justify-between w-full  text-xs mt-2 items-center">
                <p className="font-normal">{data.tanggal}</p>
                <ColorStatus title={data.status_lapor} />
              </div>
            </div>
          ))}
        </div>
      )}
      {dataRiwayat.laporanLebihLama.length !== 0 && (
        <div className="mt-5 flex flex-col gap-1">
          <h3 className="text-[15px] font-semibold sm:text-xl">Lebih Lama</h3>
          {dataRiwayat.laporanLebihLama.map((data) => (
            <div className="flex flex-col p-[17px] bg-white border border-primary shadow-xl rounded-[5px] w-[18.375rem]">
              <div className="flex justify-between w-full">
                <h3 className="font-semibold text-[15px] text-primary">
                  {data.kategori_lapor}
                </h3>
                <Link
                  href={`/dashboard/riwayat/${data.id}`}
                  className="btn btn-green btn-xs text-[10px] rounded-[0.313rem] py-1 px-[6px] w-[85px] font-medium"
                >
                  Selengkapnya
                </Link>
              </div>
              <p className="text-xs mt-[7px]">{data.deskripsi}</p>
              <div className="flex justify-between w-full  text-xs mt-2 items-center">
                <p className="font-normal">{data.tanggal}</p>
                <ColorStatus title={data.status_lapor} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Riwayat;
