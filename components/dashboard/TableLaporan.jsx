"use client";
import {listDaerah, listKategori} from "@/data";
import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";
import ColorStatus from "../ColorStatus";

const TableLaporan = ({data}) => {
  const [search, setSearch] = useState("");
  const [dataLaporan, setDataLaporan] = useState([]);

  const handleFilterKategori = (e) => {
    let filtering = data.filter((filter) =>
      e.target.value.includes(filter.kategori)
    );
    setDataLaporan(filtering);
  };

  const handleFilterStatus = (e) => {
    let filtering = data.filter((filter) =>
      e.target.value.includes(filter.statusLaporan)
    );
    setDataLaporan(filtering);
  };

  useEffect(() => {
    setDataLaporan(data);
  }, []);

  if (data === null) {
    <p className="animate-pulse text-3xl font-bold text-center mt-10">
      Loading...
    </p>;
  }

  return (
    <div className="mt-[17px] bg-white rounded-xl">
      <div className="py-8 px-[30px]">
        <div className="flex md:flex-row flex-col justify-between items-center gap-5">
          <h2 className="font-bold text-[22px]">
            Laporan <span className="text-primary">Masuk</span>
          </h2>
          <div className="flex gap-[17px]">
            {/* Kategori */}
            <select
              className="select select-bordered border-[#808080] text-[#808080] max-w-xs rounded-2xl"
              onChange={handleFilterKategori}
            >
              <option disabled selected>
                Kategori
              </option>
              {listKategori.map((list, index) => (
                <option key={index}>{list.value}</option>
              ))}
            </select>
            {/* Daerah */}
            <select className="select select-bordered border-[#808080] text-[#808080] max-w-xs rounded-2xl">
              <option disabled selected>
                Daerah
              </option>
              {listDaerah.map((list, index) => (
                <option key={index}>{list.value}</option>
              ))}
            </select>
            {/* Status */}
            <select
              className="select select-bordered border-[#808080] text-[#808080] max-w-xs rounded-2xl"
              onChange={handleFilterStatus}
            >
              <option disabled selected>
                Status
              </option>
              <option>Tuntas</option>
              <option>Diproses</option>
              <option>Belum Diproses</option>
              <option>Ditolak</option>
            </select>

            <div className="relative">
              <input
                type="text"
                placeholder="Cari laporan..."
                className="input input-bordered w-full max-w-xs rounded-2xl border-[#808080] text-[#808080]"
                onChange={(e) => setSearch(e.target.value)}
              />
              <Image
                src="/icon/search-normal.svg"
                width={25}
                height={25}
                alt="search icon"
                className={`absolute right-[20px] bottom-[11px] pointer-events-none ${
                  search.length > 0 ? "hidden" : "block"
                }`}
              />
            </div>
          </div>
        </div>
        {/* TABLE */}
        <div className="mt-[26px]">
          <div className="overflow-x-auto">
            <table className="table text-[#464E5F]">
              {/* head */}
              <thead>
                <tr className="bg-[#F3F6F9]">
                  <th className="rounded-l-md">Nama Pelapor</th>
                  <th>Kategori Laporan</th>
                  <th>Daerah</th>
                  <th>Status Laporan</th>
                  <th className="rounded-r-md">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {dataLaporan.map((data) => (
                  <tr key={data.id}>
                    <th className="flex gap-[15px] items-center max-w-[282px]">
                      <div className="avatar">
                        <div className="w-[50px] h-[50px] rounded-lg">
                          {/* <Image
                            src={""}
                            width={50}
                            height={50}
                            alt="avatar icon"
                          /> */}
                        </div>
                      </div>
                      <span className="font-semibold text-sm">{data.nama}</span>
                    </th>
                    <td className="max-w-[131px]">{data.kategori_lapor}</td>
                    <td className="max-w-[131px]">{data.daerah_kelurahan}</td>
                    <td>
                      <ColorStatus title={data.status_lapor} />
                    </td>
                    <td className="text-center">
                      <Link
                        href={`/dashboard/laporan/${data.id}`}
                        className="btn btn-green btn-xs py-[9px] px-3 h-auto"
                      >
                        Selengkapnya
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableLaporan;
