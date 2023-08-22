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
import axios from "axios";

const Lapor = () => {
  const [imgLocation, setImgLocation] = useState([]);
  const [imgFiles, setImgFiles] = useState([]);
  const [nama, setNama] = useState("");
  const [telp, setTelp] = useState("");
  const [kategori, setKategori] = useState("");
  const [daerah, setDaerah] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [position, setPosition] = useState(null);
  const [addressChange, setAddressChange] = useState("");
  const [ticket, setTicket] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("nama", nama);
    formData.append("nomor", telp);
    formData.append("alamat", addressChange);
    formData.append("kategori_lapor", kategori);
    formData.append("daerah_kelurahan", daerah);
    formData.append("deskripsi", deskripsi);
    formData.append("maps", position.lat + "," + position.lng);
    imgFiles.forEach((image) => {
      formData.append("image[]", image);
    });

    await axios
      .post("https://api.silantar.my.id/api/post-lapor-guest", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("ticket", res.data.payload.laporan.id_laporan);
          localStorage.setItem(
            "tanggal-ticket",
            res.data.payload.laporan.tanggal
          );
          setTicket(res.data.payload.laporan.id_laporan);
          setShowModal(true);
        }
      });
    // const response = await fetch("http://127.0.0.1:8000/api/post-lapor-guest", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     nama: nama,
    //     nomor: telp,
    //     alamat: addressChange,
    //     kategori_lapor: kategori,
    //     daerah_kelurahan: daerah,
    //     deskripsi: deskripsi,
    //     maps: position.lat + "," + position.lng,
    //     image: imgFiles,
    //   }),
    // });
    // const data = await response.json();
    // console.log(data);
    // setShowModal(true);
    // setTicket(data.payload.laporan.id_laporan);
    // setShowModal(true);
    // setNama("");
    // setTelp("");
    // setAlamat("");
    // setKategori("");
    // setDaerah("");
    // setDeskripsi("");
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
                  onChange={(e) => setTelp(String(e.target.value))}
                  value={telp}
                />
              </div>
              <hr className="w-full h-[2px] bg-primary" />
            </div>
            <ImageUpload
              imgLocation={imgLocation}
              setImgLocation={setImgLocation}
              imgFiles={imgFiles}
              setImgFiles={setImgFiles}
            />
            <InputLocation
              position={position}
              setPosition={setPosition}
              addressChange={addressChange}
              setAddressChange={setAddressChange}
            />
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
        <ModalAddLaporan
          showModal={showModal}
          setShowModal={setShowModal}
          ticket={ticket}
        />
      </div>
    </div>
  );
};

export default Lapor;
