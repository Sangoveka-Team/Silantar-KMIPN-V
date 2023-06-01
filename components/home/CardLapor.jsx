"use client";

import Image from "next/image";
import React from "react";

const CardLapor = () => {
  return (
    <section id="cara-lapor">
      <div className="py-12 bg-white">
        <div className="w-[70%] bg-primary lg:w-1/2 sm:w-2/3 sm:text-end">
          <h2 className="inline-block pl-8 py-1 pr-2 font-bold text-black text-[15px] sm:text-base lg:text-xl">
            Cara melapor dengan <span className="text-white">SILANTAR</span>
          </h2>
        </div>
        <div className="carousel w-full pt-5 pb-11 box-border px-8 flex gap-3">
          <div id="item1" className="carousel-item w-80 pl-8">
            <div className="pt-4 pl-3 pr-[5px] pb-11 bg-[#EEEEEE] text-primary rounded-xl shadow-[0_1px_5px_#b3b3b3]">
              <h3 className="text-base font-bold pr-3">
                Anda dapat langsung melakukan pelaporan dengan klik tombol lapor
                atau memilih untuk membuat akun terlebih dahulu.
              </h3>
              <div className="flex box-border">
                <p className="text-xs w-32 text-center mt-14">
                  Mendaftarkan akun sangat disarankan agar anda dapat memantau
                  status laporan anda.
                </p>
                <Image
                  src="/home/lapor-icon-1.svg"
                  width={165}
                  height={163}
                  alt=" lapor icon 1"
                  className="-mt-4"
                />
              </div>
            </div>
          </div>
          <div id="item2" className="carousel-item w-80 pl-4">
            <div className="pt-4 pl-3 pr-[5px] pb-11 bg-[#EEEEEE] text-primary rounded-xl shadow-[0_1px_5px_#b3b3b3]">
              <h3 className="text-base font-bold pr-3">
                Anda dapat langsung melakukan pelaporan dengan klik tombol lapor
                atau memilih untuk membuat akun terlebih dahulu.
              </h3>
              <div className="flex box-border">
                <p className="text-xs w-32 text-center mt-14">
                  Mendaftarkan akun sangat disarankan agar anda dapat memantau
                  status laporan anda.
                </p>
                <Image
                  src="/home/lapor-icon-1.svg"
                  width={165}
                  height={163}
                  alt="lapor icon 1"
                  className="-mt-4"
                />
              </div>
            </div>
          </div>
          <div id="item3" className="carousel-item w-80 pl-4">
            <div className="pt-4 pl-3 pr-[5px] pb-11 bg-[#EEEEEE] text-primary rounded-xl shadow-[0_1px_5px_#b3b3b3]">
              <h3 className="text-base font-bold pr-3">
                Anda dapat langsung melakukan pelaporan dengan klik tombol lapor
                atau memilih untuk membuat akun terlebih dahulu.
              </h3>
              <div className="flex box-border">
                <p className="text-xs w-32 text-center mt-14">
                  Mendaftarkan akun sangat disarankan agar anda dapat memantau
                  status laporan anda.
                </p>
                <Image
                  src="/home/lapor-icon-1.svg"
                  width={165}
                  height={163}
                  alt="lapor icon 1"
                  className="-mt-4"
                />
              </div>
            </div>
          </div>
          <div id="item4" className="carousel-item w-80 pl-4">
            <div className="pt-4 pl-3 pr-[5px] pb-11 bg-[#EEEEEE] text-primary rounded-xl shadow-[0_1px_5px_#b3b3b3]">
              <h3 className="text-base font-bold pr-3">
                Anda dapat langsung melakukan pelaporan dengan klik tombol lapor
                atau memilih untuk membuat akun terlebih dahulu.
              </h3>
              <div className="flex box-border">
                <p className="text-xs w-32 text-center mt-14">
                  Mendaftarkan akun sangat disarankan agar anda dapat memantau
                  status laporan anda.
                </p>
                <Image
                  src="/home/lapor-icon-1.svg"
                  width={165}
                  height={163}
                  alt="lapor icon 1"
                  className="-mt-4"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full py-2 gap-2">
          <a href="/#item1" className="carousel-line" />
          <a href="/#item2" className="carousel-line" />
          <a href="/#item3" className="carousel-line" />
          <a href="/#item4" className="carousel-line" />
        </div>
      </div>
    </section>
  );
};

export default CardLapor;
