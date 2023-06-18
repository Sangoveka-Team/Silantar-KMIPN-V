"use client";

import {listDaerah, listKategori} from "@/data";
import Dropdown from "@/components/lapor/Dropdown";
import Image from "next/image";
import {useState} from "react";
import Modal from "@/components/Modal";
import DropdownInfo from "@/components/dashboard/DropdownInfo";

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
    <div className="pt-[0.375rem] pl-2 pr-[0.375rem]">
      <Modal
        setShowModal={setShowModal}
        showModal={showModal}
        title="Laporan anda Sudah"
        titleChildren="dikirim!"
        text="Terima kasih telah melapor! Untuk mengakses fitur-fitur website kami yang lainnya, silahkan dengan klik tombol dibawah ini."
        textButton="Oke!"
      />
      <h1 className="text-[0.938rem] font-bold">
        Buat <span className="text-primary">Laporan</span>
      </h1>
      <DropdownInfo
        heading="Halaman membuat laporan!"
        title="Di Dashboard ini anda dapat memantau status laporan yang anda buat,
        yang sedang diproses, sudah selesai, ataupun tertolak. Anda juga
        dapat mengelola akun anda."
        headingWidth={165}
        titleWidth={213}
      />

      <div className="mt-[3.25rem] flex flex-col gap-[0.938rem]">
        <div className="flex items-center">
          <Image
            src="/icon/clipboard.svg"
            width={19}
            height={16}
            alt="clipboard icon"
            className="inline h-[16px]"
          />
          <h2 className="text-xs font-bold">
            Isi <span className="text-primary">formulir</span> dibawah ini
          </h2>
        </div>
        <form
          className="w-[18.375rem] bg-white border border-primary rounded-md shadow-lg px-[9px] pt-[11px] pb-[14px] flex flex-col gap-[0.625rem]"
          onSubmit={handleSubmit}
        >
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
          <button type="submit" className="btn-green py-3 w-full mt-[0.938rem]">
            Kirim
          </button>
        </form>
      </div>
    </div>
  );
};

export default TambahLaporan;
