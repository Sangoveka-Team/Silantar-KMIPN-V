"use client";

import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import {listDaerah, listKategori} from "@/data";
import Dropdown from "@/components/lapor/Dropdown";
import Navbar from "@/components/home/Navbar";
import ImageUpload from "@/components/lapor/ImageUpload";
import InputLocation from "@/components/lapor/InputLocation";
import ModalAddLaporan from "@/components/ModalAddLaporan";


const Lapor = () => {
  const [imgLocation, setImgLocation] = useState([]);
  const [nama, setNama] = useState("");
  const [telp, setTelp] = useState("");
  const [alamat, setAlamat] = useState("");
  const [kategori, setKategori] = useState("");
  const [daerah, setDaerah] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    setNama("");
    setTelp("");
    setAlamat("");
    setKategori("");
    setDaerah("");
    setDeskripsi("");
  };

  return (
    <div>
      <Navbar />
      <div className="bg-white w-full">
        <div className="max-w-lg mx-auto pt-[88px] px-[42px] pb-[22px] bg-white">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="hover:bg-[#f2f2f2] rounded-box transition"
            >
              <Image
                src="/icon/arrow-left.svg"
                width={35}
                height={35}
                alt="arrow left"
                className="pointer-events-none"
              />
            </Link>
            <h1 className="text-black font-bold text-[15px]">
              Buat <span className="text-primary">Laporan</span>
            </h1>
          </div>
          <form
            id="kirim-lapor"
            className="mt-[11px] flex flex-col gap-[0.625rem]"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-1">
              <label className="text-primary font-medium text-[15px]">
                Nama Anda
              </label>
              <div className="flex">
                <Image
                  src="/icon/user-green.svg"
                  width={24}
                  height={24}
                  alt="user icon"
                  className="pointer-events-none"
                />
                <input
                  type="text"
                  required
                  placeholder="Masukkan nama anda..."
                  className="input-lapor"
                  onChange={(e) => setNama(e.target.value)}
                  value={nama}
                />
              </div>
              <hr className="w-full h-[2px] bg-primary" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-primary font-medium text-[15px]">
                Nomor Ponsel
              </label>
              <div className="flex">
                <span className="text-primary font-bold text-sm self-center select-none">
                  +62
                </span>
                <input
                  type="tel"
                  required
                  placeholder="Masukkan nomor ponsel anda..."
                  className="input-lapor"
                  onChange={(e) => setTelp(e.target.value)}
                  value={telp}
                />
              </div>
              <hr className="w-full h-[2px] bg-primary" />
            </div>
            <ImageUpload
              imgLocation={imgLocation}
              setImgLocation={setImgLocation}
            />
            <InputLocation />
            <div className="flex flex-col gap-1">
              <label className="text-primary font-medium text-[15px]">
                Kategori Laporan
              </label>
              <div className="flex relative">
                <Image
                  src="/icon/category.svg"
                  width={24}
                  height={24}
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
              <label className="text-primary font-medium text-[15px]">
                Daerah Anda
              </label>
              <div className="flex relative">
                <Image
                  src="/icon/internet.svg"
                  width={24}
                  height={24}
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
              <label className="text-primary font-medium text-[15px]">
                Deskripsi Laporan
              </label>
              <div className="flex relative">
                <Image
                  src="/icon/write.svg"
                  width={24}
                  height={24}
                  alt="user icon"
                  className="self-start pointer-events-none"
                />
                <textarea
                  type="text"
                  required
                  placeholder="Berikan deskripsi yang jelas..."
                  className="input-lapor min-h-[4rem] max-h-16"
                  onChange={(e) => setDeskripsi(e.target.value)}
                  value={deskripsi}
                />
              </div>
              <hr className="w-full h-[2px] bg-primary" />
            </div>
            <button
              type="submit"
              className="btn btn-green btn-xs w-full text-[15px] font-bold h-[2.313rem] mt-2"
            >
              Kirim
            </button>
          </form>
        </div>
        <ModalAddLaporan showModal={showModal} setShowModal={setShowModal} />
      </div>
    </div>
  );
};

export default Lapor;
