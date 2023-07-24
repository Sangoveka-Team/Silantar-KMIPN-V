"use client";
import Dropdown from "@/components/lapor/Dropdown";
import Image from "next/image";
import Link from "next/link";
import {listDaerah, listRole} from "@/data";
import {useState} from "react";

const AkunDetail = ({params}) => {
  const [img, setImg] = useState(null);
  const [daerah, setDaerah] = useState("");
  const [role, setRole] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleImage = (e) => {
    const data = e.target.files[0];
    setImg(URL.createObjectURL(data));
    setShowModal(true);
  };
  return (
    <div className="mt-[18px] ml-[21px] mr-[31px] max-w-[1059px]">
      <div className="inline-block">
        <div className="font-bold text-[22px] border border-primary bg-white rounded-2xl w-auto px-4 py-[3px]">
          <Link
            href="/dashboard"
            className="hover:underline underline-offset-2"
          >
            <Image
              src="/icon/arrow-left.svg"
              width={30}
              height={28}
              alt="arrow left"
              className="inline -mt-1 mr-2"
            />
            <span>Dashboard</span>
          </Link>
          <span className="ml-[6px]">
            / <span className="text-primary">Simon Izzacus Nababan </span>
          </span>
        </div>
      </div>
      <div className="mt-[19px]">
        <div className="pt-[109px] pr-[109px] pl-[113px] pb-[75px] bg-white rounded-[20px] flex gap-[42px] border border-primary">
          <div className="flex">
            <div className="avatar relative">
              <label className="absolute w-[228px] h-[228px] overflow-hidden z-50 rounded-full flex items-center justify-center cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  className="opacity-0 hidden"
                  onChange={handleImage}
                />
              </label>
              <div className="w-[228px] h-[228px] border-2 border-primary rounded-full relative">
                <Image
                  src={img ? img : "/dashboard/3.jpg"}
                  width={228}
                  height={228}
                  alt="user profile"
                  className="object-contain"
                />
              </div>
              <div className="absolute bottom-12 right-2 border-2 border-primary rounded-full bg-white w-[51px] h-[51px]">
                <div className="w-[29px] h-[28px] mt-[10px] ml-2">
                  <Image
                    src="/icon/upload.svg"
                    width={29}
                    height={28}
                    alt="icon upload"
                  />
                </div>
              </div>
            </div>
          </div>
          <form className="w-full">
            <div className="flex flex-wrap gap-y-[11px]">
              <div className="flex flex-col gap-[5px] w-1/2">
                <label className="text-primary font-medium text-xl">
                  Nama Lengkap
                </label>
                <div className="flex">
                  <input
                    type="text"
                    required
                    placeholder="nama lengkap..."
                    className="input-lapor pl-0 text-[15px]"
                  />
                </div>
                <hr className="w-[269px] h-[2px] bg-primary" />
              </div>
              <div className="flex flex-col gap-[5px] w-1/2">
                <label className="text-primary font-medium text-xl">
                  Nomor Ponsel
                </label>
                <div className="flex">
                  <input
                    type="text"
                    required
                    placeholder="nomor ponsel..."
                    className="input-lapor pl-0 text-[15px]"
                  />
                </div>
                <hr className="w-[269px] h-[2px] bg-primary" />
              </div>
              <div className="flex flex-col gap-[5px] w-1/2">
                <label className="text-primary font-medium text-xl">
                  Akun Email
                </label>
                <div className="flex">
                  <input
                    type="email"
                    required
                    placeholder="email..."
                    className="input-lapor pl-0 text-[15px]"
                  />
                </div>
                <hr className="w-[269px] h-[2px] bg-primary" />
              </div>
              <div className="flex flex-col gap-[5px] w-1/2">
                <label className="text-primary font-medium text-xl">
                  Kata Sandi
                </label>
                <div className="flex">
                  <input
                    type="password"
                    required
                    placeholder="password..."
                    className="input-lapor pl-0 text-[15px]"
                  />
                </div>
                <hr className="w-[269px] h-[2px] bg-primary" />
              </div>
              <div className="flex flex-col gap-[5px] w-1/2">
                <label className="text-primary font-bold text-sm">Level</label>
                <div className="flex [&>.dropdown]:pl-0 [&>.dropdown_.dropdown-content]:ml-0 [&>.dropdown_.swap]:right-2">
                  <Dropdown
                    listDatas={listRole}
                    input={role}
                    setInput={setRole}
                    placeholder={"role..."}
                  />
                </div>
                <hr className="w-[269px] h-[2px] bg-primary" />
              </div>
              <div className="flex flex-col gap-[5px] w-1/2">
                <label className="text-primary font-bold text-sm">Daerah</label>
                <div className="flex [&>.dropdown]:pl-0 [&>.dropdown_.dropdown-content]:ml-0">
                  <Dropdown
                    listDatas={listDaerah}
                    input={daerah}
                    setInput={setDaerah}
                    placeholder={"daerah..."}
                  />
                </div>
                <hr className="w-full h-[2px] bg-primary" />
              </div>
              <div className="mt-[19px] flex justify-between w-full">
                <div className="text-primary font-semibold text-xl self-center">
                  Poin : <span className="text-black">10000</span>
                </div>
                <div>
                  <button
                    type="button"
                    className="btn btn-green btn-sm py-[9px] px-3 h-[46px] shadow-sm bg-[#DC3545] hover:bg-[#a0232f] rounded-[5px] text-xl font-medium"
                  >
                    Hapus Akun
                  </button>
                  <button
                    type="button"
                    className="btn btn-green btn-sm ml-[30px] py-[9px] px-[33px] h-[46px] shadow-sm rounded-[5px] text-xl font-medium"
                  >
                    Simpan
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AkunDetail;
