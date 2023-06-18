"use client";

import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import {listDaerah, listKategori} from "@/data";
import Dropdown from "@/components/lapor/Dropdown";
import Navbar from "@/components/home/Navbar";
import Modal from "@/components/Modal";

const Lapor = () => {
  const [nama, setNama] = useState("");
  const [telp, setTelp] = useState(null);
  const [imgLocation, setImgLocation] = useState(null);
  const [alamat, setAlamat] = useState("");
  const [kategori, setKategori] = useState("");
  const [daerah, setDaerah] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <div>
      <Navbar />
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
          <form
            id="kirim-lapor"
            className="mt-7 flex flex-col gap-[0.625rem]"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-1">
              <label className="text-primary font-bold text-sm">
                Nama Anda
              </label>
              <div className="flex">
                <Image
                  src="/icon/user-green.svg"
                  width={28}
                  height={28}
                  alt="user icon"
                />
                <input
                  type="text"
                  required
                  placeholder="Masukkan nama anda..."
                  className="input-lapor"
                  onChange={(e) => setNama(e.target.value)}
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
                  required
                  placeholder="Masukkan nomor ponsel anda..."
                  className="input-lapor"
                  onChange={(e) => setTelp(e.target.value)}
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
                    accept="image/*"
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
                  required
                  placeholder="Masukkan/upload alamat lokasi..."
                  className="input-lapor"
                  onChange={(e) => setAlamat(e.target.value)}
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
                <Dropdown
                  listDatas={listKategori}
                  input={kategori}
                  setInput={setKategori}
                  placeholder={"Pilih kategori"}
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
                  className="absolute left-0"
                />
                <Dropdown
                  listDatas={listDaerah}
                  input={daerah}
                  setInput={setDaerah}
                  placeholder={"Pilih daerah"}
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
                  onChange={(e) => setDeskripsi(e.target.value)}
                />
                <textarea
                  type="text"
                  required
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
        <Modal
          setShowModal={setShowModal}
          showModal={showModal}
          title="Laporan anda Sudah"
          titleChildren="dikirim!"
          text="Terima kasih telah melapor! Untuk mengakses fitur-fitur website kami yang lainnya, silahkan dengan klik tombol dibawah ini."
          textButton="Mau Daftar!"
          link={true}
        />
      </div>
    </div>
  );
};

export default Lapor;
