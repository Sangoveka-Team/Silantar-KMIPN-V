"use client";

import Image from "next/image";
import {useState} from "react";

const FormProfil = () => {
  const [img, setImg] = useState(null);
  const [nama, setNama] = useState("Aryo Suryono");
  const [tel, setTel] = useState("083982478246");
  const [email, setEmail] = useState("Aryo.S@gmail.com");
  const [password, setPassword] = useState("barangja");

  const handleImage = (e) => {
    const data = e.target.files[0];
    setImg(URL.createObjectURL(data));
  };

  return (
    <div className="mt-[49px] py-3 px-[9px] w-[294px] bg-white border border-primary rounded-[5px] xs:mx-auto">
      <div className="flex justify-center w-full">
        <div className="avatar relative">
          <label className="absolute w-[117px] overflow-hidden z-50 h-full rounded-full flex items-center justify-center cursor-pointer">
            <input
              type="file"
              accept="image/*"
              className="opacity-0"
              onChange={handleImage}
            />
          </label>
          <div className="w-[117px] border-2 border-primary rounded-full relative">
            <Image
              src={img ? img : "/dashboard/3.jpg"}
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
          <label className="text-primary font-bold text-xs mb-[5px]">
            Nama Lengkap
          </label>
          <div className="flex">
            <input
              type="text"
              required
              className="w-full text-[10px] border-none focus:outline-none font-bold"
              onChange={(e) => setNama(e.target.value)}
              value={nama}
            />
          </div>
          <hr className="w-full -mt-[1px] h-[2px] bg-primary" />
        </div>
        <div className="flex flex-col">
          <label className="text-primary font-bold text-xs mb-[5px]">
            Nomor Ponsel
          </label>
          <div className="flex">
            <input
              type="text"
              required
              className="w-full text-[10px] border-none focus:outline-none font-bold"
              onChange={(e) => setTel(e.target.value)}
              value={tel}
            />
          </div>
          <hr className="w-full -mt-[1px] h-[2px] bg-primary" />
        </div>
        <div className="flex flex-col">
          <label className="text-primary font-bold text-xs mb-[5px]">
            Akun Email
          </label>
          <div className="flex">
            <input
              type="email"
              required
              disabled
              className="w-full text-[10px] border-none focus:outline-none font-bold input-disabled"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <hr className="w-full -mt-[1px] h-[2px] bg-primary" />
        </div>
        <div className="flex flex-col">
          <label className="text-primary font-bold text-xs mb-[5px]">
            Kata Sandi
          </label>
          <div className="flex">
            <input
              type="password"
              required
              className="w-full text-[10px] border-none focus:outline-none font-bold"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <hr className="w-full -mt-[1px] h-[2px] bg-primary" />
        </div>
        <button type="submit" className="btn btn-green btn-xs h-9">
          Simpan
        </button>
      </div>
    </div>
  );
};

export default FormProfil;
