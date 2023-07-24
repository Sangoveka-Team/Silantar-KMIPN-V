"use client";
import DropdownStatus from "@/components/dashboard/DropdownStatus";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";

const Riwayat = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="py-[0.375rem] px-2 relative sm:max-w-xl sm:mx-auto">
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
        <h3 className="text-[15px] font-semibold sm:text-xl mb-2">Terbaru</h3>
        <DropdownStatus />
        {/* <div className="ml-36 flex items-center w-[84px] text-[8px] py-[0.125rem] pl-[5px] pr-1 bg-white rounded-md border border-[#808080] sm:h-[18px] sm:mt-1">
          <input
            type="text"
            placeholder="Cari laporan"
            className="bg-transparent focus:border-none focus:outline-none w-full"
          />
          <Image
            src="/icon/search.svg"
            width={10}
            height={10}
            alt="search icon"
          />
        </div> */}
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
      {/* laporan */}
      <div className="mt-5">
        <div className="mt-2 flex flex-col p-[17px] bg-white border border-primary shadow-xl rounded-[5px] w-[18.375rem]">
          <div className="flex justify-between w-full">
            <h3 className="font-semibold text-[15px] text-primary">
              Arus Lalu Lintas
            </h3>
            <Link
              href="/dashboard/riwayat/SILT130505239493"
              className="btn btn-green btn-xs text-[10px] rounded-[0.313rem] py-1 px-[6px] w-[85px] font-medium"
            >
              Selengkapnya
            </Link>
          </div>
          <p className="text-xs mt-[7px]">
            Kerusakan dijalan Sultan Adam dan terjadinya kemacetan karenanya,
            mohon tindak lanjutnya.
          </p>
          <div className="flex justify-between w-full  text-xs mt-2 items-center">
            <p className="font-normal">2023-07-18</p>
            <span className="ml-[0.438rem] bg-[#F4F1FA] text-[#276EF1] rounded-xl px-[0.375rem] py-[0.188rem] font-semibold">
              Belum Diproses
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Riwayat;
