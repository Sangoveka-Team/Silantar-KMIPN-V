"use client";

import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";

const Lapor = () => {
  const [imgLocation, setImgLocation] = useState(null);
  const [selectDaerah, setSelectDaerah] = useState("DEFAULT");
  const [selectKategori, setSelectKategori] = useState("DEFAULT");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = () => {};

  return (
    <div className="bg-white w-full">
      <div className="max-w-lg mx-auto pt-[88px] px-[42px] pb-[22px] bg-white">
        <div className="flex items-center gap-3">
          <Link href="/">
            <Image
              src="/icon/arrow-left.svg"
              width={35}
              height={35}
              alt="arrow left"
            />
          </Link>
          <h1 className="text-black font-bold text-[15px]">
            Buat <span className="text-primary">Laporan</span>
          </h1>
        </div>
        <form className="mt-7 space-y-2" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label className="text-primary font-bold text-sm">Nama Anda</label>
            <div className="flex">
              <Image
                src="/icon/user-green.svg"
                width={28}
                height={28}
                alt="user icon"
              />
              <input
                type="text"
                placeholder="Masukkan nama anda..."
                className="input-lapor"
              />
            </div>
            <hr className="w-full h-[2px] bg-primary" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-primary font-bold text-sm">
              Nomor Ponsel
            </label>
            <div className="flex">
              <span className="text-primary font-bold text-sm self-center">
                +62
              </span>
              <input
                type="tel"
                required={true}
                placeholder="Masukkan nomor ponsel anda..."
                className="input-lapor"
              />
            </div>
            <hr className="w-full h-[2px] bg-primary" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-primary font-bold text-sm">
              Foto Lokasi (Opsional)
            </label>
            <div className="flex items-center">
              <Image
                src="/icon/camera-2.svg"
                width={28}
                height={28}
                alt="user icon"
              />
              <label className="w-full text-xs text-[#808080] pl-1 select-none cursor-pointer flex items-center">
                <input
                  type="file"
                  placeholder="Upload foto lokasi..."
                  className="hidden"
                  onChange={(e) => setImgLocation(e.target.files[0])}
                />
                {!imgLocation ? (
                  "Upload foto lokasi..."
                ) : (
                  <>
                    {imgLocation.name}
                    <Image
                      src="/icon/check.svg"
                      width={24}
                      height={24}
                      alt="check icon"
                    />
                  </>
                )}
              </label>
            </div>
            <hr className="w-full h-[2px] bg-primary" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-primary font-bold text-sm">
              Alamat Lokasi
            </label>
            <div className="flex">
              <Image
                src="/icon/map.svg"
                width={28}
                height={28}
                alt="user icon"
              />
              <input
                type="text"
                placeholder="Masukkan/upload alamat lokasi..."
                className="input-lapor"
              />
            </div>
            <hr className="w-full h-[2px] bg-primary" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-primary font-bold text-sm">
              Kategori Laporan
            </label>
            <div className="flex relative">
              <Image
                src="/icon/category.svg"
                width={28}
                height={28}
                alt="user icon"
              />
              <select
                className="self-center select-xs focus:outline-none w-full box-border appearance-none z-10 bg-transparent text-[#808080] relative"
                defaultValue={"DEFAULT"}
                value={selectKategori}
                onChange={(e) => setSelectKategori(e.target.value)}
              >
                {/* styling option nya belum */}
                <option disabled selected value="DEFAULT">
                  Pilih kategori
                </option>
                <option value="pertama">Pertama</option>
              </select>
              <Image
                src="/icon/chevron-down.svg"
                width={28}
                height={28}
                alt="arrow down"
                className="absolute right-0 top-0 z-0"
              />
            </div>
            <hr className="w-full h-[2px] bg-primary" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-primary font-bold text-sm">
              Daerah Anda
            </label>
            <div className="flex relative">
              <Image
                src="/icon/internet.svg"
                width={28}
                height={28}
                alt="user icon"
              />
              <select
                className="self-center select-xs focus:outline-none w-full box-border appearance-none z-10 bg-transparent text-[#808080] relative"
                defaultValue={"DEFAULT"}
                value={selectDaerah}
                onChange={(e) => setSelectDaerah(e.target.value)}
              >
                {/* styling option nya belum */}
                <option disabled selected value="DEFAULT">
                  Pilih daerah
                </option>
                <option value="pertama">Pertama</option>
                <option value="kedua">kedua</option>
              </select>
              <Image
                src="/icon/chevron-down.svg"
                width={28}
                height={28}
                alt="arrow down"
                className="absolute right-0 top-0 z-0"
              />
            </div>
            <hr className="w-full h-[2px] bg-primary" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-primary font-bold text-sm">
              Deskripsi Laporan
            </label>
            <div className="flex relative">
              <Image
                src="/icon/write.svg"
                width={28}
                height={28}
                alt="user icon"
                className="self-start"
              />
              <textarea
                type="text"
                placeholder="Berikan deskripsi yang jelas..."
                className="input-lapor min-h-[4rem] max-h-16"
              />
            </div>
            <hr className="w-full h-[2px] bg-primary" />
          </div>
          <button type="submit" className="btn-green py-3 w-full">
            Kirim
          </button>
        </form>
      </div>
      {/* modal ketika berhasil mengupload laporan belum jadi :v */}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Modal Title</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default Lapor;
