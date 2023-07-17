"use client";
import Image from "next/image";
import {useState} from "react";

const CardDetailLaporan = ({params}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mt-4 bg-white rounded-md max-w-[1063px]">
      <div className="pt-[51px] px-[58px] pb-[46px] flex flex-col gap-6">
        <div className="flex gap-[33.5px]">
          <div className="w-[247] h-[308] rounded-[5px]">
            <Image
              src="/dashboard/lapor-image-2.jpg"
              width={247}
              height={308}
              alt="image lapor"
            />
          </div>
          <hr className="w-[0.063rem] h-[308px] bg-[#D9D9D9]" />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15932.454222876064!2d114.57940964671243!3d-3.3221074504762287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de423db2e78adeb%3A0x1bdceb2be507897d!2sTaman%20Kamboja!5e0!3m2!1sid!2sid!4v1688647620789!5m2!1sid!2sid"
            className="border-0 rounded-[5px]"
            width="632"
            height="305"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <hr className="w-[946px] h-px bg-[#D9D9D9]" />
        <div>
          <div className="relative">
            <div
              className={`border border-[#808080] py-[6px] pl-[10px] text-lg font-medium text-[#808080] rounded-[10px] absolute right-0 ${
                isOpen ? "h-auto" : "h-[38px]"
              } max-w-[218px]`}
            >
              <button onClick={() => setIsOpen((prev) => !prev)}>
                <span>Catatan dari lurah</span>
                <Image
                  src="/icon/alter-circle.svg"
                  width={24}
                  height={24}
                  alt="info icon"
                  className="inline ml-1 -mt-[2px] mr-2"
                />
              </button>
              <div
                className={`text-sm text-primary max-w-[185px] ${
                  isOpen ? "block" : "hidden"
                }`}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, harum?
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex text-[22px]">
              <div className="flex">
                <p className="font-normal mr-[170px]">ID Laporan</p>
                <p className="font-bold text-primary mr-[15px]">:</p>
              </div>
              <span className="font-medium text-primary">{params.id}</span>
            </div>
            <div className="flex text-[22px]">
              <div className="flex">
                <p className="font-normal mr-[138px]">Nama Pelapor</p>
                <p className="font-bold text-primary mr-[15px]">:</p>
              </div>
              <span className="font-medium text-primary flex">
                Honda Mio
                <button className="btn btn-green btn-xs ml-2 py-[9px] px-4 h-[31px] shadow-sm">
                  Lihat
                </button>
              </span>
            </div>
            <div className="flex text-[22px]">
              <div className="flex">
                <p className="font-normal mr-[56px]">Nomor Ponsel Pelapor</p>
                <p className="font-bold text-primary mr-[15px]">:</p>
              </div>
              <span className="font-medium text-primary">083982478246</span>
            </div>
            <div className="flex text-[22px]">
              <div className="flex">
                <p className="font-normal mr-[118.5px]">Alamat Laporan</p>
                <p className="font-bold text-primary mr-[15px]">:</p>
              </div>
              <span className="font-medium text-primary">Jl. Kayutangi 2</span>
            </div>
            <div className="flex text-[22px]">
              <div className="flex">
                <p className="font-normal mr-[111.5px]">Tanggal Laporan</p>
                <p className="font-bold text-primary mr-[15px]">:</p>
              </div>
              <span className="font-medium text-primary">01-05-2023</span>
            </div>
            <div className="flex text-[22px]">
              <div className="flex">
                <p className="font-normal mr-[108px]">Kategori Laporan</p>
                <p className="font-bold text-primary mr-[15px]">:</p>
              </div>
              <span className="font-medium text-primary">Arus Lalu Lintas</span>
            </div>
            <div className="flex text-[22px]">
              <div className="flex">
                <p className="font-normal mr-[99.5px]">Deskripsi Laporan</p>
                <p className="font-bold text-primary mr-[15px]">:</p>
              </div>
              <span className="font-medium text-primary max-w-[617px]">
                Kerusakan lampu lalu lintas didaerah kayutangi, alur pengendara
                jadi terganggu
              </span>
            </div>
            <div className="flex text-[22px] items-center">
              <div className="flex">
                <p className="font-normal mr-[214px]">Status</p>
                <p className="font-bold text-primary mr-[15px]">:</p>
              </div>
              <select className="select select-bordered border-primary max-w-xs rounded-2xl h-[42px] select-sm text-primary">
                <option disabled selected>
                  Set Status
                </option>
                <option>Tuntas</option>
                <option>Diproses</option>
                <option>Belum Diproses</option>
                <option>Ditolak</option>
              </select>
            </div>
            <div className="space-x-[12px] w-full text-end -mt-7">
              <button className="btn btn-green btn-md px-6 bg-[#DAB703] hover:bg-[#be9f04]">
                Laporkan
              </button>
              <button className="btn btn-green btn-md px-6">Konfirmasi</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetailLaporan;
