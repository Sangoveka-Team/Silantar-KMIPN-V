"use client";

import {listDaerah, listKategori} from "@/data";
import Dropdown from "@/components/lapor/Dropdown";
import Image from "next/image";
import {useState} from "react";
import Modal from "@/components/Modal";
import ImageUpload from "@/components/lapor/ImageUpload";

const TambahLaporan = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    <div className="pt-[0.375rem] pl-2 pr-[0.375rem] relative sm:max-w-xl sm:mx-auto">
      <Modal
        setShowModal={setShowModal}
        showModal={showModal}
        title="Laporan anda Sudah"
        titleChildren="dikirim!"
        text="Terima kasih telah melapor! Untuk mengakses fitur-fitur website kami yang lainnya, silahkan dengan klik tombol dibawah ini."
        textButton="Oke!"
      />
      <h1 className="text-[0.938rem] font-bold sm:text-2xl">
        Buat <span className="text-primary">Laporan</span>
      </h1>
      <div className="w-full relative">
        <details
          id="dropdown-dashboard"
          className="collapse bg-white flex flex-col items-center border-2 border-primary rounded-xl max-w-[183px] absolute right-0 z-[99]"
        >
          <summary className="collapse-title text-[10px] py-2 px-3 font-bold min-h-[33px] h-auto relative">
            Halaman membuat laporan!
            <Image
              src="/icon/dropdown.svg"
              width={24}
              height={24}
              alt="dropdown icon"
              className="absolute right-0 top-1"
            />
          </summary>
          <div className="collapse-content pt-0 pb-2 px-3">
            <p className="text-[8px] font-normal">
              lorem ipsum dolor sit amet, consectetur adip
            </p>
          </div>
        </details>
      </div>
      <div className="mt-[45px] flex flex-col gap-[0.938rem]">
        <div className="flex items-center sm:gap-1">
          <Image
            src="/icon/clipboard.svg"
            width={19}
            height={16}
            alt="clipboard icon"
            className="inline h-[16px]"
          />
          <h2 className="text-xs font-bold sm:text-base">
            Isi <span className="text-primary">formulir</span> dibawah ini
          </h2>
        </div>
        <form
          className="w-[18.375rem] bg-white border border-primary rounded-md shadow-lg px-[9px] pt-[11px] pb-[14px] flex flex-col gap-[0.625rem]"
          onSubmit={handleSubmit}
        >
          <ImageUpload />
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
          <button
            type="submit"
            className="btn btn-green btn-xs h-9 mt-[0.938rem]"
          >
            Kirim
          </button>
        </form>
      </div>
    </div>
  );
};

export default TambahLaporan;
