"use client";

import Image from "next/image";
import Link from "next/link";

const DashboardUser = () => {
  return (
    <div className="px-2 py-[0.375rem] w-full relative sm:max-w-xl sm:mx-auto">
      <h1 className="font-bold text-base sm:text-2xl mb-2">Dashboard</h1>
      <div className="w-full relative">
        <details
          id="dropdown-dashboard"
          className="collapse bg-white flex flex-col items-center border-2 border-primary rounded-xl max-w-[355px] absolute right-0 z-[99]"
        >
          <summary className="collapse-title text-[12px] py-2 px-3 font-bold min-h-[33px] h-auto relative">
            Selamat datang di dashboard anda,{" "}
            <span className="text-primary block">Aryo Suryono!</span>
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
              Di Dashboard ini anda dapat memantau status laporan yang anda
              buat, yang sedang diproses, sudah selesai, ataupun tertolak. Anda
              juga dapat mengelola akun anda.
            </p>
          </div>
        </details>
      </div>
      {/* statistik */}
      <div className="w-full mt-20">
        <div className="flex items-center gap-1">
          <Image
            src="/icon/bar-chart-2.svg"
            width={19}
            height={16}
            alt="statisik icon"
            className="inline -mt-1"
          />
          <h2 className="font-bold text-[15px] self sm:text-lg">
            Statistik <span className="text-primary">Laporan</span> Anda
          </h2>
        </div>
        <div className="mt-2 text-white flex gap-[0.438rem] flex-wrap xs:ml-4">
          <div className="bg-primary w-36 rounded-xl shadow-xl p-[0.625rem] flex flex-col relative font-bold">
            <span className="text-[1.563rem] pl-[0.563rem]">3</span>
            <span className="text-[0.938rem]">Tuntas</span>
            <Image
              src="/icon/Vector.svg"
              width={40}
              height={36}
              alt="vector icon"
              className="absolute right-[1.063rem]"
            />
          </div>
          <div className="bg-primary w-36 rounded-xl shadow-xl p-[0.625rem] flex flex-col relative font-bold">
            <span className="text-[1.563rem] pl-[0.563rem]">1</span>
            <span className="text-[0.938rem]">Diproses</span>
            <Image
              src="/icon/circle-right.svg"
              width={40}
              height={36}
              alt="vector icon"
              className="absolute right-[1.063rem]"
            />
          </div>
          <div className="bg-primary w-36 rounded-xl shadow-xl p-[0.625rem] flex flex-col relative font-bold">
            <span className="text-[1.563rem] pl-[0.563rem]">0</span>
            <span className="text-[0.938rem]">Belum Diproses</span>
            <Image
              src="/icon/Info.svg"
              width={40}
              height={36}
              alt="vector icon"
              className="absolute right-[1.063rem]"
            />
          </div>
          <div className="bg-primary w-36 rounded-xl shadow-xl p-[0.625rem] flex flex-col relative font-bold">
            <span className="text-[1.563rem] pl-[0.563rem]">0</span>
            <span className="text-[0.938rem]">Ditolak</span>
            <Image
              src="/icon/circle-xmark.svg"
              width={40}
              height={36}
              alt="vector icon"
              className="absolute right-[1.063rem]"
            />
          </div>
        </div>
      </div>
      {/* statistik end*/}
      {/* poin */}
      {/* ------poin fiturnya masih belum dipakai------ */}
      {/* <div className="w-full mt-[0.688rem]">
        <div className="flex items-center">
          <Image
            src="/icon/verified.svg"
            width={19}
            height={16}
            alt="Point icon"
            className="inline"
          />
          <h2 className="font-bold text-xs">
            Poin <span className="text-primary">Laporan</span>
          </h2>
        </div>
        <div className="py-4 pl-4 pr-[1.438rem] bg-white border-2 border-primary rounded-xl flex flex-col w-[18.375rem] mt-2">
          <button className="self-end text-primary">Selengkapnya</button>
          <div className="font-bold -mt-2">
            <Image
              src="/icon/award.svg"
              width={24}
              height={24}
              alt="Point icon"
              className="inline"
            />
            <span className="text-xs">
              Poin anda: <span className="text-primary">65</span>
            </span>
            <p className="text-[0.625rem] pl-[0.313rem] pt-[0.188rem] w-[13.375rem]">
              Anda dapat melakukan penukaran poin-poin dengan
              menghubungi/mendatangi kelurahan terdekat. Pastikan bukti berupa
              foto dashboard anda.
            </p>
          </div>
          <div className="text-[0.625rem] text-[#808080] flex flex-col text-end -mt-[0.375rem]">
            <span>Laporan tanpa foto: 10 point</span>
            <span>Laporan dengan foto: 15 point</span>
          </div>
        </div>
      </div> */}
      {/* poin end */}

      {/* laporan terakhir */}
      <div className="w-full mt-3">
        <div className="flex items-center gap-1">
          <Image
            src="/icon/clock-green.svg"
            width={15}
            height={15}
            alt="clock icon"
            className="inline -mt-[2px]"
          />
          <h2 className="font-bold text-[15px] pl-[0.125rem] sm:text-xl">
            Laporan <span className="text-primary">Terakhir</span>
          </h2>
        </div>
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
      {/* laporan terakhir end*/}
    </div>
  );
};

export default DashboardUser;
