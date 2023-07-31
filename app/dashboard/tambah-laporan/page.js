"use client";

import {listDaerah, listKategori} from "@/data";
import Dropdown from "@/components/lapor/Dropdown";
import Image from "next/image";
import {useState} from "react";
import ImageUpload from "@/components/lapor/ImageUpload";
import ModalAddLaporan from "@/components/ModalAddLaporan";
import InputLocation from "@/components/lapor/InputLocation";
import {useUserContext} from "@/contexts/UserContext";
import {useRouter} from "next/navigation";
import axios from "axios";

const TambahLaporan = () => {
  const [alamat, setAlamat] = useState("");
  const [kategori, setKategori] = useState("");
  const [daerah, setDaerah] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [imgLocation, setImgLocation] = useState([]);
  const [imgFiles, setImgFiles] = useState([]);
  const [position, setPosition] = useState(null);
  const [addressChange, setAddressChange] = useState("");
  const [ticket, setTicket] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();

    formData.append("alamat", addressChange);
    formData.append("kategori_lapor", kategori);
    formData.append("daerah_kelurahan", daerah);
    formData.append("deskripsi", deskripsi);
    formData.append("maps", position.lat + "," + position.lng);
    imgFiles.forEach((image) => {
      formData.append("image[]", image);
    });

    await axios
      .post("https://api.silantar.my.id/api/post-lapor", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setTicket(res.data.payload.laporan.id_laporan);
          setShowModal(true);
        }
      });
    // const response = await fetch("http://127.0.0.1:8000/api/post-lapor", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${localStorage.getItem("token")}`,
    //   },
    //   body: JSON.stringify({
    //     alamat: addressChange,
    //     kategori_lapor: kategori,
    //     daerah_kelurahan: daerah,
    //     deskripsi: deskripsi,
    //     maps: maps,
    //     image: [imgFiles],
    //   }),
    // });
    // const data = await response.json();
  };
  console.log(imgFiles[0]);
  console.log(addressChange);

  return (
    <div className="pt-[0.375rem] pl-2 pr-[0.375rem] relative sm:max-w-xl sm:mx-auto">
      <h1 className="text-base font-bold sm:text-2xl">
        Buat <span className="text-primary">Laporan</span>
      </h1>
      <div className="w-full relative">
        <details
          id="dropdown-dashboard"
          className="collapse bg-white flex flex-col items-center border-2 border-primary rounded-xl max-w-[215px] absolute right-0 z-[99]"
        >
          <summary className="collapse-title text-xs py-2 px-3 font-bold min-h-[33px] h-auto relative">
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
            <p className="text-[10px] font-normal">
              Anda dapat membuat laporan disini. Isikan dengan jelas ya!
            </p>
          </div>
        </details>
      </div>
      <div className="mt-[45px] flex flex-col gap-[0.938rem]">
        <div className="flex items-center gap-1">
          <Image
            src="/icon/clipboard.svg"
            width={19}
            height={16}
            alt="clipboard icon"
            className="inline h-[16px]"
          />
          <h2 className="text-[15px] font-semibold sm:text-base">
            Isi <span className="text-primary">formulir</span> dibawah ini
          </h2>
        </div>
        <form
          className="w-[18.375rem] bg-white border border-primary rounded-md shadow-lg px-[9px] pt-[11px] pb-[14px] flex flex-col gap-[0.625rem]"
          onSubmit={handleSubmit}
        >
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
                className="self-start"
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
            className="btn btn-green btn-xs h-9 mt-[0.938rem] text-[15px] font-bold w-full"
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
  );
};

export default TambahLaporan;
