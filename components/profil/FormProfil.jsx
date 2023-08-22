"use client";

import Image from "next/image";
import {useEffect, useState} from "react";

const FormProfil = () => {
  const [img, setImg] = useState(null);
  const [nama, setNama] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleImage = (e) => {
    const data = e.target.files[0];
    setImg(URL.createObjectURL(data));
  };

  const handleSimpan = async (e) => {
    e.preventDefault();
    await fetch("https://api.silantar.my.id/api/update-profile-pelapor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: {
        nama: nama,
        nomor: tel,
        password: password,
        image: null,
      },
    })
      .then(async (res) => {
        const data = await res.json();
        setShowModal(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getDataProfil = async () => {
    if (typeof window !== "undefined") {
      await fetch("https://api.silantar.my.id/api/profile-pelapor", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then(async (res) => {
        const data = await res.json();
        setImg(data.payload.image);
        setNama(data.payload.nama);
        setTel(data.payload.nomor);
        setEmail(data.payload.email);
      });
    }
  };

  useEffect(() => {
    getDataProfil();
  }, []);

  return (
    <form
      onSubmit={handleSimpan}
      className="mt-[49px] py-3 px-[9px] w-[294px] bg-white border border-primary rounded-[5px] xs:mx-auto sm:mx-16"
    >
      <div className="flex justify-center w-full">
        <div className="avatar relative">
          <label className="absolute w-[117px] overflow-hidden z-50 h-full rounded-full flex items-center justify-center cursor-pointer">
            <input
              type="file"
              accept="image/*"
              className="opacity-0 hidden"
              onChange={handleImage}
            />
          </label>
          <div className="w-[117px] border-2 border-primary rounded-full relative">
            <Image
              src={`${
                img === null
                  ? "/default-image.png"
                  : `https://media.istockphoto.com/id/1298747290/id/foto/penanaman-pohon-dan-penanaman-pohon-termasuk-penanaman-pohon-oleh-petani-dengan-tangan-ide.jpg?s=1024x1024&w=is&k=20&c=HyKeysUTLWwMIOTp2KTdDWCDD8OGdsXbCXtuqlfZwR0=`
              }`}
              width={117}
              height={118}
              alt="user profile"
              className="object-contain"
            />
          </div>
          <div className="absolute bottom-[14px] right-1 border-2 border-primary rounded-full bg-white w-7 h-7">
            <Image
              src="/icon/upload.svg"
              width={16}
              height={16}
              alt="icon upload"
              className="p-[5px]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[11px]">
        <div className="flex flex-col">
          <label className="text-primary font-medium text-[15px] mb-[5px]">
            Nama Lengkap
          </label>
          <div className="flex">
            <input
              type="text"
              required
              className="w-full text-xs border-none focus:outline-none font-medium"
              onChange={(e) => setNama(e.target.value)}
              value={nama}
            />
          </div>
          <hr className="w-full -mt-[1px] h-[2px] bg-primary" />
        </div>
        <div className="flex flex-col">
          <label className="text-primary font-medium text-[15px] mb-[5px]">
            Nomor Ponsel
          </label>
          <div className="flex">
            <input
              type="text"
              required
              className="w-full text-xs border-none focus:outline-none font-medium"
              onChange={(e) => setTel(e.target.value)}
              value={tel}
            />
          </div>
          <hr className="w-full -mt-[1px] h-[2px] bg-primary" />
        </div>
        <div className="flex flex-col">
          <label className="text-primary font-medium text-[15px] mb-[5px]">
            Akun Email
          </label>
          <div className="flex">
            <input
              type="email"
              required
              disabled
              className="w-full text-xs border-none focus:outline-none font-medium input-disabled"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <hr className="w-full -mt-[1px] h-[2px] bg-primary" />
        </div>
        <div className="flex flex-col">
          <label className="text-primary font-medium text-[15px] mb-[5px]">
            Kata Sandi
          </label>
          <div className="relative w-full">
            <input
              id="password"
              type={!isVisible ? "text" : "password"}
              required
              placeholder="Masukkan kata sandi anda..."
              className="input-lapor p-0"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <label className="swap absolute right-0 top-0 z-0">
              <input
                type="checkbox"
                onChange={(e) =>
                  e.target.checked ? setIsVisible(false) : setIsVisible(true)
                }
              />
              {/* password visible */}
              <Image
                src="/icon/visible.svg"
                width={24}
                height={24}
                alt="visible icon"
                className="swap-off"
              />
              {/* password invisible*/}
              <Image
                src="/icon/invisible.svg"
                width={24}
                height={24}
                alt="invisible icon"
                className="swap-on"
              />
            </label>
          </div>
          <hr className="w-full -mt-[1px] h-[2px] bg-primary" />
        </div>
        <button type="submit" className="btn btn-green btn-xs h-9">
          Simpan
        </button>
      </div>

      <input
        type="checkbox"
        id="my_modal_11"
        className="modal-toggle"
        checked={showModal ? true : false}
      />
      <div className="modal">
        <div className="modal-box w-[276px] mx-[42px] flex flex-col justify-center items-center">
          <label
            htmlFor="my_modal_11"
            onClick={() => setShowModal(false)}
            className="btn btn-sm btn-circle btn-ghost text-black absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-[15px] text-center text-primary">
            Tersimpan
          </h3>
          <Image
            src="/icon/icon-modal.svg"
            width={141}
            height={137}
            alt="icon modal"
          />
          <div className="modal-action">
            <label
              htmlFor="my_modal_11"
              onClick={() => setShowModal(false)}
              className="btn btn-green btn-sm font-medium text-xs"
            >
              Bagus!
            </label>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormProfil;
