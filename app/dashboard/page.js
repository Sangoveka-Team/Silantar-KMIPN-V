"use client";

import Image from "next/image";
import {useState} from "react";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="ml-12">
      <div className="px-2 py-[0.375rem] w-full">
        <h1 className="font-bold text-[0.938rem]">Dashboard</h1>
        <div className="ml-8 mt-[0.563rem] box-border flex justify-end">
          <button
            className="py-[5px] pl-3 pr-1 bg-white rounded-xl border-2 border-primary text-[0.625rem] font-bold"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            Selamat datang di dashboard anda,{" "}
            <span className="text-primary">Aryo Suryono</span>
            !
            <Image
              src="/icon/dropdown.svg"
              width={24}
              height={24}
              alt="dropdown icon"
              className={`inline -translate-y-1 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
            <span
              className={`${
                isOpen ? "block" : "hidden"
              } w-[213px] text-start font-medium transition-all`}
            >
              Di Dashboard ini anda dapat memantau status laporan yang anda
              buat, yang sedang diproses, sudah selesai, ataupun tertolak. Anda
              juga dapat mengelola akun anda.
            </span>
          </button>
        </div>
        {/* statistik */}
        <div className="w-full mt-[0.375rem]">
          <div className="flex items-center">
            <Image
              src="/icon/bar-chart-2.svg"
              width={19}
              height={16}
              alt="statisik icon"
              className="inline"
            />
            <h2 className="font-bold text-xs self">
              Statistik <span className="text-primary">Laporan</span> Anda
            </h2>
          </div>
          <div className="mt-2 text-white flex gap-[0.438rem] flex-wrap xs:ml-4">
            <div className="bg-primary w-36 rounded-xl shadow-xl p-[0.625rem] flex flex-col relative">
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
            <div className="bg-primary w-36 rounded-xl shadow-xl p-[0.625rem] flex flex-col relative">
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
            <div className="bg-primary w-36 rounded-xl shadow-xl p-[0.625rem] flex flex-col relative">
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
            <div className="bg-primary w-36 rounded-xl shadow-xl p-[0.625rem] flex flex-col relative">
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
        <div className="w-full mt-[0.438rem]">
          <div className="flex items-center">
            <Image
              src="/icon/clock-green.svg"
              width={15}
              height={15}
              alt="clock icon"
              className="inline"
            />
            <h2 className="font-bold text-xs pl-[0.125rem]">
              Laporan <span className="text-primary">Terakhir</span>
            </h2>
          </div>
          <div className="mt-2 flex py-[0.813rem] pl-[0.813rem] pr-[0.625rem] bg-white border-2 border-primary shadow-xl rounded-xl w-[18.375rem]">
            <div className="w-[5.063rem] h-[7.375rem] mr-[0.563rem]">
              <Image
                src="/dashboard/lapor-image.png"
                width={81}
                height={118}
                alt="Lapor image"
                className="w-full h-full object-cover"
              />
            </div>
            <hr className="w-[0.063rem] h-[7.375rem] bg-[#D9D9D9]" />
            <div className="ml-[0.563rem] text-[0.5rem]">
              <p className="line-clamp-1">
                Kategori Laporan
                <span className="pl-[0.313rem]">:</span>
                <span className="pl-[0.438rem] line-clamp-1 text-primary inline ">
                  Pencemaran Lingkungan
                </span>
              </p>
              <p className="line-clamp-1">
                Alamat Lokasi
                <span className="pl-[0.938rem]">:</span>
                <span className="pl-[0.438rem]  text-primary w-[93px]">
                  Komp. Gerilya Cermai Satu no 85
                </span>
              </p>
              <p className="line-clamp-1">
                Tanggal Laporan
                <span className="pl-[0.375rem]">:</span>
                <span className="pl-[0.438rem]  text-primary w-[93px]">
                  06-05-2023
                </span>
              </p>
              <div className="flex">
                <p className="h-8">Deskripsi Laporan</p>
                <span className="pl-[0.125rem]">:</span>
                <span className="pl-[0.438rem]  text-primary w-[93px] line-clamp-3">
                  Sampah menumpuk disungai, tidak adanya palang pemberitahuan
                  bahwa adaa
                </span>
              </div>
              <div className="flex">
                <p className="font-bold">Status</p>
                <span className="pl-[2.625rem]">:</span>
                <span className="ml-[0.438rem] bg-[#C6DAFF] text-[#276EF1] rounded-xl px-[0.375rem] py-[0.188rem] text-[0.313rem] font-bold">
                  Belum Diproses
                </span>
              </div>
              <div className="flex justify-end mt-3">
                <button className="btn-green text-[0.5rem] rounded-[0.313rem] py-[1px] px-[5px] self-end">
                  Selengkapnya
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* laporan terakhir end*/}
      </div>
    </div>
  );
};

export default Dashboard;
