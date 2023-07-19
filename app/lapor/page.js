"use client";

import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import {listDaerah, listKategori} from "@/data";
import Dropdown from "@/components/lapor/Dropdown";
import Navbar from "@/components/home/Navbar";
import Modal from "@/components/Modal";
import ImageUpload from "@/components/lapor/ImageUpload";
import InputLocation from "@/components/lapor/InputLocation";

const Lapor = () => {
  const [nama, setNama] = useState("");
  const [telp, setTelp] = useState(null);
  const [alamat, setAlamat] = useState("");
  const [kategori, setKategori] = useState("");
  const [daerah, setDaerah] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    setChecked(true);
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
                className="pointer-events-none"
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
                />
              </div>
              <hr className="w-full h-[2px] bg-primary" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-primary font-bold text-sm">
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
                />
              </div>
              <hr className="w-full h-[2px] bg-primary" />
            </div>
            <ImageUpload />
            <InputLocation />
            <div className="flex flex-col gap-1">
              <label className="text-primary font-bold text-sm">
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
              <label className="text-primary font-bold text-sm">
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
              <label className="text-primary font-bold text-sm">
                Deskripsi Laporan
              </label>
              <div className="flex relative">
                <Image
                  src="/icon/write.svg"
                  width={24}
                  height={24}
                  alt="user icon"
                  className="self-start pointer-events-none"
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
            <button
              type="submit"
              className="btn btn-green btn-xs w-full text-xs h-[2.313rem]"
            >
              Kirim
            </button>
          </form>
        </div>
        {/* modal open ketika laporan terkirim */}
        <Modal
          checked={checked}
          setShowModal={setShowModal}
          showModal={showModal}
          title="Laporan anda Sudah"
          titleChildren="dikirim!"
          text="Terima kasih telah melapor! Untuk mengakses fitur-fitur website kami yang lainnya, silahkan dengan klik tombol dibawah ini."
          textButton="Mau Daftar!"
          link={true}
        />

        {/* You can open the modal using ID.showModal() method */}
        {/* <button className="btn" onClick={() => window.my_modal_3.showModal()}>
          open modal
        </button> */}
        {/* <dialog id="my_modal_3" className="modal">
          <form
            method="dialog"
            className="modal-box w-[276px] pt-[20px] pb-[29px] px-[33px] rounded-[10px] flex flex-col"
          >
            <button className="btn btn-sm btn-circle btn-ghost absolute right-[0.625rem] top-2">
              <Image
                src="/icon/close.svg"
                width={24}
                height={24}
                alt="close icon"
                className="pointer-events-none"
              />
            </button>
            <h3 className="font-bold text-[0.938rem] text-center">
              Laporan anda Sudah
              <span className="text-primary block -mt-1">dikirim!</span>
            </h3>
            <Image
              src="/lapor/image-modal.svg"
              width={108}
              height={116}
              alt="image modal lapor"
              className="self-center mt-3 mb-[0.313rem]"
            />
            <p className="font-normal text-[0.625rem] mb-2 text-center mt-[5px]">
              Terima kasih telah melapor! Untuk mengakses fitur-fitur website
              kami yang lainnya, silahkan daftar dengan klik tombol dibawah ini.
            </p>
            <Link
              href="/sign-up"
              className="btn btn-green btn-xs w-[5.5rem] text-xs h-8 self-center rounded-md font-medium"
            >
              Mau daftar!
            </Link>
          </form>
        </dialog> */}
      </div>
    </div>
  );
};

export default Lapor;
