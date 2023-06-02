"use client";

import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";
import {listDaerah, listKategori} from "@/data";

const Lapor = () => {
  const [imgLocation, setImgLocation] = useState(null);
  const [selectDaerah, setSelectDaerah] = useState("DEFAULT");
  const [kategori, setKategori] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleKategori = (e) => {
    e.target.value == "" ? setDropdown(false) : setDropdown(true);
    setKategori(e.target.value);
  };

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
                className="absolute left-0"
              />
              <div className="w-full relative pl-[1.688rem]">
                <input
                  type="text"
                  placeholder="Masukkan/upload alamat lokasi..."
                  className="input-lapor"
                  onChange={handleKategori}
                  value={kategori}
                />
                <ul
                  className={`dropdown-header ${
                    !dropdown ? "hidden" : "block"
                  } max-h-20 overflow-x-hidden overflow-y-scroll shadow-md rounded-b-md`}
                >
                  {listKategori.map((data) => (
                    // masih belum fix fitur searching nya
                    <div key={data.id}>
                      <li
                        className="dropdown-item"
                        onClick={() => {
                          setKategori(data.value);
                          setDropdown(false);
                        }}
                      >
                        {data.value}
                      </li>
                      <hr className="w-full h-[0.063rem] text-[#D9D6D6]" />
                    </div>
                  ))}
                </ul>
              </div>
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
                className=""
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
            {/* <span className="loading loading-spinner loading-xs"></span> */}
          </button>
        </form>
      </div>
      {/* modal open ketika laporan terkirim */}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-10 md:mx-auto  w-[17.25rem]">
              {/*content*/}
              <div className="border-0 rounded-xl shadow-xl relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*body*/}
                <div className="relative py-6 pl-[1.688rem] pr-[2.125rem] flex flex-col">
                  {/* close button */}
                  <button
                    type="button"
                    className="absolute top-2 right-5 font-bold text-2xl"
                    onClick={() => setShowModal(false)}
                  >
                    x
                  </button>
                  <h2 className="font-bold text-[0.94rem] text-black text-center">
                    Laporan anda sudah
                    <span className="text-primary block">dikirim!</span>
                  </h2>
                  <Image
                    src="/lapor/Image-Modal.svg"
                    width={108}
                    height={116}
                    alt="image modal lapor"
                    className="self-center mt-3 mb-[0.313rem]"
                  />
                  <p className="font-bold text-[0.625rem] mb-2">
                    Terima kasih telah melapor! Untuk mengakses fitur-fitur
                    website kami yang lainnya, silahkan dengan klik tombol
                    dibawah ini.
                  </p>
                  <Link
                    href="/login"
                    className="btn-green py-[0.625rem] px-[1.188rem] w-[7.625rem] self-center text-center"
                  >
                    Mau daftar!
                  </Link>
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
